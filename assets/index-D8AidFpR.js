(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&e(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function e(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();const sr=!1;var jr=Array.isArray,Yr=Array.prototype.indexOf,Ur=Array.from,$r=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,Hr=Object.getOwnPropertyDescriptors,Kr=Object.getPrototypeOf;const x=2,hr=4,nr=8,er=16,T=32,W=64,Z=128,I=256,Y=512,m=1024,O=2048,z=4096,U=8192,M=16384,Wr=32768,zr=65536,Gr=1<<19,Jr=1<<20;function Qr(r){return r===this.v}function Xr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function rt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let lr=!1,tt=!1;function nt(){lr=!0}const et=2;function gr(r,t){var n={f:0,v:r,reactions:null,equals:Qr,rv:0,wv:0};return n}function lt(r){return ot(gr(r))}function ot(r){return d!==null&&d.f&x&&(E===null?Et([r]):E.push(r)),r}function ut(r,t){return d!==null&&ur()&&d.f&(x|er)&&(E===null||!E.includes(r))&&rt(),at(r,t)}function at(r,t){return r.equals(t)||(r.v,r.v=t,r.wv=Dr(),wr(r,O),ur()&&v!==null&&v.f&m&&!(v.f&T)&&(p!==null&&p.includes(r)?(b(v,O),X(v)):k===null?yt([r]):k.push(r))),t}function wr(r,t){var n=r.reactions;if(n!==null)for(var e=ur(),o=n.length,l=0;l<o;l++){var u=n[l],a=u.f;a&O||!e&&u===v||(b(u,t),a&(m|I)&&(a&x?wr(u,z):X(u)))}}var cr,mr,Er;function it(){if(cr===void 0){cr=window;var r=Element.prototype,t=Node.prototype;mr=fr(t,"firstChild").get,Er=fr(t,"nextSibling").get,r.__click=void 0,r.__className="",r.__attributes=null,r.__styles=null,r.__e=void 0,Text.prototype.__t=void 0}}function st(r=""){return document.createTextNode(r)}function yr(r){return mr.call(r)}function xr(r){return Er.call(r)}function A(r,t){return yr(r)}function vr(r,t=1,n=!1){let e=r;for(;t--;)e=xr(e);return e}function br(r){var t=r.children;if(t!==null){r.children=null;for(var n=0;n<t.length;n+=1){var e=t[n];e.f&x?or(e):S(e)}}}function ft(r){for(var t=r.parent;t!==null;){if(!(t.f&x))return t;t=t.parent}return null}function kr(r){var t,n=v;R(ft(r));try{br(r),t=Lr(r)}finally{R(n)}return t}function Tr(r){var t=kr(r),n=(F||r.f&I)&&r.deps!==null?z:m;b(r,n),r.equals(t)||(r.v=t,r.wv=Dr())}function or(r){br(r),q(r,0),b(r,M),r.v=r.children=r.deps=r.ctx=r.reactions=null}function ct(r,t){var n=t.last;n===null?t.last=t.first=r:(n.next=r,r.prev=n,t.last=r)}function G(r,t,n,e=!0){var o=(r&W)!==0,l=v,u={ctx:w,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:r|O,first:null,fn:t,last:null,next:null,parent:o?null:l,prev:null,teardown:null,transitions:null,wv:0};if(n){var a=D;try{_r(!0),ar(u),u.f|=Wr}catch(c){throw S(u),c}finally{_r(a)}}else t!==null&&X(u);var i=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Jr)===0;if(!i&&!o&&e&&(l!==null&&ct(u,l),d!==null&&d.f&x)){var f=d;(f.children??(f.children=[])).push(u)}return u}function vt(r){const t=G(W,r,!0);return(n={})=>new Promise(e=>{n.outro?wt(t,()=>{S(t),e(void 0)}):(S(t),e(void 0))})}function _t(r){return G(hr,r,!1)}function pt(r){return dt(r)}function dt(r,t=0){return G(nr|er|t,r,!0)}function ht(r,t=!0){return G(nr|T,r,!0,t)}function Nr(r){var t=r.teardown;if(t!==null){const n=d;L(null);try{t.call(null)}finally{L(n)}}}function Fr(r){var t=r.deriveds;if(t!==null){r.deriveds=null;for(var n=0;n<t.length;n+=1)or(t[n])}}function Or(r,t=!1){var n=r.first;for(r.first=r.last=null;n!==null;){var e=n.next;S(n,t),n=e}}function gt(r){for(var t=r.first;t!==null;){var n=t.next;t.f&T||S(t),t=n}}function S(r,t=!0){var n=!1;if((t||r.f&Gr)&&r.nodes_start!==null){for(var e=r.nodes_start,o=r.nodes_end;e!==null;){var l=e===o?null:xr(e);e.remove(),e=l}n=!0}Or(r,t&&!n),Fr(r),q(r,0),b(r,M);var u=r.transitions;if(u!==null)for(const i of u)i.stop();Nr(r);var a=r.parent;a!==null&&a.first!==null&&Sr(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes_start=r.nodes_end=null}function Sr(r){var t=r.parent,n=r.prev,e=r.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),t!==null&&(t.first===r&&(t.first=e),t.last===r&&(t.last=n))}function wt(r,t){var n=[];Cr(r,n,!0),mt(n,()=>{S(r),t()})}function mt(r,t){var n=r.length;if(n>0){var e=()=>--n||t();for(var o of r)o.out(e)}else t()}function Cr(r,t,n){if(!(r.f&U)){if(r.f^=U,r.transitions!==null)for(const u of r.transitions)(u.is_global||n)&&t.push(u);for(var e=r.first;e!==null;){var o=e.next,l=(e.f&zr)!==0||(e.f&T)!==0;Cr(e,t,l?n:!1),e=o}}}let j=!1,$=!1,H=null,D=!1;function _r(r){D=r}let rr=[],P=0;let d=null;function L(r){d=r}let v=null;function R(r){v=r}let E=null;function Et(r){E=r}let p=null,g=0,k=null;function yt(r){k=r}let Ar=1,K=0,F=!1,w=null;function Dr(){return++Ar}function ur(){return!lr||w!==null&&w.l===null}function J(r){var f;var t=r.f;if(t&O)return!0;if(t&z){var n=r.deps,e=(t&I)!==0;if(n!==null){var o,l,u=(t&Y)!==0,a=e&&v!==null&&!F,i=n.length;if(u||a){for(o=0;o<i;o++)l=n[o],(u||!((f=l==null?void 0:l.reactions)!=null&&f.includes(r)))&&(l.reactions??(l.reactions=[])).push(r);u&&(r.f^=Y)}for(o=0;o<i;o++)if(l=n[o],J(l)&&Tr(l),l.wv>r.wv)return!0}(!e||v!==null&&!F)&&b(r,m)}return!1}function xt(r,t){for(var n=t;n!==null;){if(n.f&Z)try{n.fn(r);return}catch{n.f^=Z}n=n.parent}throw j=!1,r}function bt(r){return(r.f&M)===0&&(r.parent===null||(r.parent.f&Z)===0)}function Q(r,t,n,e){if(j){if(n===null&&(j=!1),bt(t))throw r;return}n!==null&&(j=!0);{xt(r,t);return}}function Lr(r){var _;var t=p,n=g,e=k,o=d,l=F,u=E,a=w,i=r.f;p=null,g=0,k=null,d=i&(T|W)?null:r,F=!D&&(i&I)!==0,E=null,w=r.ctx,K++;try{var f=(0,r.fn)(),c=r.deps;if(p!==null){var s;if(q(r,g),c!==null&&g>0)for(c.length=g+p.length,s=0;s<p.length;s++)c[g+s]=p[s];else r.deps=c=p;if(!F)for(s=g;s<c.length;s++)((_=c[s]).reactions??(_.reactions=[])).push(r)}else c!==null&&g<c.length&&(q(r,g),c.length=g);return o!==null&&K++,f}finally{p=t,g=n,k=e,d=o,F=l,E=u,w=a}}function kt(r,t){let n=t.reactions;if(n!==null){var e=Yr.call(n,r);if(e!==-1){var o=n.length-1;o===0?n=t.reactions=null:(n[e]=n[o],n.pop())}}n===null&&t.f&x&&(p===null||!p.includes(t))&&(b(t,z),t.f&(I|Y)||(t.f^=Y),q(t,0))}function q(r,t){var n=r.deps;if(n!==null)for(var e=t;e<n.length;e++)kt(r,n[e])}function ar(r){var t=r.f;if(!(t&M)){b(r,m);var n=v,e=w;v=r;try{t&er?gt(r):Or(r),Fr(r),Nr(r);var o=Lr(r);r.teardown=typeof o=="function"?o:null,r.wv=Ar;var l=r.deps,u;sr&&tt&&r.f&O}catch(a){Q(a,r,n,e||r.ctx)}finally{v=n}}}function Tt(){if(P>1e3){P=0;try{Xr()}catch(r){if(H!==null)Q(r,H,null);else throw r}}P++}function Nt(r){var t=r.length;if(t!==0){Tt();var n=D;D=!0;try{for(var e=0;e<t;e++){var o=r[e];o.f&m||(o.f^=m);var l=[];Rr(o,l),Ft(l)}}finally{D=n}}}function Ft(r){var t=r.length;if(t!==0)for(var n=0;n<t;n++){var e=r[n];if(!(e.f&(M|U)))try{J(e)&&(ar(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Sr(e):e.fn=null))}catch(o){Q(o,e,null,e.ctx)}}}function Ot(){if($=!1,P>1001)return;const r=rr;rr=[],Nt(r),$||(P=0,H=null)}function X(r){$||($=!0,queueMicrotask(Ot)),H=r;for(var t=r;t.parent!==null;){t=t.parent;var n=t.f;if(n&(W|T)){if(!(n&m))return;t.f^=m}}rr.push(t)}function Rr(r,t){var n=r.first,e=[];r:for(;n!==null;){var o=n.f,l=(o&T)!==0,u=l&&(o&m)!==0,a=n.next;if(!u&&!(o&U))if(o&nr){if(l)n.f^=m;else try{J(n)&&ar(n)}catch(s){Q(s,n,null,n.ctx)}var i=n.first;if(i!==null){n=i;continue}}else o&hr&&e.push(n);if(a===null){let s=n.parent;for(;s!==null;){if(r===s)break r;var f=s.next;if(f!==null){n=f;continue r}s=s.parent}}n=a}for(var c=0;c<e.length;c++)i=e[c],t.push(i),Rr(i,t)}function Mr(r){var c;var t=r.f,n=(t&x)!==0;if(n&&t&M){var e=kr(r);return or(r),e}if(d!==null){E!==null&&E.includes(r)&&Zr();var o=d.deps;r.rv<K&&(r.rv=K,p===null&&o!==null&&o[g]===r?g++:p===null?p=[r]:p.push(r),k!==null&&v!==null&&v.f&m&&!(v.f&T)&&k.includes(r)&&(b(v,O),X(v)))}else if(n&&r.deps===null)for(var l=r,u=l.parent,a=l;u!==null;)if(u.f&x){var i=u;a=i,u=i.parent}else{var f=u;(c=f.deriveds)!=null&&c.includes(a)||(f.deriveds??(f.deriveds=[])).push(a);break}return n&&(l=r,J(l)&&Tr(l)),r.v}const St=-7169;function b(r,t){r.f=r.f&St|t}function Ct(r,t=!1,n){w={p:w,c:null,e:null,m:!1,s:r,x:null,l:null},lr&&!t&&(w.l={s:null,u:null,r1:[],r2:gr(!1)})}function At(r){const t=w;if(t!==null){const u=t.e;if(u!==null){var n=v,e=d;t.e=null;try{for(var o=0;o<u.length;o++){var l=u[o];R(l.effect),L(l.reaction),_t(l.fn)}}finally{R(n),L(e)}}w=t.p,t.m=!0}return{}}const Dt=["touchstart","touchmove"];function Lt(r){return Dt.includes(r)}const Pr=new Set,tr=new Set;function Rt(r){for(var t=0;t<r.length;t++)Pr.add(r[t]);for(var n of tr)n(r)}function B(r){var ir;var t=this,n=t.ownerDocument,e=r.type,o=((ir=r.composedPath)==null?void 0:ir.call(r))||[],l=o[0]||r.target,u=0,a=r.__root;if(a){var i=o.indexOf(a);if(i!==-1&&(t===document||t===window)){r.__root=t;return}var f=o.indexOf(t);if(f===-1)return;i<=f&&(u=i)}if(l=o[u]||r.target,l!==t){$r(r,"currentTarget",{configurable:!0,get(){return l||n}});var c=d,s=v;L(null),R(null);try{for(var _,h=[];l!==null;){var y=l.assignedSlot||l.parentNode||l.host||null;try{var N=l["__"+e];if(N!==void 0&&!l.disabled)if(jr(N)){var[Vr,...Br]=N;Vr.apply(l,[r,...Br])}else N.call(l,r)}catch(V){_?h.push(V):_=V}if(r.cancelBubble||y===t||y===null)break;l=y}if(_){for(let V of h)queueMicrotask(()=>{throw V});throw _}}finally{r.__root=t,delete r.currentTarget,L(c),R(s)}}}function Mt(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function Pt(r,t){var n=v;n.nodes_start===null&&(n.nodes_start=r,n.nodes_end=t)}function qr(r,t){var n=(t&et)!==0,e,o=!r.startsWith("<!>");return()=>{e===void 0&&(e=Mt(o?r:"<!>"+r),e=yr(e));var l=n?document.importNode(e,!0):e.cloneNode(!0);return Pt(l,l),l}}function Ir(r,t){r!==null&&r.before(t)}function qt(r,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function It(r,t){return Vt(r,t)}const C=new Map;function Vt(r,{target:t,anchor:n,props:e={},events:o,context:l,intro:u=!0}){it();var a=new Set,i=s=>{for(var _=0;_<s.length;_++){var h=s[_];if(!a.has(h)){a.add(h);var y=Lt(h);t.addEventListener(h,B,{passive:y});var N=C.get(h);N===void 0?(document.addEventListener(h,B,{passive:y}),C.set(h,1)):C.set(h,N+1)}}};i(Ur(Pr)),tr.add(i);var f=void 0,c=vt(()=>{var s=n??t.appendChild(st());return ht(()=>{if(l){Ct({});var _=w;_.c=l}o&&(e.$$events=o),f=r(s,e)||{},l&&At()}),()=>{var y;for(var _ of a){t.removeEventListener(_,B);var h=C.get(_);--h===0?(document.removeEventListener(_,B),C.delete(_)):C.set(_,h)}tr.delete(i),s!==n&&((y=s.parentNode)==null||y.removeChild(s))}});return Bt.set(f,c),f}let Bt=new WeakMap;function pr(r,t,n,e){var o=r.__attributes??(r.__attributes={});o[t]!==(o[t]=n)&&(n==null?r.removeAttribute(t):typeof n!="string"&&jt(r).includes(t)?r[t]=n:r.setAttribute(t,n))}var dr=new Map;function jt(r){var t=dr.get(r.nodeName);if(t)return t;dr.set(r.nodeName,t=[]);for(var n,e=r,o=Element.prototype;o!==e;){n=Hr(e);for(var l in n)n[l].set&&t.push(l);e=Kr(e)}return t}const Yt="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yt);nt();const Ut="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='26.6'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20308'%3e%3cpath%20fill='%23FF3E00'%20d='M239.682%2040.707C211.113-.182%20154.69-12.301%20113.895%2013.69L42.247%2059.356a82.198%2082.198%200%200%200-37.135%2055.056a86.566%2086.566%200%200%200%208.536%2055.576a82.425%2082.425%200%200%200-12.296%2030.719a87.596%2087.596%200%200%200%2014.964%2066.244c28.574%2040.893%2084.997%2053.007%20125.787%2027.016l71.648-45.664a82.182%2082.182%200%200%200%2037.135-55.057a86.601%2086.601%200%200%200-8.53-55.577a82.409%2082.409%200%200%200%2012.29-30.718a87.573%2087.573%200%200%200-14.963-66.244'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='M106.889%20270.841c-23.102%206.007-47.497-3.036-61.103-22.648a52.685%2052.685%200%200%201-9.003-39.85a49.978%2049.978%200%200%201%201.713-6.693l1.35-4.115l3.671%202.697a92.447%2092.447%200%200%200%2028.036%2014.007l2.663.808l-.245%202.659a16.067%2016.067%200%200%200%202.89%2010.656a17.143%2017.143%200%200%200%2018.397%206.828a15.786%2015.786%200%200%200%204.403-1.935l71.67-45.672a14.922%2014.922%200%200%200%206.734-9.977a15.923%2015.923%200%200%200-2.713-12.011a17.156%2017.156%200%200%200-18.404-6.832a15.78%2015.78%200%200%200-4.396%201.933l-27.35%2017.434a52.298%2052.298%200%200%201-14.553%206.391c-23.101%206.007-47.497-3.036-61.101-22.649a52.681%2052.681%200%200%201-9.004-39.849a49.428%2049.428%200%200%201%2022.34-33.114l71.664-45.677a52.218%2052.218%200%200%201%2014.563-6.398c23.101-6.007%2047.497%203.036%2061.101%2022.648a52.685%2052.685%200%200%201%209.004%2039.85a50.559%2050.559%200%200%201-1.713%206.692l-1.35%204.116l-3.67-2.693a92.373%2092.373%200%200%200-28.037-14.013l-2.664-.809l.246-2.658a16.099%2016.099%200%200%200-2.89-10.656a17.143%2017.143%200%200%200-18.398-6.828a15.786%2015.786%200%200%200-4.402%201.935l-71.67%2045.674a14.898%2014.898%200%200%200-6.73%209.975a15.9%2015.9%200%200%200%202.709%2012.012a17.156%2017.156%200%200%200%2018.404%206.832a15.841%2015.841%200%200%200%204.402-1.935l27.345-17.427a52.147%2052.147%200%200%201%2014.552-6.397c23.101-6.006%2047.497%203.037%2061.102%2022.65a52.681%2052.681%200%200%201%209.003%2039.848a49.453%2049.453%200%200%201-22.34%2033.12l-71.664%2045.673a52.218%2052.218%200%200%201-14.563%206.398'%3e%3c/path%3e%3c/svg%3e",$t="/vite.svg",Ht=(r,t)=>{ut(t,Mr(t)+1)};var Kt=qr("<button> </button>");function Wt(r){let t=lt(0);var n=Kt();n.__click=[Ht,t];var e=A(n);pt(()=>qt(e,`count is ${Mr(t)??""}`)),Ir(r,n)}Rt(["click"]);var zt=qr('<main><div><a href="https://vite.dev" target="_blank" rel="noreferrer"><img class="logo svelte-11cv5lq" alt="Vite Logo"></a> <a href="https://svelte.dev" target="_blank" rel="noreferrer"><img class="logo svelte svelte-11cv5lq" alt="Svelte Logo"></a></div> <h1>Vite + Svelte</h1> <div class="card"><!></div> <p>Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!</p> <p class="read-the-docs svelte-11cv5lq">Click on the Vite and Svelte logos to learn more</p></main>');function Gt(r){var t=zt(),n=A(t),e=A(n),o=A(e);pr(o,"src",$t);var l=vr(e,2),u=A(l);pr(u,"src",Ut);var a=vr(n,4),i=A(a);Wt(i),Ir(r,t)}It(Gt,{target:document.getElementById("app")});
