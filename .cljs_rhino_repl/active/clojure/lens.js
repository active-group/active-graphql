// Compiled by ClojureScript 1.9.521 {}
goog.provide('active.clojure.lens');
goog.require('cljs.core');

/**
 * Protocol for types that can be used as a lens, defined by a
 * function to yank some value out of a given data value, and a function
 * to shove an updated value back in.
 * @interface
 */
active.clojure.lens.Lens = function(){};

active.clojure.lens._yank = (function active$clojure$lens$_yank(lens,data){
if((!((lens == null))) && (!((lens.active$clojure$lens$Lens$_yank$arity$2 == null)))){
return lens.active$clojure$lens$Lens$_yank$arity$2(lens,data);
} else {
var x__28522__auto__ = (((lens == null))?null:lens);
var m__28523__auto__ = (active.clojure.lens._yank[goog.typeOf(x__28522__auto__)]);
if(!((m__28523__auto__ == null))){
return m__28523__auto__.call(null,lens,data);
} else {
var m__28523__auto____$1 = (active.clojure.lens._yank["_"]);
if(!((m__28523__auto____$1 == null))){
return m__28523__auto____$1.call(null,lens,data);
} else {
throw cljs.core.missing_protocol.call(null,"Lens.-yank",lens);
}
}
}
});

active.clojure.lens._shove = (function active$clojure$lens$_shove(lens,data,v){
if((!((lens == null))) && (!((lens.active$clojure$lens$Lens$_shove$arity$3 == null)))){
return lens.active$clojure$lens$Lens$_shove$arity$3(lens,data,v);
} else {
var x__28522__auto__ = (((lens == null))?null:lens);
var m__28523__auto__ = (active.clojure.lens._shove[goog.typeOf(x__28522__auto__)]);
if(!((m__28523__auto__ == null))){
return m__28523__auto__.call(null,lens,data,v);
} else {
var m__28523__auto____$1 = (active.clojure.lens._shove["_"]);
if(!((m__28523__auto____$1 == null))){
return m__28523__auto____$1.call(null,lens,data,v);
} else {
throw cljs.core.missing_protocol.call(null,"Lens.-shove",lens);
}
}
}
});

/**
 * Yank a value from the given data value, as defined by the given
 * lens.
 */
active.clojure.lens.yank = (function active$clojure$lens$yank(data,lens){
return active.clojure.lens._yank.call(null,lens,data);
});
/**
 * Shove a new value v into the given data value, as defined by the
 * given lens, and return the updated data structure.
 */
active.clojure.lens.shove = (function active$clojure$lens$shove(data,lens,v){
return active.clojure.lens._shove.call(null,lens,data,v);
});
cljs.core.Keyword.prototype.active$clojure$lens$Lens$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.active$clojure$lens$Lens$_yank$arity$2 = (function (kw,data){
var kw__$1 = this;
return kw__$1.call(null,data);
});

