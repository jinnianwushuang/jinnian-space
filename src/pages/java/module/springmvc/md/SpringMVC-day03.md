<!--
 * @Date           : 2021-04-28 01:12:51
 * @FilePath       : /jinnian-space/src/pages/java/module/springmvc/md/SpringMVC-day03.md
 * @Description    : 
-->
# 1 校验框架

## 1.1 校验框架入门

### 1.1.1 表单校验的重要性

* 表单校验保障了数据有效性、安全性  

![image-20200505144306747](./img/java/springmvc/SpringMVC-day03/image-20200505144306747.png)

数据可以随意输入，导致错误的结果。后端表单校验的重要性。

### 1.1.2 表单校验分类  

* 校验位置：
  * 客户端校验
  * 服务端校验
* 校验内容与对应方式：
  * 格式校验
    * 客户端：使用Js技术，利用正则表达式校验
    * 服务端：使用校验框架 
  * 逻辑校验
    * 客户端：使用ajax发送要校验的数据，在服务端完成逻辑校验，返回校验结果
    * 服务端：接收到完整的请求后，在执行业务操作前，完成逻辑校验

###  1.1.3 表单校验规则

* 长度：例如用户名长度，评论字符数量
* 非法字符：例如用户名组成
* 数据格式：例如Email格式、 IP地址格式
* 边界值：例如转账金额上限，年龄上下限
* 重复性：例如用户名是否重复

### 1.1.4 表单校验框架

* JSR（Java Specification Requests）：Java 规范提案  

    303：提供bean属性相关校验规则  

* JSR规范列表
  * 企业应用技术
     Contexts and Dependency Injection for Java (Web Beans 1.0) (JSR 299)
     Dependency Injection for Java 1.0 (JSR 330)@postConstruct, @PreDestroy
     Bean Validation 1.0 (JSR 303)
     Enterprise JavaBeans 3.1 (includes Interceptors 1.1) (JSR 318)
     Java EE Connector Architecture 1.6 (JSR 322)
     Java Persistence 2.0 (JSR 317)
     Common Annotations for the Java Platform 1.1 (JSR 250)
     Java Message Service API 1.1 (JSR 914)
     Java Transaction API (JTA) 1.1 (JSR 907)
     JavaMail 1.4 (JSR 919)
  * Web应用技术
     Java Servlet 3.0 (JSR 315)
     JavaServer Faces 2.0 (JSR 314)
     JavaServer Pages 2.2/Expression Language 2.2 (JSR 245)
     Standard Tag Library for JavaServer Pages (JSTL) 1.2 (JSR 52)
     Debugging Support for Other Languages 1.0 (JSR 45)
     模块化 (JSR 294)
     Swing应用框架 (JSR 296)
     JavaBeans Activation Framework (JAF) 1.1 (JSR 925)
     Streaming API for XML (StAX) 1.0 (JSR 173)
  * 管理与安全技术
     Java Authentication Service Provider Interface for Containers (JSR 196)
     Java Authorization Contract for Containers 1.3 (JSR 115)
     Java EE Application Deployment 1.2 (JSR 88)
     J2EE Management 1.1 (JSR 77)
     Java SE中与Java EE有关的规范
     JCache API (JSR 107)
     Java Memory Model (JSR 133)
     Concurrency Utilitie (JSR 166)
     Java API for XML Processing (JAXP) 1.3 (JSR 206)
     Java Database Connectivity 4.0 (JSR 221)
     Java Management Extensions (JMX) 2.0 (JSR 255)
     Java Portlet API (JSR 286)

* Web Service技术
   Java Date与Time API (JSR 310)
   Java API for RESTful Web Services (JAX-RS) 1.1 (JSR 311)
   Implementing Enterprise Web Services 1.3 (JSR 109)
   Java API for XML-Based Web Services (JAX-WS) 2.2 (JSR 224)
   Java Architecture for XML Binding (JAXB) 2.2 (JSR 222)
   Web Services Metadata for the Java Platform (JSR 181)
   Java API for XML-Based RPC (JAX-RPC) 1.1 (JSR 101)
   Java APIs for XML Messaging 1.3 (JSR 67)
   Java API for XML Registries (JAXR) 1.0 (JSR 93)

