(ns ^{:doc "Helper functions for easier construction of graphql queries. Most
importantly, provides the functions `field`, `query` and `mutation` (refer to
`active-graphql.examples` for usage)."}
    active-graphql.builder
  (:require [active-graphql.core :as g]))

(defn wrap-in-graphql-arg
  "Takes a `value` in `#{int float boolean string map coll keyword}` and wraps it in a
  graphql value."
  [value]
  (cond
    (nil? value) (g/nil-arg)
    (integer? value) (g/int-arg value)
    (float? value) (g/float-arg value)
    (boolean? value) (g/boolean-arg value)
    (string? value) (g/string-arg value)
    (keyword? value) (g/enum-arg value)
    (map? value) (g/input-object-arg (into {} (map (fn [[k v]]
                                                     [k (wrap-in-graphql-arg v)]
                                                     )) value))
    (and (not (map? value)) (coll? value))  (g/list-arg (map wrap-in-graphql-arg value)) ;; arrays, vectors, lists, ... make them all to list-arg
    :else (throw (js/Error. (str "wrap-in-graphql-arg: value of unsupported type (got " value ")")))))

(defn select
  "Takes a map or seq containing pairs of keys (either keyword or string) and
  values (in `#{int float boolean string}`) and returns a map prepared for
  usage as a graphql map. The key is converted to a string, the val is wrapped
  via `active-graphql.builder/wrap-in-graphql-arg`."
  [arg-pairs]
  (into {} (map (fn [[k v]]
                  [(name k) (wrap-in-graphql-arg v)]) arg-pairs)))

(defn project
  "Takes a seq (list or vector) or `args` and converts them to
  `active-graphql.core/field*`s. Each entry is either:

  * a keyword or string
  * a vector or `[alias field-name]` (i.e. `[:id :userId]`)
  * a `active-graphql/field`
  * a `active-graphql/inline-fragment`

  Converts `fields` recursively."
  [args]
  (mapv (fn [key]
          (cond
            (vector? key) (let [[alias field] key]
                            (g/atomic-field (name alias) (name field) nil))
            (g/field? key)
            key

            (g/inline-fragment? key)
            key

            :else (g/atomic-field nil (name key) nil)))
        args))

(defn compile
  "Takes a graphql method contructor function (either `query` or `mutation`)
  and returns a grapqhl document with the fields `qs` that can be printed via
  `print-document`."
  [constr qs]
  (g/graphql (constr "" qs)))

(defn query
  "Takes an arbitrary number of `field` and wraps them in a query document."
  [& qs]
  (compile g/query qs))

(defn mutation
  "Takes an arbitrary number of `field` and wraps them in a mutation document."
  [& qs]
  (compile g/mutation qs))

(defn subscription
  "Takes a single `field` and wraps it in a subscription document."
  [q]
  (compile g/subscription q))

(defn field
  "Takes the name of a graphql query or mutation `the-name` and a number of
  args. `args` can be elements of type keyword, string, inline-fragments or `field`s themselves.
  If `the-name` is a vector, it's first element is the alias for the query, the
  second one the 'real' name."
  [the-name & args]
  (let [[sel args] (if (and (not (g/field? (first args)))
                            (not (g/inline-fragment? (first args)))
                            (map? (first args)))
                     [(first args) (rest args)]
                     [nil args])
        [alias nom] (if (vector? the-name)
                      [(name (first the-name))  (name (second the-name))]
                      [nil (name the-name) ])]
    (g/field* alias nom (select sel) (project args))))

(defn inline-fragment
  [type & selections]
  (g/inline-fragment* type (project selections)))

(defn request
  "`request` takes a graphql `document` and returns a stringified version ready
  for sending to an endpoint.

  Examples:

  ```
  (request (query (field :foo :bar)))
  ;; => \"\\\"query\\\": \\\"query { foo { bar }}\\\"\"

  (request (query (field :foo {:obj (stringify {:name \"wilhelm\"})} :bar)))
  ;; => \"\\\"query\\\": \\\"query { foo(obj: \\\\\\\"foo\\\\\\\":\\\\\\\"bar\\\\\\\"}\\\\\\\") { bar }\\\"
  ```"
  [document]
  (g/create-request document))
