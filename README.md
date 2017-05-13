# active-graphql

A ClojureScript library for programmatically building GraphQL query strings.

Example, using [the offical docs](http://graphql.org/learn/queries/):

```Clojure
(ns your.name.space
  (:require [active-graphql.builder :as b]))


(def hero-name-query (b/graphql
                      (b/query
                       (b/select (b/field  "name"))
                       {:name "hero"})))

(b/build hero-name-query)  ;; => "query { hero { name }}", ignoring insignificant whitespace/newlines


(def hero-and-friend (b/graphql
                      (b/query (b/select (b/field "name")
                                         (b/field "friends"
                                                  {:select (b/select (b/field "name"))}))
                               {:name "hero"})))

(b/build hero-and-friend)  ;; "query { hero {name firends { name }}}"


;; Arguments example
(def hero-arguments-query
  (b/graphql
   (b/query
    (b/select
     (b/field "human" {:args [["id" (b/$string "1000")]]
                       :select (b/select (b/field "name")
                                         (b/field "height"))})))))

(b/build hero-arguments-query)  ;; => "query { human(id: \"1000\") {name height}}"

```

## Usage

FIXME

## License

Copyright © 2017 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
