if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise((async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},a=(a,i)=>{Promise.all(a.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(a)};self.define=(a,r,d)=>{i[a]||(i[a]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+a.slice(1)};return Promise.all(r.map((a=>{switch(a){case"exports":return i;case"module":return c;default:return e(a)}}))).then((e=>{const a=d(...e);return i.default||(i.default=a),i}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/04/13/hello-world/index.html",revision:"2c17beb3fe03e422580bda3c0470b90a"},{url:"2021/04/13/images/index.html",revision:"380f560db9a00b87cbcdc695e101ec3d"},{url:"2021/04/13/iu/index.html",revision:"40390c73d54b3012b9cdccd6d9379820"},{url:"2021/04/15/李知恩的男朋友/index.html",revision:"4d79a4abf4be5b82ab6fb9d10947ed57"},{url:"2021/06/24/今天6-9号/index.html",revision:"6ff496d0f83411b586f8552768c06ad7"},{url:"404.html",revision:"7b0057c72da5a773d02b0e6a7a2e707d"},{url:"about/index.html",revision:"5876c063c27122bd15242f1d32db5b61"},{url:"archives/2021/04/index.html",revision:"43628fc457b17cb912cc508532716b43"},{url:"archives/2021/06/index.html",revision:"302ca6b84944f69ee44e8e83a5b9b3d5"},{url:"archives/2021/index.html",revision:"a8db003db7ce4a44a68a2af451bbf790"},{url:"archives/index.html",revision:"a5b42e5dede4ac81243e4721a2e068bb"},{url:"categories/hello-world/index.html",revision:"bc346ed25eab6ba3a45c7d7b88fc4fea"},{url:"categories/image/index.html",revision:"023af112872f9443c45695a07a55cf76"},{url:"categories/index.html",revision:"1ec671fededda98b1f5c6420670d1b08"},{url:"categories/IU-iu/index.html",revision:"b821c73dea7462e2d1c0acddff000706"},{url:"categories/今天6-9号/index.html",revision:"35906991c81e0f9e074f9a7d3c68a568"},{url:"categories/李知恩/index.html",revision:"d88af4f643ce1281dd5ef23f36903d36"},{url:"css/font-awesome-4.7.0/css/font-awesome.css",revision:"c495654869785bc3df60216616814ad1"},{url:"css/font-awesome-4.7.0/css/font-awesome.min.css",revision:"269550530cc127b6aa5a35925a7de6ce"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.eot",revision:"674f50d287a8c48dc19ba404d20fe713"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.svg",revision:"912ec66d7572ff821749319396470bde"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf",revision:"b06871f281fee6b241d60582ae9369b9"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff",revision:"fee66e712a8a08eef5805a46892932ad"},{url:"css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff2",revision:"af7ae505a9eed503f8b8e6982036873e"},{url:"css/index.css",revision:"5a2a52d1d906915c2c049a457f8608e1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"image/2/1609046896790.jpg",revision:"5285070fb9b866068ed03964d1223c62"},{url:"image/2/1615249544123.jpg",revision:"257168b7080a31ef7248d8edb81cd143"},{url:"image/2/wallhaven-1kpx93.jpg",revision:"242c8f03435315128ad9aa15ad18e5cb"},{url:"image/2/wallhaven-1kpxgw.jpg",revision:"645194f668482585c203b5a2ee5eafa3"},{url:"image/2/wallhaven-1kpxkg.jpg",revision:"4eb4f8c0cb401ee29acfecde5894a7fe"},{url:"image/2/wallhaven-3zl5lv.jpg",revision:"7c44fe35cd26309bbbea71699e31b714"},{url:"image/2/wallhaven-3zl5zv.jpg",revision:"2b7329ca171acaaadde3a7e823b9137d"},{url:"image/2/wallhaven-6od2lq.jpg",revision:"f5c417e7dc7ec7d2e9f413a80e8e3e61"},{url:"image/2/wallhaven-9md8mk.jpg",revision:"dbb3aae5780c4da14d62e2dfdd99be70"},{url:"image/40w.jpg",revision:"0919c7b704a2cab3edd88567a2228f88"},{url:"image/640.png",revision:"18ade84f11608522b242b56dbea15817"},{url:"image/icon/1609046896790.png",revision:"701c360c85844cefb9c120275abf94f6"},{url:"image/icon/1615249544123.png",revision:"791a95a29927fade32dbe8e079719a69"},{url:"image/icon/34769-wallhaven-1kpxpg.png",revision:"537585b39b41f5cd0296616febe04d74"},{url:"image/icon/35424-wallhaven-l38k8l.png",revision:"84aec5828d102526d9bee18b5c80236b"},{url:"image/icon/48660-wallhaven-k7x1rq.png",revision:"59ff89841cd509bf46629fc03962a3a9"},{url:"image/icon/wallhaven-72pwj3.png",revision:"d1b5bc1dca1a4789dce2a847dd9ab6ad"},{url:"image/icon/wallhaven-j3xkzq.png",revision:"99fb88c0f5a0db550a0252c58c8e7bb7"},{url:"image/icon/wallhaven-k7x1o7.png",revision:"6eeb610301a4a098ce01871d9e25fa9a"},{url:"image/icon/wallhaven-wqe6m7.png",revision:"cc5487d0e11612fc76a9a1ab7f927116"},{url:"image/src=http___5b95225.cdn.sohucs.jpg",revision:"1421cde9a988b14651fe946493820bc1"},{url:"image/v21440w.jpg",revision:"207d0b2392d7b1f7ce136c6d0e7a3c82"},{url:"image/wallhaven-28ymj6_1920x1080.jpg",revision:"527ca37ccd5db439793ff5222625a391"},{url:"image/wallhaven-8o5lgy_1920x1080.jpg",revision:"ba963fc43e81d1d5db8f246adf59edf8"},{url:"image/wallhaven-9mdlwk_1920x1080.jpg",revision:"b4fdb0b12d0b18690fc8da0ae1509df2"},{url:"image/wallhaven-e7xdwk.jpg",revision:"99eb68ab5eac5633fd42cfc1957f6249"},{url:"image/wallhaven-e7xeew.jpg",revision:"6feef31ba5ae9f492dba8b4391ea6377"},{url:"image/wallhaven-g7p9p3.jpg",revision:"bc315ffc18fa8028c7a5611cde2016a7"},{url:"image/wallhaven-l38kvy.jpg",revision:"ce71c657e9d2528358b6356f41b3c266"},{url:"image/wallhaven-pko8lm_1920x1080.jpg",revision:"45ea00df288e528d1148bc929eefccbb"},{url:"image/wallhaven-v9qrr8_1920x1080.jpg",revision:"dda80dbf3da0aad87d743000cc8fed02"},{url:"image/wallhaven-v9qyql.jpg",revision:"5e5a91f4d5a5eae0388ea4341a4bd9ae"},{url:"image/wallhaven-wqery6_1920x1080.jpg",revision:"5954e0d0da1d216d7741d67fee51ff8a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/weicat.png",revision:"087fe430545456da16b1a8ec9c1bfbd3"},{url:"img/zfb.jpg",revision:"02fa4fd432c8469861b05541e351cbb8"},{url:"imgs/img_three.html",revision:"cdb6c0400c30a13e0a77400415bd815f"},{url:"imgs/img_two.html",revision:"3289e40701e16aff90571bc898911d01"},{url:"imgs/img.html",revision:"6229174e5fddc084d6ab1b29ae5bc789"},{url:"imgs/index.html",revision:"f20d58e9727fc9b94e47d3adf43929e4"},{url:"index.html",revision:"56077aa0ba2c4ba1c1329a9169106531"},{url:"js/busuanzi.pure.mini.js",revision:"d07f740093307e8d400f4e9935da0441"},{url:"js/main.js",revision:"5641b1a6b817df7d81f465c27ed538d9"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"js/valineLete.js",revision:"e4a3b1611275f52dc187fb6f7b9d200b"},{url:"link/index.html",revision:"9be7849ec0dc19b2bf86c61fdbabdf25"},{url:"tags/6-9/index.html",revision:"d00d494a8c3aee7660b9790f25be5a2c"},{url:"tags/Hexo-教程/index.html",revision:"626fdf43d53ef4faa98a7960136c32d2"},{url:"tags/image-图片/index.html",revision:"ea397e73851ef277ce04a11335533f39"},{url:"tags/index.html",revision:"ea02a8acdaeef711cfb0eb62f6a5d58e"},{url:"tags/iu-明星-男盆友/index.html",revision:"ebe19a7d87c4366534ec9e15ca09dc64"},{url:"tags/iu-明星/index.html",revision:"2b1e0eea95a12efceb73cff1496ee03b"}],{})}));
//# sourceMappingURL=service-worker.js.map