* JCP（Java Community Process）：Java社区

*  Hibernate框架中包含一套独立的校验框架hibernate-validator  

     导入坐标

  ```xml
  <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-validator</artifactId>
      <version>6.1.0.Final</version>
  </dependency>
  ```

  **注意：**
  tomcat7 ：搭配hibernate-validator版本5.*.*.Final
  tomcat8.5↑ ：搭配hibernate-validator版本6.*.*.Final  



## 1.2 快速使用

**1. 开启校验**

 名称：@Valid 、 @Validated
 类型：形参注解
 位置：处理器类中的实体类类型的方法形参前方
 作用：设定对当前实体类类型参数进行校验
 范例：  

```java
@RequestMapping(value = "/addemployee")
public String addEmployee(@Valid Employee employee) {
    System.out.println(employee);
}
```

**2.设置校验规则**

 名称：@NotNull
 类型：属性注解 等
 位置：实体类属性上方
 作用：设定当前属性校验规则
 范例：
    每个校验规则所携带的参数不同，根据校验规则进行相应的调整
    具体的校验规则查看对应的校验框架进行获取

```java
public class Employee{
    @NotNull(message = "姓名不能为空")
    private String name;//员工姓名
}  
```

**3.获取错误信息**

```java
@RequestMapping(value = "/addemployee")
public String addEmployee(@Valid Employee employee, Errors errors, Model model){
    System.out.println(employee);
    if(errors.hasErrors()){
        for(FieldError error : errors.getFieldErrors()){
            model.addAttribute(error.getField(),error.getDefaultMessage());
        }
        return "addemployee.jsp";
    }
    return "success.jsp";
}  
```

  通过形参Errors获取校验结果数据，通过Model接口将数据封装后传递到页面显示  

```html
<form action="/addemployee" method="post">
    员工姓名：<input type="text" name="name"><span style="color:red">${name}</span><br/>
    员工年龄：<input type="text" name="age"><span style="color:red">${age}</span><br/>
    <input type="submit" value="提交">
</form>
```

通过形参Errors获取校验结果数据，通过Model接口将数据封装后传递到页面显示
页面获取后台封装的校验结果信息  

## 1.3 多规则校验

* 同一个属性可以添加多个校验器  

```java
@NotNull(message = "请输入您的年龄")
@Max(value = 60,message = "年龄最大值不允许超过60岁")
@Min(value = 18,message = "年龄最小值不允许低于18岁")
private Integer age;//员工年龄
```

* 3种判定空校验器的区别  

![image-20200506160725709](./img/java/springmvc/SpringMVC-day03/image-20200506160725709.png)

## 1.4 嵌套校验

 名称：@Valid
 类型：属性注解
 位置：实体类中的引用类型属性上方
 作用：设定当前应用类型属性中的属性开启校验
 范例：

```java
public class Employee {
    //实体类中的引用类型通过标注@Valid注解，设定开启当前引用类型字段中的属性参与校验
    @Valid
    private Address address;
}
```

 注意：开启嵌套校验后，被校验对象内部需要添加对应的校验规则  

## 1.5 分组校验

* 同一个模块，根据执行的业务不同，需要校验的属性会有不同
  * 新增用户
  * 修改用户
* 对不同种类的属性进行分组，在校验时可以指定参与校验的字段所属的组类别
  * 定义组（通用）
  * 为属性设置所属组，可以设置多个
  * 开启组校验

```java
public interface GroupOne {
}
```

```java
public String addEmployee(@Validated({GroupOne.class}) Employee employee){
}  
```




```java
@NotEmpty(message = "姓名不能为空",groups = {GroupOne.class})
private String name;//员工姓名
```

# 2 ssm整合

## 2.1 整合流程简介

整合步骤分析

SSM（Spring+SpringMVC+MyBatis）

* Spring
  * 框架基础

* MyBatis
  * mysql+druid+pagehelper

