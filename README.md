# active-graphql

A ClojureScript library for programmatically building GraphQL query strings. Inlcudes a "micro" DSL for constructing more readable queries.

## Usage

Some examples for constructing queries using `active-graphql`:

```Clojure
(ns active-graphql.examples
  (:require [active-graphql.builder :as b])

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
(b/query (b/field :user
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

;; Utilizing arguments to a query:
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

```


## License

Copyright © 2017 Active Group GmbH

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
