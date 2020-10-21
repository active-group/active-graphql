(defproject de.active-group/active-graphql "0.2.1"
  :description "A ClojureScript library for programmatically building GraphQL query strings"
  :url "https://github.com/active-group/active-graphql"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.439"]
                 [de.active-group/active-clojure  "0.35.0" :exclusions [[active-clojure]]]]

  :plugins [[lein-cljsbuild "1.1.6"]
            [lein-doo "0.1.10"]]

  :profiles {;; Make sure nrepl is working smoothly from within CIDER when
             ;; working with cljs.
             :dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.10"]]
                   :repl-options
                   {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}}

  :cljsbuild {:builds [{:id "test"
                        :source-paths ["src" "test"]
                        :compiler{:main active-graphql.test-runner
                                  :output-to "target/active-graphql-test.js"
                                  :output-dir "target/out"
                                  :optimizations :none}}]}

  :doo {:build "test"})
