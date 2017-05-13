(ns active-graphql.core
   (:require [active.clojure.record :as r :include-macros true]
             [active.clojure.lens :as lens]
             [clojure.string :as string]))


;; 2.12 Directives
(r/define-record-type directive
  (make-directive name arguments) directive?
  [name directive-name
   arguments directive-arguments])

(defn directive->string
  [d]
  ;; TODO
  "")

(defn directives?
  [xs]
  (every? directive? xs))

(defn directives->string
  [ds]
  ;; TODO
  "")

;; 2.11 Input Types
(r/define-record-type named-type
  (make-named-type name null?) named-type?
  [name named-type-name
   null? named-type-null?])

(defn named-type->string
  [nt]
  (str (named-type-name nt)
       (when-not (named-type-null? nt) "!")))

(r/define-record-type list-type
  (make-list-type type null?) list-type?
  [type list-type-type
   null? list-type-null?])

(declare type->string)

(defn list-type->string
  [lt]
  (str "[" (type->string (list-type-type lt)) "]"
       (when-not (list-type-null? lt) "!")))

(defn non-null-type?
  [obj]
  (cond
    (named-type? obj) (not (named-type-null? obj))
    (list-type? obj) (not (list-type-null? obj))
    :else false))

(defn type?
  [obj]
  (or (named-type? obj) (list-type? obj) (non-null-type? obj)))

(defn type->string
  [t]
  (cond
    (named-type? t) (named-type->string t)
    (list-type? t) (list-type->string t)))

;; 2.10 Variables
(r/define-record-type variable
  (make-variable name) variable?
  [name variable-name])

(defn variable->string
  [v]
  (str "$" (variable-name v)))

(r/define-record-type default-value
  (make-default-value value) default-value?
  [value default-value-value])

(defn default-value->string
  [dv]
  (str "=" (default-value-value dv)))

(r/define-record-type variable-definition
  (make-variable-definition variable type ?default-value) variable-definition?
  [variable variable-definition-variable
   type variable-definition-type
   ?default-value variable-definition-?default-value])

(defn variable-definition->string
  [vd]
  (str (variable->string (variable-definition-variable vd))
       ":"
       (type->string (variable-definition-type vd))
       (when-let [dv (variable-definition-?default-value vd)]
         (default-value->string dv))))

(defn variable-definitions?
  [obj]
  (and (sequential? obj) (every? variable-definition? obj)))

(defn variable-definitions->string
  [vds]
  (apply str "(" (apply str (map variable-definition->string vds)) ")"))

;; 2.9.1 Int Value
(r/define-record-type int-value
  (make-int-value value) int-value?
  [value int-value-value])

(defn int-value->string
  [iv]
  (str (int-value-value iv)))

;; 2.9.2 Float Value
(r/define-record-type float-value
  (make-float-value value) float-value?
  [value float-value-value])

(defn float-value->string
  [fv]
  (str (float-value-value fv)))

;; 2.9.3 Boolean Value
(r/define-record-type boolean-value
  (make-boolean-value value) boolean-value?
  [value boolean-value-value])

(defn boolean-value->string
  [bv]
  (str (boolean-value-value bv)))

;; 2.9.4 String Value
(r/define-record-type string-value
  (make-string-value value) string-value?
  [value string-value-value])

(defn string-value->string
  [sv]
  (str "\"" (string-value-value sv) "\""))

;; 2.9.5 Null Value
(r/define-record-type null-value
  (make-null-value) null-value?
  [])

(defn null-value->string
  [nv]
  "null")

;; 2.9.6 Enum Value
(r/define-record-type enum-value
  (make-enum-value value) enum-value?
  [value enum-value-value])

(defn enum-value->string
  [ev]
  (str (enum-value-value ev)))

(declare value?)

;; 2.9.7 List Value
(defn list-value?
  [obj]
  (or (nil? obj)
      (and (seq obj) (every? value? obj))))

(defn list-value->string
  [lv]
  (str "[" (apply str (interpose ", " (map value->string lv))) "]"))

;; 2.9.8 Input Object Values
(r/define-record-type object-field
  (make-object-field name value) object-field?
  [name object-field-name
   value object-field-value])

(defn object-field->string
  [of]
  (str (object-field-name of) ":" (object-field-value of)))

(defn object-value?
  [obj]
  (or (nil? obj)
      (and (seq obj) (every? object-field? obj))))