* Spring整合MyBatis

* junit测试业务层接口

* SpringMVC
  * rest风格（postman测试请求结果）
  * 数据封装json（jackson）

* Spring整合SpringMVC

  * Controller调用Service

* 其他

  * 表现层数据封装

  * 自定义异常

**表结构**

![image-20200506093609697](./img/java/springmvc/SpringMVC-day03/image-20200506093609697.png)

​    最重要的5个步骤

1. Spring

2. MyBatis

3. Spring整合MyBatis

4. SpringMVC

5. Spring整合SpringMVC



## 2.2 项目结构搭建

**Part0：**   项目基础结构搭建

* 创建项目，组织项目结构，创建包

* 创建表与实体类

* 创建三层架构对应的模块、接口与实体类，建立关联关系

* 数据层接口（代理自动创建实现类）
  * 业务层接口+业务层实现类
  * 表现层类



![image-20200506094053535](./img/java/springmvc/SpringMVC-day03/image-20200506094053535.png)



```java
public interface UserDao {
    public boolean save(User user);  public boolean update(User user);  
    public boolean delete(Integer uuid);  public User get(Integer uuid);
    public List<User> getAll(int page,int size);

    public interface UserService {  
        public boolean save(User user);  public boolean update(User user);
        public boolean delete(Integer uuid);
        public User get(Integer uuid);
        public List<User> getAll(int page, int size);
        /**
        用户登录
        @param userName 用户名
        @param password 密码信息
        @return
        */
        public User login(String userName,String password);
    }
```



## 2.3 Spring整合Mybatis（复习）

**Part1 :**  Spring环境配置

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"  xmlns:context="http://www.springframework.org/schema/context"  xmlns:tx="http://www.springframework.org/schema/tx"  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:schemaLocation="http://www.springframework.org/schema/beans  http://www.springframework.org/schema/beans/spring-beans.xsd  http://www.springframework.org/schema/context  http://www.springframework.org/schema/context/spring-context.xsd  http://www.springframework.org/schema/tx  http://www.springframework.org/schema/tx/spring-tx.xsd">

    <!--开启bean注解扫描-->
    <context:component-scan base-package="com.itheima"/>

</beans>

```

**Part1 :**  Mybatis配置事务

* MyBatis映射

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE mapper
          PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
          "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  <mapper namespace="com.itheima.dao.UserDao">
  
      <!--添加-->
      <insert id="save" parameterType="user">
          insert into user(userName,password,realName,gender,birthday)values(#{userName},#{password},#{realName},#{gender},#{birthday})
      </insert>
  
      <!--删除-->
      <delete id="delete" parameterType="int">
          delete from user where uuid = #{uuid}
      </delete>
  
      <!--修改-->
      <update id="update" parameterType="user">
          update user set userName=#{userName},password=#{password},realName=#{realName},gender=#{gender},birthday=#{birthday} where uuid=#{uuid}
      </update>
  
      <!--查询单个-->
      <select id="get" resultType="user" parameterType="int">
          select * from user where uuid = #{uuid}
      </select>
  
      <!--分页查询-->
      <select id="getAll" resultType="user">
          select * from user
      </select>
  
      <!--登录-->
      <select id="getByUserNameAndPassword" resultType="user" >
          select * from user where userName=#{userName} and password=#{password}
      </select>
  
  </mapper>
  ```

  

* Mybatis核心配置

  ```xml
  <!--开启注解式事务-->
  <tx:annotation-driven transaction-manager="txManager"/>
  
  <!--加载properties文件-->
  <context:property-placeholder location="classpath*:jdbc.properties"/>
  
  <!--数据源-->
  <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
      <property name="driverClassName" value="${jdbc.driver}"/>
      <property name="url" value="${jdbc.url}"/>
      <property name="username" value="${jdbc.username}"/>
      <property name="password" value="${jdbc.password}"/>
  </bean>
  
  <!--整合mybatis到spring中-->
  <bean class="org.mybatis.spring.SqlSessionFactoryBean">
      <property name="dataSource" ref="dataSource"/>
      <property name="typeAliasesPackage" value="com.itheima.domain"/>
      <!--分页插件-->
      <property name="plugins">
          <array>
              <bean class="com.github.pagehelper.PageInterceptor">
                  <property name="properties">
                      <props>
                          <prop key="helperDialect">mysql</prop>
                          <prop key="reasonable">true</prop>
                      </props>
                  </property>
              </bean>
          </array>
      </property>
  </bean>
  
  <!--映射扫描-->
  <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
      <property name="basePackage" value="com.itheima.dao"/>
  </bean>
  
  <!--事务管理器-->
  <bean id="txManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
      <property name="dataSource" ref="dataSource"/>
  </bean>
  ```

  

