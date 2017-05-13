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
var len__28967__auto___33579 = arguments.length;
var i__28968__auto___33580 = (0);
while(true){
if((i__28968__auto___33580 < len__28967__auto___33579)){
args__28974__auto__.push((arguments[i__28968__auto___33580]));

var G__33581 = (i__28968__auto___33580 + (1));
i__28968__auto___33580 = G__33581;
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

active_graphql.builder.$list.cljs$lang$applyTo = (function (seq33578){
return active_graphql.builder.$list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33578));
});

active_graphql.builder.$object = (function active_graphql$builder$$object(values_map){
return cljs.core.map.call(null,(function (p__33586){
var vec__33587 = p__33586;
var k = cljs.core.nth.call(null,vec__33587,(0),null);
var v = cljs.core.nth.call(null,vec__33587,(1),null);
return active_graphql.core.make_object_field.call(null,k,v);
}),values_map);
});
active_graphql.builder.query = (function active_graphql$builder$query(var_args){
var args__28974__auto__ = [];
var len__28967__auto___33600 = arguments.length;
var i__28968__auto___33601 = (0);
while(true){
if((i__28968__auto___33601 < len__28967__auto___33600)){
args__28974__auto__.push((arguments[i__28968__auto___33601]));

var G__33602 = (i__28968__auto___33601 + (1));
i__28968__auto___33601 = G__33602;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active_graphql.builder.query.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active_graphql.builder.query.cljs$core$IFn$_invoke$arity$variadic = (function (selection_set,p__33592){
var vec__33593 = p__33592;
var opts = cljs.core.nth.call(null,vec__33593,(0),null);
var variable_definitions = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var var_defs = temp__4657__auto__;
return cljs.core.map.call(null,((function (var_defs,temp__4657__auto__,vec__33593,opts){
return (function (p__33596){
var vec__33597 = p__33596;
var k = cljs.core.nth.call(null,vec__33597,(0),null);
var v = cljs.core.nth.call(null,vec__33597,(1),null);
return active_graphql.core.make_variable_definition.call(null,active_graphql.core.make_variable.call(null,k),v,null);
});})(var_defs,temp__4657__auto__,vec__33593,opts))
,var_defs);
} else {
return null;
}
})();
return active_graphql.core.make_query.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts),variable_definitions,null,selection_set);
});

active_graphql.builder.query.cljs$lang$maxFixedArity = (1);

active_graphql.builder.query.cljs$lang$applyTo = (function (seq33590){
var G__33591 = cljs.core.first.call(null,seq33590);
var seq33590__$1 = cljs.core.next.call(null,seq33590);
return active_graphql.builder.query.cljs$core$IFn$_invoke$arity$variadic(G__33591,seq33590__$1);
});

active_graphql.builder.mutation = (function active_graphql$builder$mutation(var_args){
var args__28974__auto__ = [];
var len__28967__auto___33613 = arguments.length;
var i__28968__auto___33614 = (0);
while(true){
if((i__28968__auto___33614 < len__28967__auto___33613)){
args__28974__auto__.push((arguments[i__28968__auto___33614]));

var G__33615 = (i__28968__auto___33614 + (1));
i__28968__auto___33614 = G__33615;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active_graphql.builder.mutation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active_graphql.builder.mutation.cljs$core$IFn$_invoke$arity$variadic = (function (selection_set,p__33605){
var vec__33606 = p__33605;
var opts = cljs.core.nth.call(null,vec__33606,(0),null);
var variable_definitions = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto__)){
var var_defs = temp__4657__auto__;
return cljs.core.map.call(null,((function (var_defs,temp__4657__auto__,vec__33606,opts){
return (function (p__33609){
var vec__33610 = p__33609;
var k = cljs.core.nth.call(null,vec__33610,(0),null);
var v = cljs.core.nth.call(null,vec__33610,(1),null);
return active_graphql.core.make_variable_definition.call(null,active_graphql.core.make_variable.call(null,k),v,null);
});})(var_defs,temp__4657__auto__,vec__33606,opts))
,var_defs);
} else {
return null;
}
})();
return active_graphql.core.make_mutation.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts),variable_definitions,null,selection_set);
});

