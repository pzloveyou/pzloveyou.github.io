---
title: Mybatis-Plus笔记
aplayer: true
tags:
  -笔记
keywords: "Mybatis-Plus"  
cover: /img/79.jpg
toc_number: true
date: 2022-06-22 14:29:00
updated:
categories: "踩坑"
top_img: /img/79.jpg
---


# Mybatis-Plus

> **此版本为Mybatis-Plus(3.0.5)+Spring-Boot(2.6.3)**；**新版本为Mybatis-Plus(3.0.5)，SpringBoot不变**

[MyBatis-Plus (opens new window)](https://github.com/baomidou/mybatis-plus)（简称 MP）是一个 [MyBatis (opens new window)](https://www.mybatis.org/mybatis-3/)的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

- **无侵入**：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
- **损耗小**：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作
- **强大的 CRUD 操作**：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求
- **支持 Lambda 形式调用**：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
- **支持主键自动生成**：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题
- **支持 ActiveRecord 模式**：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
- **支持自定义全局通用操作**：支持全局通用方法注入（ Write once, use anywhere ）
- **内置代码生成器**：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用
- **内置分页插件**：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
- **分页插件支持多种数据库**：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库
- **内置性能分析插件**：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
- **内置全局拦截插件**：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作

# 快速开始

1.创建数据库mybatis-plus

2.新建User表

```sql
DROP TABLE IF EXISTS user;

CREATE TABLE user
(
	id BIGINT(20) NOT NULL COMMENT '主键ID',
	name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
	age INT(11) NULL DEFAULT NULL COMMENT '年龄',
	email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
	PRIMARY KEY (id)
);
DELETE FROM user;
INSERT INTO user (id, name, age, email) VALUES
(1, 'Jone', 18, 'test1@baomidou.com'),
(2, 'Jack', 20, 'test2@baomidou.com'),
(3, 'Tom', 28, 'test3@baomidou.com'),
(4, 'Sandy', 21, 'test4@baomidou.com'),
(5, 'Billie', 24, 'test5@baomidou.com');
```

3.编写项目。初始化项目，springboot

4.配置数据库源

5.pom.xml

```xml
	<properties>
        <java.version>1.8</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
<!--     mybatis-plus核心-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.1</version>
        </dependency>
<!--        代码生成-->
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.4.1</version>
        </dependency>
<!--        代码生成模板-->
        <dependency>
            <groupId>org.apache.velocity</groupId>
            <artifactId>velocity-engine-core</artifactId>
            <version>2.3</version>
        </dependency>
<!--        sql打印分析-->
        <dependency>
            <groupId>p6spy</groupId>
            <artifactId>p6spy</artifactId>
            <version>3.9.1</version>
        </dependency>


        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
```



.......省略



# 配置日志

1.配置文件添加

```yml
mybatis-plus.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```



# CRUD扩展

简单操作不用再写sql，直接使用mybatis-plus封装的方法即可完成简单的crud操作。

Mapper继承BaseMapp<T>;T代表泛型

## CRUD测试

```java
	@Autowired
    private UserMapper userMapper;

	@Test
    void contextLoads() {
        //参数Wrapper，条件构造器
        //查询全部用户
        List<User> users = userMapper.selectList(null);
        users.forEach(System.out::println);
    }

    //测试插入
    @Test
    public void testInsert(){
        User user=new User();
        user.setName("pzy");
        user.setAge(1);
        user.setEmail("2831053223@qq.com");
        int result=userMapper.insert(user);  //自动生成id
        System.out.println(result);
    }
   //测试更新
    @Test
    public void testUpdate(){
        User user=new User();
        user.setId(5L);
        user.setName("pzy");
        user.setAge(1);
        user.setEmail("2831053223@qq.com");
        int result=userMapper.updateById(user);
        System.out.println(result);
    }
    //测试删除
    @Test
    public void testDelete(){
        User user=new User();
        user.setId(5L);
        int result=userMapper.deleteById(user);
        System.out.println(result);
    }
```



##  主键生成策略

​	**雪花算法**:

- ​	snowflake .........

- ​	实体类 @TableId(type = IdType.ID_WORKER) :全局唯一ID;   @TableId(type = IdType.AUTO):自增

  > 其他源码解释

  ```java
  public enum IdType {
      AUTO(0),   //数据库自增id
      NONE(1),    //未设置主键
      INPUT(2),    //手动输入
      ID_WORKER(3),   //默认得全局唯一id
      UUID(4),          //全局唯一id  uuid
      ID_WORKER_STR(5);    //字符串表示法
  }
  ```
  


##  自动填充

创建时间，修改时间！都是自动完成填充.

阿里巴巴开发手册：所有数据库：gmt_create , gmt_modified几乎所有表要具备,而且自动化.

> #### 方式一：数据库级别

​	1.在表中新增字段create_time,update_time;配置默认值

​	2.再次新增 

> ```java
> private Date createTime;
> private Date updateTime;
> ```



> #### 方式二：代码级别

​	1.删除数据库默认值

​	2.实体类添加注解

```java
 	//字段添加填充内容
    @TableField(fill= FieldFill.INSERT)
    private Date createTime;

    @TableField(fill= FieldFill.INSERT_UPDATE)
    private Date updateTime;
```

​	3.编写处理器来处理这个注解

 ```java
@Slf4j
@Component
public class MyMetaObjectHandler implements MetaObjectHandler {

    /**
     * 新增填充策略
     * @param metaObject
     */
    @Override
    public void insertFill(MetaObject metaObject) {
        log.info("start insert fill......");
        //设置字段值
        //setFieldValByName(String fieldName, Object fieldVal, MetaObject metaObject)
        this.setFieldValByName("createTime",new Date(),metaObject);
        this.setFieldValByName("updateTime",new Date(),metaObject);
    }
    
    /**
     * 更新填充策略
     * @param metaObject
     */
    @Override
    public void updateFill(MetaObject metaObject) {
        log.info("start update fill......");
        this.setFieldValByName("updateTime",new Date(),metaObject);
    }
}
 ```



## 乐观锁

其实是一种概念。

> 乐观锁：认为不会出现问题，无论做什么都不上锁，如果出了问题，再上锁去操作；比如一个心很大得人
>
> 悲观锁：认为做什么都会出现问题，无论干什么都会上锁，再去操作；比如一个很谨慎的人

乐观锁机制!

##### 实现方式

- 取出记录时，获取当前version

- 更新时，带上这个version

- 执行更新时， set version = newVersion where version = oldVersion

- 如果version不对，就更新失败

```sql
	乐观锁：1.先查询，获取版本号 version=1
	A线程 
	update user set  name="122", version=version+1 where  id=2 and version=1

    B线程   线程抢先完成，这个时候version=2，会导致B修改不成功!
	update user set  name="122", version=version+1 where  id=2 and version=1
```

> 测试MP的乐观锁插件

1.数据库添加version

2.实体类添加字段及注解

```java
@Version  //乐观锁version注解
private Integer version;
```

3.添加乐观锁插件

```java
@MapperScan("com.my.mybatis_plus.mapper")
@EnableTransactionManagement  // 启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
@Configuration
public class MyBatisPlusConfig {
    
    //注册乐观锁插件
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor() {
        return new OptimisticLockerInterceptor();
    }
}
```

4.测试

```java
    //测试乐观锁成功
    @Test
    public void testOptimisticLocker(){
        //1.查询用户信息
        User user=userMapper.selectById(1L);
        //2.修改用户信息
        user.setName("虾仁");
        user.setEmail("虾仁.com");
        //3.执行更新操作
        userMapper.updateById(user);
    }

    //测试乐观锁失败
    @Test
    public void testOptimisticLocker2(){
        //线程1
        User user=userMapper.selectById(1L);
        user.setName("虾仁一号");
        user.setEmail("324234.com");

        //线程2 执行插队操作
        User user2=userMapper.selectById(1L);
        user2.setName("虾仁二号");
        user2.setEmail("324234.com");
        userMapper.updateById(user2);
        //如果没有乐观锁就会覆盖插队线程的值！
        //可以使用自旋锁多次尝试提交
        userMapper.updateById(user);
    }
  
```

> version:作为乐观锁的一种条件限制；

```sql
如上乐观锁失败执行的sql日志：
        1.user查询
        	SELECT id,name,age,email,version,create_time,update_time FROM user WHERE id=? 
			==> Parameters: 1(Long)
			<==    Columns: id, name, age, email, version, create_time, update_time
			<==        Row: 1, 虾仁, 18, 虾仁.com, 2, null, 2022-02-22 14:04:37
			<==      Total: 1
        2.user2查询
            SELECT id,name,age,email,version,create_time,update_time FROM user WHERE id=? 
			==> Parameters: 1(Long)
			<==    Columns: id, name, age, email, version, create_time, update_time
			<==        Row: 1, 虾仁, 18, 虾仁.com, 2, null, 2022-02-22 14:04:37
			<==      Total: 1
        3.user2修改
            UPDATE user SET name=?, age=?, email=?, version=?, update_time=? WHERE id=? AND version=? 
			==> Parameters: 虾仁二号(String), 18(Integer), 324234.com(String), 3(Integer), 2022-02-22 					14:07:04.081(Timestamp), 1(Long), 2(Integer)
			<==    Updates: 1
        4.user修改(因为version已修改为3，导致user修改失败;如没有此version乐观锁限制,这一步将会覆盖上一步修改)   
            UPDATE user SET name=?, age=?, email=?, version=?, update_time=? WHERE id=? AND version=? 
			==> Parameters: 虾仁一号(String), 18(Integer), 324234.com(String), 3(Integer), 2022-02-22 					14:07:04.089(Timestamp), 1(Long), 2(Integer)
			<==    Updates: 0   
```

## 查询操作

```java
    //测试查询
    @Test
    public void testSelectById(){
        User user=userMapper.selectById(1L);
        System.out.println(user);
    }

    //批量查询
    @Test
    public void testSelectBatchIds(){
        List<User> user=userMapper.selectBatchIds(Arrays.asList(1,2,3));
        user.forEach(System.out::println);
    }

    //条件查询map
    @Test
    public void testSelectByMap(){
        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        //自定义查询
        stringObjectHashMap.put("name","虾仁二号");
        List<User> user=userMapper.selectByMap(stringObjectHashMap);
        user.forEach(System.out::println);
    }
```

## 分页查询

1.原始的limit进行分页

2.pageHelpere第三方插件

3.MP其实内置了分页插件

> 如何使用

1.配置分页拦截器主键

```java
@MapperScan("com.my.mybatis_plus.mapper")
@EnableTransactionManagement // 启注解事务管理，等同于xml配置方式的 <tx:annotation-driven />
@Configuration
public class MyBatisPlusConfig {

    //注册乐观锁插件
    @Bean
    public OptimisticLockerInterceptor optimisticLockerInterceptor() {
        return new OptimisticLockerInterceptor();
    }

    //分页注册
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }
}
```

2.直接使用Page对象

```java
  //测试分页查询
    @Test
    public void testPage(){
        Page<User> page=new Page<>(1,5);
        userMapper.selectPage(page,null);
        page.getRecords().forEach(System.out::print);
    }
```

## 删除操作

```java
   //批量删除
    @Test
    public void testDeleteBatchId(){
        int result=userMapper.deleteBatchIds(Arrays.asList(1,2,3));
        System.out.println(result);
    }

    //通过map删除
    @Test
    public void testDeleteMap(){
        HashMap<String, Object> stringObjectHashMap = new HashMap<>();
        stringObjectHashMap.put("id","1");
        int result=userMapper.deleteByMap(stringObjectHashMap);
        System.out.println(result);
    }
```

## 逻辑删除

> 物理删除：从数据库中直接移除
>
> 逻辑删除：在数据库中没有被移除，而是通过一个变量让他失效! deleted=0=>deleted=1

1.表中添加deleted字段

2.实体类添加字段

```java
@TableLogic  //逻辑删除
private Integer deleted;
```

3.配置

```java
    //逻辑删除配置
    @Bean
    public ISqlInjector sqlInjector() {
        return new LogicSqlInjector();
    }
```

```yml
#逻辑删除配置
mybatis-plus.global-config.db-config.logic-delete-value=1  # 逻辑已删除值(默认为 1)
mybatis-plus.global-config.db-config.logic-not-delete-value=0  # 逻辑未删除值(默认为 0)
```

说明:

只对自动注入的sql起效:

- 插入: 不作限制
- 查找: 追加where条件过滤掉已删除数据,且使用 wrapper.entity 生成的where条件会忽略该字段
- 更新: 追加where条件防止更新到已删除数据,且使用 wrapper.entity 生成的where条件会忽略该字段
- 删除: 转变为 更新

例如:

- 删除: `update user set deleted=1 where id = 1 and deleted=0`
- 查找: `select id,name,deleted from user where deleted=0`



## SQL性能分析打印插件

> #### 旧版

1.导入插件

```java
    /**
     * sql执行效率插件
     */
    @Bean
    @Profile({"dev","test"})
    public PerformanceInterceptor performanceInterceptor(){
        PerformanceInterceptor performanceInterceptor = new PerformanceInterceptor();
        // ms 设置sql最大执行时间,超过不执行
        performanceInterceptor.setMaxTime(100);
        //sql格式化
        performanceInterceptor.setFormat(true);
        return performanceInterceptor;
    }
	
```

最好只在SpringBoot中配置环境为dev或者test使用！提高开发效率

> #### 新版

**1.添加依赖**

```xml
<!--        sql打印分析-->
        <dependency>
            <groupId>p6spy</groupId>
            <artifactId>p6spy</artifactId>
            <version>3.9.1</version>
        </dependency>
```

**2.application.yml配置**

​     数据库配置修改:

```xml
#修改前
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: root
    url: jdbc:mysql://localhost:3306/mybatis_plus?useSSL=false&useUnicode=tru&characterEncoding=utf-            		8&serverTimezone=GMT%2B8&allowMultiQueries=true

#修改后：
spring:
  datasource:
    driver-class-name: com.p6spy.engine.spy.P6SpyDriver
    username: root
    password: root
    url: jdbc:p6spy:mysql://localhost:3306/mybatis_plus?useSSL=false&useUnicode=tru&characterEncoding=utf-            8&serverTimezone=GMT%2B8&allowMultiQueries=true
```

3.创建spy.properties文件

```xml
#3.2.1以上使用
modulelist=com.baomidou.mybatisplus.extension.p6spy.MybatisPlusLogFactory,com.p6spy.engine.outage.P6OutageFactory
#3.2.1以下使用或者不配置
#modulelist=com.p6spy.engine.logging.P6LogFactory,com.p6spy.engine.outage.P6OutageFactory
# 自定义日志打印
logMessageFormat=com.baomidou.mybatisplus.extension.p6spy.P6SpyLogger
#日志输出到控制台
appender=com.baomidou.mybatisplus.extension.p6spy.StdoutLogger
# 使用日志系统记录 sql
#appender=com.p6spy.engine.spy.appender.Slf4JLogger
# 设置 p6spy driver 代理
deregisterdrivers=true
# 取消JDBC URL前缀
useprefix=true
# 配置记录 Log 例外,可去掉的结果集有error,info,batch,debug,statement,commit,rollback,result,resultset.
excludecategories=info,debug,result,commit,resultset
# 日期格式
dateformat=yyyy-MM-dd HH:mm:ss
# 实际驱动可多个
#driverlist=org.h2.Driver
# 是否开启慢SQL记录
outagedetection=true
# 慢SQL记录标准 2 秒
outagedetectioninterval=2
```





## 条件查询Wrapper

用来写一些复杂的sql

1.测试一

```java
    //查询name不为空，email不为空，age大于等于20
    @Test
    public void selecteWrapper(){
        QueryWrapper<User> wrapper=new QueryWrapper<>();
        wrapper.isNotNull("name")    //is not null
                .isNotNull("email")  //is not null
                .ge("age",20);       //>=
        userMapper.selectList(wrapper).forEach(System.out::println);
    }
```

2.测试二

```java
  @Test
    void test2(){
            //查询name
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("name","pzy");
        User user = userMapper.selectOne(userQueryWrapper);
        System.out.println(user);
    }
```

3.测试三

```java
   @Test
    void test3(){
        //查询年龄20到30之间
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.between("age",10,30);
        Integer count=userMapper.selectCount(userQueryWrapper);
        System.out.println(count);
    }
```

4.测试四

```java
    @Test
    void test4(){
        //模糊查询
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.notLike("name","e").likeLeft("email","1");
        userMapper.selectMaps(userQueryWrapper).forEach(System.out::println);
    }
```



5.测试五

```java
   @Test
    void test5(){
        //子查询
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.inSql("id","select id from user where id>2");
        userMapper.selectObjs(userQueryWrapper).forEach(System.out::println);
    }
```



## 代码生成器

AutoGenerator 是 MyBatis-Plus 的代码生成器，通过 AutoGenerator 可以快速生成 Entity、Mapper、Mapper XML、Service、Controller 等各个模块的代码，极大的提升了开发效率。

```java
package com.my.mybatis_plus;
import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.config.DataSourceConfig;
import com.baomidou.mybatisplus.generator.config.GlobalConfig;
import com.baomidou.mybatisplus.generator.config.PackageConfig;
import com.baomidou.mybatisplus.generator.config.StrategyConfig;
import com.baomidou.mybatisplus.generator.config.po.TableFill;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import java.util.ArrayList;

/**
 * @author pzy
 * @version 1.0
 * 代码自动生成器
 */
public class CodeOpen {
    public static void main(String[] args) {
        //需要构建一个代码自动生成器对象
        AutoGenerator auto = new AutoGenerator();
        //全局配置
        GlobalConfig gc = new GlobalConfig();
        String property = System.getProperty("user.dir");   //获取项目路径
        gc.setOutputDir(property + "/src/main/java");
        gc.setFileOverride(false);  //是否覆盖
        gc.setServiceName("%sService");  //去Service的I前缀
        gc.setIdType(IdType.ID_WORKER);   //主键生成方式
        gc.setDateType(DateType.ONLY_DATE);
        gc.setSwagger2(true);
        gc.setAuthor("pzy");  //标记作者名称
        gc.setOpen(false); //是否打开资源管理器
        auto.setGlobalConfig(gc);
        //数据源配置
        DataSourceConfig dc=new DataSourceConfig();
        dc.setUrl("jdbc:mysql://localhost:3306/mybatis_plus?useSSL=false&useUnicode=tru&characterEncoding=utf-8&serverTimezone=GMT%2B8&allowMultiQueries=true");
        //dc.setSchemaName("mybatis_plus");
        dc.setDriverName("com.mysql.cj.jdbc.Driver");
        dc.setUsername("root");
        dc.setPassword("root");
        dc.setDbType(DbType.MYSQL);
        auto.setDataSource(dc);
        //包配置
        PackageConfig pc = new PackageConfig();
        pc.setModuleName("moudle");     //父类包名
        pc.setParent("com.my.mybatis_plus");  //包路径
        pc.setEntity("entity");
        pc.setMapper("mapper");
        pc.setService("service");
        pc.setController("controller");
        auto.setPackageInfo(pc);
        //策略配置
        StrategyConfig strategy = new StrategyConfig();
        strategy.setInclude("user");   //设置要映射的表,可以多个
        strategy.setNaming(NamingStrategy.underline_to_camel);  //表名下划线转驼峰
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);   //列下划线转驼峰
        strategy.setEntityLombokModel(true);   //自动lombok
        strategy.setLogicDeleteFieldName("deleted"); //配置逻辑删除字段
        //自动填充策略
        ArrayList<TableFill> tableFills = new ArrayList<>();
        TableFill createTime = new TableFill("create_time", FieldFill.INSERT);
        TableFill updateTime = new TableFill("update_time", FieldFill.INSERT_UPDATE);
        tableFills.add(createTime);
        tableFills.add(updateTime);
        strategy.setTableFillList(tableFills);
        //乐观锁
        strategy.setVersionFieldName("version");   //乐观锁字段
        strategy.setRestControllerStyle(true);  //localhost:8080/hello_id_2
        auto.setStrategy(strategy);
        //执行生成
        auto.execute();
    }
}

```







写于日期：2022-2-22 16:41
