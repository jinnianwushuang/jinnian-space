# dom

## DOM事件机制

### 事件代理（委托）

- 由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。

  - 减少内存消耗，提高性能
  - 动态绑定事件

### Event对象常见应用

- event.preventDefault

  - 默认事件行为将不会触发

- event.stopPropagation

  - 阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。

- stopImmediatePropagation

  - 既能阻止事件向父元素冒泡，也能阻止元素同事件类型的其它监听器被触发。

- event.target & event.currentTarget

  - event.target

    - 指向引起触发事件的元素

      - 一个目标元素

  - event.currentTarget

    - 返回绑定事件的元素

      - 目标元素+冒泡经过元素

  - 包含所有与事件有关的信息
  - this始终等于currentTarget的值

### DOM事件模型和事件流

- 事件模型

  - 捕获
  - 冒泡

- 事件传播

  - 捕获阶段
  - 目标阶段
  - 冒泡阶段

### DOM事件级别

- DOM0级事件

  - 不允许给一个元素绑定多个事件
  - 事件方法在事件行为的冒泡阶段执行

- DOM2级事件

  - IE9以上

    - addEventListener

      - event-name

        - 事件名称

      - callback

        - 回调函数，参数为当前事件对象event

      - useCapture

        - 默认是false，代表事件句柄在冒泡阶段执行

    - removeEventListener

      - 绑定的函数最好是声明函数变量，这样才能将同一个函数传入

    - 事件程序作用域是依附元素作用域

  - IE9以下

    - attachEvent
    - detachEvent

      - 绑定的函数最好是声明函数变量，这样才能将同一个函数传入

    - 第一个事件名称前要加on。
    - 因为IE9以下是不支持事件捕获的，所以也没有第三个参数。
    - 事件处理程序的作用域是全局作用域

- DOM3级事件

  - UI事件

    - load
    - sroll

  - 焦点事件

    - blur
    - focus

  - 鼠标事件

    - dblclick
    - mouseup

  - 滚轮事件

    - mousewheel

  - 文本事件

    - textInput

  - 键盘事件

    - keydown
    - keypress

  - 合成事件

    - compositionstart

  - 变动事件

    - DOMsubtreeModified

  - 自定义事件

## DOM

### 1.获取DOM

- 1.节点(元素对象，DOM节点)

  - 1.返回DOM节点

    - 1.getElementById("id名")
    - 2.querySelector("CSS名")

  - 2.返回伪数组

    - 1.getElementByTagName("标签名")
    - 2.getElementByClassName（"类名"）
    - 3.querySelectorAll("CSS名")

- 2.DOM样式

  - 1.dom.style.color

    - 1.DOM只能操作行内样式

  - 2.window.getComputedStyle(box)  括号中填写元素对象，DOM节点，

    - 1.返回的属性值为字符串
    - 2.返回所有（无论是行内还是非行内）的样式集合/对象

### 2.注册事件

- 1.点击事件（元素对象，DOM节点）

  - click

- 2.焦点事件

  - focus

    - 获取焦点

      - 注册给有光标的标签

  - blur

    - 失去焦点

      - 注册给有光标的标签

- 3.鼠标事件

  - mousedown

    - 鼠标点下

  - mousemove

    - 鼠标移动

  - mouseup

    - 鼠标松开

  - mouseover《==》mouseenter

    - 鼠标移入，后者不支持冒泡

  - mouseout《==》mouseleave

    - 鼠标移除，后者不支持冒泡

- 4.键盘事件

  - keydown

    - 按键按下

  - keyup

    - 按键抬起

- 5.滚动事件

  - scroll 当元素滚动的时候执行

- 6.动画结束后触发事件（只能用addEventListener）

  - 1.transitionend

    - 元素过度结束时执行

  - 2.animationed

    - 元素帧动画结束时执行

- 7.触摸事件（移动端）

  - 1.touch（刚刚触摸）
  - 2.touchmove（手指滑动）
  - 3.touchend（手指离开）

- 8.存在多次注册事件，容易被后者覆盖，解决方法：

  - 例：btn.addEventListener("click",function()
   console.log(1);
)

