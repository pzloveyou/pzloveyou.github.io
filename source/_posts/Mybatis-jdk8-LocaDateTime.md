---
title: Mybatis映射LocalDateTime所出现的问题
date: 2021-07-28 11:38:35
aplayer: true
tags:
  -mybatis
  -技术
keywords: "Mybatis映射LocalDateTime所出现的问题,mybatis映射"
cover: /img/wallhaven-wq1gk7_1920x1080_1652683488.jpg
top_img: /img/wallhaven-wq1gk7_1920x1080_1652683488.jpg
toc_number: true
aside: true
comments: true
---
  ## **Mybatis映射LocalDateTime所出现的问题**

 使用JDK1.8的LocalDateTime、LocalDate、LocalTime。

#### **问题点**

在mybatis中传入参数为LocalDateTime，查询返回结果为空。

#### **如何解决**

   mybatis在3.4.6之前是不支持LocalDateTime，所以更改pom.xml文件中mybatis的版本就可以解决。

   ```xml
   <!--mybatis依赖 -->
   		<dependency>
   			<groupId>org.mybatis</groupId>
   			<artifactId>mybatis</artifactId>
   			<version>3.5.7</version>
   		</dependency>
   ```

#### **或者低于3.4.6版本**

   加入如下依赖

   ```xml
   <dependency>
   	<groupId>org.mybatis</groupId>
   	<artifactId>mybatis-typehandlers-jsr310</artifactId>
   	<version>1.0.1</version>
   </dependency>
   ```

   以上仅在mybatis 3.4.0版本中测试有效。

   ​	

#### **如果使用的mybatis版本低于3.4.0，则还需要在配置文件添加如下:**

   ```xml
   <typeHandlers>
   	<typeHandler handler="org.apache.ibatis.type.InstantTypeHandler" />
   	<typeHandler handler="org.apache.ibatis.type.LocalDateTimeTypeHandler" />
   	<typeHandler handler="org.apache.ibatis.type.LocalDateTypeHandler" />
   	<typeHandler handler="org.apache.ibatis.type.LocalTimeTypeHandler" />
   	<typeHandler handler="org.apache.ibatis.type.OffsetDateTimeTypeHandler" />
   	<typeHandler handler="org.apache.ibatis.type.OffsetTimeTypeHandler" />
   	<typeHandler handler="org.apache.ibatis.type.ZonedDateTimeTypeHandler" />
   </typeHandlers>
   ```

   

   

