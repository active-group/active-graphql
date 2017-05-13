// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__28465__auto__,writer__28466__auto__,opt__28467__auto__){
return cljs.core._write.call(null,writer__28466__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31165 = arguments.length;
var i__28968__auto___31166 = (0);
while(true){
if((i__28968__auto___31166 < len__28967__auto___31165)){
args__28974__auto__.push((arguments[i__28968__auto___31166]));

var G__31167 = (i__28968__auto___31166 + (1));
i__28968__auto___31166 = G__31167;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31164){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31164));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31169 = arguments.length;
var i__28968__auto___31170 = (0);
while(true){
if((i__28968__auto___31170 < len__28967__auto___31169)){
args__28974__auto__.push((arguments[i__28968__auto___31170]));

var G__31171 = (i__28968__auto___31170 + (1));
i__28968__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31168){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31168));
});

var g_QMARK__31172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_31173 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31172){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__31172))
,null));
var mkg_31174 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31172,g_31173){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__31172,g_31173))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31172,g_31173,mkg_31174){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31172).call(null,x);
});})(g_QMARK__31172,g_31173,mkg_31174))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31172,g_31173,mkg_31174){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31174).call(null,gfn);
});})(g_QMARK__31172,g_31173,mkg_31174))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31172,g_31173,mkg_31174){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31173).call(null,generator);
});})(g_QMARK__31172,g_31173,mkg_31174))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29059__auto___31194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29059__auto___31194){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31195 = arguments.length;
var i__28968__auto___31196 = (0);
while(true){
if((i__28968__auto___31196 < len__28967__auto___31195)){
args__28974__auto__.push((arguments[i__28968__auto___31196]));

var G__31197 = (i__28968__auto___31196 + (1));
i__28968__auto___31196 = G__31197;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31194))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31194){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31194),args);
});})(g__29059__auto___31194))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29059__auto___31194){
return (function (seq31175){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31175));
});})(g__29059__auto___31194))
;


var g__29059__auto___31198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29059__auto___31198){
return (function cljs$spec$impl$gen$list(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31199 = arguments.length;
var i__28968__auto___31200 = (0);
while(true){
if((i__28968__auto___31200 < len__28967__auto___31199)){
args__28974__auto__.push((arguments[i__28968__auto___31200]));

var G__31201 = (i__28968__auto___31200 + (1));
i__28968__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31198))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31198){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31198),args);
});})(g__29059__auto___31198))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29059__auto___31198){
return (function (seq31176){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31176));
});})(g__29059__auto___31198))
;


var g__29059__auto___31202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29059__auto___31202){
return (function cljs$spec$impl$gen$map(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31203 = arguments.length;
var i__28968__auto___31204 = (0);
while(true){
if((i__28968__auto___31204 < len__28967__auto___31203)){
args__28974__auto__.push((arguments[i__28968__auto___31204]));

var G__31205 = (i__28968__auto___31204 + (1));
i__28968__auto___31204 = G__31205;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31202))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31202){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31202),args);
});})(g__29059__auto___31202))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29059__auto___31202){
return (function (seq31177){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31177));
});})(g__29059__auto___31202))
;


var g__29059__auto___31206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29059__auto___31206){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31207 = arguments.length;
var i__28968__auto___31208 = (0);
while(true){
if((i__28968__auto___31208 < len__28967__auto___31207)){
args__28974__auto__.push((arguments[i__28968__auto___31208]));

var G__31209 = (i__28968__auto___31208 + (1));
i__28968__auto___31208 = G__31209;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31206))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31206){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31206),args);
});})(g__29059__auto___31206))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29059__auto___31206){
return (function (seq31178){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31178));
});})(g__29059__auto___31206))
;


var g__29059__auto___31210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29059__auto___31210){
return (function cljs$spec$impl$gen$set(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31211 = arguments.length;
var i__28968__auto___31212 = (0);
while(true){
if((i__28968__auto___31212 < len__28967__auto___31211)){
args__28974__auto__.push((arguments[i__28968__auto___31212]));

var G__31213 = (i__28968__auto___31212 + (1));
i__28968__auto___31212 = G__31213;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31210))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31210),args);
});})(g__29059__auto___31210))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29059__auto___31210){
return (function (seq31179){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31179));
});})(g__29059__auto___31210))
;


