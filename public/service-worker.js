if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,r,d)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return a;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/03/hello-world/index.html",revision:"4c9e052e56a29f6017573426a709a83e"},{url:"2021/04/06/iu/index.html",revision:"bef6d7ef266cbc19e4655e40389738ef"},{url:"2021/04/13/李知恩的男朋友/index.html",revision:"338d710a00d04342a8c49fd2bcb61a58"},{url:"2021/04/26/images/index.html",revision:"cbbf590329d39765a47c39e952c60864"},{url:"404.html",revision:"a8706d414d14f3a78e5230d63d99ae57"},{url:"about/index.html",revision:"1f4ac11432db0058164e9ecdfc749e8a"},{url:"archives/2021/04/index.html",revision:"4b228bb1759d510546015b105e8c48b7"},{url:"archives/2021/index.html",revision:"52d9000a83bcbd3c5360fcf7a51a112b"},{url:"archives/index.html",revision:"f3c8170233467ecf20957e46b42c9f24"},{url:"categories/hello-world/index.html",revision:"a4021de144276c78b2c80e8ebd1e8bcb"},{url:"categories/image/index.html",revision:"2670474f16160d97fbf7a2065cca0ac9"},{url:"categories/index.html",revision:"2c7c174a14fbc82dc9a90e01f91198d1"},{url:"categories/IU-iu/index.html",revision:"26d865ecd89c8470cb68589cfde1b51f"},{url:"categories/李知恩/index.html",revision:"021ad32dc3980b3d115bd7a07dea2b3d"},{url:"css/font-awesome-4.7.0/css/font-awesome.css",revision:"c495654869785bc3df60216616814ad1"},{url:"css/font-awesome-4.7.0/css/font-awesome.min.css",revision:"269550530cc127b6aa5a35925a7de6ce"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/index.css",revision:"34b175b7ed940bca385272ac9b15e141"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/2/1609046896790.jpg",revision:"5285070fb9b866068ed03964d1223c62"},{url:"image/2/1615249544123.jpg",revision:"257168b7080a31ef7248d8edb81cd143"},{url:"image/2/wallhaven-1kpx93.jpg",revision:"242c8f03435315128ad9aa15ad18e5cb"},{url:"image/2/wallhaven-1kpxgw.jpg",revision:"645194f668482585c203b5a2ee5eafa3"},{url:"image/2/wallhaven-1kpxkg.jpg",revision:"4eb4f8c0cb401ee29acfecde5894a7fe"},{url:"image/2/wallhaven-3zl5lv.jpg",revision:"7c44fe35cd26309bbbea71699e31b714"},{url:"image/2/wallhaven-3zl5zv.jpg",revision:"2b7329ca171acaaadde3a7e823b9137d"},{url:"image/2/wallhaven-6od2lq.jpg",revision:"f5c417e7dc7ec7d2e9f413a80e8e3e61"},{url:"image/2/wallhaven-9md8mk.jpg",revision:"dbb3aae5780c4da14d62e2dfdd99be70"},{url:"image/40w.jpg",revision:"0919c7b704a2cab3edd88567a2228f88"},{url:"image/640.png",revision:"18ade84f11608522b242b56dbea15817"},{url:"image/icon/1609046896790.png",revision:"701c360c85844cefb9c120275abf94f6"},{url:"image/icon/1615249544123.png",revision:"791a95a29927fade32dbe8e079719a69"},{url:"image/icon/34769-wallhaven-1kpxpg.png",revision:"537585b39b41f5cd0296616febe04d74"},{url:"image/icon/35424-wallhaven-l38k8l.png",revision:"84aec5828d102526d9bee18b5c80236b"},{url:"image/icon/48660-wallhaven-k7x1rq.png",revision:"59ff89841cd509bf46629fc03962a3a9"},{url:"image/icon/wallhaven-72pwj3.png",revision:"d1b5bc1dca1a4789dce2a847dd9ab6ad"},{url:"image/icon/wallhaven-j3xkzq.png",revision:"99fb88c0f5a0db550a0252c58c8e7bb7"},{url:"image/icon/wallhaven-k7x1o7.png",revision:"6eeb610301a4a098ce01871d9e25fa9a"},{url:"image/icon/wallhaven-wqe6m7.png",revision:"cc5487d0e11612fc76a9a1ab7f927116"},{url:"image/src=http___5b95225.cdn.sohucs.jpg",revision:"1421cde9a988b14651fe946493820bc1"},{url:"image/v21440w.jpg",revision:"207d0b2392d7b1f7ce136c6d0e7a3c82"},{url:"image/wallhaven-28ymj6_1920x1080.jpg",revision:"527ca37ccd5db439793ff5222625a391"},{url:"image/wallhaven-8o5lgy_1920x1080.jpg",revision:"ba963fc43e81d1d5db8f246adf59edf8"},{url:"image/wallhaven-9mdlwk_1920x1080.jpg",revision:"b4fdb0b12d0b18690fc8da0ae1509df2"},{url:"image/wallhaven-e7xdwk.jpg",revision:"99eb68ab5eac5633fd42cfc1957f6249"},{url:"image/wallhaven-e7xeew.jpg",revision:"6feef31ba5ae9f492dba8b4391ea6377"},{url:"image/wallhaven-g7p9p3.jpg",revision:"bc315ffc18fa8028c7a5611cde2016a7"},{url:"image/wallhaven-l38kvy.jpg",revision:"ce71c657e9d2528358b6356f41b3c266"},{url:"image/wallhaven-pko8lm_1920x1080.jpg",revision:"45ea00df288e528d1148bc929eefccbb"},{url:"image/wallhaven-v9qrr8_1920x1080.jpg",revision:"dda80dbf3da0aad87d743000cc8fed02"},{url:"image/wallhaven-v9qyql.jpg",revision:"5e5a91f4d5a5eae0388ea4341a4bd9ae"},{url:"image/wallhaven-wqery6_1920x1080.jpg",revision:"5954e0d0da1d216d7741d67fee51ff8a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/weicat.png",revision:"087fe430545456da16b1a8ec9c1bfbd3"},{url:"img/zfb.jpg",revision:"02fa4fd432c8469861b05541e351cbb8"},{url:"imgs/img_three.html",revision:"dbd0800c587f87196ae71d3741b26602"},{url:"imgs/img_two.html",revision:"582cd3f125cfa22ddb1d895374f208f5"},{url:"imgs/img.html",revision:"efc01f57dffc2d256ad754f2c25f2f2d"},{url:"imgs/index.html",revision:"bff6823a913b59d20a5765fb5c691759"},{url:"index.html",revision:"54a85801d5bc74e632cf314ec9cf0ce2"},{url:"js/busuanzi.pure.mini.js",revision:"d07f740093307e8d400f4e9935da0441"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"js/valineLete.js",revision:"a6fac396130c5300be32be52e10a7923"},{url:"link/index.html",revision:"529570159d8818c55dbe9146210f14a7"},{url:"tags/Hexo-教程/index.html",revision:"761cddac9b5147775b2aa51ff1b6d7d6"},{url:"tags/image-图片/index.html",revision:"d99279555614a55e788f9db6003ac9d8"},{url:"tags/index.html",revision:"c07f2105f5d85e319528d591998f6d84"},{url:"tags/iu-明星-男盆友/index.html",revision:"11e7041323de55b38aeed872c010939d"},{url:"tags/iu-明星/index.html",revision:"25e1055444760cd468125f8828358c93"}],{})}));
//# sourceMappingURL=service-worker.js.map
