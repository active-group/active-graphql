(ns active-graphql.builder
  (:require [active-graphql.core :as g]))

(defn wrap-in-graphql-arg
  [value]
  (cond
    (integer? value) (g/int-arg value)
    (float? value) (g/float-arg value)
    (boolean? value) (g/boolean-arg value)
    (string? value) (g/string-arg value)))

(defn select
  [arg-pairs]
  (into {} (map (fn [[k v]]
                  [(name k) (wrap-in-graphql-arg v)]) arg-pairs)))

(defn project
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
  (g/print-document (g/graphql (constr "" qs))))

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
