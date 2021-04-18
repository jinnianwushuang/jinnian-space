# node

## 模块机制

### CommonJS 规范

- CommonJS 规范

	- 模块引用
	- 模块定义
	- 模块标识

- 规范涵盖了模块

	- 二进制
	- Buffer
	- 字符集编码
	- I/O流
	- 进程环境
	- 文件系统
	- 套接字
	- 单元测试
	- Web服务器网关接口
	-  包管理

### Node 的模块实现

- 模块

	- 核心模块
	- 文件模块
	- Node对引入过的模块都会进行缓存,以减少二次引入时的开销

- 模块标识符分析

	- 核心模块
	- 路径形式的文件模块
	- 自定义模块

- 模块路径分析

	- Node在定位文件模块的具体文件时制定的查找策略,具体表现为一个路径组成的数组
	- 逐个尝试模块路径中的路径,直到找到目标文件为止
	- 沿路径向上逐级递归,直到根目录下的node_modules目录

- 文件定位

	- 文件扩展名分析

		- Node会按.js、.json、.node的次序补 足扩展名,依次尝试

	- 目录分析和包

		- require()通过分析文件扩展名之后,可能没有查找到对应文件，得到一个目录

- 模块编译

	- Node会新建一个模块对 象,然后根据路径载入并编译
	- .js文件。通过fs模块同步读取文件后编译执行
	- .node文件。这是用C/C++编写的扩展文件,通过dlopen()方法加载最后编译生成的文件
	- .json文件。通过fs模块同步读取文件后,用JSON.parse()解析返回结果
	- 其余扩展名文件。它们都被当做.js文件载入
	- 在编译的过程中,Node对获取的JavaScript文件内容进行了头尾包装
	- (function (exports, require, module, __filename, __dirname) {\n,在尾部添加了\n});

### 核心模块

- 核心模块 其实分为C/C++编写的和JavaScript编写的两部分

	- 其中C/C++文件存放在Node项目的src目录下
	- JavaScript文件存放在lib目录下

- 1.转存为C/C++代码

	- Node采用了V8附带的js2c.py工具,将所有内置的JavaScript代码转换 成C++里的数组

- 2.编译JavaScript核心模块

	- 与文件模块 有区别的地方在于:获取源代码的方式及缓存执行结果的位置

- 那些由纯C/C++编写的部分统一称为内建模块
- 1. 内建模块的组织形式

	- C/C++编写,性能上优于脚本语言
	- 被直接加载进内存中，无需文件定位编译，可直接执行

- 2. 内建模块的导出

	- Node在启动时,会生成一个全局变量process,并提供Binding()方法来协助加载内建模块。

### C/C++扩展模块

- C/C++扩展模块属于文件模块中的一类
- 一个平台下的.node文件在另一个平台下是无法加载执行的，必须重新编译
- 前提条件

	- GYP项目生成工具
	- V8引擎C++库
	- libuv库
	- Node内部库
	- 其他库

- 模块编写：C/C++扩展模块与内建模块的套路一样,将方法挂载在target对象上,然后通过NODE_MODULE 声明即可
- 模块编译，在GYP工具的帮助下，编译过程会根据平台不同,分别通过make或vcbuild进行编译
- 模块加载：require()方法通过解 析标识符、路径分析、文件定位,然后加载执行即可

### 模块调用栈

- JavaScript核心模块

	- 作为C/C++内建模块的封装层和桥接层, 供文件模块调用
	- 纯粹的功能模块

### 包与 NPM

- 在模块之外,包和 NPM则是将模块联系起来的一种机制
- 包结构

	- 是一个存档文件

- 包描述文件与NPM

	- 用于表达非代码相关的信息,package.json

- NPM常用功能

	- 帮助完成了第三方模块的发布、安装和依赖等
	- 可以帮助用户快速安装和管理依赖包

- 局域NPM

	- 企业搭建自己的NPM仓库
	- 享受到模块开发带来的低耦合和项目组织上的好处
	- 考虑到模块保密性的问题

- NPM潜在问题

	- 包的质量
	- 安全性

### 前后端共用模块

- AMD规范是CommonJS模块规范的一个延伸
- CMD规范与AMD规范的主要区别在于定义模块和依赖引入的部分

## node简介

### Node 的诞生历程

### Node 的命名与起源

- JavaScript比C的开发门槛要低
- 比Lua的历史包袱要少
- 有广泛的事件驱动方面的应用
- 为其导入非阻塞I/O库 没有额外阻力
- JavaScript引 擎V8摘得性能第一的桂冠
- 为什么叫Node：每一个Node进程都构成这个网络应 用中的一个节点

### Node 带来的意义

- Node打破了过去JavaScript只能在浏览器中运行的局面
- 大大降低前后端转换所需要的上下文交换代价

### Node 的特点

- 异步I/O
- 事件与回调函数
- 单线程
- 跨平台

### Node 应用场景

- I/O密集型
- 是否不擅长CPU密集型业务
- 与遗留系统和平共处
- 分布式应用

## Cheney算法

### semispace （From）空间

- 使用中,对象分配时分配到 From 空间
- 存活对象复制到To空间，空间角色交换

## 异步I/O

### 为什么要异步 I/O

