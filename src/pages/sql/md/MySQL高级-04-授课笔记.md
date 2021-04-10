<!--
 * @Date           : 2021-04-11 02:20:56
 * @FilePath       : /jinnian-space/src/pages/sql/md/MySQL高级-04-授课笔记.md
 * @Description    : 
-->
# MySQL高级-04-授课笔记

### 一、MySQL存储引擎

#### 1.MySQL体系结构

- 体系结构的概念

  - 任何一套系统当中，每个部件都能起到一定的作用！

- MySQL的体系结构

![02](./img/mysql/MySQL高级-04-授课笔记.assets/02.png)

- 体系结构详解
  - 客户端连接
    - 支持接口：支持的客户端连接，例如C、Java、PHP等语言来连接MySQL数据库
  - 第一层：网络连接层
    - 连接池：管理、缓冲用户的连接，线程处理等需要缓存的需求。
    - 例如：当客户端发送一个请求连接，会从连接池中获取一个连接进行使用。
  - 第二层：核心服务层
    - 管理服务和工具：系统的管理和控制工具，例如备份恢复、复制、集群等。 
    - SQL接口：接受SQL命令，并且返回查询结果。
    - 查询解析器：验证和解析SQL命令，例如过滤条件、语法结构等。 
    - 查询优化器：在执行查询之前，使用默认的一套优化机制进行优化sql语句
    - 缓存：如果缓存当中有想查询的数据，则直接将缓存中的数据返回。没有的话再重新查询！
  - 第三层：存储引擎层
    - 插件式存储引擎：管理和操作数据的一种机制，包括(存储数据、如何更新、查询数据等)
  - 第四层：系统文件层
    - 文件系统：配置文件、数据文件、日志文件、错误文件、二进制文件等等的保存

#### 2.MySQL存储引擎

- 引擎的概念

  - 生活中，引擎就是整个机器运行的核心，不同的引擎具备不同的功能。

- MySQL存储引擎的概念
  - MySQL数据库使用不同的机制存取表文件 , 机制的差别在于不同的存储方式、索引技巧、锁定水平以及广泛的不同的功能和能力，在MySQL中 , 将这些不同的技术及配套的功能称为**存储引擎**
  - 在关系型数据库中数据的存储是以表的形式存进行储的，所以存储引擎也可以称为**表类型**（即存储和操作此表的类型）。
  - Oracle , SqlServer等数据库只有一种存储引擎 , 而MySQL针对不同的需求, 配置MySQL的不同的存储引擎 , 就会让数据库采取了不同的处理数据的方式和扩展功能。
  - 通过选择不同的引擎 ,能够获取最佳的方案 ,  也能够获得额外的速度或者功能，提高程序的整体效果。所以了解引擎的特性 , 才能贴合我们的需求 , 更好的发挥数据库的性能。
- MySQL支持的存储引擎
  - MySQL5.7支持的引擎包括：InnoDB、MyISAM、MEMORY、Archive、Federate、CSV、BLACKHOLE等
  - 其中较为常用的有三种：InnoDB、MyISAM、MEMORY

#### 3.常用引擎的特性对比

- 常用的存储引擎
  - MyISAM存储引擎
    - 访问快,不支持事务和外键。表结构保存在.frm文件中，表数据保存在.MYD文件中，索引保存在.MYI文件中。
  - InnoDB存储引擎(MySQL5.5版本后默认的存储引擎)
    - 支持事务 ,占用磁盘空间大 ,支持并发控制。表结构保存在.frm文件中，如果是共享表空间，数据和索引保存在 innodb_data_home_dir 和 innodb_data_file_path定义的表空间中，可以是多个文件。如果是多表空间存储，每个表的数据和索引单独保存在 .ibd 中。
  - MEMORY存储引擎
    - 内存存储 , 速度快 ,不安全 ,适合小量快速访问的数据。表结构保存在.frm中。
- 特性对比

| 特性         | MyISAM                       | InnoDB        | MEMORY             |
| ------------ | ---------------------------- | ------------- | ------------------ |
| 存储限制     | 有(平台对文件系统大小的限制) | 64TB          | 有(平台的内存限制) |
| **事务安全** | **不支持**                   | **支持**      | **不支持**         |
| **锁机制**   | **表锁**                     | **表锁/行锁** | **表锁**           |
| B+Tree索引   | 支持                         | 支持          | 支持               |
| 哈希索引     | 不支持                       | 不支持        | 支持               |
| 全文索引     | 支持                         | 支持          | 不支持             |
| **集群索引** | **不支持**                   | **支持**      | **不支持**         |
| 数据索引     | 不支持                       | 支持          | 支持               |
| 数据缓存     | 不支持                       | 支持          | N/A                |
| 索引缓存     | 支持                         | 支持          | N/A                |
| 数据可压缩   | 支持                         | 不支持        | 不支持             |
| 空间使用     | 低                           | 高            | N/A                |
| 内存使用     | 低                           | 高            | 中等               |
| 批量插入速度 | 高                           | 低            | 高                 |
| **外键**     | **不支持**                   | **支持**      | **不支持**         |

#### 4.引擎的操作

- 查询数据库支持的引擎

```mysql
-- 标准语法
SHOW ENGINES;

-- 查询数据库支持的存储引擎
SHOW ENGINES;
```

```mysql
-- 表含义:
  - support : 指服务器是否支持该存储引擎
  - transactions : 指存储引擎是否支持事务
  - XA : 指存储引擎是否支持分布式事务处理
  - Savepoints : 指存储引擎是否支持保存点
```

- 查询某个数据库中所有数据表的引擎

```mysql
-- 标准语法
SHOW TABLE STATUS FROM 数据库名称;

-- 查看db9数据库所有表的存储引擎
SHOW TABLE STATUS FROM db9;
```

- 查询某个数据库中某个数据表的引擎

```mysql
-- 标准语法
SHOW TABLE STATUS FROM 数据库名称 WHERE NAME = '数据表名称';

-- 查看db9数据库中stu_score表的存储引擎
SHOW TABLE STATUS FROM db9 WHERE NAME = 'stu_score';
```

- 创建数据表，指定存储引擎

```mysql
-- 标准语法
CREATE TABLE 表名(
	列名,数据类型,
    ...
)ENGINE = 引擎名称;

-- 创建db11数据库
CREATE DATABASE db11;

-- 使用db11数据库
USE db11;

-- 创建engine_test表，指定存储引擎为MyISAM
CREATE TABLE engine_test(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10)
)ENGINE = MYISAM;

-- 查询engine_test表的引擎
SHOW TABLE STATUS FROM db11 WHERE NAME = 'engine_test';
```

- 修改表的存储引擎

```mysql
-- 标准语法
ALTER TABLE 表名 ENGINE = 引擎名称;

-- 修改engine_test表的引擎为InnoDB
ALTER TABLE engine_test ENGINE = INNODB;

-- 查询engine_test表的引擎
SHOW TABLE STATUS FROM db11 WHERE NAME = 'engine_test';
```

#### 5.总结：引擎的选择

