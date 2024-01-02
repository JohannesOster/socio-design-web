import{s as kt,e as xt,h as pt,u as Mt,g as wt,f as Et,i as oe,d as Lt,r as qt,j as it,b as at,k as gt,o as le,n as Kt}from"../chunks/scheduler.z-Fn2YEz.js";import{S as Ct,i as St,g as A,B as Ot,s as z,h as q,j as B,C as Tt,f as $,c as J,k as x,E as mt,a as G,x as N,A as H,d as W,t as Q,e as Bt,p as re,b as ae,F as ie,y as Dt,G as _t,r as ct,u as ut,v as ft,w as dt,D as rt,m as Qt,n as Zt}from"../chunks/index.gVW8BMik.js";import{g as ce,r as It,f as ue,i as fe,l as de,s as he}from"../chunks/storage.pMVU_F6z.js";import{a as Nt,p as pe}from"../chunks/store.8O7ZUhE7.js";var te={exports:{}};(function(e){(function(t,s,o){if(!t)return;for(var r={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},n={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},a={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},i,f=1;f<20;++f)r[111+f]="f"+f;for(f=0;f<=9;++f)r[f+96]=f.toString();function u(c,d,w){if(c.addEventListener){c.addEventListener(d,w,!1);return}c.attachEvent("on"+d,w)}function g(c){if(c.type=="keypress"){var d=String.fromCharCode(c.which);return c.shiftKey||(d=d.toLowerCase()),d}return r[c.which]?r[c.which]:n[c.which]?n[c.which]:String.fromCharCode(c.which).toLowerCase()}function h(c,d){return c.sort().join(",")===d.sort().join(",")}function m(c){var d=[];return c.shiftKey&&d.push("shift"),c.altKey&&d.push("alt"),c.ctrlKey&&d.push("ctrl"),c.metaKey&&d.push("meta"),d}function v(c){if(c.preventDefault){c.preventDefault();return}c.returnValue=!1}function S(c){if(c.stopPropagation){c.stopPropagation();return}c.cancelBubble=!0}function D(c){return c=="shift"||c=="ctrl"||c=="alt"||c=="meta"}function M(){if(!i){i={};for(var c in r)c>95&&c<112||r.hasOwnProperty(c)&&(i[r[c]]=c)}return i}function j(c,d,w){return w||(w=M()[c]?"keydown":"keypress"),w=="keypress"&&d.length&&(w="keydown"),w}function E(c){return c==="+"?["+"]:(c=c.replace(/\+{2}/g,"+plus"),c.split("+"))}function p(c,d){var w,O,U,Y=[];for(w=E(c),U=0;U<w.length;++U)O=w[U],a[O]&&(O=a[O]),d&&d!="keypress"&&l[O]&&(O=l[O],Y.push("shift")),D(O)&&Y.push(O);return d=j(O,Y,d),{key:O,modifiers:Y,action:d}}function _(c,d){return c===null||c===s?!1:c===d?!0:_(c.parentNode,d)}function L(c){var d=this;if(c=c||s,!(d instanceof L))return new L(c);d.target=c,d._callbacks={},d._directMap={};var w={},O,U=!1,Y=!1,ot=!1;function lt(b){b=b||{};var I=!1,k;for(k in w){if(b[k]){I=!0;continue}w[k]=0}I||(ot=!1)}function nt(b,I,k,C,P,Z){var T,R,st=[],tt=k.type;if(!d._callbacks[b])return[];for(tt=="keyup"&&D(b)&&(I=[b]),T=0;T<d._callbacks[b].length;++T)if(R=d._callbacks[b][T],!(!C&&R.seq&&w[R.seq]!=R.level)&&tt==R.action&&(tt=="keypress"&&!k.metaKey&&!k.ctrlKey||h(I,R.modifiers))){var ne=!C&&R.combo==P,se=C&&R.seq==C&&R.level==Z;(ne||se)&&d._callbacks[b].splice(T,1),st.push(R)}return st}function X(b,I,k,C){d.stopCallback(I,I.target||I.srcElement,k,C)||b(I,k)===!1&&(v(I),S(I))}d._handleKey=function(b,I,k){var C=nt(b,I,k),P,Z={},T=0,R=!1;for(P=0;P<C.length;++P)C[P].seq&&(T=Math.max(T,C[P].level));for(P=0;P<C.length;++P){if(C[P].seq){if(C[P].level!=T)continue;R=!0,Z[C[P].seq]=1,X(C[P].callback,k,C[P].combo,C[P].seq);continue}R||X(C[P].callback,k,C[P].combo)}var st=k.type=="keypress"&&Y;k.type==ot&&!D(b)&&!st&&lt(Z),Y=R&&k.type=="keydown"};function y(b){typeof b.which!="number"&&(b.which=b.keyCode);var I=g(b);if(I){if(b.type=="keyup"&&U===I){U=!1;return}d.handleKey(I,m(b),b)}}function K(){clearTimeout(O),O=setTimeout(lt,1e3)}function F(b,I,k,C){w[b]=0;function P(tt){return function(){ot=tt,++w[b],K()}}function Z(tt){X(k,tt,b),C!=="keyup"&&(U=g(tt)),setTimeout(lt,10)}for(var T=0;T<I.length;++T){var R=T+1===I.length,st=R?Z:P(C||p(I[T+1]).action);V(I[T],st,C,b,T)}}function V(b,I,k,C,P){d._directMap[b+":"+k]=I,b=b.replace(/\s+/g," ");var Z=b.split(" "),T;if(Z.length>1){F(b,Z,I,k);return}T=p(b,k),d._callbacks[T.key]=d._callbacks[T.key]||[],nt(T.key,T.modifiers,{type:T.action},C,b,P),d._callbacks[T.key][C?"unshift":"push"]({callback:I,modifiers:T.modifiers,action:T.action,seq:C,level:P,combo:b})}d._bindMultiple=function(b,I,k){for(var C=0;C<b.length;++C)V(b[C],I,k)},u(c,"keypress",y),u(c,"keydown",y),u(c,"keyup",y)}L.prototype.bind=function(c,d,w){var O=this;return c=c instanceof Array?c:[c],O._bindMultiple.call(O,c,d,w),O},L.prototype.unbind=function(c,d){var w=this;return w.bind.call(w,c,function(){},d)},L.prototype.trigger=function(c,d){var w=this;return w._directMap[c+":"+d]&&w._directMap[c+":"+d]({},c),w},L.prototype.reset=function(){var c=this;return c._callbacks={},c._directMap={},c},L.prototype.stopCallback=function(c,d){var w=this;if((" "+d.className+" ").indexOf(" mousetrap ")>-1||_(d,w.target))return!1;if("composedPath"in c&&typeof c.composedPath=="function"){var O=c.composedPath()[0];O!==c.target&&(d=O)}return d.tagName=="INPUT"||d.tagName=="SELECT"||d.tagName=="TEXTAREA"||d.isContentEditable},L.prototype.handleKey=function(){var c=this;return c._handleKey.apply(c,arguments)},L.addKeycodes=function(c){for(var d in c)c.hasOwnProperty(d)&&(r[d]=c[d]);i=null},L.init=function(){var c=L(s);for(var d in c)d.charAt(0)!=="_"&&(L[d]=function(w){return function(){return c[w].apply(c,arguments)}}(d))},L.init(),t.Mousetrap=L,e.exports&&(e.exports=L),typeof o=="function"&&o.amd&&o(function(){return L})})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(te);var ge=te.exports;const et=ce(ge),ht=(e,t)=>{const s=t.x-e.x,o=t.y-e.y,r=Math.sqrt(s*s+o*o);return r===0?{x:0,y:0}:{x:s/r,y:o/r}},ee=(e,t)=>{const s=t.x-e.x,o=t.y-e.y;return s*s+o*o},$t=(e,t)=>Math.sqrt(ee(e,t)),me=e=>JSON.parse(JSON.stringify(e)),yt=10,Rt=e=>{const t=me(e),s=Object.keys(t);for(let o=0;o<s.length;o++)for(let r=o+1;r<s.length;r++){const n=t[s[o]],l=t[s[r]],a=ee(n,l);if(a===0){n.x-=yt/2,l.x+=yt/2;continue}if(a<yt**2){const i=Math.sqrt(a),f=ht(n,l),u=(yt-i)/2;n.x-=f.x*u,n.y-=f.y*u,l.x+=f.x*u,l.y+=f.y*u}}return t},_e=.3,ye=.95,vt=50,Pt=(e,t)=>({x:e.x+t.x,y:e.y+t.y}),Vt=(e,t)=>({x:e.x-t.x,y:e.y-t.y}),ve=(e,t)=>({x:e*t.x,y:e*t.y}),be=(e,t)=>{const{container:s,maxIterations:o=50}=t,r=t.initialLayout||It(e,{container:s}),n=Rt(r),l=Math.sqrt(s.width*s.height)/Object.keys(n).length*.85;let a=_e;const i={};for(let f=0;f<o;f++)Object.keys(n).forEach(u=>i[u]={x:0,y:0}),Object.entries(n).forEach(([u,g])=>{Object.entries(n).forEach(([h,m])=>{if(u===h)return;const v=xe(g,m,l);i[u]=Vt(i[u],v),i[h]=Pt(i[h],v)})}),Object.values(e.edges).forEach(u=>{const g=Me(n[u.sourceId],n[u.targetId],l);i[u.sourceId]=Pt(i[u.sourceId],g),i[u.targetId]=Vt(i[u.targetId],g)}),Object.entries(n).forEach(([u,g])=>{const h=ve(a,i[u]);h.x=Math.max(-vt,Math.min(h.x,vt)),h.y=Math.max(-vt,Math.min(h.y,vt));const m=Pt(g,h);n[u]={x:Math.max(0,Math.min(m.x,s.width)),y:Math.max(0,Math.min(m.y,s.height))}}),a*=ye;return n},xe=(e,t,s)=>{const r=ht(e,t),n=s**2/Math.max($t(e,t),1e-4);return{x:n*r.x,y:n*r.y}},Me=(e,t,s)=>{const o=ht(e,t),r=$t(e,t)**2/s;return{x:r*o.x,y:r*o.y}},we=e=>{const t=Object.keys(e.nodes),s=t.length,o=Array.from({length:s},()=>Array(s).fill(1/0));for(const r in e.edges){const n=e.edges[r],l=t.indexOf(n.sourceId),a=t.indexOf(n.targetId);o[l][a]=n.weight}for(let r=0;r<s;r++)o[r][r]=0;for(let r=0;r<s;r++)for(let n=0;n<s;n++)for(let l=0;l<s;l++)o[n][r]+o[r][l]<o[n][l]&&(o[n][l]=o[n][r]+o[r][l]);return o},jt=1e-13,Ee=60,ke=(e,t)=>{const{container:s,maxIterations:o=1e3}=t,r=t.initialLayout||It(e,{container:s}),n=Rt(r),l=Object.keys(e.nodes).length;let a=we(e);const i=Math.sqrt(l);let f=Math.max(...a.flat().filter(isFinite));const u=Math.max(f>0?i/f:i,Ee);a=a.map(D=>D.map(M=>isFinite(M)?M:f));const g=l,h=a.map(D=>D.map(M=>u*M)),m=a.map(D=>D.map(M=>M===0?0:g/M**2)),v={};let S=0;for(const D in e.nodes)v[D]=S++;for(let D=0;D<o;D++){let M=0;for(const j in n){const E=v[j];let p=0,_=0,L=0,c=0,d=0;for(const nt in n){if(j===nt)continue;const X=v[nt],y=n[j].x-n[nt].x,K=n[j].y-n[nt].y,F=Math.sqrt(y*y+K*K),V=F*(y*y+K*K);p+=m[E][X]*(y-h[E][X]*y/F),_+=m[E][X]*(K-h[E][X]*K/F),L+=m[E][X]*(1-h[E][X]*K*K/V),c+=m[E][X]*h[E][X]*y*K/V,d+=m[E][X]*(1-h[E][X]*y*y/V)}const w=L*d-c*c;if(Math.abs(w)<jt)continue;const O=Ce([[L,c],[c,d]],[p,_]);if(!O){console.error("No Solution");continue}const U=O[0],Y=O[1];if(U*U+Y*Y<jt)continue;const ot=n[j].x-U,lt=n[j].y-Y;n[j].x=Math.max(0,Math.min(ot,s.width))+(Math.random()-.5)*.001,n[j].y=Math.max(0,Math.min(lt,s.height))+(Math.random()-.5)*1e-4,M=Math.max(M,U*U+Y*Y)}if(M<jt)break}return n};function Ce(e,t){const s=e.length;if(!e.every(n=>n.length===s))throw new Error("Matrix A must be square.");if(t.length!==s)throw new Error("Length of vector b must match the dimensions of matrix A.");const o=e.map((n,l)=>[...n,t[l]]);for(let n=0;n<s;n++){let l=Math.abs(o[n][n]),a=n;for(let i=n+1;i<s;i++)Math.abs(o[i][n])>l&&(l=Math.abs(o[i][n]),a=i);if([o[n],o[a]]=[o[a],o[n]],o[n][n]===0)return null;for(let i=n+1;i<s;i++){const f=-o[i][n]/o[n][n];for(let u=n;u<s+1;u++)n===u?o[i][u]=0:o[i][u]+=f*o[n][u]}}const r=new Array(s).fill(0);for(let n=s-1;n>-1;n--){r[n]=o[n][s]/o[n][n];for(let l=n-1;l>-1;l--)o[l][s]-=o[l][n]*r[n]}return r}function Se(e){let t,s,o,r,n,l,a,i,f,u,g;const h=e[4].default,m=xt(h,e,e[3],null);return{c(){t=A("aside"),s=A("button"),o=Ot("svg"),r=Ot("g"),n=Ot("path"),a=z(),m&&m.c(),this.h()},l(v){t=q(v,"ASIDE",{class:!0});var S=B(t);s=q(S,"BUTTON",{class:!0});var D=B(s);o=Tt(D,"svg",{height:!0,width:!0,viewBox:!0,class:!0});var M=B(o);r=Tt(M,"g",{});var j=B(r);n=Tt(j,"path",{fill:!0,d:!0}),B(n).forEach($),j.forEach($),M.forEach($),D.forEach($),a=J(S),m&&m.l(S),S.forEach($),this.h()},h(){x(n,"fill","current-color"),x(n,"d",`M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z`),x(o,"height","16px"),x(o,"width","16px"),x(o,"viewBox","0 0 185.343 185.343"),x(o,"class","transition-[transform] transform ease-in-out duration-500 sm:duration-300 svelte-sde3ur"),mt(o,"rotate-y",e[2]&&e[0]==="left"||!e[2]&&e[0]==="right"),x(s,"class",l=pt(`toggle-btn ${e[0]}`)+" svelte-sde3ur"),x(t,"class",i=pt(`side-panel ${e[0]}`)+" svelte-sde3ur"),mt(t,"open",e[2])},m(v,S){G(v,t,S),N(t,s),N(s,o),N(o,r),N(r,n),N(t,a),m&&m.m(t,null),f=!0,u||(g=H(s,"click",e[5]),u=!0)},p(v,[S]){(!f||S&5)&&mt(o,"rotate-y",v[2]&&v[0]==="left"||!v[2]&&v[0]==="right"),(!f||S&1&&l!==(l=pt(`toggle-btn ${v[0]}`)+" svelte-sde3ur"))&&x(s,"class",l),m&&m.p&&(!f||S&8)&&Mt(m,h,v,v[3],f?Et(h,v[3],S,null):wt(v[3]),null),(!f||S&1&&i!==(i=pt(`side-panel ${v[0]}`)+" svelte-sde3ur"))&&x(t,"class",i),(!f||S&5)&&mt(t,"open",v[2])},i(v){f||(W(m,v),f=!0)},o(v){Q(m,v),f=!1},d(v){v&&$(t),m&&m.d(v),u=!1,g()}}}function Ie(e,t,s){let{$$slots:o={},$$scope:r}=t,{position:n="left"}=t,l=!1;const a=()=>{s(2,l=!l)},i=()=>a();return e.$$set=f=>{"position"in f&&s(0,n=f.position),"$$scope"in f&&s(3,r=f.$$scope)},[n,a,l,r,o,i]}class Ut extends Ct{constructor(t){super(),St(this,t,Ie,Se,kt,{position:0,toggle:1})}get toggle(){return this.$$.ctx[1]}}const $e=e=>{let t=null,s=!1,o=null,r=null,n=null,l=null;e.on("mousedown","node",a=>{a.originalEvent.shiftKey&&(s=!0,o=a.target,o.ungrabify(),r=e.add({group:"nodes",data:{id:"ghost-node"},position:a.position,classes:["ghost-node"],style:{width:1,height:1,opacity:0}}),t=e.add({group:"edges",data:{id:"temp-edge",source:o.id(),target:r.id(),weight:1},style:{"line-style":"dashed"},classes:["temporary-edge"]}),e.boxSelectionEnabled(!1))}),e.on("mousemove",a=>{const f=(u,g)=>{let h=u.position(),m=g.position();return Math.sqrt(Math.pow(h.x-m.x,2)+Math.pow(h.y-m.y,2))<30};if(s&&t){r.position(a.position);let u=e.nodes().filter(g=>g.id()===o.id()||g.id()===r.id()?!1:f(g,r)?(l&&l.id()&&l.id()===g.id()||(l=g,g.addClass("highlight")),!0):(g.removeClass("highlight"),!1)).first();u.id()?n=u:(l=null,n=r)}}),e.on("mouseup",a=>{s&&t&&(n!==e&&n.isNode()&&e.add({group:"edges",data:{source:o.id(),target:n.id(),weight:1}}),e.remove(r),o.grabify(),e.boxSelectionEnabled(!0),t.remove(),t=null,s=!1,o=null,l?.removeClass("highlight"),l=null)})},Le=.3,Oe=.95,bt=50,At=(e,t)=>({x:e.x+t.x,y:e.y+t.y}),Xt=(e,t)=>({x:e.x-t.x,y:e.y-t.y}),Te=(e,t)=>({x:e*t.x,y:e*t.y}),De=(e,t)=>{const{container:s,maxIterations:o=100}=t,r=t.initialLayout||It(e,{container:s}),n=Rt(r),l=Math.sqrt(s.width*s.height)/Object.keys(n).length*.85;let a=Le;const i={};for(let f=0;f<o;f++)Object.keys(n).forEach(u=>i[u]={x:0,y:0}),Object.entries(n).forEach(([u,g])=>{Object.entries(n).forEach(([h,m])=>{if(u===h)return;const v=Ne(g,m,l);i[u]=Xt(i[u],v),i[h]=At(i[h],v)})}),Object.values(e.edges).forEach(u=>{const g=Pe(n[u.sourceId],n[u.targetId],l,u.weight);i[u.sourceId]=At(i[u.sourceId],g),i[u.targetId]=Xt(i[u.targetId],g)}),Object.entries(n).forEach(([u,g])=>{const h=Te(a,i[u]);h.x=Math.max(-bt,Math.min(h.x,bt)),h.y=Math.max(-bt,Math.min(h.y,bt));const m=At(g,h);n[u]={x:Math.max(0,Math.min(m.x,s.width)),y:Math.max(0,Math.min(m.y,s.height))}}),a*=Oe;return n},Ne=(e,t,s)=>{const r=ht(e,t),n=s**2/Math.max($t(e,t),1e-4);return{x:n*r.x,y:n*r.y}},Pe=(e,t,s,o)=>{const r=ht(e,t),n=.5*o*$t(e,t)**2/s;return{x:n*r.x,y:n*r.y}},Ft=e=>{let t=e.length,s=0,o=0,r=0,n=0;for(let i of e)s+=i.x,o+=i.y,r+=i.x*i.y,n+=i.x**2;let l=(t*r-s*o)/(t*n-s**2),a=(o-l*s)/t;return{slope:l,intercept:a}},je=(e,t,s)=>{let o=0,r=0,n=e.reduce((l,a)=>l+a.y,0)/e.length;for(let l of e)o+=(l.y-n)**2,r+=(l.y-(t*l.x+s))**2;return 1-r/o},Ae=(e,t)=>{if(e===0)return{x:t,y:0};let s=-1/e,o=Math.sqrt(1+s**2);return{x:t/o,y:t*s/o}},qe=(e,t,s)=>t===1/0||t===-1/0?e.y:(e.y-s)/t,Ke=(e,t,s,o,r)=>{if(!t[s])return[];let n=t[s],l=[],a=[];if(Object.values(e.edges).forEach(h=>{h.sourceId===s&&t[h.targetId]?(a.push(t[h.targetId]),l.push(h.targetId)):h.targetId===s&&t[h.sourceId]&&(a.push(t[h.sourceId]),l.push(h.sourceId))}),a=a.slice(0,o),l=l.slice(0,o),a.length<2)return[];let i=[n,...a],{slope:f,intercept:u}=Ft(i);return je(i,f,u)>=r?[s,...l]:[]},Re=(e,t,s)=>{e[t]={x:e[t].x+s.x,y:e[t].y+s.y}},Yt=(e,t)=>{if(e.length<=1)return e;let s=e.map(l=>t[l]),{slope:o,intercept:r}=Ft(s),n=e.map(l=>({nodeId:l,projection:qe(t[l],o,r)}));return n.sort((l,a)=>l.projection-a.projection),n.map(l=>l.nodeId)},Fe=(e,t,s,o)=>{let r=[];Object.keys(e.nodes).forEach(l=>{let a=Ke(e,t,l,s,o);a.length>0&&r.push(Yt(a,t))});let n=[];return r.forEach(l=>{let a=n.find(i=>i.some(f=>l.includes(f)));if(a){let i=[...new Set([...a,...l])];n=n.filter(f=>f!==a),n.push(Yt(i,t))}else n.push(l)}),n},Be=e=>({}),Gt=e=>({}),Ve=e=>({}),Ht=e=>({});function zt(e){let t,s,o,r,n,l,a,i,f,u,g,h,m,v,S;const D=e[3].body,M=xt(D,e,e[2],Ht),j=e[3].footer,E=xt(j,e,e[2],Gt);return{c(){t=A("div"),s=A("div"),r=z(),n=A("div"),l=A("div"),a=A("div"),i=A("div"),M&&M.c(),f=z(),u=A("div"),E&&E.c(),this.h()},l(p){t=q(p,"DIV",{class:!0,"aria-labelledby":!0,role:!0,"aria-modal":!0});var _=B(t);s=q(_,"DIV",{class:!0}),B(s).forEach($),r=J(_),n=q(_,"DIV",{class:!0});var L=B(n);l=q(L,"DIV",{class:!0});var c=B(l);a=q(c,"DIV",{class:!0});var d=B(a);i=q(d,"DIV",{class:!0});var w=B(i);M&&M.l(w),w.forEach($),f=J(d),u=q(d,"DIV",{class:!0});var O=B(u);E&&E.l(O),O.forEach($),d.forEach($),c.forEach($),L.forEach($),_.forEach($),this.h()},h(){x(s,"class","fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"),x(i,"class","bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 mt-3 text-center sm:mt-0 sm:text-left"),x(u,"class","bg-gray-50 px-4 py-3 sm:flex sm:px-6 sm:gap-x-3"),x(a,"class","relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"),x(l,"class","flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"),x(n,"class","fixed inset-0 z-10 w-screen overflow-y-auto"),x(t,"class","relative z-20"),x(t,"aria-labelledby","modal-title"),x(t,"role","dialog"),x(t,"aria-modal","true")},m(p,_){G(p,t,_),N(t,s),N(t,r),N(t,n),N(n,l),N(l,a),N(a,i),M&&M.m(i,null),N(a,f),N(a,u),E&&E.m(u,null),m=!0,v||(S=[H(a,"click",ie(e[4])),H(t,"click",function(){oe(e[1])&&e[1].apply(this,arguments)})],v=!0)},p(p,_){e=p,M&&M.p&&(!m||_&4)&&Mt(M,D,e,e[2],m?Et(D,e[2],_,Ve):wt(e[2]),Ht),E&&E.p&&(!m||_&4)&&Mt(E,j,e,e[2],m?Et(j,e[2],_,Be):wt(e[2]),Gt)},i(p){m||(p&&(o||Lt(()=>{o=Dt(s,Nt,{duration:80}),o.start()})),W(M,p),W(E,p),p&&(g||Lt(()=>{g=Dt(n,Nt,{duration:80}),g.start()})),p&&(h||Lt(()=>{h=Dt(t,Nt,{duration:80}),h.start()})),m=!0)},o(p){Q(M,p),Q(E,p),m=!1},d(p){p&&$(t),M&&M.d(p),E&&E.d(p),v=!1,qt(S)}}}function Ue(e){let t,s,o=e[0]&&zt(e);return{c(){o&&o.c(),t=Bt()},l(r){o&&o.l(r),t=Bt()},m(r,n){o&&o.m(r,n),G(r,t,n),s=!0},p(r,[n]){r[0]?o?(o.p(r,n),n&1&&W(o,1)):(o=zt(r),o.c(),W(o,1),o.m(t.parentNode,t)):o&&(re(),Q(o,1,1,()=>{o=null}),ae())},i(r){s||(W(o),s=!0)},o(r){Q(o),s=!1},d(r){r&&$(t),o&&o.d(r)}}}function Xe(e,t,s){let{$$slots:o={},$$scope:r}=t,{showModal:n}=t,{toggleModal:l}=t;function a(i){it.call(this,e,i)}return e.$$set=i=>{"showModal"in i&&s(0,n=i.showModal),"toggleModal"in i&&s(1,l=i.toggleModal),"$$scope"in i&&s(2,r=i.$$scope)},[n,l,r,o,a]}class Ye extends Ct{constructor(t){super(),St(this,t,Xe,Ue,kt,{showModal:0,toggleModal:1})}}function Ge(e){let t,s,o,r;const n=e[4].default,l=xt(n,e,e[3],null);return{c(){t=A("button"),l&&l.c(),this.h()},l(a){t=q(a,"BUTTON",{type:!0,class:!0});var i=B(t);l&&l.l(i),i.forEach($),this.h()},h(){x(t,"type","button"),x(t,"class",e[0])},m(a,i){G(a,t,i),l&&l.m(t,null),s=!0,o||(r=[H(t,"click",e[5]),H(t,"mouseover",e[6]),H(t,"mouseenter",e[7]),H(t,"mouseleave",e[8])],o=!0)},p(a,[i]){l&&l.p&&(!s||i&8)&&Mt(l,n,a,a[3],s?Et(n,a[3],i,null):wt(a[3]),null),(!s||i&1)&&x(t,"class",a[0])},i(a){s||(W(l,a),s=!0)},o(a){Q(l,a),s=!1},d(a){a&&$(t),l&&l.d(a),o=!1,qt(r)}}}function He(e,t,s){let o,{$$slots:r={},$$scope:n}=t,{variant:l="primary"}=t,{intent:a="none"}=t;function i(h){it.call(this,e,h)}function f(h){it.call(this,e,h)}function u(h){it.call(this,e,h)}function g(h){it.call(this,e,h)}return e.$$set=h=>{"variant"in h&&s(1,l=h.variant),"intent"in h&&s(2,a=h.intent),"$$scope"in h&&s(3,n=h.$$scope)},e.$$.update=()=>{e.$$.dirty&6&&s(0,o=`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm sm:w-auto transition-colors 
      ${l==="primary"?"bg-blue-600 text-white hover:bg-blue-500":""}
      ${l==="secondary"?"text-gray-900 ring-1 ring-gray-300 hover:bg-gray-100":""}
      ${a==="success"?"border-green-500":""}
      ${a==="danger"?"border-red-500":""}
      ${a==="warning"?"border-yellow-500":""}`)},[o,l,a,n,r,i,f,u,g]}class Jt extends Ct{constructor(t){super(),St(this,t,He,Ge,kt,{variant:1,intent:2})}}function ze(e){let t,s,o,r="Node Label",n,l;return{c(){t=A("form"),s=A("div"),o=A("label"),o.textContent=r,n=z(),l=A("input"),this.h()},l(a){t=q(a,"FORM",{class:!0});var i=B(t);s=q(i,"DIV",{class:!0});var f=B(s);o=q(f,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),rt(o)!=="svelte-aqzoii"&&(o.textContent=r),n=J(f),l=q(f,"INPUT",{type:!0,name:!0,id:!0,class:!0,placeholder:!0}),f.forEach($),i.forEach($),this.h()},h(){x(o,"for","node-label"),x(o,"class","block text-sm font-medium leading-6 text-gray-900"),x(l,"type","text"),x(l,"name","node-label"),x(l,"id","node-label"),x(l,"class","mousetrap block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"),x(l,"placeholder","Davic"),x(s,"class","flex flex-col gap-y-1"),x(t,"class","mt-2")},m(a,i){G(a,t,i),N(t,s),N(s,o),N(s,n),N(s,l),e[11](l)},p:Kt,d(a){a&&$(t),e[11](null)}}}function Je(e){let t;return{c(){t=Qt("Speichern")},l(s){t=Zt(s,"Speichern")},m(s,o){G(s,t,o)},d(s){s&&$(t)}}}function We(e){let t;return{c(){t=Qt("Abbrechen")},l(s){t=Zt(s,"Abbrechen")},m(s,o){G(s,t,o)},d(s){s&&$(t)}}}function Qe(e){let t,s,o,r;return t=new Jt({props:{$$slots:{default:[Je]},$$scope:{ctx:e}}}),t.$on("click",e[9]),o=new Jt({props:{variant:"secondary",$$slots:{default:[We]},$$scope:{ctx:e}}}),o.$on("click",e[10]),{c(){ct(t.$$.fragment),s=z(),ct(o.$$.fragment)},l(n){ut(t.$$.fragment,n),s=J(n),ut(o.$$.fragment,n)},m(n,l){ft(t,n,l),G(n,s,l),ft(o,n,l),r=!0},p(n,l){const a={};l&1073741824&&(a.$$scope={dirty:l,ctx:n}),t.$set(a);const i={};l&1073741824&&(i.$$scope={dirty:l,ctx:n}),o.$set(i)},i(n){r||(W(t.$$.fragment,n),W(o.$$.fragment,n),r=!0)},o(n){Q(t.$$.fragment,n),Q(o.$$.fragment,n),r=!1},d(n){n&&$(s),dt(t,n),dt(o,n)}}}function Ze(e){let t,s="Left Panel";return{c(){t=A("div"),t.textContent=s,this.h()},l(o){t=q(o,"DIV",{class:!0,"data-svelte-h":!0}),rt(t)!=="svelte-1yxmhp8"&&(t.textContent=s),this.h()},h(){x(t,"class","w-full h-full bg-white")},m(o,r){G(o,t,r)},p:Kt,d(o){o&&$(t)}}}function tn(e){let t,s,o,r="Random Layout",n,l,a="Cola",i,f,u="Fruchterman & Reingold",g,h,m="Scaled Fruchterman & Reingold",v,S,D="Kamada Kawai",M,j;return{c(){t=A("div"),s=A("div"),o=A("button"),o.textContent=r,n=z(),l=A("button"),l.textContent=a,i=z(),f=A("button"),f.textContent=u,g=z(),h=A("button"),h.textContent=m,v=z(),S=A("button"),S.textContent=D,this.h()},l(E){t=q(E,"DIV",{class:!0});var p=B(t);s=q(p,"DIV",{class:!0});var _=B(s);o=q(_,"BUTTON",{class:!0,"data-svelte-h":!0}),rt(o)!=="svelte-1mc77fm"&&(o.textContent=r),n=J(_),l=q(_,"BUTTON",{class:!0,"data-svelte-h":!0}),rt(l)!=="svelte-ijy8o5"&&(l.textContent=a),i=J(_),f=q(_,"BUTTON",{class:!0,"data-svelte-h":!0}),rt(f)!=="svelte-19iltcm"&&(f.textContent=u),g=J(_),h=q(_,"BUTTON",{class:!0,"data-svelte-h":!0}),rt(h)!=="svelte-rd6oal"&&(h.textContent=m),v=J(_),S=q(_,"BUTTON",{class:!0,"data-svelte-h":!0}),rt(S)!=="svelte-tqwtfe"&&(S.textContent=D),_.forEach($),p.forEach($),this.h()},h(){x(o,"class","py-2"),x(l,"class","py-2"),x(f,"class","py-2"),x(h,"class","py-2"),x(S,"class","py-2"),x(s,"class","flex flex-col bg-white rounded-md divide-y divide-gray-100"),x(t,"class","p-4 pl-0")},m(E,p){G(E,t,p),N(t,s),N(s,o),N(s,n),N(s,l),N(s,i),N(s,f),N(s,g),N(s,h),N(s,v),N(s,S),M||(j=[H(o,"click",e[15]),H(l,"click",e[16]),H(f,"click",e[17]),H(h,"click",e[18]),H(S,"click",e[19])],M=!0)},p:Kt,d(E){E&&$(t),M=!1,qt(j)}}}function en(e){let t,s,o,r,n,l,a,i,f,u,g,h;function m(p){e[12](p)}function v(p){e[13](p)}let S={$$slots:{footer:[Qe],body:[ze]},$$scope:{ctx:e}};e[6]!==void 0&&(S.toggleModal=e[6]),e[5]!==void 0&&(S.showModal=e[5]),o=new Ye({props:S}),at.push(()=>_t(o,"toggleModal",m)),at.push(()=>_t(o,"showModal",v));function D(p){e[14](p)}let M={position:"left",$$slots:{default:[Ze]},$$scope:{ctx:e}};e[2]!==void 0&&(M.toggle=e[2]),a=new Ut({props:M}),at.push(()=>_t(a,"toggle",D));function j(p){e[20](p)}let E={position:"right",$$slots:{default:[tn]},$$scope:{ctx:e}};return e[3]!==void 0&&(E.toggle=e[3]),u=new Ut({props:E}),at.push(()=>_t(u,"toggle",j)),{c(){t=A("div"),s=z(),ct(o.$$.fragment),l=z(),ct(a.$$.fragment),f=z(),ct(u.$$.fragment),this.h()},l(p){t=q(p,"DIV",{id:!0,class:!0}),B(t).forEach($),s=J(p),ut(o.$$.fragment,p),l=J(p),ut(a.$$.fragment,p),f=J(p),ut(u.$$.fragment,p),this.h()},h(){x(t,"id","cy-container"),x(t,"class","w-full h-full overflow-x-clip")},m(p,_){G(p,t,_),e[8](t),G(p,s,_),ft(o,p,_),G(p,l,_),ft(a,p,_),G(p,f,_),ft(u,p,_),h=!0},p(p,[_]){const L={};_&1073741840&&(L.$$scope={dirty:_,ctx:p}),!r&&_&64&&(r=!0,L.toggleModal=p[6],gt(()=>r=!1)),!n&&_&32&&(n=!0,L.showModal=p[5],gt(()=>n=!1)),o.$set(L);const c={};_&1073741824&&(c.$$scope={dirty:_,ctx:p}),!i&&_&4&&(i=!0,c.toggle=p[2],gt(()=>i=!1)),a.$set(c);const d={};_&1073741826&&(d.$$scope={dirty:_,ctx:p}),!g&&_&8&&(g=!0,d.toggle=p[3],gt(()=>g=!1)),u.$set(d)},i(p){h||(W(o.$$.fragment,p),W(a.$$.fragment,p),W(u.$$.fragment,p),h=!0)},o(p){Q(o.$$.fragment,p),Q(a.$$.fragment,p),Q(u.$$.fragment,p),h=!1},d(p){p&&($(t),$(s),$(l),$(f)),e[8](null),dt(o,p),dt(a,p),dt(u,p)}}}const Wt=64;function nn(e,t,s){let o,r,n,l,a,i=!1,f=()=>{if(i){const y=document.getElementById("cmd-palette-input");y&&(y.value="")}s(5,i=!i)};const u={randomLayout:It,fruchtermanReingold:be,kamadaKawai:ke,scaledFruchtermanReingold:De},g=y=>{const{graph:K,layout:F}=ue(r.elements());let V=o.getBoundingClientRect();V.width/=1.5,V.height/=1.5;const b=u[y](K,{container:V,initialLayout:F});return r.batch(()=>{r.nodes().forEach(I=>{const k=b[I.id()];k&&I.position(k)})}),y==="scaledFruchtermanReingold"&&(Object.values(K.edges).forEach(({weight:k})=>{}),Fe(K,F,3,.95).forEach(k=>{if(k.length>=3){let C=k.map(R=>F[R]),{slope:P}=Ft(C),T=Ae(P,30);k.forEach((R,st)=>{let tt=st%2===0?T:{x:-T.x,y:-T.y};Re(F,R,tt)})}}),r.batch(()=>{r.nodes().forEach(k=>{const C=F[k.id()];C&&k.position(C)})})),r.fit(void 0,Wt),b};let h={x:0,y:0};const m=y=>{const K=r.pan(),F=r.zoom();return{x:(y.x-K.x)/F,y:(y.y-K.y)/F}},v=y=>{y.preventDefault(),he(r.json().elements),pe({message:"✅ Erfolgreich gespeichert!"})},S=y=>{y.preventDefault(),f(),setTimeout(()=>a?.focus(),10)},D=y=>{i&&f()},M=y=>{if(y.preventDefault&&y.preventDefault(),!i)return;const K=document.getElementById("node-label");if(!K)return;const F=K.value;if(F){const V=m(h);r.add({group:"nodes",data:{id:F},position:V})}f()},j=y=>{r.elements("node:selected").forEach(V=>{r.remove(V.connectedEdges()),r.remove(V)}),r.elements("edge:selected").forEach(V=>{r.remove(V)})},E=()=>{et.bind("[",n),et.bind("]",l),et.bind("command+s",v),et.bind("command+a",S),et.bind("esc",D),et.bind(["return","enter"],M),et.bind("l",M),et.bind(["delete","backspace"],j)};le(()=>{document.body.addEventListener("mousemove",y=>{h={x:y.clientX,y:y.clientY}}),o&&(s(1,r=fe({initialElements:de(),container:o,layoutPadding:Wt})),E(),$e(r),l())});function p(y){at[y?"unshift":"push"](()=>{o=y,s(0,o)})}const _=()=>et.trigger("return"),L=()=>et.trigger("esc");function c(y){at[y?"unshift":"push"](()=>{a=y,s(4,a)})}function d(y){f=y,s(6,f)}function w(y){i=y,s(5,i)}function O(y){n=y,s(2,n)}const U=()=>g("randomLayout"),Y=()=>r.layout({name:"cola",animate:!1}).run(),ot=()=>g("fruchtermanReingold"),lt=()=>g("scaledFruchtermanReingold"),nt=()=>g("kamadaKawai");function X(y){l=y,s(3,l)}return[o,r,n,l,a,i,f,g,p,_,L,c,d,w,O,U,Y,ot,lt,nt,X]}class an extends Ct{constructor(t){super(),St(this,t,nn,en,kt,{})}}export{an as component};
