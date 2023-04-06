"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[847],{4723:function(e,r,t){t.d(r,{Z:function(){return f}});var n,a,c=t(7689),u=t(168),i=t(6444),s=t(1087),o=(0,i.ZP)(s.rU)(n||(n=(0,u.Z)(["\n\n  padding: 5px;\n  color: rgba(0, 0, 0);\n  text-decoration: none;\n\n\n\n  &:hover,\n  &:focus {\n\n    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3);\n    color: #02c59b;\n  }\n"]))),h=i.ZP.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),p=t(184),f=function(e){var r=e.movies,t=(0,c.TH)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h,{children:r.map((function(e){var r=e.id,n=e.title;return(0,p.jsx)("li",{children:(0,p.jsx)(o,{state:{from:t},to:"/movies/".concat(r),children:n})},r)}))})})}},378:function(e,r,t){t.d(r,{Z:function(){return c}});t(2791);var n=t(8175),a=t(184),c=function(){return(0,a.jsxs)(n.ZP,{speed:2,width:400,height:250,viewBox:"0 0 400 250",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,a.jsx)("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"104",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"130",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"25",y:"156",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"24",y:"179",rx:"5",ry:"5",width:"220",height:"10"}),(0,a.jsx)("rect",{x:"24",y:"201",rx:"5",ry:"5",width:"220",height:"10"})]})}},7847:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(5861),a=t(9439),c=t(7757),u=t.n(c),i=t(2791),s=t(1087),o=t(9085),h=t(1413),p=t(1134),f=t(184);var x=function(e){var r=e.onSearch,t=(0,p.cI)({defaultValues:{search:""}}),n=t.register,a=t.handleSubmit,c=t.formState.errors;return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:a((function(e){""!==e.search.trim()&&r(e.search.trim())})),children:[(0,f.jsx)("input",(0,h.Z)((0,h.Z)({type:"text"},n("search",{required:!0})),{},{"aria-invalid":c.name?"true":"false"})),(0,f.jsx)("button",{type:"submit",children:"Search"})]})})},d=t(4723),l=t(3243),y=t(378),v=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],c=r[1],h=(0,i.useState)(!1),p=(0,a.Z)(h,2),v=p[0],g=p[1],m=(0,i.useState)(!1),w=(0,a.Z)(m,2),Z=w[0],b=w[1],j=(0,s.lr)(),k=(0,a.Z)(j,2),S=k[0],_=k[1],q=S.get("query");return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,c([]),g(!0),e.next=7,(0,l.Wf)(q);case 7:r=e.sent,c(r),""!==q&&0===r.length&&o.Am.error("UpsOops!!! We did not find any movies for this request. Try changing the query."),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),b(!0);case 15:return e.prev=15,g(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,12,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[q]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(x,{onSearch:function(e){e.trim()&&_({query:e})}}),Z&&"Error, please reload the page",v&&(0,f.jsx)(y.Z,{}),(0,f.jsx)(d.Z,{movies:t})]})}},3243:function(e,r,t){t.d(r,{TP:function(){return f},Wf:function(){return h},_L:function(){return s},tx:function(){return y},vQ:function(){return d}});var n=t(5861),a=t(7757),c=t.n(a),u=t(1243),i="5f76dde929e4c69194ca7d9e261d3a85";function s(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(r,"&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/credits?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=847.a900751b.chunk.js.map