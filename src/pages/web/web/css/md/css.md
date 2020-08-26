# css                                   
## CSS属性
### 定位
- position
	- static                                                                                                                                               
	  static：
	  对象遵循常规流。此时4个定位偏移属性不会被                                                                                                                                                             应用。
	- relative
	  对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。
	- absolute
	  对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到body元素。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
	- fixed
	  fixed：
	  与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。
	- sticky
	  对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）
- z-index
	- auto
	  元素在当前层叠上下文中的层叠级别是0。元素不会创建新的局部层叠上下文，除非它是根元素。
	- <integer>
	  用整数值来定义堆叠级别。可以为负值。
### 布局
- display
	- none
	  与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间
	- inline
	  内联元素
	- block
	  块元素
	- inline-block
	  内联块元素
	- .......
- float
  none | left | right
  当一个元素是绝对定位元素或者定义了display为none时，float定义不生效。
- clear
  none(默认) | left | right | both
- visibility
  visible(默认) | hidden | collapse
  collapse：
  主要用来隐藏表格的行或列。隐藏的行或列能够被其他内容使用。对于表格外的其他对象，其作用等同于hidden。
  定义了元素是否可见。
  注意：与display属性不同，visibility会为隐藏的元素保留其占据的物理空间
  如果希望某个元素为可见，其父元素也必须是可见的。
- overflow
  visible | hidden | scroll | auto | clip
  适用范围：块容器，伸缩盒容器，grid容器
  visible：
  对溢出内容不做处理，内容可能会超出容器。
  hidden：
  隐藏溢出容器的内容且不出现滚动条。
  scroll：
  隐藏溢出容器的内容，溢出的内容可以通过滚动呈现。
  auto：
  当内容没有溢出容器时不出现滚动条，当内容溢出容器时出现滚动条，按需出现滚动条。textarea元素的overflow默认值就是auto。
  clip：
  与hidden一样，clip也被用来隐藏溢出容器的内容且不出现滚动条。不同的地方在于，clip是一个完全禁止滚动的容器，而hidden仍然可以通过编程机制让内容可以滚动。
  注意：scroll 与 auto 的区别：scroll 无论溢出如否都存在滚动条
### 尺寸与补白
- width
  <length> | <percentage> | auto(默认)
  对于img元素来说，若仅指定此属性，其height值将会根据图片源尺寸进行等比例缩放。
- height
  定义了元素内容区（Content Area）的高度
  对于img元素来说，若仅指定此属性，其width值将会根据图片源尺寸进行等比例缩放。
- padding
  padding：[ <length> | <percentage> ]{1,4}
- margin
  margin折叠常规认知：
  margin折叠只发生在块级元素上；
  浮动元素的margin不与任何margin发生折叠；
  设置了属性overflow且值为非visible的块级元素，将不与它的子元素发生margin折叠；
  绝对定位元素的margin不与任何margin发生折叠；
  根元素的margin不与其它任何margin发生折叠；
### 背景与边框
- border
	- border
	  border：<line-width> || <line-style> || <color>
	- box-shadow
	  语法：
	  box-shadow：none | <shadow> [ , <shadow> ]*
	  <shadow> = inset? && <length>{2,4} && <color>?
	  none：
	  无阴影
	  <length>①：
	  第 1 个长度值定义元素的阴影水平偏移值。正值，阴影出现在元素右侧；负值，则阴影出现在元素左侧
	  <length>②：
	  第 2 个长度值定义元素的阴影垂直偏移值。正值，阴影出现在元素底部；负值，则阴影出现在元素顶部
	  <length>③：
	  第 3 个长度值定义元素的阴影模糊值半径（如果提供了）。该值越大阴影边缘越模糊，若该值为0，阴影边缘不出现模糊。不允许负值
	  <length>④：
	  第 4 个长度值定义元素的阴影外延值（如果提供了）。正值，阴影将向四面扩展；负值，则阴影向里收缩
	  <color>：
	  定义元素阴影的颜色。如果该值未定义，阴影颜色将默认取当前最近的文本颜色
	  inset：
	  定义元素的阴影类型为内阴影。该值为空时，则元素的阴影类型为外阴影
	- border-radius
	  语法：
	  border-radius：[ <length> | <percentage> ]{1,4} [ / [ <length> | <percentage> ]{1,4} ]?
	  border-radius属性提供 2 个参数，参数间以/分隔，每个参数允许设置 1~4 个参数值，第 1 个参数表示水平半径或半轴，第 2 个参数表示垂直半径或半轴，如第 2 个参数值省略未定义，则直接复制第 1 个参数值。
	  注意（对角原则）：水平半径或半轴：如果提供全部四个参数值，将按上左 top-left、上右 top-right、下右 bottom-right、下左 bottom-left的顺序作用于四个角；提供三个，第一个用于top-left，第二个用于top-right和bottom-left，第三个用于bottom-right；提供两个，第一个用于top-left和bottom-right，第二个用于top-right和bottom-left；只提供一个，将用于全部的四个角。
- background
	- background
	- ......
### 颜色与透明度
- color
- opacity
### 字体
- font
- font-style
  font-style：normal | italic | oblique
  normal：
  指定文本字体样式为正常的字体
  italic：
  指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique
  oblique：
  指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字
- font-weight
  font-weight：normal | bold | bolder | lighter | <integer>
  <integer>：
  用数字表示文本字体粗细。取值范围：100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
- font-size
- font-family
  font-family：[ <family-name> | <generic-family> ] #
  <family-name> = arial | georgia | verdana | helvetica | simsun and etc.
  <generic-family> = cursive | fantasy | monospace | serif | sans-serif
### 文本
- line-height
  语法：
  line-height：normal | <length> | <percentage> | <number>
  normal：
  允许内容顶开或溢出指定的容器边界。
  <length>：
  用长度值指定行高。不允许负值。
  <percentage>：
  用百分比指定行高，其百分比基于文本的font-size进行换算。不允许负值。
  <number>：
  用乘积因子指定行高。不允许负值
- text-indent
  语法：
  text-indent：[ <length> | <percentage> ] && hanging? && each-line?
- text-align
  语法：
  text-align：start | end | left | right | center | justify | match-parent | justify-all
- text-transform
  语法：
  text-transform：none | capitalize | uppercase | lowercase | full-width
- text-decoration
  text-decoration：text-decoration-line || text-decoration-style || text-decoration-color
### 变换
- transform
  语法：
  transform：none | <transform-function>+
  transform-function list:
  更多信息请参考：
  http://css.doyoe.com/
## CSS布局
### 页面布局技术细节
- 浮动、定位、CSS表格、弹性盒子、网格
### 布局分类
- 正常流布局
- 浮动float
	- 整列浮动的实现
