(ns active-graphql.builder
  (:require [active-graphql.core :as c]
            [active.clojure.lens :as lens :include-macros true]))

;; Values
(defn $int
  [value]
  (c/make-int-value value))
(defn $float
  [value]
  (c/make-float-value value))
(defn $boolean
  [value]
  (c/make-boolean-value value))
(defn $string
  [value]
  (c/make-string-value value))
(def $null (c/make-null-value))
(defn $enum
  [value]
  (c/make-enum-value value))
(defn $list
  [& values]
  values)
(defn $object
  [values-map]
  (map (fn [[k v]]
         (c/make-object-field k v)) values-map))

(defn query
  [selection-set & [opts]]
  (let [variable-definitions (when-let [var-defs (:vars opts)]
                               (map (fn [[k v]]
                                      (c/make-variable-definition (c/make-variable k) v nil))
                                    var-defs))]
    (c/make-query (:name opts) variable-definitions nil selection-set)))

(defn mutation
  [selection-set & [opts]]
  (let [variable-definitions (when-let [var-defs (:vars opts)]
                               (map (fn [[k v]]
                                      (c/make-variable-definition (c/make-variable k) v nil))
                                    var-defs))]
    (c/make-mutation (:name opts) variable-definitions nil selection-set)))

(defn field
  [name & [opts]]
  (let [alias (when-let [a (:alias opts)]
                (c/make-alias a))
        args (when-let [args (:args opts)]
               (map (fn [[k v]] (c/make-argument k v)) args))]
    (c/make-field alias name args nil (:select opts))))

(defn select
  [& fields]
  (map #(c/make-selection % nil nil) fields))

(defn graphql
  [& defs]
  defs)

(defn build
  [query]
  (c/document->string query))
