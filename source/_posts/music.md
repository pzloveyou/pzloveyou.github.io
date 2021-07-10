---
title: 记录音乐配置在hexo-buffter
aplayer: true
tags:
  -music
  -音乐
keywords: "图片,image"  
cover: https://cdn.jsdelivr.net/gh/pzloveyou/cdn/image/wallhaven-y85z5g_1920x1080.png
toc_number: true
date: 2021-07-10 11:17:00
updated:
categories: "music"
top_img: transparent
---

>hexo音乐插件 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)
>或者看[官方文档](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FMoePlayer%2Fhexo-tag-aplayer%2Fblob%2Fmaster%2Fdocs%2FREADME-zh_cn.md)

#### 1.在md文件使用：
```markdown
{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %}
```

#### 2.使用html：
```html
 <div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="false" muted></div>
```
#### 3.配置全局吸底
>在主题配置文件中找到 **aplayerInject**,**enable**设为**true**和**per_page**设为**true**
```yaml
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
```
>在hexo配置文件中找到 **aplayer**
```yaml
aplayer:
  meting: true
  asset_inject: false
```
>把aplayer代碼插入到主題配置文件的**inject.bottom**去
 ```yaml
inject:
  head:
  bottom:
    - <div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div>
```

#### 调整位置

```css
#toggle-sidebar {
  bottom: 80px
}
```

>最后，如果你想切换页面时,音乐不会中断。就把主题配置文件的**pjax**改为**true**

### 参数解释

| 选项 | 默认 | 描述 |
|:----|:----|:----|
|data-id| require |song id / playlist id / album id / search keyword|
|data-server|require|music platform: netease, tencent, kugou, xiami, baidu|
| data-type | require  | song, playlist, album, search, artist  |
| data-fixed | false	  |  enable fixed mode |
| data-mini | false  |  enable mini mode |
| data-autoplay  | false  | audio autoplay  |
|data-theme  | #2980b9	  | 	main color  |
| data-loop |  all |  player loop play, values: 'all', 'one', 'none' |
| data-order | list  |  player play order, values: 'list', 'random' |
| data-preload | auto  |  values: 'none', 'metadata', 'auto |
|data-volume  | 0.7  | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves  |
| data-mutex | true  | prevent to play multiple player at the same time, pause other players when this player start play  |
| data-lrctype |  0 | lyric type  |
| data-listfolded |  false |  indicate whether list should folded at first |
| data-listmaxheight |  340px |  list max height |
| data-storagename |  metingjs |  localStorage key that store player setting |
>require代表着這些參數是必須要使用的，其它的參數則可以根據自己需要配置。
 
> 配置全局吸底，data-fixed和data-mini也必須配置，配置為true
 
>如果使用Pjax，則在class裏需添加no-destroy，這樣防止切換頁面時Aplayer被銷毀