cljs.core.Keyword.prototype.active$clojure$lens$Lens$_shove$arity$3 = (function (kw,data,v){
var kw__$1 = this;
return cljs.core.assoc.call(null,data,kw__$1,v);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {active.clojure.lens.Lens}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
active.clojure.lens.ExplicitLens = (function (yanker,shover,args,__meta,__extmap,__hash){
this.yanker = yanker;
this.shover = shover;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
active.clojure.lens.ExplicitLens.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28481__auto__,k__28482__auto__){
var self__ = this;
var this__28481__auto____$1 = this;
return this__28481__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28482__auto__,null);
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28483__auto__,k34554,else__28484__auto__){
var self__ = this;
var this__28483__auto____$1 = this;
var G__34557 = (((k34554 instanceof cljs.core.Keyword))?k34554.fqn:null);
switch (G__34557) {
case "yanker":
return self__.yanker;

break;
case "shover":
return self__.shover;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34554,else__28484__auto__);

}
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28495__auto__,writer__28496__auto__,opts__28497__auto__){
var self__ = this;
var this__28495__auto____$1 = this;
var pr_pair__28498__auto__ = ((function (this__28495__auto____$1){
return (function (keyval__28499__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,cljs.core.pr_writer,""," ","",opts__28497__auto__,keyval__28499__auto__);
});})(this__28495__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28496__auto__,pr_pair__28498__auto__,"#active.clojure.lens.ExplicitLens{",", ","}",opts__28497__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yanker","yanker",1454070199),self__.yanker],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"shover","shover",-417196614),self__.shover],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

active.clojure.lens.ExplicitLens.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34553){
var self__ = this;
var G__34553__$1 = this;
return (new cljs.core.RecordIter((0),G__34553__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"yanker","yanker",1454070199),new cljs.core.Keyword(null,"shover","shover",-417196614),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28479__auto__){
var self__ = this;
var this__28479__auto____$1 = this;
return self__.__meta;
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28475__auto__){
var self__ = this;
var this__28475__auto____$1 = this;
return (new active.clojure.lens.ExplicitLens(self__.yanker,self__.shover,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28485__auto__){
var self__ = this;
var this__28485__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28476__auto__){
var self__ = this;
var this__28476__auto____$1 = this;
var h__28294__auto__ = self__.__hash;
if(!((h__28294__auto__ == null))){
return h__28294__auto__;
} else {
var h__28294__auto____$1 = cljs.core.hash_imap.call(null,this__28476__auto____$1);
self__.__hash = h__28294__auto____$1;

return h__28294__auto____$1;
}
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__28477__auto__,other__28478__auto__){
var self__ = this;
var this__28477__auto____$1 = this;
if(cljs.core.truth_((function (){var and__27842__auto__ = other__28478__auto__;
if(cljs.core.truth_(and__27842__auto__)){
return ((this__28477__auto____$1.constructor === other__28478__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__28477__auto____$1,other__28478__auto__));
} else {
return and__27842__auto__;
}
})())){
return true;
} else {
return false;
}
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28490__auto__,k__28491__auto__){
var self__ = this;
var this__28490__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"yanker","yanker",1454070199),null,new cljs.core.Keyword(null,"shover","shover",-417196614),null], null), null),k__28491__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28490__auto____$1),self__.__meta),k__28491__auto__);
} else {
return (new active.clojure.lens.ExplicitLens(self__.yanker,self__.shover,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28491__auto__)),null));
}
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28488__auto__,k__28489__auto__,G__34553){
var self__ = this;
var this__28488__auto____$1 = this;
var pred__34558 = cljs.core.keyword_identical_QMARK_;
var expr__34559 = k__28489__auto__;
if(cljs.core.truth_(pred__34558.call(null,new cljs.core.Keyword(null,"yanker","yanker",1454070199),expr__34559))){
return (new active.clojure.lens.ExplicitLens(G__34553,self__.shover,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34558.call(null,new cljs.core.Keyword(null,"shover","shover",-417196614),expr__34559))){
return (new active.clojure.lens.ExplicitLens(self__.yanker,G__34553,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34558.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__34559))){
return (new active.clojure.lens.ExplicitLens(self__.yanker,self__.shover,G__34553,self__.__meta,self__.__extmap,null));
} else {
return (new active.clojure.lens.ExplicitLens(self__.yanker,self__.shover,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28489__auto__,G__34553),null));
}
}
}
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28493__auto__){
var self__ = this;
var this__28493__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"yanker","yanker",1454070199),self__.yanker],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"shover","shover",-417196614),self__.shover],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

active.clojure.lens.ExplicitLens.prototype.active$clojure$lens$Lens$ = cljs.core.PROTOCOL_SENTINEL;

active.clojure.lens.ExplicitLens.prototype.active$clojure$lens$Lens$_yank$arity$2 = (function (lens,data){
var self__ = this;
var lens__$1 = this;
return cljs.core.apply.call(null,self__.yanker,data,self__.args);
});

active.clojure.lens.ExplicitLens.prototype.active$clojure$lens$Lens$_shove$arity$3 = (function (lens,data,v){
var self__ = this;
var lens__$1 = this;
return cljs.core.apply.call(null,self__.shover,data,v,self__.args);
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28480__auto__,G__34553){
var self__ = this;
var this__28480__auto____$1 = this;
return (new active.clojure.lens.ExplicitLens(self__.yanker,self__.shover,self__.args,G__34553,self__.__extmap,self__.__hash));
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28486__auto__,entry__28487__auto__){
var self__ = this;
var this__28486__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28487__auto__)){
return this__28486__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28487__auto__,(0)),cljs.core._nth.call(null,entry__28487__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28486__auto____$1,entry__28487__auto__);
}
});