- MyISAM ：由于MyISAM不支持事务、不支持外键、支持全文检索和表级锁定，读写相互阻塞，读取速度快，节约资源，所以如果应用是以**查询操作**和**插入操作**为主，只有很少的**更新和删除**操作，并且对事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。
- InnoDB : 是MySQL的默认存储引擎， 由于InnoDB支持事务、支持外键、行级锁定 ，支持所有辅助索引(5.5.5后不支持全文检索)，高缓存，所以用于对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，读写频繁的操作，那么InnoDB存储引擎是比较合适的选择，比如BBS、计费系统、充值转账等
- MEMORY：将所有数据保存在RAM中，在需要快速定位记录和其他类似数据环境下，可以提供更快的访问。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，其次是要确保表的数据可以恢复，数据库异常终止后表中的数据是可以恢复的。MEMORY表通常用于更新不太频繁的小表，用以快速得到访问结果。
- 总结：针对不同的需求场景，来选择最适合的存储引擎即可！如果不确定、则使用数据库默认的存储引擎！

### 二、MySQL索引

#### 1.索引的概念

- 我们之前学习过集合，其中的ArrayList集合的特点之一就是有索引。那么有索引会带来哪些好处呢？
- 没错，查询数据快！我们可以通过索引来快速查找到想要的数据。那么对于我们的MySQL数据库中的索引功能也是类似的！
- MySQL数据库中的索引：是帮助MySQL高效获取数据的一种数据结构！所以，索引的本质就是数据结构。
- 在表数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式指向数据， 这样就可以在这些数据结构上实现高级查找算法，这种数据结构就是索引。
- 一张数据表，用于保存数据。   一个索引配置文件，用于保存索引，每个索引都去指向了某一个数据(表格演示)
- 举例，无索引和有索引的查找原理

![04](./img/mysql/MySQL高级-04-授课笔记.assets/04.png)

#### 2.索引的分类

- 功能分类 
  - 普通索引： 最基本的索引，它没有任何限制。
  - 唯一索引：索引列的值必须唯一，但允许有空值。如果是组合索引，则列值组合必须唯一。
  - 主键索引：一种特殊的唯一索引，不允许有空值。一般在建表时同时创建主键索引。
  - 组合索引：顾名思义，就是将单列索引进行组合。
  - 外键索引：只有InnoDB引擎支持外键索引，用来保证数据的一致性、完整性和实现级联操作。
  - 全文索引：快速匹配全部文档的方式。InnoDB引擎5.6版本后才支持全文索引。MEMORY引擎不支持。
- 结构分类
  - B+Tree索引 ：MySQL使用最频繁的一个索引数据结构，是InnoDB和MyISAM存储引擎默认的索引类型。
  - Hash索引 : MySQL中Memory存储引擎默认支持的索引类型。

#### 3.索引的操作

- 数据准备

```mysql
-- 创建db12数据库
CREATE DATABASE db12;

-- 使用db12数据库
USE db12;

-- 创建student表
CREATE TABLE student(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10),
	age INT,
	score INT
);
-- 添加数据
INSERT INTO student VALUES (NULL,'张三',23,98),(NULL,'李四',24,95),
(NULL,'王五',25,96),(NULL,'赵六',26,94),(NULL,'周七',27,99);
```

- 创建索引
  - 注意：如果一个表中有一列是主键，那么就会默认为其创建主键索引！(主键列不需要单独创建索引)

```mysql
-- 标准语法
CREATE [UNIQUE|FULLTEXT] INDEX 索引名称
[USING 索引类型]  -- 默认是B+TREE
ON 表名(列名...);

-- 为student表中姓名列创建一个普通索引
CREATE INDEX idx_name ON student(NAME);

-- 为student表中年龄列创建一个唯一索引
CREATE UNIQUE INDEX idx_age ON student(age);
```

- 查看索引

```mysql
-- 标准语法
SHOW INDEX FROM 表名;

-- 查看student表中的索引
SHOW INDEX FROM student;
```

- alter语句添加索引

```mysql
-- 普通索引
ALTER TABLE 表名 ADD INDEX 索引名称(列名);

-- 组合索引
ALTER TABLE 表名 ADD INDEX 索引名称(列名1,列名2,...);

-- 主键索引
ALTER TABLE 表名 ADD PRIMARY KEY(主键列名); 

-- 外键索引(添加外键约束，就是外键索引)
ALTER TABLE 表名 ADD CONSTRAINT 外键名 FOREIGN KEY (本表外键列名) REFERENCES 主表名(主键列名);

-- 唯一索引
ALTER TABLE 表名 ADD UNIQUE 索引名称(列名);

-- 全文索引(mysql只支持文本类型)
ALTER TABLE 表名 ADD FULLTEXT 索引名称(列名);


-- 为student表中name列添加全文索引
ALTER TABLE student ADD FULLTEXT idx_fulltext_name(name);

-- 查看student表中的索引
SHOW INDEX FROM student;
```

- 删除索引

```mysql
-- 标准语法
DROP INDEX 索引名称 ON 表名;

-- 删除student表中的idx_score索引
DROP INDEX idx_score ON student;

-- 查看student表中的索引
SHOW INDEX FROM student;
```

#### 4.索引效率的测试

```mysql
-- 创建product商品表
CREATE TABLE product(
	id INT PRIMARY KEY AUTO_INCREMENT,  -- 商品id
	NAME VARCHAR(10),		    -- 商品名称
	price INT                           -- 商品价格
);

-- 定义存储函数，生成长度为10的随机字符串并返回
DELIMITER $

CREATE FUNCTION rand_string() 
RETURNS VARCHAR(255)
BEGIN
	DECLARE big_str VARCHAR(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ';
	DECLARE small_str VARCHAR(255) DEFAULT '';
	DECLARE i INT DEFAULT 1;
	
	WHILE i <= 10 DO
		SET small_str =CONCAT(small_str,SUBSTRING(big_str,FLOOR(1+RAND()*52),1));
		SET i=i+1;
	END WHILE;
	
	RETURN small_str;
END$

DELIMITER ;



-- 定义存储过程，添加100万条数据到product表中
DELIMITER $

CREATE PROCEDURE pro_test()
BEGIN
	DECLARE num INT DEFAULT 1;
	
	WHILE num <= 1000000 DO
		INSERT INTO product VALUES (NULL,rand_string(),num);
		SET num = num + 1;
	END WHILE;
END$

DELIMITER ;

-- 调用存储过程
CALL pro_test();


-- 查询总记录条数
SELECT COUNT(*) FROM product;



-- 查询product表的索引
SHOW INDEX FROM product;

-- 查询name为OkIKDLVwtG的数据   (0.049)
SELECT * FROM product WHERE NAME='OkIKDLVwtG';

-- 通过id列查询OkIKDLVwtG的数据  (1毫秒)
SELECT * FROM product WHERE id=999998;

-- 为name列添加索引
ALTER TABLE product ADD INDEX idx_name(NAME);

-- 查询name为OkIKDLVwtG的数据   (0.001)
SELECT * FROM product WHERE NAME='OkIKDLVwtG';


/*
	范围查询
*/
-- 查询价格为800~1000之间的所有数据 (0.052)
SELECT * FROM product WHERE price BETWEEN 800 AND 1000;

/*
	排序查询
*/
-- 查询价格为800~1000之间的所有数据,降序排列  (0.083)
SELECT * FROM product WHERE price BETWEEN 800 AND 1000 ORDER BY price DESC;

-- 为price列添加索引
ALTER TABLE product ADD INDEX idx_price(price);

-- 查询价格为800~1000之间的所有数据 (0.011)
SELECT * FROM product WHERE price BETWEEN 800 AND 1000;

-- 查询价格为800~1000之间的所有数据,降序排列  (0.001)
SELECT * FROM product WHERE price BETWEEN 800 AND 1000 ORDER BY price DESC;
```

