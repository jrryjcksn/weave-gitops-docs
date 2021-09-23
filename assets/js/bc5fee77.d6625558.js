(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[725],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,v=d["".concat(l,".").concat(p)]||d[p]||f[p]||u;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1655:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),i=n(6742),u=n(8084),o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){var t,n,a,l,c=e.tiers;return r.createElement(i.Z,{to:(a=(0,u.default)()["docusaurus-plugin-content-docs"],l=null==a||null==(t=a.default)||null==(n=t.versions)?void 0:n.find((function(e){return"current"===e.name})),((null==l?void 0:l.path)||"/docs")+"/enterprise/intro"),title:"This feature is a available on "+c,style:o},c)}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(9756),i=n(7294),u=n(3727),o=n(2263),a=n(3919),l=n(412),c=(0,i.createContext)({collectLink:function(){}}),s=n(4996),f=n(8780);var d=function(e){var t,n,d=e.isNavLink,p=e.to,v=e.href,m=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,w=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),k=(0,o.Z)().siteConfig,O=k.trailingSlash,C=k.baseUrl,P=(0,s.C)().withBaseUrl,T=(0,i.useContext)(c),j=p||v,E=(0,a.Z)(j),x=null==j?void 0:j.replace("pathname://",""),D=void 0!==x?(n=x,y&&function(e){return e.startsWith("/")}(n)?P(n):n):void 0;D&&E&&(D=(0,f.applyTrailingSlash)(D,{trailingSlash:O,baseUrl:C}));var _,N=(0,i.useRef)(!1),S=d?u.OL:u.rU,Z=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!Z&&E&&null!=D&&window.docusaurus.prefetch(D),function(){Z&&_&&_.disconnect()}}),[D,Z,E]);var L=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,U=!D||!E||L;return D&&E&&!L&&!h&&T.collectLink(D),U?i.createElement("a",Object.assign({href:D},j&&!E&&{target:"_blank",rel:"noopener noreferrer"},w)):i.createElement(S,Object.assign({},w,{onMouseEnter:function(){N.current||null==D||(window.docusaurus.preload(D),N.current=!0)},innerRef:function(e){var t,n;Z&&e&&E&&(t=e,n=function(){null!=D&&window.docusaurus.prefetch(D)},(_=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t),_.disconnect(),n())}))}))).observe(t))},to:D||""},d&&{isActive:g,activeClassName:m}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return u},Z:function(){return o}});var r=n(2263),i=n(3919);function u(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,o=u.forcePrependBaseUrl,a=void 0!==o&&o,l=u.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(a)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(u,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i},useAllPluginInstancesData:function(){return u},usePluginData:function(){return o}});var r=n(2263);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var t=i()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function o(e,t){void 0===t&&(t="default");var n=u(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,u=e.split(/[#?]/)[0],o="/"===u||u===r?u:(i=u,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(u,o)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var u=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(u).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9030:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),i=n(9756),u=(n(7294),n(3905)),o=n(1655),a={title:"Clusters",hide_title:!0},l=void 0,c={unversionedId:"cluster-management/cli/cli-clusters",id:"cluster-management/cli/cli-clusters",isDocsHomePage:!1,title:"Clusters",description:"Clusters",source:"@site/docs/cluster-management/cli/cli-clusters.mdx",sourceDirName:"cluster-management/cli",slug:"/cluster-management/cli/cli-clusters",permalink:"/docs/next/cluster-management/cli/cli-clusters",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/docs/cluster-management/cli/cli-clusters.mdx",version:"current",frontMatter:{title:"Clusters",hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"Deleting a Cluster",permalink:"/docs/next/cluster-management/deleting-a-cluster"},next:{title:"Templates",permalink:"/docs/next/cluster-management/cli/cli-templates"}},s=[{value:'Clusters <TierLabel tiers="enterprise" />',id:"clusters",children:[{value:"Introduction",id:"introduction",children:[]},{value:"Listing clusters",id:"listing-clusters",children:[]}]}],f={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"clusters"},"Clusters ",(0,u.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,u.kt)("h3",{id:"introduction"},"Introduction"),(0,u.kt)("p",null,"The MCCP CLI allows listing of clusters that have been created using\n",(0,u.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," resources in the terminal."),(0,u.kt)("h3",{id:"listing-clusters"},"Listing clusters"),(0,u.kt)("p",null,"To get a list of ",(0,u.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," clusters run:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"mccp clusters list\n")),(0,u.kt)("p",null,"This command returns a list of all clusters that have been created using\n",(0,u.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," resources previously."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"NAME    STATUS\ndev     pullRequestCreated\n")))}d.isMDXComponent=!0}}]);