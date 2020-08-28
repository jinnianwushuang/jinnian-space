

## 1、变量 $ 使用

我们可以通过变量来复用属性值，比如颜色、边框大小、图片路径等，这样可以做到更改一处，从而进行全局更改，从而实现“换肤”的功能。

**实例1：我们的组件库，利用变量配置，进行统一更改组件的颜色、字体大小等（换肤）：**

```
$color-primary: #3ecacb;
$color-success: #4fc48d;
$color-warning: #f3d93f;
$color-danger: #f6588e;
$color-info: #27c6fa;
```

**实例2：图片的配置及全局引入**

`Scss`中图片的使用，可能存在以下2个问题：

（1）如果样式文件和使用该样式文件的`vue`文件不在同一目录会出现图片找不到

（2）如果将图片路径配置变量写在`vue`文件的`style`中，但是该写法导致图片和样式分离

我们可以采用将图片路径写成配置文件，然后进行全局引入，这样可以统一更改图片路径（并且该方法只会在使用相应图片时进行加载，不会导致额外性能问题）：

```
$common-path: './primary/assets/img/';
$icon-see: $common-path+'icon-see.png';
$icon-play: $common-path+'icon-play.png';
$icon-comment: $common-path+'icon-comment.png';
$icon-checkbox: $common-path+'icon-checkbox.png';
```

## 2、[@import](https://github.com/import) 导入Scss文件

（1）`Css`中的`@import`规则，它允许在一个`css`文件中导入其他`css`文件。然而，后果是只有执行到`@import`时，浏览器才会去下载其他`css`文件，这导致页面加载起来特别慢。

（2）`Scss`中的`@import`规则，不同的是，`scss`的`@import`规则在生成`css`文件时就把相关文件导入进来。这意味着所有相关的样式被归纳到了同一个`css`文件中，而无需发起额外的下载请求。

**实例1：组件库中统一将组件的样式文件`import`进`index.sccs`中**，然后如果项目中有使用组件库的地方只需要在项目的入口处，引入`index.scss`文件，如下所示在`index.scss`文件中引入各组件的样式文件：

```
@import "./base.scss";
@import "./webupload.scss";
@import "./message-hint.scss";
```

## 3、局部文件命名的使用

`scss`局部文件的文件名以下划线开头。这样，`scss`就不会在编译时单独编译这个文件输出`css`，而只把这个文件用作导入。在使用`scss`时，混合器`mixins`是最适合的使用场景，因为混合器不需要单独编译输出`css`文件。

**实例1：将混合器的名称写成局部文件命名的方式，如下图所示**

