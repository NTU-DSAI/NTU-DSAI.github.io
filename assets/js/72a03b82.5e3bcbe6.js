"use strict";(self.webpackChunkntu_dsai_github_io=self.webpackChunkntu_dsai_github_io||[]).push([[9351],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return o?a.createElement(y,i(i({ref:t},u),{},{components:o})):a.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6535:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=o(7462),r=(o(7294),o(3905));const n={id:"sc2207-intro-to-database-systems",slug:"sc2207-intro-to-database-systems",sidebar_position:5,title:"SC2207 Intro to Database Systems",description:"Introductory module to relational databases",keywords:["database","computer","science","ntu","course","scse","module"]},i=void 0,s={unversionedId:"Module-Review/Y2S2/sc2207-intro-to-database-systems",id:"Module-Review/Y2S2/sc2207-intro-to-database-systems",title:"SC2207 Intro to Database Systems",description:"Introductory module to relational databases",source:"@site/docs/Module-Review/Y2S2/SC2207 Intro to Database Systems.md",sourceDirName:"Module-Review/Y2S2",slug:"/Module-Review/Y2S2/sc2207-intro-to-database-systems",permalink:"/docs/Module-Review/Y2S2/sc2207-intro-to-database-systems",draft:!1,editUrl:"https://github.com/NTU-DSAI/NTU-DSAI.github.io/tree/master/docs/Module-Review/Y2S2/SC2207 Intro to Database Systems.md",tags:[],version:"current",lastUpdatedBy:"Bhargav Singapuri",lastUpdatedAt:1690249475,formattedLastUpdatedAt:"Jul 25, 2023",sidebarPosition:5,frontMatter:{id:"sc2207-intro-to-database-systems",slug:"sc2207-intro-to-database-systems",sidebar_position:5,title:"SC2207 Intro to Database Systems",description:"Introductory module to relational databases",keywords:["database","computer","science","ntu","course","scse","module"]},sidebar:"tutorialSidebar",previous:{title:"MH3511 Data Analysis with computer",permalink:"/docs/Module-Review/Y2S2/mh3511-data-analysis-with-computer"},next:{title:"SC3000 Artificial Intelligence",permalink:"/docs/Module-Review/Y2S2/sc3000-artificial-intelligence"}},l={},c=[{value:"Course Summary",id:"course-summary",level:2},{value:"Workload",id:"workload",level:2},{value:"Projects",id:"projects",level:2},{value:"Things to take note of",id:"things-to-take-note-of",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"course-summary"},"Course Summary"),(0,r.kt)("p",null,"Introduction course to Database Management Systems (DBMS). Previous course code: CZ2007. Course can be broken down into two parts:"),(0,r.kt)("p",null,"First half:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Entity Relationship (ER Diagrams)"),(0,r.kt)("li",{parentName:"ol"},"Functional Dependencies"),(0,r.kt)("li",{parentName:"ol"},"Normalization (BCNF, 3NF)"),(0,r.kt)("li",{parentName:"ol"},"Relational Algebra")),(0,r.kt)("p",null,"Second half:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SQL (Covers basic SQL operations such as SELECT, WHERE, JOIN, ORDER BY, EXIST, table creation/deletion/update, constraints, views/temporary views and indexes)"),(0,r.kt)("li",{parentName:"ol"},"Semi-Structured Data (XML, XML DTD, JSON, NoSQL)")),(0,r.kt)("h2",{id:"workload"},"Workload"),(0,r.kt)("p",null,"Workload is reasonable for a 3AU module. Weekly: 2 online Q&A (1hour), 1 tutorial (1hour). Labs are held once every 2 weeks (2hour). Content is reasonably easy to understand and there are lots of online resources with information on the topics covered. There is no finals but replaced by 2x30% tests (Week 8, Week 12) testing their respective halves."),(0,r.kt)("h2",{id:"projects"},"Projects"),(0,r.kt)("p",null,"Lab project with 3 deliverables (In groups of 4/5 people):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"ER Diagram (Do not overthink the ER diagram!)"),(0,r.kt)("li",{parentName:"ol"},"Generation of Normalized Database Schema"),(0,r.kt)("li",{parentName:"ol"},"Implementation of SQL queries for a Final demonstration")),(0,r.kt)("h2",{id:"things-to-take-note-of"},"Things to take note of"),(0,r.kt)("p",null,"Being involved in the group project is a good way to practice the understanding of the concepts of ER Diagrams, FDs and Relational Algebra. For the SQL portion, I would recommend going to Leetcode to practice on top of the tutorial questions as they help you to develop a better understanding of the SQL syntax."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Foundational Database Module and a good chance to practice SQL which are tested in Data Science interviews for some companies. Overall, one of the easier computing modules."))}p.isMDXComponent=!0}}]);