active.clojure.lens.ExplicitLens.prototype.call = (function() {
var G__34562 = null;
var G__34562__2 = (function (self__,data){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.active$clojure$lens$Lens$_yank$arity$2(null,data);
});
var G__34562__3 = (function (self__,data,v){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.active$clojure$lens$Lens$_shove$arity$3(null,data,v);
});
G__34562 = function(self__,data,v){
switch(arguments.length){
case 2:
return G__34562__2.call(this,self__,data);
case 3:
return G__34562__3.call(this,self__,data,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__34562.cljs$core$IFn$_invoke$arity$2 = G__34562__2;
G__34562.cljs$core$IFn$_invoke$arity$3 = G__34562__3;
return G__34562;
})()
;

active.clojure.lens.ExplicitLens.prototype.apply = (function (self__,args34556){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args34556)));
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IFn$_invoke$arity$1 = (function (data){
var self__ = this;
var this$ = this;
return this$.active$clojure$lens$Lens$_yank$arity$2(null,data);
});

active.clojure.lens.ExplicitLens.prototype.cljs$core$IFn$_invoke$arity$2 = (function (data,v){
var self__ = this;
var this$ = this;
return this$.active$clojure$lens$Lens$_shove$arity$3(null,data,v);
});

active.clojure.lens.ExplicitLens.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"yanker","yanker",-1200365570,null),new cljs.core.Symbol(null,"shover","shover",1223334913,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

active.clojure.lens.ExplicitLens.cljs$lang$type = true;

active.clojure.lens.ExplicitLens.cljs$lang$ctorPrSeq = (function (this__28515__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"active.clojure.lens/ExplicitLens");
});

active.clojure.lens.ExplicitLens.cljs$lang$ctorPrWriter = (function (this__28515__auto__,writer__28516__auto__){
return cljs.core._write.call(null,writer__28516__auto__,"active.clojure.lens/ExplicitLens");
});

active.clojure.lens.__GT_ExplicitLens = (function active$clojure$lens$__GT_ExplicitLens(yanker,shover,args){
return (new active.clojure.lens.ExplicitLens(yanker,shover,args,null,null,null));
});

active.clojure.lens.map__GT_ExplicitLens = (function active$clojure$lens$map__GT_ExplicitLens(G__34555){
return (new active.clojure.lens.ExplicitLens(new cljs.core.Keyword(null,"yanker","yanker",1454070199).cljs$core$IFn$_invoke$arity$1(G__34555),new cljs.core.Keyword(null,"shover","shover",-417196614).cljs$core$IFn$_invoke$arity$1(G__34555),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__34555),null,cljs.core.dissoc.call(null,G__34555,new cljs.core.Keyword(null,"yanker","yanker",1454070199),new cljs.core.Keyword(null,"shover","shover",-417196614),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});

/**
 * Returns a new lens defined by the given yanker function, which
 *   takes a data structure and must return the focused value, and the
 *   given shover function which takes a data structure and the new value
 *   in the focus. Any additional arguments are passed unchanged to the yank
 *   and shove functions.
 */
active.clojure.lens.lens = (function active$clojure$lens$lens(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34566 = arguments.length;
var i__28968__auto___34567 = (0);
while(true){
if((i__28968__auto___34567 < len__28967__auto___34566)){
args__28974__auto__.push((arguments[i__28968__auto___34567]));

var G__34568 = (i__28968__auto___34567 + (1));
i__28968__auto___34567 = G__34568;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((2) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((2)),(0),null)):null);
return active.clojure.lens.lens.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28975__auto__);
});

active.clojure.lens.lens.cljs$core$IFn$_invoke$arity$variadic = (function (yank,shove,args){
return (new active.clojure.lens.ExplicitLens(yank,shove,args,null,null,null));
});

active.clojure.lens.lens.cljs$lang$maxFixedArity = (2);

active.clojure.lens.lens.cljs$lang$applyTo = (function (seq34563){
var G__34564 = cljs.core.first.call(null,seq34563);
var seq34563__$1 = cljs.core.next.call(null,seq34563);
var G__34565 = cljs.core.first.call(null,seq34563__$1);
var seq34563__$2 = cljs.core.next.call(null,seq34563__$1);
return active.clojure.lens.lens.cljs$core$IFn$_invoke$arity$variadic(G__34564,G__34565,seq34563__$2);
});

active.clojure.lens.xmap_yank = (function active$clojure$lens$xmap_yank(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34573 = arguments.length;
var i__28968__auto___34574 = (0);
while(true){
if((i__28968__auto___34574 < len__28967__auto___34573)){
args__28974__auto__.push((arguments[i__28968__auto___34574]));

var G__34575 = (i__28968__auto___34574 + (1));
i__28968__auto___34574 = G__34575;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((3) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((3)),(0),null)):null);
return active.clojure.lens.xmap_yank.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28975__auto__);
});

active.clojure.lens.xmap_yank.cljs$core$IFn$_invoke$arity$variadic = (function (data,f,g,args){
return cljs.core.apply.call(null,f,data,args);
});

active.clojure.lens.xmap_yank.cljs$lang$maxFixedArity = (3);

active.clojure.lens.xmap_yank.cljs$lang$applyTo = (function (seq34569){
var G__34570 = cljs.core.first.call(null,seq34569);
var seq34569__$1 = cljs.core.next.call(null,seq34569);
var G__34571 = cljs.core.first.call(null,seq34569__$1);
var seq34569__$2 = cljs.core.next.call(null,seq34569__$1);
var G__34572 = cljs.core.first.call(null,seq34569__$2);
var seq34569__$3 = cljs.core.next.call(null,seq34569__$2);
return active.clojure.lens.xmap_yank.cljs$core$IFn$_invoke$arity$variadic(G__34570,G__34571,G__34572,seq34569__$3);
});

active.clojure.lens.xmap_shove = (function active$clojure$lens$xmap_shove(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34581 = arguments.length;
var i__28968__auto___34582 = (0);
while(true){
if((i__28968__auto___34582 < len__28967__auto___34581)){
args__28974__auto__.push((arguments[i__28968__auto___34582]));

var G__34583 = (i__28968__auto___34582 + (1));
i__28968__auto___34582 = G__34583;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((4) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((4)),(0),null)):null);
return active.clojure.lens.xmap_shove.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__28975__auto__);
});

