if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,f,b)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=b(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ukm-commerce"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/10.9f8a98ba.css",revision:"28834266a119159a4f4e2801be904ea2"},{url:"/css/11.dcf2621b.css",revision:"f1eaf2c22ddb267a8ba0359609643510"},{url:"/css/5.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/6.debbeb20.css",revision:"c16cde3db5ad73c8375a81ce4aba4037"},{url:"/css/7.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/8.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/9.c1fe7043.css",revision:"96159f3db4d17c4673b73bbd5b798994"},{url:"/css/app.28ee7521.css",revision:"03121bd0e50cba915b783abf0075a023"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/vendor.65e2a047.css",revision:"4ec00f1abe05b8c137d58276e096d1bd"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"/icon/favicon.svg",revision:"584945dd9d35c0711cdb67fd7b37b0f2"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"f6ee06cb8861f6dfc29953cb04e2251a"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/icon/logo.png",revision:"5b512e9d308c35aba390200591b0311e"},{url:"/img/bg.5be66d14.jpg",revision:"ca41d241312d6b3eef683795117c7760"},{url:"/index.php",revision:"90e586bf38f5194594c57180356af779"},{url:"/js/10.0e5d60ec.js",revision:"257dcd785cbeef614ab182813ee76636"},{url:"/js/11.d68a1991.js",revision:"657d781e916f8f0bcda5fa38e9fb8a57"},{url:"/js/12.b7f2c742.js",revision:"24533d7482b47032ee8209a4be23af50"},{url:"/js/13.59fdb03c.js",revision:"e5115b88f03fd1ca0cacf68597cde21a"},{url:"/js/14.743903c1.js",revision:"7d1fc8aa28f35339dab5eeffeb8dc410"},{url:"/js/15.02d9000c.js",revision:"6f1bfd197c13d845609bbaea741ce330"},{url:"/js/16.56cd0019.js",revision:"3ecc6ec1d42f04d9f904aecffbf00c7c"},{url:"/js/17.a797e725.js",revision:"04ba162b8d52d37bb18a320cd309c110"},{url:"/js/18.afc9f179.js",revision:"87670a0234bab8a51c952a13a789fa0a"},{url:"/js/19.f69f5de9.js",revision:"adae381bbfbe35d656f14629d48c9d3c"},{url:"/js/2.1b82fd16.js",revision:"339c10610c97896a8b6eaf38e193ed70"},{url:"/js/20.dece5ae6.js",revision:"158483613923ba105914626cfc0125a2"},{url:"/js/21.85bc7fa6.js",revision:"b79b234eefd6d5cdffdc58b9f75b5dac"},{url:"/js/22.4652000d.js",revision:"2510489c5b2bf9ed7eab6598e871ab4d"},{url:"/js/23.7aeb4dec.js",revision:"719f0fc9e59693862302c649c062d1af"},{url:"/js/24.0cbf2595.js",revision:"6b6ce13a197ff7af11d1c91a4e822459"},{url:"/js/25.011d9bc6.js",revision:"906f476b7e1de5d5a4efb4da79405844"},{url:"/js/26.8995a30a.js",revision:"e16c0bcbcf78395471023eecc2d1b774"},{url:"/js/27.c80d8bff.js",revision:"3ca85017663a569119c8facbfbc0f08f"},{url:"/js/28.7f6c3a71.js",revision:"039566777d1f3e0ddf88db98282db017"},{url:"/js/29.f6583328.js",revision:"7a44f56b922f508c55662681bb266231"},{url:"/js/3.46abe4fd.js",revision:"1875cf1d8e43e88ef84aeaa0074e7b75"},{url:"/js/30.987ba1e8.js",revision:"1273672bdb37aaf74fba27abbb3d5bb6"},{url:"/js/31.9adb6ad2.js",revision:"8769ac2cbd1afc71b9854a22db6f995f"},{url:"/js/32.c35f4ed5.js",revision:"32df892fcc171b9243193a3a230fff24"},{url:"/js/33.03dbb05b.js",revision:"e81c2e07e86f6e6ff368be01a61bcab2"},{url:"/js/34.a3067cba.js",revision:"c62b248870b3f0ce0bfb618c3d533c4e"},{url:"/js/35.c42e5f7f.js",revision:"22ae94fdf9c2d891631cc7fa49230603"},{url:"/js/36.0f1da416.js",revision:"f3f0afc13f195feed23ec8f8bf49d72e"},{url:"/js/37.1b1c1ddb.js",revision:"0e8a621c084bb27b1faf2674c2010bf1"},{url:"/js/38.9b4122eb.js",revision:"cbbc07b964bb4401d39c2661ba033535"},{url:"/js/39.9e508f6e.js",revision:"3e8c22003fa938d08d4d66b7e5687317"},{url:"/js/40.ce730277.js",revision:"be313d7676bbf13a160c65b1ce73bc6c"},{url:"/js/41.4ec1ce50.js",revision:"6a213cb0a794fe216831df014bd92f9e"},{url:"/js/42.dfa3bce5.js",revision:"205780e78719d89557eabd7b8fd77814"},{url:"/js/43.8a59bb29.js",revision:"63ca57ac632d07ea3a73c9edf5b1e779"},{url:"/js/44.c425f1c3.js",revision:"f77b629329e22dbff833169b386d427c"},{url:"/js/45.5ee77108.js",revision:"cbfc464047564efd57f6711f099c9651"},{url:"/js/46.d7ee6918.js",revision:"1be74127037c474e350ee9330a21c83e"},{url:"/js/47.c9cff3ae.js",revision:"0703f84fd6ab1d37cd384f7c79f72274"},{url:"/js/48.8d24bd0b.js",revision:"527cbba69296d9308635400e48663140"},{url:"/js/5.c0225d02.js",revision:"13eb87087c03b07c75d61ebe542ed755"},{url:"/js/6.d83c2405.js",revision:"5674cb805507a509b33e5ae32f92768c"},{url:"/js/7.eb1b6275.js",revision:"d275f54acda105a55210abbed1f2dab4"},{url:"/js/8.8d54ff56.js",revision:"7e8e7e83043f425f1840b4b6d72e2686"},{url:"/js/9.a9dbb5bf.js",revision:"832b01704d812b540fd6a16cd2ecfd2a"},{url:"/js/app.04914f82.js",revision:"3eedb479899208d6245a44ca75092bf3"},{url:"/js/chunk-common.207fdb82.js",revision:"1f76ee211f7a595d26bb98fbb1e08e9d"},{url:"/js/vendor.8fd1b8e2.js",revision:"6a8b3f3778acf4f48dc15b1126e4109e"},{url:"/manifest.json",revision:"33921458e292090758ff0d4f327e073d"},{url:"/static/banner-default.jpg",revision:"d0d2d843fe60b59298d0a37233229b67"},{url:"/static/material.png",revision:"a700e98fc6da7c5b8e71a6ee62f5bd94"},{url:"/static/no_image.png",revision:"82c7055ecf1dcd526c8aa9dfa9d2e4b6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
