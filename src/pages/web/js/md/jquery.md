# Jquery

## 1.优点

### 1.隐私迭代

- 自动遍历元素

### 2.链式编程

- 用白话说：可以一直点下去

## 2.入口函数（如果写在html的上面，一定要有入口函数）

### 1.$（function () { } ）

### 2.$(document).ready（function（）{ } ）

## 3.顶级对象

### $

## 4.相互转换

### 1.DOM对象==>jQuery对象

- 例如：$(btn)

	- 注意（）括号里面直接使用DOM对象，不用加‘’引号

### 2.jQuery==>DOM对象

- 1.$('input')[0]
- 2.$('input').get[0]

## 5.方法

### 1.获取索引

- index()

	- 可以获取当前伪数组的索引

### 2.属性操作

- 1.基本（固有）属性

	- prop();

		- 1.一个值伪获取
		- 2.二个值伪设置

- 2.自定义属性

	- attr();

		- 1.一个值伪获取
		- 2.二个值伪设置

### 3.内容文本值

- 1.html() 

	- 大多数 双标签使用

- 2.text()

	- 大多数 双标签使用

- 3.val()

	- 大多数 表单使用

### 4.获取祖先元素

- parents()

### 5.遍历

- 1.遍历元素

	- jQuery对象.each(function(参数1，参数2){
})
参数1：每个元素的索引号
参数2：这里是DOM的元素对象，需要转为JQ的对象

- 2.遍历数据

	- $.each（遍历谁，function(){
}）
参数1：是每个元素的索引号;   
参数2：遍历内容

### 6.元素操作

- 1.创建元素

	- $("<li></li>")

- 2.添加元素（父子关系）

	- append();
	- prepend();

- 3.外部添加（兄弟关系）

	- after();
	- before();

- 4.删除元素

	- remove（）把整个元素i清空
	- empty（）把内容i清空
	- html('')=>添加空的字符串

## 6.选择器

### 1.基本

- 1.标签名 $('div')
- 2.id名$('#div')
- 3.* $('*')
- 4.class名 $('.box')
- 5.获取多个 $('p,img')
- 6.交集 $('p.c1')
- 7.子代 $('p>span')
- 8.后代 $('p span')

### 2.筛选选择器

- 1.第一个元素 $('li:first')
- 2.最后一个元素 $('li:last')
- 3."索引"为2的元素 $('li:eq(2)')
- 4.索引为奇数 $('li:odd')
- 5.索引为偶数 $('li:even')

### 3.筛选方法

- 1.父级 

	- $('li.parent()')

- 2.子级

	- $(’li‘).children()
	- 一个儿子 $(’li‘).children(‘p’)

- 3.后代级

	- $('li').find('p')

- 4.兄弟

	- $('li').siblings()

- 5.前面兄弟

	- $('li c4').nextAll()

- 6.后面兄弟

	- $('li c4').prveAll()

- 7.判断某个元素是否有哪个类名(返回值booleqan)

	-  $('li').hasClass('c2')   

- 8.指定索引方法【推荐】

	- $('li').eq(2)

## 7.样式操作

### 1.直接操作

- 单一操作

	- $(‘div’).css('width',100)

- 多种样式一起改变（传入对象）

	- $('div').css({
	width:200,
	height:200,
})

### 2.类名操作

- 1.添加

	- $('div').addCLass(‘类名’)

- 2.删除

	- $('div').removeCLass(‘类名’)

- 3.切换

	- $('div').toggleClassCLass(‘类名’)

## 8.效果

### 1.显示隐藏（三个参数均可以省略）

- 1.显示

	- show('时间','切换效果','回调函数')

- 2.隐藏

	- hide('时间','切换效果','回调函数')

- 3.切换

	- toggle('时间','切换效果','回调函数')

### 2.滑动效果（三个参数均可以省略）

- 1.向下滑

	- slideDown('时间','切换效果','回调函数')

- 2.向上滑

	- slideUp('时间','切换效果','回调函数')

- 3.切换

	- slideToggle('时间','切换效果','回调函数')

### 3.事件切换

- hover（function（），function（））

	- 1.第一个参数，鼠标进入
	- 2.第二个参数，鼠标移除
	- 注意：如果参数只写一个，则鼠标进入和离开的时候都会触发他
	- (不支持冒泡)mouseencter <==> mouseover（支持冒泡）
	- （不支持冒泡）mouseleave <==> mouseout（支持冒泡）

### 4.淡入淡出效果

- 1.淡入

	- fadeIn('时间','切换效果','回调函数')

- 2.淡出

	- fadeOut('时间','切换效果','回调函数')

- 3.切换

	- fadeToggle('时间','切换效果','回调函数')

- 4.淡入/出到某个程度

	- fadeTo('时间','透明度','切换效果','回调函数')  ====>前两个参数必须写

### 5.自定义动画

- animate('params','速度','切换效果','回调函数')

	- params(更改的样式)

		- 1.必须写
		- 2.对象形式
		- 3.不可以设置颜色

### 6.动画队列及其停止排队方法

- stop()

## 9.jQuery尺寸

### width（）；

### height （）；

### innerWidth（）；

### innerHeight();

### outerWidth();

### outerHeight();

### outerWidth(true);

### outerHeight(true);

## 10.jQuery位置

### 1.offset（）；

- 1.距离文档的距离
- 2.返回值是一个对象
- 3.可以设置

### 2.position（）

- 1.距离带有定位父元素的距离
- 2.返回值是一个对象
- 3.不可以设置

### 3.scrollTop();

- 卷起上部分的距离

### 4.scrollLeft();

- 卷据做部分的距离

## 11.jQuery事件

### 1.事件注册

- element.事件（function(){}）

### 2.绑定事件

- on的方式

	- 1.element.on（‘事件’，‘元素’，‘fn’）
	- 2.element.on（{
	click:function(){},
    mouseover:function(){}
}）

		- 优势:1.可以绑定多个事件，多个处理事件处理程序
       2.可以完成事件委派（委托）
       3.动态添加的元素也享有事件，需要事件委派

	- 3.element.one('click','fn')

		- 事件只完成1次

### 2.解绑事件

- 1.$('div').off();

	- div身上的全部事件解绑

- 2.$('div').off('click')

	- div身上的click事件解绑

- 3.$('div').off('click','li')

	- 解绑事件委托

### 3.自动触发事件

- 1.element.click();
- 2.element.tigger('click')

	- 自动触发，不需要点击

- 3.element.tiggerHandler('click');

	- 不会触发元素的默认行为

## 13.事件对象

### 1.阻止默认行为：

- 1.event.preventDefault()
- 2.return  false 

### 2.阻止冒泡：

-  event.stopPropagation()

