if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,f)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=f(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ukm-commerce"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/10.91b4027f.css",revision:"3eadf6bdf45fd1db23098e65e5f98286"},{url:"/css/11.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/12.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/13.50b403b4.css",revision:"8a3df6aa2b4a7338736ead57710f47e5"},{url:"/css/14.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/15.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/16.cab062ce.css",revision:"cfffda8728c9ee0f74ce0149b07639f1"},{url:"/css/17.dcf2621b.css",revision:"f1eaf2c22ddb267a8ba0359609643510"},{url:"/css/app.e901fd82.css",revision:"14743754e344380895942718f5a61f79"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/chunk-common.a4b6411e.css",revision:"8c002f747e9a336b413ee32f1dce018e"},{url:"/css/vendor.5b3889ce.css",revision:"471f52035eb8196f29ab2e3c59502eeb"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"/icon/favicon.svg",revision:"584945dd9d35c0711cdb67fd7b37b0f2"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"f6ee06cb8861f6dfc29953cb04e2251a"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/icon/logo.png",revision:"5b512e9d308c35aba390200591b0311e"},{url:"/img/bg.5be66d14.jpg",revision:"ca41d241312d6b3eef683795117c7760"},{url:"/index.php",revision:"52d231bd1e79b2411abb61a6bca3c102"},{url:"/js/10.2cd30d05.js",revision:"d91e6739c10a989672fa5887d8a3a8d2"},{url:"/js/11.d2b3704b.js",revision:"1ee40c6208de6e4a2b4cde5af6b14fe4"},{url:"/js/12.cf3da9b3.js",revision:"1cb2601e04e145890d228867d8bb87ce"},{url:"/js/13.393cf858.js",revision:"d50c0326a7019340dcab6b0444c67bb5"},{url:"/js/14.881f5f2f.js",revision:"24016fffacb3e4254329491e171e61e3"},{url:"/js/15.7ba69f7a.js",revision:"117871640c00f940172fb06f31bff82d"},{url:"/js/16.5c06e5d5.js",revision:"1f764929f154a712f5c3d179b06858d2"},{url:"/js/17.ef19c386.js",revision:"cd8fdfe6598c02e3bc673f62959f2d51"},{url:"/js/18.3fe271da.js",revision:"a5fd9965f2dc28c9780ea8446a9e0e6c"},{url:"/js/19.91f8543f.js",revision:"9b33234f697bb1a43d89b1ca739e3bfa"},{url:"/js/2.457addee.js",revision:"7a2f856c66f5ce3b7f579686da8b57a0"},{url:"/js/20.ee41cb7a.js",revision:"2f904b0c82036d183b6ea51f190af5b2"},{url:"/js/21.ee243ac1.js",revision:"34a6a063881d1b6c7cfbfc5b18822d45"},{url:"/js/22.87d9c747.js",revision:"55d725883ddfe775839ea2a17d72ea40"},{url:"/js/23.6068015e.js",revision:"a2c5cb7c012a3c46a0d1f30ad2768291"},{url:"/js/24.dd9822a1.js",revision:"bc04ce1373617d0b3888dc0875ae101f"},{url:"/js/25.2de6370c.js",revision:"bbea9d6842b240b25beb4f0c3cce86f2"},{url:"/js/26.893a5cac.js",revision:"2e06efb04e3ac8057b648a34ba8bd05d"},{url:"/js/27.21482330.js",revision:"8813bd381904565f6311e31ff377d524"},{url:"/js/28.a4f93df0.js",revision:"361a581669ee78f8ba06bbe73215943c"},{url:"/js/29.13690848.js",revision:"f1d389aa2c8f5aeb7e75cce87cda1d8f"},{url:"/js/3.2ab0c7ca.js",revision:"694abf00532f354adc4994f4f7a81141"},{url:"/js/30.31ac76f8.js",revision:"d2fa4eeaaae13a2afd63a2ce8d5b2ab1"},{url:"/js/31.6a7534bb.js",revision:"6856475b05a3188533c1eae24f222f5f"},{url:"/js/32.69686b68.js",revision:"e298fce07d0df928ac3105d760e4e5bc"},{url:"/js/33.1c4e3734.js",revision:"9c0cc08ed6f146ebb4dd9b782388b9f2"},{url:"/js/34.fd0a2082.js",revision:"dbf5557cc450759556f4cb053268af53"},{url:"/js/35.ea0fcbc4.js",revision:"39571d50aa0163c44847056f99ccbfa3"},{url:"/js/36.e801184c.js",revision:"8a35ea067af8250c97402ac2c05c9d10"},{url:"/js/37.e4f7b334.js",revision:"e450a5fcaade32339c4e326afdb83de0"},{url:"/js/38.51de5205.js",revision:"aacc6d7911e42ce34276c4ca4c33a950"},{url:"/js/39.261b8095.js",revision:"cd074ec1cc9bb497ab50296c96492d6b"},{url:"/js/4.ad5f933c.js",revision:"b1217355ee34c385e75d382c9dc944d3"},{url:"/js/40.46c8b97a.js",revision:"ffc2b591ca43e08b64ca9761dd983a78"},{url:"/js/41.a4532342.js",revision:"76750112838dcc607e9f6d2d69f99d11"},{url:"/js/42.9b73411f.js",revision:"50ec13e2b544286a01c80fd25f5cc396"},{url:"/js/43.43ae7439.js",revision:"387967a6d7919101d94d61bcb4fc296f"},{url:"/js/44.a411310f.js",revision:"d7d92d0021e82ac8fed575ba6806f6f6"},{url:"/js/45.c3d9c3f9.js",revision:"f063f9cf58fc5aa190fc4a5d8e480f14"},{url:"/js/46.1611b0f8.js",revision:"3d92e11f6598290032a7070093cbecb7"},{url:"/js/47.d4a33b9c.js",revision:"328a66d7921a71a0e192ef0e2740083e"},{url:"/js/48.74015a2a.js",revision:"4aed57ea2c3e647c81f369dcc5f426a2"},{url:"/js/49.b3d8e959.js",revision:"17443a66aaa866c33e8adae4b0debd53"},{url:"/js/5.607e50f8.js",revision:"a0ddd2e57d537599b7c752096027da00"},{url:"/js/50.d6f08de3.js",revision:"468ca66ae61554542231728a2ede69b8"},{url:"/js/51.4517f891.js",revision:"358db1e2137b8975e5efd44da37fcde9"},{url:"/js/52.24674381.js",revision:"b1efb543b56e3a12a301ab717bfab403"},{url:"/js/53.28075735.js",revision:"1e11168acb5af56c9b7b88eaec27acb8"},{url:"/js/54.7e5bb13e.js",revision:"50fe72b502ac11a202cc08d5b166a5fe"},{url:"/js/55.399f340a.js",revision:"de427bea4341cde6209d57b02e855b7c"},{url:"/js/56.6eaadc5e.js",revision:"f9b0a37dd8898c4cd7a08a469308e2bd"},{url:"/js/57.9ed07385.js",revision:"5c0de315c132c8495bc229c80311b0ad"},{url:"/js/58.5a29326b.js",revision:"1b5f5c58c47379202a9232feee3ef0f9"},{url:"/js/59.72a322bf.js",revision:"2e1ac7e0388c8be5205f63c86d4ce7c4"},{url:"/js/6.e8627c33.js",revision:"86563094a19b1f7eddd3451ef9a6e2a7"},{url:"/js/60.7202efc3.js",revision:"76d4d468cd86fa7489429315acb5247b"},{url:"/js/7.722ac7ee.js",revision:"ce5683f06b4813a79399713779e0fb9e"},{url:"/js/8.f3096918.js",revision:"5287548a92e83f5890b2187cfc943ee2"},{url:"/js/app.57d1b09d.js",revision:"d5a73043440ef373129fbb45b04306c9"},{url:"/js/chunk-common.ba991343.js",revision:"75a629e6f4eac44157b63d07d4379c57"},{url:"/js/vendor.a8ff1fe6.js",revision:"bcd5b6bf751e27940c35a120999f3f05"},{url:"/manifest.json",revision:"eb856bbcbcc2058e10a2484a7f63d3c7"},{url:"/static/banner-default.jpg",revision:"d0d2d843fe60b59298d0a37233229b67"},{url:"/static/material.png",revision:"a700e98fc6da7c5b8e71a6ee62f5bd94"},{url:"/static/no_image.png",revision:"82c7055ecf1dcd526c8aa9dfa9d2e4b6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
