(ns active-graphql.core-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [active-graphql.core :as c]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 1 1))))

(deftest directive-test
  (let [d1 (c/make-directive "foo" [])
        d2 (c/make-directive "bar" [1 2 3])]
    (is (c/directives? [d1 d2]))
    (is (c/directives? []))))

(deftest type-test
  (let [string-type (c/make-named-type "string" false)
        string-type-null (c/make-named-type "string" true)
        string-list-type (c/make-list-type string-type
                                           false)]
    (is (c/type? string-type))
    (is (c/type? string-type-null))
    (is (c/type? string-list-type))
    (is (c/non-null-type? string-type))
    (is (not (c/non-null-type? string-type-null)))))
