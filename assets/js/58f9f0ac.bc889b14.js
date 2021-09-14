"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[9106],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9192:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l={unversionedId:"Workshop/examples/kafka_gd/README",id:"Workshop/examples/kafka_gd/README",isDocsHomePage:!1,title:"Kafka delivery guarantees",description:"This example goes into how tremors delivery guarantees work in combination with a sink and source that also support delivery guarantees.",source:"@site/docs/Workshop/examples/23_kafka_gd/README.md",sourceDirName:"Workshop/examples/23_kafka_gd",slug:"/Workshop/examples/kafka_gd/README",permalink:"/tremor-new-website/docs/Workshop/examples/kafka_gd/README",editUrl:"https://github.com/tremor-rs/tremor-new-website/tree/main/docs/Workshop/examples/23_kafka_gd/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Round Robin",permalink:"/tremor-new-website/docs/Workshop/examples/roundrobin/README"},next:{title:"HTTP Server",permalink:"/tremor-new-website/docs/Workshop/examples/servers_lt_http/README"}},c=[],p={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example goes into how tremors delivery guarantees work in combination with a sink and source that also support delivery guarantees."),(0,a.kt)("p",null,"The scenario isn't all-encompassing but looks at the following specific use-case:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A tremor source that does not hold guarantees."),(0,a.kt)("li",{parentName:"ol"},"A WAL to persist data from the source"),(0,a.kt)("li",{parentName:"ol"},"A Kafka instance were data is send to"),(0,a.kt)("li",{parentName:"ol"},"A secondary tremor instance with a Kafka source that reads the data and prints it to stdout")),(0,a.kt)("p",null,"With this we can demonstrate the recovery and delivery guarantees using a WAL Kafka."),(0,a.kt)("p",null,"We can start the example using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". Then with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," we find the Kafka instance and can introduce an artificial error using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pause <container>"),". We will see the messages stopping if we wait for a while we can reenable kafka with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker unpause <container>")," and will see the message flow resuming with a number of duplicated but no lost messages."))}u.isMDXComponent=!0}}]);