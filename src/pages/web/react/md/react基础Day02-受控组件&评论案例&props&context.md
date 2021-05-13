<!--
 * @Date           : 2021-05-05 03:56:51
 * @FilePath       : /jinnian-space/src/pages/web/react/md/react基础Day02-受控组件&评论案例&props&context.md
 * @Description    : 
-->
# React组件

## 目标

- 能够知道受控组件是什么
- 能够写出受控组件
- 了解非受控组件

## 表单处理

### 受控组件（★★★）

- HTML中的表单元素是可输入的，也就是有自己的可变状态
- 而React中可变状态通常保存在state中，并且只能通过`setState()` 方法来修改
- React讲state与表单元素值value绑定在一起，有state的值来控制表单元素的值
- 受控组件：值受到react控制的表单元素

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/受控组件.png)

#### 使用步骤

- 在state中添加一个状态，作为表单元素的value值
- 给表单元素绑定change事件，将表单元素的值设置为state的值

#### 示例demo

```react
class App extends React.Component {
    constructor(){
        super()
        this.inputChange = this.inputChange.bind(this)
    }
    state = {
        txt : ''
    }
    inputChange(e){
       this.setState({
           txt: e.target.value
       })
    }
    render(){
        console.log(this.state);
        
        return (
            <div>
                {/* 把state的值设置给输入框的value，绑定change事件，这样用户在输入内容的时候调用相应函数，在函数里面把当前设置的值赋值给state，从而达到数据的统一 */}
                <input type="text" value={this.state.txt} onChange={this.inputChange}/>
            </div>
        )
    }
}
ReactDOM.render(<App />,document.getElementById('root'))
```

#### 多表单元素优化

- 问题：每个表单元素都有一个单独的事件处理函数，这样太繁琐
- 优化：使用一个事件处理程序同时处理多个表单元素

##### 步骤

- 给表单元素添加name属性（用来区分是哪一个表单），名称与state相同（用来更新数据的）
- 根据表单内容来获取对应值
- 在change事件处理程序中通过 [name] 来修改对应的state

##### 示例demo

```react
inputChange(e){
   let target = e.target;
   let value = target.type == 'checkbox' ? target.checked : target.value;
   this.setState({
       [e.target.name]: value
   })
}
<input type="text" value={this.state.txt} name="txt" onChange={this.inputChange}/>
<input type="checkbox" value={this.state.isChecked} name="isChecked" onChange={this.inputChange}/>
```

### 非受控组件 （了解）

- 说明：借助于ref，使用元素DOM方式获取表单元素值
- ref的作用：获取DOM或者组件

#### 使用步骤

- 调用 `React.createRef()` 方法创建ref对象
- 将创建好的 ref 对象添加到文本框中
- 通过ref对象获取到文本框的值

```react
class App extends React.Component {
    constructor(){
        super()
        
        //创建 ref
        this.txtRef = React.createRef()
    }
    // 获取文本框的值
    getTxt =() => {
        console.log(this.txtRef.current.value)
    }
    render(){
        return (
          <div>
            <input type ="text" ref={this.txtRef} />
            <button onClick ={this.getTxt}>获取值</button>
          </div>
        )
    }
}
```

# React组件综合案例（★★★）

## 需求分析

- 渲染评论列表（列表渲染）
- 没有评论数据时渲染：暂无评论（条件渲染）
- 获取评论信息，包括评论人和评论内容（受控组件）
- 发表评论，更新评论列表（`setState()`）

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/综合案例.png)

## 搭建评论列表的模板

- 结构

```react
import React from 'react'
import ReactDOM from 'react-dom'

/* 
  评论列表案例

  comments: [
    { id: 1, name: 'jack', content: '沙发！！！' },
    { id: 2, name: 'rose', content: '板凳~' },
    { id: 3, name: 'tom', content: '楼主好人' }
  ]
*/

import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
          />
          <br />
          <button>发表评论</button>
        </div>

        <div className="no-comment">暂无评论，快去评论吧~</div>
        <ul>
          <li>
            <h3>评论人：jack</h3>
            <p>评论内容：沙发！！！</p>
          </li>
        </ul>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
```

- 样式

```css
.app {
  width: 300px;
  padding: 10px;
  border: 1px solid #999;
}

.user {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.content {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.no-comment {
  text-align: center;
  margin-top: 30px;
}
```

## 渲染评论列表

- 在state中初始化评论列表数据

```react
  state = {
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' }
    ]
  }
```

- 使用数组的map方法遍历state中的列表数据
- 给每一个被遍历的li元素添加key属性
- 在render方法里的ul节点下嵌入表达式

