# redis事务和mysql事务的区别

**事务的四大特性**

 



ACID，指数据库事务正确执行的四个基本要素的缩写。包含：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）、持久性（Durability）。



##  

## ***\*原子性(Atomicity)\****

 



说的是一个事物内所有操作就是最小的一个操作单元，要么全部成功，要么全部失败。这是最基本的特性，保证了因为一些其他因素导致数据库异常，或者宕机。



## ***\*一致性(Consistency)\****

 



一个事务可以封装状态改变（除非它是一个只读的）。事务必须始终保持系统处于一致的状态，不管在任何给定的时间并发事务有多少。

 

一致性有下面特点：

 

· 

如果一个操作触发辅助操作（级联，触发器），这些也必须成功，否则交易失败。

· 

· 

如果系统是由多个节点组成，一致性规定所有的变化必须传播到所有节点（多主复制）。如果从站节点是异步更新，那么我们打破一致性规则，系统成为“最终一致性”。

· 

· 

一个事务是数据状态的切换，因此，如果事务是并发多个，系统也必须如同串行事务一样操作。

· 

 

在现实中，事务系统遭遇并发请求时，这种串行化是有成本的， Amdahl法则描述如下：它是描述序列串行执行和并发之间的关系。

“一个程序在并行计算情况下使用多个处理器所能提升的速度是由这个程序中串行执行部分的时间决定的。”

大多数数据库管理系统选择（默认情况下）是放宽一致性，以达到更好的并发性。



## ***\*隔离性\****

 



 


事物的隔离性，基于原子性和一致性，因为事物是原子化，量子化的，所以，事物可以有多个原子包的形式并发执行，但是，每个事物互不干扰。

 

但是，由于多个事物可能操作同一个资源，不同的事物为了保证隔离性，会有很多锁方案，当然这是数据库的实现，他们怎么实现的，我们不必深究。



 

## ***\*持久性\****

 



 

持久性，当一个事物提交之后，数据库状态永远的发生了改变，即这个事物只要提交了，哪怕提交后宕机，他也确确实实的提交了，不会出现因为刚刚宕机了而让提交不生效，是要事物提交，他就像洗不掉的纹身，永远的固化了，除非你毁了硬盘。



 

**事务命令**

 

***\*mysql：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEDE.tmp.png) 

 

Begin：显式的开启一个事务

Commit：提交事务，将对数据库进行的所有的修改变成永久性

Rollback：结束用户的事务，并撤销现在正在进行的未提交的修改

 

![img](redis事务和mysql事务的区别.assets/wpsEDF.tmp.png) 

 

***\*redis：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEE0.tmp.png) 

 

Multi：标记事务的开始

Exec：执行事务的commands队列

Discard：结束事务，并清除commands队列

 

![img](redis事务和mysql事务的区别.assets/wpsEE1.tmp.png) 

 

**默认状态**

***\*mysql：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEE2.tmp.png) 

mysql会默认开启一个事务，且缺省设置是自动提交，即每成功执行sql，一个事务就会马上commit，所以不能rollback，

![img](redis事务和mysql事务的区别.assets/wpsEE3.tmp.png) 

 

***\*redis：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEE4.tmp.png) 

redis默认不会开启事务，即command会立即执行，而不会排队，并不支持rollback

![img](redis事务和mysql事务的区别.assets/wpsEE5.tmp.png) 

 

**使用方式**

***\*mysql（包含两种方式）：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEE6.tmp.png) 

 

用Begin、Rollback、commit显式开启并控制一个 ***\*新的\**** Transaction

执行命令 set autocommit=0，用来禁止当前会话自动commit，控制 ***\*默认开启的事务\****

 

![img](redis事务和mysql事务的区别.assets/wpsEE7.tmp.png) 

 

***\*redis：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEE8.tmp.png) 

 

用multi、exec、discard，显式开启并控制一个Transaction。

（注意：这里没有强调 ***\*“新的”\**** ，因为默认是不会开启事务的）。

 

![img](redis事务和mysql事务的区别.assets/wpsEE9.tmp.png) 

 

**实现原理**

***\*mysql：\****

 

![img](redis事务和mysql事务的区别.assets/wpsEEA.tmp.png) 

 

mysql实现事务，是基于undo/redo日志

undo记录修改前状态，rollback基于undo日志实现

redo记录修改后的状态，commit基于redo日志实现

 

既然是基于redo日志实现记录修改后的状态，那么大家应该也知道，**redo日志是innodb专有的**，所以innodb会支持事务

 

在mysql中无论是否开启事务，sql都会被立即执行并返回执行结果，只是事务开启后执行后的状态只是记录在redo日志，执行commit之后，数据才会被写入磁盘

 

（以上内容后面我会详细在mysql篇给大家讲到，大家可以先简单了解下）

 

· 

int insertSelective = serviceOrderMapper.insertSelective(s);

