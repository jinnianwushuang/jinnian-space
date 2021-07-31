#### 分析比较opacity:0、visibility:hidden、display:none的区别、优劣及适用场景

------

#### 三个属性分别是什么？

1. #### opacity （filter: alpha（opacity = 0-100））– [MDN详细讲解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity)

   1. 定义：指定了一个元素的透明度
   2. 值：number类型的值，0~1，如果超过范围，则按最接近的范围值展示，如值为999的时候，是按1展示。默认为1，同样，值为-999时，是按0展示
   3. 兼容性：很好。除了IE9之前（详细到各浏览器版本号就看文档
   4. 关注点：什么是透明，是否还存在文档流中，对子元素影响呢？

2. #### visibility – [MDN详细讲解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility)

   1. 定义：显示或隐藏元素而不更改文档的布局。其中collapse值，还可以隐藏table中的行或列。
   2. 值：关键值有三个，分别如下。
      1. ___visible，默认值，正常展示
      2. ___hidden，隐藏元素，不改变布局，但子元素如果设置为visibility: visible，则该子元素可见（很有意思的一个属性）
      3. ___collapse，应用于table表格。
   3. 兼容性：css2的属性，应该都能兼容吧（没Windows
   4. 关注点：和opacity的透明度有什么区别？

3. #### display – [MDN详细讲解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#display_none)

   1. 定义：指定了元素的显示类型，包含两类基础特征，**用于指定元素怎样生成盒模型。****外部显示类型**定义了元素怎么参与流式布局的处理。**内部显示类型**定义了子元素的布局方式， 详细可以看看[语法部分](http://localhost:18080/[https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display#语法))
   2. 值：很多值，其中 none 属于 display-box。被设置成none的元素，将从可访问性树中移除，包括其子元素在内。
   3. 兼容性：基本支持
   4. 关注点：对页面重绘有没性能影响？是否可与别的属性连用？

4. #### 表格对比

|                                    | opacity: 0 | visibility: hidden | display:none |
| :--------------------------------: | :--------: | :----------------: | :----------: |
|           是否存在页面中           |    存在    |        存在        |    不存在    |
| 子元素设置该属性其他值是否还能展示 |   不可以   |        可以        |    不可以    |
|      自身绑定的事件是否能触发      |     能     |        不能        |     不能     |
|     是否影响遮挡元素的事件触发     |    影响    |       不影响       |    不影响    |
|     改变属性值是否影响页面重绘     |   不一定   |        一定        |     一定     |
|       改变属性值是否影响回流       |    不会    |         会         |      会      |
|      该属性是否支持transition      |    支持    |        支持        |    不支持    |

#### 三者的优劣和应用场景

1. #### 绑定事件

   1. opacity：从表格可得知，opacity的隐藏，只是透明度100%，看不见了，但还在页面中且可以通过z-index等方式遮挡其他元素，同时绑在在该元素上的事件依旧能触发。应用场景可以有：移动端使用input、select加div，自定义样式，其中input、select层级在div上面，并设置opacity为0
   2. visibility：这个属性是隐藏，意味着不能聚焦了还占据页面空间。但其子元素可以设置属性值为visible，就能正常显示。应用场景：父元素隐藏，子元素根据一定条件某些展示某些隐藏。可以做一个闪闪发光的星空？
   3. display none就不存在页面中了，可以理解为完全的消失。优点即应用场景，如果是流式布局，让一个元素隐藏且不占据空间，就使用这个属性值了。

2. #### 性能方面

   1. opacity由于只是透明度变化，就还好，visibility是元素隐藏，需要重绘，disable是元素消失，也是需要。
   2. 应用方面，需要频繁切换状态时，在display和opacity中，可以选择后者，不频繁时，none也可以。
