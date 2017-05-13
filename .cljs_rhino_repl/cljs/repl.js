// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30112){
var map__30137 = p__30112;
var map__30137__$1 = ((((!((map__30137 == null)))?((((map__30137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30137):map__30137);
var m = map__30137__$1;
var n = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30139_30161 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30140_30162 = null;
var count__30141_30163 = (0);
var i__30142_30164 = (0);
while(true){
if((i__30142_30164 < count__30141_30163)){
var f_30165 = cljs.core._nth.call(null,chunk__30140_30162,i__30142_30164);
cljs.core.println.call(null,"  ",f_30165);

var G__30166 = seq__30139_30161;
var G__30167 = chunk__30140_30162;
var G__30168 = count__30141_30163;
var G__30169 = (i__30142_30164 + (1));
seq__30139_30161 = G__30166;
chunk__30140_30162 = G__30167;
count__30141_30163 = G__30168;
i__30142_30164 = G__30169;
continue;
} else {
var temp__4657__auto___30170 = cljs.core.seq.call(null,seq__30139_30161);
if(temp__4657__auto___30170){
var seq__30139_30171__$1 = temp__4657__auto___30170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30139_30171__$1)){
var c__28673__auto___30172 = cljs.core.chunk_first.call(null,seq__30139_30171__$1);
var G__30173 = cljs.core.chunk_rest.call(null,seq__30139_30171__$1);
var G__30174 = c__28673__auto___30172;
var G__30175 = cljs.core.count.call(null,c__28673__auto___30172);
var G__30176 = (0);
seq__30139_30161 = G__30173;
chunk__30140_30162 = G__30174;
count__30141_30163 = G__30175;
i__30142_30164 = G__30176;
continue;
} else {
var f_30177 = cljs.core.first.call(null,seq__30139_30171__$1);
cljs.core.println.call(null,"  ",f_30177);

var G__30178 = cljs.core.next.call(null,seq__30139_30171__$1);
var G__30179 = null;
var G__30180 = (0);
var G__30181 = (0);
seq__30139_30161 = G__30178;
chunk__30140_30162 = G__30179;
count__30141_30163 = G__30180;
i__30142_30164 = G__30181;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30182 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27854__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27854__auto__)){
return or__27854__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30182);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30182)))?cljs.core.second.call(null,arglists_30182):arglists_30182));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30143_30183 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30144_30184 = null;
var count__30145_30185 = (0);
var i__30146_30186 = (0);
while(true){
if((i__30146_30186 < count__30145_30185)){
var vec__30147_30187 = cljs.core._nth.call(null,chunk__30144_30184,i__30146_30186);
var name_30188 = cljs.core.nth.call(null,vec__30147_30187,(0),null);
var map__30150_30189 = cljs.core.nth.call(null,vec__30147_30187,(1),null);
var map__30150_30190__$1 = ((((!((map__30150_30189 == null)))?((((map__30150_30189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30150_30189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30150_30189):map__30150_30189);
var doc_30191 = cljs.core.get.call(null,map__30150_30190__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30192 = cljs.core.get.call(null,map__30150_30190__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30188);

cljs.core.println.call(null," ",arglists_30192);

if(cljs.core.truth_(doc_30191)){
cljs.core.println.call(null," ",doc_30191);
} else {
}

var G__30193 = seq__30143_30183;
var G__30194 = chunk__30144_30184;
var G__30195 = count__30145_30185;
var G__30196 = (i__30146_30186 + (1));
seq__30143_30183 = G__30193;
chunk__30144_30184 = G__30194;
count__30145_30185 = G__30195;
i__30146_30186 = G__30196;
continue;
} else {
var temp__4657__auto___30197 = cljs.core.seq.call(null,seq__30143_30183);
if(temp__4657__auto___30197){
var seq__30143_30198__$1 = temp__4657__auto___30197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30143_30198__$1)){
var c__28673__auto___30199 = cljs.core.chunk_first.call(null,seq__30143_30198__$1);
var G__30200 = cljs.core.chunk_rest.call(null,seq__30143_30198__$1);
var G__30201 = c__28673__auto___30199;
var G__30202 = cljs.core.count.call(null,c__28673__auto___30199);
var G__30203 = (0);
seq__30143_30183 = G__30200;
chunk__30144_30184 = G__30201;
count__30145_30185 = G__30202;
i__30146_30186 = G__30203;
continue;
} else {
var vec__30152_30204 = cljs.core.first.call(null,seq__30143_30198__$1);
var name_30205 = cljs.core.nth.call(null,vec__30152_30204,(0),null);
var map__30155_30206 = cljs.core.nth.call(null,vec__30152_30204,(1),null);
var map__30155_30207__$1 = ((((!((map__30155_30206 == null)))?((((map__30155_30206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30155_30206.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30155_30206):map__30155_30206);
var doc_30208 = cljs.core.get.call(null,map__30155_30207__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30209 = cljs.core.get.call(null,map__30155_30207__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30205);

cljs.core.println.call(null," ",arglists_30209);

if(cljs.core.truth_(doc_30208)){
cljs.core.println.call(null," ",doc_30208);
} else {
}

var G__30210 = cljs.core.next.call(null,seq__30143_30198__$1);
var G__30211 = null;
var G__30212 = (0);
var G__30213 = (0);
seq__30143_30183 = G__30210;
chunk__30144_30184 = G__30211;
count__30145_30185 = G__30212;
i__30146_30186 = G__30213;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__30157 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30158 = null;
var count__30159 = (0);
var i__30160 = (0);
while(true){
if((i__30160 < count__30159)){
var role = cljs.core._nth.call(null,chunk__30158,i__30160);
var temp__4657__auto___30214__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30214__$1)){
var spec_30215 = temp__4657__auto___30214__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_30215));
} else {
}

var G__30216 = seq__30157;
var G__30217 = chunk__30158;
var G__30218 = count__30159;
var G__30219 = (i__30160 + (1));
seq__30157 = G__30216;
chunk__30158 = G__30217;
count__30159 = G__30218;
i__30160 = G__30219;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30157);
if(temp__4657__auto____$1){
var seq__30157__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30157__$1)){
var c__28673__auto__ = cljs.core.chunk_first.call(null,seq__30157__$1);
var G__30220 = cljs.core.chunk_rest.call(null,seq__30157__$1);
var G__30221 = c__28673__auto__;
var G__30222 = cljs.core.count.call(null,c__28673__auto__);
var G__30223 = (0);
seq__30157 = G__30220;
chunk__30158 = G__30221;
count__30159 = G__30222;
i__30160 = G__30223;
continue;
} else {
var role = cljs.core.first.call(null,seq__30157__$1);
var temp__4657__auto___30224__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30224__$2)){
var spec_30225 = temp__4657__auto___30224__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_30225));
} else {
}

var G__30226 = cljs.core.next.call(null,seq__30157__$1);
var G__30227 = null;
var G__30228 = (0);
var G__30229 = (0);
seq__30157 = G__30226;
chunk__30158 = G__30227;
count__30159 = G__30228;
i__30160 = G__30229;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map