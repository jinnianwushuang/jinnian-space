<!--
 * @Date           : 2021-05-05 14:01:15
 * @FilePath       : /jinnian-space/src/pages/web/react/md/react-base-demo.md
 * @Description    : 
-->
# react 基础 demo

```react

/*
 * @Date           : 2021-05-05 04:14:10
 * @FilePath       : /app-demo-1/src/view/view1.js
 * @Description    :
 */
import React from "react";
import PropTypes from "prop-types";
const { Provider, Consumer } = React.createContext();
const el = (
  <div>
    {" "}
    <div>未来很美好 </div>{" "}
  </div>
);
const Test1 = () => {
  return el;
};
const classes666 = {
  root: {},
  red: {
    color: "red",
    backgroundColor: "#ccc",
  },
};
const name1 = "66sxsx999999";
const div2 = <h3>KKKKKKKKKKKKKK</h3>;
const list1 = [
  { label: "react", value: "m1" },
  { label: "基础", value: "m2" },
];
// {} 中 不能写 对象表达式 if 等表达式
const nn = 5;
const Say1 = (props) => {
  if (nn > 5) {
    return (
      <div>
        大于5 ---- {props.name} ----{props.age}
      </div>
    );
  } else {
    return (
      <div>
        小于等于5 ---- {props.name} ----{props.age}
      </div>
    );
  }
};
// hello 组件
class Hello extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    num: 1,
    text: "xsx",
  };
  handleClick = () => {
    this.setState({
      num: this.state.num + 1,
    });
    console.log("点击了  class Hello extends React.Component");
  };
  inputChange = (e) => {
    console.log("e", e);
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}> HELLO 类方法 组件 {this.state.num}</h2>
        <div>
          ---- {this.props.name} ----{this.props.age}-----{this.props.age2}----
        </div>
        <div>兄弟组件之间 回调父级传值 {this.props.show_num}</div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.inputChange}
        />
      </div>
    );
  }
}
//类型检测
Hello.propTypes = {
  age: PropTypes.number,
};
// 默认值
Hello.defaultProps = {
  age2: 188,
};
// hello2 子组件
const Hello2SubChild = (props) => {
  return (
    <div>
      <div>Hello2 组件的子组件---</div>
      <Consumer>{(data) => <span>跨多级传值 接收到的{data}</span>}</Consumer>
      <div>{props.children}</div>
    </div>
  );
};
// hello2 组件
class Hello2 extends React.Component {
  handleClick() {
    console.log("点击了");
  }
  render() {
    return (
      <div>
        <div onClick={this.handleClick}>单独抽离出来的 Hello</div>
        <button onClick={this.props.change_father_num}>
          兄弟组件之间传值 调用父级 传入得函数 ，改变父级的state
        </button>
        <div>
          <Hello2SubChild>
            {" "}
            <h3>Hello2SubChild 组件 通过 children 传递的 子节点</h3>{" "}
          </Hello2SubChild>
        </div>
      </div>
    );
  }
}

class Hello3 extends React.Component{
  constructor(props){
    super(props)
  }
  state={
    name:'HELLO3 组件 render props 共享值，高阶组件复用'
  }
  render(){
    return this.props.render(this.state)

  }
}

const handleClick2 = (e) => {
  console.log("e", e);
  console.log("点击了函数组件 事件");
};
class View1 extends React.Component {
  constructor(props) {
    super(props);
    console.log("生命周期  constructor");
  }
  componentWillUnmount() {
    console.log("生命周期  componentWillUnmount");
  }
  componentDidUpdate() {
    console.log("生命周期  componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("生命周期  componentWillUnmount");
  }
  state = {
    father_num: 6,
  };
  handleChangeFatherNum = () => {
    this.setState({
      father_num: this.state.father_num + 1,
    });
  };
  render() {
    console.log("生命周期    render");
    return (
      <Provider value="跨多级 子节点 传递 数值">
        <div>
          <h1 className="classesxsx666" onClick={handleClick2}>
            我 {name1} 带你.......{classes666.red.color}...........
          </h1>
          <div>
            <Say1 name="今年" age={89} />
          </div>
          <div>{div2}</div>
          <Test1 />
          <div style={classes666.red}>
            {list1.map((x) => (
              <div key={x.label}>
                {x.label}----------{x.value}
              </div>
            ))}
          </div>
          <div>
            <Hello name="明天" age={39} show_num={this.state.father_num} />
            <Hello2 change_father_num={this.handleChangeFatherNum} />
            <Hello3 render={ data=><p>拿到的复用数据----- {data.name} </p>} />
          </div>
          
         
        </div>
      </Provider>
    );
  }
}
export default View1;



```

## 高阶组件

```react
/*
 * @Date           : 2021-05-05 22:49:51
 * @FilePath       : /app-demo-1/src/view/Demo.js
 * @Description    : 
 */
import React from 'react'
import ReactDOM from 'react-dom'
/* 
  高阶组件
*/
// 创建高阶组件
function withMouse(WrappedComponent) {
  // 该组件提供复用的状态逻辑
  class Mouse extends React.Component {
    // 鼠标状态
    state = {
      x: 0,
      y: 0
    }
    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    // 控制鼠标状态的逻辑
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }
    render() {
      console.log('Mouse:', this.props)
      return <WrappedComponent {...this.state} {...this.props} />
    }
  }
  // 设置displayName
  Mouse.displayName = `WithMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
// 用来测试高阶组件
const Position = props => {
  console.log('Position:', props)
  return (
    <p>
      鼠标当前位置：(x: {props.x}, y: {props.y})
    </p>
  )
}
// 获取增强后的组件：
const MousePosition = withMouse(Position)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <MousePosition a="1" />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))


```