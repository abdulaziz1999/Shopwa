if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return f[e]||(c=new Promise(async c=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=c}else importScripts(e),c()})),c.then(()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]})},c=(c,f)=>{Promise.all(c.map(e)).then(e=>f(1===e.length?e[0]:e))},f={require:Promise.resolve(c)};self.define=(c,s,a)=>{f[c]||(f[c]=Promise.resolve().then(()=>{let f={};const i={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return f;case"module":return i;default:return e(c)}})).then(e=>{const c=a(...e);return f.default||(f.default=c),f})}))}}define("./service-worker.js",["./workbox-85cf717f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"ukm-commerce"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/config.js",revision:"e142fd1f80a209fb57b6c4bdbfb557b0"},{url:"/css/4.47ea3f4f.css",revision:"e1de84a9e2043a7a2238f76fecdf8aa8"},{url:"/css/5.47ea3f4f.css",revision:"e1de84a9e2043a7a2238f76fecdf8aa8"},{url:"/css/6.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/7.eef7ae2a.css",revision:"fe3b6d4fc230e75a0b36b3dc8df2be7b"},{url:"/css/8.c1fe7043.css",revision:"96159f3db4d17c4673b73bbd5b798994"},{url:"/css/9.dcf2621b.css",revision:"f1eaf2c22ddb267a8ba0359609643510"},{url:"/css/app.2935c5ab.css",revision:"2f3daa12f15f143ae34448af6e7823bd"},{url:"/css/canvas.css",revision:"f87be401d30b0805e4caaba91935e642"},{url:"/css/vendor.f5b9db0e.css",revision:"e6833bcddecf8d3940ff59177321023b"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8defaa46.woff",revision:"7b85d3fc5af0afe6fcf6fb3fa7a941d5"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0b27c5d6.woff2",revision:"0b28ad139a4a7d19ca0b55fb7269ac57"},{url:"/icon/favicon.svg",revision:"584945dd9d35c0711cdb67fd7b37b0f2"},{url:"/icon/icon-120x120.png",revision:"42db73b8e6ae8b9a4fe60a8934f3174f"},{url:"/icon/icon-128x128.png",revision:"eec3fab141cd00f9358e964486579bd0"},{url:"/icon/icon-144x144.png",revision:"302e936bd45aeab52491dce203d7a960"},{url:"/icon/icon-152x152.png",revision:"319e537294cdcd2806b6f25bdc384509"},{url:"/icon/icon-167x167.png",revision:"c5bf7048220f415cee20f91d3140751e"},{url:"/icon/icon-180x180.png",revision:"d1e985fc5667de60491c67d526b437c8"},{url:"/icon/icon-192x192.png",revision:"0fb9555cf950264ac9e06c49574e3455"},{url:"/icon/icon-256x256.png",revision:"f6ee06cb8861f6dfc29953cb04e2251a"},{url:"/icon/icon-384x384.png",revision:"811a986291acaee7de4b735f3662a015"},{url:"/icon/icon-96x96.png",revision:"0fab17e38356f57913b63355f4266576"},{url:"/icon/logo.png",revision:"5b512e9d308c35aba390200591b0311e"},{url:"/img/bg.5be66d14.jpg",revision:"ca41d241312d6b3eef683795117c7760"},{url:"/index.php",revision:"825b941d6ff4ef948005ef644a4d58a6"},{url:"/js/10.597886de.js",revision:"b15c0efa12cf1d6d19c1bbab47301b0c"},{url:"/js/11.90b87ad5.js",revision:"3931c4bb088c97b8495ab6f07cf35127"},{url:"/js/12.b13168ba.js",revision:"43b2e8b0d1994f75f7477b53a5608a1a"},{url:"/js/13.2a5171cf.js",revision:"7b9c30663dd73812694f7086d770ce26"},{url:"/js/14.651a80a0.js",revision:"9c89e1d8404226723911ea52d5a73674"},{url:"/js/15.a503e9a6.js",revision:"b5d87d170aa41fc2caf1741d7cbbf02d"},{url:"/js/16.8e53d69d.js",revision:"20021f3ab0db4a3a52ffe138f78bf2a2"},{url:"/js/17.5652afcf.js",revision:"d2fbae39f5ff49a9ebec97cc8d10a52f"},{url:"/js/18.475bf3d3.js",revision:"367c98cc92aac5287ea87163620fd5b1"},{url:"/js/19.06c1c88e.js",revision:"2130dbf12f656135be616df0b2f0293d"},{url:"/js/2.1b82fd16.js",revision:"339c10610c97896a8b6eaf38e193ed70"},{url:"/js/20.f011837e.js",revision:"c2c184d6a3f9d61d78ac8b370ffd1cc2"},{url:"/js/21.f074f178.js",revision:"db6322949ac35b4b121e8d0a5de5c12d"},{url:"/js/22.a9fb4f37.js",revision:"c71fa10f526824d98d6fec59e0802137"},{url:"/js/23.459aa9a3.js",revision:"ea32b28739ee2d17d571c20b8eb18774"},{url:"/js/24.7e207033.js",revision:"4fae26206f882aacdac2323ec247af0a"},{url:"/js/25.8391513c.js",revision:"e1a2e5265f04dc37f330494ab4535b2e"},{url:"/js/26.e75de9cb.js",revision:"8acc9bd2aaf8acb4a5890566ff5fb05f"},{url:"/js/27.ac188cee.js",revision:"23d34b224e1e1dbb623b3679c88ab3cb"},{url:"/js/28.1fdfa2dc.js",revision:"6e4cb6aca96319162282189c5c2f350d"},{url:"/js/29.b26b2e05.js",revision:"4a38a9d6c0539b549c64d759617c31a2"},{url:"/js/30.e3f555d6.js",revision:"75394dd1835025b2a0ec96c1bc396ef5"},{url:"/js/31.4cf57fff.js",revision:"970449156c0c7d8639c2f72624f8c37b"},{url:"/js/32.8974d903.js",revision:"9988baeb835d4c5c1ab47f3ff233ff9c"},{url:"/js/33.25bd33c1.js",revision:"cee0d2b7ae6f6cb494797897a7f8f549"},{url:"/js/34.bb429fe1.js",revision:"e6d61c9eeb08dac9c2fb64f03e2c8014"},{url:"/js/35.5e0e99fb.js",revision:"7e5cef487f9a8ac88af4e548bc9074bc"},{url:"/js/36.75449f30.js",revision:"c83b0238afd5ba60db4a87a258b40646"},{url:"/js/37.afa35c96.js",revision:"1925ef5cc60a6f526b5e6f42701eb275"},{url:"/js/38.dd2485d9.js",revision:"6b39774b50194b8b2f9c971803dbcf36"},{url:"/js/39.3490f414.js",revision:"e44680a0ed5ca9cfcc61d448067f3e0a"},{url:"/js/4.9d781598.js",revision:"3d50d4ea1c0fcd4d20d0d142b54ef450"},{url:"/js/40.33a3e670.js",revision:"2522d4d89c2bf197490fe2c4e4fbe0a1"},{url:"/js/41.29eb13f7.js",revision:"77718d4764a15074a7543164c0a9cc16"},{url:"/js/42.219b25b5.js",revision:"32fcb7d66954c3ed18cc70721daccb0a"},{url:"/js/43.57acbdb3.js",revision:"2b3bff88ec30a9e388da7779cf689b43"},{url:"/js/44.4ea16755.js",revision:"d48e461f42a59bd288f58debf771a670"},{url:"/js/45.d117babb.js",revision:"f618aa7c6b53c97f793cd64561500683"},{url:"/js/46.e238e661.js",revision:"c70d1769562cfb831cfad5a0a01b0576"},{url:"/js/47.36afa042.js",revision:"164faa738ac9ee836b0c05a2914b8276"},{url:"/js/48.e3838c51.js",revision:"b9ac1a305b711feefc940a6aa7a60352"},{url:"/js/49.805213c4.js",revision:"d5ba38043d1f732594d345e9952dcc3c"},{url:"/js/5.e7a632dc.js",revision:"6c5357d78834cc4393aece397cc696a3"},{url:"/js/6.519f07db.js",revision:"230436c0032daa33824841a0d207a534"},{url:"/js/7.ec215d80.js",revision:"21714517b5baecbeb992511a46f28f4b"},{url:"/js/8.dad916e6.js",revision:"bbc46cb7c16c81598b9b59f4684b3093"},{url:"/js/9.f95c78f7.js",revision:"d1645fcdd71ae6072578469df84843aa"},{url:"/js/app.e3475ffe.js",revision:"cd8efbef0043e8d0cc23e564d0776503"},{url:"/js/chunk-common.93b2522f.js",revision:"0b2c2e18cb5a23a09b201660fd8fe914"},{url:"/js/vendor.cf79502f.js",revision:"e1cab395e730fcfa099b2af8fa136f33"},{url:"/manifest.json",revision:"7af52afa87748f271084872c06a37613"},{url:"/static/banner-default.jpg",revision:"d0d2d843fe60b59298d0a37233229b67"},{url:"/static/material.png",revision:"a700e98fc6da7c5b8e71a6ee62f5bd94"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.php"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