所以，上述代码，insertSelective 将会被立即赋值（无论是否开启事务，只是结果或未被写入磁盘）：

· 

insertSelective = 受影响的行数;

![img](redis事务和mysql事务的区别.assets/wpsEEB.tmp.png) 

 

***\*redis:\****

 

![img](redis事务和mysql事务的区别.assets/wpsEEC.tmp.png) 

 

redis实现事务，是基于commands队列

 

如果没有开启事务，command将会被立即执行并返回执行结果，并且直接写入磁盘

 

如果事务开启，command不会被立即执行，而是排入队列，并返回排队状态（具体依赖于客户端（例如：spring-data-redis）自身实现）。

调用exec才会执行commands队列

· 

boolean a = redisTemplate.opsForZSet().add("generalService",orderId,System.currentTimeMillis())boolean a = redisTemplate.opsForZSet().add("generalService",orderId,System.currentTimeMillis())

以上代码如果没有开启事务，操作被立即执行，a将会被立即赋值（true/false）

 

如果开启事务，操作不会被立即执行，将会返回null值，而a的类型是boolean，所以将会抛出异常：

· 

java.lang.NullPointerException  空指针异常

 

![img](redis事务和mysql事务的区别.assets/wpsEED.tmp.png) 

 

**Redis事务不支持Rollback（重点）**

 

![img](redis事务和mysql事务的区别.assets/wpsEEE.tmp.png) 

事实上Redis命令在事务执行时可能会失败，但仍会继续执行剩余命令而不是Rollback（事务回滚）。如果你使用过关系数据库，这种情况可能会让你感到很奇怪。然而针对这种情况具备很好的解释：

 

· 

Redis命令可能会执行失败，仅仅是由于错误的语法被调用（命令排队时检测不出来的错误），或者使用错误的数据类 型操作某个Key：

· 

 这意味着，实际上失败的命令都是编程错误造成的，都是开发中能够被检测出来的，生产环境中不应该存在。

· 

 

· 

· 

由于不必支持Rollback,Redis内部简洁并且更加高效。

· 

![img](redis事务和mysql事务的区别.assets/wpsEFF.tmp.png) 

 

**redis 事务中的错误**

##  

![img](redis事务和mysql事务的区别.assets/wpsF00.tmp.jpg) 

 

 

事务期间，可能会遇到两种命令错误：

 

· 

在调用EXEC命令之前出现错误（COMMAND排队失败）。

· 

 

· 

例如，命令可能存在语法错误（参数数量错误，错误的命令名称...）；

· 

 

· 

或者可能存在某些关键条件，如内存不足的情况（如果服务器使用maxmemory指令做了内存限制）。

· 

 

**客户端会在****EXEC****调用之前检测第一种错误**。 通过检查排队命令的状态回复（***注意：这里是指排队的状态回复，而不是执行结果***），如果命令使用QUEUED进行响应，则它已正确排队，否则Redis将返回错误。如果排队命令时发生错误，大多数客户端将中止该事务并清除命令队列。然而：

 

· 

在Redis 2.6.5之前，这种情况下，在EXEC命令调用后，客户端会执行命令的子集（成功排队的命令）而忽略之前的错误。

· 

 

· 

从Redis 2.6.5开始，服务端会记住在累积命令期间发生的错误，当EXEC命令调用时，将拒绝执行事务，并返回这些错误，同时自动清除命令队列。

· 

 

· 

示例如下：

· 

· 

· 

· 

· 

\>MULTI+OK>INCR a b c-ERR wrong number of arguments for 'incr' command

 

这是由于INCR命令的语法错误，将在调用EXEC之前被检测出来，并终止事务（version2.6.5+）。

 

· 

在调用EXEC命令之后出现错误。

· 

 

· 

例如，使用错误的值对某个key执行操作（如针对String值调用List操作）

· 

 

**EXEC****命令执行之后发生的错误并不会被特殊对待**：即使事务中的某些命令执行失败，其他命令仍会被正常执行。

 

· 

示例如下：

· 

· 

· 

· 

· 

· 

· 

· 

· 

· 

· 

\>MULTI+OK>SET a 3+QUEUED>LPOP a+QUEUED>EXEC*2+OK-ERR Operation against a key holding the wrong kind of value>

· 

EXEC返回一个包含两个元素的字符串数组，一个元素是OK，另一个是-ERR……。

· 

 

· 

能否将错误合理的反馈给用户这取决于客户端library(如：Spring-data-redis.redisTemplate)的自身实现。

· 

 

· 

需要注意的是，即使命令失败，队列中的所有其他命令也会被处理----Redis不会停止命令的处理。

· 

 3

​     结语        

 

 

  redis和mysql 的事务在默认状态，使用方式，实现原理等方面都是有很大区别的

 

  mysql的事务完美的支持了事务的四大特性，而redis事务只保证了其中的一致性和隔离性，不满足原子性和持久性

 

 