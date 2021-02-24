<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/module/m3.vue
 * @Description    : 
-->
<template>
    <div>
        <div class="text-h6">基础</div>
       <pre> 
           单个实例对象的 实例在 堆内存中 ，实例的  成员属性在堆内存，
          成员方法 在方法区 ，但是堆内存中存有 成员方法的内存地址
          成员变量： 
          类中方法外的变量 ，有初始默认值 ，堆内存 ，随对象GC 消失
          局部变量：
          类中方法内的变量 ，无初始默认值， 栈内存 ，随着方法的执行完成弹栈消失
          private 权限修饰符 
          私有 保证数据安全 ，需要根基需求提供 set 和 get 方法 获取 和设置 私有 成员属性 
          java 类的 构造方法
          1.方法名称和类名相同，大小写一致
          2.没有返回值类型，连 void 也没有
          3.没有具体的返回值 ，不能 由 return 带回 结果数据

          java 类的 构造方法 可以通过 方法的 重载 通过不同的参数 进行 不同 的 初始化
       </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>