```react
{
  this.state.comments.map(item => {
    return (
       <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.content}</p>
       </li>
    )
  })
}
```

## 渲染暂无评论

- 判断列表数据的长度是否为0
- 如果为0，则渲染暂无评论
- 如果不为0，那么渲染列表数据

- 在jsx中大量写逻辑会导致很臃肿，所以我们可以把条件渲染的逻辑抽取成一个函数

```react
/**
 * 条件渲染，这里抽取出来了，这样在结构中不会很混乱
 */
renderList(){
  if (this.state.comments.length === 0) {
    return (<div className="no-comment">暂无评论，快去评论吧~</div>)
  } else {
    return (
      <ul> {
        this.state.comments.map(item => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
            </li>
          )
        })
      }
      </ul>
    )
  }
}
```

- 在render的return方法里面调用这个函数即可

```react
render() {
  return (
    <div>
      ...
      {/* 通过条件渲染来判断是否显示暂无评论 */}
      {this.renderList()}
    </div>
  )
}
```

## 获取评论信息

- 通过受控组件来获取内容
- 初始化用户名和用户内容的state

```react
userName: '',
userContent: ''
```

- 在结构中，把表单元素的value与state进行绑定，还需要绑定name属性和onChange属性

```react
<input className="user" type="text" placeholder="请输入评论人" value={this.state.userName} name="userName" onChange={this.handleForm}/>
<br />
<textarea
  className="content"
  cols="30"
  rows="10"
  placeholder="请输入评论内容"
  value={this.state.userContent}
  name="userContent"
  onChange={this.handleForm}
/>
```

- 在`handleFrom`函数中利用`setState`来让数据保持一致

```react
  handleForm = (e) => {
     this.setState({
       [e.target.name] : e.target.value
     })
  }
```

## 发表评论

- 给按钮绑定事件
- 在事件处理程序中，通过state获取评论信息
- 将评论信息添加到state中，利用setState来更新页面
- 添加评论前需要判断用户是否输入内容
- 添加评论后，需要情况文本框用户输入的值

```react
handleClick = (e) => {
  // 拿到用户输入的内容
  let {userName,userContent} = this.state
  if(userName.trim()==='' || userContent.trim() === ''){
      alert('请输入内容')
      return
  }
  // 利用数组拓展运算符来进行数据的拼接，把用户输入的存放在数组的第一个位置
  let newComments = [{
    id: this.state.comments.length+1,
    name: userName,
    content: userContent
  },...this.state.comments]
  this.setState({
    comments: newComments,
    userName:'',
    userContent: ''
  })
}
```

# React组件进阶

## 目标

- 能够使用props接收数据
- 能够实现父子组件之间的通讯
- 能够实现兄弟组件之间的通讯
- 能够给组件添加props校验

## 组件通讯介绍

组件是独立且封闭的单元，默认情况下，只能使用组件自己的数据。在组件化过程中，我们将一个完整的功能拆分成多个组件，以更好的完成整个应用的功能。而在这个过程中，多个组件之间不可避免的要共享某些数据。为了实现这些功能，就需要打破组件的独立封闭性，让其与外界沟通，这个过程就是组件通讯

## 组件的props（★★★）

### 基本使用

- 组件时封闭的，要接受外部数据应该通过props来实现
- props的作用：接收传递给组件的数据
- 传递数据：给组件标签添加属性

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/props-设置.png)

- 接收数据：函数组件通过 参数 props接收数据，类组件通过 this.props接收数据

  - 函数组件获取

    ![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/函数组件获取.png)

  - 类组件获取

    ![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/类组件获取.png)


​    

### 特点

- 可以给组件传递任意类型的数据 ： 字符串  数字 数组  对象  函数  jsx 组件
- props是只读属性，不能对值进行修改
- 注意：使用类组件时，如果写了构造函数，应该将props传递给super(),否则，无法在构造函数中获取到props，其他的地方是可以拿到的

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/类组件注意点.png)

## 组件通讯的三种方式（★★★）

### 父组件传递数据给子组件

- 父组件提供要传递的state数据
- 给子组件标签添加属性，值为state中的数据
- 子组件中通过props接收父组件中传递的数据

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/父传子.png)

### 子组件传递数据给父组件

- 利用回调函数，父组件提供回调，子组件调用，将要传递的数据作为回调函数的参数
- 父组件提供一个回调函数，用来接收数据
- 将该函数作为属性的值，传递给子组件

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/子传父-父亲设置回调.png)

