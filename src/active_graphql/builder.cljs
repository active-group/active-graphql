(ns ^{:doc "Helper functions for easier construction of graphql queries. Most
importantly, provides the functions `field`, `query` and `mutation` (refer to
`active-graphql.examples` for usage)."}
    active-graphql.builder
  (:require [active-graphql.core :as g]
            [active.clojure.condition :as c]))

(defn ^{:private true} wrap-in-graphql-arg
  "Takes a `value` in `#{int float boolean string}` and wraps it in a graphql
  value."
  [value]
  (cond
    (integer? value) (g/int-arg value)
    (float? value) (g/float-arg value)
    (boolean? value) (g/boolean-arg value)
    (string? value) (g/string-arg value)
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
  [constr qs]
  (g/graphql (constr "" qs)))

(defn query
  [& qs]
  (compile g/query qs))

(defn mutation
  [& qs]
  (compile g/mutation qs))

(defn field
  [the-name & args]
  (let [[sel args] (if (and (not (g/field? (first args))) (map? (first args)))
                     [(first args) (rest args)]
                     [nil args])]
    (g/field* nil (name the-name) (select sel) (project args))))
