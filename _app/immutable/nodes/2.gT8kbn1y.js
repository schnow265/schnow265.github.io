import{s as L,n as I}from"../chunks/scheduler.k-kUyWhY.js";import{S as O,i as W,g as p,m as k,s as S,h as v,x as j,n as w,c as E,j as C,f as c,k as y,a as m,z as Y,y as g,o as z}from"../chunks/index.3eaemhlc.js";import{e as P}from"../chunks/each.-oqiv04n.js";const q=async({fetch:h})=>({posts:await(await h("/api/posts")).json()}),F=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function A(h,t,o){const n=h.slice();return n[1]=t[o],n}function D(h){let t,o,n,r=h[1].meta.title+"",_,f,b,u,i=h[1].meta.date+"",d,l;return{c(){t=p("li"),o=p("h3"),n=p("a"),_=k(r),b=S(),u=p("h4"),d=k(i),l=S(),this.h()},l(e){t=v(e,"LI",{class:!0});var a=C(t);o=v(a,"H3",{class:!0});var s=C(o);n=v(s,"A",{href:!0});var x=C(n);_=w(x,r),x.forEach(c),s.forEach(c),b=E(a),u=v(a,"H4",{class:!0});var H=C(u);d=w(H,i),H.forEach(c),l=E(a),a.forEach(c),this.h()},h(){y(n,"href",f="/blog/"+h[1].path),y(o,"class","svelte-hon9ac"),y(u,"class","svelte-hon9ac"),y(t,"class","svelte-hon9ac")},m(e,a){m(e,t,a),g(t,o),g(o,n),g(n,_),g(t,b),g(t,u),g(u,d),g(t,l)},p(e,a){a&1&&r!==(r=e[1].meta.title+"")&&z(_,r),a&1&&f!==(f="/blog/"+e[1].path)&&y(n,"href",f),a&1&&i!==(i=e[1].meta.date+"")&&z(d,i)},d(e){e&&c(t)}}}function M(h){let t,o="Welcome",n,r,_,f,b="Welcome to the blog.",u,i,d=P(h[0].posts),l=[];for(let e=0;e<d.length;e+=1)l[e]=D(A(h,d,e));return{c(){t=p("h1"),t.textContent=o,n=k(`

Please excuse this broken mess of a Svelte page. I am pretty new to this. And finding good fonts. 
Don't tell me that my choices are bad. I will find this out soon enough, if it's really bad.

`),r=p("hr"),_=S(),f=p("h1"),f.textContent=b,u=k(`
Yes, it's not organized by dates.

`),i=p("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=v(e,"H1",{"data-svelte-h":!0}),j(t)!=="svelte-4p3d56"&&(t.textContent=o),n=w(e,`

Please excuse this broken mess of a Svelte page. I am pretty new to this. And finding good fonts. 
Don't tell me that my choices are bad. I will find this out soon enough, if it's really bad.

`),r=v(e,"HR",{}),_=E(e),f=v(e,"H1",{"data-svelte-h":!0}),j(f)!=="svelte-suyni8"&&(f.textContent=b),u=w(e,`
Yes, it's not organized by dates.

`),i=v(e,"UL",{class:!0});var a=C(i);for(let s=0;s<l.length;s+=1)l[s].l(a);a.forEach(c),this.h()},h(){y(i,"class","svelte-hon9ac")},m(e,a){m(e,t,a),m(e,n,a),m(e,r,a),m(e,_,a),m(e,f,a),m(e,u,a),m(e,i,a);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(i,null)},p(e,[a]){if(a&1){d=P(e[0].posts);let s;for(s=0;s<d.length;s+=1){const x=A(e,d,s);l[s]?l[s].p(x,a):(l[s]=D(x),l[s].c(),l[s].m(i,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=d.length}},i:I,o:I,d(e){e&&(c(t),c(n),c(r),c(_),c(f),c(u),c(i)),Y(l,e)}}}function R(h,t,o){let{data:n}=t;return h.$$set=r=>{"data"in r&&o(0,n=r.data)},[n]}class G extends O{constructor(t){super(),W(this,t,R,M,L,{data:0})}}export{G as component,F as universal};
