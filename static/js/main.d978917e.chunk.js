(this.webpackJsonpstarwiki=this.webpackJsonpstarwiki||[]).push([[0],{115:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),i=n.n(r),s=(n(115),n(14)),o=n(15),l=n(190),j=n(200),u=n(208),d=n(201),b=n(202),h=n(191),x=n(203),O=n(204),m=n(2),f=function(){var e=Object(s.c)().state;return[].concat(Object(o.a)(Object.keys(e).filter((function(t){return""==e[t]}))),["url","created","edited"]).forEach((function(t){return delete e[t]})),Object(m.jsxs)(a.Fragment,{children:[Object(m.jsx)(j.a,{position:"static",children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)(d.a,{href:"/starwiki",style:{color:"white"},children:Object(m.jsx)(l.a,{})}),Object(m.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1,mx:3},children:e[Object.keys(e)[0]]})]})}),Object(m.jsx)(h.a,{}),Object(m.jsx)(x.a,{maxWidth:"sm",children:Object(m.jsx)(O.a,{sx:{height:"100vh"},children:Object.keys(e).map((function(t){return Object(m.jsxs)("p",{children:[Object(m.jsxs)("span",{style:{fontWeight:"bold"},children:[t.replaceAll("_"," "),": "]})," ",(n=e[t],console.log(n,typeof n),Array.isArray(n)?n.reduce((function(e,t){return e+(t[0][Object.keys(t[0])[0]]+" ,")}),"").slice(0,-1):n)]});var n}))})})]})},p=n(197),g=n(205),w=n(194),v=n(198),y=n(53),S=n.n(y),k=n(92),W=n(199),I=Object(k.a)(),C=function(){var e=Object(s.d)();return Object(m.jsx)(W.a,{theme:I,children:Object(m.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(h.a,{}),Object(m.jsxs)(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)(p.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(b.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(m.jsxs)(O.a,{component:"form",onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget),a=sessionStorage.getItem("email"),c=sessionStorage.getItem("password");console.log(n.get("email"),a,n.get("password"),c),n.get("email")==a&&n.get("password")==c&&(sessionStorage.setItem("token","123token"),e("/starwiki"))},noValidate:!0,sx:{mt:1},children:[Object(m.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(m.jsx)(w.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(m.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(m.jsx)(v.a,{container:!0,children:Object(m.jsx)(v.a,{item:!0,children:Object(m.jsx)(d.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})})},D=n(38),E=n(12),A=n(89),T=n.n(A),q=n(23),F=n(195),J=n(206),L=n(93),U=function(e){var t=e.children,n=e.value,a=e.index,c=Object(L.a)(e,["children","value","index"]);return Object(m.jsx)(O.a,Object(D.a)(Object(D.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},c),{},{children:n===a&&Object(m.jsx)(O.a,{sx:{p:3},children:Object(m.jsx)(b.a,{children:t})})}))},V=n(72),G=n.n(V),H=n(90),M=n(209),N=n(210),P=n(211),Q=n(193),z=n(91),B=function(e){var t;try{t=new URL(e)}catch(n){return!1}return"http:"===t.protocol||"https:"===t.protocol},R=function(e){var t=Object(Q.a)("(max-width:450px)"),n=Object(Q.a)("(max-width:700px)"),c=Object(Q.a)("(max-width:1000px)"),r=a.useState([]),i=Object(E.a)(r,2),l=i[0],j=i[1],u=a.useState(null),d=Object(E.a)(u,2),b=d[0],h=d[1],x=a.useState(""),f=Object(E.a)(x,2),p=f[0],g=f[1],v=function(e){return fetch(e[e.length-1].next).then((function(e){return e.json()})).then((function(e){return h(e),e}))},y=Object(s.d)();return a.useEffect((function(){(function(){var t=Object(H.a)(G.a.mark((function t(){var n,a;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.url+p);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,j([a]),a.next&&window.visualViewport.width>=window.innerWidth&&v([a]).then((function(e){return v([e])}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[p]),a.useEffect((function(){null!=b&&j([].concat(Object(o.a)(l),[b]))}),[b]),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(w.a,{sx:{mb:5},fullWidth:!0,id:"standard-basic",label:"Search...",variant:"standard",onChange:function(e){return g("?search=".concat(e.target.value))}}),Object(m.jsx)(z.a,{dataLength:l.reduce((function(e,t){return e+t.count}),0),next:function(){return v(l)},hasMore:l.length>0&&null!=l[l.length-1].next,loader:"",scrollableTarget:"scrollableDiv",children:Object(m.jsx)(M.a,{cols:t?1:n?2:c?3:4,gap:t?2:10,sx:{margin:t?0:10},children:l.map((function(e){return e.results.map((function(e,t){return Object(m.jsxs)(N.a,{onClick:function(){return function(e){var t=Object(D.a)({},e),n=Object.keys(e).filter((function(t){return B(e[t])}));n.forEach((function(e){return t[e]=[]})),n.forEach((function(n){e[n].toString().split(",").map((function(e){return fetch(e).then((function(e){return e.json()})).then((function(e){t[n]=[].concat(Object(o.a)(t[n]),[[e]]),console.log(t)})).then((function(){return y("/detail",{state:t})}))}))}))}(e)},children:[Object(m.jsx)("img",{src:"https://wallpapercave.com/wp/nHaLQDm.gif?w=248&fit=crop&auto=format",srcSet:"https://wallpapercave.com/wp/nHaLQDm.gif?w=248&fit=crop&auto=format&dpr=2 2x",alt:e[Object.keys(e)[0]],loading:"lazy"}),Object(m.jsx)(P.a,{title:e[Object.keys(e)[0]]})]},t.toString())}))}))})})]})},_=function(){var e=Object(q.a)(),t=Object(a.useState)(0),n=Object(E.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)({}),s=Object(E.a)(i,2),o=s[0],l=s[1];Object(a.useEffect)((function(){fetch("https://swapi.dev/api").then((function(e){return e.json()})).then((function(e){return l(e)}))}),[o]);var d=Object.keys(o),h=Object.values(o);return Object(m.jsxs)(O.a,{sx:{bgcolor:"background.paper"},children:[Object(m.jsx)(j.a,{position:"static",children:Object(m.jsx)(u.a,{children:Object(m.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"StarWiki"})})}),Object(m.jsx)(j.a,{position:"static",children:Object(m.jsx)(F.a,{value:c,onChange:function(e,t){r(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:d.map((function(e,t){return Object(m.jsx)(J.a,Object(D.a)({label:e},function(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}(t)),t)}))})}),Object(m.jsx)(T.a,{axis:"rtl"===e.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){r(e)},children:h.map((function(t,n){return Object(m.jsxs)(U,{value:c,index:n,dir:e.direction,children:[" ",Object(m.jsx)(R,{url:t})]})}))})]})},K=Object(k.a)(),X=function(){var e=Object(s.d)();return Object(m.jsx)(W.a,{theme:K,children:Object(m.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(h.a,{}),Object(m.jsxs)(O.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsx)(p.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(b.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(m.jsxs)(O.a,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var n=new FormData(t.currentTarget);sessionStorage.setItem("email",JSON.stringify(n.get("email")).slice(1,-1)),sessionStorage.setItem("password",JSON.stringify(n.get("password")).slice(1,-1)),e("/login")},sx:{mt:3},children:[Object(m.jsxs)(v.a,{container:!0,spacing:2,children:[Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(w.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(m.jsx)(v.a,{item:!0,xs:12,children:Object(m.jsx)(w.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(m.jsx)(g.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(m.jsx)(v.a,{container:!0,justifyContent:"flex-end",children:Object(m.jsx)(v.a,{item:!0,children:Object(m.jsx)(d.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})})},Y=function(){Object(s.d)();return console.log(sessionStorage.getItem("token")),null==sessionStorage.getItem("token")?Object(s.f)([{path:"signup",element:Object(m.jsx)(X,{})},{path:"login",element:Object(m.jsx)(C,{})},{path:"/",element:Object(m.jsx)(C,{})}]):Object(s.f)([{path:"signup",element:Object(m.jsx)(X,{})},{path:"login",element:Object(m.jsx)(C,{})},{path:"starwiki",element:Object(m.jsx)(_,{})},{path:"detail",element:Object(m.jsx)(f,{})}])},Z=n(35);console.log("/starwiki"),i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Z.a,{children:Object(m.jsx)(Y,{})})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.d978917e.chunk.js.map