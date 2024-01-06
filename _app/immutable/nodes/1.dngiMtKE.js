import{s as w,n as k,e as x}from"../chunks/scheduler.k-kUyWhY.js";import{S as C,i as R,g as E,m as o,h as y,j as $,n as i,f as h,l as T,a as j,y as r,o as S}from"../chunks/index.3eaemhlc.js";import{d as q}from"../chunks/singletons.HuUHtfMC.js";const A=()=>{const e=q;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},D={subscribe(e){return A().page.subscribe(e)}};function K(e){let s,c,t,l,_,u=e[0].status+"",p,f,d=e[0].error?.message+"",m,v;return{c(){s=E("pre"),c=o("    "),t=E("code"),l=o(`
    (()__(()
    /       \\     "This message was addressed to you: `),_=E("mark"),p=o(u),f=o(": "),m=o(d),v=o(`"
   ( /    \\  \\
    \\ o o    /
    (_()_)__/ \\             
   / _,==.____ \\
  (   |--|      )
  /\\_.|__|'-.__/\\_
 / (        /     \\ 
 \\  \\      (      /
  )  '._____)    /    
(((____.--(((____/`),this.h()},l(n){s=y(n,"PRE",{});var a=$(s);c=i(a,"    "),t=y(a,"CODE",{});var g=$(t);l=i(g,`
    (()__(()
    /       \\     "This message was addressed to you: `),_=y(g,"MARK",{style:!0});var b=$(_);p=i(b,u),f=i(b,": "),m=i(b,d),b.forEach(h),v=i(g,`"
   ( /    \\  \\
    \\ o o    /
    (_()_)__/ \\             
   / _,==.____ \\
  (   |--|      )
  /\\_.|__|'-.__/\\_
 / (        /     \\ 
 \\  \\      (      /
  )  '._____)    /    
(((____.--(((____/`),g.forEach(h),a.forEach(h),this.h()},h(){T(_,"background","#987b86",1)},m(n,a){j(n,s,a),r(s,c),r(s,t),r(t,l),r(t,_),r(_,p),r(_,f),r(_,m),r(t,v)},p(n,[a]){a&1&&u!==(u=n[0].status+"")&&S(p,u),a&1&&d!==(d=n[0].error?.message+"")&&S(m,d)},i:k,o:k,d(n){n&&h(s)}}}function M(e,s,c){let t;return x(e,D,l=>c(0,t=l)),[t]}let B=class extends C{constructor(s){super(),R(this,s,M,K,w,{})}};export{B as component};