var g__29059__auto___31214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29059__auto___31214){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31215 = arguments.length;
var i__28968__auto___31216 = (0);
while(true){
if((i__28968__auto___31216 < len__28967__auto___31215)){
args__28974__auto__.push((arguments[i__28968__auto___31216]));

var G__31217 = (i__28968__auto___31216 + (1));
i__28968__auto___31216 = G__31217;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31214))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31214),args);
});})(g__29059__auto___31214))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29059__auto___31214){
return (function (seq31180){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31180));
});})(g__29059__auto___31214))
;


var g__29059__auto___31218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__29059__auto___31218){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31219 = arguments.length;
var i__28968__auto___31220 = (0);
while(true){
if((i__28968__auto___31220 < len__28967__auto___31219)){
args__28974__auto__.push((arguments[i__28968__auto___31220]));

var G__31221 = (i__28968__auto___31220 + (1));
i__28968__auto___31220 = G__31221;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31218))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31218),args);
});})(g__29059__auto___31218))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__29059__auto___31218){
return (function (seq31181){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31181));
});})(g__29059__auto___31218))
;


var g__29059__auto___31222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29059__auto___31222){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31223 = arguments.length;
var i__28968__auto___31224 = (0);
while(true){
if((i__28968__auto___31224 < len__28967__auto___31223)){
args__28974__auto__.push((arguments[i__28968__auto___31224]));

var G__31225 = (i__28968__auto___31224 + (1));
i__28968__auto___31224 = G__31225;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31222))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31222),args);
});})(g__29059__auto___31222))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29059__auto___31222){
return (function (seq31182){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31182));
});})(g__29059__auto___31222))
;


var g__29059__auto___31226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29059__auto___31226){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31227 = arguments.length;
var i__28968__auto___31228 = (0);
while(true){
if((i__28968__auto___31228 < len__28967__auto___31227)){
args__28974__auto__.push((arguments[i__28968__auto___31228]));

var G__31229 = (i__28968__auto___31228 + (1));
i__28968__auto___31228 = G__31229;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31226))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31226),args);
});})(g__29059__auto___31226))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29059__auto___31226){
return (function (seq31183){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31183));
});})(g__29059__auto___31226))
;


var g__29059__auto___31230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29059__auto___31230){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31231 = arguments.length;
var i__28968__auto___31232 = (0);
while(true){
if((i__28968__auto___31232 < len__28967__auto___31231)){
args__28974__auto__.push((arguments[i__28968__auto___31232]));

var G__31233 = (i__28968__auto___31232 + (1));
i__28968__auto___31232 = G__31233;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31230))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31230),args);
});})(g__29059__auto___31230))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29059__auto___31230){
return (function (seq31184){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31184));
});})(g__29059__auto___31230))
;


var g__29059__auto___31234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29059__auto___31234){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31235 = arguments.length;
var i__28968__auto___31236 = (0);
while(true){
if((i__28968__auto___31236 < len__28967__auto___31235)){
args__28974__auto__.push((arguments[i__28968__auto___31236]));

var G__31237 = (i__28968__auto___31236 + (1));
i__28968__auto___31236 = G__31237;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31234))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31234),args);
});})(g__29059__auto___31234))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29059__auto___31234){
return (function (seq31185){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31185));
});})(g__29059__auto___31234))
;


var g__29059__auto___31238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29059__auto___31238){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31239 = arguments.length;
var i__28968__auto___31240 = (0);
while(true){
if((i__28968__auto___31240 < len__28967__auto___31239)){
args__28974__auto__.push((arguments[i__28968__auto___31240]));

var G__31241 = (i__28968__auto___31240 + (1));
i__28968__auto___31240 = G__31241;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31238))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31238),args);
});})(g__29059__auto___31238))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29059__auto___31238){
return (function (seq31186){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31186));
});})(g__29059__auto___31238))
;


