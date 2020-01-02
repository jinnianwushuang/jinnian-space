<template>
    <div>
        <h4>mysql 简单命令</h4>
     <pre>
         CREATE TABLE `o2o`.`Untitled`  (
  `area_id` int(2) NOT NULL AUTO_INCREMENT,
  `area_name` varchar(255) NOT NULL,
  `priority` int(2) NOT NULL DEFAULT 0,
  `create_time` datetime(0) NULL DEFAULT NULL,
  `last_edit_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`area_id`),
	unique key `UK_AREA`(`area_name`)
)engine=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ;

     </pre>

     <pre>
         加入服务
加入 环境变量
管理员启动 CMD
mysql -u root -p  输入密码
命令行要带 ； 
ddl
dml
dql
dcl


create database web01; 创建
create database web01 default character set utf8;
show create database web01; 查看结构
use web01;  database changed;  使用表
select database(); 查看当前正在操作的库 

creat table user(
uid int(32) primary key auto_increment,
uname varchar(32),
upassword varchar(32)
);
show tables; 展示所有表
desc user; 显示user表的详细信息
drop table user; 删除表
改变my.ini 文件重启 mysql 服务 ，防止乱码，设置字符集utf8
set uname gbk;  在 cmd 中 改变单列数据编码，防止中文乱码，只在CMD显示上有效
alter table user add uage int(32) not null; 添加一列
alter table user modify uage varchar(100) null; 改变列属性
alter table user uage uinfo varchar(100) null; 改变列名
alter table user drop uinfo; 删除列

insert into user(uid,uname,upasswod) values(null,'name1','pass1');
insert into user values(null,'q','w'); 全字段插入
update user set uname='po', upassword='p1' where uid=5; 更新表数值
delete from user where uid=2;
truncate table user; 摧毁表并重建一张一样字段的表 ，不可回滚，本质上是两张表
start trancation;开启事务
rollback;  回滚 

select [distinct] * | 列名... from  表 [where 条件]。
 select *  from user as p; 表别名查询
select pname as pn from product ;列别名查询
select distinct pq from product; 去掉重复值查询
select pname,pr+12 from product; 带运算查询
select * from pr where pid>45; 条件查询
select * from  pro  where pname like '_新%'； 格式 占位符查询 第二个字是新
select * from  pro where pid in (4,8,9,52,44,63);  in  范围查询
select * from pro where pr is null ; 根据空值查询 
 and or  not 逻辑查询  where not (pr>100);
 排序
select * from pro where pname like '_新%' order by price desc; 排序
聚合 sum() avg() count(*) max() min()
select sum(price) from pro; 聚合
分组
select cid ,count(*) from product group by cid;
select cid ,avg(price) from product group by having avg(price)>60
根据cid分组，分组统计每组商品的平均价格，并且平均价格大于60；












     </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>