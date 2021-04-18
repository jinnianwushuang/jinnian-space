<!--
 * @Date           : 2021-04-10 16:40:09
 * @FilePath       : /jinnian-space/src/pages/sql/md/MySQL基础-01-授课笔记.md
 * @Description    : 
-->
# MySQL基础-01-授课笔记

### 一、数据库的基本概念

#### 1.为什么要学数据库？

- 之前我们如果想将一些数据实现永久化存储，可以怎么做呢？没错。使用IO流的技术将数据保存到本地文件中
- 但是接下来我有这样一个需求：将下面的user.txt文件中的王五年龄修改为35

```txt
张三 23 男
李四 24 男
王五 25 女
赵六 26 女
周七 27 男
```

- 我们要如何实现呢？
  - 可以采用字符缓冲流，将每一行数据读取出来，封装为User对象。将多个User对象保存到集合中
  - 然后遍历集合，将王五对象的年龄修改为35,再重新将集合中的对象信息写回到文件中
- 这一套操作太麻烦了，而现在我们有一种更加方便的方式来完成这个需求了，这种方式就是数据库！

#### 2.什么是数据库？

- 用于存储和管理数据的仓库
- 英文单词为：DataBase，简称DB

#### 3.数据库的好处？

- 可以持久化存储数据
- 方便存储和管理数据
- 使用了统一的方式操作数据库 -- SQL

#### 4.常见的数据库有哪些？


<!-- ![01](./img/sql/mysql/MySQL基础-01-授课笔记.assets/01.png) -->
<!-- src\pages\sql\md\MySQL基础-01-授课笔记.md -->
![01](./img/sql/mysql/MySQL基础-01-授课笔记.assets/01.png)

### 二、MySQL数据库的介绍和安装

#### 1.MySQL数据库介绍

- 小型的数据库
- 开源免费(6版本之前免费)
- 所属于Oracle公司

#### 2.MySQL数据库安装

1. 通过secureCRT工具连接Linux系统

2. 上传 mysql 的安装包

```linux
alt + p -------> put d:/setup/mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar
```

3. 解压 mysql 的安装包

```linux
mkdir mysql
tar -xvf mysql-5.7.27-1.el7.x86_64.rpm-bundle.tar -C mysql/
```

4. 安装客户端

```linux
cd mysql/
rpm -ivh mysql-community-client-5.7.27-1.el7.x86_64.rpm --force --nodeps
```

5. 安装服务端

```
rpm -ivh mysql-community-server-5.7.27-1.el7.x86_64.rpm --force --nodeps
```

6. 修改mysql默认字符集

```
vi /etc/my.cnf

添加如下内容：
[mysqld]
character-set-server=utf8
collation-server=utf8_general_ci

-- 需要在最下方填写
[client]
default-character-set=utf8
```

7. 启动mysql服务

```
service mysqld start
```

8. 登录mysql

```
mysql -u root -p  敲回车，输入密码
初始密码查看：cat /var/log/mysqld.log
在root@localhost:   后面的就是初始密码
```

9. 修改mysql登录密码

```
set global validate_password_policy=0;

set global validate_password_length=1;

set password=password('密码');
```

10. 授予远程连接权限

```
//授权
grant all privileges on *.* to 'root' @'%' identified by '密码';
//刷新
flush privileges;
```

11. 关闭Linux系统防火墙

```
systemctl stop firewalld.service
```

#### 3.MySQL数据库登录

- sqlyog工具登录mysql

![02](./img/sql/mysql/MySQL基础-01-授课笔记.assets/02.png)

### 三、SQL语句

#### 1.数据库、数据表、数据的关系介绍

- 数据库
  - 用于存储和管理数据的仓库
  - 一个库中可以包含多个数据表
- 数据表
  - 数据库最重要的组成部分之一
  - 它由纵向的列和横向的行组成(类似excel表格)
  - 可以指定列名、数据类型、约束等
  - 一个表中可以存储多条数据
- 数据
  - 想要永久化存储的数据