active.clojure.lens.xmap_shove.cljs$core$IFn$_invoke$arity$variadic = (function (data,v,f,g,args){
return cljs.core.apply.call(null,g,v,args);
});

active.clojure.lens.xmap_shove.cljs$lang$maxFixedArity = (4);

active.clojure.lens.xmap_shove.cljs$lang$applyTo = (function (seq34576){
var G__34577 = cljs.core.first.call(null,seq34576);
var seq34576__$1 = cljs.core.next.call(null,seq34576);
var G__34578 = cljs.core.first.call(null,seq34576__$1);
var seq34576__$2 = cljs.core.next.call(null,seq34576__$1);
var G__34579 = cljs.core.first.call(null,seq34576__$2);
var seq34576__$3 = cljs.core.next.call(null,seq34576__$2);
var G__34580 = cljs.core.first.call(null,seq34576__$3);
var seq34576__$4 = cljs.core.next.call(null,seq34576__$3);
return active.clojure.lens.xmap_shove.cljs$core$IFn$_invoke$arity$variadic(G__34577,G__34578,G__34579,G__34580,seq34576__$4);
});

/**
 * Updates data using a lens.  The new value will be determined by
 *   applying `f` to the old value and any other supplied arguments.
 */
active.clojure.lens.overhaul = (function active$clojure$lens$overhaul(var_args){
var args34584 = [];
var len__28967__auto___34591 = arguments.length;
var i__28968__auto___34592 = (0);
while(true){
if((i__28968__auto___34592 < len__28967__auto___34591)){
args34584.push((arguments[i__28968__auto___34592]));

var G__34593 = (i__28968__auto___34592 + (1));
i__28968__auto___34592 = G__34593;
continue;
} else {
}
break;
}

var G__34590 = args34584.length;
switch (G__34590) {
case 3:
return active.clojure.lens.overhaul.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__28986__auto__ = (new cljs.core.IndexedSeq(args34584.slice((3)),(0),null));
return active.clojure.lens.overhaul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28986__auto__);

}
});

active.clojure.lens.overhaul.cljs$core$IFn$_invoke$arity$3 = (function (data,lens,f){
return active.clojure.lens.shove.call(null,data,lens,f.call(null,active.clojure.lens.yank.call(null,data,lens)));
});

