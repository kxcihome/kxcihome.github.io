if(!self.define){let e,i={};const s=(s,d)=>(s=new URL(s+".js",d).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(d,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const n=e=>s(e,r),t={module:{uri:r},exports:c,require:n};i[r]=Promise.all(d.map((e=>t[e]||n(e)))).then((e=>(o(...e),c)))}}define(["./workbox-89c8588f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_expo/static/css/styles-81309962800b16c45f3d886d3db08087.css",revision:"81309962800b16c45f3d886d3db08087"},{url:"_expo/static/js/web/entry-bb7b21f22bc4941e3140d59cf4fcaaa8.js",revision:"345bac6a5d7f9125ca707ffdde2b3d77"},{url:"favicon.ico",revision:"1ddbb06d0810e67fad10c086faf350cf"},{url:"index.html",revision:"773e454a848f1178daec360d3aa796c5"},{url:"logo192.png",revision:"304fa79904ee8635325195853c049fa1"},{url:"logo512.png",revision:"40dbca13d93a9f841e8d1b26656ddd5d"},{url:"manifest.json",revision:"43dd00e80bc93882e5821257099efbb4"},{url:"metadata.json",revision:"37cb2e8fcdd3b2523b9bd2f4b09087db"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