![03](./img/sql/mysql/MySQL基础-01-授课笔记.assets/03.png)

#### 2.SQL介绍

- 什么是SQL

  - Structured Query Language：结构化查询语言
  - 其实就是定义了操作所有关系型数据库的规则。每一种数据库操作的方式可能会存在一些不一样的地方，我们称为“方言”。

- SQL通用语法

  - SQL 语句可以单行或多行书写，以分号结尾。
  - 可使用空格和缩进来增强语句的可读性。
  - MySQL 数据库的 SQL 语句不区分大小写，关键字建议使用大写。
  - 数据库的注释：
    - 单行注释：-- 注释内容       #注释内容(mysql特有)
    - 多行注释：/* 注释内容 */

- SQL分类

  - DDL(Data Definition Language)数据定义语言
    - 用来定义数据库对象：数据库，表，列等。关键字：create, drop,alter 等
  - DML(Data Manipulation Language)数据操作语言
    - 用来对数据库中表的数据进行增删改。关键字：insert, delete, update 等
  - DQL(Data Query Language)数据查询语言
    - 用来查询数据库中表的记录(数据)。关键字：select, where 等
  - DCL(Data Control Language)数据控制语言(了解)
    - 用来定义数据库的访问权限和安全级别，及创建用户。关键字：GRANT， REVOKE 等

  ![04](./img/sql/mysql/MySQL基础-01-授课笔记.assets/04.png)

#### 3.DDL-操作数据库

- R(Retrieve)：查询

  - 查询所有数据库

  ```mysql
  -- 查询所有数据库
  SHOW DATABASES;
  ```

  - 查询某个数据库的创建语句

  ```mysql
  -- 标准语法
  SHOW CREATE DATABASE 数据库名称;
  
  -- 查看mysql数据库的创建格式
  SHOW CREATE DATABASE mysql;
  ```

- C(Create)：创建

  - 创建数据库

  ```mysql
  -- 标准语法
  CREATE DATABASE 数据库名称;
  
  -- 创建db1数据库
  CREATE DATABASE db1;
  
  -- 创建一个已存在的数据库会报错
  -- 错误代码：1007  Can't create database 'db1'; database exists
  CREATE DATABASE db1;
  ```

  - 创建数据库(判断，如果不存在则创建)

  ```mysql
  -- 标准语法
  CREATE DATABASE IF NOT EXISTS 数据库名称;
  
  -- 创建数据库db2(判断，如果不存在则创建)
  CREATE DATABASE IF NOT EXISTS db2;
  ```

  - 创建数据库、并指定字符集

  ```mysql
  -- 标准语法
  CREATE DATABASE 数据库名称 CHARACTER SET 字符集名称;
  
  -- 创建数据库db3、并指定字符集utf8
  CREATE DATABASE db3 CHARACTER SET utf8;
  
  -- 查看db3数据库的字符集
  SHOW CREATE DATABASE db3;
  ```

  - 练习：创建db4数据库、如果不存在则创建，指定字符集为gbk

  ```mysql
  -- 创建db4数据库、如果不存在则创建，指定字符集为gbk
  CREATE DATABASE IF NOT EXISTS db4 CHARACTER SET gbk;
  
  -- 查看db4数据库的字符集
  SHOW CREATE DATABASE db4;
  ```

- U(Update)：修改

  - 修改数据库的字符集

  ```mysql
  -- 标准语法
  ALTER DATABASE 数据库名称 CHARACTER SET 字符集名称;
  
  -- 修改数据库db4的字符集为utf8
  ALTER DATABASE db4 CHARACTER SET utf8;
  
  -- 查看db4数据库的字符集
  SHOW CREATE DATABASE db4;
  ```