#### 5.索引的实现原则

- 索引是在MySQL的存储引擎中实现的，所以每种存储引擎的索引不一定完全相同，也不是所有的引擎支持所有的索引类型。这里我们主要介绍InnoDB引擎的实现的**B+Tree索引**。
- B+Tree是一种树型数据结构，是B-Tree的变种。通常使用在数据库和操作系统中的文件系统，特点是能够保持数据稳定有序。我们逐步的来了解一下。

##### 5.1磁盘存储

- 系统从磁盘读取数据到内存时是以磁盘块（block）为基本单位的
- 位于同一个磁盘块中的数据会被一次性读取出来，而不是需要什么取什么。
- InnoDB存储引擎中有页（Page）的概念，页是其磁盘管理的最小单位。InnoDB存储引擎中默认每个页的大小为16KB。
- InnoDB引擎将若干个地址连接磁盘块，以此来达到页的大小16KB，在查询数据时如果一个页中的每条数据都能有助于定位数据记录的位置，这将会减少磁盘I/O次数，提高查询效率。

##### 5.2BTree

- BTree结构的数据可以让系统高效的找到数据所在的磁盘块。为了描述BTree，首先定义一条记录为一个二元组[key, data] ，key为记录的键值，对应表中的主键值，data为一行记录中除主键外的数据。对于不同的记录，key值互不相同。BTree中的每个节点根据实际情况可以包含大量的关键字信息和分支，如下图所示为一个3阶的BTree： 

  ![05](./img/mysql/MySQL高级-04-授课笔记.assets/05.png)

- 根据图中结构显示，每个节点占用一个盘块的磁盘空间，一个节点上有两个升序排序的关键字和三个指向子树根节点的指针，指针存储的是子节点所在磁盘块的地址。两个关键词划分成的三个范围域对应三个指针指向的子树的数据的范围域。以根节点为例，关键字为17和35，P1指针指向的子树的数据范围为小于17，P2指针指向的子树的数据范围为17~35，P3指针指向的子树的数据范围为大于35。

查找顺序：

```mysql
模拟查找15的过程 : 

1.根节点找到磁盘块1，读入内存。【磁盘I/O操作第1次】
	比较关键字15在区间（<17），找到磁盘块1的指针P1。
2.P1指针找到磁盘块2，读入内存。【磁盘I/O操作第2次】
	比较关键字15在区间（>12），找到磁盘块2的指针P3。
3.P3指针找到磁盘块7，读入内存。【磁盘I/O操作第3次】
	在磁盘块7中找到关键字15。
	
-- 分析上面过程，发现需要3次磁盘I/O操作，和3次内存查找操作。
-- 由于内存中的关键字是一个有序表结构，可以利用二分法查找提高效率。而3次磁盘I/O操作是影响整个BTree查找效率的决定因素。BTree使用较少的节点个数，使每次磁盘I/O取到内存的数据都发挥了作用，从而提高了查询效率。
```

##### 5.3B+Tree

- B+Tree是在BTree基础上的一种优化，使其更适合实现外存储索引结构，InnoDB存储引擎就是用B+Tree实现其索引结构。
- 从上一节中的BTree结构图中可以看到每个节点中不仅包含数据的key值，还有data值。而每一个页的存储空间是有限的，如果data数据较大时将会导致每个节点（即一个页）能存储的key的数量很小，当存储的数据量很大时同样会导致B-Tree的深度较大，增大查询时的磁盘I/O次数，进而影响查询效率。在B+Tree中，所有数据记录节点都是按照键值大小顺序存放在同一层的叶子节点上，而非叶子节点上只存储key值信息，这样可以大大加大每个节点存储的key值数量，降低B+Tree的高度。
- B+Tree相对于BTree区别：
  - 非叶子节点只存储键值信息。
  - 所有叶子节点之间都有一个连接指针。
  - 数据记录都存放在叶子节点中。
- 将上一节中的BTree优化，由于B+Tree的非叶子节点只存储键值信息，假设每个磁盘块能存储4个键值及指针信息，则变成B+Tree后其结构如下图所示：

![06](./img/mysql/MySQL高级-04-授课笔记.assets/06.png)

通常在B+Tree上有两个头指针，一个指向根节点，另一个指向关键字最小的叶子节点，而且所有叶子节点（即数据节点）之间是一种链式环结构。因此可以对B+Tree进行两种查找运算：

- 【有范围】对于主键的范围查找和分页查找
- 【有顺序】从根节点开始，进行随机查找

实际情况中每个节点可能不能填充满，因此在数据库中，B+Tree的高度一般都在2~4层。MySQL的InnoDB存储引擎在设计时是将根节点常驻内存的，也就是说查找某一键值的行记录时最多只需要1~3次磁盘I/O操作。

#### 6.总结：索引的设计原则

索引的设计可以遵循一些已有的原则，创建索引的时候请尽量考虑符合这些原则，便于提升索引的使用效率，更高效的使用索引。

- 创建索引时的原则
  - 对查询频次较高，且数据量比较大的表建立索引。
  - 使用唯一索引，区分度越高，使用索引的效率越高。
  - 索引字段的选择，最佳候选列应当从where子句的条件中提取，如果where子句中的组合比较多，那么应当挑选最常用、过滤效果最好的列的组合。
  - 使用短索引，索引创建之后也是使用硬盘来存储的，因此提升索引访问的I/O效率，也可以提升总体的访问效率。假如构成索引的字段总长度比较短，那么在给定大小的存储块内可以存储更多的索引值，相应的可以有效的提升MySQL访问索引的I/O效率。
  - 索引可以有效的提升查询数据的效率，但索引数量不是多多益善，索引越多，维护索引的代价自然也就水涨船高。对于插入、更新、删除等DML操作比较频繁的表来说，索引过多，会引入相当高的维护代价，降低DML操作的效率，增加相应操作的时间消耗。另外索引过多的话，MySQL也会犯选择困难病，虽然最终仍然会找到一个可用的索引，但无疑提高了选择的代价。
- 联合索引的特点

在mysql建立联合索引时会遵循最左前缀匹配的原则，即最左优先，在检索数据时从联合索引的最左边开始匹配，
对列name列、address和列phone列建一个联合索引

```mysql
ALTER TABLE user ADD INDEX index_three(name,address,phone);
```

联合索引index_three实际建立了(name)、(name,address)、(name,address,phone)三个索引。所以下面的三个SQL语句都可以命中索引。

```mysql
SELECT * FROM user WHERE address = '北京' AND phone = '12345' AND name = '张三';
SELECT * FROM user WHERE name = '张三' AND address = '北京';
SELECT * FROM user WHERE name = '张三';
```

上面三个查询语句执行时会依照最左前缀匹配原则，检索时分别会使用索引

```
(name,address,phone)
(name,address)
(name)
```

进行数据匹配。

索引的字段可以是任意顺序的，如：