active.clojure.lens.overhaul.cljs$core$IFn$_invoke$arity$variadic = (function (data,lens,f,args){
return active.clojure.lens.shove.call(null,data,lens,cljs.core.apply.call(null,f,active.clojure.lens.yank.call(null,data,lens),args));
});

active.clojure.lens.overhaul.cljs$lang$applyTo = (function (seq34585){
var G__34586 = cljs.core.first.call(null,seq34585);
var seq34585__$1 = cljs.core.next.call(null,seq34585);
var G__34587 = cljs.core.first.call(null,seq34585__$1);
var seq34585__$2 = cljs.core.next.call(null,seq34585__$1);
var G__34588 = cljs.core.first.call(null,seq34585__$2);
var seq34585__$3 = cljs.core.next.call(null,seq34585__$2);
return active.clojure.lens.overhaul.cljs$core$IFn$_invoke$arity$variadic(G__34586,G__34587,G__34588,seq34585__$3);
});

active.clojure.lens.overhaul.cljs$lang$maxFixedArity = (3);

/**
 * Returns a "view lens", that transforms a whole data structure
 * to something else (f) and back (g).
 */
active.clojure.lens.xmap = (function active$clojure$lens$xmap(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34598 = arguments.length;
var i__28968__auto___34599 = (0);
while(true){
if((i__28968__auto___34599 < len__28967__auto___34598)){
args__28974__auto__.push((arguments[i__28968__auto___34599]));

var G__34600 = (i__28968__auto___34599 + (1));
i__28968__auto___34599 = G__34600;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((2) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((2)),(0),null)):null);
return active.clojure.lens.xmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28975__auto__);
});

active.clojure.lens.xmap.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,args){
return cljs.core.apply.call(null,active.clojure.lens.lens,active.clojure.lens.xmap_yank,active.clojure.lens.xmap_shove,f,g,args);
});

active.clojure.lens.xmap.cljs$lang$maxFixedArity = (2);

active.clojure.lens.xmap.cljs$lang$applyTo = (function (seq34595){
var G__34596 = cljs.core.first.call(null,seq34595);
var seq34595__$1 = cljs.core.next.call(null,seq34595);
var G__34597 = cljs.core.first.call(null,seq34595__$1);
var seq34595__$2 = cljs.core.next.call(null,seq34595__$1);
return active.clojure.lens.xmap.cljs$core$IFn$_invoke$arity$variadic(G__34596,G__34597,seq34595__$2);
});

/**
 * Identity lens, that just show a data structure as it is.
 *        It's also the neutral element of lens concatenation
 *        reacl.lens/>>.
 */
active.clojure.lens.id = active.clojure.lens.xmap.call(null,cljs.core.identity,cljs.core.identity);
active.clojure.lens.comb_yank = (function active$clojure$lens$comb_yank(data,l1,l2){
return active.clojure.lens.yank.call(null,active.clojure.lens.yank.call(null,data,l1),l2);
});
active.clojure.lens.comb_shove = (function active$clojure$lens$comb_shove(data,v,l1,l2){
return active.clojure.lens.shove.call(null,data,l1,active.clojure.lens.shove.call(null,active.clojure.lens.yank.call(null,data,l1),l2,v));
});
active.clojure.lens._GT__GT_2 = (function active$clojure$lens$_GT__GT_2(l1,l2){
return active.clojure.lens.lens.call(null,active.clojure.lens.comb_yank,active.clojure.lens.comb_shove,l1,l2);
});
/**
 * Returns a concatenation of two or more lenses, so that the combination shows the
 * value of the last one, in a data structure that the first one is put
 * over.
 */
