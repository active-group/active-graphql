(ns active-graphql.core
   (:require [active.clojure.cljs.record :as r :include-macros true]
             [active.clojure.lens :as lens]
             [clojure.string :as string]))

;; fixme: definitions? or only one definition? or split up into definition and fragmentdefinitions for better handling?
(r/define-record-type document
  (make-document definitions)
  document?
  [definitions document-definitions])


(r/define-record-type operation-definition
  (make-new-operation-definition definition)
  operation-definition?
  [definition operation-definition-definition])


(r/define-record-type fragment-definition
  (make-fragment-definition f-name type-condition directives selection-set)
  fragment-definition?
  [f-name fragment-name
   type-condition fragment-type-condition
   directives fragment-directives
   selection-set fragment-selection-set])

(r/define-record-type operation-type-query
  (make-operation-type-query operation-type q-name variable-definitions directives selection-set)
  operation-type-query?
  [operation-type operation-type-operation-type
   q-name operation-type-query-name
   variable-definitions operation-type-query-variable-definitions
   directives operation-type-query-directives
   selection-set operation-type-query-selection-set])

(r/define-record-type field
  (make-field f-alias f-name f-arguments directives selection-set)
  field?
  [f-alias field-alias
   f-name field-name
   f-arguments field-arguments
   directives field-directives
   selection-set field-selection-set])

(r/define-record-type inline-fragment
  (make-inline-fragment type directives selection-set)
  inline-fragment?
  [type inline-fragment-type
   directives inline-fragment-directives
   selection-set inline-fragment-selection-set])

(r/define-record-type int-argument
  (make-int-argument arg) int-argument?
  [arg int-argument-arg])

(r/define-record-type nil-argument
  (make-nil-argument) nil-argument?
  [])

(r/define-record-type float-argument
  (make-float-argument arg) float-argument?
  [arg float-argument-arg])

(r/define-record-type string-argument
  (make-string-argument arg)
  string-argument?
  [arg string-argument-arg])


 (r/define-record-type boolean-argument
   (make-boolean-argument arg)
   boolean-argument?
   [arg boolean-argument-arg])

(r/define-record-type enum-argument
    (make-enum-argument arg)
    enum-argument?
    [arg enum-argument-arg])

(r/define-record-type list-argument
  (make-list-argument arg)
  list-argument?
  [arg list-argument-arg])

(r/define-record-type input-object-argument
  (make-input-object-argument arg)
  input-object-argument?
  [arg input-object-argument-arg])

(r/define-record-type argument
  (make-argument a-name value)
  argument?
  [a-name argument-name
   value argument-value])

(r/define-record-type result
  (make-result data errors)
  result?
  [data result-data
   errors result-errors])

(defn valid-result? [result]
  (and (result? result)
       (empty? (result-errors result))))

(defn int-arg
  [arg]
  (make-int-argument arg))

(defn nil-arg
  []
  (make-nil-argument))

(defn float-arg
  [arg]
  (make-float-argument arg))

(defn string-arg
  [arg]
  (make-string-argument arg))

(defn enum-arg
  [arg]
  (make-enum-argument arg))

(defn list-arg
  [arg]
  (make-list-argument arg))

(defn input-object-arg
  [arg]
  (make-input-object-argument arg))


(defn boolean-arg
  [arg]
  (make-boolean-argument arg))

(defn arguments-from-map
  [args]
  (map (fn [entry]
         (make-argument (first entry) (second entry)))
       (seq args)))

(defn field*
  [alias name arguments selection-list]
  (make-field alias name (arguments-from-map arguments) nil (when-not (nil? selection-list)
                                                              nil
                                                              selection-list)))

(defn inline-fragment* [type selection-list]
  (make-inline-fragment type nil selection-list))

(defn atomic-field
  [alias name arguments]
  (field* alias name arguments nil))

;; a query is a operation-definition in term of the graqhl-grammar
(defn query
  [name selections]
  (make-new-operation-definition (make-operation-type-query "query" name nil nil selections)))

