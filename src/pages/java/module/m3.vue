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
       <div>String</div>
       <pre>
         "" 创建的字符串  存在 字符串常量池   （在  堆内存 存储 ） 存在则不再创建
         s1 = "123"  s2 = "123"  s1==s2 结果是true 
         new 创建的 每次都是不同的 内存地址 放在 堆内存中 new 创建的  不可能相等
         字符串的加号拼接 ：系统底层会自动创建一个 stringBuilder 对象 ，
         再调用其append 方法完成拼接 。拼接后，再调用toString 方法 转换为 String 类型
         因此  s1="abc"  s2="ab"  s3=s2+"c"   s1==s3   s3 是变量计算拼接 不是常量拼接  返回  false  
         "abc" == "a" + "b" + "c"  返回 true 原因 ：
          a,b,c 都是常量 java 的 常量优化机制 在编译的时候 就把右侧直接计算了
          equals 方法 比较 值是否相等
       </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>