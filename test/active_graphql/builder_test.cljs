(ns active-graphql.builder-test
  (:require [active-graphql.builder :as b]
            [active-graphql.core :as c]
            [cljs.test :as t :include-macros true]))

(t/deftest wrap-in-graphql-arg-test
  (t/testing "with valid arguments"
    (t/is (= (c/int-arg 1) (b/wrap-in-graphql-arg 1)))
    (t/is (= (c/float-arg 1.2) (b/wrap-in-graphql-arg 1.2)))
    (t/is (= (c/boolean-arg true) (b/wrap-in-graphql-arg true)))
    (t/is (= (c/boolean-arg false) (b/wrap-in-graphql-arg false)))
    (t/is (= (c/string-arg "foobar") (b/wrap-in-graphql-arg "foobar")))
    (t/is (= (c/list-arg (list (c/int-arg 23) (c/int-arg 42))) (b/wrap-in-graphql-arg (list 23 42 ))))
    (t/is (= (c/input-object-arg {:foo (c/int-arg 1) :bar (c/int-arg 2)}) (b/wrap-in-graphql-arg {:foo 1 :bar 2})))
    )
  (t/testing "with invalid arguments, it should throw a js error with the correct message"
    (t/testing "testing with nil"
      (try (b/wrap-in-graphql-arg nil)
           (catch js/Error e
             (t/is (= (.-message e)
                      "wrap-in-graphql-arg: expected valid value but got nil")))))
    (t/testing "testing with unsupported value type"
      (try (b/wrap-in-graphql-arg #{"a" "b"})
           (catch js/Error e
             (t/is (= (.-message e)
                      "wrap-in-graphql-arg: value of unsupported type (got #{\"a\" \"b\"})")))))))

(t/deftest simple-field-test
  (let [expectation (c/make-field nil "user" '() nil
                                  [(c/make-field nil "firstName" '() nil nil)
                                   (c/make-field nil "lastName" '() nil nil)])]
    (t/testing "simple fields"
      (t/testing "using strings"
        (t/is (= expectation (b/field "user" "firstName" "lastName"))))
      (t/testing "using keywords"
        (t/is (= expectation (b/field :user :firstName :lastName)))))))

(t/deftest aliased-field-test
  (let [expectation
        (c/make-field nil "user" '() nil
                      [(c/make-field "first" "firstName" '() nil nil)
                       (c/make-field "last" "lastName" '() nil nil)])]
    (t/testing "fields with aliases"
      (t/testing "using strings"
        (t/is (= expectation
                 (b/field "user" ["first" "firstName"] ["last" "lastName"]))))
      (t/testing "using keywords"
        (t/is (= expectation
                 (b/field :user [:first :firstName] [:last :lastName])))))))

(t/deftest nested-field-test
  (let [expectation
        (c/make-field nil "user" '() nil
                      [(c/make-field nil "firstName" '() nil nil)
                       (c/make-field nil "lastName" '() nil nil)
                       (c/make-field
                        nil "address" '() nil
                        [(c/make-field nil "zipCode" '() nil nil)])])]
    (t/testing "nested fields"
      (t/testing "using strings"
        (t/is (= expectation
               (b/field "user" "firstName" "lastName"
                        (b/field "address" "zipCode")))))
      (t/testing "using keywords"
        (t/is (= expectation
                 (b/field :user :firstName :lastName
                          (b/field :address :zipCode))))))))

(t/deftest nested-aliased-field-test
  (let [expectation
        (c/make-field nil "user" '() nil
                      [(c/make-field nil "firstName" '() nil nil)
                       (c/make-field "name" "lastName" '() nil nil)
                       (c/make-field
                        nil "address" '() nil
                        [(c/make-field "zip" "zipCode" '() nil nil)])])]
    (t/testing "nested fields"
      (t/testing "using strings"
        (t/is (= expectation
               (b/field "user" "firstName" ["name" "lastName"]
                        (b/field "address" ["zip" "zipCode"])))))
      (t/testing "using keywords"
        (t/is (= expectation
                 (b/field :user :firstName [:name :lastName]
                          (b/field :address [:zip :zipCode]))))))))

(t/deftest simple-arguments-test
  (let [expectation
        (c/make-field nil "user"
                      (list
                       (c/make-argument "id" (c/int-arg 42)))
                      nil
                      [(c/make-field nil "firstName" '() nil nil)
                       (c/make-field nil "lastName" '() nil nil)])]
    (t/testing "with arguments"
      (t/testing "using strings"
        (t/is (= expectation
                 (b/field "user" {"id" 42} "firstName" "lastName"))))
      (t/testing "using keywords"
        (t/is (= expectation
                 (b/field :user {:id 42} :firstName :lastName)))))))

(t/deftest list-argument-test
  (let [expectation
        (c/make-field nil "user"
                      (list
                        (c/make-argument "id-lis" (c/list-arg (list (c/int-arg 23) (c/int-arg 42)))))
                      nil
                      [(c/make-field nil "firstName" '() nil nil)
                       (c/make-field nil "lastName" '() nil nil)])]
    (t/testing "with list argument"
      (t/testing "using keywords"
        (t/is (= expectation
                 (b/field :user {:id-lis (list 23 42)} :firstName :lastName)))))))

(t/deftest nested-arguments-test
  (let [expectation
        (c/make-field nil "user"
                      (list
                       (c/make-argument "id" (c/int-arg 42)))
                      nil
                      [(c/make-field nil "firstName" '() nil nil) 
                       (c/make-field nil "lastName"
                                     (list
                                      (c/make-argument "id" (c/int-arg 42)))
                                     nil [])])]
    (t/testing "with arguments"
      (t/testing "using strings"
        (t/is (= expectation
               (b/field "user" {"id" 42}
                        "firstName"
                        (b/field "lastName" {"id" 42})))))
      (t/testing "using keywords"
        (t/is (= expectation
                 (b/field :user {:id 42} :firstName
                          (b/field :lastName {:id 42}))))))))

(t/deftest field-using-apply
  (t/testing "using strings"
    (t/is (= (b/field "user" "firstName" "lastName")
             (apply b/field "user" ["firstName" "lastName"])))
    (t/is (= (b/field "user" {"id" 42} "firstName" "lastName")
             (apply b/field "user" {"id" 42} ["firstName" "lastName"]))))
  (t/testing "using strings"
    (t/is (= (b/field :user :firstName :lastName)
             (apply b/field :user [:firstName :lastName])))
    (t/is (= (b/field :user {:id 42} :firstName :lastName)
             (apply b/field :user {:id 42} [:firstName :lastName])))))

(t/deftest field-with-alias
  (let [expectation
        (c/make-field "alias-foo" "foo" (list) nil [])]
       (t/testing "using alias"
         (t/is (= expectation
                  (b/field [:alias-foo :foo]))))))

(t/deftest field-with-inline-fragment
  (let [expectation (c/make-inline-fragment "foo-type" nil (list (c/make-field nil "foo-name" '() nil [])))]
    (t/testing "using inline-fragments"
      (t/is (= expectation (b/inline-fragment "foo-type" (b/field :foo-name)))))))

;; some tests for resulting strings.
(t/deftest simple-request-test
  (t/testing "with one field"
    (t/is (= (b/request (b/query (b/field :foo :bar)))
             "{\"query\":\"query  { foo { bar  } }\"}") )))

(t/deftest simple-argument-test
  (t/testing "with argument"
    (t/is (= (b/request (b/mutation (b/field :foo {:obj "1"})))
             "{\"query\":\"mutation  { foo(obj: \\\"1\\\")  }\"}"))))

(t/deftest simple-input-object-test
  (t/testing "with simple input object argument"
    (t/is (= (b/request (b/mutation (b/field :foo {:obj {:v "1"}})))
             "{\"query\":\"mutation  { foo(obj: {v: \\\"1\\\"})  }\"}"))))

(t/deftest simple-input-object-test-with-enum
  (t/testing "with simple input object argument with enum"
    (t/is (= (b/request (b/mutation (b/field :foo {:obj {:v :Klient}})))
             "{\"query\":\"mutation  { foo(obj: {v: Klient})  }\"}"))))

