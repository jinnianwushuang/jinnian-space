## 现代前端技术解析

### 前端与协议

- HTTP协议
- 前端实时协议

	- WebSocket通信机制
	- Poll(轮询)和Long-poll(长轮询)

		- Poll即浏览器采用定时向服务器发送请求轮询的方法不断发送或拉取消息。
		- HTTP请求可以设置一个较长的Timeout等待时间，这样网络轮询请求就可以维持一段较长的时间后返回结果，这也就是Long-poll（长轮询）的基本思路。服务器只要在这段长轮询时间内进行响应，请求便会立即返回结果；如果这段时间服务器没有返回，浏览器端将自动响应超时并重新发起一个长轮询请求。

	- 前端DDP协议

		- DDP（Distributed Data Protocol，分布式数据协议）是一种新型的客户端与服务器端的实时通信协议，由于兼容性的原因，目前使用还不广泛。

- RESTful数据协议规范

	- REST（Representational State Transfer，表述性状态转化）并不是某一种具体的协议，而是定义了一种网络应用软件之间的架构关系并提出了一套与之对应的网络之间交互调用的规则。
	- 换种方式理解，RESTful是一种软件架构之间交互调用数据的协议风格规范，它建议以一种通用的方式来定义和管理数据交互调用接口。

- 与Native交互协议

### 前端三层结构与应用

- HTML结构层基础

	- Web语义化标签

		- 用正确的标签做正确的事情。
		- HTML语义化能让页面内容更具结构化且更加清晰，便于浏览器和搜索引擎进行解析，因此在兼容条件下，要尽量使用带有语义化结构标签。
		- 即使在没有样式CSS的情况下，网页内容也应该是有序的文档格式显示，并且是容易阅读的。
		- 使项目维护人员更容易对网站进行分块，便于阅读理解。语义化的标签使用，能让开发者更容易区分标签元素中的内容

	- HTML糟糕的部分

		- Web语义化规范并不是在任何时候都需要严格遵守的，有时直接使用甚至会产生一些副作用。

	- AMP HTML

		- 流动网页提速（Accelerated Mobile Pages，AMP）是google推行的一个提升页面资源载入效率的HTML提议规范。基本思路有两点：使用严格受限的高效HTML标签以及使用静态网页缓存技术来提高网络访问静态资源的性能和用户体验。

- 前端结构层演进

	- XML与HTML简述

		- 可扩展标记语言（Extentsible Markup Language，XML）是用来描述网络上存储数据的一种特殊文本标记格式。
		- HTML则是从SGML的基础上演化而来的另一种文本标记语言，一般用于网络上数据的展示。

	- HTML5标准
	- HTML Web Component

- 浏览器脚本演进历史

	- CoffeeScript时代 --> ECMAScript标准概述 --> TypeScript概述 --> JavaScript衍生脚本

- JavaScript标准实践

	- ES5
	- ES6

		- let和const使用场景：模块内不变的引用和常量，一般使用const定义；可变的变量或引用使用let声明；var仅用于声明函数整个作用域内需要使用的变量。
		- 字符串模板
		- 解构赋值
		- 数组新特性
		- 函数参数

			- 默认参数
			- 不定参数
			- 扩展参数

		- 箭头函数
		- 增强对象
		- 类
		- 模块module
		- 循环与迭代器Iterator

			- for...of
			- Iterator

		- 生成器Generator
		- 集合类型Map+Set+WeakMap+WeakSet
		- Promise、Symbol、Proxy增强类型
		- 统一码
		- 进制数支持

			- 二进制（b）
			- 八进制（o）

		- Reflect对象和tail calls尾调用

	- ES7+

		- 幂指数操作符**
		- Array.prototype.includes
		- 异步函数async/await
		- SIMD

	- TypeScript

		- 强类型支持
		- Decorator装饰器特性

- 前端表现层基础

	- CSS选择器与属性

		- CSS选择器

			- CSS中选择器属性优先级顺序为！important>内联样式（权重1000）> id选择器（权重100）>类选择器（权重10）>元素选择器（权重1）
			- 伪元素：::before，::after
			- 伪类：visited、:hover、:first-child、:nth-child、:enable、:checked

		- CSS属性

			- 布局类属性：position类、弹性布局fex、浮动float、对齐align
			- 几何类属性：盒模型相关（margin、padding、width、heigh、border）、box-shadow、渐变gradient、backgroud类、transform类
			- 文本类属性：font类、line-height、color类、text类（text-decoration、text-indent、textoverflow）、white-space、user-select、text-shawdow等
			- 动画类属性：以css3为主的transition、animation等
			- 查询类：Media query和IE Hack等