## 2.4 整合junit

**Part2：**单元测试整合junit

```java
@RunWith(SpringJUnit4ClassRunner.class)  
@ContextConfiguration(locations = "classpath:applicationContext.xml")  
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void testDelete(){  
        User user = new User();  userService.delete(3);
    }
}

```



## 2.5 Spring整合SpringMVC

**Part3：**SpringMVC

* web.xml配置

  ```xml
  <servlet>
      <servlet-name>DispatcherServlet</servlet-name>
      <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
      <init-param>
          <param-name>contextConfigLocation</param-name>
          <param-value>classpath*:spring-mvc.xml</param-value>
      </init-param>
  </servlet>
  <servlet-mapping>
      <servlet-name>DispatcherServlet</servlet-name>
      <url-pattern>/</url-pattern>
  </servlet-mapping>
  ```

* spring-mvc.xml

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
         xmlns:context="http://www.springframework.org/schema/context"
         xmlns:mvc="http://www.springframework.org/schema/mvc"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/mvc http://www.springframework.org/schema/mvc/spring-mvc.xsd
          http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
  
      <mvc:annotation-driven/>
  
      <context:component-scan base-package="com.itheima.controller"/>
  
  </beans>
  ```

* controller层

  ```java
  @RestController  
  @RequestMapping("/user")  public class UserController {
      @PostMapping
      public boolean save(User user) {  
          System.out.println("save ..." + user);  return true;
      }
      @PostMapping("/login")
      public User login(String userName,String password){  
          System.out.println("login ..." + userName + " ," +password);
          return null;
      }
  }
  ```



**Part4：**Spring整合SpringMVC

* web.xml加载Spring环境

  ```xml
  <context-param>
      <param-name>contextConfigLocation</param-name>
      <param-value>classpath*:applicationContext.xml</param-value>
  </context-param>
  
  <!--启动服务器时，通过监听器加载spring运行环境-->
  <listener>
      <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
  </listener>
  ```

* Controller调用Service

  ```java
  @RestController
  @RequestMapping("/user")
  public class UserController {
      @Autowired
      private UserService userService;
  
  
      @PostMapping
      public boolean save(User user){
          return userService.save(user);
      }
  }
  ```

## 2.6 表现层数据封装

**Part5-1：**表现层数据封装

* 前端接收表现层返回的数据种类

| u操作是否成功 | true/false | 格式A |
| ------------- | ---------- | ----- |
| u单个数据     | 1,100,true | 格式B |
| u对象数据     | json对象   | 格式C |
| u集合数据     | json数组   | 格式D |

![image-20200506103851845](./img/java/springmvc/SpringMVC-day03/image-20200506103851845.png)



* 返回数据格式设计

![image-20200506104339019](./img/java/springmvc/SpringMVC-day03/image-20200506104339019.png)

* 代码

  ```java
  public class Result {
      // 操作结果编码
      private Integer code;
      // 操作数据结果
      private Object data;
      // 消息
      private String message;
      public Result(Integer code) {
          this.code = code;
      }
      public Result(Integer code, Object data) {
          this.code = code;
          this.data = data;
      }
  }
  ```

  状态码常量可以根据自己的业务需求设定

  ```java
  public class Code {
      public static final Integer SAVE_OK = 20011;
      public static final Integer SAVE_ERROR = 20010;
      //其他编码
  }
  ```

  controller 调用

  ```java
  @RestController
  public class UserController {
      @Autowired
      private UserService userService;
      @PostMapping
      public Result save(User user){
          boolean flag = userService.save(user);
          return new Result(flag ? Code.SAVE_OK:Code.SAVE_ERROR);
      }
      @GetMapping("/{uuid}")
      public Result get(@PathVariable Integer uuid){
          User user = userService.get(uuid);
          return new Result(null != user ?Code.GET_OK: Code.GET_ERROR,user);
      }
  }
  ```

  



## 2.7 自定义异常

**Part5-2：**自定义异常

* 设定自定义异常，封装程序执行过程中出现的问题，便于表现层进行统一的异常拦截并进行处理
  * BusinessException
  * SystemException

* 自定义异常消息返回时需要与业务正常执行的消息按照统一的格式进行处理



**定义BusinessException**

```java
public class BusinessException extends RuntimeException {
    //自定义异常中封装对应的错误编码，用于异常处理时获取对应的操作编码
    private Integer code;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public BusinessException(Integer code) {
        this.code = code;
    }