var g__29059__auto___31242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29059__auto___31242){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31243 = arguments.length;
var i__28968__auto___31244 = (0);
while(true){
if((i__28968__auto___31244 < len__28967__auto___31243)){
args__28974__auto__.push((arguments[i__28968__auto___31244]));

var G__31245 = (i__28968__auto___31244 + (1));
i__28968__auto___31244 = G__31245;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31242))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31242),args);
});})(g__29059__auto___31242))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29059__auto___31242){
return (function (seq31187){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31187));
});})(g__29059__auto___31242))
;


var g__29059__auto___31246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29059__auto___31246){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31247 = arguments.length;
var i__28968__auto___31248 = (0);
while(true){
if((i__28968__auto___31248 < len__28967__auto___31247)){
args__28974__auto__.push((arguments[i__28968__auto___31248]));

var G__31249 = (i__28968__auto___31248 + (1));
i__28968__auto___31248 = G__31249;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31246))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31246),args);
});})(g__29059__auto___31246))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29059__auto___31246){
return (function (seq31188){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31188));
});})(g__29059__auto___31246))
;


var g__29059__auto___31250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29059__auto___31250){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31251 = arguments.length;
var i__28968__auto___31252 = (0);
while(true){
if((i__28968__auto___31252 < len__28967__auto___31251)){
args__28974__auto__.push((arguments[i__28968__auto___31252]));

var G__31253 = (i__28968__auto___31252 + (1));
i__28968__auto___31252 = G__31253;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31250))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31250),args);
});})(g__29059__auto___31250))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29059__auto___31250){
return (function (seq31189){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31189));
});})(g__29059__auto___31250))
;


var g__29059__auto___31254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29059__auto___31254){
return (function cljs$spec$impl$gen$return(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31255 = arguments.length;
var i__28968__auto___31256 = (0);
while(true){
if((i__28968__auto___31256 < len__28967__auto___31255)){
args__28974__auto__.push((arguments[i__28968__auto___31256]));

var G__31257 = (i__28968__auto___31256 + (1));
i__28968__auto___31256 = G__31257;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31254))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31254),args);
});})(g__29059__auto___31254))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29059__auto___31254){
return (function (seq31190){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31190));
});})(g__29059__auto___31254))
;


var g__29059__auto___31258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__29059__auto___31258){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31259 = arguments.length;
var i__28968__auto___31260 = (0);
while(true){
if((i__28968__auto___31260 < len__28967__auto___31259)){
args__28974__auto__.push((arguments[i__28968__auto___31260]));

var G__31261 = (i__28968__auto___31260 + (1));
i__28968__auto___31260 = G__31261;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31258))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31258),args);
});})(g__29059__auto___31258))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29059__auto___31258){
return (function (seq31191){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31191));
});})(g__29059__auto___31258))
;


var g__29059__auto___31262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__29059__auto___31262){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31263 = arguments.length;
var i__28968__auto___31264 = (0);
while(true){
if((i__28968__auto___31264 < len__28967__auto___31263)){
args__28974__auto__.push((arguments[i__28968__auto___31264]));

var G__31265 = (i__28968__auto___31264 + (1));
i__28968__auto___31264 = G__31265;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31262))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31262),args);
});})(g__29059__auto___31262))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__29059__auto___31262){
return (function (seq31192){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31192));
});})(g__29059__auto___31262))
;


var g__29059__auto___31266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__29059__auto___31266){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31267 = arguments.length;
var i__28968__auto___31268 = (0);
while(true){
if((i__28968__auto___31268 < len__28967__auto___31267)){
args__28974__auto__.push((arguments[i__28968__auto___31268]));

var G__31269 = (i__28968__auto___31268 + (1));
i__28968__auto___31268 = G__31269;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29059__auto___31266))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29059__auto___31266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29059__auto___31266),args);
});})(g__29059__auto___31266))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__29059__auto___31266){
return (function (seq31193){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31193));
});})(g__29059__auto___31266))
;