- D(Delete)：删除

  - 删除数据库

  ```mysql
  -- 标准语法
  DROP DATABASE 数据库名称;
  
  -- 删除db1数据库
  DROP DATABASE db1;
  
  -- 删除一个不存在的数据库会报错
  -- 错误代码：1008  Can't drop database 'db1'; database doesn't exist
  DROP DATABASE db1;
  ```

  - 删除数据库(判断，如果存在则删除)

  ```mysql
  -- 标准语法
  DROP DATABASE IF EXISTS 数据库名称;
  
  -- 删除数据库db2，如果存在
  DROP DATABASE IF EXISTS db2;
  ```

- 使用数据库

  - 查询当前正在使用的数据库名称

  ```mysql
  -- 查询当前正在使用的数据库
  SELECT DATABASE();
  ```

  - 使用数据库

  ```mysql
  -- 标准语法
  USE 数据库名称；
  
  -- 使用db4数据库
  USE db4;
  ```

#### 4.DDL-操作数据表

- R(Retrieve)：查询

  - 查询数据库中所有的数据表

  ```mysql
  -- 使用mysql数据库
  USE mysql;
  
  -- 查询库中所有的表
  SHOW TABLES;
  ```

  - 查询表结构

  ```mysql
  -- 标准语法
  DESC 表名;
  
  -- 查询user表结构
  DESC user;
  ```

  - 查询表字符集

  ```mysql
  -- 标准语法
  SHOW TABLE STATUS FROM 库名 LIKE '表名';
  
  -- 查看mysql数据库中user表字符集
  SHOW TABLE STATUS FROM mysql LIKE 'user';
  ```

- C(Create)：创建

  - 创建数据表

    - 标准语法

    ```mysql
    CREATE TABLE 表名(
        列名1 数据类型1,
        列名2 数据类型2,
        ....
        列名n 数据类型n
    );
    -- 注意：最后一列，不需要加逗号
    ```

    - 数据类型

    ```mysql
    1. int：整数类型
    	* age int
    2. double:小数类型
    	* score double(5,2)
    	* price double
    3. date:日期，只包含年月日     yyyy-MM-dd
    4. datetime:日期，包含年月日时分秒	 yyyy-MM-dd HH:mm:ss
    5. timestamp:时间戳类型	包含年月日时分秒	 yyyy-MM-dd HH:mm:ss	
    	* 如果将来不给这个字段赋值，或赋值为null，则默认使用当前的系统时间，来自动赋值
    6. varchar：字符串
    	* name varchar(20):姓名最大20个字符
    	* zhangsan 8个字符  张三 2个字符
    ```

    - 创建数据表

    ```mysql
    -- 使用db3数据库
    USE db3;
    
    -- 创建一个product商品表
    CREATE TABLE product(
    	id INT,				-- 商品编号
    	NAME VARCHAR(30),	-- 商品名称
    	price DOUBLE,		-- 商品价格
    	stock INT,			-- 商品库存
    	insert_time DATE    -- 上架时间
    );
    ```

    - 复制表

    ```mysql
    -- 标准语法
    CREATE TABLE 表名 LIKE 被复制的表名;
    
    -- 复制product表到product2表
    CREATE TABLE product2 LIKE product;
    ```

- U(Update)：修改

  - 修改表名

  ```mysql
  -- 标准语法
  ALTER TABLE 表名 RENAME TO 新的表名;
  
  -- 修改product2表名为product3
  ALTER TABLE product2 RENAME TO product3;
  ```

  - 修改表的字符集

  ```mysql
  -- 标准语法
  ALTER TABLE 表名 CHARACTER SET 字符集名称;
  
  -- 查看db3数据库中product3数据表字符集
  SHOW TABLE STATUS FROM db3 LIKE 'product3';
  -- 修改product3数据表字符集为gbk
  ALTER TABLE product3 CHARACTER SET gbk;
  -- 查看db3数据库中product3数据表字符集
  SHOW TABLE STATUS FROM db3 LIKE 'product3';
  ```

  - 添加一列

  ```mysql
  -- 标准语法
  ALTER TABLE 表名 ADD 列名 数据类型;
  
  -- 给product3表添加一列color
  ALTER TABLE product3 ADD color VARCHAR(10);
  ```

  - 修改列名称和数据类型

  ```mysql
  -- 修改数据类型 标准语法
  ALTER TABLE 表名 MODIFY 列名 新数据类型;
  
  -- 将color数据类型修改为int
  ALTER TABLE product3 MODIFY color INT;
  -- 查看product3表详细信息
  DESC product3;
  
  
  -- 修改列名和数据类型 标准语法
  ALTER TABLE 表名 CHANGE 列名 新列名 新数据类型;
  
  -- 将color修改为address,数据类型为varchar
  ALTER TABLE product3 CHANGE color address VARCHAR(30);
  -- 查看product3表详细信息
  DESC product3;
  ```

  - 删除列

  ```mysql
  -- 标准语法
  ALTER TABLE 表名 DROP 列名;
  
  -- 删除address列
  ALTER TABLE product3 DROP address;
  ```

