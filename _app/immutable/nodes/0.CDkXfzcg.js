var Lt=Object.defineProperty;var tt=a=>{throw TypeError(a)};var wt=(a,t,n)=>t in a?Lt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var at=(a,t,n)=>wt(a,typeof t!="symbol"?t+"":t,n),Tt=(a,t,n)=>t.has(a)||tt("Cannot "+n);var J=(a,t,n)=>(Tt(a,t,"read from private field"),n?n.call(a):t.get(a)),et=(a,t,n)=>t.has(a)?tt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,n);import{d as R,a as b,t as A,b as Pt}from"../chunks/disclose-version.DbyXBNy8.js";import{aI as Ct,aJ as Et,aK as At,d as St,h as V,f as gt,o as Rt,n as Nt,l as $t,at as Ut,N as Ot,aL as It,aM as Ft,ai as Bt,X as jt,q as rt,aN as Mt,C as qt,O as U,aO as zt,a7 as nt,a8 as st,B as Dt,aP as Gt,p as F,aQ as y,aR as vt,T as C,a as B,t as q,_ as u,aS as E,am as L,$ as P,ap as ht,c as N,r as $,s as z,S as Ht}from"../chunks/runtime.CBHSsCeg.js";import{b as Kt,h as mt,e as Jt}from"../chunks/render.CL1o7URY.js";import{i as j}from"../chunks/if.BKQyGIsT.js";import{s as Vt}from"../chunks/snippet.BnOw9RTy.js";import{s as _t,n as pt,p as O,b as bt,c as W,d as Q,e as X,a as D,i as Wt}from"../chunks/i18n.BqGRBZLG.js";import"../chunks/legacy.tUknUlng.js";import{i as Y}from"../chunks/lifecycle.DLnqM_eY.js";import{L as Qt,s as Xt,a as it,g as Yt}from"../chunks/index.Dvaue-QW.js";import{b as G}from"../chunks/paths.CPp-0BR9.js";import{g as Zt,i as ta,b as aa}from"../chunks/entry.CgwGl8_h.js";import{e as ea,i as ra}from"../chunks/each.CRE-f4i3.js";import{s as H}from"../chunks/attributes.DsxGu77u.js";function na(a,t,n){V&&gt();var r=a,e=Ut,s,i=Ct()?Et:At;St(()=>{i(e,e=t())&&(s&&Rt(s),s=Nt(()=>n(r)))}),V&&(r=$t)}function sa(a,t,n,r,e){var g;V&&gt();var s=(g=t.$$slots)==null?void 0:g[n],i=!1;s===!0&&(s=t.children,i=!0),s===void 0||s(a,i?()=>r:r)}function ia(a,t,n){if(n){if(a.classList.contains(t))return;a.classList.add(t)}else{if(!a.classList.contains(t))return;a.classList.remove(t)}}const oa=()=>performance.now(),T={tick:a=>requestAnimationFrame(a),now:()=>oa(),tasks:new Set};function yt(a){T.tasks.forEach(t=>{t.c(a)||(T.tasks.delete(t),t.f())}),T.tasks.size!==0&&T.tick(yt)}function ca(a){let t;return T.tasks.size===0&&T.tick(yt),{promise:new Promise(n=>{T.tasks.add(t={c:a,f:n})}),abort(){T.tasks.delete(t)}}}function ot(a,t){a.dispatchEvent(new CustomEvent(t))}function la(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function ct(a){const t={},n=a.split(";");for(const r of n){const[e,s]=r.split(":");if(!e||s===void 0)break;const i=la(e.trim());t[i]=s.trim()}return t}const ua=a=>a;function lt(a,t,n,r){var e=(a&zt)!==0,s="in",i,g=t.inert,o,f;function _(){var l=Dt,h=rt;nt(null),st(null);try{return i??(i=n()(t,(r==null?void 0:r())??{},{direction:s}))}finally{nt(l),st(h)}}var m={is_global:e,in(){t.inert=g,o==null||o.abort(),ot(t,"introstart"),o=kt(t,_(),f,1,()=>{ot(t,"introend"),o==null||o.abort(),o=i=void 0})},out(l){{l==null||l(),i=void 0;return}},stop:()=>{o==null||o.abort()}},v=rt;if((v.transitions??(v.transitions=[])).push(m),Kt){var d=e;if(!d){for(var c=v.parent;c&&c.f&Ot;)for(;(c=c.parent)&&!(c.f&It););d=!c||(c.f&Ft)!==0}d&&Bt(()=>{jt(()=>m.in())})}}function kt(a,t,n,r,e){if(Mt(t)){var s,i=!1;return qt(()=>{if(!i){var l=t({direction:"in"});s=kt(a,l,n,r,e)}}),{abort:()=>{i=!0,s==null||s.abort()},deactivate:()=>s.deactivate(),reset:()=>s.reset(),t:()=>s.t()}}if(!(t!=null&&t.duration))return e(),{abort:U,deactivate:U,reset:U,t:()=>r};const{delay:g=0,css:o,tick:f,easing:_=ua}=t;var m=[];if(f&&f(0,1),o){var v=ct(o(0,1));m.push(v,v)}var d=()=>1-r,c=a.animate(m,{duration:g});return c.onfinish=()=>{var l=1-r,h=r-l,k=t.duration*Math.abs(h),w=[];if(k>0){if(o)for(var x=Math.ceil(k/16.666666666666668),p=0;p<=x;p+=1){var M=l+h*_(p/x),K=o(M,1-M);w.push(ct(K))}d=()=>{var S=c.currentTime;return l+h*_(S/k)},f&&ca(()=>{if(c.playState!=="running")return!1;var S=d();return f(S,1-S),!0})}c=a.animate(w,{duration:k,fill:"forwards"}),c.onfinish=()=>{d=()=>r,f==null||f(r,1-r),e()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=U)},deactivate:()=>{e=U},reset:()=>{},t:()=>d()}}const fa=Gt;function da(a,t){return a.protocol!==t.protocol?t.href:t.password||t.username?"//"+[t.username,t.password].filter(Boolean).join(":")+"@"+t.host+t.pathname+t.search+t.hash:a.host!==t.host?"//"+t.host+t.pathname+t.search+t.hash:t.pathname+t.search+t.hash}function ga(a,t,n){const r=new URL(n??"/",t).pathname;return a.origin!==t.origin||!a.pathname.startsWith(r)}var va=A('<link rel="alternate">');function ha(a,t){F(t,!1);const n=_t(),r=()=>bt(W,"$page",n),e=E(),s=E(),i=E(),g=pt(G,new URL(r().url))||"/";let o=O(t,"availableLanguageTags",8),f=O(t,"strategy",8),_=O(t,"currentLang",8);const m=(c,l)=>{const h=[];for(const k of o()){const w=l.getLocalisedPath(c,k),x=X(w,g,void 0),p=new URL(x,new URL(r().url)).href;h.push(p)}return h};y(()=>r(),()=>{L(e,Q(r().url.pathname,g)[0])}),y(()=>(P(f()),u(e),P(_())),()=>{L(s,f().getCanonicalPath(u(e),_()))}),y(()=>(u(s),P(f())),()=>{L(i,m(u(s),f()))}),vt(),Y();var v=R(),d=C(v);j(d,()=>o().length>=1,c=>{var l=R(),h=C(l);ea(h,1,()=>u(i),ra,(k,w,x)=>{var p=va();q(()=>{H(p,"hreflang",o()[x]),H(p,"href",u(w))}),b(k,p)}),b(c,l)}),b(a,v),B()}const ma=(a,t)=>`${Qt}=${a};Path=${t};SameSite=lax;Max-Age=31557600`;function _a(a,t){F(t,!1);const n=_t(),r=()=>bt(W,"$page",n),e=E(),s=E(),i=pt(G,new URL(r().url))||"/";let g=O(t,"languageTag",24,()=>{}),o=O(t,"i18n",8),f=E(0);function _(d,c){try{const l=new URL(Zt(W).url),[h,k]=Q(l.pathname,i),w=o().strategy.getCanonicalPath(h,u(e)),x=new URL(l);x.pathname=X(w,i,k);const p=new URL(d,new URL(x));if(ga(p,l,i)||o().config.exclude(p.pathname))return d;const M=c??u(e),[K,S]=Q(p.pathname,i),xt=o().strategy.getLocalisedPath(K,M),Z=new URL(p);return Z.pathname=X(xt,i,S),da(l,Z)}catch{return d}}Xt({translateHref:_}),y(()=>(P(g()),P(o()),r()),()=>{L(e,g()??o().getLanguageFromUrl(r().url))}),y(()=>(P(o()),u(e)),()=>{o().config.runtime.setLanguageTag(u(e))}),y(()=>u(e),()=>{document.documentElement.lang=u(e)}),y(()=>(P(o()),u(e)),()=>{document.documentElement.dir=o().config.textDirection[u(e)]??"ltr"}),y(()=>(u(e),u(f)),()=>{u(e)&&L(f,u(f)+1)}),y(()=>(u(e),u(f),it),()=>{u(e)&&(u(f)>1||fa)&&ta(it)}),y(()=>u(e),()=>{L(s,u(e))}),y(()=>u(e),()=>{document.cookie=ma(u(e),i)}),vt(),Y();var m=R();mt(d=>{var c=R(),l=C(c);j(l,()=>o().config.seo.noAlternateLinks!==!0&&!o().config.exclude(r().url.pathname),h=>{ha(h,{get availableLanguageTags(){return o().config.runtime.availableLanguageTags},get strategy(){return o().strategy},get currentLang(){return u(e)}})}),b(d,c)});var v=C(m);na(v,()=>u(s),d=>{var c=R(),l=C(c);sa(l,t,"default",{}),b(d,c)}),b(a,m),B()}const pa=!0,ba="always",Ha=Object.freeze(Object.defineProperty({__proto__:null,prerender:pa,trailingSlash:ba},Symbol.toStringTag,{value:"Module"}));function ya(a){const t=a-1;return t*t*t+1}function ut(a){const t=typeof a=="string"&&a.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[a,"px"]}function ft(a,{delay:t=0,duration:n=400,easing:r=ya,x:e=0,y:s=0,opacity:i=0}={}){const g=getComputedStyle(a),o=+g.opacity,f=g.transform==="none"?"":g.transform,_=o*(1-i),[m,v]=ut(e),[d,c]=ut(s);return{delay:t,duration:n,easing:r,css:(l,h)=>`
			transform: ${f} translate(${(1-l)*m}${v}, ${(1-l)*d}${c});
			opacity: ${o-_*h}`}}var I;class ka{constructor(){et(this,I,ht(D(localStorage.getItem("color-scheme"))));at(this,"toggle",()=>{const t=this.current==="dark"?"light":"dark";document.documentElement.className=t,localStorage.setItem("color-scheme",t),this.current=t})}get current(){return u(J(this,I))}set current(t){L(J(this,I),D(t))}}I=new WeakMap;const dt=new ka;var xa=A("<div>☀️</div>"),La=A("<div>🌙</div>"),wa=A('<button aria-label="Toggle theme"><!></button>');function Ta(a,t){F(t,!1);let n=E(!1);setTimeout(()=>L(n,!0)),Y();var r=wa(),e=N(r);j(e,()=>dt.current==="dark",s=>{var i=xa();lt(1,i,()=>ft,()=>({x:10})),b(s,i)},s=>{var i=La();lt(1,i,()=>ft,()=>({x:-10})),b(s,i)}),$(r),q(()=>ia(r,"invisible",!u(n))),Jt("click",r,function(...s){var i;(i=dt.toggle)==null||i.apply(this,s)}),b(a,r),B()}var Pa=A('<a class="link h-fit"><button class="rounded-md  bg-cyan-700/10 px-4 py-2 text-sm text-primary transition-colors hover:bg-cyan-800/20 dark:bg-secondary/30 dark:text-secondary dark:hover:bg-secondary/20">🏠</button></a>'),Ca=A('<header class="relative z-10 flex h-14 items-center justify-between bg-gradient-to-b from-primary/10 to-transparent py-2"><section class="container flex flex-shrink-0 items-center justify-between gap-4 text-nowrap"><a class="flex items-center font-logo text-3xl text-cyan-900 dark:text-secondary">Chillyhill ⛰︎</a> <div class="flex flex-nowrap items-center gap-4"><!> <!></div></section></header>');function Ea(a,t){F(t,!0);const n=["/","uk/","de/","ru/"],r=()=>window.location.pathname;let e=ht(D(r()));aa(()=>L(e,D(r())));const s=Yt(),[i,g]=s;var o=Ca(),f=N(o),_=N(f);q(()=>H(_,"href",i(`${G}/`,void 0)));var m=z(_,2),v=N(m);j(v,()=>!n.includes(u(e)),c=>{var l=Pa();q(()=>H(l,"href",i(G+"/",void 0))),b(c,l)});var d=z(v,2);Ta(d,{}),$(m),$(f),$(o),b(a,o),B()}var Aa=Pt('<script defer="" src="https://cloud.umami.is/script.js" data-website-id="6f688109-6024-4733-9aad-826681849c91"><\/script><!---->',1),Sa=A(`<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-800"><!> <main class="flex flex-grow flex-col"><!></main> <footer class="relative h-16 bg-[url('/images/background-banner.svg')] bg-cover bg-center"><div class="absolute h-6 w-full bg-gradient-to-t from-transparent to-gray-50 dark:to-gray-800"></div> <section class="container"><div class="flex pt-8 text-xs text-cyan-900 dark:text-secondary">Denys Sych © 2025</div></section></footer></div>`);function Ka(a,t){F(t,!0),mt(n=>{var r=R(),e=C(r);j(e,()=>!0,s=>{var i=Aa(),g=z(C(i));b(s,i)}),b(n,r)}),_a(a,{i18n:Wt,children:(n,r)=>{var e=Sa(),s=N(e);Ea(s,{});var i=z(s,2),g=N(i);Vt(g,()=>t.children),$(i),Ht(2),$(e),b(n,e)},$$slots:{default:!0}}),B()}export{Ka as component,Ha as universal};
