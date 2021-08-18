(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[2993],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return n?o.createElement(d,r(r({ref:t},u),{},{components:n})):o.createElement(d,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8104:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(2122),i=n(9756),a=(n(7294),n(3905)),r={sidebar_position:9},p="GitOps Automation Configuration",s={unversionedId:"gitops-automation",id:"version-0.2.1/gitops-automation",isDocsHomePage:!1,title:"GitOps Automation Configuration",description:'Weave GitOps has a key concept which is the "GitOps Automation".',source:"@site/versioned_docs/version-0.2.1/gitops-automation.md",sourceDirName:".",slug:"/gitops-automation",permalink:"/docs/0.2.1/gitops-automation",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.2.1/gitops-automation.md",version:"0.2.1",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"version-0.2.1/tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/0.2.1/troubleshooting"}},l=[{value:"What is the GitOps Automation Configuration?",id:"what-is-the-gitops-automation-configuration",children:[]},{value:"Where does it live?",id:"where-does-it-live",children:[]},{value:"What files are there",id:"what-files-are-there",children:[{value:"<code>app.yaml</code>",id:"appyaml",children:[]},{value:"<code>app-gitops-runtime.yaml</code>",id:"app-gitops-runtimeyaml",children:[]}]}],u={toc:l};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitops-automation-configuration"},"GitOps Automation Configuration"),(0,a.kt)("p",null,'Weave GitOps has a key concept which is the "GitOps Automation".\nThis is the configuration that defines the flow that happens when an update happens in Git. This flow ',(0,a.kt)("em",{parentName:"p"},"reconciles")," the workload into the target."),(0,a.kt)("h2",{id:"what-is-the-gitops-automation-configuration"},"What is the GitOps Automation Configuration?"),(0,a.kt)("p",null,"The GitOps Automation configuration consists of two types of configuration: ",(0,a.kt)("inlineCode",{parentName:"p"},"apps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"targets"),".\nFundamentally, GitOps is connecting ",(0,a.kt)("inlineCode",{parentName:"p"},"apps")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"targets")," by automatically deploying the app into the target."),(0,a.kt)("h2",{id:"where-does-it-live"},"Where does it live?"),(0,a.kt)("p",null,"Weave GitOps supports three places to store this configuration:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the same repository as your workload definition (e.g. in the same repository containing your k8s YAMLs)"),(0,a.kt)("li",{parentName:"ol"},"In a separate repository that can cover different applications."),(0,a.kt)("li",{parentName:"ol"},"Only configured into the cluster (not stored)")),(0,a.kt)("p",null,"The default behaviour is #1, which is to store the GitOps Automation configuration in the same repository as your workload YAMLs are stored.\nThis is the best option for a team that manages their own app and infrastructure and wants a simple, easy deployment of Weave GitOps."),(0,a.kt)("p",null,"Option 2 is designed for scenarios where there are multiple applications managed by a single team (maybe a platform ops team or a team that owns more than one app)."),(0,a.kt)("p",null,"Option 3 is a basic approach that is useful if you are just learning about GitOps and don't want to be able to change the automation flow."),(0,a.kt)("h2",{id:"what-files-are-there"},"What files are there"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".wego")," folder contains the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 apps\n\u2502\xa0\xa0 \u2514\u2500\u2500 appname\n\u2502\xa0\xa0     \u2514\u2500\u2500 app.yaml\n\u2514\u2500\u2500 targets\n    \u2514\u2500\u2500 clustername\n        \u2514\u2500\u2500 appname\n            \u2514\u2500\u2500 appname-gitops-runtime.yaml\n")),(0,a.kt)("h3",{id:"appyaml"},(0,a.kt)("inlineCode",{parentName:"h3"},"app.yaml")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"app.yaml")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: wego.weave.works/v1alpha1\nkind: Application\nmetadata:\n  name: nginx\nspec:\n  path: ./\n  url: ssh://git@github.com/org/nginx.git\n")),(0,a.kt)("p",null,"It defines the name of the application and the git url location of the repository."),(0,a.kt)("h3",{id:"app-gitops-runtimeyaml"},(0,a.kt)("inlineCode",{parentName:"h3"},"app-gitops-runtime.yaml")),(0,a.kt)("p",null,"This file defines the flux runtime flow to deploy the application into a specific target.\nFor example, by default this uses the ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/kustomize/kustomization/"},"flux kustomize")," support\nto deploy your application manifests into the cluster. Other options include managing helm charts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: kustomize.toolkit.fluxcd.io/v1beta1\nkind: Kustomization\nmetadata:\n  name: nginx-fork-dot\n  namespace: wego-system\nspec:\n  interval: 5m0s\n  path: ./\n  prune: true\n  sourceRef:\n    kind: GitRepository\n    name: nginx-fork\n  validation: client\n")))}c.isMDXComponent=!0}}]);