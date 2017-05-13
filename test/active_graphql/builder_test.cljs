(ns active-graphql.builder-test
  (:require [active-graphql.builder :as b]
            [active-graphql.core :as c]
            [cljs.test :as t :include-macros true]))


(t/deftest $object-test
  (t/is (= (list (c/make-object-field "foo" (b/$string "foo"))
                 (c/make-object-field "bar" (b/$boolean false)))
           (b/$object [["foo" (b/$string "foo")]
                       ["bar" (b/$boolean false)]]))))

;; Testing the queries from http://graphql.org/learn/queries/
(t/deftest queries-test
  (let [hero-name-query (b/graphql
                         (b/query
                          (b/select (b/field "name"))
                          {:name "hero"}))]
    (t/is (= (list
              (c/make-query
               "hero" nil nil
               (list
                (c/make-selection
                 (c/make-field nil "name" nil nil nil) nil nil))))
             hero-name-query))
    (t/is (= "query{\nhero {name}\n}"
             (b/build hero-name-query))))
  (let [hero-name-friends-query
        (b/graphql (b/query (b/select (b/field "name")
                                      (b/field "friends"
                                               {:select (b/select (b/field "name"))}))
                            {:name "hero"}))]
    (t/is (= (list
              (c/make-query
               "hero" nil nil
               (list
                (c/make-selection
                 (c/make-field nil "name" nil nil nil) nil nil)
                (c/make-selection
                 (c/make-field nil "friends" nil nil
                               (list
                                (c/make-selection
                                 (c/make-field nil "name" nil nil nil) nil nil)))
                 nil nil))))
             hero-name-friends-query))
    (t/is (= "query{\nhero {name\nfriends{name}}\n}"
             (b/build hero-name-friends-query)))))


(t/deftest arguments-test
  (let [q (b/graphql
           (b/query
            (b/select
             (b/field "human" {:args [["id" (b/$string "1000")]]
                               :select (b/select (b/field "name")
                                                 (b/field "height"))}))))]
    (t/is (= (list
              (c/make-query
               nil nil nil
               (list
                (c/make-selection
                 (c/make-field
                  nil "human"
                  (list
                   (c/make-argument "id" (c/make-string-value "1000")))
                  nil
                  (list (c/make-selection
                         (c/make-field nil "name" nil nil nil) nil nil)
                        (c/make-selection
                         (c/make-field nil "height" nil nil nil) nil nil)))
                 nil nil))))
             q))
    (t/is (= "query{human(id: \"1000\"){name\nheight}}"
             (b/build q)))))
