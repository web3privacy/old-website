"use strict";(self.webpackChunkdb_website=self.webpackChunkdb_website||[]).push([[9953],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,b=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(1163),a=(r(9496),r(9613));const o={},i="RPC",c={unversionedId:"db/rpc",id:"db/rpc",title:"RPC",description:"alt text",source:"@site/docs/db/rpc.md",sourceDirName:"db",slug:"/db/rpc",permalink:"/web3privacy-website/docs/db/rpc",draft:!1,editUrl:"https://github.com/r1oga/web3privacy-website/tree/main/shared/docs/db/rpc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"R&D",permalink:"/web3privacy-website/docs/db/research-and-development"},next:{title:"Storage",permalink:"/web3privacy-website/docs/db/storage"}},p={},l=[],s={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rpc"},"RPC"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/Msiusko/web3privacy/blob/main/static-assets/RPC.png?raw=true",alt:"alt text"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.1rpc.io"},"1RPC")," - The Web3 Private RPC\nRelay (",(0,a.kt)("a",{parentName:"li",href:"https://docs.ata.network/1rpc/introduction/"},"Docs"),") + (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/automata-network/repositories"},"GitHub"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://securerpc.com"},"Secure RPC")," - SecureRpc is a bare-metal, fully conformant JSON-RPC/gRPC Infrastructure plane\nthat aims to perform well."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://derp.hoprnet.org/"},"DERP")," is an RPC endpoint you can add to your wallet to visualize data leaked by your\nwallet in communication with the blockchain (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/hoprnet/derp"},"GitHub"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rpch.net/"},"RPCh")," is a privacy-preserving RPC service for wallets that detaches the user\u2019s identity from all\ncommunication with the blockchain (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Rpc-h/RPCh"},"GitHub"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.ethportal.net/"},"Ethereum Portal Network")," - Decentralized P2P overlay network on top of Ethereum devp2p\nfor serving RPC requests ",(0,a.kt)("img",{src:"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",width:"20"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/EdenBlockVC/spook"},"Spook")," - Mixing service using the Nym network to anonymize Ethereum RPC\ncalls ",(0,a.kt)("img",{src:"https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",width:"20"}))))}m.isMDXComponent=!0}}]);