- 在跨网络的结构下,并发已经是现代编程中的标准配备了
- 在浏览器中 JavaScript 执行与 UI 渲染共用一个线程
- 前端通过异步可以消除掉UI阻塞的现象
- 采用异步并发下载资源
- 多线程的代价在于创建 线程和执行期线程上下文切换的开销较大
- 但是串行执行的缺点在于性能
- Node在两者之间给出了它的方案

	- 利用单线程,远离多线程死锁、状态同步等问题
	- 利用异 步I/O,让单线程远离阻塞,以更好地使用CPU

### 异步 I/O 实现现状

- 非阻塞I/O跟阻塞I/O的差别为调用之后会立即返回
- 阻塞I/O造成CPU等待浪费
- 非阻塞带来的麻烦却是需要轮询去确 认是否完全完成数据获取

	- read
	- select
	- poll
	- epoll
	- kqueue

### Node 的异步 I/O

- 事件循环

	- 在进程启动时,Node便会创建事件循环，循环执行事件关联的回调

- 观察者

	- 每个事件循环中有一个或者多个观察者，观察者决定是否要执行事件

- 请求对象

	- 从JavaScript发起调用到内核执行完I/O操作的 过渡过程中的中间对象

- 执行回调

	- 组装好请求对象、送入I/O线程池等待执行,实际上完成了异步I/O的第一部分,回调通知是 第二部分。

### 非 I/O 的异步 API

- 定时器

	- 实现原理与异步I/O比较类似,只是不需要I/O线程池的参与
	- 定时器的问题在于,它并非精确的

- process.nextTick()

	- setTimeout(fn, 0) 的 方式较为 浪费性能。 实际上, process.nextTick()方法的操作相对较为轻量
	- 每次调用process.nextTick()方法,只会将回调函数放入队列中,在下一轮Tick时取出执行

- setImmediate

	- process.nextTick()中的回调函数执行的优先级要高于setImmediate()

### 事件驱动与高性能服务器

- 事件驱动的实质,即 通过主循环加事件触发的方式来运行程序
- 事件循环是异步实现的核心,它 与浏览器中的执行模型基本保持了一致

## 异步编程

### 函数式编程

- 高阶函数

	- 高阶函数则是可以把函数作为参数,或是将函数作为返回值的函数,
	- 除了通 常意义的函数调用返回外,还形成了一种后续传递风格
	- 在自定义事件实例中,通过为相同事件注册不同的回调函数,可以很灵活地处理业务逻辑

- 偏函数用法

	- 通过指定部分参数来产生一个新的定制函数的形式就是偏函数

### 异步编程的优势与难点

- 优势

	- Node带来的最大特性莫过于基于事件驱动的非阻塞I/O模型
	- 只要合理利用Node的异步模型与V8的高性能,就可以充分 发挥CPU和I/O资源的优势

- 难点

	- try/catch的功效在此异步编程中不会发挥任何作用
	- 函数嵌套过深
	- 阻塞代码
	- 多线程编程
	- 异步转同步

### 异步编程解决方案

- 事件发布/订阅模式

	- 事件发布/订阅模式可以实现一个事件与多 个回调函数的关联,这些回调函数又称为事件侦听器

- Promise/Deferred模式

	- Promise通过封装异步调用,实现了正向用例和反向用例的分离以及逻辑处理延迟,

- 流程控制库

	- 尾触发：需要手工调用才能持续执行后续调用的，关键字 next
	- 流程控制模块async

		- 异步的串行执行
		- 异步的并行执行
		- 自动依赖处理

	- 流程控制库 Step

		- 并行任务执行
		- 结果分组

	- 异步编程方案wind

		- 异步任务定义
		- $await()与任务模型
		- 异步方法转换辅助函数

### 异步并发控制

- bagpipe的解决方案

	- 通过一个队列来控制并发量
	- 如果当前活跃(指调用发起但未执行回调)的异步调用量小于限定值,从队列中取出执行
	- 如果活跃调用达到限定值,调用暂时存放在队列中
	- 每个异步调用结束时,从队列中取出新的异步调用执行
	- 拒绝模式
	- 超时控制

- async的解决方案

	- async也提供了一个方法用于处理异步调用的限制:parallelLimit()。
	- parallelLimit()方法的缺陷在于无法动态地增加并行任务

## 内存控制

### v8垃圾回收机制与内存限制

-  内存问题

	- Node是 一个构建在Chrome的JavaScript运行时上的平台
	- 内存控制正是在海量请求和长时间运行的前提下进行探讨的
	- 在Node中通过JavaScript 使用内存时就会发现只能使用部分内存（无法操作大内存对象，例如读取2G的文件）

- V8限制内存的原因

	- 开始是为浏览器设置的，不太可能会存在用到大量内存的场景
	- V8的垃圾回收机制限制，不控制内存会导致垃圾回收时间加长，阻塞 js 线程执行

- V8 的对象分配

	- 在V8中,所有的JavaScript对象都是通过堆来进行分配的
	- 根据对象的存货时间将内存的垃圾回收进行不同的分代，分别施以高效算法
	- 老生代中的对象为存活时间较长或常驻内存的对象
	- 新生代中的对象为存活时间较短的对象

