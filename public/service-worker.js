if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise(async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()})),s.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},s=(s,c)=>{Promise.all(s.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(s)};self.define=(s,f,a)=>{c[s]||(c[s]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+s.slice(1)};return Promise.all(f.map(s=>{switch(s){case"exports":return c;case"module":return i;default:return e(s)}})).then(e=>{const s=a(...e);return c.default||(c.default=s),c})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ukm-commerce"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/css/4.47ea3f4f.css",revision:"e1de84a9e2043a7a2238f76fecdf8aa8"},{url:"/css/5.47ea3f4f.css",revision:"e1de84a9e2043a7a2238f76fecdf8aa8"},{url:"/css/6.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/7.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/8.c1fe7043.css",revision:"96159f3db4d17c4673b73bbd5b798994"},{url:"/css/9.dcf2621b.css",revision:"f1eaf2c22ddb267a8ba0359609643510"},{url:"/css/app.bb79a7d5.css",revision:"dce8cb1b91f2728cd4da1c907f29a574"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/vendor.f5b9db0e.css",revision:"e6833bcddecf8d3940ff59177321023b"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"/icon/favicon.svg",revision:"584945dd9d35c0711cdb67fd7b37b0f2"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"f6ee06cb8861f6dfc29953cb04e2251a"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/icon/logo.png",revision:"5b512e9d308c35aba390200591b0311e"},{url:"/img/bg.5be66d14.jpg",revision:"ca41d241312d6b3eef683795117c7760"},{url:"/index.php",revision:"4709484b9ed7cf97d16cef18fa1bdafe"},{url:"/js/10.f6d9525a.js",revision:"c0fedb149023e11ca5e1f18f0cce0328"},{url:"/js/11.90b87ad5.js",revision:"3931c4bb088c97b8495ab6f07cf35127"},{url:"/js/12.b13168ba.js",revision:"43b2e8b0d1994f75f7477b53a5608a1a"},{url:"/js/13.2a5171cf.js",revision:"7b9c30663dd73812694f7086d770ce26"},{url:"/js/14.641b877a.js",revision:"de9deb721b9cd6a5780a5558311c48e4"},{url:"/js/15.a503e9a6.js",revision:"b5d87d170aa41fc2caf1741d7cbbf02d"},{url:"/js/16.8e53d69d.js",revision:"20021f3ab0db4a3a52ffe138f78bf2a2"},{url:"/js/17.5652afcf.js",revision:"d2fbae39f5ff49a9ebec97cc8d10a52f"},{url:"/js/18.475bf3d3.js",revision:"367c98cc92aac5287ea87163620fd5b1"},{url:"/js/19.06c1c88e.js",revision:"2130dbf12f656135be616df0b2f0293d"},{url:"/js/2.1b82fd16.js",revision:"339c10610c97896a8b6eaf38e193ed70"},{url:"/js/20.f011837e.js",revision:"c2c184d6a3f9d61d78ac8b370ffd1cc2"},{url:"/js/21.f074f178.js",revision:"db6322949ac35b4b121e8d0a5de5c12d"},{url:"/js/22.a9fb4f37.js",revision:"c71fa10f526824d98d6fec59e0802137"},{url:"/js/23.459aa9a3.js",revision:"ea32b28739ee2d17d571c20b8eb18774"},{url:"/js/24.7e207033.js",revision:"4fae26206f882aacdac2323ec247af0a"},{url:"/js/25.8391513c.js",revision:"e1a2e5265f04dc37f330494ab4535b2e"},{url:"/js/26.e75de9cb.js",revision:"8acc9bd2aaf8acb4a5890566ff5fb05f"},{url:"/js/27.ac188cee.js",revision:"23d34b224e1e1dbb623b3679c88ab3cb"},{url:"/js/28.1fdfa2dc.js",revision:"6e4cb6aca96319162282189c5c2f350d"},{url:"/js/29.931226ff.js",revision:"3b91a41b9a98ea0bc6c0743be9b2b077"},{url:"/js/30.cce58ccd.js",revision:"b912d43c445fc09273315b2b879e81f9"},{url:"/js/31.6656fe93.js",revision:"a7e81908f21099ce1f4a53c6c5163d54"},{url:"/js/32.e8ec0a5a.js",revision:"91a4416de87661804f29b34dd248bba6"},{url:"/js/33.b852bc4e.js",revision:"edb298198d5db0b2d23db093f3e6081a"},{url:"/js/34.37222372.js",revision:"bef0803905d9db097b06a91f1c3639ba"},{url:"/js/35.45b2775a.js",revision:"9d56822d45688d71254aca01ccea3322"},{url:"/js/36.6360c4c1.js",revision:"60005f94fa74682bc497ac172468d323"},{url:"/js/37.0b4fd046.js",revision:"366bcfb7b254a12162b6a397d7284050"},{url:"/js/38.15c5f2e1.js",revision:"1b682cbb4fab71f1e0e596e46d9eba65"},{url:"/js/39.7a212510.js",revision:"6de61bd2e76fa47678f9b94ee937885c"},{url:"/js/4.9d781598.js",revision:"3d50d4ea1c0fcd4d20d0d142b54ef450"},{url:"/js/40.9200e0b0.js",revision:"0f75b93309dcad8443f9ae04f40e1ff7"},{url:"/js/41.b689ef9a.js",revision:"7bc23a67bfabc27872d02fe73ab63ad2"},{url:"/js/42.650a2d41.js",revision:"ea8571887c965d8edc9b61e446fb7896"},{url:"/js/43.2342a7ee.js",revision:"b0539ea289831679686190749f251986"},{url:"/js/44.3fc7cb90.js",revision:"c131fe0ee730f3ebd16b816b736ad684"},{url:"/js/45.19462b26.js",revision:"fbe0566a96c0decfe08a121c1e9f9885"},{url:"/js/46.4efaaf2b.js",revision:"ef01acb4ff3b77188b6e9249e769d18b"},{url:"/js/47.8389b6b2.js",revision:"9c05b27e042e2e896a37e36e487137a6"},{url:"/js/48.8d24bd0b.js",revision:"527cbba69296d9308635400e48663140"},{url:"/js/49.8fb4761e.js",revision:"40f9fc7a44f6f23a5c3623b2cfa9f809"},{url:"/js/5.e7a632dc.js",revision:"6c5357d78834cc4393aece397cc696a3"},{url:"/js/50.c6a27f1a.js",revision:"95899f5dacaf4b0380dd2b69282ed101"},{url:"/js/51.b054a077.js",revision:"20777c8be3ea534c28dc43426f5fbd77"},{url:"/js/6.519f07db.js",revision:"230436c0032daa33824841a0d207a534"},{url:"/js/7.ec215d80.js",revision:"21714517b5baecbeb992511a46f28f4b"},{url:"/js/8.7da84d43.js",revision:"d1fa3b7d40c30e552658650aae6dddab"},{url:"/js/9.f95c78f7.js",revision:"d1645fcdd71ae6072578469df84843aa"},{url:"/js/app.fe7cdf96.js",revision:"76e8f8a00fb99c806dd4f20f91bdbd67"},{url:"/js/chunk-common.5c5c7809.js",revision:"bf8904060ddaef8d07a91f1dd5706bb1"},{url:"/js/vendor.ed60f62a.js",revision:"ef047189a911c719af3184591823d8d3"},{url:"/manifest.json",revision:"7af52afa87748f271084872c06a37613"},{url:"/static/banner-default.jpg",revision:"d0d2d843fe60b59298d0a37233229b67"},{url:"/static/material.png",revision:"a700e98fc6da7c5b8e71a6ee62f5bd94"},{url:"/static/no_image.png",revision:"82c7055ecf1dcd526c8aa9dfa9d2e4b6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