active_graphql.builder.mutation.cljs$lang$maxFixedArity = (1);

active_graphql.builder.mutation.cljs$lang$applyTo = (function (seq33603){
var G__33604 = cljs.core.first.call(null,seq33603);
var seq33603__$1 = cljs.core.next.call(null,seq33603);
return active_graphql.builder.mutation.cljs$core$IFn$_invoke$arity$variadic(G__33604,seq33603__$1);
});

active_graphql.builder.field = (function active_graphql$builder$field(var_args){
var args__28974__auto__ = [];
var len__28967__auto___33626 = arguments.length;
var i__28968__auto___33627 = (0);
while(true){
if((i__28968__auto___33627 < len__28967__auto___33626)){
args__28974__auto__.push((arguments[i__28968__auto___33627]));

var G__33628 = (i__28968__auto___33627 + (1));
i__28968__auto___33627 = G__33628;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active_graphql.builder.field.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active_graphql.builder.field.cljs$core$IFn$_invoke$arity$variadic = (function (name,p__33618){
var vec__33619 = p__33618;
var opts = cljs.core.nth.call(null,vec__33619,(0),null);
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
return cljs.core.map.call(null,((function (args,temp__4657__auto__,alias,vec__33619,opts){
return (function (p__33622){
var vec__33623 = p__33622;
var k = cljs.core.nth.call(null,vec__33623,(0),null);
var v = cljs.core.nth.call(null,vec__33623,(1),null);
return active_graphql.core.make_argument.call(null,k,v);
});})(args,temp__4657__auto__,alias,vec__33619,opts))
,args);
} else {
return null;
}
})();
return active_graphql.core.make_field.call(null,alias,name,args,null,new cljs.core.Keyword(null,"select","select",1147833503).cljs$core$IFn$_invoke$arity$1(opts));
});

active_graphql.builder.field.cljs$lang$maxFixedArity = (1);

active_graphql.builder.field.cljs$lang$applyTo = (function (seq33616){
var G__33617 = cljs.core.first.call(null,seq33616);
var seq33616__$1 = cljs.core.next.call(null,seq33616);
return active_graphql.builder.field.cljs$core$IFn$_invoke$arity$variadic(G__33617,seq33616__$1);
});

active_graphql.builder.select = (function active_graphql$builder$select(var_args){
var args__28974__auto__ = [];
var len__28967__auto___33631 = arguments.length;
var i__28968__auto___33632 = (0);
while(true){
if((i__28968__auto___33632 < len__28967__auto___33631)){
args__28974__auto__.push((arguments[i__28968__auto___33632]));

var G__33633 = (i__28968__auto___33632 + (1));
i__28968__auto___33632 = G__33633;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return active_graphql.builder.select.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

active_graphql.builder.select.cljs$core$IFn$_invoke$arity$variadic = (function (fields){
return cljs.core.mapv.call(null,(function (p1__33629_SHARP_){
return active_graphql.core.make_selection.call(null,p1__33629_SHARP_,null,null);
}),fields);
});

active_graphql.builder.select.cljs$lang$maxFixedArity = (0);

active_graphql.builder.select.cljs$lang$applyTo = (function (seq33630){
return active_graphql.builder.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33630));
});

active_graphql.builder.graphql = (function active_graphql$builder$graphql(var_args){
var args__28974__auto__ = [];
var len__28967__auto___33635 = arguments.length;
var i__28968__auto___33636 = (0);
while(true){
if((i__28968__auto___33636 < len__28967__auto___33635)){
args__28974__auto__.push((arguments[i__28968__auto___33636]));

var G__33637 = (i__28968__auto___33636 + (1));
i__28968__auto___33636 = G__33637;
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

active_graphql.builder.graphql.cljs$lang$applyTo = (function (seq33634){
return active_graphql.builder.graphql.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33634));
});


//# sourceMappingURL=builder.js.map