(ns active-graphql.test-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            active-graphql.core-test
            active-graphql.builder-test))

(doo-tests 'active-graphql.core-test
           'active-graphql.builder-test)
