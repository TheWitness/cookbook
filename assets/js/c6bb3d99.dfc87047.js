"use strict";(self.webpackChunktadoom=self.webpackChunktadoom||[]).push([[945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const a={title:"Make AuthnRequest",sidebar_position:1},i=void 0,o={unversionedId:"make-message/authn-request",id:"make-message/authn-request",title:"Make AuthnRequest",description:"The initial SAML Message in workflow is an AuthnRequest.",source:"@site/docs/make-message/authn-request.md",sourceDirName:"make-message",slug:"/make-message/authn-request",permalink:"/docs/make-message/authn-request",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Make AuthnRequest",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Make Message",permalink:"/docs/make-message/"},next:{title:"Make Response",permalink:"/docs/make-message/response"}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The initial SAML Message in workflow is an AuthnRequest.",(0,s.kt)("br",{parentName:"p"}),"\n","Service Provider send this message to an Identity Provider in order to initiate authentication.  "),(0,s.kt)("p",null,"In this message, the Service Provider declare :"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"a unique id for the message"),(0,s.kt)("li",{parentName:"ul"},"this entity ID as Issuer"),(0,s.kt)("li",{parentName:"ul"},"the issue instant of the message"),(0,s.kt)("li",{parentName:"ul"},"the destination"),(0,s.kt)("li",{parentName:"ul"},"the protocol in use")),(0,s.kt)("p",null,"This is how you can generate this message :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n$authnRequest = new \\LightSaml\\Model\\Protocol\\AuthnRequest();\n$authnRequest\n    ->setAssertionConsumerServiceURL('https://my.site/acs')\n    ->setProtocolBinding(\\LightSaml\\SamlConstants::BINDING_SAML2_HTTP_POST)\n    ->setID(\\LightSaml\\Helper::generateID())\n    ->setIssueInstant(new \\DateTime())\n    ->setDestination('https://idp.com/login')\n    ->setIssuer(new \\LightSaml\\Model\\Assertion\\Issuer('https://my.site'))\n;\n")),(0,s.kt)("p",null,"The serialisation of this message produce that similar XML :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},'<samlp:AuthnRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol" xmlns:saml="urn:oasis:names:tc:SAML:2.0:assertion"\n    ID="_8dcc6985f6d9f385f0bbd4562ef848ef3ae78d87d7"\n    Version="2.0"\n    IssueInstant="2022-05-31T22:36:20Z"\n    Destination="https://idp.com/login"\n    AssertionConsumerServiceURL="https://my.site/acs"\n    ProtocolBinding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST"\n>\n    <saml:Issuer>https://my.site</saml:Issuer>\n</samlp:AuthnRequest>\n')))}p.isMDXComponent=!0}}]);