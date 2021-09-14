"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[1321],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2661:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"About Us",description:"More information about Tremor, where and how it works.",hide_table_of_contents:!1},s={type:"mdx",permalink:"/tremor-new-website/getting-started/about",source:"@site/src/pages/getting-started/about.md"},u=[{value:"About Us",id:"about-us",children:[]}],p={toc:u};function l(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-us"},"About Us"),(0,a.kt)("p",null,"Tremor is an early-stage event processing system for unstructured data, with rich support for structural pattern matching, filtering and transformation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tremor Stats",src:r(3452).Z})),(0,a.kt)("p",null,"Tremor is particularly well suited for log and metrics shipping, resulting in 10x fewer machines, 10x fewer CPUs and 10x less memory footprint than alternatives such as Logstash."),(0,a.kt)("p",null,"For data distribution at scale, Tremor introduces proactive rate limiting and back-pressure handling. These facilities mean that when systems go over capacity (eg: during peak e-commerce trading environments, such as cyber-5)- where we may already be running with scaled up infrastructure- the upstream or downstream resource saturation has no negative impact on our production operations."),(0,a.kt)("p",null,"Tremor replaces Logstash, Telegraf, and other data distribution tools at ",(0,a.kt)("a",{parentName:"p",href:"https://www.wayfair.com/"},"Wayfair"),", with a single high-performance tool that is not hard to configure and use."))}l.isMDXComponent=!0},3452:function(e,t,r){t.Z=r.p+"assets/images/stats-80f06cc6dcbebcdda88dbc29ac701b66.png"}}]);