- V8 的垃圾回收机制

	- Scavenge算法：就是通过将存活对象在两个 semispace空间之间进行复制
	- Mark-Sweep算法：通过标记活对象，清理死亡对象
	- Mark-Compact算法，将或对象移动到老生代一端，解决内存碎片问题
	- V8主要使用Mark-Sweep,在空间不足以对从新 生代中晋升过来的对象进行分配时才使用Mark-Compact。
	- 垃圾回收需要将应用逻辑暂停下来即“全停顿”
	- 垃圾回收的优化

		- 拆分全停顿，应用执行一小会，垃圾回收执行一个拆分
		- 延迟清理
		- 增量式整理

### 高效使用内存

- 作用域

	- 函数执行结束后，函数作用域被销毁，函数作用域中声明的变量也销毁
	- 全局作用域需要直到 进程退出才能释放
	- 如果需要释放常驻内 存的对象,可以通过delete操作来删除引用关系。或者将变量重新赋值,让旧的对象脱离引用关系。

- 闭包

	- 作用域链上的对象访问只能向上,这样外部无法向内部访问
	- 实现外部作用域访问内部作用域中变量的方法叫做闭包
	- 闭包使得外部作用域对闭包定义的词法作用域有引用，因此词法作用域不会释放，内存也不会释放
	- 在正常的JavaScript执行中,无法立即回收的内存有闭包和全局变量引用这两种情况

### 内存指标

- 进程的内存总共有几部分

	- rss 进程的常驻内存部分
	- 交换区
	- 文件系统

- process.memoryUsage() 可以查看内存使用情况

	- 堆中的内存用量总是小于进程的常驻内存用量，即内存并非都是通过V8分配的

- os.totalmem() 可以查看系统的总内存
- os.freemem() 可以查看系统的闲置内存

### 内存泄露

- 慎将内存当做缓存

	- 在node 中一旦一个对象被缓存起来，就会被放到老生代中
	- 长期存在的对象会使得垃圾回收扫描整理的时候对这些对象做无用功
	- 由于模块的缓存机制,模块是常驻老生代的
	- 采用进程外的缓存,进程自身不存储状态

- 关注队列外状态

	- 一旦消费速度低于生产速度, 将会形成堆积
	- 启用超时模式时,调用加入到队列中就 开始计时,超时就直接响应一个超时错误
	- 拒绝模式时,当队列拥塞时,新到来的调用会直 接响应拥塞错误

### 内存泄露排查

- node-heapdump
- node-memwatch
- 通过对堆内存进行分析而找到

### 大内存应用

- 由于Node的内存限制,操作大文件 也需要小心,好在Node提供了stream模块用于处理大文件。

## 理解Buffer

### Buffer 结构

- Buffer所占用的内存不是通过V8分配的,属于堆外内存
- Buffer受Array类型的影响很大,可以访问length属性得到长度,也可以通过下标访问元素
- Node在内存的使用上应用的是在C++ 层面申请内存、在JavaScript中分配内存的策略
- Node采用了slab动态内存管理分配机制

### Buffer 的转换

- 字符串转Buffer

	- 通过构造函数转换的Buffer对象,存储的只能是一种编码类型
	- 一个Buffer对象可以存储不同编码类型的字符串转码的值

- Buffer转字符串

	- Buffer对象的toString()可以将Buffer对象转换为字 符串

- Buffer不支持的编码类型

	- 只有少数的几种编码类型可以 在字符串和Buffer之间转换
	- Buffer提供了一个isEncoding()函数来判断编码是否支持转换
	- 对于不支持的编码类型,可以借助Node生态圈中的模块完成转换

### Buffer 的拼接

- 乱码是如何产生的

	- 文件可读流在读取时会逐个读取Buffer
	- 对于任意长度的Buffer而言,宽字节字符串都有 可能存在被截断的情况

- setEncoding()与string_decoder()

	- 让data事件中传递的不再是一个Buffer对象,而是编码后的字符串
	- 可读流对象在内部设置了一个decoder对象,进行Buffer到字符串的解码,然后传递给调用者

- 正确拼接Buffer

	- 正确的拼接方式是用一个数组来存储接收到的所有Buffer片段并记录下所有片段的总长度
	- 然后调用 Buffer.concat() 方法生成一个合并的Buffer对象

### Buffer 与性能

- 通过预先转换静态内容为Buffer对象,可以有效地减少CPU的重复使用,节省服务器资源
- 动态内容和静态内容分离,静态内容部分可以通 过预先转换为Buffer的方式,使性能得到提升
- 尽量只读取Buffer,然后直接传输,不做额外的转换,避免损耗

## 网络编程

### 构建TCP 服务

- 创建 TCP 服务器

	- TCP全名为传输控制协议，在OSI模型(由七层组成,分别为物理层、数据链结层、
网络层、 传输层、会话层、表示层、应用层)中属于传输层协议。
	- 3次握手创建会话
	- 服务 器端和客户端分别提供一个套接字,这两个套接字共同形成一个连接

- TCP 服务的事件

	- 服务器事件，listening，connection，close，error
	- 连接事件，data，end，connect，drain，error，close，timeout
	- TCP针对网络中的小数据包有一定的优化策略:Nagle算法

