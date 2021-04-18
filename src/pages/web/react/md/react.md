# react

## React

### 概述

- React 是一个用于构建用户界面的 JAVASCRIPT 库。
- React主要用于构建UI，很人多认为 React 是 MVC 中的 V（视图）。
- React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
- React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。

### 特点

- 1.声明式设计 −React采用声明范式，可以轻松描述应用。
- 2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
- 3.灵活 −React可以与已知的库或框架很好地配合。
- 4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
- 5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
- 6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

### React JSX

- JSX 是 React 的核心组成部分，它使用 XML 标记的方式去直接声明界面，界面组件之间可以互相嵌套
- 优点：

	- JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
	- 它是类型安全的，在编译过程中就能发现错误。
	- 使用 JSX 编写模板更加简单快速。

- 用法

	- JSX 看起来类似 HTML ，我们可以看下实例:

		- ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById('example')
);

	- 独立文件
	- JavaScript 表达式

		- 我们可以在 JSX 中使用 JavaScript 表达式。表达式写在花括号 {} 中。实例如下：

			- ReactDOM.render(
	<div>
	  <h1>{1+1}</h1>
	</div>
	,
	document.getElementById('example')
);

	- 在 JSX 中不能使用 if else 语句，单可以使用 conditional (三元运算) 表达式来替代。
	- 样式

		- React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：

			- var myStyle = {
	fontSize: 100,
	color: '#FF0000'
};
ReactDOM.render(
	<h1 style = {myStyle}>W3Cschool教程</h1>,
	document.getElementById('example')
);

	- 注释

		- 注释需要写在花括号中

			- ReactDOM.render(
	<div>
    <h1>W3Cschool教程</h1>
    {/*注释...*/}
 	</div>,
	document.getElementById('example')
);

	- 数组

		- JSX 允许在模板中插入数组，数组会自动展开所有成员：

			- var arr = [
  <h1>W3Cschool教程</h1>,
  <h2>从W3Cschool开始！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);

### State(状态)

- React 把组件看成是一个状态机（State Machines）。通过与用户的交互，实现不同状态，然后渲染 UI，让用户界面和数据保持一致。

	- 当用户点击组件，导致状态变化，this.setState 方法就修改状态值，每次修改以后，自动调用 this.render 方法，再次渲染组件

### Props

- state 和 props 主要的区别在于 props 是不可变的，而 state 可以根据与用户交互来改变。
- State 和 Props

	- 我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。

- Props 验证

	- Props 验证使用 propTypes，它可以保证我们的应用组件被正确使用，React.PropTypes 提供很多验证器 (validator) 来验证传入数据是否有效。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。

		- var title = "W3Cschool教程";
// var title = 123;
var MyTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});
ReactDOM.render(
    <MyTitle title={title} />,
    document.getElementById('example')
);

	- 更多验证器说明如下：

		- propTypes: {
    // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
   optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // 可以被渲染的对象 numbers, strings, elements 或 array
    optionalNode: React.PropTypes.node,

    //  React 元素
    optionalElement: React.PropTypes.element,

    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    optionalMessage: React.PropTypes.instanceOf(Message),

    // 用 enum 来限制 prop 只接受指定的值。
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // 可以是多个对象类型中的一个
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // 指定类型组成的数组
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // 指定类型的属性构成的对象
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // 特定 shape 参数的对象
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // 任意类型加上 `isRequired` 来使 prop 不可空。
    requiredFunc: React.PropTypes.func.isRequired,

    // 不可空的任意类型
    requiredAny: React.PropTypes.any.isRequired,

    // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  },

### React 组件 API

- 设置状态：setState

	- setState(object nextState[, function callback])

		- nextState，将要设置的新状态，该状态会和当前的state合并
		- callback，可选参数，回调函数。该函数会在setState设置成功，且组件重新渲染后调用。
		- 合并nextState和当前state，并重新渲染组件。setState是React事件处理函数中和请求回调函数中触发UI更新的主要方法。
		- 关于setState

			- 不能在组件内部通过this.state修改状态，因为该状态会在调用setState()后被替换。
			- setState()并不会立即改变this.state，而是创建一个即将处理的state。setState()并不一定是同步的，为了提升性能React会批量执行state和DOM渲染。
			- setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑。

- 替换状态：replaceState

	- replaceState(object nextState[, function callback])

		- nextState，将要设置的新状态，该状态会替换当前的state。
		- callback，可选参数，回调函数。该函数会在replaceState设置成功，且组件重新渲染后调用。
		- replaceState()方法与setState()类似，但是方法只会保留nextState中状态，原state不在nextState中的状态都会被删除。

- 设置属性：setProps

	- setProps(object nextProps[, function callback])

		- nextProps，将要设置的新属性，该状态会和当前的props合并
		- callback，可选参数，回调函数。该函数会在setProps设置成功，且组件重新渲染后调用。
		- props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。
		- 当和一个外部的JavaScript应用集成时，我们可能会需要向组件传递数据或通知React.render()组件需要重新渲染，可以使用setProps()。

更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。

- 替换属性：replaceProps

	- replaceProps(object nextProps[, function callback])

		- nextProps，将要设置的新属性，该属性会替换当前的props。
		- callback，可选参数，回调函数。该函数会在replaceProps设置成功，且组件重新渲染后调用。
		- replaceProps()方法与setProps类似，但它会删除原有props

- 强制更新：forceUpdate

	- forceUpdate([function callback])

		- callback，可选参数，回调函数。该函数会在组件render()方法调用后调用。
		- forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。

forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()

一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。

- 获取DOM节点：findDOMNode

	- DOMElement findDOMNode()

		- 返回值：DOM元素DOMElement

			- 如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，
this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。

- 判断组件挂载状态：isMounted

	- bool isMounted()

		- 返回值：true或false，表示组件是否已挂载到DOM中

			- isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。

### React 组件生命周期

- React 组件的生命周期函数，又叫钩子函数，它能响应不同的状态。

	- 组件的生命周期可分成三个状态：

		- Mounting：已插入真实 DOM
		- Updating：正在被重新渲染
		- Unmounting：已移出真实 DOM

	- 生命周期的方法有：

		- componentWillMount 在渲染前调用,在客户端也在服务端。
		- componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。
 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异部操作阻塞UI)。
		- componentWillReceiveProps 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
		- shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
