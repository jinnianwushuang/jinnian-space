# es6

## let 和 const 命令

### let 命令

- 声明的变量，只在let命令所在的代码块内有效
- for循环的计数器，就很合适使用let命令
- let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错
- 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响
- 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域
- “暂时性死区”也意味着typeof不再是一个百分之百安全的操作
- let不允许在相同作用域内，重复声明同一个变量
- ES6 引入了块级作用域，明确允许在块级作用域之中声明函数

### const 命令

- const声明一个只读的常量。一旦声明，常量的值就不能改变
- const一旦声明变量，就必须立即初始化，不能留到以后赋值
- const的作用域与let命令相同：只在声明所在的块级作用域内有效
- const命令声明的常量也是不提升，同样存在暂时性死区
- const声明的常量，也与let一样不可重复声明
- const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
- ES5 只有两种声明变量的方法：var命令和function命令。ES6 除了添加let和const命令
后面章节还会提到，另外两种声明变量的方法：import命令和class命令

### 顶级对象属性

- var命令和function命令声明的全局变量，依旧是顶层对象的属性；
- 另一方面规定，let命令、const命令、class命令声明的全局变量，不属于顶层对象的属性

## 变量的解构赋值

### 数组的解构赋值

- ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构
- 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 如果解构不成功，变量的值就等于undefined
- 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组
- 对于 Set 结构，也可以使用数组的解构赋值
- 只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值
- 解构赋值允许指定默认值

	- 只有当一个数组成员严格等于undefined，默认值才会生效

- 默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值

### 对象的解构赋值

- 对象的属性没有次序，变量必须与属性同名，才能取到正确的值
- 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量
- 与数组一样，解构也可以用于嵌套结构的对象
- 对象的解构也可以指定默认值

	- 默认值生效的条件是，对象的属性值严格等于undefined

- 如果解构失败，变量的值等于undefined
- 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错
- 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构

### 字符串的解构赋值

- 字符串被转换成了一个类似数组的对象
- 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值

### 数值和布尔值的解构赋值

- 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
- 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象
- 由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错

### 函数参数的解构赋值

- undefined就会触发函数参数的默认值

### 圆括号问题

- ES6 的规则是，只要有可能导致解构的歧义，就不得使用圆括号
- 建议只要有可能，就不要在模式中放置圆括号
- 可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

### 用途

- 交换变量的值
- 从函数返回多个值
- 函数参数的定义
- 提取 JSON 数据
- 函数参数的默认值
- 遍历 Map 结构
- 输入模块的指定方法

### 变量的结构赋值

- 数组

	- 解析不成功值就是undefined
	- 不完全结构，结构依然可以成功
	- 不是可遍历结构报错
	- 允许指定默认值、===判断undefined时赋值
	- 按次序

- 对象

	- 变量名必须与属性名同名
	- 解构失败时为undefined
	- 解构赋值可以取到继承的属性
	- 结构模式时嵌套的对象，子对象所在的父属性不存在，那么将会报错
	- 对象也可以指定默认值
	- 以申明的变量用于解构赋值要加圆括号
	- 数组时特殊的对象，因此可以对数组进行对象的属性的解构

- 字符串

	- 字符串被转换成一个类似的数组对象
	- 有length属性，可以对这个属性赋值

- 数值和布尔值

	- 如果等号右边是数值和布尔值，则会先转为对象

		- let {toString: s} = 123;
s === Number.prototype.toString // true
		- let {toString: s} = true;
s === Boolean.prototype.toString // true

	- 由于undefined和null无法转为对象，所以对它们进行解构赋值会报错

- 函数参数
- 圆括号

	- 不适用

		- 变量声明语句
		- 函数参数
		- 赋值语句的模式

	- 适用

		- 赋值语句的非模式部分

- 用途

	- 交换变量的值
	- 从函数返回多个值
	- 函数参数的定义
	- 提取JSON数据
	- 函数参数的默认值
	- 遍历Map结构

		- let [key,value] of map

	- 输入模块的指定方法

## 字符串的扩展

### 字符的 Unicode 表示法

- JavaScript 允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点
- ES6 对这一点做出了改进，只要将码点放入大括号，就能正确解读该字符

### codePointAt()

- JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节
- 对于这种4个字节的字符，charAt方法无法读取整个字符，charCodeAt方法只能分别返回前两个字节和后两个字节的值
- ES6 提供了codePointAt方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。
- 对于那些两个字节储存的常规字符，它的返回结果与charCodeAt方法相同
- codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下

### String.fromCodePoint()

- ES5 提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别 32 位的 UTF-16 字符
- ES6 提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足
- 如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回

### 字符串的遍历器接口

- ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
- 这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点

### at()

- ES5 对字符串对象提供charAt方法，返回字符串给定位置的字符。该方法不能识别码点大于0xFFFF的字符
- 有一个提案，提出字符串实例的at方法，可以识别 Unicode 编号大于0xFFFF的字符，返回正确的字符

### normalize()

- ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化

### includes(), startsWith(), endsWith()

- JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中
- includes()：返回布尔值，表示是否找到了参数字符串
- startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部
- endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部

### repeat()

- repeat方法返回一个新字符串，表示将原字符串重复n次
- 参数如果是小数，会被取整
- 如果repeat的参数是负数或者Infinity，会报错
- 如果参数是 0 到-1 之间的小数

### padStart()，padEnd()

- 如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全
- padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串
- 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串
- 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串
- 如果省略第二个参数，默认使用空格补全长度

### matchAll()

- matchAll方法返回一个正则表达式在当前字符串的所有匹配

### 模板字符串

