(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(6),a=c.n(r),i=(c(11),c(12),c(2)),o=c(3),j=function(e,t){switch(t.type){case"SESSION_UP":return Object(o.a)(Object(o.a)({},e),{},{session:e.session+1});case"SESSION_DOWN":return Object(o.a)(Object(o.a)({},e),{},{session:e.session-1});case"BREAK_UP":return Object(o.a)(Object(o.a)({},e),{},{breaks:e.breaks+1});case"BREAK_DOWN":return Object(o.a)(Object(o.a)({},e),{},{breaks:e.breaks-1});default:return e}},l=c(0),b={session:25,breaks:5},u=function(e){var t=e.children,c=Object(s.useReducer)(j,b),n=Object(i.a)(c,2),r=n[0],a=n[1];return Object(l.jsx)(O.Provider,{value:{session:r.session,breaks:r.breaks,incrementSession:function(){a({type:"SESSION_UP"})},decrementSession:function(){a({type:"SESSION_DOWN"})},incrementBreak:function(){a({type:"BREAK_UP"})},decrementBreak:function(){a({type:"BREAK_DOWN"})}},children:t})},O=Object(s.createContext)(b),d=function(){var e=Object(s.useContext)(O),t=e.session,c=e.incrementSession,n=e.decrementSession;return Object(l.jsxs)("div",{className:"stage",children:[Object(l.jsx)("h3",{children:"Session Length"}),Object(l.jsxs)("h4",{children:[t," min"]}),Object(l.jsxs)("div",{className:"arrows",children:[Object(l.jsx)("button",{onClick:t>1&&function(){return n()},children:Object(l.jsx)("svg",{className:"arrow",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"})})}),Object(l.jsx)("button",{onClick:t<60&&function(){return c()},children:Object(l.jsx)("svg",{className:"arrow",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"})})})]})]})},h=function(){var e=Object(s.useContext)(O),t=e.breaks,c=e.decrementBreak,n=e.incrementBreak;return Object(l.jsxs)("div",{className:"stage",children:[Object(l.jsx)("h3",{children:"Break Length"}),Object(l.jsxs)("h4",{children:[t," min"]}),Object(l.jsxs)("div",{className:"arrows",children:[Object(l.jsx)("button",{onClick:t>1&&function(){return c()},children:Object(l.jsx)("svg",{className:"arrow",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"})})}),Object(l.jsx)("button",{onClick:t<60&&function(){return n()},children:Object(l.jsx)("svg",{className:"arrow",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"})})})]})]})},x=c(5),f=c.p+"static/media/dong.de79dce4.mp3",m=c.p+"static/media/ding.303bca13.mp3",p=function(){var e=Object(s.useContext)(O),t=e.breaks,c=e.session,n=60*c,r=60*t,a=Object(s.useState)("Press play to start"),o=Object(i.a)(a,2),j=o[0],b=o[1],u=Object(s.useState)(!1),d=Object(i.a)(u,2),h=d[0],p=d[1],v=c.toString()+":00",L=Object(s.useState)(v),S=Object(i.a)(L,2),k=S[0],N=S[1],g=Object(s.useState)(!0),C=Object(i.a)(g,2),B=C[0],w=C[1],y=Object(s.useState)(!1),I=Object(i.a)(y,2),E=I[0],V=I[1],H=Object(s.useState)(),M=Object(i.a)(H,2),A=M[0],P=M[1],_=Object(x.a)(f),T=Object(i.a)(_,1)[0],Z=Object(x.a)(m),R=Object(i.a)(Z,1)[0],D=Object(s.useState)(),K=Object(i.a)(D,2),U=K[0],W=K[1],J=Object(s.useState)(),q=Object(i.a)(J,2),z=q[0],F=q[1],G=Object(s.useState)(),Q=Object(i.a)(G,2),X=Q[0],Y=Q[1];Object(s.useEffect)((function(){}),[k]),Object(s.useEffect)((function(){h&&U>0&&(F((function(e){return parseInt(U/60,10)<10?"0"+parseInt(U/60,10):parseInt(U/60,10)})),Y((function(e){return parseInt(U%60,10)<10?"0"+parseInt(U%60,10):parseInt(U%60,10)}))),U<60&&!E&&setTimeout(V(!0),2e3),0===U&&(V(!1),B&&(console.log("finished studying"),R(),b("Time for a break"),W(r),w(!1)),B||(console.log("finished break"),T(),b("Time to focus"),W(n),w(!0)))}),[U]),Object(s.useEffect)((function(){}),[z]),Object(s.useEffect)((function(){h&&N(z+":"+X)}),[X]);var $=function(){W((function(e){return e-1}))},ee=function(e,t,c){var s;"play"===c?(s=e,console.log("playing",s),h||W(s),setTimeout((function(){p(!0)}),1e3),B&&b("Time to focus"),B||b("Time for a break"),P(setInterval($,1e3))):"pause"===c?(clearInterval(A),b("Paused"),console.log("paused")):(clearInterval(A),b("Press play to restart"),w(!0),W(n),p(!1),console.log("restarting"))};return Object(l.jsxs)("div",{className:"display",children:[Object(l.jsxs)("h1",{children:[" ",j]}),Object(l.jsxs)("h1",{className:E?"time-left":"standard",children:[" ",h?k:v," "]}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)("button",{onClick:function(){return ee(n,0,"play")},children:Object(l.jsx)("svg",{className:"control",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M8,5.14V19.14L19,12.14L8,5.14Z"})})}),Object(l.jsx)("button",{onClick:function(){return ee(n,0,"pause")},children:Object(l.jsx)("svg",{className:"control",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M14,19H18V5H14M6,19H10V5H6V19Z"})})}),Object(l.jsx)("button",{onClick:function(){return ee(n,0,"restart")},children:Object(l.jsx)("svg",{className:"control",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"currentColor",d:"M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"})})})]})]})};var v=function(){return Object(l.jsx)(u,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{className:"title",children:"My Pomodoro Timer"}),Object(l.jsxs)("div",{className:"stages",children:[Object(l.jsx)(d,{id:"session"}),Object(l.jsx)(h,{id:"break"})]}),Object(l.jsx)(p,{})]})})};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.46e450be.chunk.js.map