### 构建UDP服务

- UDP

	- 在 UDP 中,一个套接字可以与多个 UDP 服务通信
	- UDP 又称用户数据包协议,与 TCP 一样同属于网络传输层
	- 无须连接,资源消耗低,处理快速且灵活

- 若想让UDP套接字接收网络消息,只要调用dgram.bind(port, [address])方法对网卡和端口 进行绑定即可
- UDP 是一个EventEmitter的实例,而非Stream 的实例，具有自定义事件，message，listening，close，error

### 构建HTTP服务

- HTTP

	- HTTP的全称是超文本传输协议
	- HTTP构建在TCP之上,属于应用层协议

- HTTP报文

	- 第一部分内容为经典的 TCP的3次握手过程
	- 第二部分是在完成握手之后,客户端向服务器端发送请求报文
	- 第三部分是服务器端完成处理后,向客户端发送响应内容,包括响应头和响应体
	- 最后部分是结束会话的信息

- HTTP客户端事件，response，socket，connect，upgrade，protocols，continue

### 构建 WebSocket 服务

- WebSocket

	- WebSocket客户端基于事件的编程模型与Node中自定义事件相差无几
	- WebSocket实现了客户端与服务器端之间的长连接
	- 客户端与服务器端只建立一个TCP连接,可以使用更少的连接。
	- WebSocket服务器端可以推送数据到客户端
	- 有更轻量级的协议头,减少数据传送量

- WebSocket握手

	- upgrade
	- 切换协议

- WebSocket数据传输

	- 为了安全考虑,客户端需要对发送的数据帧进行掩码处理

### 网络服务与安全

- SSL作为一种安全协议,它在传输层提供对网络连接加密的功能
- Node在网络安全模块

	- crypto

		- 主要用于加 密解密,SHA1、MD5等加密算法都在其中有体现,

	- tls

		- TLS/SSL是一个公钥/私钥的结构,它是一个非对称的结构
		- 公钥用来加密要传输的数据,私钥用来解密接收到的数据
		- 为了防止中间人攻击,TLS/SSL引入了数字证书来进行认证
		- 创建服务器端

			- 创建一个安全的TCP服务
			- 测试证书是否正常

		- TLS客户端

			- 启动客户端的过程中,用到了为客户端生成的私钥、证书、CA证书

	- https

		- HTTPS服务就是工作在TLS/SSL上的HTTP
		- 1. 准备证书
		- 2. 创建HTTPS服务
		- 3. HTTPS客户端

## 构建Web应用

### 基础功能

- 请求方法

	- 最常见的请求方法是GET和POST,除此之外,还有HEAD、DELETE、PUT、CONNECT 等方法
	- PUT代表新建一个资源,POST表示要更新一个资源,GET表示查看一个资源, 而DELETE表示删除一个资源

- 路径解析

	- 客户端代理(浏览器)会将这个地址解析成报文,将路径和查询部分放在报文第一行

- 查询字符串

	- 这个字符串会跟随在路径后,形成请求报文首行的第二部分

- Cookie

	- 能记录服务器与客户端之间的状态
	- 设置的Cookie过多,将会导致报头较 大

		- 减小Cookie的大小
		- 为静态组件使用不同的域名
		- 减少DNS查询

	- path
	- Expires和Max-Age是
	- HttpOnly
	- Secure

- Session

	- Session的数据只保留在服务器端,客户 端无法修改
	- 基于Cookie来实现用户和数据的映射
	- 通过查询字符串来实现浏览器端和服务器端数据的对应

- 缓存

	- 设置缓存

		- 添加Expires 或Cache-Control 到报文头中
		- 配置 ETags
		- 让Ajax 可缓存

	- 清除缓存

		- 路径中跟随Web应用的版本号
		- 路径中跟随该文件内容的hash值

- Basic认证

	- 当客户端与服务器端进行请求时,允许通过用户名和密码实现的一种身份认证 方式

### 数据上传

- 表单数据

	- Content-Type: application/x-www-form-urlencoded

- 其他格式

	- JSON类型的值为 Content-Type：application/json
	- XML的值为 Content-Type：application/xml

- 附件上传

	- Content-Type: multipart/form-data

- 数据上传与安全

	- 内存限制

		- 限制上传内容的大小
		- 通过流式解析,将数据流导向到磁盘中，Node只保留文件路径等小数据

	- CSRF

### 路由解析

- 文件路径型

	- 静态文件
	- 动态文件

- MVC

	- 控制器(Controller),一组行为的集合
	- 模型(Model),数据相关的操作和封装
	- 视图(View),视图的渲染
	- 路由解析,根据URL寻找到对应的控制器和行为
	- 行为调用相关的模型,进行数据操作
	- 数据操作结束后,调用视图和相关数据进行页面渲染,输出到客户端

- RESTful

	- 请求方法作为逻辑分发的单元
	- 将服务器端提供的内容实体看作一个资源
	- 操作行为主要体现在行为上,主要使用的请求方法是POST和GET

### 中间件

- 异常处理

	- 为next()方法添加err参数,并捕获中间件直接抛出的同步异常
	- 中间件异步产生的异常需要自己 传递出来