    public BusinessException(String message, Integer code) {
        super(message);
        this.code = code;
    }

    public BusinessException(String message, Throwable cause,Integer code) {
        super(message, cause);
        this.code = code;
    }

    public BusinessException(Throwable cause,Integer code) {
        super(cause);
        this.code = code;
    }

    public BusinessException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace,Integer code) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.code = code;
    }
}

```

```java
@GetMapping("/{uuid}")
public Result get(@PathVariable Integer uuid){
    User user = userService.get(uuid);
    //模拟出现异常，使用条件控制，便于测试结果
    if (uuid == 10 ) throw new BusinessException("查询出错啦，请重试！",Code.GET_ERROR);
    return new Result(null != user ?Code.GET_OK: Code.GET_ERROR,user);
}
```



## **2.8 返回消息兼容异常信息**

```java
@Component
@ControllerAdvice
public class ProjectExceptionAdivce {
    @ExceptionHandler(BusinessException.class)
    @ResponseBody
    //对出现异常的情况进行拦截，并将其处理成统一的页面数据结果格式
    public Result doBusinessException(BusinessException e){
        return new Result(e.getCode(),e.getMessage());
    }
}
```

# 3 纯注解开发SSM

## 3.1 用注解替代applicationContext.xml

同前期设置，添加事务注解驱动
@Configuration

```java
//扫描组件，排除SpringMVC对应的bean，等同于<context:component-scan />
@ComponentScan(value = "com.itheima",excludeFilters = {
    @ComponentScan.Filter(type= FilterType.ANNOTATION,classes = {Controller.class})})
@PropertySource("classpath:jdbc.properties")
@Import({JdbcConfig.class,MyBatisConfig.class})
//等同于<tx:annotation-driven transaction-manager="txManager"/>，导入的默认名称为transactionManager
@EnableTransactionManagement
public class SpringConfig {
    //等同于<bean   class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
    @Bean("transactionManager")
    public DataSourceTransactionManager getDataSourceTxManager(@Autowired DataSource dataSource){
        DataSourceTransactionManager dtm = new DataSourceTransactionManager();
        //等同于<property name="dataSource" ref="dataSource"/>
        dtm.setDataSource(dataSource);
        return dtm;
    }
}  
```

## 3.2 用注解替代spring-mvc.xml  

*   同前期设置，添加@EnableWebMvc注解  

  ```java
  @Configuration
  @ComponentScan("com.itheima.controller")
  @EnableWebMvc
  public class SpringMvcConfig implements WebMvcConfigurer {
  }
  ```

*   EnableWebMvc  


1. 支持ConversionService的配置，可以方便配置自定义类型转换器
2. 支持@NumberFormat注解格式化数字类型
3. 支持@DateTimeFormat注解格式化日期数据，日期包括Date,Calendar,JodaTime（JodaTime要导包）
4. 支持@Valid的参数校验(需要导入JSR-303规范)
5. 配合第三方jar包和SpringMVC提供的注解读写XML和JSON格式数据  