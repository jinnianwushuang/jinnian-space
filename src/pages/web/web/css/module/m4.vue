<template>
    <div>
    <h3>var() 变量 </h3>    

<pre>
    var()函数可以代替元素中任何属性中的值的任何部分。
    var()函数不能作为属性名、选择器或者其他除了属性值之外的值。
    （这样做通常会产生无效的语法或者一个没有关联到变量的值。）

语法
方法的第一个参数是要替换的自定义属性的名称。函数的可选第二个参数用作回退值。
如果第一个参数引用的自定义属性无效，则该函数将使用第二个值。

var( custom-property-name , declaration-value? )


:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
/* 后备值 */

/* 在父元素样式中 */
.component {
  --text-color: #080; /* header-color 并没有被设定 */
}

/* 在 component 的样式中： */
.component .header {
  color: var(--header-color, blue); /* 此处 color 被回退到 blue */
}

.component .text {
  color: var(--text-color, black);
}
</pre>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>