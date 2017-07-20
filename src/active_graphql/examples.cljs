(ns active-graphql.examples
  (:require [active-graphql.builder :as b]))

(b/query (b/request "user" "firstName" "lastName"))
;; =>
;; query {
;;   user {
;;     firstName
;;     lastName
;;   }
;; }

(b/mutate (b/request "user" "firstName" "lastName"))
;; =>
;; mutation {
;;   user {
;;     firstName
;;     lastName
;;   }
;; }

(b/query (b/request "user" {"id" 42} "firstName"))
;; =>
;; query {
;;   user(id: 42) {
;;     firstName
;;   }
;; }

(b/query (b/request "user" {"id" 42} "firstName")
         (b/request "hardware" "type" "model"))
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

(b/query (b/request "user" {"id" 42}
                    "firstName"
                    "other")
         (b/request "person"
                    {"firstName" "Marco"}
                    (b/request "address"
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

