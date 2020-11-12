<template>
    <div>
     <h2>【Vue监听缺陷】Vue数组下标以及增删对象属性无法响应式</h2>
<h3>对于数组的监听</h3>
<ul>
<li><p>首先，Vue.js是基于Object.defineProperty对对象实现“响应式化”，而对于数组，Vue.js提供的方法是重写push、pop、shift、unshift、splice、sort、reverse这七个数组方法。</p>
<ul>
<li>直接重写数组</li>
<li>def的作用就是重新定义对象属性的value值</li>
<li>理解版，即在使用原生数组方法结果之后，发布改变与观察新增的元素，再返回值</li>
<li>理解版中的dosomething在源码中的代码</li>
</ul>
</li>
<li><p>Vue 不能检测以下变动的数组</p>
<ul>
<li><p>（1）当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue，</p>
</li>
<li><p>（2）当你修改数组的长度时，例如：vm.items.length = newLength</p>
</li>
<li><p>解释</p>
<ul>
<li>Vue不能检测到对象的添加或者删除。然而Vue在初始化实例时就对属性执行了setter/getter转化过程，所以属性必须开始就在对象上，这样才能让Vue转化它。 </li>
<li>数组中index都可以看做是属性，当我们添加属性并赋值时，Vue并不能检测到对象中属性的添加或者删除，但是其的确是添加或删除了，故我们可以通过console看到变化，所以就没有办法做到响应式；</li>
</ul>
</li>
</ul>
</li>
<li><p>解决</p>
<ul>
<li>数组索引设置</li>
<li>修改数组长度</li>
</ul>
</li>
</ul>
<h3>Vue 不能检测对象属性的添加或删除</h3>
<ul>
<li><p>现象</p>
<ul>
<li>对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。</li>
</ul>
</li>
<li><p>解决</p>
<ul>
<li><p>为已有对象赋予单个新属性</p>
<ul>
<li>可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。</li>
</ul>
</li>
<li><p>为已有对象赋予多个新属性</p>
<ul>
<li>用两个对象的属性创建一个新的对象</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3>Vue.set()原理</h3>
<ul>
<li><p>作用</p>
<ul>
<li>Vue.set()向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新属性，因为 Vue 无法探测普通的新增属性 (比如 this.myObject.newProperty = &#39;hi&#39;)</li>
</ul>
</li>
<li><p>实现原理</p>
<ul>
<li><p>Vue.set()和this.$set()这两个api的实现原理基本一模一样，都是使用了set函数。set函数是从 ../observer/index 文件中导出的，区别在于Vue.set()是将set函数绑定在Vue构造函数上，this.$set()是将set函数绑定在Vue原型上。</p>
</li>
<li><p>关键代码分析</p>
<ul>
<li><p>数组的实现原理</p>
<ul>
<li><p>Vue中的数组与普通的JS数组</p>
<ul>
<li><p>Vue</p>
</li>
<li><p>普通</p>
</li>
<li><p>区别</p>
<ul>
<li>普通JS中数组的原型是指向Array.prototype，也就是说 arrJs.<strong>proto</strong> == Array.prototype。</li>
<li>Vue中数组的原型指向的一个对象，这个对象上面只有7个push、pop等方法，并且这个对象上的原型才是指向的Array.prototype。所以我们在vue中调用数组的push、pop等方法时其实不是直接调用的数组原型给我们提供的push、pop等方法，而是调用的arrayMethods给我们提供的push、pop等方法。这里你可以理解成vue在arrayMethods对象中做过了特殊处理，如果你调用了arrayMethods提供的push、pop等7个方法，那么它会触发当前收集的依赖（这里收集的依赖可以暂时理解成渲染函数），导致页面重新渲染。</li>
</ul>
</li>
</ul>
</li>
<li><p>实现原理</p>
<ul>
<li>其实Vue.set()对于数组的处理其实就是调用了splice方法……我倒</li>
</ul>
</li>
</ul>
</li>
<li><p>对象的实现原理</p>
<ul>
<li>defineReactive(ob.value, key, val)的意思是给新加的属性添加依赖，以后再直接修改这个新的属性的时候就会触发页面渲染。</li>
<li>ob.dep.notify()这句代码的意思是触发当前的依赖（这里的依赖依然可以理解成渲染函数），所以页面就会进行重新渲染。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
    </div>
</template>
<script>
    export default {
    }
</script>
<style lang="scss" scoped>
</style>