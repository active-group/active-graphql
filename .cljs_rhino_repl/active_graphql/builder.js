// Compiled by ClojureScript 1.9.521 {}
goog.provide('active_graphql.builder');
goog.require('cljs.core');
goog.require('active_graphql.core');
goog.require('active.clojure.lens');
active_graphql.builder.$int = (function active_graphql$builder$$int(value){
return active_graphql.core.make_int_value.call(null,value);
});
active_graphql.builder.$float = (function active_graphql$builder$$float(value){
return active_graphql.core.make_float_value.call(null,value);
});
active_graphql.builder.$boolean = (function active_graphql$builder$$boolean(value){
return active_graphql.core.make_boolean_value.call(null,value);
});
active_graphql.builder.$string = (function active_graphql$builder$$string(value){
return active_graphql.core.make_string_value.call(null,value);
});
active_graphql.builder.$null = active_graphql.core.make_null_value.call(null);
active_graphql.builder.$enum = (function active_graphql$builder$$enum(value){
return active_graphql.core.make_enum_value.call(null,value);
});
active_graphql.builder.$list = (function active_graphql$builder$$list(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34065 = arguments.length;
var i__28968__auto___34066 = (0);
while(true){
if((i__28968__auto___34066 < len__28967__auto___34065)){
args__28974__auto__.push((arguments[i__28968__auto___34066]));

var G__34067 = (i__28968__auto___34066 + (1));
i__28968__auto___34066 = G__34067;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return active_graphql.builder.$list.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

active_graphql.builder.$list.cljs$core$IFn$_invoke$arity$variadic = (function (values){
return values;
});

active_graphql.builder.$list.cljs$lang$maxFixedArity = (0);

active_graphql.builder.$list.cljs$lang$applyTo = (function (seq34064){
return active_graphql.builder.$list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34064));
});

active_graphql.builder.$object = (function active_graphql$builder$$object(values_map){
return cljs.core.map.call(null,(function (p__34072){
var vec__34073 = p__34072;
var k = cljs.core.nth.call(null,vec__34073,(0),null);
var v = cljs.core.nth.call(null,vec__34073,(1),null);
return active_graphql.core.make_object_field.call(null,k,v);
}),values_map);
});
active_graphql.builder.query = (function active_graphql$builder$query(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34086 = arguments.length;
var i__28968__auto___34087 = (0);
while(true){
if((i__28968__auto___34087 < len__28967__auto___34086)){
args__28974__auto__.push((arguments[i__28968__auto___34087]));

var G__34088 = (i__28968__auto___34087 + (1));
i__28968__auto___34087 = G__34088;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active_graphql.builder.query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active_graphql.builder.query.cljs$core$IFn$_invoke$arity$variadic = (function (selection_set,p__34078){
var vec__34079 = p__34078;
var opts = cljs.core.nth.call(null,vec__34079,(0),null);
var variable_definitions = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var var_defs = temp__4657__auto__;
return cljs.core.map.call(null,((function (var_defs,temp__4657__auto__,vec__34079,opts){
return (function (p__34082){
var vec__34083 = p__34082;
var k = cljs.core.nth.call(null,vec__34083,(0),null);
var v = cljs.core.nth.call(null,vec__34083,(1),null);
return active_graphql.core.make_variable_definition.call(null,active_graphql.core.make_variable.call(null,k),v,null);
});})(var_defs,temp__4657__auto__,vec__34079,opts))
,var_defs);
} else {
return null;
}
})();
return active_graphql.core.make_query.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts),variable_definitions,null,selection_set);
});

active_graphql.builder.query.cljs$lang$maxFixedArity = (1);

active_graphql.builder.query.cljs$lang$applyTo = (function (seq34076){
var G__34077 = cljs.core.first.call(null,seq34076);
var seq34076__$1 = cljs.core.next.call(null,seq34076);
return active_graphql.builder.query.cljs$core$IFn$_invoke$arity$variadic(G__34077,seq34076__$1);
});

active_graphql.builder.mutation = (function active_graphql$builder$mutation(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34099 = arguments.length;
var i__28968__auto___34100 = (0);
while(true){
if((i__28968__auto___34100 < len__28967__auto___34099)){
args__28974__auto__.push((arguments[i__28968__auto___34100]));

var G__34101 = (i__28968__auto___34100 + (1));
i__28968__auto___34100 = G__34101;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active_graphql.builder.mutation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active_graphql.builder.mutation.cljs$core$IFn$_invoke$arity$variadic = (function (selection_set,p__34091){
var vec__34092 = p__34091;
var opts = cljs.core.nth.call(null,vec__34092,(0),null);
var variable_definitions = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var var_defs = temp__4657__auto__;
return cljs.core.map.call(null,((function (var_defs,temp__4657__auto__,vec__34092,opts){
return (function (p__34095){
var vec__34096 = p__34095;
var k = cljs.core.nth.call(null,vec__34096,(0),null);
var v = cljs.core.nth.call(null,vec__34096,(1),null);
return active_graphql.core.make_variable_definition.call(null,active_graphql.core.make_variable.call(null,k),v,null);
});})(var_defs,temp__4657__auto__,vec__34092,opts))
,var_defs);
} else {
return null;
}
})();
return active_graphql.core.make_mutation.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts),variable_definitions,null,selection_set);
});

