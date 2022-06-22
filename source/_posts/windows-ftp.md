---
title: Windows配置FTP
date: 2022-05-17 15:29:35
aplayer: true
tags:
  -踩坑
  -技术
keywords: "Windows配置FTP,FTP"
cover: /img/89.jpg
top_img: /img/89.jpg
toc_number: true
categories: "踩坑"
aside: true
comments: true
---

# 1.Windows配置FTP

> 使用win11的来操作，不过和win10差不多一样。
>
>  注意：**需要其他电脑能通过访问，必须在一个局域网。**

​			

第一步：找到控制面板，找到程序。

![image-20220415161644677](/./img/lat/image-20220415161644677.png)

打开启动或关闭Windows功能，弹出选择如图所示，确认。

![image-20220415161856560](/./img/lat/image-20220415161856560.png)

第一次安装可能会重启，重启之后找到IIS服务管理器。（直接搜索iis）

![image-20220415162257798](/./img/lat/image-20220415162257798.png)

打开点开找到网站，右键网站选择添加FTP站点，并按照如图所示填写。

![image-20220415162638902](/./img/lat/image-20220415162638902.png)

然后下一步，输入自己的本机ip，无ssl。

![image-20220415162902342](/./img/lat/image-20220415162902342.png)

然后继续下一页，选择基本的方式，指定用户方式，权限全勾选，完成之后。

![image-20220415163133913](/./img/lat/image-20220415163133913.png)

完成后选择基本设置，配置特定用户。

![image-20220415163410074](/./img/lat/image-20220415163410074.png)

用户为之前所指定用户账号，点设置并输入此账号登录密码。

![image-20220415163558214](/./img/lat/image-20220415163558214.png)

点击测试设置，查看都为绿沟就ok了。

![image-20220415163647948](/./img/lat/image-20220415163647948.png)

## 其他设置点: ## 
找到防火墙，控制面板\系统和安全\Windows Defender 防火墙\允许的应用，沟选FTP服务和你刚刚所建FTP全勾上,并把后面的沟上。

![image-20220415164010283](/./img/lat/image-20220415164010283.png)

使用cmd打开，输入ftp 本机ip，输入指定账号，密码，如图所示就是成功了。

![image-20220415164307698](/./img/lat/image-20220415164307698.png)

然后在文件资源管理器输入 ftp://本机ip 进入到文件夹中。浏览器上输入也可以（第一次都会让你输入用户名和密码，记住之后就可以了吧）

![image-20220415164552509](/./img/lat/image-20220415164552509.png)

最后打开防火墙配置入站规则，点击高级设置进入，新建规则规则类型选择端口，协议和端口输入之前在ftp默认的21端口

然后一直下一页就OK了。

# 2.nginx映射FTP图片地址

> 比如nginx文件夹在E盘，ftp或者图片存放在在D盘，前端去加载ftp的图片地址会404；

## 解决: ##

​			打开nginx  -   conf   -    nginx.conf，添加如下配置。

```XML
location /ftp/ {
				alias D:\ftp/;     # 当不在同一目录下使用；同一目标使用root
				allow all;
				autoindex on;
				add_header Access-Control-Allow-Origin *;
		}
```

**ps:将root后面的地址改成 root D:\imagedata/; 是不起作用的。**