```mysql
-- 优化器会帮助我们调整顺序，下面的SQL语句都可以命中索引
SELECT * FROM user WHERE address = '北京' AND phone = '12345' AND name = '张三';
```

Mysql的优化器会帮助我们调整where条件中的顺序，以匹配我们建立的索引。

联合索引中最左边的列不包含在条件查询中，所以根据上面的原则，下面的SQL语句就不会命中索引。

```mysql
-- 联合索引中最左边的列不包含在条件查询中，下面的SQL语句就不会命中索引
SELECT * FROM user WHERE address = '北京' AND phone = '12345';
```

### 三、MySQL锁

#### 1.锁的概念

- 之前我们学习过多线程，多线程当中如果想保证数据的准确性是如何实现的呢？没错，通过同步实现。同步就相当于是加锁。加了锁以后有什么好处呢？当一个线程真正在操作数据的时候，其他线程只能等待。当一个线程执行完毕后，释放锁。其他线程才能进行操作！

- 那么我们的MySQL数据库中的锁的功能也是类似的。在我们学习事务的时候，讲解过事务的隔离性，可能会出现脏读、不可重复读、幻读的问题，当时我们的解决方式是通过修改事务的隔离级别来控制，但是数据库的隔离级别呢我们并不推荐修改。所以，锁的作用也可以解决掉之前的问题！

- 锁机制 : 数据库为了保证数据的一致性，而使用各种共享的资源在被并发访问时变得有序所设计的一种规则。

- 举例，在电商网站购买商品时，商品表中只存有1个商品，而此时又有两个人同时购买，那么谁能买到就是一个关键的问题。

  这里会用到事务进行一系列的操作：

  1. 先从商品表中取出物品的数据
  2. 然后插入订单
  3. 付款后，再插入付款表信息
  4. 更新商品表中商品的数量

  以上过程中，使用锁可以对商品数量数据信息进行保护，实现隔离，即只允许第一位用户完成整套购买流程，而其他用户只能等待，这样就解决了并发中的矛盾问题。

- 在数据库中，数据是一种供许多用户共享访问的资源，如何保证数据并发访问的一致性、有效性，是所有数据库必须解决的一个问题，MySQL由于自身架构的特点，在不同的存储引擎中，都设计了面对特定场景的锁定机制，所以引擎的差别，导致锁机制也是有很大差别的。

#### 2.锁的分类

- 按操作分类：
  - 共享锁：也叫读锁。针对同一份数据，多个事务读取操作可以同时加锁而不互相影响 ，但是不能修改数据记录。
  - 排他锁：也叫写锁。当前的操作没有完成前,会阻断其他操作的读取和写入
- 按粒度分类：
  - 表级锁：操作时，会锁定整个表。开销小，加锁快；不会出现死锁；锁定力度大，发生锁冲突概率高，并发度最低。偏向于MyISAM存储引擎！
  - 行级锁：操作时，会锁定当前操作行。开销大，加锁慢；会出现死锁；锁定粒度小，发生锁冲突的概率低，并发度高。偏向于InnoDB存储引擎！
  - 页级锁：锁的粒度、发生冲突的概率和加锁的开销介于表锁和行锁之间，会出现死锁，并发性能一般。
- 按使用方式分类：
  - 悲观锁：每次查询数据时都认为别人会修改，很悲观，所以查询时加锁。
  - 乐观锁：每次查询数据时都认为别人不会修改，很乐观，但是更新时会判断一下在此期间别人有没有去更新这个数据
- 不同存储引擎支持的锁

| 存储引擎 | 表级锁 | 行级锁 | 页级锁 |
| -------- | ------ | ------ | ------ |
| MyISAM   | 支持   | 不支持 | 不支持 |
| InnoDB   | 支持   | 支持   | 不支持 |
| MEMORY   | 支持   | 不支持 | 不支持 |
| BDB      | 支持   | 不支持 | 支持   |

#### 3.演示InnoDB锁

- 数据准备

```mysql
-- 创建db13数据库
CREATE DATABASE db13;

-- 使用db13数据库
USE db13;

-- 创建student表
CREATE TABLE student(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10),
	age INT,
	score INT
);
-- 添加数据
INSERT INTO student VALUES (NULL,'张三',23,99),(NULL,'李四',24,95),
(NULL,'王五',25,98),(NULL,'赵六',26,97);
```

- 共享锁

```mysql
-- 标准语法
SELECT语句 LOCK IN SHARE MODE;
```

```mysql
-- 窗口1
/*
	共享锁：数据可以被多个事务查询，但是不能修改
*/
-- 开启事务
START TRANSACTION;

-- 查询id为1的数据记录。加入共享锁
SELECT * FROM student WHERE id=1 LOCK IN SHARE MODE;

-- 查询分数为99分的数据记录。加入共享锁
SELECT * FROM student WHERE score=99 LOCK IN SHARE MODE;

-- 提交事务
COMMIT;
```

```mysql
-- 窗口2
-- 开启事务
START TRANSACTION;

-- 查询id为1的数据记录(普通查询，可以查询)
SELECT * FROM student WHERE id=1;

-- 查询id为1的数据记录，并加入共享锁(可以查询。共享锁和共享锁兼容)
SELECT * FROM student WHERE id=1 LOCK IN SHARE MODE;

-- 修改id为1的姓名为张三三(不能修改，会出现锁的情况。只有窗口1提交事务后，才能修改成功)
UPDATE student SET NAME='张三三' WHERE id = 1;

-- 修改id为2的姓名为李四四(修改成功，InnoDB引擎默认是行锁)
UPDATE student SET NAME='李四四' WHERE id = 2;

-- 修改id为3的姓名为王五五(注意：InnoDB引擎如果不采用带索引的列。则会提升为表锁)
UPDATE student SET NAME='王五五' WHERE id = 3;

-- 提交事务
COMMIT;
```

- 排他锁

```mysql
-- 标准语法
SELECT语句 FOR UPDATE;
```

```mysql
-- 窗口1
/*
	排他锁：加锁的数据，不能被其他事务加锁查询或修改
*/
-- 开启事务
START TRANSACTION;

-- 查询id为1的数据记录，并加入排他锁
SELECT * FROM student WHERE id=1 FOR UPDATE;

-- 提交事务
COMMIT;
```

```mysql
-- 窗口2
-- 开启事务
START TRANSACTION;

-- 查询id为1的数据记录(普通查询没问题)
SELECT * FROM student WHERE id=1;

-- 查询id为1的数据记录，并加入共享锁(不能查询。因为排他锁不能和其他锁共存)
SELECT * FROM student WHERE id=1 LOCK IN SHARE MODE;

-- 查询id为1的数据记录，并加入排他锁(不能查询。因为排他锁不能和其他锁共存)
SELECT * FROM student WHERE id=1 FOR UPDATE;

-- 修改id为1的姓名为张三(不能修改，会出现锁的情况。只有窗口1提交事务后，才能修改成功)
UPDATE student SET NAME='张三' WHERE id=1;

-- 提交事务
COMMIT;
```

- 注意：锁的兼容性
  - 共享锁和共享锁     兼容
  - 共享锁和排他锁     冲突
  - 排他锁和排他锁     冲突
  - 排他锁和共享锁     冲突

#### 4.演示MyISAM锁

- 数据准备