- D(Delete)：删除

  - 删除数据表

  ```mysql
  -- 标准语法
  DROP TABLE 表名;
  
  -- 删除product3表
  DROP TABLE product3;
  
  -- 删除不存在的表，会报错
  -- 错误代码：1051  Unknown table 'product3'
  DROP TABLE product3;
  ```

  - 删除数据表(判断，如果存在则删除)

  ```mysql
  -- 标准语法
  DROP TABLE IF EXISTS 表名;
  
  -- 删除product3表，如果存在则删除
  DROP TABLE IF EXISTS product3;
  ```

#### 5.DML-INSERT语句

- 新增表数据语法

  - 新增格式1：给指定列添加数据

  ```mysql
  -- 标准语法
  INSERT INTO 表名(列名1,列名2,...) VALUES (值1,值2,...);
  
  -- 向product表添加一条数据
  INSERT INTO product(id,NAME,price,stock,insert_time) VALUES (1,'手机',1999,22,'2099-09-09');
  
  -- 向product表添加指定列数据
  INSERT INTO product (id,NAME,price) VALUES (2,'电脑',4999);
  
  -- 查看表中所有数据
  SELECT * FROM product;
  ```

  - 新增格式2：默认给全部列添加数据

  ```mysql
  -- 标准语法
  INSERT INTO 表名 VALUES (值1,值2,值3,...);
  
  -- 默认给全部列添加数据
  INSERT INTO product VALUES (3,'电视',2999,18,'2099-06-06');
  
  -- 查看表中所有数据
  SELECT * FROM product;
  ```

  - 新增格式3：批量添加数据

  ```mysql
  -- 默认添加所有列数据 标准语法
  INSERT INTO 表名 VALUES (值1,值2,值3,...),(值1,值2,值3,...),(值1,值2,值3,...);
  
  -- 批量添加数据
  INSERT INTO product VALUES (4,'冰箱',999,26,'2099-08-08'),(5,'洗衣机',1999,32,'2099-05-10');
  -- 查看表中所有数据
  SELECT * FROM product;
  
  
  -- 给指定列添加数据 标准语法
  INSERT INTO 表名(列名1,列名2,...) VALUES (值1,值2,...),(值1,值2,...),(值1,值2,...);
  
  -- 批量添加指定列数据
  INSERT INTO product (id,NAME,price) VALUES (6,'微波炉',499),(7,'电磁炉',899);
  -- 查看表中所有数据
  SELECT * FROM product;
  ```

- 注意事项

  - 列名和值的数量以及数据类型要对应
  - 除了数字类型，其他数据类型的数据都需要加引号(单引双引都可以，推荐单引)

#### 6.DML-UPDATE语句

- 修改表数据语法

```mysql
-- 标准语法
UPDATE 表名 SET 列名1 = 值1,列名2 = 值2,... [where 条件];

-- 修改手机的价格为3500
UPDATE product SET price=3500 WHERE NAME='手机';

-- 查看所有数据
SELECT * FROM product;

-- 修改电视的价格为1800、库存为36
UPDATE product SET price=1800,stock=36 WHERE NAME='电视';

-- 修改电磁炉的库存为10
UPDATE product SET stock=10 WHERE id=7;
```