- 前端界面技术

	- CSS样式统一化

		- reset：将不同浏览器中标签元素的默认样式全部清除，消除不同浏览器下默认样式的差异性
		- normalize：在整站样式基本确定的情况下对标签元素统一使用同一个默认样式规则
		- neat

	- css预处理

		- 预处理技术

			- sass
			- less
			- stylus
			- postCss：是一个用 JavaScript 工具和插件转换 CSS 代码的工具

		- 预处理工具特性

			- 变量声明和计算。方便一次赋值和随处使用，并能进行简单运算，提高开发管理效率。
			- 语法表达式。例如if-else条件语句、for循环等简单语法的设计能让页面CSS规则的生成更加灵活。
			- 函数处理。方便多次计算的地方能统一复用，例如函数处理和Mixin等特性。
			- 属性的继承。元素类属性的继承在开发样式相似但略微不同的多个模块的过程中非常有用，可以减少大量重复代码。
			- 兼容性补全。类似autoprefixer这种功能，让开发者不用过多关注不同浏览器的兼容问题，处理多个浏览器兼容性的代码能在预处理阶段自动生成补全，让一些问题的处理方式对开发者透明。

	- 表现层动画实现

		- JavaScript直接实现动画：其主要思想是通过JavaScript的setInterval方法或setTimeout方法的回调函数来持续调用改变某个元素的CSS样式以达到元素样式持续变化的结果
		- 可伸缩矢量图形（Scalable Vector Graphics，SVG）动画
		- CSS3 transition
		- CSS3 animation
		- Canvas动画
		- requestAnimationFrame

- 响应式网站开发技术

	- 响应式页面实现概述

		- 实现方法

			- 通过前端或后端判断userAgent来跳转不同的页面完成不同设备浏览器的适配，也就是维护两个不同的站点来根据用户设备进行对应的跳转
			- 使用media query媒体查询等手段，让页面根据不同设备浏览器自动改变页面的布局和显示，但不做跳转

	- 结构层响应式

		- 结构层数据内容响应式：根据不同平台浏览器的情况加载不同的异步静态JavaScript，然后异步渲染不同的模块内容，生成不同的表现层结构来实现
		- 后端数据渲染响应式
		- 结构层媒体响应式

	- 表现层响应式

		- 响应式布局：

			- 一种是桌面端浏览器优先，扩展到移动端浏览器适配
			- 另一种则是以移动端浏览器优先，扩展到桌面端浏览器适配

		- 屏幕适配布局：在移动端解决内容按照不同屏幕大小自动等比例缩放的一种布局计算方式

	- 行为层响应式

### 现代前端交互框架

- 直接DOM操作时代

	- 节点查询型：getElementById、getElementsByName、getElementsByClassName、getElementsByTagName、querySelector、querySelectorAll
	- 节点创建型：createElement、createDocumentFragment、createTextNode、cloneNode
	- 节点修改型：appendChild、replaceChild、removeChild、insertBefore、innerHTML
	- 节点关系型：parentNode、previousSibling、childNodes
	- 节点属性型：innerHTML、attributes、getAttribute、setAttribute、getComputedStyle
	- 内容加载型：XMLHttpRequest、ActiveX

- MV*交互模式

	- 前端MVC模式
	- 前端MVP模式
	- 前端MVVM模式
	- 数据变更检测示例

		- 手动触发绑定
		- 脏检测机制
		- 前端数据对象劫持(Hijacking)
		- ECMAScript 6 Proxy

- Virtual DOM交互模式

	- Virtual DOM设计理念
	- Virtual DOM的核心实现

		- 创建Virtual DOM：把一段HTML字符串文本解析成一个能够描述它的JavaScript对象
		- 对比两个Virtual DOM生成差异化Virtual DOM
		- 将差异化Virtual DOM渲染到页面上

- 前端MNV*时代

	- MNV*模式简介：这种使用JavaScript调用原生控件或事件绑定来生成应用程序的交互模式称为前端MNV＊开发模式
	- MNV*模式实现原理

### 前端项目与技术实践