### 3.属性

- 1.自定义属性

  - 说明：把数据存储到对应元素的身上使用的属性，没有特别功能，仅是需要，返回值是 对象
  - 1.用法

    - 1.定义： data-  开头的
    - 2.取值：例如：console.log(dom_div.dataset.name)

- 2.相关方法（推荐用于自定义属性操作）

  - 1.getAttribute("属性名称") -----获取
  - 2.setAttribute("属性名","属性值")-----设置
  - 3.removeAttribute("属性名称")------删除

- 3.标准属性

  - 说明：html中出现的，具有特别功能的属性
  - 1.ckecked

    - 说明：开关属性，只有两种状态的属性

  - 2.class

    - 1.className
    - 2.classList(类名)

      - 1.add（新增）
      - 2.remove(移除)
      - 3.toggle（切换类名）

  - 3.style

    - 例如：img-src，a-href，id，class等

  - 4.value
  - 5.src
  - 6.disabled

    - 按钮是否被禁用

- 4.获取

  - 1.父元素.children

    - 获取子元素：可以得到某个元素之下的所有的子元素的集合，一个伪数组

  - 2.父元素 childNodes

    - 获取子元素：可以得到所有的子元素，
    - 需要注意的是，<ul>
       <li></li>
    <ul>
会得到 text,li，text

  - 3.元素.parentNode

    - 获取父元素：返回一个

  - 4.元素.firstElementChild

    - 获取第一个子元素

  - 5.元素.lastElementChild

    - 获取最后一个子元素

  - 6.获取兄弟元素

    - 1.元素.nextElementSibling  -  得到下一个兄弟元素
    - 2.元素.previousElementSibling - 得到上一个兄弟元素

### 4.创建

- 1.innerHTML

  - 1.设置html结构    2.会覆盖

- 2.document.write()

  - 会覆盖

- 3.document.createElement()

  - 创建标签节点

- 4.document.createAttribute(元素属性)

  - 创建属性节点

- 5.document.createTextNode(文本内容)

  - 创建文本节点

- 6.insertAdjacentHTML('位置',Html结构)

### 5.修改

- 1.innerHTML   结构
- 2.innerText  文本内容

### 6.添加

- 父节点 .appendChild(新DOM节点)：从后添加新的DOM节点
- 父节点 .insertBefore(新的DOM节点，插入之前的DOM节点)，在某个子元素之前，添加新的DOM节点

### 7.其他操作

- 1.替换元素

  - 父节点.replaceChild(新的节点,旧的子节点)

- 2.克隆元素

  - 元素.cloneNode(true或false);  返回一份新的克隆后的元素

### 8.innerText和textContent比较

- 相同点：

  - 获取的都是Text文本

- 不同点：

  - 1.innerText基本没有兼容问题/textContent属性在ie低版本中不支持
  - 2.innerText（野路子，但是兼容性好,推荐使用）/textContent标准属性（官宣）

## 事件

### 1.事件三要素

- 1.事件源

  - 被触发的元素

- 2.事件类型

  - 如何触发的事件

- 3.事件处理程序

  - 事件发生后的结果

### 2.事件的三个阶段（事件流）

- 1.捕获

  - 从根部往目标DOM节点上，一层一层的找，捕获是用户点击了那个DOM节点。

- 2.到达目标
- 3.冒泡

  - 从目标节点到根节点

- 冒泡执行

  - 事件默认是在冒泡阶段执行；当我们目标DOM节点注册了事件，冒泡往上的DOM节点也注册了同样的事件话，也会执行

### 3.事件对象

- 说明：一个集合体，用来描述点击的行为(点击位置，点击了谁，注册给谁)
- 1.clientX/Y 相对于当前窗口
- 2.pageX/Y 相对于body左上角
- 3.target 点击了那个DOM节点，返回哪个DOM节点
- 4.currenTarget 返回事件源（事件源：事件给谁注册了，这就是那个源头）
- 5.offset系列

  - 1.offsetLeft

    - box距左的距离

      - 找参考的父亲，父辈元素没有定位，继续往上找，直至body

  - 2.offsetTop

    - box距上的距离

      - 找参考的父亲，父辈元素没有定位，继续往上找，直至body

  - 3.offsetWidth

    - 获取DOM节点的宽度

  - 4.offsetHeight

    - 获取DOM节点的高度

