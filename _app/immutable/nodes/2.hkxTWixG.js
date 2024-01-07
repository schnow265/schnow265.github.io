import{s as L,n as I}from"../chunks/scheduler.k-kUyWhY.js";import{S as O,i as W,g as m,m as k,s as S,h as g,x as j,n as w,c as E,j as C,f as c,k as y,a as p,z as Y,y as v,o as z}from"../chunks/index.3eaemhlc.js";import{e as P}from"../chunks/each.-oqiv04n.js";const q=async({fetch:r})=>({posts:await(await r("/api/posts")).json()}),F=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function A(r,t,o){const n=r.slice();return n[1]=t[o],n}function D(r){let t,o,n,h=r[1].meta.title+"",_,f,b,u,i=r[1].meta.date+"",d,l;return{c(){t=m("li"),o=m("h3"),n=m("a"),_=k(h),b=S(),u=m("h4"),d=k(i),l=S(),this.h()},l(e){t=g(e,"LI",{class:!0});var s=C(t);o=g(s,"H3",{class:!0});var a=C(o);n=g(a,"A",{href:!0});var x=C(n);_=w(x,h),x.forEach(c),a.forEach(c),b=E(s),u=g(s,"H4",{class:!0});var H=C(u);d=w(H,i),H.forEach(c),l=E(s),s.forEach(c),this.h()},h(){y(n,"href",f="/blog/"+r[1].path),y(o,"class","svelte-sbtcgp"),y(u,"class","svelte-sbtcgp"),y(t,"class","svelte-sbtcgp")},m(e,s){p(e,t,s),v(t,o),v(o,n),v(n,_),v(t,b),v(t,u),v(u,d),v(t,l)},p(e,s){s&1&&h!==(h=e[1].meta.title+"")&&z(_,h),s&1&&f!==(f="/blog/"+e[1].path)&&y(n,"href",f),s&1&&i!==(i=e[1].meta.date+"")&&z(d,i)},d(e){e&&c(t)}}}function M(r){let t,o="Welcome",n,h,_,f,b="Welcome to the blog.",u,i,d=P(r[0].posts),l=[];for(let e=0;e<d.length;e+=1)l[e]=D(A(r,d,e));return{c(){t=m("h1"),t.textContent=o,n=k(`

Please excuse this broken mess of a Svelte page. I am pretty new to this. And finding good fonts. 
Don't tell me that my choices are bad. I will find this out soon enough, if it's really bad.

`),h=m("hr"),_=S(),f=m("h1"),f.textContent=b,u=k(`
Yes, it's not organized by dates.

`),i=m("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=g(e,"H1",{"data-svelte-h":!0}),j(t)!=="svelte-4p3d56"&&(t.textContent=o),n=w(e,`

Please excuse this broken mess of a Svelte page. I am pretty new to this. And finding good fonts. 
Don't tell me that my choices are bad. I will find this out soon enough, if it's really bad.

`),h=g(e,"HR",{}),_=E(e),f=g(e,"H1",{"data-svelte-h":!0}),j(f)!=="svelte-suyni8"&&(f.textContent=b),u=w(e,`
Yes, it's not organized by dates.

`),i=g(e,"UL",{class:!0});var s=C(i);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(c),this.h()},h(){y(i,"class","svelte-sbtcgp")},m(e,s){p(e,t,s),p(e,n,s),p(e,h,s),p(e,_,s),p(e,f,s),p(e,u,s),p(e,i,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(i,null)},p(e,[s]){if(s&1){d=P(e[0].posts);let a;for(a=0;a<d.length;a+=1){const x=A(e,d,a);l[a]?l[a].p(x,s):(l[a]=D(x),l[a].c(),l[a].m(i,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=d.length}},i:I,o:I,d(e){e&&(c(t),c(n),c(h),c(_),c(f),c(u),c(i)),Y(l,e)}}}function R(r,t,o){let{data:n}=t;return r.$$set=h=>{"data"in h&&o(0,n=h.data)},[n]}class G extends O{constructor(t){super(),W(this,t,R,M,L,{data:0})}}export{G as component,F as universal};