- 定位技术
	- 静态定位
	- 相对定位(Relative positioning)：允许我们相对元素在正常的文档流中的位置移动它——包括将两个元素叠放在页面上。
		- 这对于微调和精准设计(design pinpointing)非常有用
	- 绝对定位(Absolute positioning)：将元素完全从页面的正常布局流中移出，类似将它单独放在一个图层中. 我们可以将元素相对于页面的 <html> 元素边缘固定，或者相对于离元素最近的被定位的祖先元素(ancestor element)。
		- 绝对定位在创建复杂布局效果时非常有用，例如通过标签显示和隐藏的内容面板或者通过按钮控制滑动到屏幕中的信息面板.
	- 固定定位(Fixed positioning)与绝对定位非常类似，除了它是将一个元素相对浏览器视口固定，而不是相对另外一个元素。 在创建类似页面滚动总是处于页面上方的导航菜单时非常有用。
- CSS表格
- 弹性盒子
- 网格布局Grid
	- 属性
		- display属性
			- grid
			- inline-grid
		- grid-template-columns、grid-template-row属性
			- 定义列宽、行高
			- 关键字
				- repeat
				- auto-fill
				- fr
				- minmax
				- auto
				- 设置网格线名称
			- 实例
				- 两栏布局
					- .wrapper{display: grid; grid-template-columns: 70% 30%}
				- 12栏布局
					- .wrapper{display: grid; grid-template-columns: repeat(12, 1fr)}
		- grid-gap
			- grid-row-gap
			- grid-column-grap
		- grid-template-areas属性
			- 网格允许指定区域，一个区域由一个或者多个单元格组成，属性用于定义
		- grid-auto-flow
			- 定义之元素放置顺序
		- justify-items、align-items属性、place-items属性
		- justify-content、aligin-content、place-content
		- grid-auto-column、grid-auto-rows
		- grid-template属性
	- item属性
		- grid-column-start、grid-column-end、grid-row-start、grid-row-end
		- grid-column属性、grid-row属性
			- grid-column
				- grid-column: 1/4;表示从第一根列线到第四根列线
			- grid-row
		- grid-area属性
			- 根据grid-area-template的定义确定item的位置
			- <row-start>/<column-start>/<row-end>/<column-end>
		- justyfy-self、align-self、place-self
			- 用于设置单个单元格内容的位置
