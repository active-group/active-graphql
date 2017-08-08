(ns ^{:doc "Helper functions for easier construction of graphql queries. Most
importantly, provides the functions `field`, `query` and `mutation` (refer to
`active-graphql.examples` for usage)."}
    active-graphql.builder
  (:require [active-graphql.core :as g]
            [active.clojure.condition :as c]))

(defn ^{:private true} wrap-in-graphql-arg
  "Takes a `value` in `#{int float boolean string map}` and wraps it in a
  graphql value. When encountering a map, convert it into a Javascript object
  and [[active-grpahl.core/stringify]] it."
  [value]
  (cond
    (integer? value) (g/int-arg value)
    (float? value) (g/float-arg value)
    (boolean? value) (g/boolean-arg value)
    (string? value) (g/string-arg value)
    (map? value) (g/string-arg (g/stringify value))
    :else (c/assertion-violation `wrap-in-graphql-arg
                                 "value of unsupported type" value)))

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

  Converts `fields` recursively."
  [args]
  (mapv (fn [key]
          (cond
            (vector? key) (let [[alias field] key]
                            (g/atomic-field (name alias) (name field) nil))
            (g/field? key)
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

(defn field
  "Takes the name of a graphql query or mutation `the-name` and a number of
  args. `args` can be elements of type keyword, string or `field`s themselves.
  If `the-name` is a vector, it's first element is the alias for the query, the
  second one the 'real' name."
  [the-name & args]
  (let [[sel args] (if (and (not (g/field? (first args))) (map? (first args)))
                     [(first args) (rest args)]
                     [nil args])
        [alias nom] (if (vector? the-name)
                      [(name (first the-name))  (name (second the-name))]
                      [nil (name the-name) ])]
    (g/field* alias nom (select sel) (project args))))

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