active.clojure.lens._GT__GT_ = (function active$clojure$lens$_GT__GT_(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34605 = arguments.length;
var i__28968__auto___34606 = (0);
while(true){
if((i__28968__auto___34606 < len__28967__auto___34605)){
args__28974__auto__.push((arguments[i__28968__auto___34606]));

var G__34607 = (i__28968__auto___34606 + (1));
i__28968__auto___34606 = G__34607;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active.clojure.lens._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active.clojure.lens._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (l1,lmore){
if(cljs.core.not_any_QMARK_.call(null,(function (p1__34601_SHARP_){
return !(((!((p1__34601_SHARP_ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__34601_SHARP_.active$clojure$lens$Lens$)))?true:(((!p1__34601_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,active.clojure.lens.Lens,p1__34601_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,active.clojure.lens.Lens,p1__34601_SHARP_)));
}),cljs.core.cons.call(null,l1,lmore))){
} else {
throw (new Error("Assert failed: (not-any? (fn* [p1__34601#] (not (satisfies? Lens p1__34601#))) (cons l1 lmore))"));
}

var res = l1;
var lmore__$1 = lmore;
while(true){
if(cljs.core.empty_QMARK_.call(null,lmore__$1)){
return res;
} else {
var G__34608 = active.clojure.lens._GT__GT_2.call(null,res,cljs.core.first.call(null,lmore__$1));
var G__34609 = cljs.core.rest.call(null,lmore__$1);
res = G__34608;
lmore__$1 = G__34609;
continue;
}
break;
}
});

active.clojure.lens._GT__GT_.cljs$lang$maxFixedArity = (1);

active.clojure.lens._GT__GT_.cljs$lang$applyTo = (function (seq34602){
var G__34603 = cljs.core.first.call(null,seq34602);
var seq34602__$1 = cljs.core.next.call(null,seq34602);
return active.clojure.lens._GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34603,seq34602__$1);
});

active.clojure.lens.default_yank = (function active$clojure$lens$default_yank(data,dflt){
if((data == null)){
return dflt;
} else {
return data;
}
});
active.clojure.lens.default_shove = (function active$clojure$lens$default_shove(v,dflt){
if(cljs.core._EQ_.call(null,dflt,v)){
return null;
} else {
return v;
}
});
/**
 * Returns a lens that shows nil as the given default value, but does not change any other value.
 */
active.clojure.lens.default$ = (function active$clojure$lens$default(dflt){
return active.clojure.lens.xmap.call(null,active.clojure.lens.default_yank,active.clojure.lens.default_shove,dflt);
});
active.clojure.lens.consx = (function active$clojure$lens$consx(v,coll){
if(((v == null)) && (cljs.core.empty_QMARK_.call(null,coll))){
return coll;
} else {
return cljs.core.cons.call(null,v,coll);
}
});
/**
 * A lens focusing on the first element in a collection. It
 *   yanks nil if the collection is empty, and will not insert nil into an empty collection.
 */
active.clojure.lens.head = active.clojure.lens.lens.call(null,(function (p1__34610_SHARP_){
return cljs.core.first.call(null,p1__34610_SHARP_);
}),(function (p1__34612_SHARP_,p2__34611_SHARP_){
return active.clojure.lens.consx.call(null,p2__34611_SHARP_,cljs.core.rest.call(null,p1__34612_SHARP_));
}));
/**
 * A lens focusing on the first element in a non-empty
 *   collection. Behaviour on an empty collection is undefined.
 */
active.clojure.lens.nel_head = active.clojure.lens.lens.call(null,(function (p1__34613_SHARP_){
return cljs.core.first.call(null,p1__34613_SHARP_);
}),(function (p1__34615_SHARP_,p2__34614_SHARP_){
return cljs.core.cons.call(null,p2__34614_SHARP_,cljs.core.rest.call(null,p1__34615_SHARP_));
}));
/**
 * A lens focusing on the all but the first element in a collection.
 *   Note that nil will be prepended when shoving into an empty collection.
 */
active.clojure.lens.tail = active.clojure.lens.lens.call(null,(function (p1__34616_SHARP_){
return cljs.core.rest.call(null,p1__34616_SHARP_);
}),(function (p1__34617_SHARP_,p2__34618_SHARP_){
return active.clojure.lens.consx.call(null,cljs.core.first.call(null,p1__34617_SHARP_),p2__34618_SHARP_);
}));
/**
 * A lens focusing on the all but the first element in a non-empty collection.
 *   Behaviour on an empty collection is undefined.
 */
active.clojure.lens.nel_tail = active.clojure.lens.lens.call(null,(function (p1__34619_SHARP_){
return cljs.core.rest.call(null,p1__34619_SHARP_);
}),(function (p1__34620_SHARP_,p2__34621_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__34620_SHARP_),p2__34621_SHARP_);
}));
/**
 * A lens over the nth element in a collection. Note that when shoving a
 *   new value nils may be added before the given position, if the the collection is smaller.
 */
active.clojure.lens.pos = (function active$clojure$lens$pos(n){
if(typeof n === 'number'){
} else {
throw (new Error("Assert failed: (number? n)"));
}

if((n >= (0))){
} else {
throw (new Error("Assert failed: (>= n 0)"));
}

if(cljs.core._EQ_.call(null,n,(0))){
return active.clojure.lens.head;
} else {
return active.clojure.lens._GT__GT_.call(null,active.clojure.lens.tail,active.clojure.lens.pos.call(null,(n - (1))));
}
});
/**
 * A lens that views a sequence as a set.
 */
active.clojure.lens.as_set = active.clojure.lens.lens.call(null,cljs.core.set,(function (p1__34622_SHARP_,p2__34623_SHARP_){
if(cljs.core._EQ_.call(null,cljs.core.set.call(null,p1__34622_SHARP_),p2__34623_SHARP_)){
return p1__34622_SHARP_;
} else {
return cljs.core.seq.call(null,p2__34623_SHARP_);
}
}));
active.clojure.lens.contains_shove = (function active$clojure$lens$contains_shove(data,mem_QMARK_,v){
if(cljs.core.truth_(mem_QMARK_)){
return cljs.core.conj.call(null,data,v);
} else {
return cljs.core.disj.call(null,data,v);
}
});
/**
 * Returns a lens showing the membership of the given value in a set.
 */
active.clojure.lens.contains = (function active$clojure$lens$contains(v){
return active.clojure.lens.lens.call(null,cljs.core.contains_QMARK_,active.clojure.lens.contains_shove,v);
});
/**
 * A lens that views a sequence of pairs as a map.
 */
active.clojure.lens.as_map = active.clojure.lens.xmap.call(null,(function (p1__34624_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__34624_SHARP_);
}),cljs.core.seq);
active.clojure.lens.member_shove = (function active$clojure$lens$member_shove(data,v,key,not_found){
if(cljs.core._EQ_.call(null,v,not_found)){
return cljs.core.dissoc.call(null,data,key);
} else {
return cljs.core.assoc.call(null,data,key,v);
}
});
/**
 * Returns a lens showing the value mapped to the given key in a map,
 *   not-found or nil if key is not present. Note that when not-found (or
 *   nil) is shoved into the map, the association is removed.
 */
active.clojure.lens.member = (function active$clojure$lens$member(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34631 = arguments.length;
var i__28968__auto___34632 = (0);
while(true){
if((i__28968__auto___34632 < len__28967__auto___34631)){
args__28974__auto__.push((arguments[i__28968__auto___34632]));

var G__34633 = (i__28968__auto___34632 + (1));
i__28968__auto___34632 = G__34633;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((1) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((1)),(0),null)):null);
return active.clojure.lens.member.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28975__auto__);
});

