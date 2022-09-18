import{S as H,i as F,s as G,k as v,l as d,n as u,H as me,b as C,I as pe,A as B,h as f,B as oe,q as O,a as M,m,r as R,c as L,F as c,C as ie,D as ce,E as ue,f as S,t as D,J as te,u as j,g as Q,d as W,K as ge,v as fe,w as he,x as _e,y as ve,L as $e}from"./index-28fe7da1.js";import{w as de}from"./index-e07d763a.js";import{s as we}from"./api-9e5979c5.js";const X=de({searchActive:!1,searchResults:[]});function be(n){let t,a,s;return{c(){t=v("input"),this.h()},l(e){t=d(e,"INPUT",{placeholder:!0,class:!0}),this.h()},h(){u(t,"placeholder","Search movies and shows"),t.value=me(n[0]),u(t,"class","svelte-kwqf18")},m(e,l){C(e,t,l),a||(s=pe(t,"input",n[1]),a=!0)},p:B,i:B,o:B,d(e){e&&f(t),a=!1,s()}}}let Se="";function Ee(n){const t=async l=>{if(l&&l.length>3){const r=await we({term:l});X.set({searchActive:!0,searchResults:r.results})}else X.set({searchActive:!1,searchResults:[]})},a=de(Se),s=l=>{let r;return(...o)=>{clearTimeout(r),r=setTimeout(()=>{l.apply(this,o)},1e3)}};return a.subscribe(s(t)),[a,l=>a.set(l.currentTarget.value)]}class Ce extends H{constructor(t){super(),F(this,t,Ee,be,G,{})}}function ke(n){let t,a,s,e,l,r,o,i,$,y,A;const I=n[1].default,_=oe(I,n,n[0],null);return{c(){t=v("main"),a=v("header"),s=v("div"),e=v("a"),l=O("movies"),r=M(),o=v("a"),i=O("shows"),$=M(),y=v("div"),_&&_.c(),this.h()},l(h){t=d(h,"MAIN",{});var w=m(t);a=d(w,"HEADER",{class:!0});var E=m(a);s=d(E,"DIV",{class:!0});var k=m(s);e=d(k,"A",{href:!0,class:!0});var V=m(e);l=R(V,"movies"),V.forEach(f),r=L(k),o=d(k,"A",{href:!0,class:!0});var P=m(o);i=R(P,"shows"),P.forEach(f),k.forEach(f),E.forEach(f),$=L(w),y=d(w,"DIV",{class:!0});var T=m(y);_&&_.l(T),T.forEach(f),w.forEach(f),this.h()},h(){u(e,"href","/"),u(e,"class","navlink svelte-1um8l8h"),u(o,"href","/shows"),u(o,"class","navlink svelte-1um8l8h"),u(s,"class","container"),u(a,"class","svelte-1um8l8h"),u(y,"class","container")},m(h,w){C(h,t,w),c(t,a),c(a,s),c(s,e),c(e,l),c(s,r),c(s,o),c(o,i),c(t,$),c(t,y),_&&_.m(y,null),A=!0},p(h,[w]){_&&_.p&&(!A||w&1)&&ie(_,I,h,h[0],A?ue(I,h[0],w,null):ce(h[0]),null)},i(h){A||(S(_,h),A=!0)},o(h){D(_,h),A=!1},d(h){h&&f(t),_&&_.d(h)}}}function ye(n,t,a){let{$$slots:s={},$$scope:e}=t;return n.$$set=l=>{"$$scope"in l&&a(0,e=l.$$scope)},[e,s]}class Ne extends H{constructor(t){super(),F(this,t,ye,ke,G,{})}}function se(n){let t,a,s=n[0].release_date+"",e;return{c(){t=v("p"),a=O("\u{1F4C5} "),e=O(s)},l(l){t=d(l,"P",{});var r=m(t);a=R(r,"\u{1F4C5} "),e=R(r,s),r.forEach(f)},m(l,r){C(l,t,r),c(t,a),c(t,e)},p(l,r){r&1&&s!==(s=l[0].release_date+"")&&j(e,s)},d(l){l&&f(t)}}}function Ae(n){let t,a,s,e,l,r,o,i,$=("name"in n[0]?n[0].name:n[0].title)+"",y,A,I,_=n[0].overview+"",h,w,E,k,V,P,T,N=n[0].vote_average+"",J,z,p=n[0].release_date&&se(n);return{c(){t=v("div"),a=v("div"),s=v("img"),r=M(),o=v("div"),i=v("a"),y=O($),A=M(),I=v("p"),h=O(_),w=M(),E=v("div"),k=v("p"),V=v("span"),P=O("\u2605"),T=M(),J=O(N),z=M(),p&&p.c(),this.h()},l(g){t=d(g,"DIV",{class:!0});var b=m(t);a=d(b,"DIV",{class:!0,style:!0,alt:!0});var Y=m(a);s=d(Y,"IMG",{src:!0,alt:!0,class:!0}),Y.forEach(f),r=L(b),o=d(b,"DIV",{class:!0});var q=m(o);i=d(q,"A",{href:!0,class:!0});var Z=m(i);y=R(Z,$),Z.forEach(f),A=L(q),I=d(q,"P",{class:!0});var x=m(I);h=R(x,_),x.forEach(f),w=L(q),E=d(q,"DIV",{class:!0});var K=m(E);k=d(K,"P",{});var U=m(k);V=d(U,"SPAN",{class:!0});var ee=m(V);P=R(ee,"\u2605"),ee.forEach(f),T=L(U),J=R(U,N),U.forEach(f),z=L(K),p&&p.l(K),K.forEach(f),q.forEach(f),b.forEach(f),this.h()},h(){te(s.src,e=`https://image.tmdb.org/t/p/w500/${n[0].poster_path}`)||u(s,"src",e),u(s,"alt","movie-poster"),u(s,"class","svelte-19p9xcl"),u(a,"class","backdrop svelte-19p9xcl"),u(a,"style",l=`background: url('https://image.tmdb.org/t/p/w500/${n[0].backdrop_path}')`),u(a,"alt","movie-backdrop"),u(i,"href",n[1]),u(i,"class","svelte-19p9xcl"),u(I,"class","overview svelte-19p9xcl"),u(V,"class","rating svelte-19p9xcl"),u(E,"class","info svelte-19p9xcl"),u(o,"class","content svelte-19p9xcl"),u(t,"class","card svelte-19p9xcl")},m(g,b){C(g,t,b),c(t,a),c(a,s),c(t,r),c(t,o),c(o,i),c(i,y),c(o,A),c(o,I),c(I,h),c(o,w),c(o,E),c(E,k),c(k,V),c(V,P),c(k,T),c(k,J),c(E,z),p&&p.m(E,null)},p(g,[b]){b&1&&!te(s.src,e=`https://image.tmdb.org/t/p/w500/${g[0].poster_path}`)&&u(s,"src",e),b&1&&l!==(l=`background: url('https://image.tmdb.org/t/p/w500/${g[0].backdrop_path}')`)&&u(a,"style",l),b&1&&$!==($=("name"in g[0]?g[0].name:g[0].title)+"")&&j(y,$),b&1&&_!==(_=g[0].overview+"")&&j(h,_),b&1&&N!==(N=g[0].vote_average+"")&&j(J,N),g[0].release_date?p?p.p(g,b):(p=se(g),p.c(),p.m(E,null)):p&&(p.d(1),p=null)},i:B,o:B,d(g){g&&f(t),p&&p.d()}}}function Ie(n,t,a){let{movieOrShow:s}=t;const e=`${"name"in s?"/shows":"/movies"}/${s.id}`;return n.$$set=l=>{"movieOrShow"in l&&a(0,s=l.movieOrShow)},[s,e]}class De extends H{constructor(t){super(),F(this,t,Ie,Ae,G,{movieOrShow:0})}}function le(n,t,a){const s=n.slice();return s[1]=t[a],s}function ae(n){let t,a;return t=new De({props:{movieOrShow:n[1]}}),{c(){fe(t.$$.fragment)},l(s){he(t.$$.fragment,s)},m(s,e){_e(t,s,e),a=!0},p(s,e){const l={};e&1&&(l.movieOrShow=s[1]),t.$set(l)},i(s){a||(S(t.$$.fragment,s),a=!0)},o(s){D(t.$$.fragment,s),a=!1},d(s){ve(t,s)}}}function Ve(n){let t,a,s=n[0],e=[];for(let r=0;r<s.length;r+=1)e[r]=ae(le(n,s,r));const l=r=>D(e[r],1,1,()=>{e[r]=null});return{c(){t=v("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=d(r,"DIV",{class:!0});var o=m(t);for(let i=0;i<e.length;i+=1)e[i].l(o);o.forEach(f),this.h()},h(){u(t,"class","grid svelte-n5h8e7")},m(r,o){C(r,t,o);for(let i=0;i<e.length;i+=1)e[i].m(t,null);a=!0},p(r,[o]){if(o&1){s=r[0];let i;for(i=0;i<s.length;i+=1){const $=le(r,s,i);e[i]?(e[i].p($,o),S(e[i],1)):(e[i]=ae($),e[i].c(),S(e[i],1),e[i].m(t,null))}for(Q(),i=s.length;i<e.length;i+=1)l(i);W()}},i(r){if(!a){for(let o=0;o<s.length;o+=1)S(e[o]);a=!0}},o(r){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)D(e[o]);a=!1},d(r){r&&f(t),ge(e,r)}}}function Me(n,t,a){let{data:s}=t;return n.$$set=e=>{"data"in e&&a(0,s=e.data)},[s]}class Le extends H{constructor(t){super(),F(this,t,Me,Ve,G,{data:0})}}function re(n){let t,a;return t=new Le({props:{data:n[0]}}),{c(){fe(t.$$.fragment)},l(s){he(t.$$.fragment,s)},m(s,e){_e(t,s,e),a=!0},p(s,e){const l={};e&1&&(l.data=s[0]),t.$set(l)},i(s){a||(S(t.$$.fragment,s),a=!0)},o(s){D(t.$$.fragment,s),a=!1},d(s){ve(t,s)}}}function ne(n){let t;const a=n[3].default,s=oe(a,n,n[2],null);return{c(){s&&s.c()},l(e){s&&s.l(e)},m(e,l){s&&s.m(e,l),t=!0},p(e,l){s&&s.p&&(!t||l&4)&&ie(s,a,e,e[2],t?ue(a,e[2],l,null):ce(e[2]),null)},i(e){t||(S(s,e),t=!0)},o(e){D(s,e),t=!1},d(e){s&&s.d(e)}}}function Oe(n){let t,a,s,e=n[0].length&&n[1]&&re(n),l=!n[1]&&ne(n);return{c(){t=v("div"),e&&e.c(),a=M(),l&&l.c()},l(r){t=d(r,"DIV",{});var o=m(t);e&&e.l(o),a=L(o),l&&l.l(o),o.forEach(f)},m(r,o){C(r,t,o),e&&e.m(t,null),c(t,a),l&&l.m(t,null),s=!0},p(r,[o]){r[0].length&&r[1]?e?(e.p(r,o),o&3&&S(e,1)):(e=re(r),e.c(),S(e,1),e.m(t,a)):e&&(Q(),D(e,1,1,()=>{e=null}),W()),r[1]?l&&(Q(),D(l,1,1,()=>{l=null}),W()):l?(l.p(r,o),o&2&&S(l,1)):(l=ne(r),l.c(),S(l,1),l.m(t,null))},i(r){s||(S(e),S(l),s=!0)},o(r){D(e),D(l),s=!1},d(r){r&&f(t),e&&e.d(),l&&l.d()}}}function Re(n,t,a){let{$$slots:s={},$$scope:e}=t,l=[],r=!1;const o=X.subscribe(({searchActive:i,searchResults:$})=>{a(0,l=$),a(1,r=i)});return $e(o),n.$$set=i=>{"$$scope"in i&&a(2,e=i.$$scope)},[l,r,e,s]}class Be extends H{constructor(t){super(),F(this,t,Re,Oe,G,{})}}export{Ne as L,Le as M,Ce as S,Be as a};