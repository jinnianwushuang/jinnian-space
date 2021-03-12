<!--
 * @Date           : 2020-08-31 16:40:04
 * @FilePath       : /jinnian-space/src/pages/java/module/m4.vue
 * @Description    : 
-->
<template> 
    <div>
       <div> 高级面向对象 </div>
       <pre>
            业务对象类  本身  
            DAO  访问存储数据的数组 或者集合  data access object
            Service  用来 处理业务逻辑 ，服务器内部的 逻辑
            Controller  用来 处理     用户  和网页 的相关 逻辑  
            业务逻辑流程：
            controller 的 addItem 调用 service  的 addItem , service  的 addItem 调用 dao 的 addItem
           与试图打交道的 类 调用 与数据库打交道的类 ，与数据库打交道的类 调用 数据库类

            private  static  ， static 修饰的  静态成员属性 在内存中 所有这个类的实例中共享
             一般 存在于方法区中 
       </pre>
       <div>继承</div>
       <pre>
           继承： 让类鱼类之间产生 父子类关系 ， 子类可以直接使用 父类的非私有的成员  
                  例如 你可以用你爸爸的车 ，但你不能用他的内裤 
                  父类 ： 基类 超类   子类 ： 派生类 
                  public class ZI extends FU { }
            继承好处：复用性，维护性，让类之间产生关系是多态的前台
            继承弊端：继承是侵入性的 ，不灵活 ，子类   必须拥有父类的非私有属性和方法
                      耦合性强   父类中 非私有的东西 不能随便改 随便删除 
            JAVA 只支持 单继承 ，不支持 多继承 ，但是 支持多层继承  
             一个儿子不能 有两个亲爹 ，但是可以 有 爷爷 ， 有十八辈祖宗    
             this  自己的 当前类的  super  父级的   父类的 
             this() 访问本类的构造方法  super()访问父类的构造方法
            子父类同名属性或者方法：    可以通过 this.  读取 自己的 属性方法   ，super. 读取 父级的 属性方法
            
            方法 重写  ， 注解  @Override 检查 是否 正确重写 （必须一模一样）
            <div class="text-red">
                <div>父类的静态方法，个非静态方法 ， 子类必须一摸一样的名字才能重写 </div>
                
                <div>静态方法不能重写，父子类静态方法同名 ，只是子类将父类中的同名方法隐藏起来了。  就近原则</div>
            </div>
            子类 重写 父类 方法 ， 权限必须大于等于 父类 权限 
            java  四个 权限修饰符   private  小于 默认 小于 protected  小于 public 
            private  同一个类中
            默认     同一个包中 子类 无关类
            protected 不同包的子类
            public   不同包的 无关类

            子类的  构造方法 会默认调用 super() ；即便是不写 ，也会默认加上。不然子类没办法拿到继承而来的东西

            其实每一个类  都继承与 Objiect  类 如果没 指定继承则该类的构造方法 默认 继承自 Object 默认调用 super()

            抽象类   abstract
            抽象方法： 将共性的方法 抽取到父类之中后，发现该方法的实现逻辑无法确定，该方法就要可以定义为抽象方法
            抽象类： 如果一个类中 存在 抽象方法 ，那么这个类 就必须 声明为 抽象类
            public  abstract void aa();  
            public  abstract class  A1{}
            public  class A99  extends A1{}
            抽象类 只能被 继承 实现 。 不能创建 实例对象。因为 没有方法体的方法 不能调用。
            抽象类的 子类 必须 重写 父类的  抽象方法 ， 但是 子类也可以把自己变成 抽象类。
            抽象类 不一定有抽象方法， 有抽象方法的类 必定是抽象方法 

            抽象类  体现的是 一种  模板设计模式  
            final 关键字 可以修饰 属性 方法 类名   ，final 修饰的 属性方法 将不能重写 ，类不能  继承 ，一般用于  属性 和方法  禁止重写 
               
                   
       </pre>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>