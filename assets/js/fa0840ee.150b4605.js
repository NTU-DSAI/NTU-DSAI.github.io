"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[1808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1305:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={id:"sc4022-network-science",slug:"sc4022-network-science",sidebar_position:17,title:"SC4022 Network Science",description:"Learning network properties",keywords:["network","science","ntu","scse","module","course"]},s=void 0,a={unversionedId:"Module-Review/MPEs/sc4022-network-science",id:"Module-Review/MPEs/sc4022-network-science",title:"SC4022 Network Science",description:"Learning network properties",source:"@site/docs/Module-Review/MPEs/SC4022 Network Science.md",sourceDirName:"Module-Review/MPEs",slug:"/Module-Review/MPEs/sc4022-network-science",permalink:"/docs/Module-Review/MPEs/sc4022-network-science",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/MPEs/SC4022 Network Science.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{id:"sc4022-network-science",slug:"sc4022-network-science",sidebar_position:17,title:"SC4022 Network Science",description:"Learning network properties",keywords:["network","science","ntu","scse","module","course"]},sidebar:"tutorialSidebar",previous:{title:"SC4020 Data Analytics and Mining",permalink:"/docs/Module-Review/MPEs/sc4020-data-analytics-and-mining"},next:{title:"SC4024 Data Visualisation",permalink:"/docs/Module-Review/MPEs/sc4024-data-visualisation"}},c={},l=[{value:"Course Summary",id:"course-summary",level:2},{value:"Workload",id:"workload",level:2},{value:"Projects",id:"projects",level:2},{value:"Things to take note of",id:"things-to-take-note-of",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"course-summary"},"Course Summary"),(0,o.kt)("p",null,"This course covers a number of topics in network science and its applications. The specific topics include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Network Metrics, Properties and Models"),(0,o.kt)("li",{parentName:"ol"},"Network Querying and Analytics"),(0,o.kt)("li",{parentName:"ol"},"Network Dynamics and Distributed Graph Engines"),(0,o.kt)("li",{parentName:"ol"},"Graph Mining, Matching, Partitioning and Coarsening")),(0,o.kt)("h2",{id:"workload"},"Workload"),(0,o.kt)("p",null,"Workload is fairly heavy for most of the semester, with two quizzes; this module is both theory and project heavy. However, some tutorial questions will be reused in finals word for word or with some minor adjustments."),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,"There are two projects for this module. The first is mainly generating networks and computing some metrics. Second project is doing literature review of scientific papers on networks, replicating results and providing constructive criticisim."),(0,o.kt)("h2",{id:"things-to-take-note-of"},"Things to take note of"),(0,o.kt)("p",null,"Note that this module very much depends on NetworkX (python package) to generate and manipulate networks. Do spend some time familiarizing with this package before your decision."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This module is excellent for providing a basic understanding of networks."))}d.isMDXComponent=!0}}]);