- 前端开发规范
- 前端组件规范

	- UI组件规范

		- UI层风格统一化。UI层风格统一化避免了不同页面的差异化设计风格，能让用户使用Web站点的不同网页外观风格是一致的。
		- 增加UI层复用性。使用UI规范的情况下，UI层代码复用性增强，可以提高开发效率，相同功能的结构和样式不用重复实现。
		- 更符合用户的体验习惯。例如红色按钮统一用来表示警告，绿色按钮统一表示安全或成功操作等。
		- 增加了开发规范的统一性。遵循统一的规范，避免重复开发，避免产生多种风格的代码。

	- 模块化规范

		- AMD（异步模块定义）：AMD是运行在浏览器端的模块化异步加载规范，主要以requireJS为代表，基本原理是定义define和require方法异步请求对应的javascript模块文件到浏览器端运行。模块执行导出时可以使用函数中的return返回结果。
		- CMD（通用模块定义）：CMD是Seajs提出的一种模块化规范，在浏览器端调用类似CommonJS的书写方式来进行模块引用，但却不是完全的CommonJS规范。
CMD遵循按需执行依赖的原则
		- CommonJS：CommonJS是Node端使用的JavaScript模块化规范，使用require进行模块引入，并使用modules.exports来定义模块导出。
		- import/export

	- 项目组件化设计规范

		- Web Component组件化
		- MVVM框架组件化
		- Virtual DOM的组件化方案
		- 基于目录管理的通用组件化实践

- 自动化构建

	- 自动化构建的目的：对文件进行模块化引入、依赖分析、资源合并、压缩优化、文件嵌入、路径替换、生成资源包等多种操作，这样就能完成很多原本需要手动完成的事情，极大地提高开发效率
	- 自动化构建原理：读取入口文件→分析模块引用→按照引用加载模块→模块文件编译处理→模块文件合并→文件优化处理→写入生成目录
	- 构建工具设计的问题

		- 模块分析引入
		- 模块化规范支持
		- CSS编译、自动合并图片
		- HTML、JavaScript、CSS资源压缩优化
		- HTML路径分析替换
		- 区分开发和上线目录环境
		- 异步文件打包方案
		- 文件目录白名单设置

- 前端性能优化

	- 前端性能测试
	- 桌面浏览器前端优化策略
	- 移动端浏览器前端优化

- 前端用户数据分析

	- 用户访问统计
	- 用户行为分析
	- 前端日志上报
	- 前端性能分析上报

- 前端搜索引擎优化基础
- 前端协作

## 高效的组件化规范

### 组件之间独立、松耦合。组件之间的HTML、JavaScript、CSS之间相互独立，尽量不重复，相同部分通过父级或基础组件来实现，最大限度减少重复代码。

### 组件间嵌套使用。组件可以嵌套使用，但嵌套后仍然是独立、松耦合的。

### 组件间通信。主要指组件之间的函数调用或通信，例如A组件完成某个操作后希望B组件执行某个行为，这种情况就可以使用监听或观察者模式在B组件中注册该行为的事件监听或加入观察者，然后选择合适的时机在A组件中触发这个事件监听或通知观察者来触发B组件中的行为操作，而不是在A组件中直接拿到B组件的引用并直接进 行操作，因为这样组件之间的行为就会产生耦合。

### 组件公用部分设计。组件的公用部分应该被抽离出来形成基础库，用来增加代码的复用性。

### 组件的构建打包。构建工具能够自动解析和打包组件内容。

### 异步组件的加载模式。在移动端，通常考虑到页面首屏，异步的场景应用非常广泛，所有异步组件不能和同步组件一起处理。这时可以将异步组件区别于普通组件的目录存放，并在打包构建时进行异步打包处理。

### 组件继承与复用性。对于类似的组件要做到基础组件复用来减少重复编码。

### 私有组件的统一管理。为了提高协作效率，可以通过搭建私有源的方式来统一管理组件库，例如使用包管理工具等。但这点即使在大的团队里面也很难实施，因为业务组件的实现常常需要定制化而且经常变更，这样维护组件库成本反而更大，目前可以做的是将公用的组件模块使用私有源管理起来。

### 根据特定场景进行扩展或自定义。如果当前的组件框架不能满足需求，我们应该能够很便捷地拓展新的框架和样式，这样就能适应更多的场景需求。比如在通过目录管理组件的方案下，既可以使用MVVM框架进行开发，也可以使用Virtual DOM框架进行开发，但要保持基本的规范结构不变。

