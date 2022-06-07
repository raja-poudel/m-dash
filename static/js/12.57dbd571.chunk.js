(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[12],{287:function(e,t,c){"use strict";var a=c(21),s=c(268),n=c(203),i=c(298),r=c(11),o=c(43),l=c(266),j=c(1),d=["color","outline","size","sx"],b=function(e){var t=e.color,c=e.outline,s=e.size,n=e.sx,i=Object(o.a)(e,d),b=Object(a.a)(),m=t&&!c&&{color:b.palette.background.paper,bgcolor:"".concat(t,".main")},x=c&&{color:t?"".concat(t,".main"):"primary.main",bgcolor:b.palette.background.paper,border:"2px solid",borderColor:t?"".concat(t,".main"):"primary.main"},h={};switch(s){case"badge":h={width:b.spacing(3.5),height:b.spacing(3.5)};break;case"xs":h={width:b.spacing(4.25),height:b.spacing(4.25)};break;case"sm":h={width:b.spacing(5),height:b.spacing(5)};break;case"lg":h={width:b.spacing(9),height:b.spacing(9)};break;case"xl":h={width:b.spacing(10.25),height:b.spacing(10.25)};break;case"md":h={width:b.spacing(7.5),height:b.spacing(7.5)};break;default:h={}}return Object(j.jsx)(l.a,Object(r.a)({sx:Object(r.a)(Object(r.a)(Object(r.a)(Object(r.a)({},m),x),h),n)},i))};t.a=function(e){var t=e.title,c=e.link,r=e.icon,o=Object(a.a)();return Object(j.jsx)(s.a,{title:t||"Reference",placement:"left",children:Object(j.jsxs)(n.a,{disableRipple:!0,children:[!r&&Object(j.jsx)(b,{component:i.a,href:c,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:Object(j.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsxs)("g",{clipPath:"url(#clip0)",children:[Object(j.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:o.palette.primary.main}),Object(j.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:o.palette.primary[800]}),Object(j.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:o.palette.primary.main})]}),Object(j.jsx)("defs",{children:Object(j.jsx)("clipPath",{id:"clip0",children:Object(j.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),r&&Object(j.jsx)(b,{component:i.a,href:c,target:"_blank",size:"badge",color:"primary",outline:!0,children:r})]})})}},298:function(e,t,c){"use strict";var a=c(19),s=c(13),n=c(3),i=c(5),r=c(2),o=c(0),l=c(7),j=c(83),d=c(14),b=c(62),m=c(8),x=c(4),h=c(9),O=c(65),u=c(17),p=c(64),g=c(63),w=c(71);function f(e){return Object(g.a)("MuiLink",e)}var y=Object(w.a)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),v=c(1),k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],L={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},V=Object(x.a)(p.a,{name:"MuiLink",slot:"Root",overridesResolver:function(e,t){var c=e.ownerState;return[t.root,t["underline".concat(Object(m.a)(c.underline))],"button"===c.component&&t.button]}})((function(e){var t=e.theme,c=e.ownerState,a=Object(d.b)(t,"palette.".concat(function(e){return L[e]||e}(c.color)))||c.color;return Object(r.a)({},"none"===c.underline&&{textDecoration:"none"},"hover"===c.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===c.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==a?Object(b.a)(a,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===c.component&&Object(n.a)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),M=o.forwardRef((function(e,t){var c=Object(h.a)({props:e,name:"MuiLink"}),n=c.className,d=c.color,b=void 0===d?"primary":d,x=c.component,p=void 0===x?"a":x,g=c.onBlur,w=c.onFocus,y=c.TypographyClasses,M=c.underline,S=void 0===M?"always":M,C=c.variant,B=void 0===C?"inherit":C,R=c.sx,z=Object(i.a)(c,k),A=Object(O.a)(),D=A.isFocusVisibleRef,F=A.onBlur,Z=A.onFocus,N=A.ref,P=o.useState(!1),T=Object(s.a)(P,2),H=T[0],I=T[1],J=Object(u.a)(t,N),W=Object(r.a)({},c,{color:b,component:p,focusVisible:H,underline:S,variant:B}),_=function(e){var t=e.classes,c=e.component,a=e.focusVisible,s=e.underline,n={root:["root","underline".concat(Object(m.a)(s)),"button"===c&&"button",a&&"focusVisible"]};return Object(j.a)(n,f,t)}(W);return Object(v.jsx)(V,Object(r.a)({color:b,className:Object(l.a)(_.root,n),classes:y,component:p,onBlur:function(e){F(e),!1===D.current&&I(!1),g&&g(e)},onFocus:function(e){Z(e),!0===D.current&&I(!0),w&&w(e)},ref:J,ownerState:W,variant:B,sx:[].concat(Object(a.a)(Object.keys(L).includes(b)?[]:[{color:b}]),Object(a.a)(Array.isArray(R)?R:[R]))},z))}));t.a=M},506:function(e,t,c){"use strict";c.r(t);var a=c(147),s=c(276),n=c(265),i=c(108),r=c(84),o=c(287),l=c(35),j=c(1),d=function(e){var t=e.shadow;return Object(j.jsx)(a.a,{sx:{mb:3,boxShadow:t},children:Object(j.jsx)(s.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",py:4.5,bgcolor:"primary.light",color:"grey.800"},children:Object(j.jsxs)(s.a,{sx:{color:"inherit"},children:["boxShadow: ",t]})})})};t.default=function(){return Object(j.jsx)(r.a,{title:"Basic Shadow",secondary:Object(j.jsx)(o.a,{link:"https://next.material-ui.com/system/shadows/"}),children:Object(j.jsx)(n.a,{container:!0,spacing:l.b,children:Object(j.jsx)(n.a,{item:!0,xs:12,children:Object(j.jsx)(i.a,{title:"Basic Shadow",children:Object(j.jsxs)(n.a,{container:!0,spacing:l.b,children:[Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"0"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"1"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"2"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"3"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"4"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"5"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"6"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"7"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"8"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"9"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"10"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"11"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"12"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"13"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"14"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"15"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"16"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"17"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"18"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"19"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"20"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"21"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"22"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"23"})}),Object(j.jsx)(n.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(j.jsx)(d,{shadow:"24"})})]})})})})})}}}]);
//# sourceMappingURL=12.57dbd571.chunk.js.map