- 中间件与性能

	- 编写高效的中间件
	- 合理使用路由

### 页面渲染

- 内容响应

	- MIME
	- 附件下载
	- 响应JSON
	- 响应跳转

- 视图渲染

	- 在动态页面技术中,最终的视图是由 模板和数据共同生成出来的

- 模板

	- 模板语言
	- 包含模板语言的模板文件
	- 拥有动态数据的数据对象
	- 模板引擎
	- 模板引擎

		- 模板编译

	- with的应用

		- 模板安全

	- 模板逻辑
	- 集成文件系统
	- 子模板
	- 布局视图
	- 模板性能

- Bigpipe

	- 前端加载技术,它的提出主要是为了解决重数据页面 的加载速度问题
	- Bigpipe是一个需要前后端配合实现的优化技术

		- 页面布局框架
		- 持续数据输出
		- 前端渲染

	- Bigpipe将网页布局和数据渲染分离

## 玩转进程

### 服务模型的变迁

- 石器时代:同步

	- 服务模式是一次只为一个请求服务

- 青铜时代:复制进程

	- 通过进程的复制同时服务更多的请求和用 户

- 白银时代:多线程

	- 让一个线程服务一个请求，并且线程之间可以共享数据

- 黄金时代:事件驱动

	- 为了解决高并发问题,基于事件驱动的服务模型出现了

### 多进程架构

- 理想状态下每个 进程各自利用一个CPU,以此实现多核CPU的利用
- 创建子进程

	- child_process模块给予Node可以随意创建子进程(child_process)的能力

- 进程间通信

	- 主线程与工作线程之间通过onmessage()和postMessage()进行通信
子进程对象则由send()方法实现主进程向子进程发送数据

- 句柄传递

	- 一种可以用来标识资源的引用,它的内部包含了指向对象的文件描述 符

### 集群稳定之路

- 进程事件

	- message
	- error
	- exit
	- close
	- disconnect

- 自动重启

	- 自杀信号
	- 限量重启

- 负载均衡

	- 操作系统的抢占式策略，闲着的进程对到来的请求进行争抢,谁抢到谁服务

- 状态共享

	- 数据共享：第三方数据存储
	- 主动通知

### Cluster 模块

- Cluster 工作原理

	- 事实上cluster模块就是child_process和net模块的组合应用

- Cluster 事件

	- fork
	- online
	- listening
	- disconnect
	- exit
	- setup

## 测试

### 单元测试

- 测试代码的原则

	- 单一职责
	- 接口抽象
	- 层次分离

- 单元测试介绍

	- 断言
	- 测试框架
	- 测试代码的文件组织
	- 测试用例
	- 测试覆盖率
	- mock
	- 私有方法的测试

- 工程化与自动化

	- 工程化
	- 持续集成

### 性能测试

- 基准测试

	- 基准测试要统计的就是在多少 时间内执行了多少次某个方法

- 压力测试

	- 会对网络接口进行压力测试以判断网络接口 的性能

- 基准测试驱动开发

	- 写基准测试
	- 写/改代码
	- 收集数据
	- 找出问题
	- 回到第2步(写/改代码)

## 产品化

### 项目工程化

- 目录结构

	- 常见的Web应用都是以MVC为主要框架的,其余部分在这个基础上进行扩展

- 构建工具

	- 合并静态文件、压缩文件大小、打包应用、编译模块
	- 工具

		- Makefile
		- Grunt

- 编码规范

	- 为团队统一良好的编码风格,有助于帮助 提升代码的可读性,进而提升可维护性
	- 文档式的约定
	- 代码提交时的强制检查

- 代码审查

	- 代码审查需要耗费一定的精力,一些可以自动化完成的工作可以交由工具来自动完成

### 部署流程

- 部署环境

	- 开发环境
	- 测试环境
	- 预发布环境
	- 线上环境

- 部署操作

	- 停止进程和重启进程

### 性能

- 动静分离

	- 将图片、脚本、样式表和多媒体等静态文件都引导到专业的静态文件服务器 上,让Node只处理动态请求即可

- 启用缓存

	- 在缓存的帮助下,却能够消减同步I/O 带来的时间浪费

- 多进程架构

	- 充分利用多核CPU, 更是可以建立机制让Node进程更加健壮,以保障Web应用持续服务

- 读写分离

	- 将数据库进行主从设计,这样读数据操作不再受到写入的影响,降低了性能的影响

### 日志

- 通过 记录日志来定位问题是一种成本较小的方式
- 访问日志

	- 可以置入一些用户信息,用以跟踪一些数据,比如某个登录用户太过密集地访问某个页 面等,
他有可能是一个机器人,在爬取网页中的数据

- 异常日志

	- 异常日志通常用来记录那些意外产生的异常错误

- 日志与数据库

	- ,将日志分析和日志记录这两个步骤分离开来是较好的选择

- 分割日志

	- 线上业务可能访问量巨大,产生的日志也可能是大量的

### 监控报警

- 监控

	- 为了将一些重要指标采样记录下来,一旦这些指标发生较大变化
可以配 合报警系统将问题反馈到负责人那
	- 日志监控
	- 响应时间
	- 进程监控
	- 磁盘监控
	- 内存监控
	- CPU占用监控
	- CPU load监控
	- I/O负载
	- 网络监控
	- 应用状态监控
	- DNS监控