active_graphql.builder.mutation.cljs$lang$maxFixedArity = (1);

active_graphql.builder.mutation.cljs$lang$applyTo = (function (seq34089){
var G__34090 = cljs.core.first.call(null,seq34089);
var seq34089__$1 = cljs.core.next.call(null,seq34089);
return active_graphql.builder.mutation.cljs$core$IFn$_invoke$arity$variadic(G__34090,seq34089__$1);
});

active_graphql.builder.field = (function active_graphql$builder$field(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34112 = arguments.length;
var i__28968__auto___34113 = (0);
while(true){
if((i__28968__auto___34113 < len__28967__auto___34112)){
args__28974__auto__.push((arguments[i__28968__auto___34113]));

var G__34114 = (i__28968__auto___34113 + (1));
i__28968__auto___34113 = G__34114;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active_graphql.builder.field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active_graphql.builder.field.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__34104){
var vec__34105 = p__34104;
var opts = cljs.core.nth.call(null,vec__34105,(0),null);
var alias = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var a = temp__4657__auto__;
return active_graphql.core.make_alias.call(null,a);
} else {
return null;
}
})();
var args = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var args = temp__4657__auto__;
return cljs.core.map.call(null,((function (args,temp__4657__auto__,alias,vec__34105,opts){
return (function (p__34108){
var vec__34109 = p__34108;
var k = cljs.core.nth.call(null,vec__34109,(0),null);
var v = cljs.core.nth.call(null,vec__34109,(1),null);
return active_graphql.core.make_argument.call(null,k,v);
});})(args,temp__4657__auto__,alias,vec__34105,opts))
,args);
} else {
return null;
}
})();
return active_graphql.core.make_field.call(null,alias,name,args,null,new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(opts));
});

active_graphql.builder.field.cljs$lang$maxFixedArity = (1);

active_graphql.builder.field.cljs$lang$applyTo = (function (seq34102){
var G__34103 = cljs.core.first.call(null,seq34102);
var seq34102__$1 = cljs.core.next.call(null,seq34102);
return active_graphql.builder.field.cljs$core$IFn$_invoke$arity$variadic(G__34103,seq34102__$1);
});

active_graphql.builder.select = (function active_graphql$builder$select(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34117 = arguments.length;
var i__28968__auto___34118 = (0);
while(true){
if((i__28968__auto___34118 < len__28967__auto___34117)){
args__28974__auto__.push((arguments[i__28968__auto___34118]));

var G__34119 = (i__28968__auto___34118 + (1));
i__28968__auto___34118 = G__34119;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return active_graphql.builder.select.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

active_graphql.builder.select.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.map.call(null,(function (p1__34115_SHARP_){
return active_graphql.core.make_selection.call(null,p1__34115_SHARP_,null,null);
}),fields);
});

active_graphql.builder.select.cljs$lang$maxFixedArity = (0);

active_graphql.builder.select.cljs$lang$applyTo = (function (seq34116){
return active_graphql.builder.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34116));
});

active_graphql.builder.graphql = (function active_graphql$builder$graphql(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34121 = arguments.length;
var i__28968__auto___34122 = (0);
while(true){
if((i__28968__auto___34122 < len__28967__auto___34121)){
args__28974__auto__.push((arguments[i__28968__auto___34122]));

var G__34123 = (i__28968__auto___34122 + (1));
i__28968__auto___34122 = G__34123;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return active_graphql.builder.graphql.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

active_graphql.builder.graphql.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return defs;
});

active_graphql.builder.graphql.cljs$lang$maxFixedArity = (0);

active_graphql.builder.graphql.cljs$lang$applyTo = (function (seq34120){
return active_graphql.builder.graphql.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34120));
});

active_graphql.builder.build = (function active_graphql$builder$build(query){
return active_graphql.core.document__GT_string.call(null,query);
});

//# sourceMappingURL=builder.js.map