- 子组件通过props调用回调函数

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/子传父-调用回调.png)

### 兄弟组件传递

- 将共享状态(数据)提升到最近的公共父组件中，由公共父组件管理这个状态
- 这个称为状态提升
- 公共父组件职责：1. 提供共享状态 2.提供操作共享状态的方法
- 要通讯的子组件只需要通过props接收状态或操作状态的方法

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/兄弟传递.png)

#### 示例demo

- 定义布局结构，一个Counter里面包含两个子组件，一个是计数器的提示，一个是按钮

```react
class Counter extends React.Component {
    render() {
        return (<div>
            <Child1 />
            <Child2 />
        </div>
        )
    }
}
class Child1 extends React.Component {
    render() {
        return (
            <h1>计数器：</h1>
        )
    }
}
class Child2 extends React.Component {
    render() {
        return (
            <button>+1</button>
        )
    }
}
```

- 在父组件里定义共享状态，把这个状态传递给第一个子组件

```react
class Counter extends React.Component {
    // 提供共享的状态
    state = {
        count: 0
    }
    render() {
        return (<div>
            {/* 把状态提供给第一个子组件 */}
            <Child1 count={this.state.count}/>
            <Child2 />
        </div>
        )
    }
}
```

- 在第一个子组件里面就能通过props获取到

```react
class Child1 extends React.Component {
    render() {
        return (
            <h1>计数器：{this.props.count}</h1>
        )
    }
}
```

- 在父组件中提供共享方法，通过属性传递给第二个子组件，方便第二个子组件来进行调用

```react
    // 提供共享方法
    onIncrement = (res) => {
        // 只要第二个子组件调用了这个函数，就会执行里面代码
        this.setState({
            count: this.state.count + res
        })
    }
    render() {
        return (<div>
            ...
            {/* 把共享方法提供给第二个子组件 */}
            <Child2 onIncrement={this.onIncrement} />
        </div>
        )
    }
```

- 在第二个子组件里面通过props来获取到对应函数，然后进行调用

```react
class Child2 extends React.Component {
    handleClick = () => {
        // 这里一旦调用，就会执行父组件里面 onIncrement函数
        this.props.onIncrement(2)
    }
    render() {
        return (
            <button onClick={this.handleClick}>+</button>
        )
    }
}
```

## Context（★★★）

如果出现层级比较多的情况下（例如：爷爷传递数据给孙子），我们会使用Context来进行传递

作用： 跨组件传递数据

### 使用步骤

- 调用 `React.createContext()` 创建 Provider(提供数据) 和 Consumer(消费数据) 两个组件

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/创建Context.png)

- 使用Provider 组件作为父节点

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/provider.png)

- 设置value属性，表示要传递的数据

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/设置value属性.png)

- 哪一层想要接收数据，就用Consumer进行包裹，在里面回调函数中的参数就是传递过来的值

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/Comsumer.png)

### 小结

- 如果两个组件相隔层级比较多，可以使用Context实现组件通讯
- Context提供了两个组件：Provider 和 Consumer
- Provider组件： 用来提供数据
- Consumer组件： 用来消费数据

## props进阶

### children属性

- children属性： 表示组件标签的子节点，当组件标签有子节点时，props就会有该属性
- children属性与普通的props一样，值可以使任意值（文本、react元素、组件、甚至是函数）

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/props-children.png)



### props校验（★★★）

- 对于组件来说，props是外来的，无法保证组件使用者传入什么格式的数据，简单来说就是组件调用者可能不知道组件封装着需要什么样的数据
- 如果传入的数据不对，可能会导致报错
- 关键问题：组件的使用者不知道需要传递什么样的数据
- props校验：允许在创建组件的时候，指定props的类型、格式等

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/props-校验.png)

- 作用：捕获使用组件时因为props导致的错误，给出明确的错误提示，增加组件的健壮性

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/props-错误提示.png)

#### 使用步骤

- 安装包  `prop-types (yarn add prop-types | npm i prop-types)`
- 导入prop-types 包
- 使用`组件名.propTypes={}` 来给组件的props添加校验规则
- 校验规则通过PropTypes对象来指定

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/propsTypes.png)



#### 常见的约束规则

- 创建的类型： `array、bool、func、number、object、string`
- React元素类型：`element`
- 必填项：`isRequired`
- 特定结构的对象： `shape({})`
- 更多的[约束规则](<https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#proptypes>)

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/props-约束规则.png)

### props的默认值

- 场景：分页组件 -> 每页显示条数

![](./img/web/react/react基础Day02-受控组件&评论案例&props&context/props默认值.png)