- 注意事项
  - 修改语句中必须加条件
  - 如果不加条件，则将所有数据都修改

#### 7.DML-DELETE语句

- 删除表数据语法

```mysql
-- 标准语法
DELETE FROM 表名 [WHERE 条件];

-- 删除product表中的微波炉信息
DELETE FROM product WHERE NAME='微波炉';

-- 删除product表中库存为10的商品信息
DELETE FROM product WHERE stock=10;

-- 查看所有商品信息
SELECT * FROM product;
```

- 注意事项
  - 删除语句中必须加条件
  - 如果不加条件，则将所有数据删除

#### 8.DQL-单表查询

- 数据准备(直接复制执行即可)

```mysql
-- 创建db1数据库
CREATE DATABASE db1;

-- 使用db1数据库
USE db1;

-- 创建数据表
CREATE TABLE product(
	id INT,				-- 商品编号
	NAME VARCHAR(20),	-- 商品名称
	price DOUBLE,		-- 商品价格
	brand VARCHAR(10),	-- 商品品牌
	stock INT,			-- 商品库存
	insert_time DATE    -- 添加时间
);

-- 添加数据
INSERT INTO product VALUES (1,'华为手机',3999,'华为',23,'2088-03-10'),
(2,'小米手机',2999,'小米',30,'2088-05-15'),
(3,'苹果手机',5999,'苹果',18,'2088-08-20'),
(4,'华为电脑',6999,'华为',14,'2088-06-16'),
(5,'小米电脑',4999,'小米',26,'2088-07-08'),
(6,'苹果电脑',8999,'苹果',15,'2088-10-25'),
(7,'联想电脑',7999,'联想',NULL,'2088-11-11');
```

- 查询语法

```mysql
select
	字段列表
from
	表名列表
where
	条件列表
group by
	分组字段
having
	分组之后的条件
order by
	排序
limit
	分页限定
```

- 查询全部

```mysql
-- 标准语法
SELECT * FROM 表名;

-- 查询product表所有数据
SELECT * FROM product;
```

- 查询部分

  - 多个字段查询

  ```mysql
  -- 标准语法
  SELECT 列名1,列名2,... FROM 表名;
  
  -- 查询名称、价格、品牌
  SELECT NAME,price,brand FROM product;
  ```

  - 去除重复查询
    - 注意：只有全部重复的才可以去除

  ```mysql
  -- 标准语法
  SELECT DISTINCT 列名1,列名2,... FROM 表名;
  
  -- 查询品牌
  SELECT brand FROM product;
  -- 查询品牌，去除重复
  SELECT DISTINCT brand FROM product;
  ```

  - 计算列的值(四则运算)

  ```mysql
  -- 标准语法
  SELECT 列名1 运算符(+ - * /) 列名2 FROM 表名;
  
  /*
  	计算列的值
  	标准语法：
  		SELECT 列名1 运算符(+ - * /) 列名2 FROM 表名;
  		
  	如果某一列为null，可以进行替换
  	ifnull(表达式1,表达式2)
  	表达式1：想替换的列
  	表达式2：想替换的值
  */
  -- 查询商品名称和库存，库存数量在原有基础上加10
  SELECT NAME,stock+10 FROM product;
  
  -- 查询商品名称和库存，库存数量在原有基础上加10。进行null值判断
  SELECT NAME,IFNULL(stock,0)+10 FROM product;
  ```

  - 起别名

  ```mysql
  -- 标准语法
  SELECT 列名1,列名2,... AS 别名 FROM 表名;
  
  -- 查询商品名称和库存，库存数量在原有基础上加10。进行null值判断。起别名为getSum
  SELECT NAME,IFNULL(stock,0)+10 AS getsum FROM product;
  SELECT NAME,IFNULL(stock,0)+10 getsum FROM product;
  ```

