if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,f)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return d;default:return e(c)}})).then(e=>{const c=f(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ukm-commerce"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/10.88d5c6ae.css",revision:"6bf930832db47103ae8c42ab0bcee0fe"},{url:"/css/11.91b4027f.css",revision:"3eadf6bdf45fd1db23098e65e5f98286"},{url:"/css/12.69448d6c.css",revision:"1654c93327034e1250fda06406127dd5"},{url:"/css/13.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/14.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/15.50b403b4.css",revision:"8a3df6aa2b4a7338736ead57710f47e5"},{url:"/css/16.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/17.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/18.dcf2621b.css",revision:"f1eaf2c22ddb267a8ba0359609643510"},{url:"/css/app.2440c632.css",revision:"25ec7116da81342c5288ac5bef178191"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/chunk-common.a4b6411e.css",revision:"8c002f747e9a336b413ee32f1dce018e"},{url:"/css/vendor.f4409e2e.css",revision:"9d068a9afbd2f75a5d1b595fd25e6d36"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"/icon/favicon.svg",revision:"584945dd9d35c0711cdb67fd7b37b0f2"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"f6ee06cb8861f6dfc29953cb04e2251a"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-512x512.png",revision:"058577d0dd5a1811944e4c0ca9281b02"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/icon/logo.png",revision:"5b512e9d308c35aba390200591b0311e"},{url:"/img/bg.5be66d14.jpg",revision:"ca41d241312d6b3eef683795117c7760"},{url:"/index.php",revision:"19c29cc808afcbd86631c6682dc1a23a"},{url:"/js/10.e611536b.js",revision:"9f30b9beaea397dacc0120ea19f9aaf6"},{url:"/js/11.17bf5f59.js",revision:"5ca66fc8d059426a26e3462201092a1c"},{url:"/js/12.60f74b97.js",revision:"e2d3a45cd16a5e75ee6cd8696ae0c733"},{url:"/js/13.aa954752.js",revision:"1c83e964ec22ecd328df487acfc2acba"},{url:"/js/14.5888de13.js",revision:"df9b96357de533689f62869435ec018f"},{url:"/js/15.08c832de.js",revision:"32db5ee4b431714a38715452081d4749"},{url:"/js/16.dbc1b140.js",revision:"58dd37b37367854e145a95821cdef34a"},{url:"/js/17.c13286c8.js",revision:"1ac3ab47f513719a3c0334cbac6b2f1a"},{url:"/js/18.6c13a1d6.js",revision:"57a34cd20c95ace123126220ecea3d06"},{url:"/js/19.f50ebd80.js",revision:"17faa3268cb6c1bff51255c9892e89a3"},{url:"/js/2.457addee.js",revision:"7a2f856c66f5ce3b7f579686da8b57a0"},{url:"/js/20.5e00c8db.js",revision:"bdb84cb144fc8afcf75f461c3a971298"},{url:"/js/21.77b5e824.js",revision:"a25a2d7a7f4c015c886b79f9eaa80cdc"},{url:"/js/22.dbda7ff8.js",revision:"f197e3a484d42d64d87ad3bb2b412906"},{url:"/js/23.bf7ee1b1.js",revision:"32a53f135e14a6f38a7a0c94a81d2aa3"},{url:"/js/24.ba3eba2c.js",revision:"79b408f49247d62249914d3a3623a1d3"},{url:"/js/25.e56ce63a.js",revision:"fc4866dcfd21987be777cabdbf9d3bb2"},{url:"/js/26.5bfb630c.js",revision:"75c9943e6fb35546b47bb0617aa3a74d"},{url:"/js/27.cb057eee.js",revision:"d63bb5fbaab31566a0ecf5cca4cc97f3"},{url:"/js/28.282bc11b.js",revision:"737a0ba7c78473e89bee1d83b6c10f3b"},{url:"/js/29.09214049.js",revision:"4b9566d5e9e5f198bdb51d4413bbd752"},{url:"/js/3.14d12a7a.js",revision:"694abf00532f354adc4994f4f7a81141"},{url:"/js/30.549393ac.js",revision:"576834e6a2587f96d291fc87a0e5417d"},{url:"/js/31.23888bcf.js",revision:"8a62cdf0832c0bf848f2ff1f117422b7"},{url:"/js/32.76a39d3e.js",revision:"eb2035db3ebd56f05d2bdf9d9bb92c2a"},{url:"/js/33.7454fd03.js",revision:"5198baaf57f42890ccf29bded69765bb"},{url:"/js/34.f2fa20c2.js",revision:"2f9a7709cc6086c930780fe0503cacb5"},{url:"/js/35.e3732534.js",revision:"39571d50aa0163c44847056f99ccbfa3"},{url:"/js/36.664f212f.js",revision:"8a35ea067af8250c97402ac2c05c9d10"},{url:"/js/37.f8fa3398.js",revision:"d8fcbad1a6684f1846f98af36a101f97"},{url:"/js/38.cfe2c25f.js",revision:"aacc6d7911e42ce34276c4ca4c33a950"},{url:"/js/39.261b8095.js",revision:"cd074ec1cc9bb497ab50296c96492d6b"},{url:"/js/4.ad5f933c.js",revision:"b1217355ee34c385e75d382c9dc944d3"},{url:"/js/40.8e728a4e.js",revision:"ffc2b591ca43e08b64ca9761dd983a78"},{url:"/js/41.2449940f.js",revision:"76750112838dcc607e9f6d2d69f99d11"},{url:"/js/42.696cc8da.js",revision:"50ec13e2b544286a01c80fd25f5cc396"},{url:"/js/43.12b5fc69.js",revision:"387967a6d7919101d94d61bcb4fc296f"},{url:"/js/44.6f4d3fc5.js",revision:"d7d92d0021e82ac8fed575ba6806f6f6"},{url:"/js/45.11d184f1.js",revision:"f063f9cf58fc5aa190fc4a5d8e480f14"},{url:"/js/46.66f8608d.js",revision:"7538dbcef972e19ba3f984c36f3b837b"},{url:"/js/47.7a0d88d6.js",revision:"9cab22af3161104e24f3605be8e438e8"},{url:"/js/48.5f360d0d.js",revision:"4aed57ea2c3e647c81f369dcc5f426a2"},{url:"/js/49.b3d8e959.js",revision:"17443a66aaa866c33e8adae4b0debd53"},{url:"/js/5.cc686ab2.js",revision:"6a2c4116e9a88675a927d998c1768b8f"},{url:"/js/50.4d782c49.js",revision:"61cb5a7bac2de8e150cd2f0b1e892e68"},{url:"/js/51.4517f891.js",revision:"358db1e2137b8975e5efd44da37fcde9"},{url:"/js/52.01715022.js",revision:"217a266392138a91e91434745ab9dcb9"},{url:"/js/53.4149fdbb.js",revision:"1e11168acb5af56c9b7b88eaec27acb8"},{url:"/js/54.7e5bb13e.js",revision:"50fe72b502ac11a202cc08d5b166a5fe"},{url:"/js/55.929896d4.js",revision:"121b4808bb39c909ca60a7ecd972af59"},{url:"/js/56.6eaadc5e.js",revision:"f9b0a37dd8898c4cd7a08a469308e2bd"},{url:"/js/57.f9632416.js",revision:"0efbb51658b5916563d75ca41f2b6ae2"},{url:"/js/58.5a29326b.js",revision:"1b5f5c58c47379202a9232feee3ef0f9"},{url:"/js/59.84787bd8.js",revision:"d8a0c6c85c74a19ddbef865637cc9d0a"},{url:"/js/6.e834d761.js",revision:"aa5234301de2b23db519fbdea5fbd740"},{url:"/js/60.7202efc3.js",revision:"76d4d468cd86fa7489429315acb5247b"},{url:"/js/7.fd99ca51.js",revision:"1a48afa3a8223c3ea2d6761c8a46c200"},{url:"/js/8.02eefe96.js",revision:"88b6c42e1791b9607f4bed749a6cc2c3"},{url:"/js/app.97929855.js",revision:"21bc5f8c81a7a3fa3eb0df9668d0a532"},{url:"/js/chunk-common.ff3d4c24.js",revision:"982b4392b5fd9d373051658ab05f2d9e"},{url:"/js/vendor.39745ff4.js",revision:"5820bc47ad80acaccac90c686d0652b2"},{url:"/manifest.json",revision:"c4551803e40167bdd01a0e7b0bf2a4be"},{url:"/static/delivery.png",revision:"0555004e72a032784289e60208c95221"},{url:"/static/warehouse.png",revision:"fc817ca53c48391ed0dbe2825b7455d2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
