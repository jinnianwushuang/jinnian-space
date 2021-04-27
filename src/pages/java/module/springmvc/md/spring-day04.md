# spring 事务

## 1)事务回顾

### 1.1)什么是事务？

事务指数据库中多个操作合并在一起形成的操作序列

### 1.2)事务的作用

1.当数据库操作序列中个别操作失败时，提供一种方式使数据库状态恢复到正常状态（**A**），保障数据库即使在异常状态下仍能保持数据一致性（**C**）（要么操作前状态，要么操作后状态）。

2.当出现并发访问数据库时，在多个访问间进行相互隔离，防止并发访问操作结果互相干扰（**I**）。

- 事务特征（ACID）

  - 原子性（Atomicity）指事务是一个不可分割的整体，其中的操作要么全执行或全不执行

  - 一致性（Consistency）事务前后数据的完整性必须保持一致

  - 隔离性（Isolation）事务的隔离性是多个用户并发访问数据库时，数据库为每一个用户开启的事务，不能被其他事务的操作数据所干扰，多个并发事务之间要相互隔离

  - 持久性（Durability）持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来即使数据库发生故障也不应该对其有任何影响

### 1.3)事务的隔离级

- 脏读：允许读取未提交的信息

  - 原因：Read uncommitted

  解决方案： （表级读锁）

![1591321851725](./img/java/springmvc/Spring-day04/1591321851725.png)

- 不可重复读：读取过程中单个数据发生了变化
  - 解决方案： Repeatable read （行级写锁）

![1591321927034](./img/java/springmvc/Spring-day04/1591321927034.png)

- 幻读：读取过程中数据条目发生了变化
  - 解决方案： Serializable（表级写锁）

![1591321959641](./img/java/springmvc/Spring-day04/1591321959641.png)



## 2)事务管理

### 2.1)**Spring**事务核心对象

- J2EE开发使用分层设计的思想进行，对于简单的业务层转调数据层的单一操作，事务开启在业务层或者数据层并无太大差别，当业务中包含多个数据层的调用时，需要在业务层开启事务，对数据层中多个操作进行组合并归属于同一个事务进行处理

- Spring为业务层提供了整套的事务解决方案

  - PlatformTransactionManager
  - TransactionDefinition

  - TransactionStatus

### **2.2)PlatformTransactionManager**

- 平台事务管理器实现类

  - DataSourceTransactionManager  适用于Spring JDBC或MyBatis

  - HibernateTransactionManager  适用于Hibernate3.0及以上版本

  - JpaTransactionManager  适用于JPA

  - JdoTransactionManager  适用于JDO

  - JtaTransactionManager  适用于JTA



- JPA（Java Persistence API）Java EE 标准之一，为POJO提供持久化标准规范，并规范了持久化开发的统一API，符合JPA规范的开发可以在不同的JPA框架下运行

- JDO(Java Data Object )是Java对象持久化规范，用于存取某种数据库中的对象，并提供标准化API。与JDBC相比，JDBC仅针对关系数据库进行操作，JDO可以扩展到关系数据库、文件、XML、对象数据库（ODBMS）等，可移植性更强

- JTA（Java Transaction API）Java EE 标准之一，允许应用程序执行分布式事务处理。与JDBC相比，JDBC事务则被限定在一个单一的数据库连接，而一个JTA事务可以有多个参与者，比如JDBC连接、JDO 都可以参与到一个JTA事务中

此接口定义了事务的基本操作

- 获取事务 ：

  ```java
  TransactionStatus getTransaction(TransactionDefinition definition)
  ```

- 提交事务 ：

  ```java
  void commit(TransactionStatus status) 
  ```

- 回滚事务 ：

  ```java
  void rollback(TransactionStatus status)
  ```

### **2.3)TransactionDefinition**

此接口定义了事务的基本信息

- 获取事务定义名称

  ```java
  String getName()
  ```

- 获取事务的读写属性

  ```java
  boolean isReadOnly()
  ```

- 获取事务隔离级别

  ```java
  int getIsolationLevel()
  ```

- 获事务超时时间

  ```java
  int getTimeout()
  ```

- 获取事务传播行为特征

  ```java
  int getPropagationBehavior()
  ```

### **2.4)TransactionStatus**

此接口定义了事务在执行过程中某个时间点上的状态信息及对应的状态操作

![1591322466820](./img/java/springmvc/Spring-day04/1591322466820.png)

### **2.5)事务控制方式**

- 编程式

- 声明式（XML）

- 声明式（注解）

### **2.6)案例说明**

#### 2.6.1)案例说明

银行转账业务说明

银行转账操作中，涉及从A账户到B账户的资金转移操作。数据层仅提供单条数据的基础操作，未设计多账户间的业务操作。

#### 2.6.2)案例环境（基于Spring、Mybatis整合）

- 业务层接口提供转账操作

```java
/**
* 转账操作
* @param outName     出账用户名
* @param inName      入账用户名
* @param money       转账金额
*/
public void transfer(String outName,String inName,Double money);
```