- 条件查询

  - 条件分类

  | 符号                | 功能                                   |
  | ------------------- | -------------------------------------- |
  | >                   | 大于                                   |
  | <                   | 小于                                   |
  | >=                  | 大于等于                               |
  | <=                  | 小于等于                               |
  | =                   | 等于                                   |
  | <> 或 !=            | 不等于                                 |
  | BETWEEN ... AND ... | 在某个范围之内(都包含)                 |
  | IN(...)             | 多选一                                 |
  | LIKE 占位符         | 模糊查询  _单个任意字符  %多个任意字符 |
  | IS NULL             | 是NULL                                 |
  | IS NOT NULL         | 不是NULL                               |
  | AND 或 &&           | 并且                                   |
  | OR 或 \|\|          | 或者                                   |
  | NOT 或 !            | 非，不是                               |

  - 条件查询语法

  ```mysql
  -- 标准语法
  SELECT 列名 FROM 表名 WHERE 条件;
  
  -- 查询库存大于20的商品信息
  SELECT * FROM product WHERE stock > 20;
  
  -- 查询品牌为华为的商品信息
  SELECT * FROM product WHERE brand='华为';
  
  -- 查询金额在4000 ~ 6000之间的商品信息
  SELECT * FROM product WHERE price >= 4000 AND price <= 6000;
  SELECT * FROM product WHERE price BETWEEN 4000 AND 6000;
  
  -- 查询库存为14、30、23的商品信息
  SELECT * FROM product WHERE stock=14 OR stock=30 OR stock=23;
  SELECT * FROM product WHERE stock IN(14,30,23);
  
  -- 查询库存为null的商品信息
  SELECT * FROM product WHERE stock IS NULL;
  -- 查询库存不为null的商品信息
  SELECT * FROM product WHERE stock IS NOT NULL;
  
  -- 查询名称以小米为开头的商品信息
  SELECT * FROM product WHERE NAME LIKE '小米%';
  
  -- 查询名称第二个字是为的商品信息
  SELECT * FROM product WHERE NAME LIKE '_为%';
  
  -- 查询名称为四个字符的商品信息
  SELECT * FROM product WHERE NAME LIKE '____';
  
  -- 查询名称中包含电脑的商品信息
  SELECT * FROM product WHERE NAME LIKE '%电脑%';
  ```

- 聚合函数

  - 将一列数据作为一个整体，进行纵向的计算
  - 聚合函数分类

  | 函数名      | 功能                           |
  | ----------- | ------------------------------ |
  | count(列名) | 统计数量(一般选用不为null的列) |
  | max(列名)   | 最大值                         |
  | min(列名)   | 最小值                         |
  | sum(列名)   | 求和                           |
  | avg(列名)   | 平均值                         |

  - 聚合函数语法

  ```mysql
  -- 标准语法
  SELECT 函数名(列名) FROM 表名 [WHERE 条件];
  
  -- 计算product表中总记录条数
  SELECT COUNT(*) FROM product;
  
  -- 获取最高价格
  SELECT MAX(price) FROM product;
  -- 获取最高价格的商品名称
  SELECT NAME,price FROM product WHERE price = (SELECT MAX(price) FROM product);
  
  -- 获取最低库存
  SELECT MIN(stock) FROM product;
  -- 获取最低库存的商品名称
  SELECT NAME,stock FROM product WHERE stock = (SELECT MIN(stock) FROM product);
  
  -- 获取总库存数量
  SELECT SUM(stock) FROM product;
  -- 获取品牌为苹果的总库存数量
  SELECT SUM(stock) FROM product WHERE brand='苹果';
  
  -- 获取品牌为小米的平均商品价格
  SELECT AVG(price) FROM product WHERE brand='小米';
  ```