## SASS
### 1.变量的声明和引用
- $符号，变量建议使用中划线链接
### 2.嵌套规则
- 普通嵌套规则
  // before
  #content article h1 { color: #333 }
  #content article p { margin-bottom: 1.4em }
  #content aside { background-color: #EEE }
  // after
  #content {
    article {
      h1 { color: #333 }
      p { margin-bottom: 1.4em }
    }
    aside { background-color: #EEE }
  }
- 父选择器标识符&
- 群组选择器的嵌套
- 子组合选择器和同层组合选择器： >、 +和~
- 嵌套属性
  nav {
    border: {
    style: solid;
    width: 1px;
    color: #ccc;
    }
  }
### 3.导入sass文件
- 导入方法： @import
- 怎样使用sass部分文件
	- 使用下划线开头的“局部文件”
- 默认变量值
	- ！default
	  你希望导入sass库文件的人，可以定制修改sass库文件中的某些字。使用sass的!default标签可以实现。
	  !default: 若这个变量被声明赋值了，就是声明值，否则则使用默认值
- 嵌套导入
	- @import命令写在css规则内
		- .blue-theme {@import "blue-theme"}
- 原生css导入
	- sass兼容css语法，改.css文件名为.scss
### 4.静默注释
- 静默格式/* ....*/，其内容不会出现在生成的css文件中
### 5.混入器
- 如何声明：@mixin; 引用： @include
- mixin可以包含css规则
- mixin传参
	- @mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
	- 设置默认参数：@mixin link-colors(
    $normal,
    $hover: $normal,
    $visited: $normal
  )
{
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
### 6.继承
- @extend继承
## CSS3
###  opicity 和 rgba的区别
- opacity只能设定整个元素的透明值，而alpha通道可以特定对元素的某个属性设定透明值，比如上面的背景、边框、文字等
### transform变形
- transform: rotate(angle); 旋转
	- 如：transform: rotate(9deg)
- transform: translate(length); 平移
	- transform: translate(100px,50px); 水平垂直同时移动
	- transform: translateX(100px); 水平移动
	- transform: translateY(50px); 垂直移动
- transform: scale(number); 缩放
	- transform: scale(2,1.5); 水平垂直同时缩放
	- transform: scaleX(2); 水平缩放
	- transform: scaleY(2); 垂直缩放
- transform: skew(angle); 扭曲
	- transform: skew(30deg,10deg); 水平垂直同时扭曲
	- transform: skewX(30deg); 水平扭曲
	- transform: skewY(30deg); 垂直扭曲
- transform: matrix(<number>,<number>,<number>,<number>,<number>,<number>); 矩阵
- transform-origin(X,Y): length; 改变元素变换基点
### rem单位
- font size of the root element
	- px、em、rem的区别
		- px，像素，相对长度单位，相对于屏幕分辨率
		- em，相对长度单位，相对父节点的字体尺寸，如未设置则相对于浏览器默认字体尺寸
			- 一般浏览器默认值为16px
		- rem仍然是相对长度单位，但只相对于HTML根元素
	- 通过修改根元素就可以成比例地调整所有字体尺寸
	- 设置 html{ font-size: 10px; } 则1rem=10px
### fixed布局
- 任何一个容器都可以指定为Flex布局 display: flex;
- 行内元素也可以指定为Flex布局 display: inline-flex;
- 设置为flex布局后子元素的float、clear、vertical-align属性将失效
- 采用flex布局的元素称为flex container，简称容器，它的所有子元素自动成为容器成员，称为flex item，简称项目
	- 容器默认存在两根轴
		- 水平的主轴（main axis），开始位置为main start，结束位置为main end
		- 垂直的主轴（cross axis），开始位置为cross start，结束位置为cross end
		- 项目默认按主轴排列
		- 单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size
	- 可以在容器上设置6种属性
		- flex-direction
			- flex-direction决定主轴的方向（即项目的排列方向）
				- flex-direction: row; 默认值，主轴水平方向，以左端为起点
				- flex-direction: row-reverse;  主轴水平方向，以右端为起点
				- flex-direction: column; 主轴垂直方向，以左端为起点
				- flex-direction: column-reverse; 主轴垂直方向，以右端为起点
		- flex-wrap
			- flex-wrap定义如何换行
				- flex-wrap: nowrap; 默认值，不许换行
				- flex-wrap: wrap; 换行，第一排在上方
				- flex-wrap: wrap-reverse; 换行，第一排在下方
		- flex-flow
			- flex-direction和flex-wrap的缩写
				- flex-flow:<flex-direction> <flex-wrap>; 如flex-flow: row-reverse nowrap; 
		- justify-content
			- justify-content定义在主轴上的对齐方式
				- justify-content: flex-start; 默认值，左对齐
				- justify-content: flex-end; 右对齐
				- justify-content: center; 居中
				- justify-content: space-between; 两端对齐
				- justify-content: space-around; 项目之间间隔相等
		- align-items
			- align-items定义在交叉轴上的对齐方式
				- align-items: flex-start; 交叉轴起点对齐
				- align-items: flex-end; 交叉轴终点对齐
				- align-items: center; 交叉轴中点对齐
				- align-items: baseline; 第一行文字的基线对齐
				- align-items: stretch; 默认值，若项目未设置高度或为auto，将占满整个容器高度
		- align-content
			- align-content定义多根轴的对齐方式
				- flex-start、flex-end、center、space-between、space-around、stretch（默认值）
	- 可以在项目上设置6种属性
		- order
			- order定义项目的排列顺序
				- order: <integer>; 数值越小排列越靠前，默认值0
		- flex-grow
			- flex-grow定义项目的放大比例
				- flex-grow: <number>; 默认为0
		- flex-shrink
			- flex-shrink定义项目的缩小比例
				- flex-shrink: <number>; 默认为1，负值无效
		- flex-basis
			- flex-basis定义在分配空余空间之前项目占据的主轴空间
				- flex-basis: <length>; ，默认值为auto
		- flex
			- flex-grow、flex-shrink和flex-basis的缩写
				- flex: <flex-grow> <flex-shrink> <flex-basis>; 建议优先使用这个属性
		- align-self
			- align-self允许单个项目拥有与其他项目不同的对齐方式，可覆盖align-items
				- 可取6个值，除了默认值auto都与align-items相同
### animate动画
- animate是一个简写属性，用于设置6大动画属性
	- animate-name 规定@keyframes动画名称
		- animate-name: keyframename; 动画名称
		- animate-name: none; 无动画效果，可用于覆盖来自级联的动画
	- animate-duration: time; 一个动画周期持续的时间，默认值为0
	- animation-timing-function 速度曲线
		- ease，默认值，以低速开始加速，结束前变慢
		- ease-in，以低速开始
		- ease-out，以低速结束
		- ease-in-out，以低速开始结束
		- linear，整个过程速度不变
		- cubic-bezier(n,n,n)，以cubic bezier函数来生成一个速度函数，可能的值是1到0
	- animation-delay:time; 何时开始，允许负值
	- animation-iteration-count播放次数
		- n，播放次数，默认值1
		- infinite，无限次播放
	- animation-direction规定动画在下一周期是否逆向播放
		- normal，默认值，正常播放
		- alternate，轮流反向播放
- animation-play-state规定动画正在运行还是暂停
	- paused，已暂停
	- running，正在播放
- @keyframes规则创建动画
	- @keyframes keyframename{ keyframes-selector{css-styles;}} 
		- 如：@keyframes myfirstmove{ 0%{ top:0px; background:red; } 100%{ top:100px; background:yellow; }}
- animation-fill-mode规定动画在播放之前或之后，其动画效果是否可见
	- none，不改变默认行为
	- forwards当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）
	- backwards在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）
### transition过渡
- transition是一个简写属性，用于设置4个过渡属性
	- transition-property: width; 用于设置产生变形的CSS属性
	- transition-duration: time; 用于设置过渡时间，是必须设置的，否则不会产生过渡效果
	- transition-timing-function类似于animate-timing-function
	- transition-delay: time; 效果开始前需要等待的时间
### media queries
- 工作方式
	- 直接在link中判断设备尺寸然后引用不同的css文件
	- link rel="stylesheet" type="text/css" href="#" media="screen and (min-width:400px ) and (max-width:600px)"
	- 直接写在style标签里
	- @media screen and (max-width:600px){ } 
- media属性中
	- 十种media type：all、screen、print、tv、handheld等
	- 关键字：and、only（限定某种媒体）、not（排除某种媒体）
	- 媒体特性，放在一对（）中，如(min-width:600px)
## 盒模型
### 标准盒模型
- 元素的width、height只包含内容content，不包含border和padding的值；
- 盒子的大小由元素的宽高、边框和内边距决定
### 转换
- box-sizing
	- content-box
	- border-box
		- 若想控制元素总宽高保持固定，这个设置很有用。
### IE盒模型
- 元素的width、height不仅包括content，还包括border和padding
- 盒子的大小取决width、height，修改border和padding值不能改变盒子的大小
### 注意
- 元素的宽（width）、高（height）、边框（border）、内边距（padding）、外边距（margin）都是盒子模型的重要组成部分，但是盒子模型的大小只与元素的宽高、边框、内间距有关，外边距只影响盒子所占外围空间的大小。
## 雪碧图优缺点
### 减少图片请求次数
### 提高页面加载速度
- 合成的图片相比不合成图片大小综合要小
### 影响浏览器缩放功能
- 相邻图片会被露出来
- 大图片会有性能下降问题
### css编写困难
### 拼图维护麻烦
### css图片不能被打印
- 除非在@media添加print声明
### 最大问题就是内存的使用
- 图片留有无用的空白
## 元素居中方法汇总
### 水平居中
- 文本、图片
	- 容器中设置：text-align:center
- 块级元素
	- ( 如果宽度固定)margin: auto法------margin: 0 auto （对浮动及绝对定位元素无效,另：这里的0 其实可以是任意值）
	- （如果宽度不固定）新增包裹元素法----设置包裹元素为浮动float:left;position:relative;left:50%,再设置其自身position:relative;left:-50% 或right:50%即可（该50%其实是相对包裹元素的宽度而并非其自身的宽度！另外该方法不适合垂直居中！！！除非高度固定才可以。）
	- 父元素相对定位，子元素绝对定位法（详见《垂直居中》中的块级元素部分）
	- （对于多个块级元素） inline-block法 ：其父元素设置text-align:center,其自身设置display:inline-block，使用inline-block注意清除由其带来的空隙及使用 vertical-align属性！
### 垂直居中（或水平垂直居中）
- 单行文本
	- （如果父元素高度固定）line-height法------父元素的height与父元素的line-height相等
	- （如果父元素高度不固定）上下padding法------父元素的上下padding相等
- 多行文本
	- （如果父元素高度固定）vertical-align法------父元素设置display:table-cell;vertical-align:middle
	- （如果父元素高度不固定）上下padding法------父元素的上下padding相等
- 块级元素
	- 如果尺寸固定
		- 负margin法------父元素设置position为relative，子元素position为absolute，top,left为：50%，margin-left,margin-top各为其自身宽或高的一半的负数。
		- calc法------同上，父元素设置position为relative，子元素position为absolute，top,left为：50%，采用calc（50%-其自身宽或高的一半）
		- transform法------同上，父元素设置position为relative，子元素position为absolute，top,left为：50%，并使用 transform: translate(-50%, -50%);
		- 4个0法------ 还是父元素设置position为relative，子元素position为absolute，其它见上面的代码
	- 如果尺寸不固定
		- transform法------父元素设置position为relative，子元素position为absolute，top,left为：50%，并使用 transform: translate(-50%, -50%);
		- display:table-cell法------ 父元素 display:table-cell; vertical-align:middle
		- flex法------父元素align-items:center;justify-content:center
		- 伪类法------在父元素中增加一个高度为100%的空元素，其他详见代码
- 图片
	- display:table-cell法------display:table-cell;             vertical-align:middle
	- 伪类法------在父元素中增加一个高度为100%的空元素，其他详见代码
	- js处理设置上下边距相等
## 网格布局
### CSS网格属性总结
- 网格容器（父元素）
	- display
		- grid
		- inline-grid
		- subgrid（行列大小会继承父级网格容器）
	- grid-template-columns、grid-template-rows
		- 网格线名称
		- 长度值、百分比或者fr
	- grid-template-areas
		- grid-area-name
		- . （点号） 代表一个空的网格单位
		- none 不定义网格区域
	- grid-template
		- none：将三个属性设为初始值
		- subgrid：将grid-template-columns及grid-template-rows的值设为subgrid，将grid-template-areas设为初始值
		- <grid-template-rows> / <grid-template-columns>将grid-template-rows和grid-template-columns设置为相应的值，并将grid-template-areas设为none
	- grid-column-gap/grid-row-gap
		- 长度值
	- grid-gap
		- <grid-row-gap> <grid-column-gap>长度值
	- justify-items（注意与justify-content的区别）
		- start
		- end
		- center
		- stretch
	- align-items
		- start
		- end
		- center
		- stretch
	- justify-content( 注意与flex中的justify-content区别，这里不是表示里面的内容 )
		- start
		- end
		- center
		- stretch
		- space-between
		- space-around
		- space-evenly
	- align-content
		- start
		- end
		- center
		- stretch
		- space-between
		- space-around
		- space-evenly
	- grid-auto-columns / grid-auto-rows
		- 长度值/百分比/fr
	- grid-auto-flow
		- row
		- column
		- row dense
		- column dense
	- grid
		- none
			- 将所有子属性设置为其初始值
		- <grid-template-rows> / <grid-template-columns>
			- 将grid-template-rows 和 grid-template-columns分别设置为指定值，将其他子属性设置为其初始值
				- 例子（上下两个是等效的）
		- <grid-auto-flow> [<grid-auto-rows> [ / <grid-auto-columns>] ] 
			- 如果省略了grid-auto-columns，则它被设置为由grid-auto-rows指定的值。如果两个都被省略，他们会被设置为初始值
				- 例子（上下两个是等效的）
		-  <grid-template-areas> <grid-template-rows> / <grid-template-columns>
			- 一次性设置所有值，设置后其他属性均为默认值
				- 例子
- 网格项（子元素）
	- grid-column-start / grid-column-end / grid-row-start / grid-row-end
		- 网格线名称
		- span <number> 该网格项将跨越所提供的网格轨道数量
		- span <name> 该网格项将跨越到它所提供的名称位置
		- auto：表示自动放置，自动跨度，默认会扩展一个网格轨道的宽度或高度
	- grid-column / grid-row
		- <start-line> / <end-line>
			- 含义
				- grid-column-start + grid-column-end 和 grid-row-start + grid-row-end的简写
			- 语法示范
				- 示范
			- 举例
				- 例子
	- grid-area
		- <name> ：自定义的名称，以便被grid-template-areas属性创建的模版所引用
		- <row-start> / <column-start> / <row-end> / <column-end>：数字或网格线名称（其实这里还有 比如  grid-row-start:1 ; grid-column-start:2等价的表达 ）
	- justify-self
		- start
		- end
		- center
		- stretch（默认值）
	- align-self
		- start
		- end
		- center
		- stretch（默认值）
### CSS网格布局基本概念（mdn版）
- 网格容器
	- （父元素）使用 display:grid 或者display:inline-grid
- 网格轨道
	- （父元素）使用 grid-template-columns 和grid-template-rows属性来定义列和行
	- 单位：px或者百分比或者fr 如：grid-template-rows:1fr 1fr 1fr
	- 在轨道清单中使用repeat()来标记重复部分或者整个轨道列表
		- grid-template-rows:1fr 1fr 1fr 可以改写为grid-template-rows: repeat( 3, 1fr )
		- grid-template-rows: 20px 1fr 1fr 20px 可以改写为grid-template-rows:  20px  repeat( 2, 1fr ) 20px
		- 传入轨道列表 ：grid-template-rows: 1fr 2fr  1fr 2fr 1fr 2fr  可以改写为grid-template-rows:  repeat( 3, 1fr 2fr ) 
	- （父元素）隐式和显式网格
		- grid-auto-rows （行  其实它控制的是元素的高度 --别搞混淆了）
		- grid-auto-columns （列 其实它控制的是元素的宽度--别搞混淆了）
	- 轨道大小和minmax()
		- grid-auto-rows :minmax(100px, auto) （其表示最小高度是100px，最大高度自适应）
- 网格线
	- （子元素）跨轨道放置网格项目
		- grid-column-start , grid-column-end , grid-row-start ,grid-row-end
		- 比如  列线1-列线4，行线1至行线2  我们可以写成： grid-column-start:1 ; grid-column-end:4 ; grid-row-start:1 ;grid-row-end:2; 或者直接简写成 grid-column: 1/4 ;grid-row:1/2;
- 网格单元
	- 最小单位
- 网格区域
	-   （父元素） grid-template-areas
	- （子元素）grid-areas
- 网格间距
	- （父元素）grid-column-gap、grid-row-gap 或者合并简写：grid-gap
- 嵌套网格
- 使用z-index控制层级
	- 原本覆盖的顺序遵循文档流的原始顺序原则即： 后来者居上的原则
## Css2D-3D
### 1.过渡效果transition
- 说明：过渡是从一种状态到另外一种状态, 过渡需要触发条件, 通常过渡都是写在开始状态
- transition-property
	- 规定哪些属性需要过渡
all 默认值 全部属性过渡，多个属性过渡,用逗号隔开
- transition-duration
	- 过渡的时间 默认值 0s
- transition-timing-function
	- 过渡的运动曲线
ease 默认值 逐渐慢下来
linear  均速
- transition-delay
	- 过渡的延迟
- 连写：transition: all 1s linear 0s
### 2.2D转换
- 1.位移 transform：translate(-50%,-50%)
	- 优点：对自盒子不用计算向上和向左移动多少
	- 特点：若仅仅只是识位移，盒子不会脱标，盒子原有的位置还在标准流中
- 2.旋转 transform：rotate(45deg)
	- 正=>顺时针
	- 负=>逆时针
- 3.旋转点 transform-origin：水平 垂直
	- 可以设置方位名称，也可以设置具体数值
- 3.缩放/扩大 transform：scale（number，number）
	- 1.大于0小于1=>缩放
	- 2.大于1=>扩大
### 3.动画
- 1.定义动画 @keyframs 名称 {
	0%{
    }，
	100%{
    }
}
- 2.指定动画名称 animation-name
- 3.完成一个周期所需要的时间 animation-duration
- 4.动画的运动曲线 linear匀速 ease缓冲 steps步长  animation-timing-function: linear
- 5.次数 infinite无线循环 animation-iteration-count:infinite
- 6.是否你想播放，如果想逆向播放的前提是 次数需要大于2次  animation-direction:alternate
- 7.结束之后的状态 在哪里 animation-fill-mode: forwards
- 8.延迟几秒开始 animation-delay: 3s
- 9.暂停 animation-play-state: paused
### 4.3D转换
- 1.位移：transform：translate(x,y,z)
	- 1.x轴 正值向右，负值向左
	- 2.y轴 正值向下，负值向上
	- 3.z轴 正值向前，负值向后 
	- 注意：如果要设置多个轴时，不要分开设置，要写在同一个transform中
- 2.旋转
	- transform：- transform: rotateX(角度); 
    - transform: rotateY(角度); 
    - transform: rotateZ(角度); 
- 注意：
	- 1.视距越大，物体越小，*视距越小，物体越大
	- 2.translateZ值越大，物体越大，translateZ越小，物体越小
	- 3.translateZ一定要与perspective 一起使用，近大远小
	- 4.左手法则
		- 1.X正值=>右
		- 2.Y正值=>下
## 移动端
### 移动端（流式）布局
- 1.移动端相关知识
	- 1.什么是物理像素
		- 答：屏幕分辨率
	- 2.什么是开发像素
		- 答：css像素px 就是开发像素
	- 3.开发像素在PC端和屏幕分辨率比例是一致吗？
		- 答：一致
	- 4.开发像素在移动端和屏幕分辨率比例一致吗？
		- 答：不一定一致，因为物理像素比可能不一样
	- 5.什么是物理像素比？
		- 答：1个物理像素=多个开发像素
	- 6，物理像素比的影响
		- 答：未来图片在移动端，因为物理像素比的存在，图片可能会放大而失真，影响用户体验，所以设计素材人员，在设计图片时，以多倍的方式设置
- 2.盒子模型 box-sizing
	- 1.传统盒子（content-box）
		- 盒子大小：内容+padding+border
			- 缺点：盒子要是保持原来的大小，需要自己计算width 和 height
	- 2.CSS3盒子（border-box）
		- 盒子大小：内容（内容+padding+border）
			- 优点：盒子的内容会自动适应模型的变化
- 3.扩展（H5新增标签）
	- 1.header 头部标签
	- 2.footer 底部标签
	- 3.section 区块标签
	- 4.article 文本内容标签
	- 5.aside 侧边标签
	- 6.nav 导航标签
	- 注意：以上标签均可用div代替，但是div没有语义
- 4.京东移动端案例：（注意事项）
	- 1.视口配置-理想视口（记得要写，写在字符编码下方即可）
		-  <meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	- 2.初始化样式
		- normalize.css
### 移动端flex（弹性）布局
- 1.设置主轴方向（flex-direction）
	- 1.row水平
	- 2.column垂直
	- 3.row-reverse 反向/column-reverse 反向
- 2.设置主轴上子元素的排列方式（justify-content）
	- 1.flex-start 从头开始
	- 2.flex-end 从尾部开始
	- 3.center 居中
	- 4.space-around 平分间距
	- 5.space-between 两端对齐中间自动填充
- 3.设置子元素是否换行（flex-wrap）
	- 1.nowrap 不换行（默认）
	- 2.wrap 换行
- 4.设置侧轴上的子元素排列方式（单行 ）（aligin-items）
	- 1.flex-start 从上到下
	- 2.flex-end 从下到上
	- 3.center 居中
	- 4.stretch 拉伸（不能设置高度）
- 5.设置侧轴上的子元素的排列方式（多行）（align-content）
	- 1.flex-start （默认值在侧轴的头部开始）
	- 2.flex -end （在侧轴的尾部开始排列）
	- 3.center （在侧轴中间显示）
	- 4.space-around （子项在侧轴平分剩余部分）
	- 5.space-between 子项在侧轴先分布在两头，在平分剩余空间
	- 6.stretch 设置子项元素高度平分父元素高度
- 6.flex属性 
	- 1.flex 属性定义子项目==分配容器的剩余空间==，用flex来表示占多少==份数==。
	- 2.align-self 控制子项自己在侧轴上的排列方式
	- 3.order 属性定义项目的排列顺序/数值越小，排列越靠前，默认为0。
### 移动端（rem布局）
- 1.单位
	- 1.em
		- 基于父亲的字体的大小
	- 2.rem
		- 基于Html 字体的大小（绝对唯一控制）
- 2.媒体查询
	- 作用：查询屏幕，相应屏幕变化
	- 档位划分 例：@media screen and （min-width）
	- 等比：在各个挡位下，比例一直不变，变化的是rem后面的值
- 3.less
	- 是一种css的扩展语言，辅助css计算使用
- 4.flexible.js
	- 引入此js 可以实现等比变化，不会一抽一抽的
### 响应式布局（PC，手机，pad）
- 1.档位划分
	- w<768  超小屏幕（xs : extra small）
	- 768<= w <992  小屏设备
	- 992<= w <1200  中等屏幕
	- 1200<=w  大宽屏设备（lg: large）
- 2.bootstrap
	- 1.栅格系统
		- 1.在各个档位下，控制子元素布局不同；将版心宽度均分为  12份
	- 2.特点
		- 1.盒子有左右15padding
		- 2.盒子 col-lg：有左右15padding
		- 3.去除15padding：加div.row （左右负 -15px margin 值）
	- 3.作用：左右偏移，居中
- 3.备注
	- 1.向下：涉及向下布局，需要手动写媒体查询
	- 2.只要涉及隐藏，就要用到响应式工具  
		- 例如：hidden-xs 只是xs时隐藏
		- 例如：visible-xs  知识xs时显示
## BFC
### 触发BFC（一个新的BFC可以通过给容器添加任何一个触发BFC的CSS样式来创建）
- float的值不为none
- position的值不为static或者relative
	- 关于position定位
		- static定位
			- 　static定位是HTML元素的默认值，即没有定位，元素出现在正常的流中
		- fixed固定定位
			- fixed定位是指元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会滚动，且fixed定位使元素的位置与文档流无关，因此不占据空间，且它会和其他元素发生重叠。
			- 兼容性
		- relative相对定位
			- 相对定位元素的定位是相对它自己的正常位置的定位。
			- 即使相对元素的内容移动了，但是预留空间的元素仍然保存在正常流动
		- absolute绝对定位
			- 绝对定位的元素相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>。
		- sticky粘性定位
			- 粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。
			- 实例
				- 在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。
			- 实现条件
				- 须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
- display的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex中的其中一个
- overflow的值不为visible
### BFC的约束规则
- 1，BFC内元素垂直方向的边距会发生重叠（当兄弟元素的外边距不一样时，将以最大的那个外边距为准。）
- 2，BFC的区域不会与浮动元素的BOX重叠（清除浮动）
- 3，BFC在页面上是一个容器，外面的元素不会影响到里面的元素
- 4，计算BFC元素高度时，即使是浮动元素也会参与计算
- 5，每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
### BFC应用
- 使用BFC来防止外边距折叠
	- 毗邻块盒子的垂直外边距折叠只有他们是在同一BFC时才会发生。如果他们属于不同的BFC，他们之间的外边距将不会折叠。所以通过创建一个新的BFC我们可以防止外边距折叠。
- 使用BFC来包含浮动
	- 很多时候我们会碰到这种情况，一个容器里有浮动元素。由于这个原因，容器元素没有高度，它的浮动孩子将会脱离页面的常规流。我们通常使用清除浮动来解决这个问题，最受欢迎的方法是使用一个clearfix的伪类元素。但我们同样可以通过定义一个BFC来达到这个目的。
- 使用BFC来防止文字环绕
	- 给p标签创建BFC即可
- 在多列布局中使用BFC
	- 如果我们正在创建的一个多列布局占满了整个容器的宽度，在某些浏览器中最后一列有时候将会被挤到下一行。会发生这样可能是因为浏览器舍入（取整）了列的宽度使得总和的宽度超过了容器的宽度。然而，如果我们在一个列的布局中建立了一个新的BFC，它将会在前一列填充完之后的后面占据所剩余的空间。
## CSS3新特性
### 文字阴影（text-shadow）
### 边框
- 圆角（border-radius）
	- 是一个简写属性，用于设置四个 border-*-radius 属性。
- 边框阴影： box-shadow
	- box-shadow: 水平阴影的位置 垂直阴影的位置 模糊距离 阴影的尺寸 阴影的颜色 内嵌;
### 盒子模型（box-sizing）
### 渐变：linear-gradient、radial-gradient
### 过渡：transition，可实现动画
### 自定义动画
### 在CSS3中唯一引入的伪元素是 ：selection.
- ::selection 选择器匹配被用户选取的选取是部分。
- 只能向 ::selection 选择器应用少量 CSS 属性：color、background、cursor 以及 outline。
### 媒体查询
### 2D转换：transform：translate(x，y) rotate(x，y) skew(x，y) scale(x，y)
### 3D转换
### 新增的伪类
- p:first-of-type 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
- p:last-of-type 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
- p:only-of-type 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
- p:only-child 选择属于其父元素的唯一子元素的每个 <p> 元素。 p:nth-child(2) 选择属于其父元素的第二个子元素的每个 <p> 元素。 :enabled、:disabled 控制表单控件的禁用状态。
- :checked，单选框或复选框被选中。html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？
## 【CSS】内联块元素与<IMG>标签
### display：inline
- 特点
	- (1)、和其他元素都在一行上；
	- (2)、元素的高度、宽度、行高及顶部和底部边距不可设置；（仅可设置左右边距）
	- (3)、元素的宽度就是它包含的文字或图片的宽度，不可改变。
- 示例
### display：block
- 特点
	- (1)、每个块级元素都从新的一行开始，并且其后的元素也另起一行。（一个块级元素独占一行）;
	- (2)、元素的高度、宽度、行高以及顶和底边距都可设置;
	- (3)、元素宽度在不设置的情况下，是它本身父容器的100%（和父元素的宽度一致），除非设定一个宽度。
- 示例
### display：inline-block
- 特点
	- (1)、和其他元素都在一行上；
	- (2)、元素的高度、宽度、行高以及顶和底边距都可设置
- 示例
### 额外
- （1）<img>元素是内联还是块级元素？
	- img属于行内替换元素。height/width/padding/margin均可用。效果等于块元素。（等同于inline-block）
	- 行内非替换元素，例如, height/width/padding top、bottom/margin top、bottom均无效果。只能用padding left、right和padding left、right改变宽度。
- （2）插入img下面会有空白
	- 现象
	- 解决
		- 1、给图片img标签display:block
		- 2、定义图片img标签vertical-align:bottom，vertical-align:middle，vertical-align:top。
		- 3、定义容器里的字体大小font-size为0。
	- 原理：img元素底部为何有空白？
		- 要理解CSS对于 display: inline 元素的 vertical-align 各个值的含义。vertical-align 的默认值是 baseline，这是一个西文排版才有的概念
		- 对比一下 vertical-align 的另外两个常见值，top 和 bottom
			- 可以看到，baseline 和 bottom 之间有一定的距离。实际上，inline 的图片下面那一道空白正是 baseline 和 bottom 之间的这段距离。即使只有图片没有文字，只要是 inline 的图片这段空白都会存在。
		- 到这里就比较明显了，要去掉这段空白，最直接的办法是将图片的 vertical-align 设置为其他值。如果在同一行里有文字混排的话，那应该是用 bottom 或是 middle 比较好。
		- 另外，top 和 bottom 之间的值即为 line-height。假如把 line-height 设置为0，那么 baseline 与 bottom 之间的距离也变为0，那道空白也就不见了。如果没有设置 line-height，line-height 的默认值是基于 font-size 的，视渲染引擎有所不同，但一般是乘以一个系数（比如1.2）。因此，在没有设置 line-height 的情况下把 font-size 设为0也可以达到同样的效果。当然，这样做的后果就是不能图文混排了。
## Flex布局总结
### Flex之前
### 一种新的布局方式
- 1.块级布局侧重垂直方向、行内布局侧重水平方向，flex布局是与方向无关的
- 2.flex布局可以实现空间自动分配、自动对齐
- 3.flex适用于简单的线性布局，更复杂的布局要交给grid布局
### 基本概念
- flex container 的属性(父元素)
	- flex-direction	方向
		- row	按行排列
		- row-revervse	  按行反向排列
		- column	按列排列
		- column-revervse 按列反向排列
	- flex-wrap	换行
		- wrap	折行
		- nowrap	不折行
	- flex-flow	上面两个的简写
	- justify-content	主轴方向对齐方式
		- space-between 多余空间放置中间
		- space-around  空间放置周围
		- flex-start  全部向起点靠拢
		- flex-end  全部向终点靠拢
		- center  全部往中间靠拢
	- align-items	侧轴对齐方式
		- stretch  在子元素高度不写死的情况下，按最高元素高度对齐
		- flex-start  所有元素按照顶部水平线对齐
		- flex-end  所有元素按照其底部水平线对齐
		- center  所有元素按照中间水平线对齐
		- baseline  项目的第一行文字的基线对齐。（较少使用）
	- align-content	多行/列内容对齐方式（用的较少）
		- space-between  行与行之间的空隙平均分配
		- space-around  空间放置两边
		- flex-start  全部向侧轴起点靠拢
		- flex-end  全部向侧轴终点靠拢
		- stretch（默认值）  轴线占满整个侧轴
- flex item的属性（子元素）
	- flex-grow  增长比例（空间过多时）
	- flex-shrink  收缩比例（空间不够时）
	- flex-basis  默认大小时（一般不用）
	- flex  以上三个的缩写
	- order  顺序（代替双飞翼）
	- align-self  自身的对齐方式
### 使用Flex布局
- 1.手机页面布局（tapbar+main+tabs）
- 2.产品列表（ul>li*9）
- 3.PC页面居中
- 4.完美居中
## CSS中的百分数都是相对于谁
### （1）第一类——定位类
- absolute
	- left、right是相对于参照物的width，top和bottom是相对于参照物的height
- relative
	- left、right是相对于父元素的width，top和bottom是相对于参照物的height
- fixed
	- 它是相对于视窗定位的，那么自然%的参照物便是视窗了。
### （2）第二类——盒子模型
- margin&padding
	- 如果设置了%值，那么他们参照的是父元素的宽度
- border-radius
	- 盒子自身的宽高
### （3）第三类——背景值
- background-size
	- 盒子自身的宽高：background-size:100% 100%;
- background-position
	- 这个属性比较特殊，他不是参照原盒子的宽高值，而是原盒子的宽高值减去背景图片的宽高值所得到的剩余值，更为形象的说，下面这两个属性值是等价的："center center"和"50% 50%"，如果你设置了后者，背景图片会自动居中，不用像定位那样还需要transform偏移了。
### （4）第四类——transform
- translate3d()
	- 这个属性的含义就是在指定方向上进行2d偏移，它的参照物是自身的宽高。而transform3d()的第三个属性，指的是在z轴上的偏移，因为z-index的默认值是auto，所以%值并不能起作用，也就是说对translateZ()赋予百分比的值是无意义的。
### （5）第五类——字体
- font-size
	- 和height一样，是参照父盒子的字体大小的
- line-height
	- 是给定的百分比值乘以元素最后计算出的字体大小
- text-indent
	- 参照的是父元素的width
### 总结
- 相对于父盒子：
	- 参照父元素对应属性的有：width、height、font-size
	- 参照父元素的width的有：padding、margin、text-indent
	- 【特殊】position：relativeleft、right是相对于父元素的width，top和bottom是相对于参照物的height
- 相对于盒子自身：
	- 盒子模型中的border-radius；
	- 背景中的background-size；
	- 在transform变换中，translate()、transform-origin、scale()还有我们拓展的与transform相似的zoom属性，他们都是参照自身的；
	- line-height行高与它的字体大小有关，所以参照的就是自身的font-size。
- 相对于定位元素：
	- position：absolute、position：fixed;
## 【css选择器】css选择器与优先级
### 选择器
- 基本选择器
	- *	 通配选择器 	选择文档中所以HTML元素
	- E	 元素选择器	选择指定类型的HTML元素
	- #id	 ID选择器	选择指定ID属性值为“id”的任意类型元素
	- .class	 类选择器	选择指定class属性值为“class”的任意类型的任意多个元素
	-  div,span,img {color:Red}      群组选择器     即具有相同样式的标签分组显示
- 层次选择器
	- E  F	后代选择器	选择匹配的F元素，且匹配的F元素被包含在匹配的E元素内
	- E>F	子选择器	选择匹配的F元素，且匹配的F元素所匹配的E元素的子元素
	- E+F	相邻兄弟选择器	选择匹配的F元素，且匹配的F元素紧位于匹配的E元素的后面
	- E~F	通用选择器	选择匹配的F元素，且位于匹配的E元素后的所有匹配的F元素
- 动态伪类选择器
	- E:link	    链接伪类选择器  选择匹配的E元素，而且匹配元素被定义了超链接并未被访问过。常用于链接描点上
	- E:visited   链接伪类选择器  选择匹配的E元素，而且匹配元素被定义了超链接并已被访问过。常用于链接描点上
	- E:active   选择匹配的E元素，且匹配元素被激活。常用于链接描点和按钮上
	- E:hover	  选择匹配的E元素，且用户鼠标停留在元素E上。IE6及以下浏览器仅支持a:hover
	- E:focus    选择匹配的E元素，而且匹配元素获取焦点
- 目标伪类选择器
	- E:target	选择匹配E的所有元素，且匹配元素被相关URL指向
- 元素状态伪类选择器
	- E:checked	选中状态伪类选择器	匹配选中的复选按钮或者单选按钮表单元素
	- E:enabled	启用状态伪类选择器	匹配所有启用的表单元素
	- E:disabled	不可用状态伪类选择器	匹配所有禁用的表单元素
- 结构伪类选择器
	- E:fisrt-child	作为父元素的第一个子元素的元素E。与E:nth-child(1)等同
	- E:last-child	作为父元素的最后一个子元素的元素E。与E:nth-last-child(1)等同
	- E:root	选择匹配元素E所在文档的根元素。在HTML文档中，根元素始终是html，此时该选择器与html类型选择器匹配的内容相同
	- E F:nth-child(n)	选择父元素E的第n个子元素F。其中n可以是整数（1，2，3）、关键字（even，odd）、可以是公式（2n+1）,而且n值起始值为1，而不是0.
	- E F:nth-last-child(n)	选择父元素E的倒数第n个子元素F。此选择器与E:nth-child(n)选择器计算顺序刚好相反，但使用方法都是一样的，其中：nth-last-child(1)始终匹配最后一个元素，与last-child等同
	- E:nth-of-type(n)	选择父元素内具有指定类型的第n个E元素
	- E:nth-last-of-type(n)	选择父元素内具有指定类型的倒数第n个E元素
	- E:first-of-type	选择父元素内具有指定类型的第一个E元素，与E:nth-of-type(1)等同
	- E:last-of-tye	选择父元素内具有指定类型的最后一个E元素，与E:nth-last-of-type(1)等同
	- E:only-child	选择父元素只包含一个子元素，且该子元素匹配E元素
	- E:only-of-type	选择父元素只包含一个同类型子元素，且该子元素匹配E元素
	- E:empty	选择没有子元素的元素，而且该元素也不包含任何文本节点
	- 注意
		- （1），“ul>li:nth-child(3)”表达的并不是一定选择列表ul元素中的第3个子元素li，仅有列表ul中第3个li元素前不存在其他的元素，命题才有意义，否则不会改变列表第3个li元素的样式。
		- （2），:nth-child(n)  中参数只能是n，不可以用其他字母代替。
		- （3），:nth-child(odd) 选择的是奇数项，而使用:nth-last-child(odd) 选择的却是偶数项
- 否定伪类选择器
	- E:not(F)	匹配所有除元素F外的E元素
- 属性选择器语法
	- [attribute]	用于选取带有指定属性的元素。
	- [attribute=value]	用于选取带有指定属性和值的元素。
	- [attribute~=value]	用于选取属性值中包含指定词汇的元素。
	- [attribute|=value]	用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
	- [attribute^=value]	匹配属性值以指定值开头的每个元素。
	- [attribute$=value]	匹配属性值以指定值结尾的每个元素。
	- [attribute*=value]	匹配属性值中包含指定值的每个元素。
### 选择器优先级
- 第一优先级：无条件优先的属性只需要在属性后面使用！important。它会覆盖页面内任何位置定义的元素样式。ie6不支持该属性。
- 第二优先级：在html中给元素标签加style，即内联样式。该方法会造成css难以管理，所以不推荐使用。
- 第三优先级：由一个或多个id选择器来定义。例如，#id{margin:0;}会覆盖.classname{margin:3pxl}
- 第四优先级：由一个或多个类选择器、属性选择器、伪类选择器定义。如.classname{margin:3px}会覆盖div{margin:6px;}（伪类选择器 = 属性选择器 > 类选择器）
- 第五优先级：由一个或多个标签选择器定义。如div{marigin:6px;}覆盖*{margin:10px；}
- 第六优先级：通配选择器，如*{marigin:6px;}
### 权重
- 内联样式（1000）
- ID选择符（0100）
- 类、伪类、属性选择符（0010）
- 类型、伪元素选择符（0001）
- 通配符、相邻选择符等（0000）
- 继承（没有权重）
## 【清除浮动】CSS清除浮动的方法
### （1）在浮动元素下添加一个空的div，并且为其设置了样式clear:both;
- 这个规则只能影响使用清除的元素本身，不能影响其他元素,clear了隐藏div的both
- 我们是通过在别的元素上清除浮动来实现撑开高度的， 而不是在浮动元素上
### （2）通过BFC清除浮动引起的高度塌陷，原理是BFC在计算高度的时候会连同浮动元素的高度一起计算
### （3）使用CSS中clearfix的after伪元素
- 关于::after和::before的理解
	- 概述
		- 这两个伪元素相当于是对当前元素的装潢，他们并不是节点，不会出现在dom树中，但是在显示上具备节点的效果。
	- 使用
		- （1）::after和::before的使用很简单，可以认为其所在元素上存在一前一后的两个的元素，这两个元素默认是内联元素，但我们可以为其增添样式。
		- （2）必须设置content，否则这两个伪元素是无法显示出来的。而content属性，会作为这两个伪元素的内容嵌入他们中。
		- （3）::after和::before是虚拟元素，不会影响真正元素的所在文档的位置，对:first-child或者:last-child这种伪类选择不会造成影响。
	- 操作
		- ::after和::before是虚拟节点，而不是正在的节点，不在documont里面找到对应Node对象
		- console.log( document.querySelector("ul").childNodes)；得到的是一个只有3个节点的NodeList对象，而两个伪元素并不在对象中。因为::after和::before不是真正的节点，所以我们取不到他们，也不发设置点击等用户事件。
		- 可以通过css的接口获取其样式属性
	- ::after和::before使用的经验
		- 1.间隔符用法
		- 2.做border三角图标（常考）
		- 3.字符图标
		- 4.webfont的图标
		- 5.做单位、标签、表单必填标准
		- 7.实现一些标签对placeholder的支持
		- 8.实现文字图片居中对齐
		- 9.清除浮动
	- 总体可以分为四种用法：
		- 1.用css创建装饰性元素
		- 2.用css创建用于布局的元素，实现特殊布局的特殊需要
		- 3.做显示图标的实现手段
		- 4.配合attr显示属性值
	- 伪类与伪元素的差异
		- 伪类
			- 定义
				- CSS 伪类用于向某些选择器添加特殊的效果。
			- 功能
				- 获取不存在与DOM树中的信息。比如<a>标签的:link、visited等，这些信息不存在与DOM树结构中，只能通过CSS选择器来获取；
				- 获取不能被常规CSS选择器获取的信息。比如伪类:target，它的作用是匹配文档(页面)的URI中某个标志符的目标元素，例如我们可以通过如下代码来实现页面内的区域跳转：
		- 伪元素
			- 定义
				- 伪元素在DOM树中创建了一些抽象元素，这些抽象元素是不存在于文档语言里的（可以理解为html源码）
				- 通俗来说
					- 伪元素创建了一个虚拟容器，这个容器不包含任何DOM元素，但是可以包含内容。
		- 总结一下伪类与伪元素的特性及其区别：
			- （1）伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；
			- （2）伪元素本质上是创建了一个有内容的虚拟容器；
			- （3）CSS3中伪类和伪元素的语法不同；
			- （4）可以同时使用多个伪类，而只能同时使用一个伪元素；
## 【布局】CSS中的左右两栏定宽，中间自适应布局方案
### 浮动布局
  .container .left {         
            float: left;
            width: 200px;
            background-color: orange;        
            }
        .container .main {         
            background-color: rgb(0, 255, 106);           
        }
        .container .right {         
            float: right;
            width: 200px;
            background-color: rgb(76, 0, 255);            
        }
<div class="container">
        <div class='left'>111111</div>
        <div class="right">1111111</div>
        <div class='center'>111111111</div>
    </div>
- 左右浮动，中间不用浮动，DOM上中间要放最后
### 定位布局
        .container>div{
            position: absolute;
        }
        .left{
            left:0;
            width: 300px;
            background: red;
        }
         .center{
            left: 300px;
            right: 300px;
            background: yellow;
        }
        .right{
            right:0;
            width: 300px;
            background: blue;
        }
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
- 首先三个盒子都得绝对定位，左left：0，右right：0，中left：300px；right：300px，DOM正常
### Flex布局
       .container{
            display: flex;
        }
        .left{
            width: 300px;
            background: red;
        }
        .center{
            flex:1;
            background: yellow;
        }
         .right{
            width: 300px;
            background: blue;
        }
- 父元素display：flex；左右设置宽度，中间flex：1，DOM正常
### Grid布局
.layout.grid .left-center-right{
            width:100%;
            display: grid;
            grid-template-rows: 100px;
            grid-template-columns: 300px auto 300px;
        }
        .layout.grid .left-center-right>div{
        }
        .layout.grid .left{
            background: red;
        }
        .layout.grid .center{
            background: yellow;
        }
        .layout.grid .right{
            background: blue;
        }
### 表格布局
      .container{
            width:100%;
            height: 100px;
            display: table;
        }
        .containter>div{
            display: table-cell;
        }
        .left{
            width: 300px;
            background: red;
        }
       .center{
            background: yellow;
        }
         .right{
            width: 300px;
            background: blue;
        }
- 给父元素设置display：table；三个盒子都设置display：table-cell；左右设置宽度，DOM正常
### 圣杯布局
<template>
<header>header</header>
<section class="wrapper">
    <section class="col main">main</section>
    <aside class="col left">left</aside>
    <aside class="col right">right</aside>
</section>
<footer>footer</footer>
</template>
- 诞生缘由
	- 希望中部 main 部分优先显示的话，是可以做布局优化的。提前即可优先渲染
- 存在缺陷
	- 如果将浏览器无限变窄，「圣杯」将会「破碎」掉。当 main 部分的宽小于 left 部分时就会发生布局混乱。
- CSS部分
- 要点
	- （1）父元素设置左右padding，并创建BFC（设置overflow：hidden或其他）或使用伪元素清除浮动
	- （2）为三个盒子设置position：relative；float：left
	- （3）中间盒子宽度100%，左右定宽
	- （4）为左盒子设置margin-left：-100%，left：-100px；右盒子设置margin-left：-100px，right：-定宽px
### 双飞翼布局
<header>header</header>
<section class="wrapper">
    <section class="col main">
        <section class="main-wrap">main</section>
    </section>
    <aside class="col left">left</aside>
    <aside class="col right">right</aside>
</section>
<footer>footer</footer>
- css部分
- 缺点
	- 多加一层 dom 树节点，增加了 css 样式规则表和 dom 树合并成布局树的计算量
- 要点
	- （1）父元素BFC清除浮动
	- （2）三个盒子全部左浮动
	- （3）中间main盒子宽度100%，其父盒子左右margin为定宽
	- （4）左盒子margin-left：-100%，右盒子margin-left：-定宽px
### 选用情况