active.clojure.lens.member.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__34627){
var vec__34628 = p__34627;
var not_found = cljs.core.nth.call(null,vec__34628,(0),null);
return active.clojure.lens.lens.call(null,cljs.core.get,active.clojure.lens.member_shove,key,not_found);
});

active.clojure.lens.member.cljs$lang$maxFixedArity = (1);

active.clojure.lens.member.cljs$lang$applyTo = (function (seq34625){
var G__34626 = cljs.core.first.call(null,seq34625);
var seq34625__$1 = cljs.core.next.call(null,seq34625);
return active.clojure.lens.member.cljs$core$IFn$_invoke$arity$variadic(G__34626,seq34625__$1);
});

/**
 * A trivial lens that just shows nil over anything, and does never change anything.
 */
active.clojure.lens.void$ = active.clojure.lens.lens.call(null,cljs.core.constantly.call(null,null),(function (data,_){
return data;
}));
active.clojure.lens.is_shove = (function active$clojure$lens$is_shove(data,is_QMARK_,cmp){
if(cljs.core.truth_(is_QMARK_)){
return cmp;
} else {
if(cljs.core._EQ_.call(null,data,cmp)){
return null;
} else {
return data;
}
}
});
/**
 * Returns a lens showing if a data structure equals the non-nil value v.
 */