```mysql
-- 创建product表
CREATE TABLE product(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(20),
	price INT
)ENGINE = MYISAM;  -- 指定存储引擎为MyISAM

-- 添加数据
INSERT INTO product VALUES (NULL,'华为手机',4999),(NULL,'小米手机',2999),
(NULL,'苹果',8999),(NULL,'中兴',1999);
```

- 读锁

```mysql
-- 标准语法
-- 加锁
LOCK TABLE 表名 READ;

-- 解锁(将当前会话所有的表进行解锁)
UNLOCK TABLES;
```

```mysql
-- 窗口1
/*
	读锁：所有连接只能读取数据，不能修改
*/
-- 为product表加入读锁
LOCK TABLE product READ;

-- 查询product表(查询成功)
SELECT * FROM product;

-- 修改华为手机的价格为5999(修改失败)
UPDATE product SET price=5999 WHERE id=1;

-- 解锁
UNLOCK TABLES;
```

```mysql
-- 窗口2
-- 查询product表(查询成功)
SELECT * FROM product;

-- 修改华为手机的价格为5999(不能修改，窗口1解锁后才能修改成功)
UPDATE product SET price=5999 WHERE id=1;
```

- 写锁

```mysql
-- 标准语法
-- 加锁
LOCK TABLE 表名 WRITE;

-- 解锁(将当前会话所有的表进行解锁)
UNLOCK TABLES;
```

```mysql
-- 窗口1
/*
	写锁：其他连接不能查询和修改数据
*/
-- 为product表添加写锁
LOCK TABLE product WRITE;

-- 查询product表(查询成功)
SELECT * FROM product;

-- 修改小米手机的金额为3999(修改成功)
UPDATE product SET price=3999 WHERE id=2;

-- 解锁
UNLOCK TABLES;
```

```mysql
-- 窗口2
-- 查询product表(不能查询。只有窗口1解锁后才能查询成功)
SELECT * FROM product;

-- 修改小米手机的金额为2999(不能修改。只有窗口1解锁后才能修改成功)
UPDATE product SET price=2999 WHERE id=2;
```

#### 5.演示悲观锁和乐观锁

- 悲观锁的概念

  - 就是很悲观，它对于数据被外界修改的操作持保守态度，认为数据随时会修改。
  - 整个数据处理中需要将数据加锁。悲观锁一般都是依靠关系型数据库提供的锁机制。
  - 我们之前所学的行锁，表锁不论是读写锁都是悲观锁。

- 乐观锁的概念

  - 就是很乐观，每次自己操作数据的时候认为没有人会来修改它，所以不去加锁。
  - 但是在更新的时候会去判断在此期间数据有没有被修改。
  - 需要用户自己去实现，不会发生并发抢占资源，只有在提交操作的时候检查是否违反数据完整性。

- 悲观锁和乐观锁使用前提

  - 对于读的操作远多于写的操作的时候，这时候一个更新操作加锁会阻塞所有的读取操作，降低了吞吐量。最后还要释放锁，锁是需要一些开销的，这时候可以选择乐观锁。
  - 如果是读写比例差距不是非常大或者系统没有响应不及时，吞吐量瓶颈的问题，那就不要去使用乐观锁，它增加了复杂度，也带来了业务额外的风险。这时候可以选择悲观锁。

- 乐观锁的实现方式

  - 版本号

    - 给数据表中添加一个version列，每次更新后都将这个列的值加1。
    - 读取数据时，将版本号读取出来，在执行更新的时候，比较版本号。
    - 如果相同则执行更新，如果不相同，说明此条数据已经发生了变化。
    - 用户自行根据这个通知来决定怎么处理，比如重新开始一遍，或者放弃本次更新。

    ```mysql
    -- 创建city表
    CREATE TABLE city(
    	id INT PRIMARY KEY AUTO_INCREMENT,  -- 城市id
    	NAME VARCHAR(20),                   -- 城市名称
    	VERSION INT                         -- 版本号
    );
    
    -- 添加数据
    INSERT INTO city VALUES (NULL,'北京',1),(NULL,'上海',1),(NULL,'广州',1),(NULL,'深圳',1);
    
    -- 修改北京为北京市
    -- 1.查询北京的version
    SELECT VERSION FROM city WHERE NAME='北京';
    -- 2.修改北京为北京市，版本号+1。并对比版本号
    UPDATE city SET NAME='北京市',VERSION=VERSION+1 WHERE NAME='北京' AND VERSION=1;
    ```

  - 时间戳

    - 和版本号方式基本一样，给数据表中添加一个列，名称无所谓，数据类型需要是timestamp
    - 每次更新后都将最新时间插入到此列。
    - 读取数据时，将时间读取出来，在执行更新的时候，比较时间。
    - 如果相同则执行更新，如果不相同，说明此条数据已经发生了变化。

#### 6.锁的总结

- 表锁和行锁

  - 行锁：锁的粒度更细，加行锁的性能损耗较大。并发处理能力较高。InnoDB引擎默认支持！
  - 表锁：锁的粒度较粗，加表锁的性能损耗较小。并发处理能力较低。InnoDB、MyISAM引擎支持！

- InnoDB锁优化建议

  - 尽量通过带索引的列来完成数据查询，从而避免InnoDB无法加行锁而升级为表锁。

  - 合理设计索引，索引要尽可能准确，尽可能的缩小锁定范围，避免造成不必要的锁定。
  - 尽可能减少基于范围的数据检索过滤条件。
  - 尽量控制事务的大小，减少锁定的资源量和锁定时间长度。
  - 在同一个事务中，尽可能做到一次锁定所需要的所有资源，减少死锁产生概率。
  - 对于非常容易产生死锁的业务部分，可以尝试使用升级锁定颗粒度，通过表级锁定来减少死锁的产生。

### 四、集群

#### 1.集群的概念

- 如今随着互联网的发展，数据的量级也是成指数的增长，从GB到TB到PB。对数据的各种操作也是愈加的困难，传统的关系型数据库已经无法满足快速查询与插入数据的需求。一台数据库服务器已经无法满足海量数据的存储需求，所以由多台数据库构成的数据库集群成了必然的方式。不过，为了保证数据的一致性，查询效率等，同时又要解决多台服务器间的通信、负载均衡等问题。
- MyCat是一款数据库集群软件，是阿里曾经开源的知名产品——Cobar，简单的说，MyCAT就是：一个新颖的数据库中间件产品支持MySQL集群，提供高可用性数据分片集群。你可以像使用mysql一样使用mycat。对于开发人员来说根本感觉不到mycat的存在。MyCat不单单是支持MySQL，像常用的关系型数据库Oracle、SqlServer都支持。

![07](./img/mysql/MySQL高级-04-授课笔记.assets/07.png)

#### 2.集群的原理

- 我们来说个例子，大海捞针和一个水瓶里捞针，毋庸置疑水瓶里一定能更快找到针，因为它需要检索的范围更小。数据库集群也是如此原理，我们可以将一个数据量为300G的数据库数据平均拆分成3部分，每个数据库中只存储100G数据，此时用户搜索，先经过我们中间代理层，中间代理层同时发出3个请求执行查询，比如第1台返回100条数据，耗时3秒，第2台返回200条数据，耗时3秒，第3台返回500条数据，耗时3秒，此时中间件只需要在800条记录中进行筛选，即可检索出用户要的结果，此时耗时其实一共只有3秒，因为每台机器做运算的时候，都是同时执行。如果我们此时直接在300G的数据库查询，耗时10秒，那使用中间件进行集群的效率就非常明显

