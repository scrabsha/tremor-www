"use strict";(self.webpackChunknew_tremor_website=self.webpackChunknew_tremor_website||[]).push([[631],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},l),{},{components:t})):r.createElement(m,i({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25072:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"Documentation Changes",id:"docs_changes"},s="RFC policy - Documentation design",u={unversionedId:"process/docs_changes",id:"process/docs_changes",isDocsHomePage:!1,title:"Documentation Changes",description:"Any change to tremor that requires an RFC requires complete documentation to be contributed to cover the changes covered by the RFC and any changes to existing capabilities, features or functions within tremor.",source:"@site/rfc/process/docs_changes.md",sourceDirName:"process",slug:"/process/docs_changes",permalink:"/rfc/process/docs_changes",tags:[],version:"current",frontMatter:{title:"Documentation Changes",id:"docs_changes"},sidebar:"defaultSidebar",previous:{title:"Architecture Changes",permalink:"/rfc/process/arch_changes"},next:{title:"Language Changes",permalink:"/rfc/process/lang_changes"}},l=[{value:"Since",id:"since",children:[]}],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rfc-policy---documentation-design"},"RFC policy - Documentation design"),(0,a.kt)("p",null,"Any change to tremor that requires an RFC requires complete documentation to be contributed to cover the changes covered by the RFC and any changes to existing capabilities, features or functions within tremor."),(0,a.kt)("p",null,"Any change to tremor that changes a public behaviour, configuration or any other expectation that a user of the project interacts with should result in documentation being created, changed or removed consistent with the change itself."),(0,a.kt)("p",null,"All maintainers, in all sub-teams will monitor for documentation and content changes and may request changes to contributions - such as the addition of relevant details for complex changes; or, for additional content to be created where new capabilities or features are being added. For example, a new ",(0,a.kt)("inlineCode",{parentName:"p"},"codec")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"connector")," should include examples of how to correctly configure and use them in a canonical example tremor application."),(0,a.kt)("p",null,"Documentation RFCs, if they are needed, are managed by the documentation sub-team, and tagged ",(0,a.kt)("inlineCode",{parentName:"p"},"docs"),"."),(0,a.kt)("p",null,"All RFCs are monitored by the documentation sub-team who will do an initial triage of new ",(0,a.kt)("inlineCode",{parentName:"p"},"needs-rfc")," PRs within a week of submission. The result of triage be a decision on the documentation needs for the PR or RFC candidate."),(0,a.kt)("p",null,"Generally speaking all user facing functions, interactions or behaviors requires\nboth reference and practical ",(0,a.kt)("inlineCode",{parentName:"p"},"how to get jobs done")," guides and be accompanied\nwith functional tutorials and usage examples."),(0,a.kt)("h2",{id:"since"},"Since"),(0,a.kt)("p",null,"This is a new process document since 2021-Sep-23."))}d.isMDXComponent=!0}}]);