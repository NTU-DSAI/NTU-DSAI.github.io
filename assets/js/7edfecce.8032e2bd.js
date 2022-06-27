"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[9406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=o,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),o=r(6010),i=r(2802),a=r(9960),s=r(3919),c=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",d="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function p(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",d),title:a},a))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:r}=e;const o=(0,s.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,o.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,i.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{key:t,item:e})))))}},3927:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),i=r(2991),a=r(2802);const s={id:"faqs",title:"Frequently Asked Questions",description:"A bunch of frequently asked questions about DSAI",keywords:["faq","frequent","asked","questions","dsai","help","answers"]},c=void 0,l={unversionedId:"FAQs/faqs",id:"FAQs/faqs",title:"Frequently Asked Questions",description:"A bunch of frequently asked questions about DSAI",source:"@site/docs/FAQs/index.md",sourceDirName:"FAQs",slug:"/FAQs/",permalink:"/docs/FAQs/",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/FAQs/index.md",tags:[],version:"current",frontMatter:{id:"faqs",title:"Frequently Asked Questions",description:"A bunch of frequently asked questions about DSAI",keywords:["faq","frequent","asked","questions","dsai","help","answers"]},sidebar:"tutorialSidebar",previous:{title:"Work Study Scheme",permalink:"/docs/User-Guides/wss"},next:{title:"Why DSAI?",permalink:"/docs/FAQs/About-DSAI/why-dsai"}},u={},d=[],f={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section aims to help answer some of the most burning questions that incoming freshmen have about DSAI. If there is still a question that you feel has not been sufficiently answered, do feel free to edit the answer on the repo. Additionally, if you do not find your question answered here, you can submit your question ",(0,o.kt)("a",{parentName:"p",href:"http://bit.ly/DSAIAskAnything"},"here")," and you can view the full catalog of answers ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1N4Ioqq3Ap54_-7CUbWXdmuyEvFwXlo3_URwCOyBuvJQ/edit?usp=sharing"},"here"),"."),(0,o.kt)(i.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);