![08](./img/mysql/MySQL高级-04-授课笔记.assets/08.png)

- MyCat的实现流程和这个流程大致相似。MyCat自身不存储数据，但用户每次链接数据库的时候，直接连接MyCat即可.所以我们MyCat自身其实就是个逻辑数据库，它自身还有表结构，表结构叫逻辑表。

#### 3.Mycat环境搭建

##### 3.1 Mycat下载和安装

- 官网：`http://www.mycat.io/`

  ![09](./img/mysql/MySQL高级-04-授课笔记.assets/09.png)

- 下载地址 : `http://dl.mycat.io/`

  ![10](./img/mysql/MySQL高级-04-授课笔记.assets/10.png)

- 选择1.6.7.1的版本，下载到D盘，安装包入下图：

  ![11](./img/mysql/MySQL高级-04-授课笔记.assets/11.png)

- 上传：使用SecureCRT的SFTP命令，将文件发送到Linux虚拟机root目录下：

  ```java
  sftp> put D:\Mycat-server-1.6.7.1-release-20190627191042-linux.tar.gz 
  ```

- 解压：解压mycat.tar.gz并查看

  ```java
  tar -zxvf mycat.tar.gz
  cd mycat
  ll
  ```

  ![12](./img/mysql/MySQL高级-04-授课笔记.assets/12.png)

- 授权：设置mycat权限

  ```java
  chmod -R 777 mycat
  ```

- 环境变量：配置环境变量

  ```java
  vi /etc/profile 
  // 添加
  export MYCAT_HOME=/root/mycat
  
  // 使环境变量生效
  source /etc/profile
  ```

- 启动mycat

  ```java
  // 进入bin目录
  [root@localhost]# cd /root/mycat/bin
  
  // 执行启动命令
  [root@localhost bin]# ./mycat start
  ```

- 查看：检测端口监听状况，Mycat的端口号是8066

  ```java
  [root@localhost bin]# netstat -ant|grep 8066
  ```

  ![13](./img/mysql/MySQL高级-04-授课笔记.assets/13.png)

- 连接：使用SQLYog连接Mycat

![14](./img/mysql/MySQL高级-04-授课笔记.assets/14.png)

- 连接后显示：

  ![15](./img/mysql/MySQL高级-04-授课笔记.assets/15.png)

##### 3.2 环境准备

- 配置模型

![16](./img/mysql/MySQL高级-04-授课笔记.assets/16.png)

- 克隆虚拟机

![17](./img/mysql/MySQL高级-04-授课笔记.assets/17.png)

![18](./img/mysql/MySQL高级-04-授课笔记.assets/18.png)

![19](./img/mysql/MySQL高级-04-授课笔记.assets/19.png)

![20](./img/mysql/MySQL高级-04-授课笔记.assets/20.png)

![21](./img/mysql/MySQL高级-04-授课笔记.assets/21.png)

![22](./img/mysql/MySQL高级-04-授课笔记.assets/22.png)

![23](./img/mysql/MySQL高级-04-授课笔记.assets/23.png)

- 修改配置网卡

  - 在第二个虚拟机中，生成全新mac地址

  ![24](./img/mysql/MySQL高级-04-授课笔记.assets/24.png)

  ![25](./img/mysql/MySQL高级-04-授课笔记.assets/25.png)

  - 重启网络

  ```linux
  // 重启网络
  service network restart
  //查看ip地址
  ip addr
  ```

- 修改mysql配置文件,更改uuid

  - 在第二个服务器上，修改mysql的uuid

  ```
  // 编辑配置文件
  vi /var/lib/mysql/auto.cnf
  // 将server-uuid更改
  ```

- 启动MySQL并查看

```
//将两台服务器的防火墙关闭
systemctl stop firewalld

//启动两台服务器的mysql
service mysqld restart

//启动两台服务器的mycat
cd /root/mycat/bin
./mycat restart

//查看监听端口
netstat -ant|grep 3306
netstat -ant|grep 8066

//使用sqlyog测试连接
```

#### 4.主从复制

- 主从复制的概念

  - 为了使用Mycat进行读写分离，我们先要配置MySQL数据库的主从复制。
  - 从服务器自动同步主服务器的数据，从而达到数据一致。
  - 进而，我们可以写操作时，只操作主服务器，而读操作，就可以操作从服务器了。
  - 原理：主服务器在处理数据时，生成binlog日志，通过对日志的备份，实现从服务器的数据同步。

  ![26](./img/mysql/MySQL高级-04-授课笔记.assets/26.png)

- 主服务器的配置

  - 在第一个服务器上，编辑mysql配置文件

  ```
  // 编辑mysql配置文件
  vi /etc/my.cnf
  
  //在[mysqld]下面加上：
  log-bin=mysql-bin # 开启复制操作
  server-id=1 # master is 1
  innodb_flush_log_at_trx_commit=1
  sync_binlog=1
  ```

  - 登录mysql，创建用户并授权

  ```
  // 登录mysql
  mysql -u root -p
  
  // 去除密码权限
  SET GLOBAL validate_password_policy=0;
  SET GLOBAL validate_password_length=1;
  
  // 创建用户
  CREATE USER 'hm'@'%' IDENTIFIED BY 'itheima';
  
  // 授权
  GRANT ALL ON *.* TO 'hm'@'%';
  ```

  - 重启mysql服务，登录mysql服务

  ```
  // 重启mysql
  service mysqld restart
  
  // 登录mysql
  mysql -u root -p
  ```

  - 查看主服务器的配置

  ```
  // 查看主服务器配置
  show master status;
  ```

  ![27](./img/mysql/MySQL高级-04-授课笔记.assets/27.png)

- 从服务器的配置

  - 在第二个服务器上，编辑mysql配置文件

  ```
  // 编辑mysql配置文件
  vi /etc/my.cnf
  
  // 在[mysqld]下面加上：
  server-id=2
  ```

  - 登录mysql

  ```
  // 登录mysql
  mysql -u root -p
  
  // 执行
  use mysql;
  drop table slave_master_info;
  drop table slave_relay_log_info;
  drop table slave_worker_info;
  drop table innodb_index_stats;
  drop table innodb_table_stats;
  source /usr/share/mysql/mysql_system_tables.sql;
  ```

  - 重启mysql，重新登录，配置从节点

  ```
  // 重启mysql
  service mysqld restart
  
  // 重新登录mysql
  mysql -u root -p
  
  // 执行
  change master to master_host='主服务器ip地址',master_port=3306,master_user='hm',master_password='itheima',master_log_file='mysql-bin.000001',master_log_pos=4642;
  ```

  - 重启mysql，重新登录，开启从节点

  ```
  // 重启mysql
  service mysqld restart
  
  // 重新登录mysql
  mysql -u root -p
  
  // 开启从节点
  start slave;
  
  // 查询结果
  show slave status\G;
  //Slave_IO_Running和Slave_SQL_Running都为yes才表示同步成功。
  ```

  ![28](./img/mysql/MySQL高级-04-授课笔记.assets/28.png)

