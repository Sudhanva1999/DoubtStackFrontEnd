"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[146],{8146:function(e,t,r){r.r(t),r.d(t,{default:function(){return ce}});var o=r(9439),a=r(4942),n=r(2791),i=r(6934),c=r(721),s=r(2645);function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,s.Z)(e,t,r)}function d(e){if(e.type)return e;if("#"===e.charAt(0))return d(function(e){e=e.slice(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),r=e.match(t);return r&&1===r[0].length&&(r=r.map((function(e){return e+e}))),r?"rgb".concat(4===r.length?"a":"","(").concat(r.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(r))throw new Error((0,c.Z)(9,e));var o,a=e.substring(t+1,e.length-1);if("color"===r){if(o=(a=a.split(" ")).shift(),4===a.length&&"/"===a[3].charAt(0)&&(a[3]=a[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(o))throw new Error((0,c.Z)(10,o))}else a=a.split(",");return{type:r,values:a=a.map((function(e){return parseFloat(e)})),colorSpace:o}}function p(e){var t=e.type,r=e.colorSpace,o=e.values;return-1!==t.indexOf("rgb")?o=o.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(o[1]="".concat(o[1],"%"),o[2]="".concat(o[2],"%")),o=-1!==t.indexOf("color")?"".concat(r," ").concat(o.join(" ")):"".concat(o.join(", ")),"".concat(t,"(").concat(o,")")}function u(e,t){return e=d(e),t=l(t),"rgb"!==e.type&&"hsl"!==e.type||(e.type+="a"),"color"===e.type?e.values[3]="/".concat(t):e.values[3]=t,p(e)}var h=r(6130),v=r(8199),g=r(3366),m=r(7462),f=r(3733),b=r(838),x=r(4131),Z=r(5070),y=r(1046),k=r(6199),C=r(3701),j=r(162),w=r(2071),S=r(9703);var I=(0,S.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var O=(0,S.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);var B=(0,S.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),M=r(4657);function A(e){return(0,M.ZP)("MuiMenuItem",e)}var R=(0,S.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),P=r(184),L=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],D=(0,i.ZP)(C.Z,{shouldForwardProp:function(e){return(0,Z.Z)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((function(e){var t,r=e.theme,o=e.ownerState;return(0,m.Z)({},r.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:"1px solid ".concat((r.vars||r).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(r.vars||r).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(t,"&.".concat(R.selected),(0,a.Z)({backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,x.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)},"&.".concat(R.focusVisible),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.focusOpacity,"))"):(0,x.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.focusOpacity)})),(0,a.Z)(t,"&.".concat(R.selected,":hover"),{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / calc(").concat(r.vars.palette.action.selectedOpacity," + ").concat(r.vars.palette.action.hoverOpacity,"))"):(0,x.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity+r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:r.vars?"rgba(".concat(r.vars.palette.primary.mainChannel," / ").concat(r.vars.palette.action.selectedOpacity,")"):(0,x.Fq)(r.palette.primary.main,r.palette.action.selectedOpacity)}}),(0,a.Z)(t,"&.".concat(R.focusVisible),{backgroundColor:(r.vars||r).palette.action.focus}),(0,a.Z)(t,"&.".concat(R.disabled),{opacity:(r.vars||r).palette.action.disabledOpacity}),(0,a.Z)(t,"& + .".concat(I.root),{marginTop:r.spacing(1),marginBottom:r.spacing(1)}),(0,a.Z)(t,"& + .".concat(I.inset),{marginLeft:52}),(0,a.Z)(t,"& .".concat(B.root),{marginTop:0,marginBottom:0}),(0,a.Z)(t,"& .".concat(B.inset),{paddingLeft:36}),(0,a.Z)(t,"& .".concat(O.root),{minWidth:36}),t),!o.dense&&(0,a.Z)({},r.breakpoints.up("sm"),{minHeight:"auto"}),o.dense&&(0,m.Z)({minHeight:32,paddingTop:4,paddingBottom:4},r.typography.body2,(0,a.Z)({},"& .".concat(O.root," svg"),{fontSize:"1.25rem"})))})),z=n.forwardRef((function(e,t){var r=(0,y.Z)({props:e,name:"MuiMenuItem"}),o=r.autoFocus,a=void 0!==o&&o,i=r.component,c=void 0===i?"li":i,s=r.dense,l=void 0!==s&&s,d=r.divider,p=void 0!==d&&d,u=r.disableGutters,h=void 0!==u&&u,v=r.focusVisibleClassName,x=r.role,Z=void 0===x?"menuitem":x,C=r.tabIndex,S=r.className,I=(0,g.Z)(r,L),O=n.useContext(k.Z),B=n.useMemo((function(){return{dense:l||O.dense||!1,disableGutters:h}}),[O.dense,l,h]),M=n.useRef(null);(0,j.Z)((function(){a&&M.current&&M.current.focus()}),[a]);var R,z=(0,m.Z)({},r,{dense:B.dense,divider:p,disableGutters:h}),F=function(e){var t=e.disabled,r=e.dense,o=e.divider,a=e.disableGutters,n=e.selected,i=e.classes,c={root:["root",r&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",n&&"selected"]},s=(0,b.Z)(c,A,i);return(0,m.Z)({},i,s)}(r),G=(0,w.Z)(M,t);return r.disabled||(R=void 0!==C?C:-1),(0,P.jsx)(k.Z.Provider,{value:B,children:(0,P.jsx)(D,(0,m.Z)({ref:G,role:Z,tabIndex:R,component:c,focusVisibleClassName:(0,f.Z)(F.focusVisible,v),className:(0,f.Z)(F.root,S)},I,{ownerState:z,classes:F}))})})),F=r(3400),G=r(4036),T=r(5527);function N(e){return(0,M.ZP)("MuiAppBar",e)}(0,S.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);var E=["className","color","enableColorOnDark","position"],V=function(e,t){return e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t},W=(0,i.ZP)(T.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["position".concat((0,G.Z)(r.position))],t["color".concat((0,G.Z)(r.color))]]}})((function(e){var t=e.theme,r=e.ownerState,o="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,m.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!t.vars&&(0,m.Z)({},"default"===r.color&&{backgroundColor:o,color:t.palette.getContrastText(o)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:t.palette[r.color].main,color:t.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===t.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,m.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,m.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?t.vars.palette.AppBar.defaultBg:V(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?t.vars.palette.text.primary:V(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?t.vars.palette[r.color].main:V(t.vars.palette.AppBar.darkBg,t.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?t.vars.palette[r.color].contrastText:V(t.vars.palette.AppBar.darkColor,t.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),q=n.forwardRef((function(e,t){var r=(0,y.Z)({props:e,name:"MuiAppBar"}),o=r.className,a=r.color,n=void 0===a?"primary":a,i=r.enableColorOnDark,c=void 0!==i&&i,s=r.position,l=void 0===s?"fixed":s,d=(0,g.Z)(r,E),p=(0,m.Z)({},r,{color:n,position:l,enableColorOnDark:c}),u=function(e){var t=e.color,r=e.position,o=e.classes,a={root:["root","color".concat((0,G.Z)(t)),"position".concat((0,G.Z)(r))]};return(0,b.Z)(a,N,o)}(p);return(0,P.jsx)(W,(0,m.Z)({square:!0,component:"header",ownerState:p,elevation:4,className:(0,f.Z)(u.root,o,"fixed"===l&&"mui-fixed"),ref:t},d))}));function H(e){return(0,M.ZP)("MuiToolbar",e)}(0,S.Z)("MuiToolbar",["root","gutters","regular","dense"]);var K=["className","component","disableGutters","variant"],Q=(0,i.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,m.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===r.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),U=n.forwardRef((function(e,t){var r=(0,y.Z)({props:e,name:"MuiToolbar"}),o=r.className,a=r.component,n=void 0===a?"div":a,i=r.disableGutters,c=void 0!==i&&i,s=r.variant,l=void 0===s?"regular":s,d=(0,g.Z)(r,K),p=(0,m.Z)({},r,{component:n,disableGutters:c,variant:l}),u=function(e){var t=e.classes,r={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,b.Z)(r,H,t)}(p);return(0,P.jsx)(Q,(0,m.Z)({as:n,className:(0,f.Z)(u.root,o),ref:t,ownerState:p},d))})),$=r(890),J=r(6029),X=r(3044),Y=r(4294),_=r(6189),ee=(0,_.Z)((0,P.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle"),te=(0,_.Z)((0,P.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),re=(0,_.Z)((0,P.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert");function oe(e){var t=e.handleProfileButtonClick,r=e.handleLogout,o=e.isMenuOpened,a=e.setMenuOpen,i=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=function(e){i.current&&!i.current.contains(e.target)&&"IMG"!=e.target.nodeName&&a(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[i]),(0,P.jsx)("div",{children:o&&(0,P.jsxs)("div",{ref:i,style:{position:"absolute",top:"60px",right:"30px",color:"black",backgroundColor:"white",border:"1px solid #ccc",borderRadius:"5px",width:"150px",zIndex:1e3},children:[(0,P.jsx)("div",{style:{padding:"8px 12px",cursor:"pointer"},onClick:t,id:"#profile",children:"Profile"}),(0,P.jsx)("div",{style:{padding:"8px 12px",cursor:"pointer"},onClick:r,id:"#logout",children:"Logout"})]})})}var ae=(0,i.ZP)("div")((function(e){var t=e.theme;return(0,a.Z)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:u(t.palette.common.white,.15),"&:hover":{backgroundColor:u(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(3),width:"auto"})})),ne=(0,i.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),ie=(0,i.ZP)(h.ZP)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,a.Z)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}}));function ce(e){var t=e.search,r=e.setQuesitonPage,a=e.profileIcon,i=e.handleProfile,c=e.initial,s=e.handleLogout,l=e.page,d=n.useState(null),p=(0,o.Z)(d,2),u=p[0],h=p[1],g=n.useState(!0),m=(0,o.Z)(g,2),f=m[0],b=(m[1],n.useState(t)),x=(0,o.Z)(b,2),Z=x[0],y=x[1],k=n.useState(!1),C=(0,o.Z)(k,2),j=C[0],w=C[1],S=Boolean(u),I=function(){w(!j)},O=function(){h(null),w(!1)},B=(0,P.jsx)(oe,{handleProfileButtonClick:function(){w(!1),O(),i()},handleLogout:s,isMenuOpened:j,setMenuOpen:w}),M="primary-search-account-menu-mobile",A=(0,P.jsx)(v.Z,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:M,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:S,onClose:O,children:(0,P.jsxs)(z,{onClick:I,children:[(0,P.jsx)(F.Z,{size:"large","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:(0,P.jsx)(ee,{})}),(0,P.jsx)("p",{children:"Profile"})]})});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(q,{position:"fixed",children:[(0,P.jsxs)(U,{children:[(0,P.jsx)($.Z,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"}},children:"Fake StackOverFlow"}),(0,P.jsx)(J.Z,{sx:{flexGrow:1}}),"home"==l||"userHome"==l?(0,P.jsxs)(ae,{children:[(0,P.jsx)(ne,{children:(0,P.jsx)(te,{})}),(0,P.jsx)(ie,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},value:Z,id:"searchBar",onChange:function(e){y(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),r(e.target.value,"Search Results"))}})]}):(0,P.jsx)(P.Fragment,{}),(0,P.jsx)(J.Z,{sx:{display:{xs:"none",md:"flex"}},children:f?(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(F.Z,{size:"large",edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:I,id:"profileIcon",color:"inherit",children:a?(0,P.jsx)(X.Z,{src:a}):(0,P.jsx)(X.Z,{children:c})})}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Y.Z,{variant:"contained",color:"inherit",sx:{color:"#1976D2",fontWeight:"bold",mr:2},children:"Sign Up"}),(0,P.jsx)(Y.Z,{variant:"contained",color:"inherit",sx:{color:"#1976D2",fontWeight:"bold"},children:"Sign In"})]})}),(0,P.jsx)(J.Z,{sx:{display:{xs:"flex",md:"none"}},children:(0,P.jsx)(F.Z,{size:"large","aria-label":"show more","aria-controls":M,"aria-haspopup":"true",onClick:function(e){h(e.currentTarget),w(!0)},color:"inherit",children:(0,P.jsx)(re,{})})})]}),A,B]}),(0,P.jsx)(U,{})]})}}}]);
//# sourceMappingURL=146.70919bed.chunk.js.map