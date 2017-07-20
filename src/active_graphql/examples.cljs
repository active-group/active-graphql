(ns active-graphql.examples
  (:require [active-graphql.builder :as b]))

(b/query (b/field "user" "firstName" "lastName"))
;; =>
;; query {
;;   user {
;;     firstName
;;     lastName
;;   }
;; }

;; Keywords can be used instead of strings
(b/query (b/field :user :firstName :lastName))
;; =>
;; query {
;;   user {
;;     firstName
;;     lastName
;;   }
;; }

;; Aliasing
(b/query (b/field :user {:id 42}
                  [:name :firstName]))
;; =>
;; query {
;;   user {
;;     name: firstName
;;   }
;; }

(b/mutation (b/field "user" "firstName" "lastName"))
;; =>
;; mutation {
;;   user {
;;     firstName
;;     lastName
;;   }
;; }

(b/query (b/field "user" {"id" 42} "firstName"))
;; =>
;; query {
;;   user(id: 42) {
;;     firstName
;;   }
;; }

;; Nesting
(b/query (b/field "user" {"id" 42} "firstName")
         (b/field "hardware" "type" "model"))
;; =>
;; query {
;;   user(id: 42) {
;;     firstName
;;   }
;;   hardware {
;;     type
;;     model
;;   }
;; }

;; Deeper nesting
(b/query (b/field "user" {"id" 42}
                  "firstName"
                  "other")
         (b/field "person"
                  {"firstName" "Marco"}
                  (b/field "address"
                           "street"
                           "zipCode")))
;; query {
;;   user(id: 42) {
;;     firstName
;;     other
;;   }
;;   person(firstName: "Marco") {
;;     address {
;;       street
;;       zipCode
;;     }
;;   }
;; }
