<template>
  <div>
    <div>
      <a
        href="https://blog.csdn.net/aSuncat/article/details/88674643"
        target="_blank"
        rel="noopener noreferrer"
        >https://blog.csdn.net/aSuncat/article/details/88674643</a
      >
      <br>
      <a
        href="https://www.cnblogs.com/chenwenhao/p/11258895.html"
        target="_blank"
        rel="noopener noreferrer"
        >https://www.cnblogs.com/chenwenhao/p/11258895.html</a
      >
    </div>
    <div class="htmledit_views">
 
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">1、</span
          ><span style="color:rgb(51,51,51);"
            >v-model是什么？ vue中标签怎么绑定事件？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：</span
        ><span style="color:rgb(51,51,51);"
          >v-model这个指令只能用在表单元素上，可以用他进行双向数据绑定。</span
        ><span style="color:rgb(51,51,51);"
          >&lt;input @click=doLog() /&gt;</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          >2<span style="color:rgb(51,51,51);">mvvm框架是什么？</span
          ><span style="color:rgb(51,51,51);">说说对双向数据绑定的理解？</span
          ><span style="color:rgb(51,51,51);"
            >jquery）的区别是什么？哪些场景适合？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">mvvm</span
        ><span style="color:rgb(51,51,51);">的</span
        ><strong><span style="color:rgb(51,51,51);">m</span></strong
        ><span style="color:rgb(51,51,51);">v经过数据改变后的html、</span
        ><strong><span style="color:rgb(51,51,51);">vm</span></strong
        ><span style="color:rgb(51,51,51);">就是</span
        ><span style="color:rgb(51,51,51);">连接数据和视图，</span
        ><span style="color:rgb(51,51,51);">用来实现双向绑定</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >:一个变了另外一个跟着变了，例如：视图一个绑定了模型的节点有变化，模型对应的值会跟着变</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >vue数据驱动，通过数据来显示视图层而不是节点操作。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >场景：数据操作比较多的场景，更加便捷</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >3、自定义指令</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >vue对象的directive方法里面有两个参数，一个是指令名称，另外一个是函数。组件内定义指令（局部定义指令）：directives</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >bind（绑定事件触发）、inserted(节点插入的时候触发)、update（组件内相关更新）、</span
        ><span style="color:rgb(85,85,85);">componentUpdated</span
        ><span style="color:rgb(85,85,85);">（</span
        ><span style="color:rgb(85,85,85);"
          >被绑定元素所在模板完成一次更新周期时调用</span
        ><span style="color:rgb(85,85,85);">）、</span
        ><span style="color:rgb(85,85,85);">unbind</span
        ><span style="color:rgb(85,85,85);">（</span
        ><span style="color:rgb(85,85,85);"
          >只调用一次，指令与元素解绑时调用</span
        ><span style="color:rgb(85,85,85);">）</span>
      </p>
      <p><span style="color:rgb(51,51,51);">el、binding</span></p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">4、</span
          ><span style="color:rgb(51,51,51);"
            >4种vue当中的指令和它的用法？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：</span
        ><span style="color:rgb(51,51,51);"
          >v-if：判断是否隐藏；v-for：数据循环出来；v-bind:class：绑定一个属性；v-model：实现双向绑定</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);">5、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >vue生命周期的理解？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >/后：
          在beforeCreated阶段，vue实例的挂载元素$el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，$el还没有。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >/后：当data变化时，会触发beforeUpdate和updated方法。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);">6、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);">
            vue 组件</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >答：首先，组件可以提升整个项目的开发效率。能够把页面抽象成多个相对独立的模块，解决了我们传统项目开发：效率低、难维护、复用性等问题。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">使用</span
        ><strong><span style="color:rgb(51,51,51);">Vue</span></strong
        ><span style="color:rgb(51,51,51);">.component</span
        ><span style="color:rgb(51,51,51);"
          >方法注册组件。子组件需要数据，可以在</span
        ><strong><span style="color:rgb(51,51,51);">props</span></strong
        ><span style="color:rgb(51,51,51);"
          >中接受定义。而子组件修改好数据后，想把数据传递给父组件。可以采用</span
        ><strong><span style="color:rgb(51,51,51);">emit</span></strong
        ><span style="color:rgb(51,51,51);">方法。</span>
      </p>
      <p>
        <strong
          >7、<span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >Vue.js内置的指令，用什么开头？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >v-开头的</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong>8、CSS隐藏元素的几种方法？说出他们的区别</strong>
      </p>
      <p style="background:rgb(255,255,255);"></p>
      <p style="background:rgb(255,255,255);"></p>
      <p style="background:rgb(255,255,255);">
        opacity:0 透明度为0，占物理位置
      </p>
      <p style="background:rgb(255,255,255);"></p>
      <p style="background:rgb(255,255,255);">
        9、<strong>CSS清除浮动的几种方法（至少两种）</strong>
      </p>
      <p style="background:rgb(255,255,255);">clear属性的空元素</p>
      <p style="background:rgb(255,255,255);">CSS的overflow属性；</p>
      <p style="background:rgb(255,255,255);">
        CSS的:after伪元素<span style="color:rgb(44,44,44);"></span>；
      </p>
      <p style="background:rgb(255,255,255);">
        <strong>10、例举3种强制类型转换?</strong>
      </p>
      <p style="background:rgb(255,255,255);">parseInt,parseFloat,number</p>
      <h4>
        <strong>11、</strong><span style="color:rgb(51,51,51);">pop</span
        ><span style="color:rgb(51,51,51);">()</span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">push</span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">shift</span
        ><span style="color:rgb(51,51,51);">()</span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">unshift</span
        ><span style="color:rgb(51,51,51);">() </span
        ><span style="color:rgb(51,51,51);">有什么区别</span
        ><span style="color:rgb(51,51,51);">?</span>
      </h4>
      <p style="background:rgb(255,255,255);"></p>
      <p style="background:rgb(255,255,255);"></p>
      <p style="background:rgb(255,255,255);"></p>
      <p>12、<strong>提交表单，有几种方式</strong></p>
      <p>
        <span style="color:rgb(75,75,75);background:rgb(255,255,255);"
          >submit</span
        >提交，<span style="color:rgb(75,75,75);background:rgb(255,255,255);"
          >Ajax提交form表单</span
        >
      </p>
      <p><strong></strong></p>
      <p><strong>13、定义一个div，让其在页面中，垂直居中显示</strong></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p>height:200px;</p>
      <p>margin-left:-250px;</p>
      <p>margin-top:-100px;</p>
      <p>background:red;</p>
      <p>}</p>
      <p></p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">1</span
          ><span style="color:rgb(51,51,51);">4</span
          ><span style="color:rgb(51,51,51);"
            >active-class是哪个组件的属性？嵌套路由怎么定义？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">vue-router模块的router-</span
        ><strong><span style="color:rgb(51,51,51);">link</span></strong
        ><span style="color:rgb(51,51,51);">组件。</span
        ><span style="background:rgb(255,255,255);"
          >children数组来定义子路由</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">15</span
          ><span style="color:rgb(51,51,51);"
            >vue-router的动态路由？怎么获取传过来的动态参数？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >router目录下的index.js文件中，对path属性加上/:</span
        ><span style="color:rgb(0,134,179);">id</span
        ><span style="color:rgb(51,51,51);">router对象的params.</span
        ><span style="color:rgb(0,134,179);">id</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">16</span
          ><span style="color:rgb(51,51,51);"
            >vue-router有哪几种导航钩子？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">router.beforeEach(</span
        ><strong><span style="color:rgb(51,51,51);">to</span></strong
        ><span style="color:rgb(51,51,51);">,</span
        ><strong><span style="color:rgb(51,51,51);">from</span></strong
        ><span style="color:rgb(51,51,51);">,</span
        ><strong><span style="color:rgb(51,51,51);">next</span></strong
        ><span style="color:rgb(51,51,51);">)，</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >作用：跳转前进行判断拦截。第二种：组件内的钩子；第三种：单独路由独享组件</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">1</span
          ><span style="color:rgb(51,51,51);">7</span
          ><span style="color:rgb(51,51,51);"
            >vue-router是什么？它有哪些组件？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >vue用来写路由一个插件。router-link、router-</span
        ><strong><span style="color:rgb(51,51,51);">view</span></strong>
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);">18、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >vuex的？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">vuex可以理解为一种</span
        ><span style="color:rgb(51,51,51);">状态管理的</span
        ><span style="color:rgb(51,51,51);">开发模式或</span
        ><span style="color:rgb(51,51,51);">者</span
        ><span style="color:rgb(51,51,51);">框架</span
        ><span style="color:rgb(51,51,51);">，</span
        ><span style="color:rgb(85,85,85);background:rgb(255,255,255);"
          >data中的属性需要共享给其他vue组件使用</span
        ><span style="color:rgb(85,85,85);background:rgb(255,255,255);"></span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);"
          ><span style="font-family:'华文仿宋';">为</span>state</span
        ><span style="color:rgb(51,51,51);"
          >store中； 改变状态的方式是提交mutations，这是个同步的事物；
          异步逻辑应该封装在action中</span
        ><span style="color:rgb(51,51,51);">。</span>
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);">19、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >vuex有哪几种属性？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"> State、 Getter、Mutation 、</span
        ><strong><span style="color:rgb(51,51,51);">Action</span></strong
        ><span style="color:rgb(51,51,51);"></span
        ><strong><span style="color:rgb(51,51,51);">Module</span></strong>
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(238,238,238);"
          >state =&gt; 基本数据</span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);">(</span
        ><span style="color:rgb(51,51,51);">数据源存放地</span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);">)</span
        ><span style="color:rgb(0,0,0);"><br /></span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"
          >getters =&gt; 从基本数据派生</span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"></span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"></span
        ><span style="color:rgb(0,0,0);"><br /></span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"></span
        ><span style="color:rgb(0,0,0);"><br /></span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"></span
        ><span style="color:rgb(0,0,0);"><br /></span
        ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"
          >modules =&gt; 模块化Vuex</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(238,238,238);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(238,238,238);"
            >20、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >5、Vue.js中ajax请求代码应该写在组件的methods中还是vuex的actions中？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">vuex 的</span
        ><strong><span style="color:rgb(51,51,51);">state</span></strong
        ><span style="color:rgb(51,51,51);">里。</span>
      </p>
      <p><span style="color:rgb(51,51,51);">action里，方便复用</span></p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >21</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >axios是什么？怎么使用？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">npm install axios -</span
        ><span style="color:rgb(51,51,51);">-save</span
        ><span style="color:rgb(51,51,51);">装好，</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);">js中使用</span
        ><strong><span style="color:rgb(51,51,51);">import</span></strong
        ><span style="color:rgb(51,51,51);">.</span
        ><span style="color:rgb(0,134,179);">get</span
        ><span style="color:rgb(51,51,51);"
          >.post。返回在.then函数中如果成功，失败则是在.</span
        ><span style="color:rgb(0,134,179);">catch</span
        ><span style="color:rgb(51,51,51);">函数中</span>
      </p>
      <p>
        <strong><span style="color:rgb(51,51,51);"></span></strong>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">22</span
          ><span style="color:rgb(51,51,51);"
            >axios+tp5进阶中，调用axios.post(‘api/user’)是进行的什么操作？axios.put(‘api/user/8′)呢？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：添加用户操作，更新操作。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">23</span
          ><span style="color:rgb(51,51,51);"
            >RESTful API？怎么使用?</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >api的标准，无状态请求。请求的路由地址是固定的，</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >tp5则先路由配置中把资源路由配置好。标准有：</span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">.post</span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">.put</span
        ><span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">.delete</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">24</span
          ><span style="color:rgb(51,51,51);"
            >vuex是什么？怎么使用？哪种功能场景使用它？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >vue框架中状态管理。在main.js引入store，注入。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">store</span
        ><span style="color:rgb(51,51,51);">.js</span
        ><span style="color:rgb(51,51,51);">….. </span
        ><strong><span style="color:rgb(51,51,51);">export</span></strong
        ><span style="color:rgb(51,51,51);"></span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">25</span
          ><span style="color:rgb(51,51,51);">、</span
          ><span style="color:rgb(51,51,51);">webpack?</span
          ><span style="color:rgb(51,51,51);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：</span
        ><span style="color:rgb(47,47,47);background:rgb(255,255,255);"
          >WebPack可以看做是</span
        ><strong
          ><span
            style="color:rgb(47,47,47);background:rgb(255,255,255);"
          ></span></strong
        ><span style="color:rgb(47,47,47);background:rgb(255,255,255);"
          >JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">.vue文件的一个加载器，</span
        ><span style="color:rgb(51,51,51);">将</span
        ><span style="color:rgb(51,51,51);">template/</span
        ><strong><span style="color:rgb(51,51,51);">js</span></strong
        ><span style="color:rgb(51,51,51);">/style转换成</span
        ><strong><span style="color:rgb(51,51,51);">js</span></strong
        ><span style="color:rgb(51,51,51);">模块。</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);">用途：</span
        ><strong><span style="color:rgb(51,51,51);">js</span></strong
        ><span style="color:rgb(51,51,51);"
          >es6、style样式可以scss或less、template可以加jade等</span
        >
      </p>
      <p>
        <strong><span style="color:rgb(51,51,51);"></span></strong>
      </p>
      <p>
        <strong><span style="color:rgb(51,51,51);"></span></strong>
      </p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);"
            >26、说几个ajax返回error的原因</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">1、</span
        ><span style="color:rgb(75,75,75);background:rgb(255,255,255);"></span
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >dataType</span
        ><span style="color:rgb(75,75,75);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(75,75,75);"
          >dataType类型和前台写的不一致会跳入error</span
        >
      </p>
      <p>
        <span style="color:rgb(75,75,75);"
          >jquery1.4之后对json的格式要求非常严格，json格式错误也会跳入error</span
        >
      </p>
      <p>
        <span style="color:rgb(75,75,75);">2、</span
        ><span style="color:rgb(75,75,75);">data不能不写</span>
      </p>
      <p>
        <span style="color:rgb(75,75,75);"
          >data为空也一定要传"{}"；不然返回的是xml格式的。</span
        >
      </p>
      <p>
        <span style="color:rgb(75,75,75);">3</span
        ><span style="color:rgb(75,75,75);">.</span
        ><span style="color:rgb(75,75,75);">、</span
        ><span style="color:rgb(75,75,75);">传递的参数</span>
      </p>
      <p><span style="color:rgb(75,75,75);">ajax支持的编码格式</span></p>
      <p>
        <span style="color:rgb(75,75,75);">4、</span
        ><span style="color:rgb(75,75,75);"></span>
      </p>
      <p><span style="color:rgb(75,75,75);">路径不能有中文</span></p>
      <p>
        <span style="color:rgb(75,75,75);background:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(75,75,75);">27、</span
          ><span style="color:rgb(0,0,0);">XMLHttpRequest</span
          ><span style="color:rgb(75,75,75);"
            >XMLHttpRequest.readyState: 状态码的意思</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);"
          >0 － （未初始化）还没有调用send()方法</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);"
          >1 － （载入）已调用send()方法，正在发送请求</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);"
          >2 － （载入完成）send()方法执行完成，已经接收到全部响应内容</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);">3 － （交互）正在解析响应内容</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);"
          >4 － （完成）响应内容解析完成，可以在客户端调用了</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(75,75,75);">28、</span
          ><span style="color:rgb(51,51,51);"
            >vue.cli项目中src目录每个文件夹和文件的用法？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：</span
        ><strong><span style="color:rgb(51,51,51);">assets</span></strong
        ><span style="color:rgb(51,51,51);">文件夹是放静态资源；</span
        ><strong><span style="color:rgb(51,51,51);">components</span></strong
        ><span style="color:rgb(51,51,51);">是放组件；</span
        ><strong><span style="color:rgb(51,51,51);">router</span></strong
        ><span style="color:rgb(51,51,51);">;</span
        ><strong><span style="color:rgb(51,51,51);"></span></strong
        ><span style="color:rgb(51,51,51);">.vue</span
        ><span style="color:rgb(51,51,51);">是一个应用主组件；</span
        ><strong><span style="color:rgb(51,51,51);">main</span></strong
        ><span style="color:rgb(51,51,51);">.js</span
        ><span style="color:rgb(51,51,51);">是入口文件</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(75,75,75);">29、</span
          ><span style="color:rgb(51,51,51);"
            >vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >components目录新建你的组件文件（</span
        ><strong
          ><span style="color:rgb(51,51,51);"
            >smithButton.vue），script一定要export
          </span></strong
        ><span style="color:rgb(51,51,51);">default {</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >第二步：在需要用的页面（组件）中导入：</span
        ><strong><span style="color:rgb(153,153,153);">import</span></strong
        ><span style="color:rgb(51,51,51);"></span
        ><strong><span style="color:rgb(51,51,51);">smithButton </span></strong
        ><span style="color:rgb(51,51,51);">from ‘../components/</span
        ><strong
          ><span style="color:rgb(51,51,51);">smithButton.vue’</span></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >vue的子组件的components属性上面,components:{</span
        ><strong><span style="color:rgb(51,51,51);">smithButton}</span></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);">template视图view中使用，&lt;</span
        ><strong
          ><span style="color:rgb(51,51,51);">smith-button&gt; </span></strong
        ><span style="color:rgb(51,51,51);"></span
        ><strong
          ><span style="color:rgb(51,51,51);">smith-button&gt;</span></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">问题有：</span
        ><strong
          ><span style="color:rgb(51,51,51);"
            >smithButton命名，使用的时候则smith-button。</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(75,75,75);">30、</span
          ><span style="color:rgb(51,51,51);"
            >element.ui吗？说下它其中两个组件的使用方法？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：使用过</span
        ><span style="color:rgb(51,51,51);">；</span
        ><span style="color:rgb(51,51,51);">用过一个布局的，它是由</span
        ><span style="color:rgb(0,128,128);">24</span
        ><span style="color:rgb(51,51,51);">:span后面带的数字它占</span
        ><span style="color:rgb(0,128,128);">24</span
        ><span style="color:rgb(51,51,51);"
          >:offset是它的间距，后面也是跟数字，也是从</span
        ><span style="color:rgb(0,128,128);">24</span
        ><span style="color:rgb(51,51,51);">份里面取的。</span>
      </p>
      <p>
        <strong><span style="color:rgb(51,51,51);">input</span></strong
        ><span style="color:rgb(51,51,51);">el-</span
        ><strong><span style="color:rgb(51,51,51);">input</span></strong
        ><span style="color:rgb(51,51,51);">，后面</span
        ><strong><span style="color:rgb(51,51,51);">type</span></strong
        ><span style="color:rgb(51,51,51);"
          >跟上一个属性就是显示不同按钮的类型，有默认的</span
        ><strong><span style="color:rgb(51,51,51);">default</span></strong
        ><span style="color:rgb(51,51,51);"
          >success（成功的）、warning（警告）、danger（危险）、info（）、primary（）</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);">31、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >vue框架？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">答：</span
        ><span style="color:rgb(0,128,128);">1</span
        ><span style="color:rgb(51,51,51);">、数据信息量比较多的。</span>
      </p>
      <p>
        <span style="color:rgb(0,128,128);">2</span
        ><span style="color:rgb(51,51,51);"
          >web和app应用多端共用一套界面的项目，因为使用vue.cli+webpack后的前端目录，非常有利于项目的跨平台部署。</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(75,75,75);">32、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >PC端项目你会在哪些场景使用Vue框架？</span
          ><span style="color:rgb(51,51,51);"
            >vue为什么解决这些问题呢？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">dom操作</span
        ><span style="color:rgb(51,51,51);"
          >js和html都会有列表的html布局，迭代很困难。再一个dom节点的大面积添加会影响性能。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);"
          >v-for在view层一个地方遍历数据即可</span
        ><span style="color:rgb(51,51,51);">。</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);">vue通过Virtual Dom就是在</span
        ><span style="color:rgb(51,51,51);"
          >js中模拟DOM对象树来优化DOM操作。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(75,75,75);"></span></strong>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(75,75,75);"
            >33、call（） 和 apply（） 的作用和区别？</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(75,75,75);">答：</span></strong
        ><span style="color:rgb(51,51,51);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">blackCat.say.call(whiteDog)</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(51,51,51);"></span></strong
        ><span style="color:rgb(51,51,51);">call(thisObj，arg1,arg2)</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"></span
        ><span style="color:rgb(51,51,51);">A</span
        ><span style="color:rgb(51,51,51);">pply(thisObj，[arg1,arg2])</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);"
            >34、举例说ES6有哪些的新功能？</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(75,75,75);"></span></strong>
      </p>
      <p>
        <strong
          ><span style="color:rgb(75,75,75);">35</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
          ><span style="color:rgb(44,44,44);background:rgb(255,255,255);"
            >ajax请求的时候get 和post方式的区别</span
          ></strong
        >
      </p>
      <p>
        <span style="background:rgb(255,255,255);">G</span
        ><span style="background:rgb(255,255,255);">et 一般用于获取信息</span>
      </p>
      <p><span style="background:rgb(255,255,255);">URL传递参数</span></p>
      <p><span style="background:rgb(255,255,255);">2000字符</span></p>
      <p>
        <span style="background:rgb(255,255,255);">P</span
        ><span style="background:rgb(255,255,255);"
          >ost 一般用于修改服务器资源（新建，或者 修改）</span
        >
      </p>
      <p><span style="background:rgb(255,255,255);"></span></p>
      <p><span style="background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(75,75,75);">36、</span
          ><span style="color:rgb(44,44,44);background:rgb(255,255,255);"
            >JavaScript中如何检测一个变量是一个String类型？请写出函数实现
          </span></strong
        >
      </p>
      <p>
        <span style="color:rgb(44,44,44);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(44,44,44);background:rgb(255,255,255);"
          >return typeof(obj) == </span
        ><span style="color:rgb(44,44,44);background:rgb(255,255,255);">“</span
        ><span style="color:rgb(44,44,44);background:rgb(255,255,255);"
          >string</span
        ><span style="color:rgb(44,44,44);background:rgb(255,255,255);">”</span
        ><span style="color:rgb(44,44,44);background:rgb(255,255,255);"
          >;
        </span>
      </p>
      <p>
        <span style="color:rgb(44,44,44);background:rgb(255,255,255);">}</span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(44,44,44);background:rgb(255,255,255);"
            >37、</span
          ><span style="background:rgb(255,255,255);"
            >JSON 的了解？</span
          ></strong
        ><br /><span style="background:rgb(255,255,255);"
          >JSON(JavaScript Object Notation)
          是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单,
          易于读写, 占用带宽小。</span
        ><br /><span style="background:rgb(255,255,255);"
          >{'age':'12', 'name':'back'}</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(44,44,44);">38</span
          >如何阻止事件冒泡和默认事件</strong
        >
      </p>
      <p>
        <strong>阻止事件冒泡：</strong
        ><span style="background:rgb(248,248,255);"
          >event.stopPropagation();
        </span>
      </p>
      <p>
        <span style="background:rgb(248,248,255);"></span
        ><strong>默认事件：</strong
        ><span style="background:rgb(248,248,255);"
          >event.preventDefault();</span
        >
      </p>
      <p>
        <span style="background:rgb(248,248,255);"></span
        ><strong
          ><span style="background:rgb(248,248,255);">return</span
          ><span style="background:rgb(248,248,255);"></span
          ><span style="background:rgb(248,248,255);">false</span></strong
        ><span style="background:rgb(248,248,255);"></span>
      </p>
      <p><span style="background:rgb(248,248,255);"></span></p>
      <p align="justify">
        <strong
          ><span style="color:rgb(44,44,44);background:rgb(255,255,255);"
            >39、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >A</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >jax数据格式</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(253,252,248);"
          >HTML、XML 或 JSON</span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span></p>
      <p align="justify">
        <strong
          ><span style="color:rgb(75,75,75);">40、</span
          >window.load和$(document).ready()的区别</strong
        >
      </p>
      <p></p>
      <p>Dom就绪就可以访问，但并不意味着，元素所有的关联文件已经下载完毕。</p>
      <p></p>
      <p>
        <strong>41、<span style="color:rgb(44,44,44);">css定义</span></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >@media </span
        ><span style="color:rgb(44,44,44);">screen</span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(44,44,44);">@media</span
        ><span style="color:rgb(44,44,44);"></span
        ><span style="color:rgb(44,44,44);"
          >(min-width:768px) and (max-width:979px)</span
        >
      </p>
      <p>
        <strong><span style="color:rgb(44,44,44);"></span></strong>
      </p>
      <p>42<strong>$this 和this区别</strong></p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >this，表示当前的上下文对象是一个html对象，可以调用html对象所拥有的属性和方法。</span
        ><span style="color:rgb(0,0,0);"><br /></span
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >$(this),代表的上下文对象是一个jquery的上下文对象，可以调用jquery的方法和属性值。</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <h4 style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(0,0,0);">43、</span><br /></strong
        >CSS<br />JS<br />
        CSS 表达式（Expression）<br />
        JavaScript 和 CSS<br />
        JavaScript 和 CSS<br />
        &lt;link&gt; 代替 @import<br /><br />DOM访问
      </h4>
      <p style="background:rgb(255,255,255);">
        优化图像css定位，图片全部保存在一张PNG8格式上）<br />favicon.ico要小而且可缓存
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p style="background:rgb(255,255,255);">
        <strong>44、ajax请求时，如何解析json数据</strong>
      </p>
      <p>eval parse,鉴于安全性考虑 使用parse更靠谱</p>
      <p>
        <span style="background:rgb(255,255,255);"
          >JSON.parse(jsonstr); //可以将JSON字符串反序列化成JSON对象</span
        >
      </p>
      <p><span style="background:rgb(255,255,255);"></span><strong></strong></p>
      <p></p>
      <h4>
        <strong
          >45、<span style="color:rgb(44,48,51);"
            >CSS实现三栏自适应布局（两边宽度固定，中间自适应）</span
          ></strong
        >
      </h4>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(153,51,0);"></span
        ><strong><span style="color:rgb(153,51,0);">&lt;div</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">id</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,255);">"box"</span
        ><strong><span style="color:rgb(153,51,0);">&gt;</span></strong
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><strong><span style="color:rgb(153,51,0);">&lt;div</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">id</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,255);">"left_box"</span
        ><strong
          ><span style="color:rgb(153,51,0);">&gt;&lt;/div&gt;</span></strong
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><strong><span style="color:rgb(153,51,0);">&lt;div</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">id</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,255);">"center_box"</span
        ><strong
          ><span style="color:rgb(153,51,0);">&gt;&lt;/div&gt;</span></strong
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><strong><span style="color:rgb(153,51,0);">&lt;div</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">id</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,255);">"right_box"</span
        ><strong
          ><span style="color:rgb(153,51,0);">&gt;&lt;/div&gt;</span></strong
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><strong><span style="color:rgb(153,51,0);">&lt;/div&gt;</span></strong
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(92,92,92);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">#box</span
        ><span style="color:rgb(0,0,0);">{</span
        ><strong><span style="color:rgb(0,102,153);">width</span></strong
        ><span style="color:rgb(0,0,0);">:</span
        ><span style="color:rgb(0,0,0);">100%</span
        ><span style="color:rgb(0,0,0);">;</span
        ><strong><span style="color:rgb(255,0,0);">display</span></strong
        ><span style="color:rgb(255,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><strong><span style="color:rgb(0,102,153);">height</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">100px</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">#left</span
        ><span style="color:rgb(0,0,0);">_box,</span
        ><span style="color:rgb(0,0,0);">#right</span
        ><span style="color:rgb(0,0,0);">_box{</span
        ><strong><span style="color:rgb(0,102,153);">width</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">200px</span
        ><span style="color:rgb(0,0,0);">;</span
        ><strong><span style="color:rgb(0,102,153);">height</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">100px</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">#center</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">flex:</span
        ><span style="color:rgb(255,0,0);">1</span
        ><span style="color:rgb(255,0,0);">;</span
        ><span style="color:rgb(0,0,0);"></span
        ><strong><span style="color:rgb(0,102,153);">height</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);">100px</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <h4>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >46、</span
          ><span style="color:rgb(44,48,51);"
            >CSS3中各个浏览器内核兼容的设置</span
          ></strong
        >
      </h4>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(255,0,0);"></span
        ><span style="color:rgb(255,0,0);">-moz-</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(255,0,0);"></span
        ><span style="color:rgb(255,0,0);">-ms-</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(255,0,0);"></span
        ><span style="color:rgb(255,0,0);">-webkit-</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(255,0,0);"></span
        ><span style="color:rgb(255,0,0);">-o-</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        IE9以下的浏览器不支持HTML5标签，所以需要导入一个html5.js补丁，原理是通过JS来生成HTML5新标签对象。
      </p>
      <p>
        CSS都会用media query（响应式设计），IE8以下的浏览器不支持media
        query，这会导致@media
        声明的CSS不能生效，因此要导入一个css3-mediaqueries.js补丁。
      </p>
      <p>如下：</p>
      <p><span style="color:rgb(255,0,0);">&lt;!--[if lte IE 8]&gt; </span></p>
      <p><span style="color:rgb(255,0,0);"></span></p>
      <p><span style="color:rgb(255,0,0);"></span></p>
      <p><span style="color:rgb(255,0,0);"></span></p>
      <p><span style="color:rgb(255,0,0);">&lt;![endif]--&gt;</span></p>
      <p>
        /*
        因为条件注释只对IE10以下版本有效（IE11已经取消支持），所以在其他现代浏览器里面会自动忽略，不会加载，因此不会有性能问题
        */
      </p>
      <p>
        /*
        因为IE9以下浏览器不支持CSS3，IE9支持一部分，因此不能显示一些CSS3的过渡效果，对此有两种办法，一种是忽略，也就是降级或者是差异化设计。
      </p>
      <p>
        jquery的动画替代，引入方法可以是条件注释，也可以通过检测Navigator来判断IE版本
        */
      </p>
      <h4 align="justify" style="background:rgb(255,255,255);">
        <strong
          ><br />47、<span style="color:rgb(51,51,51);"
            >什么是层叠顺序</span
          ></strong
        >
      </h4>
      <p></p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(51,51,51);background:rgb(248,248,248);"
          >border</span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);">/</span
        ><span style="color:rgb(51,51,51);background:rgb(248,248,248);"
          >background</span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><strong>48、三角形的绘制</strong></p>
      <p><strong></strong></p>
      <p style="background:rgb(221,237,251);">
        <br />#triangle-up {<br /><br /><br /><br /><br /><br />}
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p style="background:rgb(255,255,255);">
        <strong>49、CSS3有哪些新特性？</strong>
      </p>
      <p style="background:rgb(255,255,255);">
        CSS3实现圆角（border-radius:8px），阴影（box-shadow:10px），<br />text-shadow），线性渐变（gradient），变换（transform）
      </p>
      <p style="background:rgb(255,255,255);">
        Transform： rotate(9deg) //旋转
      </p>
      <p style="background:rgb(255,255,255);">scale(0.85,0.90) //缩放</p>
      <p style="background:rgb(255,255,255);">translate(0px,-30px) //定位</p>
      <p style="background:rgb(255,255,255);">skew(-9deg,0deg) //倾斜</p>
      <p style="background:rgb(255,255,255);"></p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(0,0,0);">50、</span
          ><span style="color:rgb(0,0,0);">什么是响应式设计？</span></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"
          >它是关于网页制作的过程中让不同的设备有不同的尺寸和不同的功能。响应式设计是让所有的人能在这些设备上让网站运行正常</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >51、写一段css3动画，在5s内，div背景色从red变为blue</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);">div</span>
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);">{</span>
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >width:100px;</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >height:100px;</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >background:red;</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >animation:myfirst 5s;</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);">}</span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >@keyframes myfirst</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);">{</span>
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >from {background:red;}</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >to {background:yellow;}</span
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);">}</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p align="justify"><strong>52、Bootstrap的特性</strong></p>
      <p>响应式设计</p>
      <p>栅格布局</p>
      <p>完整的类库</p>
      <p>jQuery插件</p>
      <p><strong>html5和css3,所以对浏览器有要求，IE必须9以上。</strong></p>
      <p><strong></strong></p>
      <p align="justify"><strong>53、什么是boostrap</strong></p>
      <p>
        Bootstrap是基于html、css、javascript的前端框架，为实现应用程序迅速开发的一套前端框架包
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(0,0,0);">54</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><strong
          ><span style="color:rgb(34,34,34);"
            >div+css的布局较table布局有什么优点？</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(34,34,34);"> css文件。</span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);"
          >页面加载速度更快、结构化清晰、页面显示简洁。</span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);">表现与结构相分离。</span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);"
          >seo）搜索引擎更友好，排名更容易靠前。</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">55、</span
        ><strong
          ><span style="color:rgb(34,34,34);"
            >一个页面上有大量的图片（大型电商网站），加载很慢，你有哪些方法优化这些图片的加载，给用户更好的体验。</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(34,34,34);">1、</span
        ><span style="color:rgb(34,34,34);"
          >图片懒加载，在页面上的未可视区域可以添加一个滚动条事件，判断图片位置与浏览器顶端的距离与页面的距离，如果前者小于后者，优先加载。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(34,34,34);">2、</span
        ><span style="color:rgb(34,34,34);"
          >如果为幻灯片、相册等，可以使用图片预加载技术，将当前展示图片的前一张和后一张优先下载。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(34,34,34);">3、</span
        ><span style="color:rgb(34,34,34);"
          >css图片，可以使用CSSsprite，SVGsprite，Iconfont、Base64等技术。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(34,34,34);">4、</span
        ><span style="color:rgb(34,34,34);"
          >如果图片过大，可以使用特殊编码的图片，加载时会先加载一张压缩的特别厉害的缩略图，以提高用户体验。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(34,34,34);">5、</span
        ><span style="color:rgb(34,34,34);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(0,0,0);">55</span></strong
        ><span style="color:rgb(0,0,0);"></span
        ><strong
          ><span style="color:rgb(0,0,0);">CSS3</span
          ><span style="color:rgb(0,0,0);">新增伪类有那些？</span></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);">
          p 元素</span
        ><span style="color:rgb(0,0,0);">。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);">
          p 元素</span
        ><span style="color:rgb(0,0,0);">。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);">
          p 元素</span
        ><span style="color:rgb(0,0,0);">。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">:checked，单选框或复选框被选中。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(0,0,0);">56、</span
          ><span style="color:rgb(0,0,0);"
            >Cookie, LocalStorage 与 SessionStorage</span
          ></strong
        ><span style="color:rgb(0,0,0);">三者的异同</span>
      </p>
      <table border="1" cellspacing="0">
        <tbody>
          <tr>
            <td style="background:rgb(241,241,241);">
              <p align="center">
                <strong
                  ><span style="color:rgb(102,102,102);">特性</span></strong
                >
              </p>
            </td>
            <td style="background:rgb(241,241,241);">
              <p align="center">
                <strong
                  ><span style="color:rgb(102,102,102);">Cookie</span></strong
                >
              </p>
            </td>
            <td style="background:rgb(241,241,241);">
              <p align="center">
                <strong
                  ><span style="color:rgb(102,102,102);"
                    >localStorage</span
                  ></strong
                >
              </p>
            </td>
            <td style="background:rgb(241,241,241);">
              <p align="center">
                <strong
                  ><span style="color:rgb(102,102,102);"
                    >sessionStorage</span
                  ></strong
                >
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(255,255,255);">
              <p><span style="color:rgb(102,102,102);">数据的生命期</span></p>
            </td>
            <td style="background:rgb(255,255,255);">
              <p>
                <span style="color:rgb(102,102,102);"
                  >一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效</span
                >
              </p>
            </td>
            <td style="background:rgb(255,255,255);">
              <p>
                <span style="color:rgb(102,102,102);"
                  >除非被清除，否则永久保存</span
                >
              </p>
            </td>
            <td style="background:rgb(255,255,255);">
              <p>
                <span style="color:rgb(102,102,102);"
                  >仅在当前会话下有效，关闭页面或浏览器后被清除</span
                >
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p><span style="color:rgb(102,102,102);">存放数据大小</span></p>
            </td>
            <td>
              <p><span style="color:rgb(102,102,102);">4K左右</span></p>
            </td>
            <td width="342" colspan="2">
              <p><span style="color:rgb(102,102,102);">一般为5MB</span></p>
            </td>
          </tr>
          <tr>
            <td style="background:rgb(255,255,255);">
              <p><span style="color:rgb(102,102,102);">与服务器端通信</span></p>
            </td>
            <td style="background:rgb(255,255,255);">
              <p>
                <span style="color:rgb(102,102,102);"
                  >每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题</span
                >
              </p>
            </td>
            <td width="342" colspan="2" style="background:rgb(255,255,255);">
              <p>
                <span style="color:rgb(102,102,102);"
                  >仅在客户端（即浏览器）中保存，不参与和服务器的通信</span
                >
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);">57、</span
          ><span style="color:rgb(75,75,75);"
            >高度坍塌产生的原因？如何解决？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(75,75,75);background:rgb(255,255,255);"></span
        ><span style="color:rgb(75,75,75);"><br /></span
        ><span style="color:rgb(75,75,75);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(75,75,75);background:rgb(255,255,255);"
          >overflow: hidden;</span
        >
      </p>
      <p>
        <span style="color:rgb(75,75,75);background:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(0,0,0);">58、http状态码</span></strong>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">200 - 请求成功</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >301 - 资源（网页等）被永久转移到其它URL</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >404 - 请求的资源（网页等）不存在</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">500 - 内部服务器错误</span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><strong>59、px和em，rem的区别</strong></p>
      <p>
        px是一个绝对字体大小，<span
          style="color:rgb(68,68,68);background:rgb(255,255,255);"
          >em是根据其父元素的字体大小来设置</span
        >1em=16px。那么12px=0.75em,
        10px=0.625em，但是用em计算相对复杂；CSS3提供了rem，它也是个相对单位，<span
          style="color:rgb(68,68,68);background:rgb(255,255,255);"
          >rem只相对跟节点&lt;html&gt;计算</span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">16</span
        ><span style="color:rgb(0,0,0);">=</span
        ><span style="color:rgb(0,0,255);">62</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(248,248,248);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(255,0,0);">10</span
        ><span style="color:rgb(0,0,0);">=</span
        ><span style="color:rgb(0,0,255);">1</span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,0,0);"></span>
      </p>
      <p><strong></strong></p>
      <p><strong></strong></p>
      <p><strong>60、div垂直居中</strong></p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);">&lt;</span
        ><span style="color:rgb(86,156,214);">style</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">type</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"text/css"</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">rel</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"stylesheet"</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(215,186,125);">.table</span
        ><span style="color:rgb(212,212,212);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">display</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(206,145,120);">table</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">margin</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(181,206,168);">5px</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">width</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(181,206,168);">500px</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">height</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(181,206,168);">300px</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">background-color</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(206,145,120);">#ccc</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(215,186,125);">.cell</span
        ><span style="color:rgb(212,212,212);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">display</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(206,145,120);">table-cell</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">padding</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(181,206,168);">10px</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">vertical-align</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(206,145,120);">middle</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(96,139,78);"
          >/*该属性是定义行内元素垂直对齐的，只有行内元素会生效。在表单元格中，这个属性会设置单元格框中的单元格内容的对齐方式。*/</span
        >
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;/</span
        ><span style="color:rgb(86,156,214);">style</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;</span
        ><span style="color:rgb(86,156,214);">div</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">class</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"table"</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;</span
        ><span style="color:rgb(86,156,214);">div</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">class</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"cell"</span
        ><span style="color:rgb(128,128,128);">&gt;</span
        ><span style="color:rgb(212,212,212);"
          >内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</span
        ><span style="color:rgb(128,128,128);">&lt;/</span
        ><span style="color:rgb(86,156,214);">div</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;/</span
        ><span style="color:rgb(86,156,214);">div</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p><strong></strong></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="background:rgb(255,255,255);">61、</span
          ><span style="background:rgb(255,255,255);"
            >html5有哪些新特性？如何区分 HTML 和 HTML5？</span
          ></strong
        ><span style="background:rgb(255,255,255);"></span><br /><span
          style="background:rgb(255,255,255);"
          >HTML5 现在已经不是 SGML
          的子集，主要是关于图像，位置，存储，多任务等功能的增加。</span
        ><br /><span style="background:rgb(255,255,255);">(1)绘画 canvas;</span
        ><br /><span style="background:rgb(255,255,255);"
          >(2)用于媒介回放的 video 和 audio 元素;</span
        ><br /><span style="background:rgb(255,255,255);"
          >(3)本地离线存储 localStorage
          长期存储数据，浏览器关闭后数据不丢失;</span
        ><br /><span style="background:rgb(255,255,255);"
          >(4)sessionStorage 的数据在浏览器关闭后自动删除;</span
        ><br /><span style="background:rgb(255,255,255);"
          >(5)语意化更好的内容元素，比如
          article、footer、header、nav、section;</span
        ><br /><span style="background:rgb(255,255,255);"
          >(6)表单控件，calendar、date、time、email、url、search;</span
        >
      </p>
      <p>
        区别：<strong
          ><span style="background:rgb(255,255,255);">&lt;!DOCTYPE html</span
          ><span style="background:rgb(255,255,255);">&gt;</span></strong
        >
      </p>
      <p>
        <strong><span style="background:rgb(255,255,255);"></span></strong>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          >62、<span style="color:rgb(44,44,44);"
            >CSS选择符CSS选择符有哪些？</span
          ></strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(57,57,57);background:rgb(250,247,239);"></span
        ><span style="color:rgb(57,57,57);background:rgb(250,247,239);"></span
        ><span style="color:rgb(57,57,57);background:rgb(250,247,239);"></span>
      </p>
      <p align="justify" style="background:rgb(255,255,255);"></p>
      <p>
        <strong
          ><span style="background:rgb(255,255,255);">63、</span
          >如何消除一个数组里面重复的元素？</strong
        >
      </p>
      <table border="0" cellspacing="2">
        <tbody>
          <tr>
            <td>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </td>
            <td>
              <p>// 方法一：</p>
              <p>var arr1 =[1,2,2,2,3,3,3,4,5,6],</p>
              <p>var arr2 = [];</p>
              <p>var len = arr1.length;</p>
              <p>for(var i = 0;i&lt;len; i++){</p>
              <p></p>
              <p></p>
              <p></p>
              <p>}</p>
              <p>document.write(arr2); // 1,2,3,4,5,6</p>
              <p></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p style="background:rgb(255,255,255);">
        <strong>64、<span style="color:rgb(44,44,44);"></span></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >js中有六种数据类型，包括五种基本数据类型（Number,String,Boolean,Undefined,Null）,和一种复杂数据类型（Object）。</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >65、</span
          >ajax的优点</strong
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">1</span
        ><span style="color:rgb(0,0,0);"
          >、最大的一点是页面无刷新，在页面内与服务器通信，给用户的体验非常好。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">2</span
        ><span style="color:rgb(0,0,0);"
          >、使用异步方式与服务器通信，不需要打断用户的操作，具有更加迅速的响应能力。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">3</span
        ><span style="color:rgb(0,0,0);"
          >、可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，</span
        ><span style="color:rgb(0,0,0);">ajax</span
        ><span style="color:rgb(0,0,0);">的原则是</span
        ><span style="color:rgb(0,0,0);">“</span
        ><span style="color:rgb(0,0,0);">按需取数据</span
        ><span style="color:rgb(0,0,0);">”</span
        ><span style="color:rgb(0,0,0);"
          >，可以最大程度的减少冗余请求，和响应对服务器造成的负担。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >66、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >XMLhttprequest对象</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >ajax工作原理、核心思想）</span
          ></strong
        ><span style="color:rgb(51,51,51);"><br /></span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >Ajax的核心是JavaScript对象XmlHttpRequest。它是一种支持异步请求的技术。简而言之，XmlHttpRequest使您可以使用JavaScript向服务器提出请求并处理响应，而不阻塞用户。通过XMLHttpRequest对象，Web开发人员可以在页面加载以后进行页面的局部更新。</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >67、npm是什么？
          </span></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >NPM是随同NodeJS一起安装的包管理工具</span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >NPM服务器下载别人编写的第三方包到本地使用</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);">B</span
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >ower用法相同</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >68、css省略号怎么写</span
          ></strong
        >
      </p>
      <p><span style="color:rgb(75,75,75);">单行</span></p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(75,75,75);"></span
        ><span style="color:rgb(0,0,255);">overflow</span
        ><span style="color:rgb(43,145,175);">:hidden;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(43,145,175);"></span
        ><span style="color:rgb(0,0,255);">text-overflow</span
        ><span style="color:rgb(43,145,175);">:ellipsis;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(43,145,175);"></span
        ><span style="color:rgb(0,0,255);">white-space</span
        ><span style="color:rgb(43,145,175);">:nowrap</span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);">&lt;</span
        ><span style="color:rgb(0,0,255);">div</span
        ><span style="color:rgb(0,0,255);"></span
        ><span style="color:rgb(255,0,0);">id=</span
        ><span style="color:rgb(163,21,21);">"con"</span
        ><span style="color:rgb(0,0,255);">&gt;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);"></span
        ><span style="color:rgb(0,0,255);">span</span
        ><span style="color:rgb(0,0,255);"></span
        ><span style="color:rgb(255,0,0);">id=</span
        ><span style="color:rgb(163,21,21);">"txt"</span
        ><span style="color:rgb(0,0,255);"
          >&gt;文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略号,文本溢出显示省略&lt;/</span
        ><span style="color:rgb(0,0,255);">span&gt;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);"></span
        ><span style="color:rgb(0,0,255);">&lt;</span
        ><span style="color:rgb(0,0,255);">span</span
        ><span style="color:rgb(0,0,255);"></span
        ><span style="color:rgb(255,0,0);">class=</span
        ><span style="color:rgb(163,21,21);">"t"</span
        ><span style="color:rgb(0,0,255);">&gt;&lt;/</span
        ><span style="color:rgb(0,0,255);">span&gt;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);">&lt;/</span
        ><span style="color:rgb(0,0,255);">div&gt;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);">&lt;</span
        ><span style="color:rgb(0,0,255);">style&gt;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);">#txt</span
        ><span style="color:rgb(0,0,255);">{</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);"></span
        ><span style="color:rgb(163,21,21);">display:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">inline-block</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">height:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">40px</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">width:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">250px</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">line-height:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">20px</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">overflow:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">hidden</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">font-size:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">16px</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);">}</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);">.t</span
        ><span style="color:rgb(43,145,175);">:after</span
        ><span style="color:rgb(43,145,175);">{</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(43,145,175);"></span
        ><span style="color:rgb(163,21,21);">display:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">inline</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">content:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">"..."</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">font-size:</span
        ><span style="color:rgb(163,21,21);"></span
        ><span style="color:rgb(163,21,21);">16px</span
        ><span style="color:rgb(163,21,21);">;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(163,21,21);">}</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,255);">&lt;/</span
        ><span style="color:rgb(0,0,255);">style&gt;</span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >69、什么是闭包</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(26,26,26);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(26,26,26);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="background:rgb(255,255,255);"
          >&lt;button type="button"
          onclick="myFunction()"&gt;计数!&lt;/button&gt;</span
        >
      </p>
      <p>
        <span style="background:rgb(255,255,255);"
          >&lt;p id="demo"&gt;0&lt;/p&gt;</span
        >
      </p>
      <p>
        <span style="color:rgb(255,0,0);background:rgb(255,255,255);"></span>
      </p>
      <p><span style="background:rgb(255,255,255);">&lt;script&gt;</span></p>
      <p>
        <span style="background:rgb(255,255,255);"
          >var add = (function () {</span
        >
      </p>
      <p><span style="background:rgb(255,255,255);"></span></p>
      <p>
        <span style="background:rgb(255,255,255);">return function () { </span>
      </p>
      <p>
        <span style="background:rgb(255,255,255);">return counter += 1;</span>
      </p>
      <p><span style="background:rgb(255,255,255);">}</span></p>
      <p><span style="background:rgb(255,255,255);">})();</span></p>
      <p>
        <span style="background:rgb(255,255,255);">function myFunction(){</span>
      </p>
      <p><span style="background:rgb(255,255,255);"></span></p>
      <p><span style="background:rgb(255,255,255);">}</span></p>
      <p><span style="background:rgb(255,255,255);">&lt;/script&gt;</span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >70、less用过吗？用哪些特性</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >mixin）、</span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >71</span
          ></strong
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><strong
          ><span style="color:rgb(57,57,57);background:rgb(250,247,239);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(57,57,57);background:rgb(250,247,239);">CSS</span
        ><span style="color:rgb(57,57,57);background:rgb(250,247,239);"></span>
      </p>
      <p>
        <span style="color:rgb(57,57,57);background:rgb(250,247,239);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(57,57,57);background:rgb(250,247,239);"
            >72、</span
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >scss是什么？在vue.cli中的安装使用步骤是？有哪几大特性？</span
          ></strong
        >
      </p>
      <p><span style="color:rgb(51,51,51);">css的预编译。</span></p>
      <p><span style="color:rgb(51,51,51);">使用步骤：</span></p>
      <p>
        <span style="color:rgb(51,51,51);"
          >npm 下三个loader（sass-loader、css-loader、node-sass）</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);">build目录找到webpack</span
        ><span style="color:rgb(51,51,51);">.base.config.js</span
        ><span style="color:rgb(51,51,51);">extends属性中加一个拓展</span
        ><span style="color:rgb(51,51,51);">.scss</span>
      </p>
      <p><span style="color:rgb(51,51,51);">module属性</span></p>
      <p>
        <span style="color:rgb(51,51,51);"
          >style标签加上lang属性 ，例如：lang=”scss”</span
        >
      </p>
      <p><span style="color:rgb(51,51,51);">:</span></p>
      <p>
        <span style="color:rgb(0,128,128);">1</span
        ><span style="color:rgb(51,51,51);">$变量名称=值）；</span>
      </p>
      <p>
        <span style="color:rgb(0,128,128);">2</span
        ><span style="color:rgb(51,51,51);">、可以用混合器，例如（）</span>
      </p>
      <p>
        <span style="color:rgb(0,128,128);">3</span
        ><span style="color:rgb(51,51,51);">、可以嵌套</span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >73、SVN是什么？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >74、怎么理解前后端分离？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);"
          >前后端分离的核心：后台提供数据，前端负责显示</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);">75、</span
          ><span style="color:rgb(0,0,0);"
            >Ajax处理跨域的方式有三种：代理、jsonp、XHR2</span
          ></strong
        >
      </p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >76、什么是node.js？</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >JavaScript</span
        >，具有超强的高并发能力
      </p>
      <p>
        <span style="color:rgb(102,102,102);"
          >Java、PHP或者.net等服务器端语言中，会为每一个客户端连接创建一个新的线程。而每个线程需要耗费大约2MB内存。也就是说，理论上，一个8GB内存的服务器可以同时连接的最大用户数为4000个左右。要让Web应用程序支持更多的用户，就需要增加服务器的数量，而Web应用程序的硬件成本当然就上升了。</span
        >
      </p>
      <p>
        <span style="color:rgb(102,102,102);"
          >Node.js不为每个客户连接创建一个新的线程，而仅仅使用一个线程。当有用户连接了，就触发一个内部事件，通过非阻塞I/O、事件驱动机制，让Node.js程序宏观上也是并行的。使用Node.js，一个8GB内存的服务器，可以同时处理超过4万用户的连接。</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >77、http协议</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span
        ><a href="http://www.abc.com:8080" rel="nofollow"
          ><u
            ><span style="color:rgb(0,0,255);background:rgb(255,255,255);"
              >http://www.abc.com:8080</span
            ></u
          ></a
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <a href="http://www.abc.com" rel="nofollow"
          ><u
            ><span style="color:rgb(0,0,255);background:rgb(255,255,255);"
              >www.abc.com</span
            ></u
          ></a
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >78、字符串插值</span
          ></strong
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="background:rgb(255,255,255);">79、</span
          >字符串常用方法</strong
        >
      </p>
      <p>
        <strong
          ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
            >slice方法返回字符串的片段</span
          ></strong
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >var str = "ABCDEF";</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >str.slice(2,4);</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);">CD</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
            >substring方法返回位于String对象中指定位置的子字符串。</span
          ></strong
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >var str = "ABCDEF";</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >str.substring(2,4); // 或 str.substring(4,2);</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);">CD</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
            >Split</span
          ></strong
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><strong
          ><span
            style="color:rgb(34,34,34);background:rgb(255,255,255);"
          ></span></strong
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >var str = "AA BB CC DD EE FF";</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >alert(str.split(" "，3));</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >AA,BB,CC</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
            >concat方法返回字符串值</span
          ></strong
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >var str = "ABCDEF";</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >str.concat("ABCDEF","ABC");</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >ABCDEFABCDEFABC</span
        ><strong></strong>
      </p>
      <p>
        <strong
          ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
            >indexOf方法放回String对象内第一次出现子字符串位置</span
          ></strong
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >var str = "ABCDECDF";</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
          >str.indexOf("CD"，1); // 由1位置从左向右查找 123...</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span
        ><span style="color:rgb(34,34,34);"><br /></span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);">2</span
        ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(34,34,34);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(34,34,34);background:rgb(255,255,255);"
            >80、</span
          ><span style="color:rgb(0,0,0);"> (BOM)</span></strong
        >
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >BOM 的方法和属性</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"> window 对象的属性。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"> window 对象的方法。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong><span style="color:rgb(0,0,0);">Window 子对象</span></strong>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">document 对象</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">frames 对象</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">history 对象</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">location 对象</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">navigator 对象</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">screen 对象</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"
            >81、DOM</span
          ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span
          ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"
            >HTML 文档对象模型</span
          ></strong
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);">
          DOM，可以访问所有的 HTML 元素，连同它们所包含的文本和属性</span
        >
      </p>
      <p><span style="color:rgb(102,102,102);"></span></p>
      <p style="background:rgb(255,255,255);">
        <strong>82、js 定时器有以下两个方法：</strong>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >setInterval()
          ：按照指定的周期（以毫秒计）来调用函数或计算表达式。方法会不停地调用函数，直到
          clearInterval() 被调用或窗口被关闭。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >setTimeout() ：在指定的毫秒数后调用函数或计算表达式。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(51,51,51);">83、MVVM和MVC的区别</span></strong
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >MVVM中的View 和 ViewModel可以互相通信。也就是可以互相调用。</span
        ><span style="color:rgb(51,51,51);"><br /></span
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >MVC中的是单向通信。也就是View跟Model，必须通过Controller来承上启下</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >84、服务端渲染，英文缩写</span
          ><span style="color:rgb(85,85,85);background:rgb(255,255,255);"
            >SSR</span
          ></strong
        >
      </p>
      <p>
        <span style="color:rgb(85,85,85);background:rgb(255,255,255);"
          >Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，很多人想用Vue开发多页应用，并在服务端完成渲染。可以用Nuxt.js实现，她简化了SSR的开发难度。还可以直接用命令把我们制作的vue项目生成为静态html。</span
        >
      </p>
      <p>
        <strong
          ><span style="color:rgb(85,85,85);background:rgb(255,255,255);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(85,85,85);background:rgb(255,255,255);"
          >SPA（单页应用）不利于搜索引擎的SEO操作。比如你作一个新闻网站，流量的一个主要来源是通过百度、谷歌、bing这些搜索引擎，但是它们对SPA的抓取并不好，特别是百度根本没法抓取到SPA的内容页面，所以我们必须把我们的应用在服务端渲染成适合搜索引擎抓取的页面，再下载到客户端。那Nuxt.js适合作新闻、博客、电影、咨询这样的需要搜索引擎提供流量的项目。</span
        >
      </p>
      <p>
        <span style="color:rgb(85,85,85);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(85,85,85);background:rgb(255,255,255);"
          >85、</span
        ><strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ></strong>
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        webapp就一个HTML文件，里面的各个功能页面是JavaScript通过hash或者history
        api来进行路由，并通过ajax 拉取数据实现响应功能。
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <strong>优点</strong>：
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >分离前后端关注点，前端负责界面显示，后端负责数据存储和计算，各司其职，不会把前后端的逻辑混杂在一起；</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >减轻服务器压力，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >Web界面、手机、平板等多种客户端；</span
        >
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <strong>缺点</strong>：
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >SEO问题，现在可以通过Prerender等技术解决一部分；</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >前进、后退、地址栏等，需要程序进行管理；</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">书签，需要程序来提供支持；</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >86 、ES6定义类和继承</span
          ></strong
        >
      </p>
      <p style="background:rgb(246,246,246);">
        <strong><span style="color:rgb(26,26,26);">class</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><span style="color:rgb(255,0,0);">//</span
        ><span style="color:rgb(255,0,0);">定义类</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><span style="color:rgb(255,0,0);">//</span
        ><span style="color:rgb(255,0,0);">构造函数</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">this</span></strong
        ><span style="color:rgb(26,26,26);">.name </span
        ><strong><span style="color:rgb(26,26,26);">=</span></strong
        ><span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">return</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">this</span></strong
        ><span style="color:rgb(26,26,26);">.name;</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);">}</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <strong><span style="color:rgb(26,26,26);">class</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">extends</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><span style="color:rgb(255,0,0);">//</span
        ><span style="color:rgb(255,0,0);">继承</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">this</span></strong
        ><span style="color:rgb(26,26,26);">.grade </span
        ><strong><span style="color:rgb(26,26,26);">=</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><span style="color:rgb(255,0,0);">// ReferenceError</span
        ><span style="color:rgb(255,0,0);">：如果没有</span
        ><span style="color:rgb(255,0,0);">super</span
        ><span style="color:rgb(255,0,0);">直接调用</span
        ><span style="color:rgb(255,0,0);">this. Grade,</span
        ><span style="color:rgb(255,0,0);">会报错</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">super</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><span style="color:rgb(255,0,0);">//</span
        ><span style="color:rgb(255,0,0);">子类必须在</span
        ><span style="color:rgb(255,0,0);">constructor</span
        ><span style="color:rgb(255,0,0);">方法中调用</span
        ><span style="color:rgb(255,0,0);">super</span
        ><span style="color:rgb(255,0,0);"
          >，否则新建实例会报错，因为子类没有自己的</span
        ><span style="color:rgb(255,0,0);">this</span
        ><span style="color:rgb(255,0,0);">对象</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(255,0,0);">super </span
        ><span style="color:rgb(255,0,0);"
          >作为函数调用时代表父类的构造函数</span
        >
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">this</span></strong
        ><span style="color:rgb(26,26,26);">.grade </span
        ><strong><span style="color:rgb(26,26,26);">=</span></strong
        ><span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">return</span></strong
        ><span style="color:rgb(26,26,26);"></span
        ><strong><span style="color:rgb(26,26,26);">this</span></strong
        ><span style="color:rgb(26,26,26);">.grade;</span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);"></span>
      </p>
      <p style="background:rgb(246,246,246);">
        <span style="color:rgb(26,26,26);">}</span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span
        ><span style="color:rgb(26,26,26);">Student(“Bill” , 5)</span>
      </p>
      <p><span style="color:rgb(26,26,26);"></span></p>
      <p>
        <strong><span style="color:rgb(26,26,26);">87、样式权重</span></strong>
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">: style=””，权值为1000。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >ID选择器，如：#content，权值为100。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">.content，权值为10。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">div p，权值为1。</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);">&lt;</span
        ><span style="color:rgb(86,156,214);">style</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(215,186,125);">#aaa</span
        ><span style="color:rgb(212,212,212);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">color</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(206,145,120);">red</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(215,186,125);">.bbb</span
        ><span style="color:rgb(212,212,212);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">color</span
        ><span style="color:rgb(212,212,212);">: </span
        ><span style="color:rgb(206,145,120);">blue</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(215,186,125);">div p</span
        ><span style="color:rgb(212,212,212);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(156,220,254);">color</span
        ><span style="color:rgb(212,212,212);">: #</span
        ><span style="color:rgb(206,145,120);">pink</span
        ><span style="color:rgb(212,212,212);">;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;/</span
        ><span style="color:rgb(86,156,214);">style</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);">&lt;/</span
        ><span style="color:rgb(86,156,214);">head</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);">&lt;</span
        ><span style="color:rgb(86,156,214);">body</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;</span
        ><span style="color:rgb(86,156,214);">div</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;</span
        ><span style="color:rgb(86,156,214);">p</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">id</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"aaa"</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">class</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"bbb"</span
        ><span style="color:rgb(212,212,212);"></span
        ><span style="color:rgb(156,220,254);">style</span
        ><span style="color:rgb(212,212,212);">=</span
        ><span style="color:rgb(206,145,120);">"color:green"</span
        ><span style="color:rgb(128,128,128);">&gt;</span
        ><span style="color:rgb(212,212,212);">我的大学生活</span
        ><span style="color:rgb(128,128,128);">&lt;/</span
        ><span style="color:rgb(86,156,214);">p</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(30,30,30);">
        <span style="color:rgb(255,255,255);"></span
        ><span style="color:rgb(128,128,128);">&lt;/</span
        ><span style="color:rgb(86,156,214);">div</span
        ><span style="color:rgb(128,128,128);">&gt;</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">3个规则,：</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >1，如果样式上加有!important标记，例如：</span
        >
      </p>
      <table border="0" cellspacing="0">
        <tbody>
          <tr>
            <td><p></p></td>
            <td>
              <p><span style="color:rgb(51,51,51);"></span></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">那么始终采用这个标记的样式。</span>
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >2，匹配的内容按照CSS权重排序，权重大的优先；</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);"
          >3，如果权重也一样，按照它在CSS样式表里声明的顺序，后声明的优先，例如：</span
        >
      </p>
      <table border="0" cellspacing="0">
        <tbody>
          <tr>
            <td>
              <p><span style="color:rgb(51,51,51);"></span></p>
            </td>
            <td>
              <p><span style="color:rgb(51,51,51);"></span></p>
              <p><span style="color:rgb(51,51,51);"></span></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(51,51,51);">color: red。</span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >88、undefined和null区别</span
          ></strong
        >
      </p>
      <p style="background:rgb(245,245,213);">
        <strong
          ><span style="color:rgb(17,17,17);"
            >null表示"没有对象"，即该处不应该有值。</span
          ></strong
        ><span style="color:rgb(17,17,17);">典型用法是：</span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(17,17,17);"
          >1） 作为函数的参数，表示该函数的参数不是对象。</span
        >
      </p>
      <p style="background:rgb(245,245,213);">
        <strong
          ><span style="color:rgb(17,17,17);"
            >undefined表示"缺少值"，就是此处应该有一个值，但是还没有定义。</span
          ></strong
        ><span style="color:rgb(17,17,17);">典型用法是：</span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(17,17,17);"
          >1）变量被声明了，但没有赋值时，就等于undefined。</span
        >
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(17,17,17);"
          >2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。</span
        >
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(17,17,17);"
          >3）对象没有赋值的属性，该属性的值为undefined。</span
        >
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(17,17,17);"
          >4）函数没有返回值时，默认返回undefined。</span
        >
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,119,170);">var</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(153,153,153);">;</span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);">i</span
        ><span style="color:rgb(112,128,144);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,119,170);">function</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(17,17,17);">f</span
        ><span style="color:rgb(153,153,153);">(</span
        ><span style="color:rgb(0,0,0);">x</span
        ><span style="color:rgb(153,153,153);">){</span
        ><span style="color:rgb(0,0,0);">console</span
        ><span style="color:rgb(153,153,153);">.</span
        ><span style="color:rgb(17,17,17);">log</span
        ><span style="color:rgb(153,153,153);">(</span
        ><span style="color:rgb(0,0,0);">x</span
        ><span style="color:rgb(153,153,153);">)}</span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(17,17,17);">f</span
        ><span style="color:rgb(153,153,153);">()</span
        ><span style="color:rgb(112,128,144);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,119,170);">var</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(166,127,89);">=</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(0,119,170);">new</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(17,17,17);">Object</span
        ><span style="color:rgb(153,153,153);">();</span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);">o</span
        ><span style="color:rgb(153,153,153);">.</span
        ><span style="color:rgb(0,0,0);">p</span
        ><span style="color:rgb(112,128,144);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);"></span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,119,170);">var</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(166,127,89);">=</span
        ><span style="color:rgb(0,0,0);"></span
        ><span style="color:rgb(17,17,17);">f</span
        ><span style="color:rgb(153,153,153);">();</span>
      </p>
      <p style="background:rgb(245,242,240);">
        <span style="color:rgb(0,0,0);">x</span
        ><span style="color:rgb(112,128,144);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >89、</span
          ><span style="background:rgb(204,255,255);">HTML</span></strong
        ><span style="background:rgb(204,255,255);">HTML元素标记的内容。</span>
      </p>
      <p>
        <strong>&lt;header&gt;&lt;/header&gt;</strong
        ><span style="background:rgb(204,255,255);"></span>
      </p>
      <p>
        <strong>&lt;nav&gt;&lt;/nav&gt;</strong
        ><span style="background:rgb(204,255,255);"></span>
      </p>
      <p>
        <strong>&lt;section&gt;&lt;/section&gt;</strong
        ><span style="background:rgb(204,255,255);"></span>
      </p>
      <p>
        <strong>&lt;footer&gt;&lt;/footer&gt;</strong
        ><span style="background:rgb(204,255,255);"
          >body时，才是整个页面的页脚。</span
        >
      </p>
      <h4 style="background:rgb(255,255,255);">
        <strong><span style="background:rgb(204,255,255);">90、</span></strong
        ><a href="http://www.cnblogs.com/sunhe/p/4994058.html" rel="nofollow"
          ><u
            ><span style="color:rgb(33,117,155);"
              >Doctype作用，标准模式与兼容模式的区别</span
            ></u
          ></a
        >
      </h4>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"
          >&lt;!DOCTYPE&gt;声明位于位于HTML文档中的第一行，处于 &lt;html&gt;
          标签之前。告知浏览器的解析器用什么文档标准解析这个文档。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);">标</span
        ><span style="color:rgb(0,0,0);">
          JS运作模式都是以该浏览器支持的最高标准运行。</span
        >
      </p>
      <p style="background:rgb(255,255,255);">
        <span style="color:rgb(0,0,0);"
          >,模拟老式浏览器的行为以防止站点无法工作。</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p align="justify">
        <strong
          ><span style="color:rgb(0,0,0);">91、各种浏览器内核</span></strong
        >
      </p>
      <p align="justify">
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >Trident</span
          ></strong
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >Internet
          Explorer，又称其为IE内核。（IE、傲游、世界之窗浏览器、腾讯TT）</span
        >
      </p>
      <p align="justify">
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >Gecko</span
          ></strong
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >Firefox</span
        >
      </p>
      <p align="justify">
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >WebKit</span
          ></strong
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >Safari、Chrome</span
        >
      </p>
      <p align="justify">
        <strong
          ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
            >Presto</span
          ></strong
        ><span style="color:rgb(51,51,51);background:rgb(255,255,255);"
          >OperaPresto</span
        >
      </p>
      <p>
        <span style="color:rgb(51,51,51);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <strong
          ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"
            >92</span
          ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"
          ><br /></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"
          ><br /></span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(68,68,68);background:rgb(255,255,255);">a. </span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(68,68,68);background:rgb(255,255,255);">b. </span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p>
        <span style="color:rgb(68,68,68);background:rgb(255,255,255);">c. </span
        ><span style="color:rgb(68,68,68);background:rgb(255,255,255);"></span>
      </p>
      <p><span style="color:rgb(0,0,0);"></span></p>
      <p><strong>93、attr()和prop()的区别</strong></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p><span style="color:rgb(0,0,0);background:rgb(255,255,255);"></span></p>
      <p>
        <strong
          ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
            >94、</span
          ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"
            >data-*</span
          ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span
        ></strong>
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(255,255,255);">H</span
        ><span style="color:rgb(0,0,0);background:rgb(255,255,255);"
          >tml5的自定义属性，</span
        ><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span>
      </p>
      <p>
        <span style="color:rgb(0,0,0);background:rgb(253,252,248);">
          JavaScript 中利用，以创建更好的用户体验</span
        >
      </p>
      <p><span style="color:rgb(0,0,0);background:rgb(253,252,248);"></span></p>
      <p align="justify" style="background:rgb(255,255,255);">
        <strong
          ><span style="color:rgb(88,88,88);background:rgb(253,252,248);"
            >95、</span
          ><span style="color:rgb(51,51,51);"
            >Quirks(怪癖）模式是什么？它和Standards（标准）模式有什么区别</span
          ></strong
        ><span style="color:rgb(88,88,88);">区别：</span>
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <span style="color:rgb(88,88,88);"
          >总体会有布局、样式解析和脚本执行三个方面的区别。</span
        >
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <span style="color:rgb(88,88,88);"></span>
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <span style="color:rgb(88,88,88);"></span>
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <span style="color:rgb(88,88,88);"
          >Standards模式下，给&lt;span&gt;等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。</span
        >
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <span style="color:rgb(88,88,88);"
          >standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的</span
        >
      </p>
      <p align="justify" style="background:rgb(255,255,255);">
        <span style="color:rgb(88,88,88);"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
