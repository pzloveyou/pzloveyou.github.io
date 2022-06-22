---
title: Mongodb 集群部署
date: 2022-05-17 15:29:35
aplayer: true
tags:
  -踩坑
  -技术
keywords: "Mongodb 集群部署,Mongodb"
cover: /img/7.jpg
top_img: /img/7.jpg
toc_number: true
categories: "踩坑"
aside: true
comments: true
---
# Mongodb 集群部署

**Mongodb 版本>=4.2windows不以服务式安装**

#### 一、安装完成后设置目录下data里面间分区

1.建立mongodb1文件夹

2.在mongodb1下建立 conf与log文件夹

3.在conf文件夹下建立 mongodb.conf

内容为：

```xml
dbpath=D:\BtSoft\mongodb\data\mongodb1 #修改路径
logpath=D:\BtSoft\mongodb\data\mongodb1\log\mongodb.log #修改路径
logappend=true
bind_ip=0.0.0.0
port=27011 #修改端口
shardsvr=true
journal=true
replSet=skeqi
```

3.复制mongodb1为 mongodb2 mongodb3 并分别修改 mongodb.conf 里的路径与端口（同样操作）

#### 二、准备启动

进入mongod\bin下，使用管理员启动cmd分别输入

```
mongod --config D:\BtSoft\mongodb\data\mongodb1\conf\mongodb.conf --install --serviceName "MongoDB1"
mongod --config D:\BtSoft\mongodb\data\mongodb2\conf\mongodb.conf --install --serviceName "MongoDB2"
mongod --config D:\BtSoft\mongodb\data\mongodb3\conf\mongodb.conf --install --serviceName "MongoDB3"
```

然后进入服务，打开对应的3个MongoDB

在cmd（mongod\bin目录下）输入 mongo –port 27011

```xml
use admin;
cfg = {_id: "skeqi",members:[{_id: 0,host: '192.168.7.27:27011',priority: 2},{_id: 1,host: '192.168.7.27:27012',priority: 1},{_id: 3,host: '192.168.7.27:27013',arbiterOnly: true}]};
rs.initiate(cfg)
rs.status()
```