var g__29072__auto___31291 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29072__auto___31291){
return (function cljs$spec$impl$gen$any(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31292 = arguments.length;
var i__28968__auto___31293 = (0);
while(true){
if((i__28968__auto___31293 < len__28967__auto___31292)){
args__28974__auto__.push((arguments[i__28968__auto___31293]));

var G__31294 = (i__28968__auto___31293 + (1));
i__28968__auto___31293 = G__31294;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31291))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31291){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31291);
});})(g__29072__auto___31291))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29072__auto___31291){
return (function (seq31270){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31270));
});})(g__29072__auto___31291))
;


var g__29072__auto___31295 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29072__auto___31295){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31296 = arguments.length;
var i__28968__auto___31297 = (0);
while(true){
if((i__28968__auto___31297 < len__28967__auto___31296)){
args__28974__auto__.push((arguments[i__28968__auto___31297]));

var G__31298 = (i__28968__auto___31297 + (1));
i__28968__auto___31297 = G__31298;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31295))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31295){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31295);
});})(g__29072__auto___31295))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29072__auto___31295){
return (function (seq31271){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31271));
});})(g__29072__auto___31295))
;


var g__29072__auto___31299 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29072__auto___31299){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31300 = arguments.length;
var i__28968__auto___31301 = (0);
while(true){
if((i__28968__auto___31301 < len__28967__auto___31300)){
args__28974__auto__.push((arguments[i__28968__auto___31301]));

var G__31302 = (i__28968__auto___31301 + (1));
i__28968__auto___31301 = G__31302;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31299))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31299){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31299);
});})(g__29072__auto___31299))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29072__auto___31299){
return (function (seq31272){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31272));
});})(g__29072__auto___31299))
;


var g__29072__auto___31303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29072__auto___31303){
return (function cljs$spec$impl$gen$char(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31304 = arguments.length;
var i__28968__auto___31305 = (0);
while(true){
if((i__28968__auto___31305 < len__28967__auto___31304)){
args__28974__auto__.push((arguments[i__28968__auto___31305]));

var G__31306 = (i__28968__auto___31305 + (1));
i__28968__auto___31305 = G__31306;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31303))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31303){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31303);
});})(g__29072__auto___31303))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29072__auto___31303){
return (function (seq31273){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31273));
});})(g__29072__auto___31303))
;


var g__29072__auto___31307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29072__auto___31307){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31308 = arguments.length;
var i__28968__auto___31309 = (0);
while(true){
if((i__28968__auto___31309 < len__28967__auto___31308)){
args__28974__auto__.push((arguments[i__28968__auto___31309]));

var G__31310 = (i__28968__auto___31309 + (1));
i__28968__auto___31309 = G__31310;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31307))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31307){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31307);
});})(g__29072__auto___31307))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29072__auto___31307){
return (function (seq31274){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31274));
});})(g__29072__auto___31307))
;


var g__29072__auto___31311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29072__auto___31311){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31312 = arguments.length;
var i__28968__auto___31313 = (0);
while(true){
if((i__28968__auto___31313 < len__28967__auto___31312)){
args__28974__auto__.push((arguments[i__28968__auto___31313]));

var G__31314 = (i__28968__auto___31313 + (1));
i__28968__auto___31313 = G__31314;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31311))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31311){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31311);
});})(g__29072__auto___31311))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29072__auto___31311){
return (function (seq31275){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31275));
});})(g__29072__auto___31311))
;


var g__29072__auto___31315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29072__auto___31315){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31316 = arguments.length;
var i__28968__auto___31317 = (0);
while(true){
if((i__28968__auto___31317 < len__28967__auto___31316)){
args__28974__auto__.push((arguments[i__28968__auto___31317]));

var G__31318 = (i__28968__auto___31317 + (1));
i__28968__auto___31317 = G__31318;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31315))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31315){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31315);
});})(g__29072__auto___31315))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29072__auto___31315){
return (function (seq31276){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31276));
});})(g__29072__auto___31315))
;


var g__29072__auto___31319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29072__auto___31319){
return (function cljs$spec$impl$gen$double(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31320 = arguments.length;
var i__28968__auto___31321 = (0);
while(true){
if((i__28968__auto___31321 < len__28967__auto___31320)){
args__28974__auto__.push((arguments[i__28968__auto___31321]));

var G__31322 = (i__28968__auto___31321 + (1));
i__28968__auto___31321 = G__31322;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31319))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31319){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31319);
});})(g__29072__auto___31319))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29072__auto___31319){
return (function (seq31277){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31277));
});})(g__29072__auto___31319))
;