- 测试

  - sqlyog连接主服务器

  ```mysql
  -- 主服务器创建db1数据库,从服务器会自动同步
  CREATE DATABASE db1;
  ```

  - sqlyog连接从服务器

  ```mysql
  -- 从服务器创建db2数据库,主服务器不会自动同步
  CREATE DATABASE db2;
  ```

- 启动失败的解决方案

```
启动失败：Slave_IO_Running为 NO 
方法一:重置slave
slave stop;
reset slave;
start slave ;
方法二:重设同步日志文件及读取位置
slave stop;
change master to master_log_file=’mysql-bin.000001’, master_log_pos=1;
start slave ;
```

#### 5.读写分离

- 读写分离的概念
  - 写操作只写入主服务器，读操作读取从服务器。

- 在主服务器上修改server.xml
  - user标签主要用于定义登录mycat的用户和权限。如上面定义用户名mycat和密码123456，该用户可以访问的schema的HEIMADB逻辑库。

```xml
<user name="root" defaultAccount="true">
		<property name="password">123456</property>
		<property name="schemas">HEIMADB</property>
		
		<!-- 表级 DML 权限设置 -->
		<!-- 		
		<privileges check="false">
			<schema name="TESTDB" dml="0110" >
				<table name="tb01" dml="0000"></table>
				<table name="tb02" dml="1111"></table>
			</schema>
		</privileges>		
		 -->
</user>
```

- 在主服务器上修改schema.xml

```xml
<?xml version="1.0"?>
<!DOCTYPE mycat:schema SYSTEM "schema.dtd">
<mycat:schema xmlns:mycat="http://io.mycat/">

	<schema name="HEIMADB" checkSQLschema="false" sqlMaxLimit="100" dataNode="dn1"></schema>
	
	<dataNode name="dn1" dataHost="localhost1" database="db1" />
	
	<dataHost name="localhost1" maxCon="1000" minCon="10" balance="1"
			  writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
		<heartbeat>select user()</heartbeat>
		<!-- 主服务器进行写操作 -->
		<writeHost host="hostM1" url="localhost:3306" user="root"
				   password="itheima">
		<!-- 从服务器负责读操作 -->
		<readHost host="hostS1" url="192.168.203.135:3306" user="root" password="itheima" />
		</writeHost>
	</dataHost>
	
</mycat:schema>
```

- 配置详解

  - schema标签逻辑库的概念和mysql数据库中Datebase的概念相同，我们在查询这两个逻辑库中的表的时候，需要切换到该逻辑库下才可以查到所需要的表。
  - dataNode属性：该属性用于绑定逻辑库到某个具体的database上。
  - dataNode标签： dataNode标签定义了mycat中的数据节点，也就是数据分片。一个dataNode标签就是一个独立的数据分片。
  - name属性：定义数据节点的名字，这个名字需要是唯一的，我们需要在table标签上应用这个名字，来建立表与分片对应的关系。
  - dataHost属性：该属性用于定义该分片属于那个数据库实例，属性值是引用datahost标签定义的name属性。
  - database属性：该属性用于定义该分片属于那个具体数据库实例上的具体库，因为这里使用两个纬度来定义分片，就是：实例+具体的库。因为每个库上建立的表和表结构是一样的。所以这样做就可以轻松的对表进行水平拆分。
  - dataHost标签：该标签在mycat逻辑库中也是作为最底层的标签存在，直接定义了具体的数据库实例、读写分离配置和心跳语句。

  - balance属性： 负载均衡类型
    ​    balance=0: 不开启读写分离，所有读操作都发送到当前可用的writeHost上。
    ​    balance=1: 全部的readHost与Stand by writeHost都参与select语句的负载均衡
    ​     balance=2: 所有的读操作都随机在writeHost，readHost上分发。
    ​     balance=3: 所有的读请求都随机分配到writeHost对应的readHost上执行，writeHost不负担读压力。
  - switchType属性： 
    ​    -1：表示不自动切换。
    ​    1  ：默认值，表示自动切换
    ​    2：表示基于MySQL主从同步状态决定是否切换，心跳语句： show slave status.
    ​    3:表示基于mysql galary cluster的切换机制，适合mycat1.4之上的版本，心跳语句show status like "%esrep%";
  - writeHost标签，readHost标签：这两个标签指定后端数据库的相关配置给mycat，用于实例化后端连接池。唯一不同的是，writeHost指定写实例、readHost指定读实例，组合这些读写实例来满足系统的要求。
    - host属性：用于标识不同的实例，对于writehost，一般使用*M1；对于readhost一般使用*S1.
    - url属性：后端实例连接地址，如果使用native的dbDriver，则一般为address:port这种形式，用JDBC或其他的dbDriver，则需要特殊指定。当使用JDBC时则可以这么写：jdbc:mysql://localhost:3306/。
    - user属性：后端存储实例的用户名。
    - password属性：后端存储实例的密码

- 测试

  - 重启主服务器的mycat

  ```
  // 重启mycat
  cd /root/mycat/bin
  
  ./mycat restart
  
  // 查看端口监听
  netstat -ant|grep 8066
  ```

  - sqlyog连接mycat

  ```mysql
  -- 创建学生表
  CREATE TABLE student(
  	id INT PRIMARY KEY AUTO_INCREMENT,
  	NAME VARCHAR(10)
  );
  -- 查询学生表
  SELECT * FROM student;
  
  -- 添加两条记录
  INSERT INTO student VALUES (NULL,'张三'),(NULL,'李四');
  
  -- 停止主从复制后，添加的数据只会保存到主服务器上。
  INSERT INTO student VALUES (NULL,'王五');
  ```

  - sqlyog连接主服务器

  ```mysql
  -- 主服务器：查询学生表，可以看到数据
  SELECT * FROM student;
  ```

  - sqlyog连接从服务器

  ```mysql
  -- 从服务器：查询学生表，可以看到数据(因为有主从复制)
  SELECT * FROM student;
  
  -- 从服务器：删除一条记录。(主服务器并没有删除，mycat中间件查询的结果是从服务器的数据)
  DELETE FROM student WHERE id=2;
  ```

#### 6.分库分表

- 分库分表的概念

  - 将庞大的数据进行拆分
  - 水平拆分：根据表的数据逻辑关系，将同一表中的数据按照某种条件，拆分到多台数据库服务器上，也叫做横向拆分。例如：一张1000万的大表，按照一模一样的结构，拆分成4个250万的小表，分别保存到4个数据库中。
  - 垂直拆分：根据业务的维度，将不同的表切分到不同的数据库之上，也叫做纵向拆分。例如：所有的订单都保存到订单库中，所有的用户都保存到用户库中，同类型的表保存在同一库，不同的表分散在不同的库中。

