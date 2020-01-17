<template>
    <div>
   <h2>Vue的diff算法</h2>
<h3>以对象的形式模拟树形结构</h3>
<h3>diff过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的dom打补丁</h3>
<h3>比较新旧节点的时候，只会在同层级进行</h3>
<h3>5种节点比较情况</h3>
<ul>
<li>oldVnode===vnode，引用一致，认为没有变化</li>
<li>新旧节点text不为空，且不相等则将Node.textContent = vnode.text</li>
<li>只有新的节点有子节点则在老节点中添加子节点</li>
<li>新节点没有子节点，老节点有子节点则删除</li>
<li>子节点不为空且不相等则updateChildren</li>

</ul>
<h3>updateChild</h3>
<ul>
<li><p>将旧节点的子节点和新节点的子节点提取出来</p>
</li>
<li><p>新旧节点头尾各有两个指针，变量相互比较，四种比较方式</p>
<ul>
<li>oldS、oldE、S、E两两做sameVnode比较，有四种比较方式，当其中两个能匹配上那么真实dom中的相应节点会移到Vnode相应的位置</li>
<li>匹配成功后，指针往中间移动</li>

</ul>
</li>
<li><p>上一步比较没有匹配，有key的话会用key进行比较</p>
<ul>
<li>根据就节点的key生成一张hash表</li>
<li>新节点的头尾与hash表做匹配判断是都相等</li>
<li>如果匹配成功将就节点匹配的节点移到相应的位置</li>
<li>如果匹配不成功则直接生成新节点插入</li>
<li>如果没有key只会进行四种比较，指针中间的节点就做不到复用了</li>

</ul>
</li>
<li><p>结束条件</p>
<ul>
<li>旧节点的头指针大于尾指针则将多余的新节点根据index添加到dom中</li>
<li>新节点的头指针大于尾指针，那么将旧节点的头尾指针之间的节点删除</li>

</ul>
</li>

</ul>
<h3>sameVnode</h3>
<ul>
<li><p>比较两个节点是否相同</p>
<ul>
<li>key相同</li>
<li>tag（当前节点的标签名）相同</li>
<li>isComment（是否为注释节点）相同</li>
<li>当标签是<input>的时候，type必须相同</li>
<li>是否data（当前节点对应的对象，包含了具体的一些数据信息，是一个VNodeData类型，可以参考VNodeData类型中的数据信息）都有定义</li>

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