- 业务层实现提供转账操作

```java
public void transfer(String outName,String inName,Double money){
    accountDao.inMoney(outName,money);                                                       accountDao.outMoney(inName,money);
}
```

- 数据层提供对应的入账与出账操作

```xml
<update id="inMoney">
	update account set money = money + #{money} where name = #{name}
</update>
<update id="outMoney">
	update account set money = money - #{money} where name = #{name}
</update>
```

#### **2.6.3)编程式事务**

```java
public void transfer(String outName,String inName,Double money){
    //创建事务管理器
    DataSourceTransactionManager dstm = new DataSourceTransactionManager();
    //为事务管理器设置与数据层相同的数据源
    dstm.setDataSource(dataSource);
    //创建事务定义对象
    TransactionDefinition td = new DefaultTransactionDefinition();
    //创建事务状态对象，用于控制事务执行
    TransactionStatus ts = dstm.getTransaction(td);
    accountDao.inMoney(outName,money);
    int i = 1/0;    //模拟业务层事务过程中出现错误
    accountDao.outMoney(inName,money);
    //提交事务
    dstm.commit(ts);
}
```

### 2.7)使用AOP控制事务

将业务层的事务处理功能抽取出来制作成AOP通知，利用环绕通知运行期动态织入

```java
public Object tx(ProceedingJoinPoint pjp) throws Throwable {
    
    DataSourceTransactionManager dstm = new DataSourceTransactionManager();
    dstm.setDataSource(dataSource);
    TransactionDefinition td = new DefaultTransactionDefinition();
    TransactionStatus ts = dstm.getTransaction(td);
    Object ret = pjp.proceed(pjp.getArgs());
    dstm.commit(ts);
    
    return ret;
}
```

配置AOP通知类，并注入dataSource

```xml
<bean id="txAdvice" class="com.itheima.aop.TxAdvice">
    <property name="dataSource" ref="dataSource"/>
</bean>
```

使用环绕通知将通知类织入到原始业务对象执行过程中

```xml
<aop:config>
    <aop:pointcut id="pt" expression="execution(* *..transfer(..))"/>
    <aop:aspect ref="txAdvice">
        <aop:around method="tx" pointcut-ref="pt"/>
    </aop:aspect>
</aop:config>
```

### **2.8声明式事务（XML）**

**AOP**配置事务是否具有特例性？

```java
public Object tx(ProceedingJoinPoint pjp) throws Throwable {
    DataSourceTransactionManager dstm = new DataSourceTransactionManager();
    dstm.setDataSource(dataSource);
    TransactionDefinition td = new DefaultTransactionDefinition();
    TransactionStatus ts = dstm.getTransaction(td);
    Object ret = pjp.proceed(pjp.getArgs());
    dstm.commit(ts);

    return ret;
}
```

```xml
<bean id="txAdvice" class="com.itheima.aop.TxAdvice">
	<property name="dataSource" ref="dataSource"/>
</bean>
```

使用tx命名空间配置事务专属通知类

```xml
<tx:advice id="txAdvice" transaction-manager="txManager">
    <tx:attributes>
        <tx:method name="*" read-only="false" />
        <tx:method name="get*" read-only="true" />
        <tx:method name="find*" read-only="true" />
    </tx:attributes>
</tx:advice>
```

使用aop:advisor在AOP配置中引用事务专属通知类

```xml
<aop:config>
    <aop:pointcut id="pt" expression="execution(* *..*(..))"/>
    <aop:advisor advice-ref="txAdvice" pointcut-ref="pt"/>
</aop:config>
```

#### 2.8.1)**aop:advice与aop:advisor区别**

- aop:advice配置的通知类可以是普通java对象，不实现接口，也不使用继承关系

- aop:advisor配置的通知类必须实现通知接口

  - MethodBeforeAdvice

  - AfterReturningAdvice

  - ThrowsAdvice

  - ……

#### 2.8.2)tx配置----tx:advice

- 名称：tx:advice

- 类型：**标签**

- 归属：beans标签

- 作用：专用于声明事务通知

- 格式：

  ```xml
  <beans>
      <tx:advice id="txAdvice" transaction-manager="txManager">
      </tx:advice>
  </beans>
  ```

- 基本属性：

  - id ：用于配置aop时指定通知器的id

  - transaction-manager ：指定事务管理器bean

#### 2.8.3)tx配置----tx:attributes

- 名称：tx:attributes

- 类型：**标签**

- 归属：tx:advice标签

- 作用：定义通知属性

- 格式：

  ```xml
  <tx:advice id="txAdvice" transaction-manager="txManager">
      <tx:attributes>
      </tx:attributes>
  </tx:advice>
  ```

- 基本属性：

  - 无

#### 2.8.4)tx配置----tx:method

- 名称：tx:method

- 类型：**标签**

- 归属：tx:attribute标签

- 作用：设置具体的事务属性

- 格式：

  ```xml
  <tx:attributes>
      <tx:method name="*" read-only="false" />
      <tx:method name="get*" read-only="true" />
  </tx:attributes>
  ```