可以在你确认不需要更新组件时使用。
		- componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
		- componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
		- componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。

### React AJAX

- React 组件的数据可以通过 componentDidMount 方法中的 Ajax 来获取，当从服务端获取数据库可以将数据存储在 state 中，再用 this.setState 方法重新渲染 UI。
- 当使用异步加载数据时，在组件卸载前使用 componentWillUnmount 来取消未完成的请求。

### React Refs

- React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
- 这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。
- ref 属性的值可以是一个字符串也可以是一个函数。
- 使用方法

	- 绑定一个 ref 属性到 render 的返回值上：

		- <input ref="myInput" />

			- 在其它代码中，通过 this.refs 获取支撑实例:

				- var input = this.refs.myInput;
var inputValue = input.value;
var inputRect = input.getBoundingClientRect();

## Redux

### 三个基本原则

- 整个应用只有唯一一个可信数据源，也就是只有一个 Store
- State 只能通过触发 Action 来更改
- State 的更改必须写成纯函数，也就是每次更改总是返回一个新的 State，在 Redux 里这种函数称为 Reducer

### Actions

- Action 很简单，就是一个单纯的包含 { type, payload } 的对象，type 是一个常量用来标示动作类型，payload 是这个动作携带的数据。Action 需要通过 store.dispatch() 方法来发送。

	- 比如一个最简单的 action：

		- {
  type: 'ADD_TODO',
  text: 'Build my first Redux app'
}

	- 一般来说，会使用函数（Action Creators）来生成 action，这样会有更大的灵活性，Action Creators 是一个 pure function，它最后会返回一个 action 对象：

		- function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}
		- 所以现在要触发一个动作只要调用 dispatch: dispatch(addTodo(text))
稍后会讲到如何拿到 store.dispatch

### Reducers

- Reducer 用来处理 Action 触发的对状态树的更改。
- 所以一个 reducer 函数会接受 oldState 和 action 两个参数，返回一个新的 state：(oldState, action) => newState。一个简单的 reducer 可能类似这样：

	- const initialState = {
  a: 'a',
  b: 'b'
};

function someApp(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_A':
      return { ...state, a: 'Modified a' };
    case 'CHANGE_B':
      return { ...state, b: action.payload };
    default:
      return state
  }
}
	- 值得注意的有两点：

		- 我们用到了 object spread 语法 确保不会更改到 oldState 而是返回一个 newState
		- 对于不需要处理的 action，直接返回 oldState

- Reducer 也是 pure function，这点非常重要，所以绝对不要在 reducer 里面做一些引入 side-effects 的事情，比如：

	- 直接修改 state 参数对象
	- 请求 API
	- 调用不纯的函数，比如 Data.now() Math.random()

- 因为 Redux 里面只有一个 Store，对应一个 State 状态，所以整个 State 对象就是由一个 reducer 函数管理，但是如果所有的状态更改逻辑都放在这一个 reducer 里面，显然会变得越来越巨大，越来越难以维护。得益于纯函数的实现，我们只需要稍微变通一下，让状态树上的每个字段都有一个 reducer 函数来管理就可以拆分成很小的 reducer 了：

	- function someApp(state = {}, action) {
  return {
    a: reducerA(state.a, action),
    b: reducerB(state.b, action)
  };
}
	- Redux 提供了一个工具函数 combineReducers 来简化这种 reducer 合并：

		- import { combineReducers } from 'redux';

