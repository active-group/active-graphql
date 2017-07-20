# active-graphql

A ClojureScript library for programmatically building GraphQL query strings. Inlcudes a "micro" DSL for constructing more readable queries.

Example, using [the offical docs](http://graphql.org/learn/queries/):

```Clojure
(ns your.name.space
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
;; =>
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

## Usage

FIXME

## License

Copyright © 2017 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
