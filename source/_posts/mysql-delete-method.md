---
title: MySQL数据库如何快速删除千万，亿条数据
date: 2021-07-27 16:29:35
aplayer: true
tags:
  -mysql
  -技术
keywords: "MySQL数据库如何快速删除千万，亿条数据,mysql删除"
cover: /img/91.jpg
top_img: /img/91.jpg
toc_number: true
aside: true
comments: true
---

## **前情提要** ##
>MySQL数据库因生产原因需要删除大量数据，因数据量太大接近上亿条，用常规delete删除小数据可以，删除几千万大数据量会非常慢，
并且不会释放出磁盘空间，还需要optimize或repair来压缩数据表来释放硬盘空间，时间更长，需要几天时间，太慢了！
因此采用新建表，导入无需删除的数据，然后删除老表，把新表改名为老表，步骤如下：

**1.基于原表新建新表。**

```sql
create table table_2 like table_1;
```

**2.原表数据插入到新表（几千万数据可以分批插入，一次插入50万最佳，mysql的数据处理能力也是有限的），可以根据where条件查询后插入！**

```sql
insert into table_2 select * from table_1 where id>500000 and id<=550000;
```

​      可以选择对自己有用的数据插入新表！

**3.drop删除原表**

```sql
drop table table_1;
```

**4.重命名新表为"**table_2**"**

```sql
alter table table_2 rename to table_1;
```

以上就是快速删除操作流程!