active.clojure.lens.is = (function active$clojure$lens$is(v){
if(!((v == null))){
} else {
throw (new Error("Assert failed: (not (nil? v))"));
}

return active.clojure.lens.lens.call(null,cljs.core._EQ_,active.clojure.lens.is_shove,v);
});
active.clojure.lens.mult_yank = (function active$clojure$lens$mult_yank(data,lenses){
return cljs.core.map.call(null,active.clojure.lens.yank,data,lenses);
});
active.clojure.lens.mult_shove = (function active$clojure$lens$mult_shove(data,v,lenses){
return cljs.core.map.call(null,active.clojure.lens.shove,data,lenses,v);
});
/**
 * Return the product of several lenses, which means that each lens is
 *   held over an element of a collection in the order they appear in the
 *   argument list.
 */
active.clojure.lens._STAR__STAR_ = (function active$clojure$lens$_STAR__STAR_(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34635 = arguments.length;
var i__28968__auto___34636 = (0);
while(true){
if((i__28968__auto___34636 < len__28967__auto___34635)){
args__28974__auto__.push((arguments[i__28968__auto___34636]));

var G__34637 = (i__28968__auto___34636 + (1));
i__28968__auto___34636 = G__34637;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return active.clojure.lens._STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

active.clojure.lens._STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (lenses){
return active.clojure.lens.lens.call(null,active.clojure.lens.mult_yank,active.clojure.lens.mult_shove,lenses);
});

active.clojure.lens._STAR__STAR_.cljs$lang$maxFixedArity = (0);

active.clojure.lens._STAR__STAR_.cljs$lang$applyTo = (function (seq34634){
return active.clojure.lens._STAR__STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34634));
});

active.clojure.lens.plus_yank = (function active$clojure$lens$plus_yank(data,lenses){
return cljs.core.map.call(null,active.clojure.lens.yank,cljs.core.repeat.call(null,data),lenses);
});
active.clojure.lens.plus_shove = (function active$clojure$lens$plus_shove(data,v,lenses){
return cljs.core.reduce.call(null,(function (data__$1,p__34642){
var vec__34643 = p__34642;
var l = cljs.core.nth.call(null,vec__34643,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__34643,(1),null);
return active.clojure.lens.shove.call(null,data__$1,l,v__$1);
}),data,cljs.core.map.call(null,cljs.core.vector,lenses,v));
});
/**
 * Returns a lens over some data structure that shows a sequence of
 *   elements that each of the given lenses show on that. Note that the
 *   behaviour is undefined if those lenses do not show distrinct parts
 *   of the data structure.
 */
active.clojure.lens._PLUS__PLUS_ = (function active$clojure$lens$_PLUS__PLUS_(var_args){
var args__28974__auto__ = [];
var len__28967__auto___34647 = arguments.length;
var i__28968__auto___34648 = (0);
while(true){
if((i__28968__auto___34648 < len__28967__auto___34647)){
args__28974__auto__.push((arguments[i__28968__auto___34648]));

var G__34649 = (i__28968__auto___34648 + (1));
i__28968__auto___34648 = G__34649;
continue;
} else {
}
break;
}

var argseq__28975__auto__ = ((((0) < args__28974__auto__.length))?(new cljs.core.IndexedSeq(args__28974__auto__.slice((0)),(0),null)):null);
return active.clojure.lens._PLUS__PLUS_.cljs$core$IFn$_invoke$arity$variadic(argseq__28975__auto__);
});

active.clojure.lens._PLUS__PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (lenses){
return active.clojure.lens.lens.call(null,active.clojure.lens.plus_yank,active.clojure.lens.plus_shove,lenses);
});

active.clojure.lens._PLUS__PLUS_.cljs$lang$maxFixedArity = (0);

active.clojure.lens._PLUS__PLUS_.cljs$lang$applyTo = (function (seq34646){
return active.clojure.lens._PLUS__PLUS_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34646));
});

active.clojure.lens.at_index_shove = (function active$clojure$lens$at_index_shove(coll,v,n){
var vec__34653 = cljs.core.split_at.call(null,n,coll);
var front = cljs.core.nth.call(null,vec__34653,(0),null);
var back = cljs.core.nth.call(null,vec__34653,(1),null);
return cljs.core.concat.call(null,front,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),cljs.core.rest.call(null,back));
});
/**
 * Returns a lens that focuses on the value at position n in a sequence.
 *   The sequence must have >= n elements.
 */
active.clojure.lens.at_index = (function active$clojure$lens$at_index(n){
return active.clojure.lens.lens.call(null,cljs.core.nth,active.clojure.lens.at_index_shove,n);
});

//# sourceMappingURL=lens.js.map