(this["webpackJsonpnasa-commerce"]=this["webpackJsonpnasa-commerce"]||[]).push([[0],{96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),i=a.n(r),o=a(32),s=a.n(o),l=a(47),j=a(56),b=a(33),d=a.n(b),u=(a(87),a(110)),p=a(112),m=a(113),x=a(114),h=a(3),f=Object(u.a)((function(e){return{root:{flexGrow:1},appBar:{background:"linear-gradient(45deg, #3b53da 45%, #289cff, white)"}}})),O=function(){var e=f();return Object(h.jsx)("div",{className:e.root,children:Object(h.jsx)(p.a,{position:"static",className:e.appBar,children:Object(h.jsx)(m.a,{children:Object(h.jsx)(x.a,{variant:"h6",children:"NASA Astronomy Picture"})})})})},g=a(121),v=a(115),k=a(116),y=a(117),w=a(118),N=a(119),Y=a(120),C=a(53),S=a.n(C),M=a(54),B=a.n(M),D=Object(u.a)((function(e){return{root:{maxWidth:400,marginLeft:e.spacing(10)},media:{height:400},explanation:{maxHeight:210,overflowY:"auto","&::-webkit-scrollbar":{width:"0.2em"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid #f5f5f5"}}}})),G=function(e){var t=e.image,a=D();return Object(h.jsxs)(v.a,{className:a.root,children:[Object(h.jsx)(k.a,{onClick:function(){},children:Object(h.jsx)(y.a,{className:a.media,image:t.url,title:t.title})}),Object(h.jsxs)(w.a,{children:[Object(h.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(h.jsx)(x.a,{className:a.explanation,variant:"body2",color:"textSecondary",component:"p",children:t.explanation})]}),Object(h.jsxs)(N.a,{children:[Object(h.jsx)(Y.a,{children:Object(h.jsx)(S.a,{})}),Object(h.jsx)(Y.a,{children:Object(h.jsx)(B.a,{})})]})]})},A=function(e){var t=e.images;return Object(h.jsx)(h.Fragment,{children:t.length>0&&t.map((function(e,t){return Object(h.jsx)(G,{image:e},t)}))})},E=Object(u.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.grey[100]},imageContainer:{paddingTop:e.spacing(1)}}})),F=function(){var e=E(),t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],i=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,c,i,o,l,j,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="https://api.nasa.gov/planetary/apod?api_key=".concat("CGDZCIREbMWIGc29cl227k1gGNLQB24qeprhkybl"),c=[],!t||!a){e.next=12;break}return i="&start_date=".concat(t.format("YYYY-MM-DD"),"&end_date=").concat(a.format("YYYY-MM-DD")),n=n.concat(i),e.next=7,d.a.get(n);case 7:o=e.sent,l=o.data,c=l,e.next=17;break;case 12:return e.next=14,d.a.get(n);case 14:j=e.sent,b=j.data,c.push(b);case 17:r(c);case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(null,null)}),[]),Object(h.jsxs)("div",{className:e.root,children:[Object(h.jsx)(O,{}),Object(h.jsx)(g.a,{className:e.imageContainer,children:Object(h.jsx)(A,{images:c})})]})},I=a(122),_=a(55),J=Object(_.a)({spacing:10,typography:{fontFamily:"Open Sans, sans-serif",fontSize:15,textAlign:"left",button:{textTransform:"none",letterSpacing:0,padding:0}},palette:{primary:{main:"#3b53da"}}}),L=function(){return Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(I.a,{theme:J,children:Object(h.jsx)(F,{})})})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[96,1,2]]]);
//# sourceMappingURL=main.4e301591.chunk.js.map