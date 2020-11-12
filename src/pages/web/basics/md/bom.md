# bom

## BOM浏览器对象模型

### 提供很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关

### BOM的核心对象：windows对象

- 全局作用域

	- 即是通过JavaScript访问浏览器窗口的一个接口，又是ECMAScript规定的Global对象。
	- 所有在全局作用域中声明的变量、函数都会变成window对象的属性和方法
	- 全局变量不能通过delete操作符删除，而直接在window对象上定义的属性可以

- 窗口关系及框架

	- 如果页面中包含框架，则每个框架都拥有自己的window对象
	- 在frames集合中可以通过数值索引（从0开始从左到右从上到下排序）或框架名称来访问window对象
	- top对象始终指向最外层的框架，即浏览器窗口

		- top.frames[ 1]

	- window对象指向所在框架的特定实例

		- window.frame[ 1]

	- parent对象指向当前框架的直接上层框架
	- self对象始终指向window，可以和window对象互换使用

- 窗口位置

	- 确定和修改window对象位置

		- 跨浏览器取得窗口左边和上边的位置

			- screenLeft和screenRight属性

				- IE/Safari/Opera/Chrome

			- screenX和screenY属性

				- FireFox/Safari/Chrome

		- 精确移动窗口位置

			- moveTo()方法

				- 新位置的x, y坐标值

					- window.movwTo(200, 300)

			- moveBy()方法

				- 接受在水平和垂直方向上移动的像素值两个参数

					- window.movwBy(-50, 100)

			- moveBy()和moveTo()都可能被浏览器禁用且不适用于框架，只能对最外层window对象使用

- 窗口大小

	- 跨浏览器确定窗口大小

		- IE9+/FireFox/Safari/Opera/Chrome

			- innerWidth/innerHeight/outerWidth/outerHeight四个属性
			- outerWidth/outerHeight

				- IE9+/FireFox/Safari中返回浏览器窗口本身尺寸
				- Opera中表示页面视图容器大小

			- innerWidth/innerHeight

				- 页面视图区大小（减去边框宽度）

	- 调整浏览器窗口大小

		- resizeTo()方法

			- 接受浏览器窗口的新高度和宽度两个参数

		- resizeBy()方法

			- 接受浏览器新窗口的高度和宽度之差两个参数

		- resizeBy()和resizeTo()都可能被浏览器禁用且不适用于框架，只能对最外层window对象使用

- 导航和打开窗口

	- window.open()方法

		- 打开新的浏览器窗口或导航到特定url
		- 接受四个参数：要加载的URL、窗口目标、一个特性字符串和一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值
		- 弹出窗口

			- window.open("http://……", "topFrame")

				- 有名为topFrame的框架或窗口则在其中加载这个URL
				- 若无则创建新窗口并命名为topFrame
				- 第二个参数可以是 _self/_parent/_top/_blank

			- 第二个参数不是已存在框架或窗口

				- 根据第三个参数创建新窗口或标签页

					- 无第三个参数则打开全部默认设置的新窗口

				- 不打开新窗口则忽略第三个参数

			- 有的浏览器默认不允许针对主浏览器窗口调整大小或移动位置，但允许对通过window.open()创建的窗口调整
			- .opener属性保存打开window对象的原始窗口对象

				- var wroxWin=window.open('#', 'wropWindow'); alert(wropWin.opener==window;) //true

		- 安全限制：许多浏览器限制弹出窗口的实现配置
		- 弹出窗口屏蔽程序

			- 检测是否被屏蔽

- 间歇调用和超时调用

	- 超时调用

		- 指定的时间过后执行代码
		- 使用window对象的setTimeout()方法

			- 两个参数：要执行的参数，以毫秒表示的时间

				- setTimeout(function(){ alert("hello");}, 1000);
				- 第二个参数表示过多久把当前任务添加到队列中，若队列不为空则等前面代码执行完了执行

			- 返回一个数值ID表示超时调用，可通过此ID取消超时调用

				- ClearTimeout(timeoutId);

	- 间歇调用

		- 按照指定时间间隔重复执行代码
		- setInterval()方法

			- 使用方法与setTimeout()方法相同

		- 开发环境下后一个间歇调用可能会在前一个间歇调用结束之前启动。所以一般使用超时调用，很少使用间歇调用

- 系统对话框

	- 浏览器调用系统对话框方法：alert()/confirm()/prompt()

		- 打开的对话框是同步和模态的，打开时代码会停止执行

	- 与网页无关，不包含HTML，由操作系统和浏览器设置决定外观
	- alert()方法一般显示警告信息，只有确定按钮
	- confirm()方法有确认和取消按钮，返回true和false值
	- prompt()方法生成提示框，可以输入文本

		- 接受要显示给用户的文本提示和文本输入域默认值两个参数
		- 单击ok返回文本输入域值，单击cancel返回null

	- 通过javascript可以打开查找和打印对话框

		- window.print(); window.find();

