(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[4251],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,s(s({ref:t},p),{},{components:r})):a.createElement(g,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var a=r(7294),n=r(9443);var o=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,u=e.values,d=e.groupId,m=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,k=(0,a.useState)(n),v=k[0],b=k[1],y=a.Children.toArray(e.children),w=[];if(null!=d){var N=h[d];null!=N&&N!==v&&u.some((function(e){return e.value===N}))&&b(N)}var C=function(e){var t=e.currentTarget,r=w.indexOf(t),a=u[r].value;b(a),null!=d&&(f(d,a),setTimeout((function(){var e,r,a,n,o,s,i,c;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,r>=0&&o<=c&&n<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,r;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;r=w[a]||w[0];break;case c:var n=w.indexOf(e.target)-1;r=w[n]||w[w.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},u.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:C,onClick:C},r)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,r){"use strict";var a=(0,r(7294).createContext)(void 0);t.Z=a},4025:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=r(2122),n=r(9756),o=(r(7294),r(3905)),s=r(5064),i=r(8215),l={title:"Upgrading",sidebar_position:0},c=void 0,p={unversionedId:"enterprise/upgrading",id:"version-0.3.0/enterprise/upgrading",isDocsHomePage:!1,title:"Upgrading",description:"How to: Upgrade to Weave Gitops Enterprise",source:"@site/versioned_docs/version-0.3.0/enterprise/upgrading.mdx",sourceDirName:"enterprise",slug:"/enterprise/upgrading",permalink:"/docs/enterprise/upgrading",editUrl:"https://github.com/weaveworks/weave-gitops-docs/edit/main/versioned_docs/version-0.3.0/enterprise/upgrading.mdx",version:"0.3.0",sidebarPosition:0,frontMatter:{title:"Upgrading",sidebar_position:0},sidebar:"version-0.3.0/tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/enterprise/intro"}},u=[{value:"How to: Upgrade to Weave Gitops Enterprise",id:"how-to-upgrade-to-weave-gitops-enterprise",children:[{value:"2. Choosing a database",id:"2-choosing-a-database",children:[]},{value:"3. Creating a secret for docker repository",id:"3-creating-a-secret-for-docker-repository",children:[]},{value:"4. Create a secret for creating pull requests on your git provider",id:"4-create-a-secret-for-creating-pull-requests-on-your-git-provider",children:[]},{value:"5. Determining the public IP address of the worker nodes",id:"5-determining-the-public-ip-address-of-the-worker-nodes",children:[]},{value:"6. Installing the Helm chart",id:"6-installing-the-helm-chart",children:[]},{value:"7. Checking that WGE is installed (optional)",id:"7-checking-that-wge-is-installed-optional",children:[]}]},{value:"How to: Install the MCCP CLI",id:"how-to-install-the-mccp-cli",children:[]}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-upgrade-to-weave-gitops-enterprise"},"How to: Upgrade to Weave Gitops Enterprise"),(0,o.kt)("p",null,"Upgrading requires we:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Already have Weave GitOps ",(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started"},"installed on the cluster")),(0,o.kt)("li",{parentName:"ol"},"Choose a database"),(0,o.kt)("li",{parentName:"ol"},"Create a secret for docker repository"),(0,o.kt)("li",{parentName:"ol"},"Create a secret for creating pull requests on your git provider"),(0,o.kt)("li",{parentName:"ol"},"Determine the public IP address of the worker nodes"),(0,o.kt)("li",{parentName:"ol"},"Install the helm chart"),(0,o.kt)("li",{parentName:"ol"},"Check that Weave Gitops Enterprise has been installed (optional)")),(0,o.kt)("h3",{id:"2-choosing-a-database"},"2. Choosing a database"),(0,o.kt)("p",null,"WGE stores incoming data from the connected clusters to a relational database. It supports ",(0,o.kt)("strong",{parentName:"p"},"SQLite")," and ",(0,o.kt)("strong",{parentName:"p"},"PostgreSQL"),"."),(0,o.kt)(s.Z,{groupId:"database-systems",values:[{label:"SQLite on a persistent volume",value:"sqlite-persistent-volume"},{label:"PostgreSQL",value:"postgres"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sqlite-persistent-volume",mdxType:"TabItem"},(0,o.kt)("p",null,"If your cluster supports persistent volume storage and has a storage class defined, you can use it to request a persistent volume for the SQLite database file. The exact details of the persistent volume request vary by cluster type and the supported volume types. The following manifest is an example of a configuration of a ",(0,o.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: wge-volume\n  namespace: wego-system\nspec:\n  storageClassName: default\n  resources:\n    requests:\n      storage: 100G\n  volumeMode: Filesystem\n  accessModes:\n    - ReadWriteOnce\n"))),(0,o.kt)(i.Z,{value:"postgres",mdxType:"TabItem"},(0,o.kt)("p",null,"Using a PostgreSQL database does not require any additional setup on the cluster side. The following details are however needed in order to connect:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Database server hostname"),(0,o.kt)("li",{parentName:"ul"},"Database name"),(0,o.kt)("li",{parentName:"ul"},"Database user - The database user requires admin privileges on the database server as it will automatically create the necessary schema."),(0,o.kt)("li",{parentName:"ul"},"Database password")),(0,o.kt)("p",null,"The database credentials (user and password) need to be provided separately, before\ninstalling the chart, as a secret. Run the following command to create a secret:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret generic wge-db-credentials \\\n    --namespace wego-system \\\n    --from-literal=username=<database-user> \\\n    --from-literal=password=<database-password>\n")))),(0,o.kt)("h3",{id:"3-creating-a-secret-for-docker-repository"},"3. Creating a secret for docker repository"),(0,o.kt)("p",null,"Create a secret that contains your docker repository credentials. This secret will be used by Kubernetes during deployment in order to pull down the WGE images. You can find instructions on how to generate this secret ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl create secret docker-registry \\\n  --namespace wego-system docker-io-pull-secret \\\n  --docker-username=<your-docker-username> \\\n  --docker-password=<your-docker-password>\n")),(0,o.kt)("p",null,"If you use a secrets management solution such as Sealed Secrets follow their instructions on how to create a new secret."),(0,o.kt)("p",null,"Take note of the secret name as you will need to supply it later when installing the chart."),(0,o.kt)("h3",{id:"4-create-a-secret-for-creating-pull-requests-on-your-git-provider"},"4. Create a secret for creating pull requests on your git provider"),(0,o.kt)("p",null,"A Personal Access Token is required for the WGE to create pull requests for new clusters. These tokens need certain permissions (scopes) set. For"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub: ",(0,o.kt)("inlineCode",{parentName:"li"},"repo")),(0,o.kt)("li",{parentName:"ul"},"GitLab: ",(0,o.kt)("inlineCode",{parentName:"li"},"api"))),(0,o.kt)("p",null,"Save the token in secret called ",(0,o.kt)("inlineCode",{parentName:"p"},"git-provider-credentials"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic git-provider-credentials \\\n  --namespace=wego-system\n  --from-literal="GIT_PROVIDER_TOKEN=$GITHUB_TOKEN"\n')),(0,o.kt)("h3",{id:"5-determining-the-public-ip-address-of-the-worker-nodes"},"5. Determining the public IP address of the worker nodes"),(0,o.kt)("p",null,"You need to determine the public IP address of the worker nodes of your cluster. This IP address is necessary in order to establish connectivity between agents and your WGE instance. The way to determine this depends on your cluster type and provisioning method. Take note of that IP address as you will need to supply it later when installing the chart."),(0,o.kt)(s.Z,{groupId:"agent-ingress",values:[{label:"kind clusters",value:"kind-clusters"},{label:"Other cloud providers",value:"other-clusters"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"kind-clusters",mdxType:"TabItem"},(0,o.kt)("p",null,"Get the local IP for kind:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export INGRESS_ADDRESS=$(ipconfig getifaddr en0)\n"))),(0,o.kt)(i.Z,{value:"other-clusters",mdxType:"TabItem"},(0,o.kt)("p",null,"For other cluster providers you'll have to configure the ingress around what they provide."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export INGRESS_ADDRESS=wge.example.com\n")))),(0,o.kt)("h3",{id:"6-installing-the-helm-chart"},"6. Installing the Helm chart"),(0,o.kt)("p",null,"Before installing the chart, you need to add the Helm chart repository and then update its local cache. Run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm repo add wkpv3 https://s3.us-east-1.amazonaws.com/weaveworks-wkp/charts-v3\n  "wkpv3" has been added to your repositories\n$ helm repo update\n  Hang tight while we grab the latest from your chart repositories...\n  ...Successfully got an update from the "wkpv3" chart repository\n  Update Complete. \u2388Happy Helming!\u2388\n')),(0,o.kt)("p",null,"Finally install the Helm chart to the target namespace by executing the following command using the Helm CLI (>= ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.5.4"),")."),(0,o.kt)(s.Z,{groupId:"database-systems",values:[{label:"SQLite on a persistent volume",value:"sqlite-persistent-volume"},{label:"PostgreSQL",value:"postgres"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"sqlite-persistent-volume",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install mccp wkpv3/mccp \\\n    --version <chart-version> \\\n    --namespace wego-system \\\n    --set "imagePullSecrets[0].name=<secret-containing-docker-config>" \\\n    --set "dbConfig.databaseType=sqlite" \\\n    --set "sqliteConfig.persistentVolumeClaim=true" \\\n    --set "agentTemplate.natsURL=$INGRESS_ADDRESS:<exposed-port-for-nats>" \\\n    --set "nats.client.service.nodePort=<exposed-port-for-nats>" \\\n    --set "wkp-ui.image.pullSecrets[0]=<secret-containing-docker-config>" \\\n    --set "config.capi.repositoryURL=https://github.com/example/management-repo" \\\n    --set "config.capi.baseBranch=main"\n'))),(0,o.kt)(i.Z,{value:"postgres",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install mccp wkpv3/mccp \\\n    --version <chart-version> \\\n    --namespace wego-system \\\n    --set "imagePullSecrets[0].name=<secret-containing-docker-config>" \\\n    --set "dbConfig.databaseType=postgres" \\\n    --set "dbConfig.databaseURI=<database-server-hostname>" \\\n    --set "postgresConfig.databaseName=<database-name>" \\\n    --set "agentTemplate.natsURL=$INGRESS_ADDRESS:<exposed-port-for-nats>" \\\n    --set "nats.client.service.nodePort=<exposed-port-for-nats>" \\\n    --set "wkp-ui.image.pullSecrets[0]=<secret-containing-docker-config>" \\\n    --set "config.capi.repositoryURL=https://github.com/example/management-repo" \\\n    --set "config.capi.baseBranch=main"\n')),(0,o.kt)("p",null,"By default, connections to PostgreSQL will use port 5432."))),(0,o.kt)("h3",{id:"7-checking-that-wge-is-installed-optional"},"7. Checking that WGE is installed (optional)"),(0,o.kt)("p",null,"You should now be able to load the WGE UI by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl port-forward --namespace wego-system deployments.apps/mccp-nginx-ingress-controller 8000:80\n")),(0,o.kt)("p",null,"The WGE UI should now be accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."),(0,o.kt)("h2",{id:"how-to-install-the-mccp-cli"},"How to: Install the MCCP CLI"),(0,o.kt)("p",null,"The MCCP CLI allows you to interact with Weave GitOps Enterprise management clusters. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"mccp")," to manage the lifecycle of your infrastructure declaratively using GitOps. The latest version of the MCCP CLI is available in the following links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://weaveworks-wkp.s3.amazonaws.com/mccp-master-linux-amd64"},"Linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://weaveworks-wkp.s3.amazonaws.com/mccp-master-darwin-amd64"},"macOS"))))}m.isMDXComponent=!0},6010:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);