- 6.可视区域（padding+content）

  - 1.元素.clientHeight
  - 2.元素.clientWidth

- 5.触摸点

  - 1.对象.touches(屏上面的触摸点)
  - 2.对象.targetTouches(元素上面的触摸点)
  - 3.对象.changedTouches（变化的触摸点）

- 6.阻止冒泡（为了更好的用户体验）

  - 1.例：btn.addEventListener('click',function(e)){
  e.stopPropagation();
}
  - 2.canceBubble（） --------只支持IE

- 7.阻止默认行为：（e.prventDefault()）

  - 1.禁止鼠标右键  
例: document.oncontextmenu = function(e){
      e.prventDefault()
}
  - 2.a标签跳转等

    - 1.（也可以使用 return false）
    - 2. javascript:void(0)

### 4.事件解绑

- 1. 例：begin.onclick = null；
- 2.例：begin.removeEventListener("click",fn)

### 5.事件委托

- 1.把事件注册在父级的元素上
- 2.利用事件冒泡执行，当事件传播到已经注册了事件的父级元素身上
- 3.判断触发事件DOM(e.target)节点是否是指定的元素 例:e.target.nodeName =='li'

  - 若是 则继续
  - 若不是 则什么都不做

## 【DOM相关】JavaScript获取元素的位置与尺寸

### （1）获取元素的尺寸

- 0. 【elem.style.width（可写）】CSS写入的宽高

  - jQuery-【$().width()】

- 1.【clientHeight】内宽高—— 内边距 + 内容框（如果有滚动条，还需要减去滚动条的宽度）

  - jQuery-【$().innerwidth()】

- 2.【offsetHeight】 外宽高—— 边框 + 内边距 + 内容框

  - jQuery-【$().outerwidth()】

- 3.【scrollHeight】 用来计算可滚动容器的大小，包括不可见的部分，当然，scrollHeight 的值需要加上 padding 的值。

  - 例子

    - 图

    - 解释

      - 此时滚动条的宽度是 17px，根据前面的介绍，滚动条时占用 padding 和 content 宽度的，而 17px 大于 padding 的 10px，故还有 7px 会占据 content。
      - 分析一下，offsetHeight 的值是 124，padding 10px，滚动条虽然存在，但是占了 padding 和内容的空间，offsetHeight 的值是 4+20+76 = 124px。scrollHeight 的值是可滚动的范围加上padding 值，同样不包括滚动条，即 150+20 = 170px。clientHeight 的值是可见区域，但是不包括滚动条的值（滚动条。。。），所以20+100-17 = 79px。
      - 其实也不是非常复杂。这个时候可以得出滚动条宽度的计算：offsetHeight 减去 border 和 clientHeight 的和就是滚动条宽度。

- 4.【getComputedStyle】获取元素内容的尺寸（最终计算后的结果）

  - 使用

    - window.getComputedStyle(ele， boolean)
    - document.defaultView.getComputedStyle(ele， boolean)
    - window.getComputedStyle(elem, null).getPropertyValue("height")
    - 接受两个参数：要取得计算样式的元素和一个伪元素字符串（例如“:after”）。如果不需要伪元素信息，第二个参数可以是null。getComputerStyle()方法返回一个CSSStyleDeclaration对象，其中包含当前元素的所有计算的样式。

  - 图

  - 注意

    - 在有滚动条的情况下，该属性返回的宽高为，CSS宽高减去滚动条的宽高

  - 延伸

    - getComputedStyle会引起回流，因为它需要获取祖先节点的一些信息进行计算（譬如宽高等），所以用的时候慎用，回流会引起性能问题。然后合适的话会将话题引导回流，重绘，浏览器渲染原理等等。当然也可以列举一些其它会引发回流的操作，如offsetXXX，scrollXXX，clientXXX，currentStyle等等

  - 与elem.style的区别

