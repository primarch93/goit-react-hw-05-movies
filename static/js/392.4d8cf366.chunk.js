/*! For license information please see 392.4d8cf366.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[392],{378:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var r=n(8175),i=n(184),a=function(){return(0,i.jsxs)(r.ZP,{speed:2,width:400,height:250,viewBox:"0 0 400 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,i.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"104",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"130",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"25",y:"156",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"24",y:"179",rx:"5",ry:"5",width:"220",height:"10"}),(0,i.jsx)("rect",{x:"24",y:"201",rx:"5",ry:"5",width:"220",height:"10"})]})}},6392:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r,i,a,o,c,s,u,l,d,p,h,f=n(5861),x=n(9439),m=n(7757),g=n.n(m),v=n(7689),y=n(2791),b=n(3243),j=n(9417),w=n(378),Z=n(168),k=n(6444),E=n(1087),O=k.ZP.div(r||(r=(0,Z.Z)(["\n  padding: 20px;\n"]))),P=k.ZP.div(i||(i=(0,Z.Z)(["\n  display: flex;\n"]))),C=k.ZP.div(a||(a=(0,Z.Z)(["\n  margin-right: 20px;\n  width: 300px;\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n"]))),_=k.ZP.div(o||(o=(0,Z.Z)(["\n  flex-grow: 1;\n"]))),S=k.ZP.h2(c||(c=(0,Z.Z)(["\n  margin-top: 0;\n  margin-bottom: 10px;\n"]))),U=k.ZP.li(s||(s=(0,Z.Z)(["\n  margin-bottom: 10px;\n  p {\n    margin: 0;\n  }\n"]))),T=(0,k.ZP)(E.rU)(u||(u=(0,Z.Z)(["\n  color: #fff;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),B=k.ZP.button(l||(l=(0,Z.Z)(["\n  display: block;\n  width: fit-content;\n  background-color: aquamarine;\n  font-size: 12px;\n  border-radius: 4px;\n  border: 1px solid tomato;\n  cursor: pointer;\n"]))),q=k.ZP.section(d||(d=(0,Z.Z)(["\n  background-color: #212121;\n  color: #fff;\n  padding: 10px;\n  margin-top: 10px;\n"]))),L=k.ZP.h3(p||(p=(0,Z.Z)(["\n  margin-top: 0;\n  margin-bottom: 20px;\n"]))),M=k.ZP.li(h||(h=(0,Z.Z)(["\n  margin-bottom: 10px;\n"]))),R=n(184),G=function(){var e=(0,v.UO)().id,t=(0,y.useState)(null),n=(0,x.Z)(t,2),r=n[0],i=n[1],a=(0,y.useState)(!1),o=(0,x.Z)(a,2),c=o[0],s=o[1],u=(0,y.useState)(!1),l=(0,x.Z)(u,2),d=l[0],p=l[1],h=(0,v.TH)().state,m=(0,v.s0)();(0,y.useEffect)((function(){var t=function(){var t=(0,f.Z)(g().mark((function t(){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s(!0),t.next=4,(0,b.TP)(e);case 4:n=t.sent,i(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p(!0);case 11:return t.prev=11,s(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]);if(r){var Z=r.genres,k=r.title,E=r.release_date,G=r.overview,N=r.vote_average,D=r.poster_path,F=D?"".concat("https://image.tmdb.org/t/p/w500/").concat(D):j,K=Math.round(10*N),z=Z.map((function(e){return e.name})).join(" "),A=null===E||void 0===E?void 0:E.slice(0,4);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(B,{onClick:function(){m((null===h||void 0===h?void 0:h.from)||"/")},children:"Go Back"}),(0,R.jsx)(O,{children:(0,R.jsxs)(P,{children:[(0,R.jsx)(C,{children:(0,R.jsx)("img",{src:F,alt:k})}),(0,R.jsxs)(_,{children:[(0,R.jsxs)(S,{children:[k," ",A&&"(".concat(A,")")]}),(0,R.jsxs)("ul",{children:[(0,R.jsx)(U,{children:K>0&&(0,R.jsxs)("p",{children:["User Score: ",K,"%"]})}),(0,R.jsxs)(U,{children:[(0,R.jsx)("b",{children:"Overview"}),(0,R.jsx)("p",{children:G})]}),(0,R.jsxs)(U,{children:[(0,R.jsx)("b",{children:"Genres"}),(0,R.jsx)("p",{children:z||" - "})]})]})]})]})}),(0,R.jsxs)(q,{children:[(0,R.jsx)(L,{children:" Additional information"}),(0,R.jsx)("div",{children:(0,R.jsxs)("ul",{children:[(0,R.jsx)(M,{children:(0,R.jsx)(T,{to:"cast",state:h,children:"Cast"})}),(0,R.jsx)(M,{children:(0,R.jsx)(T,{to:"reviews",state:h,children:"Reviews"})})]})})]}),(0,R.jsx)(y.Suspense,{fallback:(0,R.jsx)("div",{children:"Loading subpage..."}),children:(0,R.jsx)(v.j3,{})})]})}return(0,R.jsxs)(R.Fragment,{children:[d&&(0,R.jsx)("div",{children:"Error, please reload the page"}),c&&(0,R.jsx)(w.Z,{})]})}},3243:function(e,t,n){n.d(t,{TP:function(){return p},Wf:function(){return l},_L:function(){return s},tx:function(){return m},vQ:function(){return f}});var r=n(5861),i=n(7757),a=n.n(i),o=n(1243),c="5f76dde929e4c69194ca7d9e261d3a85";function s(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(t,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.Z.defaults.baseURL="https://api.themoviedb.org/3"},8175:function(e,t,n){var r=n(2791),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var a=function(e){var t=e.animate,n=void 0===t||t,a=e.animateBegin,o=e.backgroundColor,c=void 0===o?"#f5f6f7":o,s=e.backgroundOpacity,u=void 0===s?1:s,l=e.baseUrl,d=void 0===l?"":l,p=e.children,h=e.foregroundColor,f=void 0===h?"#eee":h,x=e.foregroundOpacity,m=void 0===x?1:x,g=e.gradientRatio,v=void 0===g?2:g,y=e.gradientDirection,b=void 0===y?"left-right":y,j=e.uniqueKey,w=e.interval,Z=void 0===w?.25:w,k=e.rtl,E=void 0!==k&&k,O=e.speed,P=void 0===O?1.2:O,C=e.style,_=void 0===C?{}:C,S=e.title,U=void 0===S?"Loading...":S,T=e.beforeMask,B=void 0===T?null:T,q=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),L=j||Math.random().toString(36).substring(6),M=L+"-diff",R=L+"-animated-diff",G=L+"-aria",N=E?{transform:"scaleX(-1)"}:null,D="0; "+Z+"; 1",F=P+"s",K="top-bottom"===b?"rotate(90)":void 0;return(0,r.createElement)("svg",i({"aria-labelledby":G,role:"img",style:i(i({},_),N)},q),U?(0,r.createElement)("title",{id:G},U):null,B&&(0,r.isValidElement)(B)?B:null,(0,r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+d+"#"+M+")",style:{fill:"url("+d+"#"+R+")"}}),(0,r.createElement)("defs",null,(0,r.createElement)("clipPath",{id:M},p),(0,r.createElement)("linearGradient",{id:R,gradientTransform:K},(0,r.createElement)("stop",{offset:"0%",stopColor:c,stopOpacity:u},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-v+"; "+-v+"; 1",keyTimes:D,dur:F,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"50%",stopColor:f,stopOpacity:m},n&&(0,r.createElement)("animate",{attributeName:"offset",values:-v/2+"; "+-v/2+"; "+(1+v/2),keyTimes:D,dur:F,repeatCount:"indefinite",begin:a})),(0,r.createElement)("stop",{offset:"100%",stopColor:c,stopOpacity:u},n&&(0,r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+v),keyTimes:D,dur:F,repeatCount:"indefinite",begin:a})))))},o=function(e){return e.children?(0,r.createElement)(a,i({},e)):(0,r.createElement)(c,i({},e))},c=function(e){return(0,r.createElement)(o,i({viewBox:"0 0 476 124"},e),(0,r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.ZP=o},9417:function(e,t,n){e.exports=n.p+"static/media/imageComingSoon.7c02dcee67d3c6af8ac5.jpg"}}]);
//# sourceMappingURL=392.4d8cf366.chunk.js.map