import{S as le,i as se,s as ae,B as de,M as U,k as M,q as G,a as T,l as V,m as h,r as S,h as f,c as F,n as E,N as pe,O as we,b as R,F as c,u as te,C as Ee,D as $e,E as be,P as ge,f as L,t as A,Q as ee,J as fe,A as N,g as ve,d as _e,o as He,K as Le,v as Q,w as W,x as X,y as Z,R as v,T as _,p as K,U as re}from"./index-28fe7da1.js";import{g as je,a as Pe}from"./api-9e5979c5.js";const Ae=i=>({}),xe=i=>({});function ke(i){let e,l;return{c(){e=M("span"),l=G(i[1]),this.h()},l(t){e=V(t,"SPAN",{class:!0});var a=h(e);l=S(a,i[1]),a.forEach(f),this.h()},h(){E(e,"class","value svelte-1v8n8i")},m(t,a){R(t,e,a),c(e,l)},p(t,a){a&2&&te(l,t[1])},d(t){t&&f(e)}}}function Te(i){let e,l,t,a,n,s,r,o;const g=i[4].icon,p=de(g,i,i[3],xe),C=i[4].default,d=de(C,i,i[3],null);let m=i[1]&&ke(i),z=[{class:"item"},i[2]],D={};for(let u=0;u<z.length;u+=1)D=U(D,z[u]);return{c(){e=M("div"),l=M("p"),t=G(i[0]),a=T(),n=M("div"),p&&p.c(),s=T(),d&&d.c(),r=T(),m&&m.c(),this.h()},l(u){e=V(u,"DIV",{class:!0});var x=h(e);l=V(x,"P",{class:!0});var B=h(l);t=S(B,i[0]),B.forEach(f),a=F(x),n=V(x,"DIV",{class:!0});var k=h(n);p&&p.l(k),s=F(k),d&&d.l(k),r=F(k),m&&m.l(k),k.forEach(f),x.forEach(f),this.h()},h(){E(l,"class","label svelte-1v8n8i"),E(n,"class","content svelte-1v8n8i"),pe(e,D),we(e,"svelte-1v8n8i",!0)},m(u,x){R(u,e,x),c(e,l),c(l,t),c(e,a),c(e,n),p&&p.m(n,null),c(n,s),d&&d.m(n,null),c(n,r),m&&m.m(n,null),o=!0},p(u,[x]){(!o||x&1)&&te(t,u[0]),p&&p.p&&(!o||x&8)&&Ee(p,g,u,u[3],o?be(g,u[3],x,Ae):$e(u[3]),xe),d&&d.p&&(!o||x&8)&&Ee(d,C,u,u[3],o?be(C,u[3],x,null):$e(u[3]),null),u[1]?m?m.p(u,x):(m=ke(u),m.c(),m.m(n,null)):m&&(m.d(1),m=null),pe(e,D=ge(z,[{class:"item"},x&4&&u[2]])),we(e,"svelte-1v8n8i",!0)},i(u){o||(L(p,u),L(d,u),o=!0)},o(u){A(p,u),A(d,u),o=!1},d(u){u&&f(e),p&&p.d(u),d&&d.d(u),m&&m.d()}}}function Fe(i,e,l){let{$$slots:t={},$$scope:a}=e,{label:n}=e,{value:s}=e;return i.$$set=r=>{l(2,e=U(U({},e),ee(r))),"label"in r&&l(0,n=r.label),"value"in r&&l(1,s=r.value),"$$scope"in r&&l(3,a=r.$$scope)},e=ee(e),[n,s,e,a,t]}class ue extends le{constructor(e){super(),se(this,e,Fe,Te,ae,{label:0,value:1})}}const he="https://image.tmdb.org/t/p/w500/";function Re(i){let e,l,t,a,n,s=i[0].character+"",r,o,g,p=i[0].name+"",C;return{c(){e=M("div"),l=M("img"),a=T(),n=M("h3"),r=G(s),o=T(),g=M("h4"),C=G(p),this.h()},l(d){e=V(d,"DIV",{class:!0});var m=h(e);l=V(m,"IMG",{src:!0,alt:!0,class:!0}),a=F(m),n=V(m,"H3",{});var z=h(n);r=S(z,s),z.forEach(f),o=F(m),g=V(m,"H4",{class:!0});var D=h(g);C=S(D,p),D.forEach(f),m.forEach(f),this.h()},h(){fe(l.src,t=`${he}${i[0].profile_path}`)||E(l,"src",t),E(l,"alt","person"),E(l,"class","svelte-13j0kqn"),E(g,"class","svelte-13j0kqn"),E(e,"class","card svelte-13j0kqn")},m(d,m){R(d,e,m),c(e,l),c(e,a),c(e,n),c(n,r),c(e,o),c(e,g),c(g,C)},p(d,[m]){m&1&&!fe(l.src,t=`${he}${d[0].profile_path}`)&&E(l,"src",t),m&1&&s!==(s=d[0].character+"")&&te(r,s),m&1&&p!==(p=d[0].name+"")&&te(C,p)},i:N,o:N,d(d){d&&f(e)}}}function qe(i,e,l){let{person:t}=e;return console.log(t),i.$$set=a=>{"person"in a&&l(0,t=a.person)},[t]}class Ge extends le{constructor(e){super(),se(this,e,qe,Re,ae,{person:0})}}function ye(i,e,l){const t=i.slice();return t[2]=e[l],t}function Ce(i){let e,l,t=i[0],a=[];for(let s=0;s<t.length;s+=1)a[s]=De(ye(i,t,s));const n=s=>A(a[s],1,1,()=>{a[s]=null});return{c(){e=M("ul");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=V(s,"UL",{class:!0});var r=h(e);for(let o=0;o<a.length;o+=1)a[o].l(r);r.forEach(f),this.h()},h(){E(e,"class","svelte-14jwxgp")},m(s,r){R(s,e,r);for(let o=0;o<a.length;o+=1)a[o].m(e,null);l=!0},p(s,r){if(r&1){t=s[0];let o;for(o=0;o<t.length;o+=1){const g=ye(s,t,o);a[o]?(a[o].p(g,r),L(a[o],1)):(a[o]=De(g),a[o].c(),L(a[o],1),a[o].m(e,null))}for(ve(),o=t.length;o<a.length;o+=1)n(o);_e()}},i(s){if(!l){for(let r=0;r<t.length;r+=1)L(a[r]);l=!0}},o(s){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)A(a[r]);l=!1},d(s){s&&f(e),Le(a,s)}}}function De(i){let e,l;return e=new Ge({props:{person:i[2]}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p(t,a){const n={};a&1&&(n.person=t[2]),e.$set(n)},i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Se(i){let e,l,t,a,n,s=i[0]&&Ce(i);return{c(){e=M("div"),l=M("h1"),t=G("Cast"),a=T(),s&&s.c(),this.h()},l(r){e=V(r,"DIV",{class:!0});var o=h(e);l=V(o,"H1",{});var g=h(l);t=S(g,"Cast"),g.forEach(f),a=F(o),s&&s.l(o),o.forEach(f),this.h()},h(){E(e,"class","svelte-14jwxgp")},m(r,o){R(r,e,o),c(e,l),c(l,t),c(e,a),s&&s.m(e,null),n=!0},p(r,[o]){r[0]?s?(s.p(r,o),o&1&&L(s,1)):(s=Ce(r),s.c(),L(s,1),s.m(e,null)):s&&(ve(),A(s,1,1,()=>{s=null}),_e())},i(r){n||(L(s),n=!0)},o(r){A(s),n=!1},d(r){r&&f(e),s&&s.d()}}}function Ue(i,e,l){let{id:t}=e,a;return He(async()=>{const n=await je(t);l(0,a=n.cast)}),i.$$set=n=>{"id"in n&&l(1,t=n.id)},[a,t]}class Ne extends le{constructor(e){super(),se(this,e,Ue,Se,ae,{id:1})}}function Oe(i){let e,l,t,a,n,s,r,o,g,p,C,d,m,z,D,u,x,B,k,j=[{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{version:"1.1"},{id:"Layer_1"},{x:"0px"},{y:"0px"},{viewBox:"0 0 280.124 280.124"},{style:"enable-background:new 0 0 280.124 280.124;"},{"xml:space":"preserve"},i[0]],q={};for(let y=0;y<j.length;y+=1)q=U(q,j[y]);return{c(){e=v("svg"),l=v("g"),t=v("path"),a=v("polygon"),n=v("g"),s=v("g"),r=v("g"),o=v("g"),g=v("g"),p=v("g"),C=v("g"),d=v("g"),m=v("g"),z=v("g"),D=v("g"),u=v("g"),x=v("g"),B=v("g"),k=v("g"),this.h()},l(y){e=_(y,"svg",{xmlns:!0,"xmlns:xlink":!0,version:!0,id:!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0});var $=h(e);l=_($,"g",{});var P=h(l);t=_(P,"path",{style:!0,d:!0}),h(t).forEach(f),a=_(P,"polygon",{style:!0,points:!0}),h(a).forEach(f),P.forEach(f),n=_($,"g",{}),h(n).forEach(f),s=_($,"g",{}),h(s).forEach(f),r=_($,"g",{}),h(r).forEach(f),o=_($,"g",{}),h(o).forEach(f),g=_($,"g",{}),h(g).forEach(f),p=_($,"g",{}),h(p).forEach(f),C=_($,"g",{}),h(C).forEach(f),d=_($,"g",{}),h(d).forEach(f),m=_($,"g",{}),h(m).forEach(f),z=_($,"g",{}),h(z).forEach(f),D=_($,"g",{}),h(D).forEach(f),u=_($,"g",{}),h(u).forEach(f),x=_($,"g",{}),h(x).forEach(f),B=_($,"g",{}),h(B).forEach(f),k=_($,"g",{}),h(k).forEach(f),$.forEach(f),this.h()},h(){K(t,"fill","#F4B459"),E(t,"d","M280.124,106.914l-92.059-6.598L140.057,4.441l-48.55,95.874L0,106.914l61.282,74.015   l-17.519,94.754l96.294-43.614l96.294,43.606l-17.799-94.754C218.553,180.919,280.124,106.914,280.124,106.914z"),K(a,"fill","#E3A753"),E(a,"points","236.352,275.683 218.553,180.92 280.071,106.975 280.071,106.905 188.065,100.315    140.057,4.441 140.057,232.068  "),re(e,q)},m(y,$){R(y,e,$),c(e,l),c(l,t),c(l,a),c(e,n),c(e,s),c(e,r),c(e,o),c(e,g),c(e,p),c(e,C),c(e,d),c(e,m),c(e,z),c(e,D),c(e,u),c(e,x),c(e,B),c(e,k)},p(y,[$]){re(e,q=ge(j,[{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{version:"1.1"},{id:"Layer_1"},{x:"0px"},{y:"0px"},{viewBox:"0 0 280.124 280.124"},{style:"enable-background:new 0 0 280.124 280.124;"},{"xml:space":"preserve"},$&1&&y[0]]))},i:N,o:N,d(y){y&&f(e)}}}function Ye(i,e,l){return i.$$set=t=>{l(0,e=U(U({},e),ee(t)))},e=ee(e),[e]}class Je extends le{constructor(e){super(),se(this,e,Ye,Oe,ae,{})}}function Ke(i){let e,l,t,a,n,s,r,o,g,p,C,d,m,z,D,u,x,B,k,j,q,y,$,P=[{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{version:"1.1"},{id:"Layer_1"},{x:"0px"},{y:"0px"},{viewBox:"0 0 280.028 280.028"},{style:"enable-background:new 0 0 280.028 280.028;"},{"xml:space":"preserve"},i[0]],Y={};for(let H=0;H<P.length;H+=1)Y=U(Y,P[H]);return{c(){e=v("svg"),l=v("g"),t=v("path"),a=v("path"),n=v("path"),s=v("path"),r=v("path"),o=v("path"),g=v("g"),p=v("g"),C=v("g"),d=v("g"),m=v("g"),z=v("g"),D=v("g"),u=v("g"),x=v("g"),B=v("g"),k=v("g"),j=v("g"),q=v("g"),y=v("g"),$=v("g"),this.h()},l(H){e=_(H,"svg",{xmlns:!0,"xmlns:xlink":!0,version:!0,id:!0,x:!0,y:!0,viewBox:!0,style:!0,"xml:space":!0});var b=h(e);l=_(b,"g",{});var w=h(l);t=_(w,"path",{style:!0,d:!0}),h(t).forEach(f),a=_(w,"path",{style:!0,d:!0}),h(a).forEach(f),n=_(w,"path",{style:!0,d:!0}),h(n).forEach(f),s=_(w,"path",{style:!0,d:!0}),h(s).forEach(f),r=_(w,"path",{style:!0,d:!0}),h(r).forEach(f),o=_(w,"path",{style:!0,d:!0}),h(o).forEach(f),w.forEach(f),g=_(b,"g",{}),h(g).forEach(f),p=_(b,"g",{}),h(p).forEach(f),C=_(b,"g",{}),h(C).forEach(f),d=_(b,"g",{}),h(d).forEach(f),m=_(b,"g",{}),h(m).forEach(f),z=_(b,"g",{}),h(z).forEach(f),D=_(b,"g",{}),h(D).forEach(f),u=_(b,"g",{}),h(u).forEach(f),x=_(b,"g",{}),h(x).forEach(f),B=_(b,"g",{}),h(B).forEach(f),k=_(b,"g",{}),h(k).forEach(f),j=_(b,"g",{}),h(j).forEach(f),q=_(b,"g",{}),h(q).forEach(f),y=_(b,"g",{}),h(y).forEach(f),$=_(b,"g",{}),h($).forEach(f),b.forEach(f),this.h()},h(){K(t,"fill","#E4E7E7"),E(t,"d","M17.502,0h245.024c9.661,0,17.502,7.832,17.502,17.502v245.024c0,9.661-7.841,17.502-17.502,17.502   H17.502C7.841,280.027,0,272.187,0,262.526V17.502C0,7.832,7.841,0,17.502,0z"),K(a,"fill","#E2574C"),E(a,"d","M262.526,0H17.502C7.841,0,0,7.832,0,17.502v43.754h280.027V17.502   C280.027,7.832,272.187,0,262.526,0z"),K(n,"fill","#324D5B"),E(n,"d","M189.701,148.292c-3.08,0-6.283,0.534-8.795,1.575l-0.28-0.263   c4.603-6.143,13.678-14.518,19.261-20.923c1.671-1.969,2.932-3.535,2.932-5.364c0-4.708-6.012-9.547-9.906-9.547   c-1.129,0-2.66,0-4.192,0.919c-1.671,1.05-3.352,2.091-4.472,3.133c-14.098,12.295-35.458,40.035-35.458,59.777   c0,17.397,13.538,32.439,35.038,32.439c20.652,0,35.03-15.428,35.03-32.439C218.868,162.153,206.45,148.292,189.701,148.292z    M183.838,191.189c-8.375,0-13.266-6.274-13.266-13.608c0-7.71,5.303-13.59,13.266-13.59c8.795,0,13.266,6.668,13.266,13.59   C197.095,185.177,191.784,191.189,183.838,191.189z M120,192.423H93.547c12.286-14.229,34.697-32.597,34.697-51.07   c0-16.898-14.308-27.67-32.089-27.67s-33.971,13.433-33.971,30.19c0,5.18,3.605,9.705,10.545,9.705   c13.879,0,5.933-21.545,22.56-21.545c5.924,0,10.405,4.787,10.405,10.238c0,4.787-2.459,8.908-5.058,12.374   c-10.991,14.631-24.004,26.594-36.001,39.764c-1.444,1.601-3.325,3.99-3.325,6.782c0,6.126,4.918,8.777,11.28,8.777h48.287   c5.487,0,10.405-2.652,10.405-8.777C131.28,195.074,126.354,192.423,120,192.423z"),K(s,"fill","#BF392C"),E(s,"d","M0,52.505h280.027v17.502H0V52.505z"),K(r,"fill","#BF392C"),E(r,"d","M140.014,17.502c4.839,0,8.751,3.92,8.751,8.751s-3.912,8.751-8.751,8.751s-8.751-3.92-8.751-8.751   S135.174,17.502,140.014,17.502z"),K(o,"fill","#C2C5C5"),E(o,"d","M262.526,262.526H17.502C7.841,262.526,0,254.685,0,245.024v17.502   c0,9.661,7.841,17.502,17.502,17.502h245.024c9.661,0,17.502-7.841,17.502-17.502v-17.502   C280.027,254.685,272.187,262.526,262.526,262.526z"),re(e,Y)},m(H,b){R(H,e,b),c(e,l),c(l,t),c(l,a),c(l,n),c(l,s),c(l,r),c(l,o),c(e,g),c(e,p),c(e,C),c(e,d),c(e,m),c(e,z),c(e,D),c(e,u),c(e,x),c(e,B),c(e,k),c(e,j),c(e,q),c(e,y),c(e,$)},p(H,[b]){re(e,Y=ge(P,[{xmlns:"http://www.w3.org/2000/svg"},{"xmlns:xlink":"http://www.w3.org/1999/xlink"},{version:"1.1"},{id:"Layer_1"},{x:"0px"},{y:"0px"},{viewBox:"0 0 280.028 280.028"},{style:"enable-background:new 0 0 280.028 280.028;"},{"xml:space":"preserve"},b&1&&H[0]]))},i:N,o:N,d(H){H&&f(e)}}}function Qe(i,e,l){return i.$$set=t=>{l(0,e=U(U({},e),ee(t)))},e=ee(e),[e]}class We extends le{constructor(e){super(),se(this,e,Qe,Ke,ae,{})}}function Xe(i){let e,l,t=[{xmlns:"http://www.w3.org/2000/svg"},{width:"124px"},{height:"124px"},{viewBox:"-2 -2 24 24"},{preserveAspectRatio:"xMinYMin"},{class:"jam jam-movie"},i[0]],a={};for(let n=0;n<t.length;n+=1)a=U(a,t[n]);return{c(){e=v("svg"),l=v("path"),this.h()},l(n){e=_(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,preserveAspectRatio:!0,class:!0});var s=h(e);l=_(s,"path",{d:!0}),h(l).forEach(f),s.forEach(f),this.h()},h(){E(l,"d","M6 15v3h8v-7H6v4zm-2-2v-2H2V9h2V7H2v6h2zm0 2H2v1a2 2 0 0 0 2 2v-3zm14-2V7h-2v2h2v2h-2v2h2zm0 2h-2v3a2 2 0 0 0 2-2v-1zm-4-8V2H6v7h8V7zm4-2V4a2 2 0 0 0-2-2v3h2zM4 5V2a2 2 0 0 0-2 2v1h2zm0-5h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"),re(e,a)},m(n,s){R(n,e,s),c(e,l)},p(n,[s]){re(e,a=ge(t,[{xmlns:"http://www.w3.org/2000/svg"},{width:"124px"},{height:"124px"},{viewBox:"-2 -2 24 24"},{preserveAspectRatio:"xMinYMin"},{class:"jam jam-movie"},s&1&&n[0]]))},i:N,o:N,d(n){n&&f(e)}}}function Ze(i,e,l){return i.$$set=t=>{l(0,e=U(U({},e),ee(t)))},e=ee(e),[e]}class et extends le{constructor(e){super(),se(this,e,Ze,Xe,ae,{})}}function Me(i,e,l){const t=i.slice();return t[5]=e[l],t[7]=l,t}function Ve(i){let e;return{c(){e=G("loading...")},l(l){e=S(l,"loading...")},m(l,t){R(l,e,t)},d(l){l&&f(e)}}}function ze(i){let e,l,t,a,n,s,r,o,g,p,C=("title"in i[1]?i[1].title:i[1].name)+"",d,m,z,D=i[1].overview+"",u,x,B,k,j,q,y,$,P,Y,H,b;return j=new ue({props:{label:"Rating",value:i[1].vote_average,$$slots:{icon:[tt]},$$scope:{ctx:i}}}),y=new ue({props:{label:"Release date",value:new Intl.DateTimeFormat("en-GB",i[3]).format(new Date(i[1].release_date)),$$slots:{icon:[lt]},$$scope:{ctx:i}}}),P=new ue({props:{label:"Genres",$$slots:{icon:[at],default:[st]},$$scope:{ctx:i}}}),H=new Ne({props:{id:i[0]}}),{c(){e=M("div"),l=M("a"),t=G("go back"),a=T(),n=M("div"),s=M("img"),o=T(),g=M("div"),p=M("h1"),d=G(C),m=T(),z=M("p"),u=G(D),x=T(),B=M("div"),k=M("div"),Q(j.$$.fragment),q=T(),Q(y.$$.fragment),$=T(),Q(P.$$.fragment),Y=T(),Q(H.$$.fragment),this.h()},l(w){e=V(w,"DIV",{class:!0});var I=h(e);l=V(I,"A",{href:!0});var ne=h(l);t=S(ne,"go back"),ne.forEach(f),a=F(I),n=V(I,"DIV",{class:!0});var J=h(n);s=V(J,"IMG",{src:!0,alt:!0,class:!0}),o=F(J),g=V(J,"DIV",{class:!0});var O=h(g);p=V(O,"H1",{class:!0});var ie=h(p);d=S(ie,C),ie.forEach(f),m=F(O),z=V(O,"P",{});var me=h(z);u=S(me,D),me.forEach(f),x=F(O),B=V(O,"DIV",{class:!0});var oe=h(B);k=V(oe,"DIV",{class:!0});var ce=h(k);W(j.$$.fragment,ce),q=F(ce),W(y.$$.fragment,ce),ce.forEach(f),$=F(oe),W(P.$$.fragment,oe),oe.forEach(f),O.forEach(f),J.forEach(f),Y=F(I),W(H.$$.fragment,I),I.forEach(f),this.h()},h(){E(l,"href","/"),fe(s.src,r=`${he}${i[1].poster_path}`)||E(s,"src",r),E(s,"alt","poster"),E(s,"class","svelte-1x34ih2"),E(p,"class","svelte-1x34ih2"),E(k,"class","row svelte-1x34ih2"),E(B,"class","info svelte-1x34ih2"),E(g,"class","content svelte-1x34ih2"),E(n,"class","details-container svelte-1x34ih2"),E(e,"class","page-container svelte-1x34ih2")},m(w,I){R(w,e,I),c(e,l),c(l,t),c(e,a),c(e,n),c(n,s),c(n,o),c(n,g),c(g,p),c(p,d),c(g,m),c(g,z),c(z,u),c(g,x),c(g,B),c(B,k),X(j,k,null),c(k,q),X(y,k,null),c(B,$),X(P,B,null),c(e,Y),X(H,e,null),b=!0},p(w,I){(!b||I&2&&!fe(s.src,r=`${he}${w[1].poster_path}`))&&E(s,"src",r),(!b||I&2)&&C!==(C=("title"in w[1]?w[1].title:w[1].name)+"")&&te(d,C),(!b||I&2)&&D!==(D=w[1].overview+"")&&te(u,D);const ne={};I&2&&(ne.value=w[1].vote_average),I&256&&(ne.$$scope={dirty:I,ctx:w}),j.$set(ne);const J={};I&2&&(J.value=new Intl.DateTimeFormat("en-GB",w[3]).format(new Date(w[1].release_date))),I&256&&(J.$$scope={dirty:I,ctx:w}),y.$set(J);const O={};I&258&&(O.$$scope={dirty:I,ctx:w}),P.$set(O);const ie={};I&1&&(ie.id=w[0]),H.$set(ie)},i(w){b||(L(j.$$.fragment,w),L(y.$$.fragment,w),L(P.$$.fragment,w),L(H.$$.fragment,w),b=!0)},o(w){A(j.$$.fragment,w),A(y.$$.fragment,w),A(P.$$.fragment,w),A(H.$$.fragment,w),b=!1},d(w){w&&f(e),Z(j),Z(y),Z(P),Z(H)}}}function tt(i){let e,l;return e=new Je({props:{width:"30px",slot:"icon"}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p:N,i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function lt(i){let e,l;return e=new We({props:{width:"30px",height:"30px",slot:"icon"}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p:N,i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function Be(i){let e;return{c(){e=G(",")},l(l){e=S(l,",")},m(l,t){R(l,e,t)},d(l){l&&f(e)}}}function Ie(i){let e,l=i[5].name+"",t,a="  ",n,s,r=i[7]!==i[1].genres.length-1&&Be();return{c(){e=M("p"),t=G(l),r&&r.c(),n=G(a),s=T(),this.h()},l(o){e=V(o,"P",{class:!0});var g=h(e);t=S(g,l),r&&r.l(g),n=S(g,a),s=F(g),g.forEach(f),this.h()},h(){E(e,"class","svelte-1x34ih2")},m(o,g){R(o,e,g),c(e,t),r&&r.m(e,null),c(e,n),c(e,s)},p(o,g){g&2&&l!==(l=o[5].name+"")&&te(t,l),o[7]!==o[1].genres.length-1?r||(r=Be(),r.c(),r.m(e,n)):r&&(r.d(1),r=null)},d(o){o&&f(e),r&&r.d()}}}function st(i){let e,l=i[1].genres,t=[];for(let a=0;a<l.length;a+=1)t[a]=Ie(Me(i,l,a));return{c(){e=M("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=V(a,"DIV",{class:!0});var n=h(e);for(let s=0;s<t.length;s+=1)t[s].l(n);n.forEach(f),this.h()},h(){E(e,"class","genres svelte-1x34ih2")},m(a,n){R(a,e,n);for(let s=0;s<t.length;s+=1)t[s].m(e,null)},p(a,n){if(n&2){l=a[1].genres;let s;for(s=0;s<l.length;s+=1){const r=Me(a,l,s);t[s]?t[s].p(r,n):(t[s]=Ie(r),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(a){a&&f(e),Le(t,a)}}}function at(i){let e,l;return e=new et({props:{width:"36px",height:"36px",slot:"icon"}}),{c(){Q(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,a){X(e,t,a),l=!0},p:N,i(t){l||(L(e.$$.fragment,t),l=!0)},o(t){A(e.$$.fragment,t),l=!1},d(t){Z(e,t)}}}function nt(i){let e,l,t,a=i[2]&&Ve(),n=i[1]&&ze(i);return{c(){e=M("div"),a&&a.c(),l=T(),n&&n.c(),this.h()},l(s){e=V(s,"DIV",{class:!0});var r=h(e);a&&a.l(r),l=F(r),n&&n.l(r),r.forEach(f),this.h()},h(){E(e,"class","container")},m(s,r){R(s,e,r),a&&a.m(e,null),c(e,l),n&&n.m(e,null),t=!0},p(s,[r]){s[2]?a||(a=Ve(),a.c(),a.m(e,l)):a&&(a.d(1),a=null),s[1]?n?(n.p(s,r),r&2&&L(n,1)):(n=ze(s),n.c(),L(n,1),n.m(e,null)):n&&(ve(),A(n,1,1,()=>{n=null}),_e())},i(s){t||(L(n),t=!0)},o(s){A(n),t=!1},d(s){s&&f(e),a&&a.d(),n&&n.d()}}}function rt(i,e,l){let{id:t}=e,{mediaType:a="movie"}=e,n,s=!0;He(async()=>{const o=await Pe(t,a);l(1,n=o),l(2,s=!1)});let r={year:"numeric",month:"long",day:"numeric"};return i.$$set=o=>{"id"in o&&l(0,t=o.id),"mediaType"in o&&l(4,a=o.mediaType)},[t,n,s,r,a]}class ct extends le{constructor(e){super(),se(this,e,rt,nt,ae,{id:0,mediaType:4})}}export{ct as D};