var g__29072__auto___31323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29072__auto___31323){
return (function cljs$spec$impl$gen$int(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31324 = arguments.length;
var i__28968__auto___31325 = (0);
while(true){
if((i__28968__auto___31325 < len__28967__auto___31324)){
args__28974__auto__.push((arguments[i__28968__auto___31325]));

var G__31326 = (i__28968__auto___31325 + (1));
i__28968__auto___31325 = G__31326;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31323))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31323){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31323);
});})(g__29072__auto___31323))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29072__auto___31323){
return (function (seq31278){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31278));
});})(g__29072__auto___31323))
;


var g__29072__auto___31327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29072__auto___31327){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31328 = arguments.length;
var i__28968__auto___31329 = (0);
while(true){
if((i__28968__auto___31329 < len__28967__auto___31328)){
args__28974__auto__.push((arguments[i__28968__auto___31329]));

var G__31330 = (i__28968__auto___31329 + (1));
i__28968__auto___31329 = G__31330;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31327))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31327){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31327);
});})(g__29072__auto___31327))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29072__auto___31327){
return (function (seq31279){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31279));
});})(g__29072__auto___31327))
;


var g__29072__auto___31331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29072__auto___31331){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31332 = arguments.length;
var i__28968__auto___31333 = (0);
while(true){
if((i__28968__auto___31333 < len__28967__auto___31332)){
args__28974__auto__.push((arguments[i__28968__auto___31333]));

var G__31334 = (i__28968__auto___31333 + (1));
i__28968__auto___31333 = G__31334;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31331))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31331){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31331);
});})(g__29072__auto___31331))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29072__auto___31331){
return (function (seq31280){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31280));
});})(g__29072__auto___31331))
;


var g__29072__auto___31335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29072__auto___31335){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31336 = arguments.length;
var i__28968__auto___31337 = (0);
while(true){
if((i__28968__auto___31337 < len__28967__auto___31336)){
args__28974__auto__.push((arguments[i__28968__auto___31337]));

var G__31338 = (i__28968__auto___31337 + (1));
i__28968__auto___31337 = G__31338;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31335))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31335){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31335);
});})(g__29072__auto___31335))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29072__auto___31335){
return (function (seq31281){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31281));
});})(g__29072__auto___31335))
;


var g__29072__auto___31339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29072__auto___31339){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31340 = arguments.length;
var i__28968__auto___31341 = (0);
while(true){
if((i__28968__auto___31341 < len__28967__auto___31340)){
args__28974__auto__.push((arguments[i__28968__auto___31341]));

var G__31342 = (i__28968__auto___31341 + (1));
i__28968__auto___31341 = G__31342;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31339))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31339){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31339);
});})(g__29072__auto___31339))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29072__auto___31339){
return (function (seq31282){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31282));
});})(g__29072__auto___31339))
;


var g__29072__auto___31343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29072__auto___31343){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31344 = arguments.length;
var i__28968__auto___31345 = (0);
while(true){
if((i__28968__auto___31345 < len__28967__auto___31344)){
args__28974__auto__.push((arguments[i__28968__auto___31345]));

var G__31346 = (i__28968__auto___31345 + (1));
i__28968__auto___31345 = G__31346;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31343))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31343){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31343);
});})(g__29072__auto___31343))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29072__auto___31343){
return (function (seq31283){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31283));
});})(g__29072__auto___31343))
;


var g__29072__auto___31347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29072__auto___31347){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31348 = arguments.length;
var i__28968__auto___31349 = (0);
while(true){
if((i__28968__auto___31349 < len__28967__auto___31348)){
args__28974__auto__.push((arguments[i__28968__auto___31349]));

var G__31350 = (i__28968__auto___31349 + (1));
i__28968__auto___31349 = G__31350;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31347))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31347){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31347);
});})(g__29072__auto___31347))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29072__auto___31347){
return (function (seq31284){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31284));
});})(g__29072__auto___31347))
;