const someApp = combineReducers({
  a: reducerA,
  b: reducerB
});

### Store

- 现在有了 Action 和 Reducer，Store 的作用就是连接这两者，Store 的作用有这么几个：

	- Hold 住整个应用的 State 状态树
	- 提供一个 getState() 方法获取 State
	- 提供一个 dispatch() 方法发送 action 更改 State
	- 提供一个 subscribe() 方法注册回调函数监听 State 的更改

- 创建一个 Store 很容易，将 root reducer 函数传递给 createStore 方法即可：

	- import { createStore } from 'redux';
import someApp from './reducers';
let store = createStore(someApp);

// 你也可以额外指定一个初始 State（initialState），这对于服务端渲染很有用
// let store = createStore(someApp, window.STATE_FROM_SERVER);

		- 现在我们就拿到了 store.dispatch，可以用来分发 action 了：

			- let unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch
store.dispatch({ type: 'CHANGE_A' });
store.dispatch({ type: 'CHANGE_B', payload: 'Modified b' });

// Stop listening to state updates
unsubscribe();

### Data Flow

- 以上提到的 store.dispatch(action) -> reducer(state, action) -> store.getState() 其实就构成了一个“单向数据流”，我们再来总结一下。

	- 1. 调用 store.dispatch(action)

		- Action 是一个包含 { type, payload } 的对象，它描述了“发生了什么”，比如：

			- { type: 'LIKE_ARTICLE', articleID: 42 }
{ type: 'FETCH_USER_SUCCESS', response: { id: 3, name: 'Mary' } }
{ type: 'ADD_TODO', text: 'Read the Redux docs.' }

		- 你可以在任何地方调用 store.dispatch(action)，比如组件内部，Ajax 回调函数里面等等。

	- 2. Action 会触发给 Store 指定的 root reducer

		- root reducer 会返回一个完整的状态树，State 对象上的各个字段值可以由各自的 reducer 函数处理并返回新的值。

			- reducer 函数接受 (state, action) 两个参数
			- reducer 函数判断 action.type 然后处理对应的 action.payload 数据来更新并返回一个新的 state

	- 3. Store 会保存 root reducer 返回的状态树

		- 新的 State 会替代旧的 State，然后所有 store.subscribe(listener) 注册的回调函数会被调用，在回调函数里面可以通过 store.getState() 拿到新的 State。

### 在 React 应用中使用 Redux

- 和 Flux 类似，Redux 也是需要注册一个回调函数 store.subscribe(listener) 来获取 State 的更新，然后我们要在 listener 里面调用 setState() 来更新 React 组件。
Redux 官方提供了 react-redux 来简化 React 和 Redux 之间的绑定，不再需要像 Flux 那样手动注册／解绑回调函数。
- <Provider>

	- <Provider> 作为一个容器组件，用来接受 Store，并且让 Store 对子组件可用，用法如下：

		- import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
		- 这时候 <Provider> 里面的子组件 <App /> 才可以使用 connect 方法关联 store。
		- <Provider> 的实现很简单，他利用了 React 一个（暂时）隐藏的特性 Contexts，Context 用来传递一些父容器的属性对所有子孙组件可见，在某些场景下面避免了用 props 传递多层组件的繁琐，

- Connect

	- connect() 这个方法略微复杂一点，主要是因为它的用法非常灵活：connect([mapStateToProps], mapDispatchToProps], [mergeProps], [options])，它最多接受4个参数，都是可选的，并且这个方法调用会返回另一个函数，这个返回的函数来接受一个组件类作为参数，最后才返回一个和 Redux store 关联起来的新组件，类似这样：

		- class App extends Component { ... }

export default connect()(App);

			- 这样就可以在 App 这个组件里面通过 props 拿到 Store 的 dispatch 方法，但是注意现在的 App 没有监听 Store 的状态更改，如果要监听 Store 的状态更改，必须要指定 mapStateToProps 参数。

				- [mapStateToProps(state, [ownProps]): stateProps]: 第一个可选参数是一个函数，只有指定了这个参数，这个关联（connected）组件才会监听 Redux Store 的更新，每次更新都会调用 mapStateToProps 这个函数，返回一个字面量对象将会合并到组件的 props 属性。 ownProps 是可选的第二个参数，它是传递给组件的 props，当组件获取到新的 props 时，ownProps 都会拿到这个值并且执行 mapStateToProps 这个函数。
				- [mapDispatchProps(dispatch, [ownProps]): dispatchProps]: 这个函数用来指定如何传递 dispatch 给组件，在这个函数里面直接 dispatch action creator，返回一个字面量对象将会合并到组件的 props 属性，这样关联组件可以直接通过 props 调用到 action， Redux 提供了一个 bindActionCreators() 辅助函数来简化这种写法。 如果省略这个参数，默认直接把 dispatch 作为 props 传入。ownProps 作用同上。