- 模板字符串（template string）是增强版的字符串，用反引号（`）标识
- 如果在模板字符串中需要使用反引号，则前面要用反斜杠转义
- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
- 模板字符串中嵌入变量，需要将变量名写在${}之中
- 模板字符串之中还能调用函数
- 模板字符串甚至还能嵌套。

### 实例：模板编译

- 该模板使用<%...%>放置 JavaScript 代码，使用<%= ... %>输出 JavaScript 表达式

### 标签模板

- “标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容

### String.raw()

- String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）
的字符串，对应于替换变量后的模板字符串

### 模板字符串的限制

- 模板字符串默认会将字符串转义，导致无法嵌入其他语言

## 正则的扩展

### RegExp 构造函数

- 第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符
- 第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝
- ES5 不允许此时使用第二个参数添加修饰符，否则会报错
- ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符

### 字符串的正则方法

- 字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()

### u 修饰符

- ES6 对正则表达式添加了u修饰符，含义为“Unicode 模式”，用来正确处理大于\uFFFF的 Unicode 字符
- 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符
- 对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符
- ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词
- 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符
- u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的 Unicode 字符

### RegExp.prototype.unicode 属性

- 正则实例对象新增unicode属性，表示是否设置了u修饰符

### y 修饰符

- ES6 还为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符

### RegExp.prototype.sticky 属性

- 与y修饰符相匹配，ES6 的正则实例对象多了sticky属性，表示是否设置了y修饰符

### RegExp.prototype.flags 属性

- ES6 为正则表达式新增了flags属性，会返回正则表达式的修饰符

### s 修饰符：dotAll 模式

- 正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外
- 一个是四个字节的 UTF-16 字符，这个可以用u修饰符解决；另一个是行终止符
- 这被称为dotAll模式，即点（dot）代表一切字符。所以，正则表达式还引入了一个dotAll属性，返回一个布尔值，表示该正则表达式是否处在dotAll模式

### 后行断言

- ”先行断言“指的是，x只有在y前面才匹配，必须写成/x(?=y)/
- “后行断言”正好与“先行断言”相反，x只有在y后面才匹配，必须写成/(?<=y)x/

### Unicode 属性类

- ES2018 引入了一种新的类的写法\p{...}和\P{...}，允许正则表达式匹配符合 Unicode 某种属性的所有字符

### 具名组匹配

- 正则表达式使用圆括号进行组匹配
- 有了具名组匹配以后，可以使用解构赋值直接从匹配结果上为变量赋值
- 如果要在正则表达式内部引用某个“具名组匹配”，可以使用\k<组名>的写法

### String.prototype.matchAll

- 如果一个正则表达式在字符串里面有多个匹配，现在一般使用g修饰符或y修饰符，在循环里面逐一取出

## 数值的扩展

### 二进制和八进制表示法

- ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示

### Number.isFinite(), Number.isNaN()

- Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity
- Number.isNaN()用来检查一个值是否为NaN，如果参数类型不是NaN，Number.isNaN一律返回false
- 传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效
- Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false

### Number.parseInt(), Number.parseFloat()

- ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变

### Number.isInteger()

- Number.isInteger()用来判断一个数值是否为整数
- JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值

### Number.EPSILON

- ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差
- Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了

### 安全整数和 Number.isSafeInteger()

- JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
- Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内

### Math 对象的扩展

- ES6 在 Math 对象上新增了 17 个与数学相关的方法。所有这些方法都是静态方法，只能在 Math 对象上调用
- Math.trunc方法用于去除一个数的小数部分，返回整数部分
- Math.sign方法用来判断一个数到底是正数、负数、还是零
- Math.cbrt方法用于计算一个数的立方根
- JavaScript 的整数使用 32 位二进制形式表示，Math.clz32方法返回一个数的 32 位无符号整数形式有多少个前导 0
- Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
- Math.fround方法返回一个数的32位单精度浮点数形式
- Math.hypot方法返回所有参数的平方和的平方根
- Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1
- Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
- Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN
- Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN
- Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
- Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
- Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
- Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
- Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
- Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

### 指数运算符

- ES2016 新增了一个指数运算符（**）
- 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）

## 函数的扩展

### 函数参数的默认值

- ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面
- 参数变量是默认声明的，所以不能用let或const再次声明。
- 使用参数默认值时，函数不能有同名参数
- 参数默认值是惰性求值的
- 参数默认值可以与解构赋值的默认值，结合起来使用
- 默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined
- 如果传入undefined，将触发该参数等于默认值，null则没有这个效果
- 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
- 指定了默认值后，length属性将失真
- 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误

### rest 参数

- ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了
- rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用

### 严格模式

- ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，
那么函数内部就不能显式设定为严格模式，否则会报错
- 设定全局性的严格模式，这是合法的
- 函数包在一个无参数的立即执行函数里面

### name 属性

- 函数的name属性，返回该函数的函数名。
- 如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名
- 如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字
- Function构造函数返回的函数实例，name属性的值为anonymous
- bind返回的函数，name属性值会加上bound前缀

### 箭头函数

- ES6 允许使用“箭头”（=>）定义函数
- 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分
- 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回
- （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
- （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
- （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
- （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数
- 箭头函数内部，还可以再使用箭头函数

### 双冒号运算符

- 现在有一个提案，提出了“函数绑定”（function bind）运算符，用来取代call、apply、bind调用
- 函数绑定运算符是并排的两个冒号（::），双冒号左边是一个对象，右边是一个函数
- 该运算符会自动将左边的对象，作为上下文环境（即this对象），绑定到右边的函数上面
- 如果双冒号运算符的运算结果，还是一个对象，就可以采用链式写法

### 尾调用优化

- 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数
- 尾调用不一定出现在函数尾部，只要是最后一步操作即可
- 如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，这将大大节省内存
- 函数调用自身，称为递归。如果尾调用自身，就称为尾递归

### 函数参数的尾逗号

- ES2017 允许函数的最后一个参数有尾逗号（trailing comma）

## 数组的扩展

### 扩展运算符

- 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列
- 由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了
- 数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组
- 扩展运算符提供了数组合并的新写法。
- 扩展运算符可以与解构赋值结合起来，用于生成数组
- 扩展运算符还可以将字符串转为真正的数组。
- 任何 Iterator 接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组
- Map 和 Set 结构，Generator 函数

### Array.from()

- Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map
- Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组

### Array.of()

- Array.of方法用于将一组值，转换为数组
- 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异
- Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载

### 数组实例的 copyWithin()

- 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组

### 数组实例的 find() 和 findIndex()

- 数组实例的find方法，用于找出第一个符合条件的数组成员
- 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员
- 如果没有符合条件的成员，则返回undefined
- 数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
- 这两个方法都可以接受第二个参数，用来绑定回调函数的this对象

### 数组实例的 fill()

- fill方法使用给定值，填充一个数组。
- 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象

### 数组实例的 entries()，keys() 和 values()

- ES6 提供三个新的方法——entries()，keys()和values()——用于遍历数组
- 它们都返回一个遍历器对象，可以用for...of循环进行遍历
- 如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历

### 数组实例的 includes()

- Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
- Map 和 Set 数据结构有一个has方法，需要注意与includes区分

### 数组的空位

- 数组的空位指，数组的某一个位置没有任何值
- Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位
- 扩展运算符（...）也会将空位转为undefined
- copyWithin()会连空位一起拷贝
- fill()会将空位视为正常的数组位置
- for...of循环也会遍历空位
- entries()、keys()、values()、find()和findIndex()会将空位处理成undefined

## 对象的扩展

### 属性的简洁表示法

- ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

### 属性名表达式

- JavaScript 定义对象的属性，有两种方法
- 方法一是直接用标识符作为属性名，方法二是用表达式作为属性名，这时要将表达式放在方括号之内
- 注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]

### 方法的 name 属性

- 函数的name属性，返回函数名。对象方法也是函数，因此也有name属性
- 如果对象的方法使用了取值函数（getter）和存值函数（setter），则name属性不是在该方法上面，
而是该方法的属性的描述对象的get和set属性上面，返回值是方法名前加上get和set
- bind方法创造的函数，name属性返回bound加上原函数的名字；
- Function构造函数创造的函数，name属性返回anonymous
- 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述

### Object.is()

- 用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致
- 不同之处只有两个：一是+0不等于-0，二是NaN等于自身

### Object.assign()

- Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
- 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性
- 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过
- 这意味着，如果undefined和null不在首参数，就不会报错
- Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）
- Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用
- 遇到同名属性，Object.assign的处理方法是替换，而不是添加
- Object.assign可以用来处理数组，但是会把数组视为对象
- Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制
- 为对象添加属性
- 为对象添加方法
- 克隆对象
- 合并多个对象
- 为属性指定默认值

### 属性的可枚举性和遍历

- 对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为
- Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
- for...in循环：只遍历对象自身的和继承的可枚举的属性。
- Object.keys()：返回对象自身的所有可枚举的属性的键名。
- JSON.stringify()：只串行化对象自身的可枚举的属性。
- Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性
- 引入“可枚举”（enumerable）这个概念的最初目的，就是让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到
- 属性的遍历

	- for...in
	- Object.keys(obj)
	- Object.getOwnPropertyNames(obj)
	- Object.getOwnPropertySymbols(obj)
	- Reflect.ownKeys(obj)
	- 首先遍历所有数值键，按照数值升序排列。
	- 其次遍历所有字符串键，按照加入时间升序排列。
	- 最后遍历所有 Symbol 键，按照加入时间升序排列。

### Object.getOwnPropertyDescriptors()

- ES2017 引入了Object.getOwnPropertyDescriptors方法，返回指定对象所有自身属性（非继承属性）的描述对象
- 该方法的引入目的，主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题

### __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()

- ES6 规定__proto__只有浏览器要部署，其他环境不用部署
- __proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象
- Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象，返回参数对象本身
- 该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象

### super 关键字

- ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象
- super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错

### Object.keys()，Object.values()，Object.entries()

- ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
- ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用
- Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值
- 返回数组的成员顺序
- Object.values会过滤属性名为 Symbol 值的属性
- Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组

### 对象的扩展运算符

- 运算符（...）ES2018 将这个运算符引入了对象
- 对象的解构赋值用于从一个对象取值，相当于将目标对象自身的所有可遍历的（enumerable）、但尚未被读取的属性，分配到指定的对象上面
- 由于解构赋值要求等号右边是一个对象，所以如果等号右边是undefined或null，就会报错，因为它们无法转为对象
- 解构赋值必须是最后一个参数，否则会报错

## Symbol

### 概述

- ES5 的对象属性名都是字符串，这容易造成属性名的冲突
- Symbol的引入，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突
- 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
- Symbol函数前不能使用new命令，否则会报错
- Symbol 值不是对象，所以不能添加属性
- Symbol 值不能与其他类型的值进行运算，会报错
- Symbol 值可以显式转为字符串
- Symbol 值也可以转为布尔值，但是不能转为数值

### 作为属性名的 Symbol

- 由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性
- Symbol 值作为对象属性名时，不能用点运算符

### 实例：消除魔术字符串

- 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
- 常用的消除魔术字符串的方法，就是把它写成一个变量。

### 属性名的遍历

- Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回
- 有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名
- Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名

### Symbol.for()，Symbol.keyFor()

- 我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点
- 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值
- 如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值
- Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值
- Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key

### 实例：模块的 Singleton 模式

- Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例
- 如果键名使用Symbol方法生成，那么外部将无法引用这个值，当然也就无法改写。

### 内置的 Symbol 值

- 除了定义自己使用的 Symbol 值以外，ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方法
- 对象的Symbol.hasInstance属性，指向一个内部方法
- 对象的Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开
- 对象的Symbol.species属性，指向一个构造函数。创建衍生对象时，会使用该属性
- 对象的Symbol.match属性，指向一个函数。当执行str.match(myObject)时，如果该属性存在，会调用它，返回该方法的返回值
- 对象的Symbol.replace属性，指向一个方法，当该对象被String.prototype.replace方法调用时，会返回该方法的返回值
- 对象的Symbol.search属性，指向一个方法，当该对象被String.prototype.search方法调用时，会返回该方法的返回值
- 对象的Symbol.split属性，指向一个方法，当该对象被String.prototype.split方法调用时，会返回该方法的返回值
- 对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
- 对象的Symbol.toPrimitive属性，指向一个方法。该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值
- 对象的Symbol.toStringTag属性，指向一个方法。在该对象上面调用Object.prototype.toString方法时，
如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型
- 对象的Symbol.unscopables属性，指向一个对象。该对象指定了使用with关键字时，哪些属性会被with环境排除

## Set 和 Map 数据结构

### Set

- ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
- 上面代码向 Set 实例添加了两个NaN，但是只能加入一个。这表明，在 Set 内部，两个NaN是相等
- Set.prototype.constructor：构造函数，默认就是Set函数。
- Set.prototype.size：返回Set实例的成员总数
- add(value)：添加某个值，返回 Set 结构本身。
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
- has(value)：返回一个布尔值，表示该值是否为Set的成员。
- clear()：清除所有成员，没有返回值。
- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

### WeakSet

- WeakSet 结构与 Set 类似，也是不重复的值的集合
- WeakSet 的成员只能是对象，而不能是其他类型的值
- WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中
- WeakSet 是一个构造函数，可以使用new命令，创建 WeakSet 数据结构
- WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
- WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
- WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
- WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了

### Map

- 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
- 事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作Map构造函数的参数
- size属性返回 Map 结构的成员总数。
- set方法设置键名key对应的键值为value，然后返回整个 Map 结构。
- get方法读取key对应的键值，如果找不到key，返回undefined
- has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
- delete方法删除某个键，返回true。如果删除失败，返回false
- clear方法清除所有成员，没有返回值
- keys()：返回键名的遍历器。
- values()：返回键值的遍历器。
- entries()：返回所有成员的遍历器。
- forEach()：遍历 Map 的所有成员。

### WeakMap

- WeakMap结构与Map结构类似，也是用于生成键值对的集合。
- WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
- WeakMap的键名所指向的对象，不计入垃圾回收机制
- WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性
- WeakMap只有四个方法可用：get()、set()、has()、delete()

## Proxy

### 概述

- Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程
- ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例

### Proxy 实例的方法

- get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
- set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
- has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
- deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
- ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
- getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
- defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
- preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
- getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
- isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
- setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。

### Proxy.revocable()

- Proxy.revocable方法返回一个可取消的 Proxy 实例。

### this 问题

- 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致

### 实例：Web 服务的客户端

- Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端

## Reflect

### 概述

- Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API
-  将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
- 修改某些Object方法的返回结果，让其变得更合理
- 让Object操作都变成函数行为
- Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法

### 静态方法

- Reflect.apply(target, thisArg, args)
- Reflect.construct(target, args)
- Reflect.get(target, name, receiver)
- Reflect.set(target, name, value, receiver)
- Reflect.defineProperty(target, name, desc)
- Reflect.deleteProperty(target, name)
- Reflect.has(target, name)
- Reflect.ownKeys(target)
- Reflect.isExtensible(target)
- Reflect.preventExtensions(target)
- Reflect.getOwnPropertyDescriptor(target, name)
- Reflect.getPrototypeOf(target)
- Reflect.setPrototypeOf(target, prototype)

### 实例：使用 Proxy 实现观察者模式

- 观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行

## Promise

### Promise 的含义

- Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大
- 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
- 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected

### 基本用法

- ES6 规定，Promise对象是一个构造函数，用来生成Promise实例

### Promise.prototype.then()

- Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的
- 可以采用链式写法，即then方法后面再调用另一个then方法

### Promise.prototype.catch()

- Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
- Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止

### Promise.prototype.finally()

- finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

### Promise.all()

- Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例
- （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
- （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

### Promise.race()

- Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例
- 只要其中之中有一个实例率先改变状态，状态就跟着改变

### Promise.resolve()

- 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用
- 参数是一个 Promise 实例
- 参数是一个thenable对象
- 参数不是具有then方法的对象，或根本就不是对象
- 不带有任何参数

### Promise.reject()

- Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected

### 应用

- 我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化。
- 使用 Generator 函数管理流程，遇到异步操作的时候，通常返回一个Promise对象。

### Promise.try()

- Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码

## Iterator 和 for...of 循环

### Iterator（遍历器）的概念

- 一种统一的接口机制，来处理所有不同的数据结构
- 为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作
- 一是为各种数据结构，提供一个统一的、简便的访问接口；
- 二是使得数据结构的成员能够按某种次序排列；
- 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费

### 默认 Iterator 接口

- Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制，即for...of循环
- 一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”

### 调用 Iterator 接口的场合

- 有一些场合会默认调用 Iterator 接口（即Symbol.iterator方法），除了下文会介绍的for...of循环，还有几个别的场合
- 对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法。
- 扩展运算符（...）也会调用默认的 Iterator 接口。
- yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口
- for...of
- Array.from()
- Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
- Promise.all()
- Promise.race()

### 字符串的 Iterator 接口

- 字符串是一个类似数组的对象，也原生具有 Iterator 接口。

### Iterator 接口与 Generator 函数

- Symbol.iterator方法的最简单实现，还是使用下一章要介绍的 Generator 函数

### 遍历器对象的 return()，throw()

- 遍历器对象除了具有next方法，还可以具有return方法和throw方法
- return方法的使用场合是，如果for...of循环提前退出
- throw方法主要是配合 Generator 函数使用，一般的遍历器对象用不到这个方法

### for...of 循环

- 一个数据结构只要部署了Symbol.iterator属性，就被视为具有 iterator 接口，就可以用for...of循环遍历它的成员
- for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串

## async 函数

### 含义

- async 函数是什么？一句话，它就是 Generator 函数的语法糖
- 一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
- Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器
- async和await，比起星号和yield，语义更清楚了
- co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值
- async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了

### 基本用法

- async函数返回一个 Promise 对象，可以使用then方法添加回调函数
- 由于async函数返回的是 Promise 对象，可以作为await命令的参数

### 语法

- async函数的语法规则总体上比较简单，难点是错误处理机制。
- async函数返回一个 Promise 对象。
- async函数内部return语句返回的值，会成为then方法回调函数的参数
- async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误
- 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象
- 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject
- 如果有多个await命令，可以统一放在try...catch结构中

### async 函数的实现原理

- async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里

## es6函数

### 函数参数的默认值

- 判断函数是否赋值是是否全等于undefined
- 简洁，利于阅读，未来代码优化
- 函数体里不能用let或const再次声明
- 参数不能有同名参数
- 不是传值，而是每次都重新计算默认值表达式的值
- 应该是尾参数，非尾参数设置默认值，是没法省略的，除非显示指定undefined
- 函数length属性会失真，rest和默认值参数，以及默认值之后的参数都将不被计算
- 参数形成一个单独的作用域，不设置默认值是不出现。初始化结束后，作用域消失

### rest参数（...变量名）

- 是一个真实的参数
- rest参数之后不能再有其他参数，否则报错
- 函数的length属性不包括rest参数

### 严格模式

- 使用默认值，解构赋值、扩展运算符的函数内部都不能显示设定为严格模式否则会报错
- 因为先执行函数参数再执行函数体，但是在函数体内才知道是否应该以严格模式执行
- 解决办法

	- 全局使用严格模式
	- 将函数包含在严格模式的无参数立即执行函数里面

### name属性

- (new Function).name // "anonymous"
- bind返回的函数，name属性值会加上bound前缀。

### 箭头函数

- 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
- 不可以当作构造函数，不可以使用new命令，否则会抛出一个错误
- 不可以使用arguments对象，该对象在函数体内不存在，如果要用可以使用rest参数代替
- 不可以使用yield命令，因此箭头函数不能用作Generator函数
- this在箭头函数中是固定的，并不是因为内部有绑定this的机制，实际原因是箭头函数根本没有自己的this
- arguments、super、new.target也不存在箭头函数之中
- 不能用call、apply、bind去改变this 的指向
- 不适用在对象属性中使用箭头函数的this因为对象不构成单独的作用域
- 不适用需要动态this的时候

### 尾调用优化

- 最后一步是调用另一个函数，另个函数不能用到这个函数的变量
- 函数调用会在内存形成一个调用帧，保存调用位置和内部变量等信息，尾调用不需要保留外层函数的调用帧，取代外层函数调用帧，大大节省内存
- 尾调用优化只在严格模式下开启，正常模式下无效
- 因为正常模式下有这两个变量，可以跟踪函数的调用栈。

	- arguments
	- caller

- 正常模式下可以使用蹦床函数实现优化

### Function.prototype.toString()返回代码本身，明确要求返回一模一样的原始代码

### catch命令的参数可以省略

### es2017允许函数最后一个参数有逗号

## Event Loop

### 执行栈

- JavaScript执行时，同步任务会排好队，在主程序上按照顺序执行，排队的地方叫做执行栈

### 任务队列

- JavaScript对异步任务不会停下来等待，而是将其挂起，继续执行执行栈中的同步任务，当异步任务有返回结果（通常是回调函数）时，异步任务会加入与执行栈不一样的队列，即任务队列
- 微任务

	- promise.then
	- process.nextTick

- 宏任务

	- script（整体代码）
	- setTimeout
	- setInterval
	- setImmediate
	- promise中的executor

### Event执行顺序

- 1.主程序
- 2.微任务
- 3.宏任务

### async/await

- 仅仅影响函数内的执行
- await的下一个语句相当与执行promise.then

### promise.then

- 链式调用会被EventLoop中的其他事件插队
- 分别调用不会，会将then中的回调函数push到一个数组后批量执行

## Promise

### Promise

- 什么是Promise

	- Promise 的决议结果可能是拒绝而不是完成
	- Promise 封装了依赖于时间的状态——等待底层值的完成或拒绝

- 具有 then 方法的鸭子类型

	- 在 Promise 系统中就会被误认为是一个 thenable, 这可能会导 致非常难以追踪的 bug
	- 这种 类型检查 (type check)一般用术语 鸭子类型 (duck typing)来表示
	- 对象上有 then(..) 函数，或则他的原型上有 then()函数

- Promise 信任问题

	- 对一个 Promise 调用 then(..) 的时候, 即使这个 Promise 已经决议, 提供给 then(..) 的回调也总会被异步调用
	- 一个 Promise 决议后, 这个 Promise 上所有的通过 then(..) 注册的回调都会在下一个异步时机点上依次被立即调用
	-  两个独立Promise 上链接的回调的相对顺序无法可靠预测
	- 如果 Promise 本身永远不被决议呢，Promise 提供了一个方案：有一个输出信号,防止其永久挂住程序
	- Promise 的定义方式使得它只能被决议一次
	- Promise 至多只能有一个决议值(完成或拒绝)
	- 如果使用多个参数调用 resovle(..) 或者 reject(..) ,第一个参数之 后的所有参数都会被默默忽略
	- 如果拒绝一个 Promise 并给出一个理由，这个值就会被传给拒绝回调
	- 如果在 Promise 的创建过程中或在查看其决议 结果过程中的任何时间点上出现了一个 JavaScript 异常错误
	- 如果向 Promise.resolve(..) 传递一个非 Promise、非 thenable 的立即值,就会得到一个用 这个值填充的 promise
	- Promise这种模式通过可信任的语义把回调作为参数传递，把控制权放在了一个可信任的系统

- 链式流

	- 我们可以把多个 Promise 连接到一起以表示一系列异步 步骤
	- Promise 规范化了异步, 并封装了时间相关值的状态,使得我们能够把它们以这种有用的方式链接到一起
	- 调用Promise的then(..)会自动创建一个新的 Promise 从调用返回
	- 在完成或拒绝处理函数内部,如果返回一个值或抛出一个异常,新返回的(可链接的)

Promise 就相应地决议
	- 如果完成或拒绝处理函数返回一个 值是什么,都会成为当前 then(..)

Promise, 它将会被展开,这样一来,不管它的决议 返回的链接 Promise 的决议值
	- 术语 决议 (resolve)、 完成 (fulfill)和 拒绝 (reject),

- 错误处理

	- try..catch 当然很好, 但是无法跨异步操作工作
	- 模式化的错误处理方式，error-first 回调 风格
	-  Promise 没有采用 流行的 error-first 回调设计风格,而是使用了分离回调(split-callback)风格。
	- Promise 错误处理就是一个“绝望的陷阱”设计，它假定你想要 Promise 状态吞掉所有的错误
	- 浏览器在它被垃圾回收的时候 其中有拒绝,浏览器就能够确保这是一个真正的未捕获错误,进而可以确定应该将其报告 到开发者终端
	- 如果一个 Promise 被拒绝的话,默认情况下会向开发者终端报告这个事实
	- 需要等待一段时间才能使用或查看它的拒绝结果, 调用 defer() , 这样就不会有全局报告出现

- Promise 模式

	- 并行执行   Promise.all([ .. ])
	- 如果这些 promise 中有任何一个被拒绝的话,主 Promise.all([ .. ]) promise 就会立 即被拒绝,并丢弃来自其他所有 promise 的全部结果
	- “第一个跨过终点线的 Promise” ,而抛弃其他 Promise
	- 一旦有任何一个 Promise 决议为完成, 就会完成;一旦有任何一个 Promise 决议为拒绝,它就会拒绝。
	- none([ .. ]) 这个模式类似于 all([ .. ]) ,不过完成和拒绝的情况互换了。所有的 拒绝,即拒绝转化为完成值,反之亦然。
	- any([ .. ]) Promise 都要被 这个模式与 all([ .. ]) 类似,但是会忽略拒绝,所以只需要完成一个而不是全部
	- first([ .. ]) 这个模式类似于与 any([ .. 的任何拒绝和完成。
	- last([ .. ]) 这个模式类似于 first([ .. ]) ,但却是只有最后一个完成胜出
	- 有些时候会需要在一列 Promise 中迭代, 并对所有 Promise 都执行某个任务,并发迭代，map()

- Promise API 概述

	- new Promise(..) 构造器,接受两个参数，reject(..) 就是拒绝这个 promise;但 resolve(..) 既可能完成 promise
	- Promise.resolve(..) 和 Promise.reject(..)
	- then(..) 和 catch(..)

		- then(..) 接受一个或两个参数:第一个用于完成回调,第二个用于拒绝回调
		- catch(..) 只接受一个拒绝回调作为参数,并自动替换默认完成 回调

	- Promise.all([ .. ]) 和 Promise.race([ .. ])

		- 对 Promise.all([ .. ]) 来说,只有传入的所有 promise 都完成,返回 promise 才能完成
		- 对 Promise.race([ .. ]) 来说,只有第一个决议的 promise(完成或拒绝)取胜, 
并且其 决议结果成为返回 promise 的决议。

- Promise 局限性

	-  顺序错误处理

		- 即 Promise 链中的错误很容易被 无意中默默忽略掉
		- 没有把整个链标识为一个个体的实体,这意味着没有外部方法可以用于观 察可能发生的错误

	- 单一值

		- Promise 只能有一个完成值或一个拒绝理由

	- 单决议

		- :Promise 只能被决议一次(完成或拒绝)

	- 惯性

		- 开发者需要刻意的改变编程习惯,因为 Promise 不会从目前的编码方式中自 然而然地衍生出来

	- 无法取消的 Promise

		- 一旦创建了一个 Promise 并为其注册了完成和 / 或拒绝处理函数,如果出现某种情况使得 这个任务悬而未决的话,
你也没有办法从外部停止它的进程

	- Promise 性能

		- Promise 进行的动作要多一些,这自然意味着它也会稍慢一些。

### Promise

- 特点

	- 对象状态不受外界影响，只有异步操作的结果可以决定当前的状态

		- pending
		- fulfilled
		- rejected

	- 状态一旦改变，就不会再变
	- 无法取消Promise，一旦新建就立即执行
	- 如果不设置回调函数，内部抛出的错误无法反应到外部
	- 处于pending时，无法得知目前进展到哪一个阶段了（刚刚开始还是即将完成）

- 含义

	- 是一个对象/容器，保存某个未来才会结束事件的结果

- 基础用法

	- new Promise时，需要传递一个executor执行器，执行器立即执行
	- executor接收两个参数，分别是resolve和reject
	- promise只能从pending到rejected或者从pending到fulfilled
	- promise的状态一旦确认，就不会再改变
	- reject方法的作用，等同于抛出错误

- then

	- 定义在Promise.prototype上
	- 接收两个参数（可以缺省）

		- promise成功的回调
		- promise失败的回调

	- 如果调用then时，promise已经成功，则执行成功的回调函数，并将promise的值作为参数传递进去
	- 如果调用then时，promise已经失败，则执行失败的回调函数，并将promise失败的原因作为参数传递进去
	- 如果promise的状态是pending，则将两个回调函数存放起来，等待状态确定后，再一次将对应的函数执行（发布订阅）
	- promise可以then多次，promise的then返回一个promise 
	- 如果then返回的是一个结果，那么就会把这个结果作为参数传递给下一个then的成功回调函数
	- 如果then中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败回调函数
	- 如果then返回的是一个promise，那么需要等待这个promise执行完，如果promise返回成功则进入下一个then的成功，如果失败，就进入下个个then的失败

- then与catch返回值return不能是promise本身，否则会造成死循环
- catch

	- 定义在Promise.prototype上，用于指定发生错误时的回调函数
	- 如果catch之前的promise抛错错误（包括catch之前的then抛出错误也会被捕获）那么状态就会变为rejected，就会调用catch指定的回调函数，处理这个错误
	- reject方法的作用，等同于抛出错误
	- resolve之后再抛出错误是无效的，因为状态一旦改变，变不会再变
	- Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获位置
	- 一般不在then方法里面定义reject状态的回调函数，而是在then的外面使用catch，这样可以捕获then执行中的错误
	- 如果没有catch方法则promise对象抛出的错误不会传递到外层代码，即不会有任何的反应
	- catch后接then方法，如果没有抛出错误则会跳过catch直接执行then
	- catch方法后还可以调用catch

- finally

	- 定义在Promise.prototype上，无论Promise的状态如何，都会执行（es2018）
	- 不依赖Promise的执行结果，所以不就受任何参数

- Promise.all()

	- 构造函数上的方法，用来将多个Promise的实例，包装成一个新的Promise的实例
	- 接收（一般为数组）一个具有Iterator接口的参数，参数返回成员都是Promise的实例
	- 如果参数不是Promise的实例，则会调用Primise.resolve方法，将参数转为Promise的实例
	- 只有参数实例的状态都变成fulfilled，状态才会变成fulfilled，此时参数的返回值组成一个数组传给实例的回调函数
	- 只要参数实例有一个状态变成rejected，实例状态就会变成rejected，此时第一个被rejected的参数实例的返回值就会传递给实例的回调函数
	- 参数实例中有catch方法且执行了的话，该参数实例会变成resolved，Promise.all()的catch方法也不会被执行

- Promise.race()

	- 参数与Promise.all()一样，如果不是Promise实例则会调用Promise.resolve
	- 只要参数实例之中有一个实例率先改变状态则实例状态就跟着改变，率先改变的参数实例的返回值会传递给实例的回调函数

- Promise.resolve()

	- 将现有对象转为Promise对象
	- 等价于 new Promise（resolve=>resolve('foo')）
	- 参数是一个Promise的实例则不做任何修改，原封不动的返回实例
	- 参数是一个thenable的对象（具有then方法的对象），会将这个对象转为Promise对象，然后立即执行thenable对象的then 方法
	- 参数不是thenable对象或者不是对象，则返回一个新的Promise对象状态为resolved，Promise.reolved方法的参数会同时传给回调函数
	- 不带参数，直接返回一个resolved状态的对象，在本轮事件循环结束时执行

- Promise.reject()

	- 返回一个Promise实例，状态为rejected
	- 参数会原封不动的作为rejected的理由，变成后续方法的参数（不会立即执行thenable对象的then方法）

- Promise.try()

	- 现有的提案还未通过，同步函数同步执行，异步函数异步执行。
	- 也可以使用立即执行函数里面使用async或者Promise实现

## Generator

### Generator

- 概念

	- Generator函数是一个状态机，封装了多个内部状态
	- 返回一个遍历器对象代表函数的内部指针，可以一次遍历Generator函数内部的每个状态
	- function与函数名之间有星号*，内部使用yield表达式
	- yield是暂停执行的标志，next方法可以恢复执行
	- next()方法返回带有value、done属性的对象
	- 将Generator赋值给对象的Symbol.iterator属性，从而使对象具有iterator接口
	- for...of循环可以自动遍历Generator函数运行时生成的iterator对象。
	- 不是构造函数，所以实例对象拿不到this上的属性，函数绑定在对象上面时候可以使用this：F.call(obj)，两个对象统一的实现是F.call(F.prototype)

- yield

	-  遇到yield表达式，暂停执行后面的操作，yield后面的表达式的值作为返回对象的value属性的值
	- 下一次掉用next方法再继续往下执行，直到遇到下一个yield表达式
	- 如果没有yield表达式，就一直运行到函数结束，一直到return
	- 如果没有return则返回对象的value属性值为undefined
	- next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值
	- yield在另一个表达式中必须用圆括号括起来

- throw

	- 每个Generator函数返回的遍历对象都有一个throw方法，可以再函数体外抛出错误，然后再Generator函数体内捕获
	- 可以接受一个参数，会被catch语句接收，建议抛出Error对象的实例
	- 如果Generator函数内部没有部署try...catch那么会被外部的try...catch代码块捕获
	- 如果外部和内部都没有部署try...catch代码块，那么程序会报错，直接中断执行
	- 如果错误要被捕获，generator对象必须至少执行过一次next方法
	- 第一次next方法相当于启动执行generator函数的内部代码
	- throw方法被捕获后，会附带执行下一条的yield表达式，也就是会附带执行一次next方法

- return

	- 可以返回给定的值，并且终结遍历Generator函数
	- 如果函数内部有try...finally代码块，且正在执行try代码块，那么return会推迟到finally代码块执行完再执行
	- return、next、throw都是让Generator函数恢复执行，并且使用不同的语句替换yield表达式

- yield*

	- 用来在一个Generator函数里面执行另一个Generator函数，会自动遍历，如果不带星只会返回遍历器对象
	- 等同于部署了一个for...of循环，会自动遍历有Iterator的对象，比如数组

- 上下文

	- 一般代码运行会产生一个全局上下文环境（context，又称运行环境），包含了当前所有的变量和对象，执行代码是又会在当前上下文环境的上层产生一个运行的上下文，变成当前的上下文，由此形成上下文环境的堆栈，最后产生的上下文环境首先执行完成，退出堆栈，然后在执行完成它下层的上下文，直至所有代码执行完成，堆栈清空
	- 而Generator函数的上下文一旦遇到yield就会暂时退出堆栈，里面的所有变量和对象会冻结在当前状态，等到next是，上下文环境会重新加入调用栈，冻结的变量和对象恢复执行

- 协程

	- 可以并行执行、交换执行权的线程就称为协程
	- 子例程只有当前调用子函数完全执行完毕，才会结束执行父函数
	- Generator函数属于半协程，如果是完全执行的协程，那么任何函数都可以让暂停的协程继续执行
	- 普通线程是抢先式的，优先由运行环境决定，协程式合作式的，执行权由协程自己分配
	- 协程好处就是抛出错误的时候可以找到原始的调用栈。

- 应用

	- 异步操作的同步化表达
	- 状态机
	- 控制流管理
	- 部署Iterator接口
	- 作为数据结构

- 异步应用

	- 传统方法

		- 回调函数
		- 事件监听
		- 发布/订阅

	- 异步

		- 一个任务不连续完成
		- 先执行第一段，然后转而执行其他任务，等做好了准备在回过头执行第二段
		- 回调函数就是将任务的第二段单独写在一个函数里
		- Promise最大问题是代码冗余

	- 协程

		- 异步任务是A协程
		- 协程A开始执行
		- 协程A执行到一半，进入暂停，执行权转移到协程B
		- 一段时间后，协程B交还执行权
		- 协程A恢复执行

	- Thunk函数

		- 是自动执行Generator函数的一种方法
		- 实现传名调用，即参数用到的时候才求值
		- 将多参数函数替换成一个只接受回调函数作为参数的单参数函数

### Generator 函数的异步应用

- 传统方法

	- 回调函数
	- 事件监听
	- 发布/订阅
	- Promise 对象

- 基本概念

	- 所谓"异步"，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段
	- 所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数
	- Promise 对象是一种新的写法，允许将回调函数的嵌套，改成链式调用

- Generator 函数

	- 第一步，协程A开始执行。
	- 第二步，协程A执行到一半，进入暂停，执行权转移到协程B。
	- 第三步，（一段时间后）协程B交还执行权。
	- 第四步，协程A恢复执行。
	- Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）
	- Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因

- Thunk 函数

	- Thunk 函数是自动执行 Generator 函数的一种方法
	- Thunk 函数的定义，它是“传名调用”的一种实现策略，用来替换某个表达式
	- 生产环境的转换器，建议使用 Thunkify 模块

- co 模块

	- co 模块可以让你不用编写 Generator 函数的执行器
	- （1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。
	- （2）Promise 对象。将异步操作包装成 Promise 对象，用then方法交回执行权。

### Generator 函数的语法

- 简介

	- Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同
	- 语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态
	- 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数
	- 一是，function关键字与函数名之间有一个星号
	- 二是，函数体内部使用yield表达式，定义不同的内部状态
	- 总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象

- next 方法的参数

	- yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值
	- 由于next方法的参数表示上一个yield表达式的返回值，所以在第一次使用next方法时，传递参数是无效的
	- 如果想要第一次调用next方法时，就能够输入值，可以在 Generator 函数外面再包一层

- for...of 循环

	- for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法
	- 利用for...of循环，可以写出遍历任意对象（object）的方法

- Generator.prototype.throw()

	- Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获
	- 不要混淆遍历器对象的throw方法和全局的throw命令
	- throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法

- Generator.prototype.return()

	- Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数
	- 如果return方法调用时，不提供参数，则返回值的value属性为undefined
	- Generator 函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行

- next()、throw()、return() 的共同点

	- 它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式
	- next()是将yield表达式替换成一个值。
	- throw()是将yield表达式替换成一个throw语句
	- return()是将yield表达式替换成一个return语句

- yield* 表达式

	- 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的
	- 用到yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数
	- 任何数据结构只要有 Iterator 接口，就可以被yield*遍历

- 作为对象属性的 Generator 函数

	- 属性前面有一个星号，表示这个属性是一个 Generator 函数

- Generator 函数的this

	- Generator 函数也不能跟new命令一起用，会报错
	- 生成一个空对象，使用call方法绑定 Generator 函数内部的this

- 含义

	- Generator 是实现状态机的最佳结构
	- 。Generator 函数被称为“半协程”（semi-coroutine），意思是只有 Generator 函数的调用者，才能将程序的执行权还给 Generator 函数
	- Generator 执行产生的上下文环境，一旦遇到yield命令，就会暂时退出堆栈，但是并不消失，里面的所有变量和对象会冻结在当前状态

- 应用

	- Generator 可以暂停函数执行，返回任意表达式的值

