---
title: Mongodb服务教程
date: 2022-05-17 15:29:35
aplayer: true
tags:
  -踩坑
  -技术
keywords: "Mongodb服务教程"
cover: /img/80.jpg
top_img: /img/80.jpg
toc_number: true
aside: true
categories: "踩坑"
comments: true
---
### 1.Mongodb服务教程

​    

    进入页面  https://www.mongodb.com/download-center/community ，我安装这个版本

选择如下：![](/./img/mon/20200405141039793.png)

   下载后文件如右 ： ![](/./img/mon/20200405141118829.png)

   双击开始安装（以下几步注意，其他全部next）：

<img src="/./img/mon/20200405141302768.png" style="zoom:50%;" />

 这里我选择的是自定义安装，选择你想安装到的位置

<img src="/./img/mon/20200405141441759.png" style="zoom:50%;" />

 点击ok，然后点击next 点击之后 新版的Mongodb会主动在安装目录下创建log和data文件，这相比较早期版本有了改善 ，早期需要自己手动创建  **但我们仍然需要在data下创建db文件夹   笔者的在E:\MongoDB\data\db（记住一定要再建个db文件夹）**

![](/./img/mon/20200405141711725.png)

 **重重之重（下图一定要取消安装，compass客户端可视化界面我会另外下载。你要是选中了，那就是安装了一天也完成不了）**

![](/./img/mon/20200405141917239.png)

 最后安装成功会弹出一个警告框，选中 Ignore 就好

![](/./img/mon/2020040514190079.png)

 至此，MongoDB客户端已经安装完毕

**由于我们已经创建了C:\MongoDB\data\db文件夹  这里就不需要再创建  否者还要创建  然后在cmd进入C:\MongoDB\bin目录下（在windows资源管理器中shift+右键打开powershell也行）然后执行mongod -dbpath C:\MongoDB\data\db 命令  如下图（这条命令是开启服务，它会一直运行，只要你要使用Mongodb，这个窗口就不能关）**

![](/./img/mon/20200405142808709.png)


    然后在bin目录下另外打开一个cmd  在bin目录下执行mongo命令，之后就能正常使用了！！！

![](/./img/mon/20200405143056560.png)



 正如你所看到的，以上步骤已经可以完全实现使用MongoDB的需求。你要是想的话可以继续安装可视化界面，毕竟操作起来更方便。

### 2.开始安装MongoDB Compass：

直接解压缩：

![](/./img/mon/20200405144015752.png)