- 报警的实现

	- 邮件报警
	- 短信或电话报警

### 稳定性

- 为了更好的稳定性,典型的水 平扩展方式就是多进程、多机器、多机房、容灾备份

### 异构共存

- Node能够通过协议 与已有的系统很好地异构共存

## 参照

## nodejs 详细

### Node.js

- Node.js 事件循环

	- 事件驱动程序

		- Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。

		  当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。
		  
		  这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）
		  
		  在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。
		  
		  

	- Node.js 事件

		- Node.js 所有的异步 I/O 操作在完成时都会发送一个事件到事件队列。

		  Node.js 里面的许多对象都会分发事件：一个net.Server对象会在每次有新连接时分发一个事件， 一个fs.readStream对象会在文件被打开的时候发出一个事件。 所有这些产生事件的对象都是 events.EventEmitter 的实例。 你可以通过require("events");来访问该模块。
		  
		  下面我们用一个简单的例子说明 EventEmitter 的用法：
		  
		  ``` null
		  - //event.js 
		  ```
		  
		  var EventEmitter = require('events').EventEmitter;
		  var event = new EventEmitter();
		  event.on('some_event', function() {
		  console.log('some_event occured.');
		  });
		  setTimeout(function() {
		  event.emit('some_event');
		  }, 1000);
		  
		  

		- EventEmitter介绍

			- events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就 是事件发射与事件监听器功能的封装。EventEmitter 的每个事件由一个事件名和若干个参 数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

			  当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作 为回调函数参数传递。
			  
			  ``` null
			  	- 让我们以下面的例子解释这个过程：
			  
			  		- var events = require('events'); 
			  ```
			  
			  var emitter = new events.EventEmitter();
			  emitter.on('someEvent', function(arg1, arg2) {
			  console.log('listener1', arg1, arg2);
			  });
			  emitter.on('someEvent', function(arg1, arg2) {
			  console.log('listener2', arg1, arg2);
			  });
			  emitter.emit('someEvent', 'byvoid', 1991);
			  
			  

		- EventEmitter常用的API

			- EventEmitter.on(event, listener)、emitter.addListener(event, listener)为指定事件注册一个监听器，接收一个字符串 event 和一个回调函数 listener。

				- server.on('connection', function (stream) {
console.log('someone connected!');
});

			- EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传 递若干可选参数到事件监听器的参数表。
			- EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。

				- server.once('connection', function (stream) {
console.log('Ah, we have our first user!');
});

			- EventEmitter.removeListener(event, listener) 移除指定事件的某个监听 器，listener 必须是该事件已经注册过的监听器。

				- var callback = function(stream) {
console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);

			- EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。

		- error 事件

			- EventEmitter 定义了一个特殊的事件 error，它包含了"错误"的语义，我们在遇到 异常的时候通常会发射 error 事件。当 error 被发射时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并打印调用栈。我们一般要为会发射 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：

				- var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');

		- 继承 EventEmitter

			- 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。

			  为什么要这样做呢？原因有两点：
			  
			  首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
			  
			  其次JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。
			  
			  

- Node.js Buffer(缓冲区)

	- JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。

	  但在处理像TCP流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
	  
	  在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
	  
	  

	- 创建 Buffer 类

		- 创建长度为 10 字节的 Buffer 实例：
var buf = new Buffer(10);
		- 通过给定的数组创建 Buffer 实例：
var buf = new Buffer([10, 20, 30, 40, 50]);
		- 通过一个字符串来创建 Buffer 实例：
var buf = new Buffer("www.w3cschool.cn", "utf-8");

	- 写入缓冲区

		- 写入 Node 缓冲区的语法如下所示：

			- buf.write(string[, offset[, length]][, encoding])

				- 参数描述如下：

					- string - 写入缓冲区的字符串。
					- offset - 缓冲区开始写入的索引值，默认为 0 。
					- length - 写入的字节数，默认为 buffer.length
					- encoding - 使用的编码。默认为 'utf8' 。

				- 返回值

					- 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串

				- 实例

					- buf = new Buffer(256);
len = buf.write("www.w3cschool.cn");

					  console.log("写入字节数 : "+  len);
					  
					  ``` null
					  			- 执行以上代码，输出结果为：
					  
					  				- $node main.js
					  ```
					  
					  写入字节数 : 16
					  
					  

	- 从缓冲区读取数据

		- 写入 Node 缓冲区的语法如下所示：

			- buf.write(string[, offset[, length]][, encoding])

				- 参数描述如下：

					- encoding - 使用的编码。默认为 'utf8' 。
					- start - 指定开始读取的索引位置，默认为 0。
					- end - 结束位置，默认为缓冲区的末尾。

				- 返回值

					- 解码缓冲区数据并使用指定的编码返回字符串。

				- 实例

					- buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