(defn object-value->string
  [ov]
  (str "{" (map object-field->string ov) "}"))

;; 2.9 Input Values
(defn value?
  [obj]
  (or (variable? obj)
      (int-value? obj)
      (float-value? obj)
      (string-value? obj)
      (boolean-value? obj)
      (null-value? obj)
      (enum-value? obj)
      (list-value? obj)
      (object-value? obj)))

(defn value->string
  [obj]
  (cond
    (variable? obj) (variable->string obj)
    (int-value? obj) (int-value->string obj)
    (float-value? obj) (float-value->string obj)
    (string-value? obj) (string-value->string obj)
    (boolean-value? obj) (boolean-value->string obj)
    (null-value? obj) (null-value->string obj)
    (enum-value? obj) (enum-value->string obj)
    (list-value? obj) (list-value->string obj)
    (object-value? obj) (object-field->string obj)))

;; Skipping Fragments for now

;; 2.7 Field Alias
(r/define-record-type alias
  (make-alias name) alias?
  [name alias-name])

(defn alias->string
  [a]
  (str (alias-name a) ":"))

;; 2.6 Arguments
(r/define-record-type argument
  (make-argument name value) argument?
  [name argument-name
   value argument-value])

(defn argument->string
  [a]
  (str (argument-name a) ": " (value->string (argument-value a))))

(defn arguments?
  [xs]
  (every? argument? xs))

(defn arguments->string
  [as]
  (str "(" (apply str (interpose ", " (map argument->string as))) ")"))

;; 2.4 Selection Sets
(r/define-record-type selection
  (make-selection field fragment-spread inline-fragment) selection?
  [field selection-field
   fragment-spread selection-fragment-spread
   inline-fragment selection-inline-fragment])

(defn selection->string
  [sel]
  (field->string (selection-field sel)
       ;; NOTE Skip fragments for now
       ))

(defn selection-set?
  [obj]
  (and (seq obj) (every? selection? obj)))

(defn selection-set->string
  [sel-set]
  (str "{" (apply str (interpose "\n" (map selection->string sel-set))) "}"))

;; 2.5 Fields
(r/define-record-type field
  (make-field ?alias name ?arguments ?directives ?selection-set) field?
  [?alias field-?alias
   name field-name
   (?arguments field-?arguments field-?arguments-lens)
   (?directives field-?directives field-?directives-lens)
   (?selection-set field-?selection-set field-?selection-set-lens)])

(defn field->string
  [f]
  (str (when-let [alias (field-?alias f)]
         (alias->string alias))
       (field-name f)
       (when-let [args (field-?arguments f)]
         (arguments->string args))
       ;; Skip directives for now
       (when-let [sel-set (field-?selection-set f)]
         (selection-set->string sel-set))))

;; 2.3 Operations
(r/define-record-type operation-definition
  (make-operation-definition type ?name ?variable-definitions ?directives selection-set)
  operation-definition?
  [type operation-definition-type
   (?name operation-definition-?name operation-definition-?name-lens)
   (?variable-definitions operation-definition-?variable-definitions operation-definition-?variable-definitions-lens)
   (?directives operation-definition-?directives operation-definition-?directives-lens)
   selection-set operation-definition-selection-set])

(defn make-query
  [?name ?variable-definitions ?directives selection-set]
  (make-operation-definition "query" ?name ?variable-definitions ?directives selection-set))

(defn make-mutation
  [?name ?variable-definitions ?directives selection-set]
  (make-operation-definition "mutation" ?name ?variable-definitions ?directives selection-set))

(defn operation-definition->string
  [op-def]
  (str (operation-definition-type op-def)
       (when-let [nom (operation-definition-?name op-def)]
         (str "{\n" nom " "))
       (when-let [var-defs (operation-definition-?variable-definitions op-def)]
         (variable-definitions->string var-defs))
       ;; NOTE Skip directives for now
       (selection-set->string (operation-definition-selection-set op-def))
       (when (operation-definition-?name op-def)
         "\n}")))

;; 2.2 Query Document
(defn definition?
  [obj]
  (operation-definition? obj))

(defn definition->string
  [def]
  (cond
    (operation-definition? def) (operation-definition->string def)
    ;; NOTE Skip fragments for now
    ))

(defn document?
  [xs]
  (and (seq xs) (every? definition? xs)))

(defn document->string
  [doc]
  (apply str (map definition->string doc)))
