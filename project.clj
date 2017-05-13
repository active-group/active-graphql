(defproject active-graphql "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 [active-clojure "0.17.0"]]

  :plugins [[lein-cljsbuild "1.1.6"]
            [lein-doo "0.1.6"]]

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