- 排序查询

  - 排序分类
    - 注意：多个排序条件，当前边的条件值一样时，才会判断第二条件

  | 关键词                                   | 功能                                    |
  | ---------------------------------------- | --------------------------------------- |
  | ORDER BY 列名1 排序方式1,列名2 排序方式2 | 对指定列排序，ASC升序(默认的)  DESC降序 |

  - 排序语法

  ```mysql
  -- 标准语法
  SELECT 列名 FROM 表名 [WHERE 条件] ORDER BY 列名1 排序方式1,列名2 排序方式2;
  
  -- 按照库存升序排序
  SELECT * FROM product ORDER BY stock ASC;
  
  -- 查询名称中包含手机的商品信息。按照金额降序排序
  SELECT * FROM product WHERE NAME LIKE '%手机%' ORDER BY price DESC;
  
  -- 按照金额升序排序，如果金额相同，按照库存降序排列
  SELECT * FROM product ORDER BY price ASC,stock DESC;
  ```

- 分组查询

```mysql
-- 标准语法
SELECT 列名 FROM 表名 [WHERE 条件] GROUP BY 分组列名 [HAVING 分组后条件过滤] [ORDER BY 排序列名 排序方式];

-- 按照品牌分组，获取每组商品的总金额
SELECT brand,SUM(price) FROM product GROUP BY brand;

-- 对金额大于4000元的商品，按照品牌分组,获取每组商品的总金额
SELECT brand,SUM(price) FROM product WHERE price > 4000 GROUP BY brand;

-- 对金额大于4000元的商品，按照品牌分组，获取每组商品的总金额，只显示总金额大于7000元的
SELECT brand,SUM(price) AS getSum FROM product WHERE price > 4000 GROUP BY brand HAVING getSum > 7000;

-- 对金额大于4000元的商品，按照品牌分组，获取每组商品的总金额，只显示总金额大于7000元的、并按照总金额的降序排列
SELECT brand,SUM(price) AS getSum FROM product WHERE price > 4000 GROUP BY brand HAVING getSum > 7000 ORDER BY getSum DESC;
```

- 分页查询

```mysql
-- 标准语法
SELECT 列名 FROM 表名 [WHERE 条件] GROUP BY 分组列名 [HAVING 分组后条件过滤] [ORDER BY 排序列名 排序方式] LIMIT 开始索引,查询条数;
-- 公式：开始索引 = (当前页码-1) * 每页显示的条数

-- 每页显示2条数据
SELECT * FROM product LIMIT 0,2;  -- 第一页 开始索引=(1-1) * 2
SELECT * FROM product LIMIT 2,2;  -- 第二页 开始索引=(2-1) * 2
SELECT * FROM product LIMIT 4,2;  -- 第三页 开始索引=(3-1) * 2
SELECT * FROM product LIMIT 6,2;  -- 第四页 开始索引=(4-1) * 2
```

- 分页查询图解

![05](./img/sql/mysql/MySQL基础-01-授课笔记.assets/05.png)

### 四、约束

#### 1.约束的概念和分类

- 约束的概念
  - 对表中的数据进行限定，保证数据的正确性、有效性、完整性！
- 约束的分类

| 约束                          | 说明           |
| ----------------------------- | -------------- |
| PRIMARY KEY                   | 主键约束       |
| PRIMARY KEY AUTO_INCREMENT    | 主键、自动增长 |
| UNIQUE                        | 唯一约束       |
| NOT NULL                      | 非空约束       |
| FOREIGN KEY                   | 外键约束       |
| FOREIGN KEY ON UPDATE CASCADE | 外键级联更新   |
| FOREIGN KEY ON DELETE CASCADE | 外键级联删除   |

#### 2.主键约束

- 主键约束特点
  - 主键约束包含：非空和唯一两个功能
  - 一张表只能有一个列作为主键
  - 主键一般用于表中数据的唯一标识
- 建表时添加主键约束

```mysql
-- 标准语法
CREATE TABLE 表名(
	列名 数据类型 PRIMARY KEY,
    列名 数据类型,
    ...
);

-- 创建student表
CREATE TABLE student(
	id INT PRIMARY KEY  -- 给id添加主键约束
);

-- 添加数据
INSERT INTO student VALUES (1),(2);
-- 主键默认唯一，添加重复数据，会报错
INSERT INTO student VALUES (2);
-- 主键默认非空，不能添加null的数据
INSERT INTO student VALUES (NULL);

-- 查询student表
SELECT * FROM student;
-- 查询student表详细
DESC student;
```

