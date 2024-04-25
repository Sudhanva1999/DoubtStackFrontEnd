"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[579],{3200:function(t,n,r){var e=r(6934),a=r(184),u=(0,e.ZP)("div")((function(t){var n=t.theme;return{backgroundColor:"#ffffff",borderRadius:10,boxShadow:"0 4px 20px ".concat(n.palette.primary.main),padding:30,width:"70%",maxWidth:600,margin:"20px auto"}}));n.Z=function(t){var n=t.children;return(0,a.jsx)(u,{children:n})}},4119:function(t,n,r){r(2791);var e=r(4111),a=r(184);n.Z=function(t){var n=t.title,r=t.hint,u=t.id,o=t.val,c=t.setState,i=t.err;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(e.Z,{id:u,multiline:!0,required:!0,label:n,rows:4,variant:"outlined",fullWidth:!0,color:"secondary",value:o,onChange:function(t){return c(t.target.value)},error:!!i,helperText:i||r,sx:{marginBottom:"15px"}})})}},579:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e=r(4165),a=r(5861),u=r(9439),o=r(2791),c=r(3200),i=r(4119),s=r(1654),f=r(3129),d=r(184),l=function(t){var n=t.qid,r=t.handleAnswer,l=t.userProfile,p=(0,o.useState)(""),h=(0,u.Z)(p,2),v=h[0],m=h[1],w=(0,o.useState)(""),x=(0,u.Z)(w,2),Z=x[0],b=x[1],g=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(){var a,u,o;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!0,v||(b("Answer text cannot be empty"),a=!1),(0,s.$u)(v)||(b("Invalid hyperlink format."),a=!1),a){t.next=5;break}return t.abrupt("return");case 5:return u={text:v,ans_by:l,ans_date_time:new Date},t.next=8,(0,f.oe)(n,u);case 8:(o=t.sent)&&o._id&&r(n);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(i.Z,{title:"Answer Text",id:"answerTextInput",val:v,setState:m,err:Z}),(0,d.jsxs)("div",{className:"btn_indicator_container",children:[(0,d.jsx)("button",{className:"form_postBtn",id:"post-answer",onClick:function(){g()},children:"Post Answer"}),(0,d.jsx)("div",{className:"mandatory_indicator",children:"* indicates mandatory fields"})]})]})}},3129:function(t,n,r){r.d(n,{Bh:function(){return i},Ir:function(){return s},UA:function(){return h},UE:function(){return p},UZ:function(){return f},_f:function(){return l},li:function(){return d},oe:function(){return c}});var e=r(4165),a=r(5861),u=r(6689),o="".concat(u.W,"/answer"),c=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){var a,c;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={qid:n,ans:r},t.next=3,u.h.post("".concat(o,"/addAnswer"),a);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){var a;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.h.post("".concat(o,"/updateAnswerStatus"),{aid:n,approved:r});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){var a,c;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={aid:n,comment:r},t.next=3,u.h.post("".concat(o,"/addComment"),a);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(){var n;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.h.get("".concat(o,"/getUnapprovedAnswers"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n){var r;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.h.get("".concat(o,"/getComments/").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){var a,c;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={aid:n,doubleClicked:r},t.next=3,u.h.post("".concat(o,"/addVoteAnswer"),a);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){var a,c;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={aid:n,doubleClicked:r},t.next=3,u.h.post("".concat(o,"/removeVoteAnswer"),a);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}(),h=function(){var t=(0,a.Z)((0,e.Z)().mark((function t(n,r){var a,c;return(0,e.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={aid:n,switchTo:r},t.next=3,u.h.post("".concat(o,"/switchVoteAnswer"),a);case 3:return c=t.sent,t.abrupt("return",c.data);case 5:case"end":return t.stop()}}),t)})));return function(n,r){return t.apply(this,arguments)}}()},1654:function(t,n,r){r.d(n,{$u:function(){return s},g2:function(){return c},nq:function(){return f}});var e=r(7762),a=r(3433),u=r(184),o=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],c=function(t){var n=new Date,r=Math.floor(Math.abs(n-t)/1e3);return r<60?r+" seconds ago":r<3600?Math.floor(r/60)+" minutes ago":r<86400?Math.floor(r/3600)+" hours ago":r<31536e3?o[t.getMonth()]+" "+i(t)+" at "+t.toTimeString().slice(0,8):o[t.getMonth()]+" "+i(t)+", "+t.getFullYear()+" at "+t.toTimeString().slice(0,8)},i=function(t){var n=t.getDate();return n<10&&(n="0"+n),n},s=function(t){var n=!0,r=(0,a.Z)(t.matchAll(/\[([^\]]*)\]\(([^)]*)\)/g));if(0===r.length)return n;var u,o=(0,e.Z)(r);try{for(o.s();!(u=o.n()).done;){var c=u.value;if(!c[1].length||!c[2].length||!c[2].startsWith("https://")||!c[2].slice(8).length){n=!1;break}}}catch(i){o.e(i)}finally{o.f()}return n},f=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\[([^\]]*)\]\(([^)]*)\)/g,'<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');return(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})}},7762:function(t,n,r){r.d(n,{Z:function(){return a}});var e=r(181);function a(t,n){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=(0,e.Z)(t))||n&&t&&"number"===typeof t.length){r&&(t=r);var a=0,u=function(){};return{s:u,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}}}]);
//# sourceMappingURL=579.6efca8af.chunk.js.map