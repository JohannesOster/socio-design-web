import{s as G,e as W,u as Z,g as ee,f as te,r as ye,d as Ee,o as we}from"../chunks/scheduler.z-Fn2YEz.js";import{S as K,i as F,g as B,s as O,h as D,j as T,c as z,f as E,k as b,a as M,x,A as q,d as H,t as j,B as J,C as V,D as A,E as U,p as ue,b as fe,y as xe,z as ke,e as se,r as me,u as pe,v as he,w as ge,m as _e,n as ve,o as be}from"../chunks/index.gVW8BMik.js";import{e as ne,u as $e,o as Ce}from"../chunks/each.UI1-pmzy.js";import{f as le,p as Be}from"../chunks/store.8O7ZUhE7.js";import{i as De,l as Te,s as ae}from"../chunks/storage.MZbkbrJL.js";const Ne=d=>({}),oe=d=>({}),Le=d=>({}),ie=d=>({});function Ie(d){let s,a,e,o,i,v,g,l,u,$,p;const t=d[2].head,r=W(t,d,d[1],ie),f=d[2].body,_=W(f,d,d[1],oe);return{c(){s=B("button"),a=B("dt"),r&&r.c(),e=O(),o=B("span"),i=O(),v=B("dd"),g=B("ul"),_&&_.c(),this.h()},l(c){s=D(c,"BUTTON",{class:!0});var y=T(s);a=D(y,"DT",{class:!0});var C=T(a);r&&r.l(C),e=z(C),o=D(C,"SPAN",{"aria-expanded":!0,class:!0}),T(o).forEach(E),C.forEach(E),i=z(y),v=D(y,"DD",{"aria-hidden":!0,class:!0});var h=T(v);g=D(h,"UL",{class:!0});var n=T(g);_&&_.l(n),n.forEach(E),h.forEach(E),y.forEach(E),this.h()},h(){b(o,"aria-expanded",d[0]),b(o,"class","trigger svelte-1gg9hqc"),b(a,"class","relative flex w-full justify-between items-center"),b(g,"class","text-left leading-7 text-gray-600 overflow-hidden"),b(v,"aria-hidden",l=!d[0]),b(v,"class","expandable-body svelte-1gg9hqc"),b(s,"class","cursor-pointer w-full flex flex-col px-3 py-2")},m(c,y){M(c,s,y),x(s,a),r&&r.m(a,null),x(a,e),x(a,o),x(s,i),x(s,v),x(v,g),_&&_.m(g,null),u=!0,$||(p=q(s,"click",d[3]),$=!0)},p(c,[y]){r&&r.p&&(!u||y&2)&&Z(r,t,c,c[1],u?te(t,c[1],y,Le):ee(c[1]),ie),(!u||y&1)&&b(o,"aria-expanded",c[0]),_&&_.p&&(!u||y&2)&&Z(_,f,c,c[1],u?te(f,c[1],y,Ne):ee(c[1]),oe),(!u||y&1&&l!==(l=!c[0]))&&b(v,"aria-hidden",l)},i(c){u||(H(r,c),H(_,c),u=!0)},o(c){j(r,c),j(_,c),u=!1},d(c){c&&E(s),r&&r.d(c),_&&_.d(c),$=!1,p()}}}function Se(d,s,a){let{$$slots:e={},$$scope:o}=s,i=!1;const v=()=>a(0,i=!i);return d.$$set=g=>{"$$scope"in g&&a(1,o=g.$$scope)},[i,o,e,v]}class Oe extends K{constructor(s){super(),F(this,s,Se,Ie,G,{})}}function re(d,s,a){const e=d.slice();return e[5]=s[a],e}function ce(d){let s,a,e,o=[],i=new Map,v,g,l,u=ne(d[1]);const $=p=>p[5].name;for(let p=0;p<u.length;p+=1){let t=re(d,u,p),r=$(t);i.set(r,o[p]=de(r,t))}return{c(){s=B("div"),a=B("div"),e=B("dl");for(let p=0;p<o.length;p+=1)o[p].c();this.h()},l(p){s=D(p,"DIV",{class:!0});var t=T(s);a=D(t,"DIV",{class:!0});var r=T(a);e=D(r,"DL",{class:!0});var f=T(e);for(let _=0;_<o.length;_+=1)o[_].l(f);f.forEach(E),r.forEach(E),t.forEach(E),this.h()},h(){b(e,"class","divide-y divide-gray-100"),b(a,"class","bg-white rounded-md overflow-y-scroll p-1"),b(s,"class","flex-1 flex flex-col overflow-y-clip")},m(p,t){M(p,s,t),x(s,a),x(a,e);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(e,null);l=!0},p(p,t){t&2&&(u=ne(p[1]),ue(),o=$e(o,t,$,1,p,u,i,e,Ce,de,null,re),fe())},i(p){if(!l){for(let t=0;t<u.length;t+=1)H(o[t]);p&&Ee(()=>{l&&(g&&g.end(1),v=xe(s,le,{y:8,duration:300}),v.start())}),l=!0}},o(p){for(let t=0;t<o.length;t+=1)j(o[t]);v&&v.invalidate(),p&&(g=ke(s,le,{y:8,duration:100})),l=!1},d(p){p&&E(s);for(let t=0;t<o.length;t+=1)o[t].d();p&&g&&g.end()}}}function ze(d){let s=d[5].name+"",a;return{c(){a=_e(s)},l(e){a=ve(e,s)},m(e,o){M(e,a,o)},p(e,o){o&2&&s!==(s=e[5].name+"")&&be(a,s)},d(e){e&&E(a)}}}function Me(d){let s=d[5].values.join(`

`)+"",a;return{c(){a=_e(s)},l(e){a=ve(e,s)},m(e,o){M(e,a,o)},p(e,o){o&2&&s!==(s=e[5].values.join(`

`)+"")&&be(a,s)},d(e){e&&E(a)}}}function de(d,s){let a,e,o;return e=new Oe({props:{$$slots:{body:[Me],head:[ze]},$$scope:{ctx:s}}}),{key:d,first:null,c(){a=se(),me(e.$$.fragment),this.h()},l(i){a=se(),pe(e.$$.fragment,i),this.h()},h(){this.first=a},m(i,v){M(i,a,v),he(e,i,v),o=!0},p(i,v){s=i;const g={};v&258&&(g.$$scope={dirty:v,ctx:s}),e.$set(g)},i(i){o||(H(e.$$.fragment,i),o=!0)},o(i){j(e.$$.fragment,i),o=!1},d(i){i&&E(a),ge(e,i)}}}function He(d){let s,a,e,o,i,v,g,l,u,$="Make me sexy! 🤤",p,t,r,f,_="Gimme the numbers! 🧮",c,y,C,h,n="Speichern 📁",m,w,L,P,k=d[1].length&&ce(d);return{c(){s=B("aside"),a=B("button"),e=J("svg"),o=J("g"),i=J("path"),v=O(),g=B("div"),l=B("div"),u=B("button"),u.textContent=$,p=O(),t=B("hr"),r=O(),f=B("button"),f.textContent=_,c=O(),y=B("hr"),C=O(),h=B("button"),h.textContent=n,m=O(),k&&k.c(),this.h()},l(N){s=D(N,"ASIDE",{class:!0});var I=T(s);a=D(I,"BUTTON",{class:!0});var X=T(a);e=V(X,"svg",{height:!0,width:!0,viewBox:!0,class:!0});var Y=T(e);o=V(Y,"g",{});var Q=T(o);i=V(Q,"path",{fill:!0,d:!0}),T(i).forEach(E),Q.forEach(E),Y.forEach(E),X.forEach(E),v=z(I),g=D(I,"DIV",{class:!0});var R=T(g);l=D(R,"DIV",{class:!0});var S=T(l);u=D(S,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),A(u)!=="svelte-ul8kiw"&&(u.textContent=$),p=z(S),t=D(S,"HR",{}),r=z(S),f=D(S,"BUTTON",{class:!0,"data-svelte-h":!0}),A(f)!=="svelte-16an76n"&&(f.textContent=_),c=z(S),y=D(S,"HR",{}),C=z(S),h=D(S,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),A(h)!=="svelte-df4wj3"&&(h.textContent=n),S.forEach(E),m=z(R),k&&k.l(R),R.forEach(E),I.forEach(E),this.h()},h(){b(i,"fill","current-color"),b(i,"d",`M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
			l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
			c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z`),b(e,"height","16px"),b(e,"width","16px"),b(e,"viewBox","0 0 185.343 185.343"),b(e,"class","transition-[transform] transform ease-in-out duration-500 sm:duration-300 svelte-10tmcbu"),U(e,"rotate-y",d[0]),b(a,"class","toggle-btn svelte-10tmcbu"),b(u,"id","optimizeBtn"),b(u,"class","py-2"),b(f,"class","py-2"),b(h,"id","saveBtn"),b(h,"class","py-2"),b(l,"class","flex flex-col bg-white rounded-md"),b(g,"class","flex flex-col p-4 pr-0 gap-4 h-full svelte-10tmcbu"),b(s,"class","sidebar svelte-10tmcbu"),U(s,"open",!d[0])},m(N,I){M(N,s,I),x(s,a),x(a,e),x(e,o),x(o,i),x(s,v),x(s,g),x(g,l),x(l,u),x(l,p),x(l,t),x(l,r),x(l,f),x(l,c),x(l,y),x(l,C),x(l,h),x(g,m),k&&k.m(g,null),w=!0,L||(P=[q(a,"click",d[4]),q(f,"click",d[2])],L=!0)},p(N,[I]){(!w||I&1)&&U(e,"rotate-y",N[0]),N[1].length?k?(k.p(N,I),I&2&&H(k,1)):(k=ce(N),k.c(),H(k,1),k.m(g,null)):k&&(ue(),j(k,1,1,()=>{k=null}),fe()),(!w||I&1)&&U(s,"open",!N[0])},i(N){w||(H(k),w=!0)},o(N){j(k),w=!1},d(N){N&&E(s),k&&k.d(),L=!1,ye(P)}}}function je(d,s,a){let{cy:e}=s,o=!1,i=[];const v=()=>{const l=[],u=(n,m)=>{const w=n*Math.pow(10,m);return Number((Math.round(w)/Math.pow(10,m)).toFixed(m))},$=e.nodes(),p=e.$(),t=$.map(n=>{const m=p.dc({root:n,directed:!0});return{id:n.id(),in:m.indegree,out:m.outdegree}}).sort((n,m)=>n.id>m.id?1:-1);l.push({name:"Degree Centrality",values:t.map(n=>JSON.stringify(n))});const r=$.map(n=>{const m=p.dcn({directed:!0});return{id:n.id(),in:u(m.indegree(n),3),out:u(m.outdegree(n),3)}}).sort((n,m)=>n.id>m.id?1:-1);l.push({name:"Degree Centrality Normalized",values:r.map(n=>JSON.stringify(n))});const f=p.bc(),_=$.map(n=>({id:n.id(),bc:u(f.betweennessNormalized(n),3)})).sort((n,m)=>n.bc<m.bc?1:-1);l.push({name:"Betweeness Centrality Normalized",values:_.map(n=>JSON.stringify(n))});const c=p.ccn(),y=$.map(n=>({id:n.id(),cc:u(c.closeness(n),3)})).sort((n,m)=>n.cc<m.cc?1:-1);l.push({name:"Closeness Centrality Normalized",values:y.map(n=>JSON.stringify(n))});const C=e.elements().pageRank(),h=$.map(n=>({id:n.id(),pr:u(C.rank(n),3)})).sort((n,m)=>n.pr<m.pr?1:-1);l.push({name:"Page Rank",values:h.map(n=>JSON.stringify(n))}),a(1,i=l),e.resize()},g=()=>a(0,o=!o);return d.$$set=l=>{"cy"in l&&a(3,e=l.cy)},[o,i,v,e,g]}class Pe extends K{constructor(s){super(),F(this,s,je,He,G,{cy:3})}}function Re(d){let s,a,e,o,i,v='<div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div> <div class="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20"><div class="mx-auto max-w-xl"><input id="cmd-palette-input" type="text" class="h-12 w-full border-0 bg-transparent px-4 py-4 text-gray-900 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 placeholder:text-gray-400 focus:ring-0 sm:text-sm" placeholder="Beschriftung" role="combobox" aria-expanded="false" aria-controls="options"/></div></div>',g;return e=new Pe({props:{cy:d[0]}}),{c(){s=B("div"),a=O(),me(e.$$.fragment),o=O(),i=B("div"),i.innerHTML=v,this.h()},l(l){s=D(l,"DIV",{id:!0,class:!0}),T(s).forEach(E),a=z(l),pe(e.$$.fragment,l),o=z(l),i=D(l,"DIV",{id:!0,class:!0,role:!0,"aria-modal":!0,"data-svelte-h":!0}),A(i)!=="svelte-1meetpw"&&(i.innerHTML=v),this.h()},h(){b(s,"id","cy-container"),b(s,"class","w-full h-full overflow-x-clip"),b(i,"id","cmd-palette"),b(i,"class","hidden relative z-10"),b(i,"role","dialog"),b(i,"aria-modal","true")},m(l,u){M(l,s,u),M(l,a,u),he(e,l,u),M(l,o,u),M(l,i,u),g=!0},p(l,[u]){const $={};u&1&&($.cy=l[0]),e.$set($)},i(l){g||(H(e.$$.fragment,l),g=!0)},o(l){j(e.$$.fragment,l),g=!1},d(l){l&&(E(s),E(a),E(o),E(i)),ge(e,l)}}}function Ue(d,s,a){let e;const o={"1 Louisa":[0,1,0,0,0,0,0,0,0,0,0,0,0],"2 Peter":[1,0,0,0,0,0,0,0,0,0,0,0,0],"3 Frederic":[0,1,0,0,0,0,1,0,0,0,0,0,0],"4 Idris":[0,0,1,0,0,0,1,1,0,0,0,0,0],"5 Anna":[0,0,0,1,0,0,0,1,0,0,0,0,0],"6 Beatrice":[0,0,0,1,0,0,1,0,1,0,0,0,0],"7 Davic":[0,0,0,0,0,1,0,0,0,0,1,0,0],"8 Eric":[0,0,0,0,0,0,1,0,0,1,1,0,0],"9 Cecilia":[0,0,0,0,0,1,0,0,0,0,0,0,1],"10 Johanna":[0,0,0,1,0,0,1,0,0,0,0,1,0],"11 Travis":[0,0,0,0,0,0,0,0,0,0,0,0,0],"12 Sadio":[0,0,0,0,0,0,0,0,0,1,0,0,0],"13 Hannah":[0,0,0,0,0,0,1,0,0,0,0,0,0]},i=Object.keys(o);i.reduce((t,r)=>(t[r]={},t),{}),Object.entries(o).reduce((t,[r,f])=>(f.forEach((_,c)=>{_!==0&&(t[`${r}-${c+1}`]={sourceId:r,targetId:i[c],weight:1})}),t),{}),we(()=>{const t=document.getElementById("cy-container");t&&(a(0,e=De({initialElements:Te(),container:t})),g(e),l(e),u(e),$(e))});const v=()=>{const t=document.getElementById("cmd-palette-input");t&&(t.value="")},g=t=>{const r="cmd-palette",f=document.getElementById(r);if(!f)throw new Error(`Missing cmd palette container with id: ${r}`);let _={x:0,y:0};document.body.addEventListener("mousemove",h=>{_={x:h.clientX,y:h.clientY}});const c=h=>{const n=t.pan(),m=t.zoom();return{x:(h.x-n.x)/m,y:(h.y-n.y)/m}},y={"cmd+a":()=>{f.classList.toggle("hidden",!1),f.classList.toggle("block",!0),document.getElementById("cmd-palette-input")?.focus()},Escape:()=>{f.classList.contains("hidden")||(f.classList.add("hidden"),f.classList.remove("block"),v())},del:()=>{t.elements("node:selected").forEach(m=>{t.remove(m.connectedEdges()),t.remove(m)}),t.elements("edge:selected").forEach(m=>{t.remove(m)})},Enter:()=>{if(f.classList.contains("hidden"))return;f.classList.add("hidden"),f.classList.remove("block");const h=document.getElementById("cmd-palette-input");if(!h)return;const n=h.value,m=c(_);t.add({group:"nodes",data:{id:n},position:m}),v()},"cmd+s":h=>{h.preventDefault();const n=t.json().elements;ae(n),p()}},C=({key:h,metaKey:n,ctrlKey:m})=>{let w="";return(n||m)&&(w+="cmd+"),w+=h,w=w.replace("Del","del"),w=w.replace("Delete","del"),w=w.replace("Backspace","del"),w=w.replace("Meta",""),w};document.addEventListener("keydown",h=>{const n=C(h),m=y[n];m&&m(h)}),document.addEventListener("click",h=>{const n=document.getElementById("cmd-palette-input");f&&n&&!n.contains(h.target)&&!f.classList.contains("hidden")&&(f.classList.add("hidden"),f.classList.remove("block"),v())})},l=t=>{let r=null,f=!1,_=null,c=null,y=null,C=null;t.on("mousedown","node",h=>{h.originalEvent.shiftKey&&(f=!0,_=h.target,_.ungrabify(),c=t.add({group:"nodes",data:{id:"ghost-node"},position:h.position,classes:["ghost-node"],style:{width:1,height:1,opacity:0}}),r=t.add({group:"edges",data:{id:"temp-edge",source:_.id(),target:c.id()},style:{"line-style":"dashed"},classes:["temporary-edge"]}),t.boxSelectionEnabled(!1))}),t.on("mousemove",h=>{const m=(w,L)=>{let P=w.position(),k=L.position();return Math.sqrt(Math.pow(P.x-k.x,2)+Math.pow(P.y-k.y,2))<30};if(f&&r){c.position(h.position);let w=t.nodes().filter(L=>L.id()===_.id()||L.id()===c.id()?!1:m(L,c)?(C&&C.id()&&C.id()===L.id()||(C=L,L.addClass("highlight")),!0):(L.removeClass("highlight"),!1)).first();w.id()?y=w:(C=null,y=c)}}),t.on("mouseup",h=>{f&&r&&(y!==t&&y.isNode()&&t.add({group:"edges",data:{source:_.id(),target:y.id()}}),t.remove(c),_.grabify(),t.boxSelectionEnabled(!0),r.remove(),r=null,f=!1,_=null,C?.removeClass("highlight"),C=null)})},u=t=>{const r=document.getElementById("optimizeBtn");r&&(r.onclick=f=>{t.layout({name:"cola",animate:!1}).run()})},$=t=>{const r=document.getElementById("saveBtn");r.onclick=()=>{const f=t.json().elements;ae(f),p()}},p=()=>{Be({message:"✅ Erfolgreich gespeichert!"})};return[e]}class Ke extends K{constructor(s){super(),F(this,s,Ue,Re,G,{})}}export{Ke as component};
