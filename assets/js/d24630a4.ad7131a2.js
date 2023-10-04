"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(a),f=r,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return a?n.createElement(d,o(o({ref:t},s),{},{components:a})):n.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},93232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={id:"WhitespaceData",title:"Interface: WhitespaceData",sidebar_label:"WhitespaceData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},o=void 0,p={unversionedId:"api/interfaces/WhitespaceData",id:"version-3.8/api/interfaces/WhitespaceData",title:"Interface: WhitespaceData",description:"Represents a whitespace data item, which is a data point without a value.",source:"@site/versioned_docs/version-3.8/api/interfaces/WhitespaceData.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/WhitespaceData",permalink:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"WhitespaceData",title:"Interface: WhitespaceData",sidebar_label:"WhitespaceData",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},c={},l=[{value:"Properties",id:"properties",level:2},{value:"time",id:"time",level:3}],s={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Represents a whitespace data item, which is a data point without a value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n    { time: '2018-12-03', value: 27.02 },\n    { time: '2018-12-04' }, // whitespace\n    { time: '2018-12-05' }, // whitespace\n    { time: '2018-12-06' }, // whitespace\n    { time: '2018-12-07' }, // whitespace\n    { time: '2018-12-08', value: 23.92 },\n    { time: '2018-12-13', value: 30.74 },\n];\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"time"},"time"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"time"),": ",(0,r.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},(0,r.kt)("inlineCode",{parentName:"a"},"Time"))),(0,r.kt)("p",null,"The time of the data."))}m.isMDXComponent=!0}}]);