(defn mutation
  [name selections]
  (make-new-operation-definition (make-operation-type-query "mutation" name nil nil selections)))

(defn subscription
  [name selection]
  (make-new-operation-definition (make-operation-type-query "subscription" name nil nil [selection])))

(defn graphql
  [& definitions]
  (make-document definitions))

(defn add-selections-to-query-document
  [doc-query add-selections]
  (let [doc-defs (document-definitions doc-query)
        op-def (operation-definition-definition (first doc-defs))
        selections (lens/yank op-def operation-type-query-selection-set)]
    (graphql (make-new-operation-definition
               (lens/shove op-def operation-type-query-selection-set (concat selections add-selections))))))

(defn stringify
   "Takes an arbitrary clojurescript value and returns a JSON.stringify'ed string
  representation of it."
   [obj]
   (.stringify js/JSON (clj->js obj)))

(defn print-arg-value
  [arg-value]
  (cond
    (nil-argument? arg-value) (stringify nil)
    (int-argument? arg-value) (if arg-value (str (int-argument-arg arg-value)) "")
    (float-argument? arg-value) (if arg-value (str (float-argument-arg arg-value)) "")
    (string-argument? arg-value) (if arg-value (stringify (string-argument-arg arg-value)))
    (boolean-argument? arg-value) (str (boolean-argument-arg arg-value))
    (list-argument? arg-value) (str "[" (apply str
                                               (clojure.string/join ","
                                                                    (map print-arg-value (list-argument-arg arg-value)))
                                     "]"))
    (enum-argument? arg-value) (name (enum-argument-arg arg-value))

    (input-object-argument? arg-value)
    (str "{"
         (apply str
                (clojure.string/join "," (map (fn [[key value]]
                                                (str (name key) ": "
                                                     (print-arg-value value)))
                                              (input-object-argument-arg arg-value))))
         "}")
    ))

(defn print-argument
  [argument]
  (str (argument-name argument) ": " (print-arg-value (argument-value argument)) ))

(declare print-field)
(declare print-inline-fragment)
(defn print-selection
  [selection]
  (cond
    (field? selection) (print-field selection)
    (inline-fragment? selection) (print-inline-fragment selection)))

(defn print-selection-set
  [selection-set]
  (when (seq selection-set)
    (str "{ "
         (string/join "\n" (map print-selection selection-set))
         " }")))

(defn print-field
  [field]
  (str
   (if-let [alias (field-alias field)]
     (str alias ":")
     "")
   (field-name field)
   (if (empty? (field-arguments field))
     ""
     (str "(" (string/join "," (map print-argument (field-arguments field))) ")") )
   " "
   (print-selection-set (field-selection-set field))))

(defn print-inline-fragment [inline-fragment]
  (let [type (inline-fragment-type inline-fragment)
        selection-set (inline-fragment-selection-set inline-fragment)]

    (str "... on " type " "
         (print-selection-set selection-set))
    ))

(defn print-operation-type-query
  [operation-type-query]
  (str (when-let [qt (operation-type-operation-type operation-type-query)]
         (str qt)) " " (operation-type-query-name operation-type-query) " "
       (print-selection-set (operation-type-query-selection-set operation-type-query))))

(defn print-operation-definition
  [definition]
  (cond
    (list? definition) (print-selection-set definition)
    (operation-type-query? definition) (print-operation-type-query definition)))


(defn print-document-definition
  [definition]
  (cond
    (operation-definition? definition)
    (print-operation-definition
     (operation-definition-definition definition))
    (fragment-definition? definition) "fragment"))

(defn print-document
  "Takes a query document and converts it into a query string."
  [document]
  (string/join "\n" (map print-document-definition (document-definitions document))))

(defn create-request
  "Takes a query document and returns a stringified (e.g. fully escaped version
  of it), ready to send to a grapqhl endpoint."
  [document]
  (let [doc (print-document document)]
    (stringify {"query" doc})))