- 删除主键

```mysql
-- 标准语法
ALTER TABLE 表名 DROP PRIMARY KEY;

-- 删除主键
ALTER TABLE student DROP PRIMARY KEY;
```

- 建表后单独添加主键

```mysql
-- 标准语法
ALTER TABLE 表名 MODIFY 列名 数据类型 PRIMARY KEY;

-- 添加主键
ALTER TABLE student MODIFY id INT PRIMARY KEY;
```

#### 3.主键自动增长约束

- 建表时添加主键自增约束

```mysql
-- 标准语法
CREATE TABLE 表名(
	列名 数据类型 PRIMARY KEY AUTO_INCREMENT,
    列名 数据类型,
    ...
);

-- 创建student2表
CREATE TABLE student2(
	id INT PRIMARY KEY AUTO_INCREMENT    -- 给id添加主键自增约束
);

-- 添加数据
INSERT INTO student2 VALUES (1),(2);
-- 添加null值，会自动增长
INSERT INTO student2 VALUES (NULL),(NULL);

-- 查询student2表
SELECT * FROM student2;
-- student2表详细
DESC student2;
```

- 删除自动增长

```mysql
-- 标准语法
ALTER TABLE 表名 MODIFY 列名 数据类型;

-- 删除自动增长
ALTER TABLE student2 MODIFY id INT;
```

- 建表后单独添加自动增长

```mysql
-- 标准语法
ALTER TABLE 表名 MODIFY 列名 数据类型 AUTO_INCREMENT;

-- 添加自动增长
ALTER TABLE student2 MODIFY id INT AUTO_INCREMENT;
```

#### 4.唯一约束

- 建表时添加唯一约束

```mysql
-- 标准语法
CREATE TABLE 表名(
	列名 数据类型 UNIQUE,
    列名 数据类型,
    ...
);

-- 创建student3表
CREATE TABLE student3(
	id INT PRIMARY KEY AUTO_INCREMENT,
	tel VARCHAR(20) UNIQUE    -- 给tel列添加唯一约束
);

-- 添加数据
INSERT INTO student3 VALUES (NULL,'18888888888'),(NULL,'18666666666');
-- 添加重复数据，会报错
INSERT INTO student3 VALUES (NULL,'18666666666');

-- 查询student3数据表
SELECT * FROM student3;
-- student3表详细
DESC student3;
```

- 删除唯一约束

```mysql
-- 标准语法
ALTER TABLE 表名 DROP INDEX 列名;

-- 删除唯一约束
ALTER TABLE student3 DROP INDEX tel;
```

- 建表后单独添加唯一约束

```mysql
-- 标准语法
ALTER TABLE 表名 MODIFY 列名 数据类型 UNIQUE;

-- 添加唯一约束
ALTER TABLE student3 MODIFY tel VARCHAR(20) UNIQUE;
```

#### 5.非空约束

- 建表时添加非空约束

```mysql
-- 标准语法
CREATE TABLE 表名(
	列名 数据类型 NOT NULL,
    列名 数据类型,
    ...
);

-- 创建student4表
CREATE TABLE student4(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(20) NOT NULL    -- 给name添加非空约束
);

-- 添加数据
INSERT INTO student4 VALUES (NULL,'张三'),(NULL,'李四');
-- 添加null值，会报错
INSERT INTO student4 VALUES (NULL,NULL);
```

- 删除非空约束

```mysql
-- 标准语法
ALTER TABLE 表名 MODIFY 列名 数据类型;

-- 删除非空约束
ALTER TABLE student4 MODIFY NAME VARCHAR(20);
```

- 建表后单独添加非空约束

  ```SQL
  -- 标准语法
  ALTER TABLE 表名 MODIFY 列名 数据类型 NOT NULL;
  
  -- 添加非空约束
  ALTER TABLE student4 MODIFY NAME VARCHAR(20) NOT NULL;
  ```

  