- 说明：

  通常事务属性会配置多个，包含1个读写的全事务属性，1个只读的查询类事务属性

**tx:method属性**

![1591367291135](./img/java/springmvc/Spring-day04/1591367291135.png)

### **2.9)事务传播行为**

- 事务管理员

- 事务协调员

![1591367347482](./img/java/springmvc/Spring-day04/1591367347482.png)

- 事务传播行为描述的是事务协调员对事务管理员所携带事务的处理态度

### **2.10)事务传播行为**

![1591367375088](./img/java/springmvc/Spring-day04/1591367375088.png)

### **2.11)事务传播应用**

- 场景A：生成订单业务

  - 子业务S1：记录日志到数据库表X

  - 子业务S2：保存订单数据到数据库表Y

  - 子业务S3：……

  - 如果S2或S3或……事务提交失败，此时S1是否回滚？如何控制？

  - （S1需要新事务）

- 场景B：生成订单业务

  - 背景1：订单号生成依赖数据库中一个专门用于控制订单号编号生成的表M获取

  - 背景2：每次获取完订单号，表M中记录的编号自增1

  - 子业务S1：从表M中获取订单编号

  - 子业务S2：保存订单数据，订单编号来自于表M

  - 子业务S3：……

  - 如果S2或S3或……事务提交失败，此时S1是否回滚？如何控制？

  - （S1需要新事务）

### **2.12)声明式事务（注解）**

#### 2.12.1)@Transactional

- 名称：@Transactional

- 类型：**方法注解，类注解，接口注解**

- 位置：方法定义上方，类定义上方，接口定义上方

- 作用：设置当前类/接口中所有方法或具体方法开启事务，并指定相关事务属性

- 范例：

  ```java
  @Transactional(
      readOnly = false,
      timeout = -1,
      isolation = Isolation.DEFAULT,
      rollbackFor = {ArithmeticException.class, IOException.class},
      noRollbackFor = {},
      propagation = Propagation.REQUIRES_NEW
  )
  ```

#### 2.12.2)tx:annotation-driven

- 名称：tx:annotation-driven

- 类型：**标签**

- 归属：beans标签

- 作用：开启事务注解驱动，并指定对应的事务管理器

- 范例：

  ```xml
  <tx:annotation-driven transaction-manager="txManager"/>
  ```

### **2.13)声明式事务（纯注解驱动）**

- 名称：@EnableTransactionManagement

- 类型：**类注解**

- 位置：Spring注解配置类上方

- 作用：开启注解驱动，等同XML格式中的注解驱动

- 范例：

  ```java
  @Configuration
  @ComponentScan("com.itheima")
  @PropertySource("classpath:jdbc.properties")
  @Import({JDBCConfig.class,MyBatisConfig.class,TransactionManagerConfig.class})
  @EnableTransactionManagement
  public class SpringConfig {
  }
  ```

  ```java
  public class TransactionManagerConfig {
      @Bean
      public PlatformTransactionManager getTransactionManager(@Autowired DataSource dataSource){
          return new DataSourceTransactionManager(dataSource);
      }
  }
  ```

## 3)模板对象

### 3.1)Spring模块对象

![1591368087398](./img/java/springmvc/Spring-day04/1591368087398.png)

- TransactionTemplate

- JdbcTemplate

- RedisTemplate

- RabbitTemplate

- JmsTemplate

- HibernateTemplate

- RestTemplate

### 3.2)JdbcTemplate（了解）

提供标准的sql语句操作API

```java
public void save(Account account) {
    String sql = "insert into account(name,money)values(?,?)";
    jdbcTemplate.update(sql,account.getName(),account.getMoney());
}
```

### 3.3)NamedParameterJdbcTemplate(了解）

提供标准的具名sql语句操作API

```java
public void save(Account account) {
    String sql = "insert into account(name,money)values(:name,:money)";
    Map pm = new HashMap();
    pm.put("name",account.getName());
    pm.put("money",account.getMoney());
    jdbcTemplate.update(sql,pm);
}
```

### **3.4)RedisTemplate**

RedisTemplate对象结构

![1591368270508](./img/java/springmvc/Spring-day04/1591368270508.png)

```java
public void changeMoney(Integer id, Double money) {
    redisTemplate.opsForValue().set("account:id:"+id,money);
}
public Double findMondyById(Integer id) {
    Object money = redisTemplate.opsForValue().get("account:id:" + id);
    return new Double(money.toString());
}
```



## 4)事务底层原理解析

### **4.1)策略模式应用**

策略模式（Strategy Pattern）使用不同策略的对象实现不同的行为方式，策略对象的变化导致行为的变化。

![1591368340720](./img/java/springmvc/Spring-day04/1591368340720.png)

策略模式（Strategy Pattern）使用不同策略的对象实现不同的行为方式，策略对象的变化导致行为的变化。

![1591368370924](./img/java/springmvc/Spring-day04/1591368370924.png)

