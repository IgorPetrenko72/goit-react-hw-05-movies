"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[760],{854:function(n,e,r){r.d(e,{a:function(){return i}});var t=r(243),o=r(184),i=function(){return(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,o.jsx)(t.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},368:function(n,e,r){r.d(e,{e:function(){return s}});var t=r(689),o=r(87),i=r(603),a=r(184),s=function(n){var e=n.movies,r=(0,t.TH)();return(0,a.jsx)(a.Fragment,{children:e.map((function(n){return(0,a.jsx)(i.jE,{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(n.id),state:{from:r},children:n.title})},n.id)}))})}},603:function(n,e,r){r.d(e,{Dx:function(){return u},jE:function(){return p}});var t,o,i,a=r(168),s=r(444),u=s.ZP.h2(t||(t=(0,a.Z)(["\n  margin-left: 20px;\n  margin-bottom: 20px;\n"]))),p=(s.ZP.ul(o||(o=(0,a.Z)(["\n  margin-left: 50px;\n  margin-bottom: 15px;\n  list-style-type: disc;\n"]))),s.ZP.li(i||(i=(0,a.Z)(["\n  margin-bottom: 5px;\n\n  :hover,\n  :focus {\n    color: #2196f3;\n  }\n"]))))},760:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,o,i,a,s=r(439),u=r(791),p=r(87),c=r(854),l=r(168),x=r(444),d=x.ZP.input(t||(t=(0,l.Z)(["\nmargin: 20px 0px 20px 20px;\npadding: 6px 12px;\n  width: 250px;\n\n  border-radius:3px 0px 0px 3px;\n  border: 2px solid;\n  border-right:none;\n  outline: none;\n  \n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    border-color:#2196f3;\n  }\n"]))),f=x.ZP.button(o||(o=(0,l.Z)(["\n  padding: 6px 12px;\n  \n\n  border-radius:0px 3px 3px 0px;\n  border: 2px solid;\n  outline: none;\n  \n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    background-color:#b1e0f2;\n  }\n"]))),h=r(184),m=function(n){var e=n.setSearchParams,r=(0,u.useState)(""),t=(0,s.Z)(r,2),o=t[0],i=t[1];return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("form",{onSubmit:function(n){n.preventDefault(),e(""!==o?{query:o.trim()}:{}),i("")},children:[(0,h.jsx)(d,{onChange:function(n){var e=n.target.value;i(e)},type:"text",name:"searchInput",value:o,placeholder:"Enter movie name"}),(0,h.jsx)(f,{children:"Search"})]})})},g=r(368),v=r(861),b=r(757),Z=r.n(b),j=r(924),y=function(){var n=(0,v.Z)(Z().mark((function n(e){var r,t;return Z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={url:"/search/movie",baseURL:"https://api.themoviedb.org/3",params:{api_key:"392308b47edcb50c16f9f7b8df97d69f",query:e}},n.next=3,(0,j.Z)(r);case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),w=x.ZP.section(i||(i=(0,l.Z)(["\n  margin: 20px 20px;\n"]))),S=(x.ZP.input(a||(a=(0,l.Z)(["\nmargin: 20px 0px 20px 20px;\npadding: 6px 12px;\n  width: 250px;\n\n  border-radius:6px 0px 0px 6px;\n  border: 2px solid;\n  outline: none;\n  \n  font-size: 16px;\n\n  &:hover,\n  &:focus {\n    border-color:#2196f3;\n  }\n"]))),r(603)),k=function(){var n,e=(0,u.useState)([]),r=(0,s.Z)(e,2),t=r[0],o=r[1],i=(0,u.useState)(!1),a=(0,s.Z)(i,2),l=a[0],x=a[1],d=(0,u.useState)(null),f=(0,s.Z)(d,2),v=f[0],b=f[1],Z=(0,u.useState)(!1),j=(0,s.Z)(Z,2),k=j[0],P=j[1],C=(0,p.lr)(),_=(0,s.Z)(C,2),E=_[0],L=_[1],q=null!==(n=E.get("query"))&&void 0!==n?n:"";return(0,u.useEffect)((function(){q&&(P(!1),b(null),x(!0),y(q).then((function(n){o(n),0===n.length&&P(!0)})).catch((function(n){return b(n.message)})).finally((function(){x(!1)})))}),[q]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(w,{children:(0,h.jsx)(m,{setSearchParams:L})}),v&&(0,h.jsxs)("p",{style:{marginLeft:"50px"},children:["Oops, some error:",v]}),t.length>0&&(0,h.jsxs)(w,{children:[(0,h.jsx)(S.Dx,{children:"Search results"}),(0,h.jsx)(g.e,{movies:t})]}),k&&(0,h.jsx)("p",{style:{marginLeft:"50px"},children:"Oops...Nothing was found.Try to enter something else."}),l&&(0,h.jsx)(c.a,{})]})}}}]);
//# sourceMappingURL=760.9e4ed2a5.chunk.js.map