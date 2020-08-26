# redis

## Redis

### 启动Redis服务

- redis-server（默认配置）
- redis-server --configKey1 configValue1 --configKey2 configValue2（根据配置项启动）
- redis-server /opt/redis/redis.conf（配置文件启动）

### 连接Redis服务器

- redis-cli -h {host} -p {port} (交互方式)
- redis-cli -h {host} -p {port} {command}	(命令方式)

### 停止Redis服务

- redis-cli shutdown nosave|save（断开与客户端连接、持久化文件生成）
- kill -9 redis（强制杀死Redis服务）

### 全局命令

- keys * ：查看所有键
- dbsize:  键总数
- exists key: 	检查键是否存在
- del key [key ...]:	删除键
- expire key seconds:	设置键过期时间
- ttl key:	查看键剩余过期时间 
- type key: 获取键的数据结构类型

	- string
	- list
	- set
	- zset
	- hash

- object encoding key:	查询键的内部编码

### 字符串

- set key value [ex seconds] [px milliseconds] [nx|xx]:	设置值
- get key:	获取值
- mset key value [key value ...]:	批量设置值
- mget key [key...]:		批量获取值
- incr key:	值自增

	- 值不是整数，报错
	- 键不存在，默认为0，自增后返回1
	- 值是整数，返回自增后的结果

- decr: 值自减
- incrby、decrby、incrbyfloat
- append key value: 追加值
- strlen key: 字符串长度
- getset: 设置并返回原值
- setrange key offeset value: 设置指定位置的字符
- getrange key start end：获取部分字符串

### 哈希

- hset key field value：	设置值
- hget key field:	获取值
- hdel key field [field ...]:		删除field
- hlen key:	计算field个数
- hmget key field [field ...]:	批量获取
- hmset key field [field value ...]:	批量设置
- hexists key field:		检查field是否存在
- hkeys key:		获取所有field
- hvals key：		获取所有value
- hgetall key:		获取所有field-value
- hincrby key field、hincrbyfloat key field
- hstrlen key field:		计算value的字符串长度

### 列表

- 添加

	- rpush key value [value...]:	从右边插入元素
	- lpush key value [value...]:	从左边插入元素
	- linsert key before/after pivot value:	在值为pivot的前面或后面插入元素

- 查找

	- lrange key start end:	获取指定范围内的元素列表
	- lindex key index:	获取列表指定索引下标的元素
	- llen key:	获取列表长度

- 删除

	- lpop key:	从列表左侧弹出元素
	- rpop key:	从列表右侧弹出元素
	- lrem  key count value:	删除值等于value的元素

		- count>0:	从左到右，删除最多count个元素
		- count<0:	从右往左，删除最多count绝对值个元素
		- count=0:	删除所有元素

	- ltrim key start end:	按照索引范围修剪列表

- 修改

	- lset key index newValue:	修改指定索引下标的元素

- 阻塞

	- blpop/brpop key [key...] timeout

		- 列表为空

			- timeout=n:	n秒后返回
			- timeout=0

				- 客户端一直阻塞
				- 如果列表有值插入则立即返回

		- 列表非空

			- 客户端立即返回

		- brpop两点注意

			- 多个键，brpop会从左往右遍历键，一旦有一个键能弹出元素，客户端立即返回
			- 多个客户端对一个键执行brpop，最先执行brpop命令的客户端可以获取到弹出的值

### 集合

- sadd key member [...member]:	添加元素
- srem key member [...member]:	删除元素
- sismember key member:	判断是否为集合元素
- scard key:	计算集合大小
- srandmember key [count]:	随机返回count个元素
- spop key [count]:	随机弹出count个元素
- smembers key: 返回集合所有元素
- sinter key [key...]:	返回多个集合交集
- sunion key [key...]:	返回多个集合并集
- sdiff key [key...]:	返回多个集合差集
- sinterstore/sunionstore/sdiffstore destination key [...key]:	将返回的集合存储在destination中

### 有序集合

- zadd key [NX|XX] [CH] [INCR] score member [...score member]:	添加元素

	- NX: 添加
	- XX：更新
	- CH：返回这次操作后发生变化的个数
	- INCR：对score做增加

- zrem key member [...member]:	删除元素
- zcard key:	计算有序集合大小
- zscore key member:	返回某个元素的分数
- zrank/zrevrank key member:	返回某个元素的排名(升序、降序)
- zincrby key increment member:	增加成员分数
- zrange/zrevrange key start end:	返回指定排名（升序、降序）范围内的元素
- zrangebyscore/zrevrangebyscore key mix max:	返回指定分数（升序、降序）范围内的元素
- zcount key min max:	返回指定分数范围成员个数
- zremrangebyrank key start end:	删除指定排名内的升序元素
- zremrangebyscore key min max:	删除指定分数范围内的元素
- zinterstore destination numkeys key [...key] [weights weight [...weight]] [aggrerate sum|min|max]:	交集
- zunionstore destination numkeys key [...key] [weights weight [...weight]] [aggrerate sum|min|max]:		并集

## 核心

### Redis

- 单线程模型

	- 请求

		- 步骤

			- 发送命令
			- 执行命令
			- 返回结果

		- 重点

			- 一条命令从客户端达到服务端不会立刻被执行， 所有命令都会进入一个队列中，然后逐个执行。

- 单线程为什么可以这么快

	- 纯内存访问
	- 非阻塞I/O，Redis使用epoll作为I/O多路复用技术的实现，加上Redis自身的时间处理模型（Redis Event Loop）
	- 避免线程切换和静态条件的消耗

## 数据结构

### 字符串

- 内部编码

	- int：	8个字节的长整型
	- embstr：小于等于39个字节的字符串
	- raw：大于39个字节的字符串

- 使用场景

	- 缓存：Redis作为缓存层，MySQL作为存储层。

		- 加速读写和降低后端压力的作用

	- 计数：使用Redis作为计数的基础工具。

		- 实现快速计数、查询缓存且数据可以异步落地到其他数据源

	- 共享Session：使用Redis将用户的Session集中管理。

		- 出于负载均衡的考虑，分布式服务会将用户的访问均衡到不同服务器，用户每刷新一次就有可能发现需要重新登录

	- 限速：限制用户单位时间内访问次数

### 哈希

- 内部编码

	- ziplist(压缩表)
	- hashtable（哈希表）

- 使用场景

	- 缓存用户信息

### 列表

- 内部编码

	- ziplist
	- linkedlist

- 使用场景

	- 消息队列

		- 生产者使用lpush从列表左侧插入元素，消费者使用brpop命令阻塞式的‘抢’列表尾部的元素

	- 文章列表

		- 存储用户文章列表，分页获取文章

### 集合

- 内部编码

	- intset:
	- hashtable:

- 使用场景

	- 用户标签

### 有序集合

- 内部编码

	- ziplist
	- skiplist

- 使用场景

	- 排行榜系统

*XMind: ZEN - Trial Version*