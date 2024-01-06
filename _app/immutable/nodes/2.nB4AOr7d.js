import{s as L,n as I}from"../chunks/scheduler.k-kUyWhY.js";import{S as O,i as W,g as p,m as C,s as S,h as v,x as j,n as w,c as E,j as x,f as c,k as b,a as m,z as Y,y as g,o as z}from"../chunks/index.3eaemhlc.js";import{e as P}from"../chunks/each.-oqiv04n.js";const q=async({fetch:r})=>({posts:await(await r("/api/posts")).json()}),F=Object.freeze(Object.defineProperty({__proto__:null,load:q},Symbol.toStringTag,{value:"Module"}));function A(r,t,o){const n=r.slice();return n[1]=t[o],n}function D(r){let t,o,n,h=r[1].meta.title+"",_,f,y,u,i=r[1].meta.date+"",d,l;return{c(){t=p("li"),o=p("h3"),n=p("a"),_=C(h),y=S(),u=p("h4"),d=C(i),l=S(),this.h()},l(e){t=v(e,"LI",{class:!0});var s=x(t);o=v(s,"H3",{class:!0});var a=x(o);n=v(a,"A",{href:!0});var k=x(n);_=w(k,h),k.forEach(c),a.forEach(c),y=E(s),u=v(s,"H4",{class:!0});var H=x(u);d=w(H,i),H.forEach(c),l=E(s),s.forEach(c),this.h()},h(){b(n,"href",f="/blog/"+r[1].path),b(o,"class","svelte-yiskta"),b(u,"class","svelte-yiskta"),b(t,"class","svelte-yiskta")},m(e,s){m(e,t,s),g(t,o),g(o,n),g(n,_),g(t,y),g(t,u),g(u,d),g(t,l)},p(e,s){s&1&&h!==(h=e[1].meta.title+"")&&z(_,h),s&1&&f!==(f="/blog/"+e[1].path)&&b(n,"href",f),s&1&&i!==(i=e[1].meta.date+"")&&z(d,i)},d(e){e&&c(t)}}}function M(r){let t,o="Welcome",n,h,_,f,y="Welcome to the blog.",u,i,d=P(r[0].posts),l=[];for(let e=0;e<d.length;e+=1)l[e]=D(A(r,d,e));return{c(){t=p("h1"),t.textContent=o,n=C(`

Please excuse this broken mess of a Svelte page. I am pretty new to this. And finding good fonts. 
Don't tell me that my choices are bad. I will find this out soon enough, if it's really bad.

`),h=p("hr"),_=S(),f=p("h1"),f.textContent=y,u=C(`
Yes, it's not organized by dates.

`),i=p("ul");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=v(e,"H1",{"data-svelte-h":!0}),j(t)!=="svelte-4p3d56"&&(t.textContent=o),n=w(e,`

Please excuse this broken mess of a Svelte page. I am pretty new to this. And finding good fonts. 
Don't tell me that my choices are bad. I will find this out soon enough, if it's really bad.

`),h=v(e,"HR",{}),_=E(e),f=v(e,"H1",{"data-svelte-h":!0}),j(f)!=="svelte-suyni8"&&(f.textContent=y),u=w(e,`
Yes, it's not organized by dates.

`),i=v(e,"UL",{class:!0});var s=x(i);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(c),this.h()},h(){b(i,"class","svelte-yiskta")},m(e,s){m(e,t,s),m(e,n,s),m(e,h,s),m(e,_,s),m(e,f,s),m(e,u,s),m(e,i,s);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(i,null)},p(e,[s]){if(s&1){d=P(e[0].posts);let a;for(a=0;a<d.length;a+=1){const k=A(e,d,a);l[a]?l[a].p(k,s):(l[a]=D(k),l[a].c(),l[a].m(i,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=d.length}},i:I,o:I,d(e){e&&(c(t),c(n),c(h),c(_),c(f),c(u),c(i)),Y(l,e)}}}function R(r,t,o){let{data:n}=t;return r.$$set=h=>{"data"in h&&o(0,n=h.data)},[n]}class G extends O{constructor(t){super(),W(this,t,R,M,L,{data:0})}}export{G as component,F as universal};
