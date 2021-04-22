/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/04/03/hello-world/index.html","0c26697afdeeadc82bae2e17288398b2"],["/2021/04/06/iu/index.html","c83712318adcd5f2210a8d4d6d7e20a6"],["/2021/04/13/李知恩的男朋友/index.html","9fafcf6d0192f3a462ac06f330acfc0a"],["/404.html","843996b2b9def1a1901df9d69c55133f"],["/about/index.html","00a81c3cb748d4258713d6a1b078b97d"],["/archives/2021/04/index.html","212291a06a3168d44baeade4de1249a1"],["/archives/2021/index.html","2f8275fac073962488cf0b050914c036"],["/archives/index.html","76b720e5f6f0ea808f5df0e9f9e8fb4c"],["/categories/IU-iu/index.html","45eb31758e7a707b75e9c22a2f6bb9c2"],["/categories/hello-world/index.html","a7fd534d57fe42111861915a94fb54c7"],["/categories/index.html","b110a3f62e62110d8fa8032d29552a84"],["/categories/李知恩/index.html","817c3683401524cf15e77c3ef00d8abf"],["/css/font-awesome-4.7.0/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/css/font-awesome-4.7.0/css/font-awesome.min.css","c97c3824a8d6c5eb936727310d68fe87"],["/css/font-awesome-4.7.0/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/font-awesome-4.7.0/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/css/font-awesome-4.7.0/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/font-awesome-4.7.0/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/index.css","256d39d86be60c32a2bed11fd78feeac"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/2/1609046896790.jpg","5285070fb9b866068ed03964d1223c62"],["/image/2/1615249544123.jpg","257168b7080a31ef7248d8edb81cd143"],["/image/2/wallhaven-1kpx93.jpg","242c8f03435315128ad9aa15ad18e5cb"],["/image/2/wallhaven-1kpxgw.jpg","645194f668482585c203b5a2ee5eafa3"],["/image/2/wallhaven-1kpxkg.jpg","4eb4f8c0cb401ee29acfecde5894a7fe"],["/image/2/wallhaven-3zl5lv.jpg","7c44fe35cd26309bbbea71699e31b714"],["/image/2/wallhaven-3zl5zv.jpg","2b7329ca171acaaadde3a7e823b9137d"],["/image/2/wallhaven-6od2lq.jpg","f5c417e7dc7ec7d2e9f413a80e8e3e61"],["/image/2/wallhaven-9md8mk.jpg","dbb3aae5780c4da14d62e2dfdd99be70"],["/image/src=http___5b95225.cdn.sohucs.jpg","1421cde9a988b14651fe946493820bc1"],["/image/wallhaven-e7xeew.jpg","6feef31ba5ae9f492dba8b4391ea6377"],["/image/wallhaven-g7p9p3.jpg","bc315ffc18fa8028c7a5611cde2016a7"],["/image/wallhaven-l38kvy.jpg","937014f8e6fecafbf749cb37c17a316f"],["/image/wallhaven-l38kvy.png","8c056deb6eb07ea42cdc021f38bfdd2c"],["/image/wallhaven-v9qyql.jpg","5e5a91f4d5a5eae0388ea4341a4bd9ae"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/weicat.png","087fe430545456da16b1a8ec9c1bfbd3"],["/img/zfb.jpg","02fa4fd432c8469861b05541e351cbb8"],["/imgs/img.html","b4e8432b795bcb9309286b157fd19ed6"],["/imgs/index.html","0b45602ca12068f3443a3110c8434aa1"],["/index.html","0d29de70c43172473d59e42b48c69e04"],["/js/busuanzi.pure.mini.js","328ea138e9f527279c76c1ab5c83c27a"],["/js/main.js","a4ce50719beab06055d5bcfecfa5d7f5"],["/js/search/algolia.js","9f72ef8b8fdda25a767a787cd4bf9121"],["/js/search/local-search.js","8bd55cc045631e976068e3978455cfa5"],["/js/tw_cn.js","0310e94ad716c794eadcb0fddfab0a2a"],["/js/utils.js","9dcc0d35ac1df5097adcc2859e897a1e"],["/js/valineLete.js","fd19eb1e8fb089342198d0221dc0faeb"],["/link/index.html","0b477915948bd56f7764e22b6623ff50"],["/music/index.html","52a506f8c230bd218d277a73be656217"],["/service-worker.js","c7e3011f03bd3990fdb4d4521484858c"],["/sw-register.js","6e5b3aba5dc0ce2d2bbbe35e513ac96b"],["/tags/Hexo-教程/index.html","338dd5d94aa8a0379d2291ab60c4f7a4"],["/tags/index.html","7bee454c800c356cd67f0cc296cb26b8"],["/tags/iu-明星-男盆友/index.html","42b73950414f42263efe6ca481fe78c7"],["/tags/iu-明星/index.html","b466f99c98532e51510247f9311e5d9e"],["/workbox-f7715658.js","0497fcadf6b83c75ec4df94ab5067d20"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