buf[i] = i + 97;
}

					  console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
					  console.log( buf.toString('ascii',0,5));   // 输出: abcde
					  console.log( buf.toString('utf8',0,5));    // 输出: abcde
					  console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
					  
					  ``` null
					  			- 执行以上代码，输出结果为：
					  
					  				- $ node main.js
					  ```
					  
					  abcdefghijklmnopqrstuvwxyz
					  abcde
					  abcde
					  abcde
					  
					  

	- 将 Buffer 转换为 JSON 对象

		- 将 Node Buffer 转换为 JSON 对象的函数语法格式如下：

			- buf.toJSON()
			- 返回值

				- 返回 JSON 对象。

			- 实例

				- var buf = new Buffer('www.w3cschool.cn');
var json = buf.toJSON(buf);

				  console.log(json);
				  
				  ``` null
				  		- 执行以上代码，输出结果为：
				  
				  			- { type: 'Buffer',
				  ```
				  
				  data: [ 119, 119, 119, 46, 119, 51, 99, 115, 99, 104, 111, 111, 108, 46, 99, 110 ] }
				  
				  

	- 缓冲区合并

		- Node 缓冲区合并的语法如下所示：

			- Buffer.concat(list[, totalLength])

				- 参数描述如下：

					- list - 用于合并的 Buffer 对象数组列表。
					- totalLength - 指定合并后Buffer对象的总长度。

				- 返回值

					- 返回一个多个成员合并的新 Buffer 对象。

				- 实例

					- var buffer1 = new Buffer('W3Cschool教程 ');
var buffer2 = new Buffer('www.w3cschool.cn');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

						- 执行以上代码，输出结果为：

							- buffer3 内容: W3Cschool教程 www.w3cschool.cn

	- 缓冲区比较

		- Node Buffer 比较的函数语法如下所示, 该方法在 Node.js v0.12.2 版本引入：

			- buf.compare(otherBuffer);

				- 参数描述如下：

					- otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。

				- 返回值

					- 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。

				- 实例

					- var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

					  if(result < 0) {
					  console.log(buffer1 + " 在 " + buffer2 + "之前");
					  }else if(result == 0){
					  console.log(buffer1 + " 与 " + buffer2 + "相同");
					  }else {
					  console.log(buffer1 + " 在 " + buffer2 + "之后");
					  }
					  
					  ``` null
					  			- 执行以上代码，输出结果为：
					  
					  				- ABC在ABCD之前
					  ```
					  
					  

	- 拷贝缓冲区

		- Node 缓冲区拷贝语法如下所示：

			- buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]])

				- 参数描述如下：

					- targetBuffer - 要拷贝的 Buffer 对象。
					- targetStart - 数字, 可选, 默认: 0
					- sourceStart - 数字, 可选, 默认: 0
					- sourceEnd - 数字, 可选, 默认: buffer.length

				- 返回值

					- 没有返回值。

				- 实例

					- var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

						- 执行以上代码，输出结果为：

							- buffer2 content: ABC

	- 缓冲区裁剪

		- Node 缓冲区裁剪语法如下所示：

			- buf.slice([start[, end]])

				- 参数

					- start - 数字, 可选, 默认: 0
					- end - 数字, 可选, 默认: buffer.length

				- 返回值

					- 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。

				- 实例

					- var buffer1 = new Buffer('youj');
// 剪切缓冲区
var buffer2 = buffer1.slice(0,2);
console.log("buffer2 content: " + buffer2.toString());

						- 执行以上代码，输出结果为：

							- buffer2 content: yo

	- 缓冲区长度

		- Node 缓冲区长度计算语法如下所示：

			- buf.length;

				- 返回值

					- 返回 Buffer 对象所占据的内存长度。

				- 实例

					- var buffer = new Buffer('www.w3cschool.cn');
//  缓冲区长度
console.log("buffer length: " + buffer.length);

						- 执行以上代码，输出结果为：

							- buffer length: 16

- Node.js Stream(流)

	- 概述

		- tream 是 Node.js 中非常重要的一个模块，应用广泛。

		  Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。
		  
		  该抽象接口是可读、可写或是既可读又可写的，通过这些接口，我们可以和磁盘文件、套接字、HTTP请求来交互，实现数据从一个地方流动到另一个地方的功能。
		  
		  

	- 类型

		- Readable - 可读操作。
		- Writable - 可写操作。
		- Duplex - 可读可写操作.
		- Transform - 操作被写入数据，然后读出结果。

	- 事件

		- data - 当有数据可读时触发。
		- end - 没有更多的数据可读时触发。
		- error - 在接收和写入过程中发生错误时触发。
		- finish - 所有数据已被写入到底层系统时触发。

	- Node.js Stream(流)

		- 从流中读取数据

			- 创建 input.txt 文件，内容如下：

				- W3Cschool教程官网地址：www.w3cschool.cn

			- 创建 main.js 文件, 代码如下：

				- var fs = require("fs");
var data = '';

				  // 创建可读流
				  var readerStream = fs.createReadStream('input.txt');
				  
				  // 设置编码为 utf8。
				  readerStream.setEncoding('UTF8');
				  
				  // 处理流事件 --> data, end, and error
				  readerStream.on('data', function(chunk) {
				  data += chunk;
				  });
				  
				  readerStream.on('end',function(){
				  console.log(data);
				  });
				  
				  readerStream.on('error', function(err){
				  console.log(err.stack);
				  });
				  
				  console.log("程序执行完毕");
				  
				  ``` null
				  - 以上代码执行结果如下：
				  
				  	- 程序执行完毕
				  ```
				  
				  W3Cschool教程官网地址：www.w3cschool.cn
				  
				  

		- 写入流

			- 创建 main.js 文件, 代码如下：

				- var fs = require("fs");