- Mycat水平拆分

  - 修改主服务器的server.xml

    - 0：本地文件方式

      在mycat/conf/sequence_conf.properties文件中：
      GLOBAL.MINDI=10000最小值
      GLOBAL.MAXID=20000最大值，建议修改到9999999999

    - 1：数据库方式

      分库分表中保证全局主键自增唯一，但是需要执行mycat函数，配置sequence_db_conf.properties

    - 2：时间戳方式

      mycat实现的时间戳，建议varchar类型，要注意id的长度

  ```xml
  <!-- 修改主键的方式 -->
  <property name="sequnceHandlerType">0</property>
  ```

  - 修改主服务器的sequence_conf.properties

  ```properties
  #default global sequence
  GLOBAL.HISIDS=      # 可以自定义关键字
  GLOBAL.MINID=10001  # 最小值
  GLOBAL.MAXID=20000  # 最大值
  GLOBAL.CURID=10000
  ```

  - 修改主服务器的schema.xml
    - table标签定义了逻辑表，所有需要拆分的表都需要在这个标签中定义。 
    - rule属性：拆分规则。mod-long是拆分规则之一，主键根据服务器数量取模，在rule.xml中指定。如果是3个数据库，那么数据取模后，平均分配到三个库中。
    - name属性：定义逻辑表的表名，这个名字就如同在数据库中执行create table命令指定的名字一样，同一个schema标签中定义的表名必须是唯一的。
    - dataNode属性： 定义这个逻辑表所属的dataNode，该属性的值需要和dataNode标签中name属性的值相互对应。

  ```xml
  <?xml version="1.0"?>
  <!DOCTYPE mycat:schema SYSTEM "schema.dtd">
  <mycat:schema xmlns:mycat="http://io.mycat/">
  
  	<schema name="HEIMADB" checkSQLschema="false" sqlMaxLimit="100">
  		<table name="product" primaryKey="id" dataNode="dn1,dn2,dn3" rule="mod-long"/>
  	</schema>
  	
  	<dataNode name="dn1" dataHost="localhost1" database="db1" />
  	<dataNode name="dn2" dataHost="localhost1" database="db2" />
  	<dataNode name="dn3" dataHost="localhost1" database="db3" />
  	
  	<dataHost name="localhost1" maxCon="1000" minCon="10" balance="1"
  			  writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
  		<heartbeat>select user()</heartbeat>
  		<!-- write -->
  		<writeHost host="hostM1" url="localhost:3306" user="root"
  				   password="itheima">
  		<!-- read -->
  		<readHost host="hostS1" url="192.168.203.135:3306" user="root" password="itheima" />
  		</writeHost>
  	</dataHost>
  	
  </mycat:schema>
  ```

  - 修改主服务器的rule.xml

  ```xml
  <function name="mod-long" class="io.mycat.route.function.PartitionByMod">
  		<!-- 数据库的数量 -->
  		<property name="count">3</property>
  </function>
  ```

  - 测试

    - mycat操作

    ```mysql
    -- 创建product表
    CREATE TABLE product(
    	id INT PRIMARY KEY AUTO_INCREMENT,
    	NAME VARCHAR(20),
    	price INT
    );
    
    -- 添加6条数据
    INSERT INTO product(id,NAME,price) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'苹果手机',6999);
    INSERT INTO product(id,NAME,price) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'华为手机',5999); 
    INSERT INTO product(id,NAME,price) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'三星手机',4999); 
    INSERT INTO product(id,NAME,price) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'小米手机',3999); 
    INSERT INTO product(id,NAME,price) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'中兴手机',2999); 
    INSERT INTO product(id,NAME,price) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'OOPO手机',1999); 
    
    -- 查询product表
    SELECT * FROM product; 
    ```

    - 主服务器操作

    ```mysql
    -- 在不同数据库中查询product表
    SELECT * FROM product;
    ```

    - 从服务器操作

    ```mysql
    -- 在不同数据库中查询product表
    SELECT * FROM product;
    ```

- Mycat垂直拆分

  - 修改主服务器的schema

  ```xml
  <?xml version="1.0"?>
  <!DOCTYPE mycat:schema SYSTEM "schema.dtd">
  <mycat:schema xmlns:mycat="http://io.mycat/">
  
  	<schema name="HEIMADB" checkSQLschema="false" sqlMaxLimit="100">
  		<table name="product" primaryKey="id" dataNode="dn1,dn2,dn3" rule="mod-long"/>
  		
  		<!-- 动物类数据表 -->
  		<table name="dog" primaryKey="id" autoIncrement="true" dataNode="dn4" />
  		<table name="cat" primaryKey="id" autoIncrement="true" dataNode="dn4" />
      
         <!-- 水果类数据表 -->
  		<table name="apple" primaryKey="id" autoIncrement="true" dataNode="dn5" />
  		<table name="banana" primaryKey="id" autoIncrement="true" dataNode="dn5" />
  	</schema>
  	
  	<dataNode name="dn1" dataHost="localhost1" database="db1" />
  	<dataNode name="dn2" dataHost="localhost1" database="db2" />
  	<dataNode name="dn3" dataHost="localhost1" database="db3" />
  	
  	<dataNode name="dn4" dataHost="localhost1" database="db4" />
  	<dataNode name="dn5" dataHost="localhost1" database="db5" />
  	
  	<dataHost name="localhost1" maxCon="1000" minCon="10" balance="1"
  			  writeType="0" dbType="mysql" dbDriver="native" switchType="1"  slaveThreshold="100">
  		<heartbeat>select user()</heartbeat>
  		<!-- write -->
  		<writeHost host="hostM1" url="localhost:3306" user="root"
  				   password="itheima">
  		<!-- read -->
  		<readHost host="hostS1" url="192.168.203.135:3306" user="root" password="itheima" />
  		</writeHost>
  	</dataHost>
  	
  </mycat:schema>
  ```

  - 测试

    - sqlyog连接mycat

    ```mysql
    -- 创建dog表
    CREATE TABLE dog(
    	id INT PRIMARY KEY AUTO_INCREMENT,
    	NAME VARCHAR(10)
    );
    -- 添加数据
    INSERT INTO dog(id,NAME) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'哈士奇');
    -- 查询dog表
    SELECT * FROM dog;
    
    
    -- 创建cat表
    CREATE TABLE cat(
    	id INT PRIMARY KEY AUTO_INCREMENT,
    	NAME VARCHAR(10)
    );
    -- 添加数据
    INSERT INTO cat(id,NAME) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'波斯猫');
    -- 查询cat表
    SELECT * FROM cat;
    
    
    
    -- 创建apple表
    CREATE TABLE apple(
    	id INT PRIMARY KEY AUTO_INCREMENT,
    	NAME VARCHAR(10)
    );
    -- 添加数据
    INSERT INTO apple(id,NAME) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'红富士');
    -- 查询apple表
    SELECT * FROM apple;
    
    
    -- 创建banana表
    CREATE TABLE banana(
    	id INT PRIMARY KEY AUTO_INCREMENT,
    	NAME VARCHAR(10)
    );
    -- 添加数据
    INSERT INTO banana(id,NAME) VALUES (NEXT VALUE FOR MYCATSEQ_GLOBAL,'香蕉');
    -- 查询banana表
    SELECT * FROM banana;
    ```

    - sqlyog连接主服务器

    ```mysql
    -- 查询dog表
    SELECT * FROM dog;
    -- 查询cat表
    SELECT * FROM cat;
    
    
    -- 查询apple表
    SELECT * FROM apple;
    -- 查询banana表
    SELECT * FROM banana;
    ```

    - sqlyog连接从服务器

    ```mysql
    -- 查询dog表
    SELECT * FROM dog;
    -- 查询cat表
    SELECT * FROM cat;
    
    
    -- 查询apple表
    SELECT * FROM apple;
    -- 查询banana表
    SELECT * FROM banana;
    ```