var g__29072__auto___31351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29072__auto___31351){
return (function cljs$spec$impl$gen$string(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31352 = arguments.length;
var i__28968__auto___31353 = (0);
while(true){
if((i__28968__auto___31353 < len__28967__auto___31352)){
args__28974__auto__.push((arguments[i__28968__auto___31353]));

var G__31354 = (i__28968__auto___31353 + (1));
i__28968__auto___31353 = G__31354;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31351))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31351){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31351);
});})(g__29072__auto___31351))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29072__auto___31351){
return (function (seq31285){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31285));
});})(g__29072__auto___31351))
;


var g__29072__auto___31355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29072__auto___31355){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31356 = arguments.length;
var i__28968__auto___31357 = (0);
while(true){
if((i__28968__auto___31357 < len__28967__auto___31356)){
args__28974__auto__.push((arguments[i__28968__auto___31357]));

var G__31358 = (i__28968__auto___31357 + (1));
i__28968__auto___31357 = G__31358;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31355))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31355){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31355);
});})(g__29072__auto___31355))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29072__auto___31355){
return (function (seq31286){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31286));
});})(g__29072__auto___31355))
;


var g__29072__auto___31359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29072__auto___31359){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31360 = arguments.length;
var i__28968__auto___31361 = (0);
while(true){
if((i__28968__auto___31361 < len__28967__auto___31360)){
args__28974__auto__.push((arguments[i__28968__auto___31361]));

var G__31362 = (i__28968__auto___31361 + (1));
i__28968__auto___31361 = G__31362;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31359))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31359){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31359);
});})(g__29072__auto___31359))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29072__auto___31359){
return (function (seq31287){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31287));
});})(g__29072__auto___31359))
;


var g__29072__auto___31363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29072__auto___31363){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31364 = arguments.length;
var i__28968__auto___31365 = (0);
while(true){
if((i__28968__auto___31365 < len__28967__auto___31364)){
args__28974__auto__.push((arguments[i__28968__auto___31365]));

var G__31366 = (i__28968__auto___31365 + (1));
i__28968__auto___31365 = G__31366;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31363))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31363){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31363);
});})(g__29072__auto___31363))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29072__auto___31363){
return (function (seq31288){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31288));
});})(g__29072__auto___31363))
;


var g__29072__auto___31367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29072__auto___31367){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31368 = arguments.length;
var i__28968__auto___31369 = (0);
while(true){
if((i__28968__auto___31369 < len__28967__auto___31368)){
args__28974__auto__.push((arguments[i__28968__auto___31369]));

var G__31370 = (i__28968__auto___31369 + (1));
i__28968__auto___31369 = G__31370;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31367))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31367){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31367);
});})(g__29072__auto___31367))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29072__auto___31367){
return (function (seq31289){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31289));
});})(g__29072__auto___31367))
;


var g__29072__auto___31371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29072__auto___31371){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31372 = arguments.length;
var i__28968__auto___31373 = (0);
while(true){
if((i__28968__auto___31373 < len__28967__auto___31372)){
args__28974__auto__.push((arguments[i__28968__auto___31373]));

var G__31374 = (i__28968__auto___31373 + (1));
i__28968__auto___31373 = G__31374;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});})(g__29072__auto___31371))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29072__auto___31371){
return (function (args){
return cljs.core.deref.call(null,g__29072__auto___31371);
});})(g__29072__auto___31371))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29072__auto___31371){
return (function (seq31290){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31290));
});})(g__29072__auto___31371))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28974__auto__ = [];
var len__28967__auto___31377 = arguments.length;
var i__28968__auto___31378 = (0);
while(true){
if((i__28968__auto___31378 < len__28967__auto___31377)){
args__28974__auto__.push((arguments[i__28968__auto___31378]));

var G__31379 = (i__28968__auto___31378 + (1));
i__28968__auto___31378 = G__31379;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31375_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31375_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31376){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31376));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31380_SHARP_){
return (new Date(p1__31380_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map