var data = 'W3Cschool教程官网地址：www.w3cschool.cn';

				  // 创建一个可以写入的流，写入到文件 output.txt 中
				  var writerStream = fs.createWriteStream('output.txt');
				  
				  // 使用 utf8 编码写入数据
				  writerStream.write(data,'UTF8');
				  
				  // 标记文件末尾
				  writerStream.end();
				  
				  // 处理流事件 --> data, end, and error
				  writerStream.on('finish', function() {
				  console.log("写入完成。");
				  });
				  
				  writerStream.on('error', function(err){
				  console.log(err.stack);
				  });
				  
				  console.log("程序执行完毕");
				  
				  ``` null
				  - 以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：
				  
				  	- $ node main.js 
				  ```
				  
				  程序执行完毕
				  写入完成。
				  
				  ``` null
				  - 查看 output.txt 文件的内容：
				  
				  	- $ cat output.txt 
				  ```
				  
				  W3Cschool教程官网地址：www.w3cschool.cn
				  
				  

		- 管道流

			- 管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
			- 以下实例我们通过读取一个文件内容并将内容写入到另外一个文件中。

				- 设置 input.txt 文件内容如下：

					- W3Cschool教程官网地址：www.w3cschool.cn
管道流操作实例

				- 创建 main.js 文件, 代码如下：

					- var fs = require("fs");

					  // 创建一个可读流
					  var readerStream = fs.createReadStream('input.txt');
					  
					  // 创建一个可写流
					  var writerStream = fs.createWriteStream('output.txt');
					  
					  // 管道读写操作
					  // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
					  readerStream.pipe(writerStream);
					  
					  console.log("程序执行完毕");
					  
					  ``` null
					  	- 代码执行结果如下：
					  
					  		- $ node main.js 
					  ```
					  
					  程序执行完毕
					  
					  ``` null
					  	- 查看 output.txt 文件的内容：
					  
					  		- $ cat output.txt 
					  ```
					  
					  W3Cschool教程官网地址：www.w3cschool.cn
					  管道流操作实例
					  
					  

		- 链式流

			- 链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。

			  接下来我们就是用管道和链式来压缩和解压文件。
			  - 创建 compress.js 文件, 代码如下：
			  
			  ``` null
			  	- var fs = require("fs");
			  ```
			  
			  var zlib = require('zlib');
			  
			  // 压缩 input.txt 文件为 input.txt.gz
			  fs.createReadStream('input.txt')
			  .pipe(zlib.createGzip())
			  .pipe(fs.createWriteStream('input.txt.gz'));
			  
			  console.log("文件压缩完成。");
			  
			  ``` null
			  - 代码执行结果如下：
			  
			  	- $ node compress.js 
			  ```
			  
			  文件压缩完成。
			  
			  ``` null
			  - 执行完以上操作后，我们可以看到当前目录下生成了 input.txt 的压缩文件 input.txt.gz。
			  - 接下来，让我们来解压该文件，创建 decompress.js 文件，代码如下：
			  
			  	- var fs = require("fs");
			  ```
			  
			  var zlib = require('zlib');
			  
			  // 解压 input.txt.gz 文件为 input.txt
			  fs.createReadStream('input.txt.gz')
			  .pipe(zlib.createGunzip())
			  .pipe(fs.createWriteStream('input.txt'));
			  
			  console.log("文件解压完成。");
			  
			  ``` null
			  - 代码执行结果如下：
			  
			  	- $ node decompress.js 
			  ```
			  
			  文件解压完成。
			  
			  

- Node.js 模块系统

	- 概述

		- 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。
		- 模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。

	- 创建模块

		- 在 Node.js 中，创建一个模块非常简单，如下我们创建一个 'main.js' 文件，代码如下:

			- var hello = require('./hello');
hello.world();

			  以上实例中，代码 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。
			  
			  ``` null
			  	- Node.js 提供了exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
			  
			  		- 接下来我们就来创建hello.js文件，代码如下
			  
			  			- exports.world = function() {
			  ```
			  
			  console.log('Hello World');
			  }
			  
			  ``` null
			  				- 有时候我们只是想把一个对象封装到模块中，格式如下：
			  
			  					- module.exports = function() {
			  ```
			  
			  // ...
			  }
			  
			  ``` null
			  						- //hello.js 
			  ```
			  
			  function Hello() {
			  var name;
			  this.setName = function(thyName) {
			  name = thyName;
			  };
			  this.sayHello = function() {
			  console.log('Hello ' + name);
			  };
			  };
			  module.exports = Hello;
			  
			  ``` null
			  							- 这样就可以直接获得这个对象了：
			  
			  								- //main.js 
			  ```
			  
			  var Hello = require('./hello');
			  hello = new Hello();
			  hello.setName('BYVoid');
			  hello.sayHello();
			  
			  ``` null
			  									- 模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。
			  ```
			  
			  
			  
			  