### location对象

- 提供与当前窗口中加载文档有关信息和一些导航功能
- 即是window对象又是document对象
- 将URL解析为独立片段，开发人员可以通过不同属性访问这些片段

	- hash属性

		- 返回URL中的hash（#后跟0或多个字符）

	- host属性

		- 返回服务器名称和端口号

	- hostname属性

		- 返回不带端口号的服务器名称

	- href属性

		- 返回当前加载页面完整URL

	- ……

- 查询字符串参数
- 位置操作

	- 改变浏览器位置并生成新历史记录

		- assign()方法

			- location.assign('URL');
			- 将location.href或window.location设置为一个URL也会调用assign()方法

		- 修改location对象的其他属性也可以改变当前加载页面
		- 使用replace()方法不会在历史记录中生成新纪录，用户无法回到前一个页面
		- reload()方法重新加载当前页面

			- location.reload(true); 强制从服务器重新加载
			- 位于reload()方法之后的代码受网络延迟或系统资源因素影响可能不会执行，一般将其放在代码最后一行

### navigator对象

- 提供客户端浏览器信息，是识别客户端浏览器的事实标准
- 检测插件

	- 非IE浏览器：使用plugins数组

		- 数组属性

			- name，插件名字
			- description：插件描述
			- filename：插件文件名
			- length：插件所处理的MIME类型数量

		- hasPlugin()函数

			- 接受要检测的插件名作为参数
			- 可以在FireFox/Opera/Safari/Chrome中使用这种方法

	- IE浏览器

		- 使用专有ActiveXObject类型并尝试创建一个特定插件的实例

			- IE使用COM对象方式实现插件

				- COM对象使用唯一标识符来标识

			- hasIEPlugin()函数

				- 接收一个COM标识符为参数
				- 在try-catch语句中进行实例化

	- 典型做法：针对每个插件分别创建检测函数

- 注册处理程序

	- FireFox2为navigator对象新增registerContentHandler()和registerProtocolHandler()方法

		- 可以让一个站点指明它可以处理的特定类型的信息

	- registerContentHandler()方法

		- 三个参数：要处理的MIME类型、可以处理该类型的页面的URL、应用程序名称

	- registerProtocolHandler()方法

		- 三个参数：要处理的协议、处理该协议的页面的URL、应用程序名称

### screen对象

- 基本上只用于表明客户端的能力

	- 包括浏览器窗口外部显示器信息如像素宽度和高度等

- 每个浏览器中的screen对象包含不同属性
- 有时用于调整浏览器窗口大小

### history对象

- 保存用户上网的历史记录

	- 因为history对象是window对象的属性，所以每个浏览器窗口、标签页乃至每个框架都有自己的history对象与特定window对象关联
	- 出于安全考虑，开发者无法得知用户浏览过的URL

- go()方法

	- 可以在用户历史记录中任意跳转，向前或向后
	- 接受表示向前或向后跳转的页面数的整数值作为一个参数

		- history.go(-1); 后退一页
		- history.go(2); 前进两页

	- 接受一个字符串作为参数跳转到最近的包含该字符串的位置

		- history.go('wrox.com'); 可能前进或后退

	- back()/forword()方法代替go()，后退或前进一步

- length属性

	- 检测当前页面是不是用户历史记录中第一个页面

		- if (history.length==0){};

## BOM

### 说明：window对象上面的属性和方法

### 方法

- 1.onload

	- 页面加载完（等在静态资源加载完成），才执行这个函数

- 2.定时器

	- 一次性定时器

		- 1.setTimeout:（函数，毫秒数）

			- 返回值：返回这个定时器的id

		- 2 clearTimeout（定时器的id） 停止

	- 永久性定时器

		- 1.setInterval：（函数，毫秒数）

			- 返回值：返回这个定时器的id

		- 2 clearInterval（定时器的id） 清除永久定时器

- 3.location

	- 负责管理浏览器地址相关的行为和信息的对象

		- 例：window.location.href = "http://www.baidu.com"

- 4.localStorage

	- 实现数据本地化，刷新后还在
	- 1.setItem(键，值)
	- 2.getItem（键）------没有值，返回null
	- 3.removeItem（键）
	- 4.clear() 清除全部

- 5.JSON

	- 介绍：

		- 1.本质是有一定格式的字符串
		- 2.BOM上的方法

	- 方法：

		- 1.JSON.stringify(对象);

			- 把对象转为字符串

		- 2.JSON.parse(json格式字符串);

			- JSON格式的字符串转为对象

