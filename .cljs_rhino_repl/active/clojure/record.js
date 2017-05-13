// Compiled by ClojureScript 1.9.521 {}
goog.provide('active.clojure.record');
goog.require('cljs.core');
active.clojure.record.check_type = (function active$clojure$record$check_type(type,rec,accessor){
if((rec instanceof type)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Wrong record type passed to accessor."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rec),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));
}
});

//# sourceMappingURL=record.js.map