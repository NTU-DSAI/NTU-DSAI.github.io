"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[3776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=i,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),i=r(6010),a=r(2802),o=r(9960),s=r(3919),c=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:a,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},r," ",a),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",d),title:o},o))}function f(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:r}=e;const i=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:i,title:r.label,description:null==o?void 0:o.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,a.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{key:t,item:e})))))}},1538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905)),a=r(2991),o=r(2802);const s={id:"user-guides",title:"User Guides",description:"General overview of User Guides",keywords:["user","guide","ntu","course","registration","software"]},c=void 0,l={unversionedId:"User-Guides/user-guides",id:"User-Guides/user-guides",title:"User Guides",description:"General overview of User Guides",source:"@site/docs/User-Guides/index.md",sourceDirName:"User-Guides",slug:"/User-Guides/",permalink:"/docs/User-Guides/",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/User-Guides/index.md",tags:[],version:"current",frontMatter:{id:"user-guides",title:"User Guides",description:"General overview of User Guides",keywords:["user","guide","ntu","course","registration","software"]},sidebar:"tutorialSidebar",previous:{title:"Industry Final Year Project",permalink:"/docs/Programmes/isfyp"},next:{title:"STARS",permalink:"/docs/User-Guides/stars"}},u={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section aims to help future students understand how to use key NTU infrastructure and apps to reduce friction as a freshman."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"NTU has a variety of systems and we will attempt to cover the important ones. If there is something that we have missed out and you feel that it should be here, do contribute at the repository ",(0,i.kt)("a",{parentName:"p",href:"http://www.github.com/NTU-DSAI/NTU-DSAI.github.io"},"here"),"."))),(0,i.kt)(a.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);