- 5.【elem.getBoundingClientRect()】获取元素宽高 等同于 offsetHeight——边框 + 内边距 + 内容框

### （2）获取元素的位置

- 1.【elem.getBoundingClientRect()】只读、相对于视口（浏览器窗口）

  - 方法返回元素的大小及其相对于视口的位置。返回值是一个 DOMRect 对象
  - DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的
  - 图

  - 绝对位置-相对于当前document元素的位置-jQuery 【$().offset().top】

    - 再加上滚动距离，就可以得到绝对位置（不管页面怎么滚动永远为元素离文档的距离）
    - 注意

      - 页面指定了DTD，即指定了DOCTYPE时，使用document.documentElement。
      - 页面没有DTD，即没指定DOCTYPE时，使用document.body。

  - 此处的left与top指的是position的left和top加上元素的margin，即指的是元素的边框距离浏览器窗口的值，如没有定位，那么即为元素margin的值

- 2.【elem.offsetTop（可写）】子元素距离父元素的距离，即子元素的边框到父元素的边框的距离（子元素的margin + 父元素的padding）

### （3）获取客户端以及屏幕高度

- （1）screen.width

  - 显示器的水平方向的像素时，不随着我们浏览器窗口的变化而变化，是用设备像素衡量的

- （2）window.innerWidth

  - window.innerWidth指的是浏览器窗口的宽度，是可以变化的，所以使用的是CSS像素
  - 100%缩放下

    - 可以发现在100%缩放情况下，window.innerWidth的值为1192，window.innerHeight的值为455

  - 200%缩放下

    - 因为window.innerWidth是用CSS像素衡量的，放大两倍之后，浏览器窗口只能看到之前一半的内容，所以window.innerWidth是之前的一半

- （3）document.documentElement.clientWidth

  - 指的是网页可见区域高的宽度，与window.innerWidth的区别就只差了一个滚动条（不包含滚动条）

- （4）document.documentElement.offsetWidth

  - 取得html标签的宽度
  - 与clientwidth的区别

    - 看到没document.documentElement.offsetHeight此时为0，我打开调试定位了下，发现此时html高度确实是为0，而document.documentElement.clientHeight此时为455，是viewport的高度，只不过此时viewport的高度和window.innerHeight相等

- （5）document.documentElement.scrollHeight

  - 网页正文全文高

- （6）document.documentElement.scrollTop

  - 网页被卷去的高

### （4）移动端的三个viewport理论

- layout viewport

  - 介绍

    - 布局layout，和PC端的viewport很像，PC端的viewport的宽由浏览器窗口的宽决定的，用户可以通过拖动窗口或者缩放改变viewport的大小，但是在移动端则不同，在IOS中layout viewport默认大小980px，在android中layout viewport为800px，很明显这两个值都大于我们浏览器的可视区域宽度。我们可以通过document.documentElement.clientWidth来获取layout viewport的宽度

  - 直观

- visual viewport

  - 介绍

    - 有了layout viewport，我们还需要一个viewport来表示我们浏览器可视区域的大小，这个就是visual viewport。visual viewport的宽度可以通过window.innerWidth获取
    - 移动端浏览器为了不让用户通过缩放和滑动就能看到整个网页的内容，默认情况下会将visual viewport进行缩放到layout viewport一样大小，这也就解释了为什么PC端设计的网页在手机上浏览会缩小，其实这是跟移动浏览器默认的行为有关系

  - 直观

- ideal viewport

  - 设备理想viewport，有以下几个要求：

    - 用户不需要缩放和滚动条就能查看所有内容
    - 文字大小合适，不会因为在高分辨率手机下就显示过小而看不清，图片也一样

  - 这个viewport就叫做ideal viewport。但是不同的设备的ideal viewport不一样，有320px，有360px的，还有384px的......
  - 如何获得

    - （1）layout viewport能被设置成ideal viewport。width=device-width和initial-scale=1指令可以做到。
    - （2）所有的scale指令都是相对于ideal viewport的。无视layout viewport设置了多少，所以maximum-scale=3意味着最大的缩放值是ideal viewport的300%


