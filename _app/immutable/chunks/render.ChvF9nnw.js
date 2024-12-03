import{a7 as T,a8 as m,B as I,q as D,a9 as F,C as P,aa as $,i as j,b as M,d as z,ab as G,h as w,ac as V,M as N,k as g,e as S,l as p,z as W,ad as R,ae as L,f as J,A as K,af as Q,ag as U,w as X,g as Z,ah as x,n as ee,p as ae,a as te,W as re}from"./runtime.CrQ4ahhK.js";import{c as ne}from"./disclose-version.CgJN0qD7.js";function ie(e){var a=I,r=D;T(null),m(null);try{return e()}finally{T(a),m(r)}}const se=new Set,C=new Set;function oe(e,a,r,i){function s(t){if(i.capture||b.call(a,t),!t.cancelBubble)return ie(()=>r.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{a.addEventListener(e,s,i)}):a.addEventListener(e,s,i),s}function he(e,a,r,i,s){var t={capture:i,passive:s},l=oe(e,a,r,t);(a===document.body||a===window||a===document)&&F(()=>{a.removeEventListener(e,l,t)})}function b(e){var O;var a=this,r=a.ownerDocument,i=e.type,s=((O=e.composedPath)==null?void 0:O.call(e))||[],t=s[0]||e.target,l=0,v=e.__root;if(v){var c=s.indexOf(v);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var _=s.indexOf(a);if(_===-1)return;c<=_&&(l=c)}if(t=s[l]||e.target,t!==a){$(e,"currentTarget",{configurable:!0,get(){return t||r}});var A=I,f=D;T(null),m(null);try{for(var n,o=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+i];if(h!==void 0&&!t.disabled)if(j(h)){var[B,...Y]=h;B.apply(t,[e,...Y])}else h.call(t,e)}catch(E){n?o.push(E):n=E}if(e.cancelBubble||d===a||d===null)break;t=d}if(n){for(let E of o)queueMicrotask(()=>{throw E});throw n}}finally{e.__root=a,delete e.currentTarget,T(A),m(f)}}}let u;function ue(){u=void 0}function pe(e){let a=null,r=w;var i;if(w){for(a=p,u===void 0&&(u=W(document.head));u!==null&&(u.nodeType!==8||u.data!==V);)u=N(u);u===null?g(!1):u=S(N(u))}w||(i=document.head.appendChild(M()));try{z(()=>e(i),G)}finally{r&&(g(!0),u=p,S(a))}}const le=["touchstart","touchmove"];function fe(e){return le.includes(e)}let H=!0;function ve(e,a){var r=a==null?"":typeof a=="object"?a+"":a;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function de(e,a){return q(e,a)}function ye(e,a){R(),a.intro=a.intro??!1;const r=a.target,i=w,s=p;try{for(var t=W(r);t&&(t.nodeType!==8||t.data!==V);)t=N(t);if(!t)throw L;g(!0),S(t),J();const l=q(e,{...a,anchor:t});if(p===null||p.nodeType!==8||p.data!==K)throw Q(),L;return g(!1),l}catch(l){if(l===L)return a.recover===!1&&U(),R(),X(r),g(!1),de(e,a);throw l}finally{g(i),S(s),ue()}}const y=new Map;function q(e,{target:a,anchor:r,props:i={},events:s,context:t,intro:l=!0}){R();var v=new Set,c=f=>{for(var n=0;n<f.length;n++){var o=f[n];if(!v.has(o)){v.add(o);var d=fe(o);a.addEventListener(o,b,{passive:d});var h=y.get(o);h===void 0?(document.addEventListener(o,b,{passive:d}),y.set(o,1)):y.set(o,h+1)}}};c(Z(se)),C.add(c);var _=void 0,A=x(()=>{var f=r??a.appendChild(M());return ee(()=>{if(t){ae({});var n=re;n.c=t}s&&(i.$$events=s),w&&ne(f,null),H=l,_=e(f,i)||{},H=!0,w&&(D.nodes_end=p),t&&te()}),()=>{var d;for(var n of v){a.removeEventListener(n,b);var o=y.get(n);--o===0?(document.removeEventListener(n,b),y.delete(n)):y.set(n,o)}C.delete(c),k.delete(_),f!==r&&((d=f.parentNode)==null||d.removeChild(f))}});return k.set(_,A),_}let k=new WeakMap;function ge(e){const a=k.get(e);a&&a()}export{ye as a,H as b,he as e,pe as h,de as m,ve as s,ge as u};
