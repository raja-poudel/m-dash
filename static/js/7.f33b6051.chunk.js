(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[7],{320:function(e,t,n){"use strict";var r=n(4),a=Object(r.a)("div")((function(e){return{backgroundColor:e.theme.palette.primary.light,minHeight:"100vh"}}));t.a=a},321:function(e,t,n){"use strict";var r=n(11),a=n(43),i=n(276),c=n(84),s=n(1),o=["children"];t.a=function(e){var t=e.children,n=Object(a.a)(e,o);return Object(s.jsx)(c.a,Object(r.a)(Object(r.a)({sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1},n),{},{children:Object(s.jsx)(i.a,{sx:{p:{xs:2,sm:3,xl:5}},children:t})}))}},325:function(e,t,n){"use strict";var r=n(0);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},326:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.9887eb8e.svg"},327:function(e,t,n){"use strict";var r=n(244),a=n(64),i=n(298),c=n(1);t.a=function(){return Object(c.jsxs)(r.a,{direction:"row",justifyContent:"space-between",children:[Object(c.jsx)(a.a,{variant:"subtitle2",component:i.a,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),Object(c.jsx)(a.a,{variant:"subtitle2",component:i.a,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})}},516:function(e,t,n){"use strict";n.r(t);var r=n(31),a=n(21),i=n(249),c=n(265),s=n(244),o=n(64),l=n(146),d=n(320),j=n(321),b=n(11),u=n(110),x=n(125),h=n(13),m=n(0),O=n(28),p=n(263),g=n(276),f=n(273),v=n(260),w=n(262),y=n(275),C=n(282),k=n(280),S=n(269),I=n(512),E=n(359),B=n(358),z=n(325),R=n(90),W=n(356),P=n.n(W),D=n(357),q=n.n(D),A=n(326),F=n(1),G=function(e){var t=Object.assign({},e),n=Object(a.a)(),r=Object(z.a)(),d=Object(i.a)(n.breakpoints.down("md")),j=Object(O.c)((function(e){return e.customization})),W=Object(m.useState)(!0),D=Object(h.a)(W,2),G=D[0],H=D[1],J=function(){var e=Object(x.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("Login");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=Object(m.useState)(!1),U=Object(h.a)(M,2),V=U[0],_=U[1],L=function(){_(!V)},K=function(e){e.preventDefault()};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(R.a,{children:Object(F.jsxs)(p.a,{disableElevation:!0,fullWidth:!0,onClick:J,size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:n.palette.grey[50],borderColor:n.palette.grey[100]},children:[Object(F.jsx)(g.a,{sx:{mr:{xs:1,sm:2,width:20}},children:Object(F.jsx)("img",{src:A.a,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign in with Google"]})})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsxs)(g.a,{sx:{alignItems:"center",display:"flex"},children:[Object(F.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"}),Object(F.jsx)(p.a,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(n.palette.grey[100]," !important"),color:"".concat(n.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(j.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),Object(F.jsx)(l.a,{sx:{flexGrow:1},orientation:"horizontal"})]})}),Object(F.jsx)(c.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(F.jsx)(g.a,{sx:{mb:2},children:Object(F.jsx)(o.a,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),Object(F.jsx)(B.a,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:E.a().shape({email:E.b().email("Must be a valid email").max(255).required("Email is required"),password:E.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(x.a)(Object(u.a)().mark((function e(t,n){var a,i,c;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,c=n.setSubmitting;try{r.current&&(i({success:!0}),c(!1))}catch(t){console.error(t),r.current&&(i({success:!1}),a({submit:t.message}),c(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,a=e.handleBlur,i=e.handleChange,c=e.handleSubmit,l=e.isSubmitting,d=e.touched,j=e.values;return Object(F.jsxs)("form",Object(b.a)(Object(b.a)({noValidate:!0,onSubmit:c},t),{},{children:[Object(F.jsxs)(f.a,{fullWidth:!0,error:Boolean(d.email&&r.email),sx:Object(b.a)({},n.typography.customInput),children:[Object(F.jsx)(v.a,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),Object(F.jsx)(w.a,{id:"outlined-adornment-email-login",type:"email",value:j.email,name:"email",onBlur:a,onChange:i,label:"Email Address / Username",inputProps:{}}),d.email&&r.email&&Object(F.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-email-login",children:r.email})]}),Object(F.jsxs)(f.a,{fullWidth:!0,error:Boolean(d.password&&r.password),sx:Object(b.a)({},n.typography.customInput),children:[Object(F.jsx)(v.a,{htmlFor:"outlined-adornment-password-login",children:"Password"}),Object(F.jsx)(w.a,{id:"outlined-adornment-password-login",type:V?"text":"password",value:j.password,name:"password",onBlur:a,onChange:i,endAdornment:Object(F.jsx)(C.a,{position:"end",children:Object(F.jsx)(k.a,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:K,edge:"end",size:"large",children:V?Object(F.jsx)(P.a,{}):Object(F.jsx)(q.a,{})})}),label:"Password",inputProps:{}}),d.password&&r.password&&Object(F.jsx)(y.a,{error:!0,id:"standard-weight-helper-text-password-login",children:r.password})]}),Object(F.jsxs)(s.a,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[Object(F.jsx)(S.a,{control:Object(F.jsx)(I.a,{checked:G,onChange:function(e){return H(e.target.checked)},name:"checked",color:"primary"}),label:"Remember me"}),Object(F.jsx)(o.a,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),r.submit&&Object(F.jsx)(g.a,{sx:{mt:3},children:Object(F.jsx)(y.a,{error:!0,children:r.submit})}),Object(F.jsx)(g.a,{sx:{mt:2},children:Object(F.jsx)(R.a,{children:Object(F.jsx)(p.a,{disableElevation:!0,disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]}))}})]})},H=n(150),J=n(327);t.default=function(){var e=Object(a.a)(),t=Object(i.a)(e.breakpoints.down("md"));return Object(F.jsx)(d.a,{children:Object(F.jsxs)(c.a,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(c.a,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:Object(F.jsx)(c.a,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:Object(F.jsx)(j.a,{children:Object(F.jsxs)(c.a,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[Object(F.jsx)(c.a,{item:!0,sx:{mb:3},children:Object(F.jsx)(r.b,{to:"#",children:Object(F.jsx)(H.a,{})})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(c.a,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(F.jsx)(c.a,{item:!0,children:Object(F.jsxs)(s.a,{alignItems:"center",justifyContent:"center",spacing:1,children:[Object(F.jsx)(o.a,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Hi, Welcome Back"}),Object(F.jsx)(o.a,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(G,{})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(l.a,{})}),Object(F.jsx)(c.a,{item:!0,xs:12,children:Object(F.jsx)(c.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(F.jsx)(o.a,{component:r.b,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),Object(F.jsx)(c.a,{item:!0,xs:12,sx:{m:3,mt:1},children:Object(F.jsx)(J.a,{})})]})})}}}]);
//# sourceMappingURL=7.f33b6051.chunk.js.map