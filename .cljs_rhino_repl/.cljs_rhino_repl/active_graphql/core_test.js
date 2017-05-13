// Compiled by ClojureScript 1.9.521 {}
goog.provide('active_graphql.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('active_graphql.core');
active_graphql.core_test.a_test = (function active_graphql$core_test$a_test(){
return cljs.test.test_var.call(null,active_graphql.core_test.a_test.cljs$lang$var);
});
active_graphql.core_test.a_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"FIXME, I fail.");

try{try{var values__32578__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__32579__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__32578__auto__);
if(cljs.core.truth_(result__32579__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__32578__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__32578__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32579__auto__;
}catch (e34986){var t__32616__auto__ = e34986;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

active_graphql.core_test.a_test.cljs$lang$var = new cljs.core.Var(function(){return active_graphql.core_test.a_test;},new cljs.core.Symbol("active-graphql.core-test","a-test","active-graphql.core-test/a-test",-1420831567,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"active-graphql.core-test","active-graphql.core-test",-1087422160,null),new cljs.core.Symbol(null,"a-test","a-test",-2141883395,null),"/Users/marcoschneider/Work/active-graphql/test/active_graphql/core_test.cljs",16,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(active_graphql.core_test.a_test)?active_graphql.core_test.a_test.cljs$lang$test:null)]));
active_graphql.core_test.directive_test = (function active_graphql$core_test$directive_test(){
return cljs.test.test_var.call(null,active_graphql.core_test.directive_test.cljs$lang$var);
});
active_graphql.core_test.directive_test.cljs$lang$test = (function (){
var d1 = active_graphql.core.make_directive.call(null,"foo",cljs.core.PersistentVector.EMPTY);
var d2 = active_graphql.core.make_directive.call(null,"bar",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));
try{var values__32578__auto___34989 = (function (){var x__28696__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d1,d2], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto___34990 = cljs.core.apply.call(null,active_graphql.core.directives_QMARK_,values__32578__auto___34989);
if(cljs.core.truth_(result__32579__auto___34990)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d1","d1",375811720,null),new cljs.core.Symbol(null,"d2","d2",-516033910,null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,active_graphql.core.directives_QMARK_,values__32578__auto___34989),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d1","d1",375811720,null),new cljs.core.Symbol(null,"d2","d2",-516033910,null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),values__32578__auto___34989);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34987){var t__32616__auto___34991 = e34987;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"d1","d1",375811720,null),new cljs.core.Symbol(null,"d2","d2",-516033910,null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto___34991,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32578__auto__ = (function (){var x__28696__auto__ = cljs.core.PersistentVector.EMPTY;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto__ = cljs.core.apply.call(null,active_graphql.core.directives_QMARK_,values__32578__auto__);
if(cljs.core.truth_(result__32579__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,active_graphql.core.directives_QMARK_,values__32578__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),values__32578__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32579__auto__;
}catch (e34988){var t__32616__auto__ = e34988;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","directives?","c/directives?",546255040,null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

active_graphql.core_test.directive_test.cljs$lang$var = new cljs.core.Var(function(){return active_graphql.core_test.directive_test;},new cljs.core.Symbol("active-graphql.core-test","directive-test","active-graphql.core-test/directive-test",1279415674,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"active-graphql.core-test","active-graphql.core-test",-1087422160,null),new cljs.core.Symbol(null,"directive-test","directive-test",-1786793906,null),"/Users/marcoschneider/Work/active-graphql/test/active_graphql/core_test.cljs",24,1,9,9,cljs.core.List.EMPTY,null,(cljs.core.truth_(active_graphql.core_test.directive_test)?active_graphql.core_test.directive_test.cljs$lang$test:null)]));
active_graphql.core_test.type_test = (function active_graphql$core_test$type_test(){
return cljs.test.test_var.call(null,active_graphql.core_test.type_test.cljs$lang$var);
});
active_graphql.core_test.type_test.cljs$lang$test = (function (){
var string_type = active_graphql.core.make_named_typed.call(null,"string",false);
var string_type_null = active_graphql.core.make_named_type.call(null,"string",true);
var string_list_type = active_graphql.core.make_list_type.call(null,string_type,false);
try{var values__32578__auto___34997 = (function (){var x__28696__auto__ = string_type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto___34998 = cljs.core.apply.call(null,active_graphql.core.type_QMARK_,values__32578__auto___34997);
if(cljs.core.truth_(result__32579__auto___34998)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-type","string-type",-1764467828,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,active_graphql.core.type_QMARK_,values__32578__auto___34997),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-type","string-type",-1764467828,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("c","type?","c/type?",383444197,null),values__32578__auto___34997);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34992){var t__32616__auto___34999 = e34992;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-type","string-type",-1764467828,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto___34999,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32578__auto___35000 = (function (){var x__28696__auto__ = string_type_null;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto___35001 = cljs.core.apply.call(null,active_graphql.core.type_QMARK_,values__32578__auto___35000);
if(cljs.core.truth_(result__32579__auto___35001)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-type-null","string-type-null",-1495751892,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,active_graphql.core.type_QMARK_,values__32578__auto___35000),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-type-null","string-type-null",-1495751892,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("c","type?","c/type?",383444197,null),values__32578__auto___35000);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34993){var t__32616__auto___35002 = e34993;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-type-null","string-type-null",-1495751892,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto___35002,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32578__auto___35003 = (function (){var x__28696__auto__ = string_list_type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto___35004 = cljs.core.apply.call(null,active_graphql.core.type_QMARK_,values__32578__auto___35003);
if(cljs.core.truth_(result__32579__auto___35004)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-list-type","string-list-type",288324711,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,active_graphql.core.type_QMARK_,values__32578__auto___35003),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-list-type","string-list-type",288324711,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("c","type?","c/type?",383444197,null),values__32578__auto___35003);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34994){var t__32616__auto___35005 = e34994;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","type?","c/type?",383444197,null),new cljs.core.Symbol(null,"string-list-type","string-list-type",288324711,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto___35005,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32578__auto___35006 = (function (){var x__28696__auto__ = string_type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto___35007 = cljs.core.apply.call(null,active_graphql.core.non_null_type_QMARK_,values__32578__auto___35006);
if(cljs.core.truth_(result__32579__auto___35007)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),new cljs.core.Symbol(null,"string-type","string-type",-1764467828,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,active_graphql.core.non_null_type_QMARK_,values__32578__auto___35006),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),new cljs.core.Symbol(null,"string-type","string-type",-1764467828,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),values__32578__auto___35006);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34995){var t__32616__auto___35008 = e34995;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),new cljs.core.Symbol(null,"string-type","string-type",-1764467828,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto___35008,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__32578__auto__ = (function (){var x__28696__auto__ = active_graphql.core.non_null_type_QMARK_.call(null,string_type_null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})();
var result__32579__auto__ = cljs.core.apply.call(null,cljs.core.not,values__32578__auto__);
if(cljs.core.truth_(result__32579__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),new cljs.core.Symbol(null,"string-type-null","string-type-null",-1495751892,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.not,values__32578__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),new cljs.core.Symbol(null,"string-type-null","string-type-null",-1495751892,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__28696__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),values__32578__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28696__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__32579__auto__;
}catch (e34996){var t__32616__auto__ = e34996;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("c","non-null-type?","c/non-null-type?",-168713140,null),new cljs.core.Symbol(null,"string-type-null","string-type-null",-1495751892,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__32616__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

active_graphql.core_test.type_test.cljs$lang$var = new cljs.core.Var(function(){return active_graphql.core_test.type_test;},new cljs.core.Symbol("active-graphql.core-test","type-test","active-graphql.core-test/type-test",465929914,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"active-graphql.core-test","active-graphql.core-test",-1087422160,null),new cljs.core.Symbol(null,"type-test","type-test",-1027068938,null),"/Users/marcoschneider/Work/active-graphql/test/active_graphql/core_test.cljs",19,1,15,15,cljs.core.List.EMPTY,null,(cljs.core.truth_(active_graphql.core_test.type_test)?active_graphql.core_test.type_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map