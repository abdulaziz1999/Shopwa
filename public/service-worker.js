if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,f)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=f(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ukm-commerce"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/10.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/11.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/12.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/13.c1fe7043.css",revision:"96159f3db4d17c4673b73bbd5b798994"},{url:"/css/14.8fbf080d.css",revision:"438874608101fbbfd433a7dfe069c119"},{url:"/css/15.dcf2621b.css",revision:"f1eaf2c22ddb267a8ba0359609643510"},{url:"/css/9.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/app.a436163e.css",revision:"5722c9364556771aa53ecc2b5e766109"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/vendor.b58f2c69.css",revision:"7ecc5dd7c17472869e6e1fb4cd9a5eab"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"/icon/favicon.svg",revision:"584945dd9d35c0711cdb67fd7b37b0f2"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"f6ee06cb8861f6dfc29953cb04e2251a"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/icon/logo.png",revision:"5b512e9d308c35aba390200591b0311e"},{url:"/img/bg.5be66d14.jpg",revision:"ca41d241312d6b3eef683795117c7760"},{url:"/index.php",revision:"bdbb5741e763baf63504aa9151d8938c"},{url:"/js/10.1cb303c7.js",revision:"260fccdb2c859c590d45d6227a8886e2"},{url:"/js/11.e328620b.js",revision:"7eb81458a1f5ceb9664078143bdf18d2"},{url:"/js/12.85512ff5.js",revision:"fd8be75314c41b786b29269105509743"},{url:"/js/13.e6336cc7.js",revision:"b5a1d6b160805905152a42c0f4f166b8"},{url:"/js/14.1322bbd7.js",revision:"ea901d983e953d937cc7edd27c230716"},{url:"/js/15.e59ae7d4.js",revision:"08e1c9aa6664902ba2214cd16aef398b"},{url:"/js/16.16294428.js",revision:"09d665a32377c9e33ac0b1ba344ff717"},{url:"/js/17.4f218a5a.js",revision:"8ff64e6642c3ecd9481bb3bca52405ca"},{url:"/js/18.9afe994a.js",revision:"d50a88ae5faf24a3e132979d6af6348a"},{url:"/js/19.a60dedfc.js",revision:"8b1a79fde093f1b17d35ad8a9127326e"},{url:"/js/2.2a0754a2.js",revision:"87cc4d7f63bb924a9a4882502d92ef04"},{url:"/js/20.ab0e8fa8.js",revision:"7a40e17c03b2709beb1cfec4e8b70e64"},{url:"/js/21.df7a25a5.js",revision:"94c3dfa3a6be54a8a66dd82ef957a01d"},{url:"/js/22.e99a12f9.js",revision:"2b1f4c2560845ebd37477ff6d9a5d9f8"},{url:"/js/23.909984ba.js",revision:"f3dc361454a71cea644af4e2b62a1005"},{url:"/js/24.3c32a511.js",revision:"6e1ca4d840d2334c8ed291e99c356564"},{url:"/js/25.49dc4a40.js",revision:"4027b1c7841d5f36c1c514d3e01c6f27"},{url:"/js/26.8d8d698b.js",revision:"9f289032c5ef2a0e8b645661f8e52644"},{url:"/js/27.84783aca.js",revision:"da644af5a86499fe07dfc58d41b1ba4b"},{url:"/js/28.aa31c1bb.js",revision:"bd8d69a4792dc2e99785874b2844c3b0"},{url:"/js/29.ca1c42cf.js",revision:"729d5d05d369a83ed5a086effbfc7305"},{url:"/js/3.73cbcaca.js",revision:"261b27794a5e4c9f55f9fd5b3de74158"},{url:"/js/30.8c26c241.js",revision:"6be8b0b659e3f3042c5b09a0e94ce894"},{url:"/js/31.b8587a7e.js",revision:"cc6c8f0f0f800619693921012b215cbb"},{url:"/js/32.10f47bf7.js",revision:"a976d148b7bc24c551759680c7fa5703"},{url:"/js/33.9bf29a9e.js",revision:"18ff2d7b913bfea5f831115fd5a9eb08"},{url:"/js/34.710aaed2.js",revision:"358403cc8f4899658490df874e9aba4a"},{url:"/js/35.d29bc351.js",revision:"e478c829085ab1a9c1190e3bc4285831"},{url:"/js/36.57b15c30.js",revision:"c8b563257570ef573dcb6dde1529514a"},{url:"/js/37.2e12780b.js",revision:"2a42bc115fedb0eb7490b6c99640c11d"},{url:"/js/38.8f790e2d.js",revision:"f58217dd6e310e1ff0adb47b74ce4021"},{url:"/js/39.5282c753.js",revision:"c4d47c4e74abac8bd79396459e55f7f2"},{url:"/js/4.6e6d90bb.js",revision:"1e94031b8ecb6c00fe1edddfb5c42e13"},{url:"/js/40.50c6763d.js",revision:"0afff58c36273c10c2b3ff5f55705b90"},{url:"/js/41.227170a7.js",revision:"c4c50f3021912a27fc8bfe04615e32b3"},{url:"/js/42.3d0d65cf.js",revision:"076239b84173c33b5e502ca73f20a5c3"},{url:"/js/43.dd0c925c.js",revision:"1490dc56e4af53cabbb1f2c5f03dbbaf"},{url:"/js/44.b23a27d8.js",revision:"08c6416250569a3319e3d02302917bb1"},{url:"/js/45.fd83aff2.js",revision:"3421f22288ccdc8d0308a70de43e1086"},{url:"/js/46.e1bfaa06.js",revision:"cc7f6c9f2acb7511706f5b4dcd0085dd"},{url:"/js/47.d6a7efe3.js",revision:"947598706211b64d1f2367a7bfe10eb9"},{url:"/js/48.1442692a.js",revision:"edb9710a36bf799346d3d16c0385a6c3"},{url:"/js/49.2c9a887e.js",revision:"6c2f28618254e102cf1b768ca9d5eb10"},{url:"/js/5.cc686ab2.js",revision:"6a2c4116e9a88675a927d998c1768b8f"},{url:"/js/50.9b7cd024.js",revision:"eacedb989ba72a630e292efc21354d12"},{url:"/js/51.0a20845a.js",revision:"f36d1548033ee472d7a66bf02099ed7a"},{url:"/js/52.a9f2cdaa.js",revision:"b6159233305c618acc93a9d7e62889aa"},{url:"/js/53.3876421a.js",revision:"1c42b8898c2812fababac69d8785ae91"},{url:"/js/54.8be76350.js",revision:"73cbb8c73a8c4af85838188230fc0dcf"},{url:"/js/55.fe8246a1.js",revision:"3d38fda244bc2b341d9117b7488388dc"},{url:"/js/56.615f8aad.js",revision:"a914043a8832042f1aae19a300f44431"},{url:"/js/57.6dc9b469.js",revision:"6299414a0b66616d2fc5061246645dde"},{url:"/js/58.4a444e0f.js",revision:"0606bca7c1c4c452450265dded8ff48d"},{url:"/js/59.6bdbfdb4.js",revision:"e079cb079e1c9f04c5643f6bb353b38e"},{url:"/js/6.d0a85ee3.js",revision:"4d350eabb0491d49ab56ab5c9eed1b05"},{url:"/js/7.966c955b.js",revision:"1a48afa3a8223c3ea2d6761c8a46c200"},{url:"/js/9.e2208094.js",revision:"cdd1e03a96b1fdfd32ef160366f34eb7"},{url:"/js/app.593ebd7f.js",revision:"1cdb5428ab4765db18217b6bb0e8dc9c"},{url:"/js/chunk-common.e10b42d0.js",revision:"a03eb5411a8de78ec074c223ee2aeb8e"},{url:"/js/vendor.544add43.js",revision:"bcd5b6bf751e27940c35a120999f3f05"},{url:"/manifest.json",revision:"33921458e292090758ff0d4f327e073d"},{url:"/static/banner-default.jpg",revision:"d0d2d843fe60b59298d0a37233229b67"},{url:"/static/material.png",revision:"a700e98fc6da7c5b8e71a6ee62f5bd94"},{url:"/static/no_image.png",revision:"82c7055ecf1dcd526c8aa9dfa9d2e4b6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
