"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{854:function(n,e,t){t.d(e,{a:function(){return a}});var r=t(243),i=t(184),a=function(){return(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,i.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})})}},96:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r,i,a,s,o,c,u,l=t(439),p=t(791),f=t(689),h=t(854),d=t(861),m=t(757),x=t.n(m),g=t(924),v=function(){var n=(0,d.Z)(x().mark((function n(e){var t,r;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={url:"/movie/".concat(e,"/reviews"),baseURL:"https://api.themoviedb.org/3",params:{api_key:"392308b47edcb50c16f9f7b8df97d69f"}},n.next=3,(0,g.Z)(t);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),Z=t(168),b=t(444),w=b.ZP.h3(r||(r=(0,Z.Z)(["\n  text-align: center;\n\n  margin-left: 20px;\n  margin-bottom: 30px;\n"]))),j=b.ZP.ul(i||(i=(0,Z.Z)(["\n  margin-left: 50px;\n  margin-bottom: 15px;\n  list-style-type: disc;\n"]))),y=b.ZP.li(a||(a=(0,Z.Z)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n"]))),k=b.ZP.p(s||(s=(0,Z.Z)(["\n  margin-bottom: 20px;\n  font-weight: 600;\n"]))),P=b.ZP.p(o||(o=(0,Z.Z)(["\n  margin-bottom: 30px;\n"]))),_=b.ZP.p(c||(c=(0,Z.Z)(["\nmargin-bottom: 30px;\n\ntext-align: center;\nfont-weight: 500;\n"]))),C=t(184),S=function(n){var e=n.reviews;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w,{children:"Reviews"}),(0,C.jsx)(j,{children:0===e.length?(0,C.jsx)(_,{children:"Oops! We don't have any reviews for this movie."}):e.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,C.jsxs)(y,{children:[(0,C.jsxs)(k,{children:["Author: ",t]}),(0,C.jsx)(P,{children:r})]},e)}))})]})},O=b.ZP.section(u||(u=(0,Z.Z)(["\n  margin: 20px 20px;\n\n  border-bottom: 2px solid;\n"]))),F=function(){var n=(0,p.useState)([]),e=(0,l.Z)(n,2),t=e[0],r=e[1],i=(0,p.useState)(!1),a=(0,l.Z)(i,2),s=a[0],o=a[1],c=(0,p.useState)(null),u=(0,l.Z)(c,2),d=u[0],m=u[1],x=(0,f.UO)().movieId;return(0,p.useEffect)((function(){o(!0),v(x).then((function(n){r(n)})).catch((function(n){return m(n.message)})).finally((function(){o(!1)}))}),[x]),(0,C.jsxs)(C.Fragment,{children:[s&&(0,C.jsx)(h.a,{}),d&&(0,C.jsxs)("p",{children:["Oops, some error:",d]}),(0,C.jsx)(O,{children:(0,C.jsx)(S,{reviews:t})})]})}}}]);
//# sourceMappingURL=96.90ce9d54.chunk.js.map