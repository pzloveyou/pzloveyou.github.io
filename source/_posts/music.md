---
title: 记录音乐配置在hexo-buffter
aplayer: true
tags:
  -music
  -音乐
keywords: "hexo音乐,hexo音乐配置hexo-buffter"  
cover: /img/wallhaven-y85z5g_1920x1080.jpg
toc_number: true
date: 2021-07-10 11:17:00
updated:
categories: "music"
aside: true
top_img: /img/wallhaven-y85z5g_1920x1080.jpg
---

>hexo音乐插件 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)
>或者看[官方文档](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FMoePlayer%2Fhexo-tag-aplayer%2Fblob%2Fmaster%2Fdocs%2FREADME-zh_cn.md)

### 1.在md文件使用: ###
```markdown
{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %}
```

### 2.使用html: ###
```html
 <div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="false" muted></div>
```
### 3.配置全局吸底 ###
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

### 调整位置 ###

```css
#toggle-sidebar {
  bottom: 80px
}
```

>最后，如果你想切换页面时,音乐不会中断。就把主题配置文件的**pjax**改为**true**

### 参数解释 ###

| 选项 | 默认 | 描述 |
|:----|:----|:----|
|data-id| 必须值 |歌曲 id / 播放列表 id / 相册 id / 搜索关键字|
|data-server|必须值|音乐平台: netease, tencent, kugou, xiami, baidu|
| data-type | 必须值  | song, playlist, album, search, artist  |
| data-fixed | false	  | 开启固定模式 |
| data-mini | false  |  开启迷你模式 |
| data-autoplay  | false  | 自动播放，移动端浏览器暂时不支持此功能  |
|data-theme  | #2980b9	  | 	主题颜色  |
| data-loop |  all |  列表循环模式：all, one,none |
| data-order | list  |  列表播放模式： list, random |
| data-preload | auto  |  values: 'none', 'metadata', 'auto |
|data-volume  | 0.7  | 播放器音量  |
| data-mutex | true  |该选项开启时，如果同页面有其他 aplayer 播放，该播放器会暂停  |
| data-lrctype |  0 | 歌词格式类型  |
| data-listfolded |  false |  指定音乐播放列表是否折叠 |
| data-listmaxheight |  340px |  播放列表的最大长度 |
| data-storagename |  metingjs |  LocalStorage 中存储播放器设定的键名 |
>require代表着這些參數是必須要使用的，其它的參數則可以根據自己需要配置。
 
> 配置全局吸底，data-fixed和data-mini也必須配置，配置為true
 
>如果使用Pjax，則在class裏需添加no-destroy，這樣防止切換頁面時Aplayer被銷毀