[![img](https://camo.githubusercontent.com/0785f0d677a7ea4da791cbd99953ebeb49d3e7ff/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f312f32322f313638373634303035653337336531383f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31)](https://camo.githubusercontent.com/0785f0d677a7ea4da791cbd99953ebeb49d3e7ff/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031392f312f32322f313638373634303035653337336531383f696d61676556696577322f302f772f313238302f682f3936302f666f726d61742f776562702f69676e6f72652d6572726f722f31)

## 4、Scss的嵌套功能和父选择器标识符

我们可以使用嵌套功能和父选择器标识符 & 来缩减重复的代码，特别如果你`CSS`类采用`BEM`命名规范，样式类命名存在冗长的问题。使用此功能，能解决`BEM`命名冗长的问题，且样式可读性更高。

**实例1：嵌套功能和父选择器标识符 & 解决BEM冗长问题：**

```
.tea-assignhw { 
 &__top {  
  margin: 0;  
} 
 &__content { 
   padding-left: 45px; 
 }  
&__gradeselect { 
   width: 158px;  
 }
}
```

**实例2：**嵌套中使用子选择器、兄弟选择器和伪类选择器

**（1）子选择器**

```
&__hint {
  margin: 20px;  
  font-size: 14px;  
  > p:first-child { 
     font-weight: bold;  
 }
}
```

**（2）兄弟选择器**

```
&__input { 
 width: 220px; 
 & + span {   
   margin-left: 10px;  
 }
}
```

**（3）伪类选择器**

```
&__browse {
  background: url($btn-search) no-repeat;  
&:hover {   
  background: url($btn-search) -80px 0 no-repeat;  
}  
&:visited {  
  background: url($btn-search) -160px 0 no-repeat; 
 }
}
```

## 5、[@mixin](https://github.com/mixin) 混合器和 [@extend](https://github.com/extend) 指令的使用

变量使你能够复用属性值，但如果想要复用一大段规则呢？传统的做法是，如果在样式表

中发现重复，就会把公共的规则抽离出来放到新的`CSS`类中。

在`Scss`中可以使用混合器`@mixin`和`@extend`继承指令来解决以上提到的复用一大段规则的场景。但两者的使用场景又有啥区别呢？

（1）`@mixin`主要的优势就是它能够接受参数。如果想传递参数，你会很自然地选择`@mixin`而不是[@extend](https://github.com/extend)，因为`@extend`不能够接受参数

（2）因为混合器规则都混入到其他类中，所以在输出的样式表中不能完全避免重复。选择器继承的意思就是让一个选择器能够复用另一个选择器的所有样式，但又不重复输出这些样式属性；即使用`@extend`产生 [DRY CSS](https://link.juejin.im/?target=http%3A%2F%2Fvanseodesign.com%2Fcss%2Fdry-principles%2F)风格的代码（Don't repeat yourself）

综上所述，如果你需要传参数，只能使用`@mixin`混合器，否则用`@extend`继承来实现更优。

**实例1：[@mixin](https://github.com/mixin)混合器的使用**

```
@mixin paneactive($image, $level, $vertical) { 
  background: url($image) no-repeat $level $vertical;  
  height: 100px;  
  width: 30px; 
  position: relative;  
  top: 50%;
}
&--left-active {  
  @include paneactive($btn-flip, 0, 0);
}
&--right-active { 
  @include paneactive($btn-flip, 0, -105px);
}
```

**实例2：[@extend](https://github.com/extend)继承的使用**

```
.common-mod {  
  height: 250px;  
  width: 50%;  
  background-color: #fff;  
  text-align: center;
}
&-mod { 
  @extend .common-mod;  
  float: right;
}
&-mod2 { 
  @extend .common-mod;
}
```

## 6、[@mixin](https://github.com/mixin) 混合器默认参数值的使用

在`@include`混合器时不必传入所有的参数，我们可以给参数指定一个默认值，如果所需要传的参数是 默认值，则`@include`时可以省略该参数；如果所需要传的参数不是默认值，则`@include`时则传入新的参数。

**实例1：[@mixin](https://github.com/mixin)混合器默认参数值的使用**

```
@mixin pane($dir: left) {  
  width: 35px; 
  display: block;  
  float: $dir;  
  background-color: #f1f1f1;
}
&__paneleft { 
  @include pane;
}
&__paneright {
  @include pane(right);
}
```

## 7、#{} 插值的使用

通过 #{} 插值语句可以在选择器或属性名中使用变量。当有两个页面的样式类似时，我们会将类似的样式抽取成页面混合器，但两个不同的页面样式的命名名称根据`BEM`命名规范不能一样，这时我们可使用插值进行动态命名。

**实例1：页面级混合器中的类名利用#{}插值进行动态设置**

```
@mixin home-content($class) { 
 .#{$class} {   
   position: relative;    
   background-color: #fff;    
   overflow-x: hidden;    
   overflow-y: hidden;    
 &--left {     
    margin-left: 160px;  
 }    
 &--noleft {  
    margin-left: 0;  
 } 
 }
}
```

## 8、运算的使用

`SassScript` 支持数字的加减乘除、取整等运算 (+, -, *, /, %)

**实例1：input组件根据输入框的高度设置左右内边距，如下所示：**

```
.ps-input { 
   display: block;  
   &__inner {   
    -webkit-appearance: none;  
     padding-left: #{$--input-height + 10
   };    
     padding-right: #{$--input-height + 10
   };    
  }
}
```

## 9、相关scss自带函数的应用

`scss`自带一些函数，例如`hsl`、`mix`函数等。

**实例1：button组件的点击后颜色是将几种颜色根据一定的比例混合在一起，生成另一种颜色。**如下所示：

```
&:focus { 
  color: mix($--color-white, $--color-primary, $--button-hover-tint-percent);  
  border-color: transparent;  
  background-color: transparent;}
&:active {  
  color: mix($--color-black, $--color-primary, $--button-active-shade-percent); 
  border-color: transparent;  background-color: transparent;
}
```

## 10、相关scss自带函数的应用

`@for`指令可以在限制的范围内重复输出样式，每次按变量的值对输出结果进行变动。

**实例1：例如项目中需要设置hwicon类底下第2到8个div子节点需设置样式**，如下所示：

```
@for $i from 2 through 8 {  
.com-hwicon {    
 > div:nth-child(#{$i}) {   
   position: relative;    
   float: right;   
  }  
 }
}
```

## 11、each遍历、map数据类型、@mixin/[@include](https://github.com/include)混合器、#{}插值 结合使用

可通过结合`each`遍历、`map`数据类型、`@mixin/@include`混合器、#{}插值，从而生成不同的选择器类，并且每个选择器类中的背景图片不同，如下所示：

```
$img-list: (  
 (accessimg, $papers-access),   
 (folderimg, $papers-folder),  
 (bmpimg, $papers-bmp),   
 (xlsimg, $papers-excel),   
 (xlsximg, $papers-excel),   
 (gifimg, $papers-gif),  
 (jpgimg, $papers-jpg),   
 (unknownimg, $papers-unknown)
);

@each $label, $value in $img-list { 
 .com-hwicon__#{$label} {
    @include commonImg($value); 
 }
}
```

