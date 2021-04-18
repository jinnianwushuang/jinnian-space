# ts

## TypeScript语法

### 基本数据类型

- 布尔值

	- let isDone:boolean = false;
	- let createdByBoolean:boolean = Boolean(1);
	- 区别于let newBool:boolean = new Boolean(1);  返回的是Boolean对象

- 数字类型

	- let decLiteral: number = 6;

- 字符串

	- let myName: string = 'Tom';
	- 模板字符串 let sentence: string = `Hello, my name is ${myName}

- 空值

	- 用void表示没有任何返回值的函数  
function alertName(): void {
    alert('My name is Tom');
}
	- void 类型只能被赋值为 undefined 和 null;

		- let unusable: void = undefined;

- null

	- let n: null = null;
	- let num: number = undefined;

- undefined

	- let u: undefined = undefined;

### 对象类型

- 对象

	- 接口（Interfaces）

		- 用法1：用于对类的一部分行为进行抽象

		  https://ts.xcatliu.com/advanced/class-and-interfaces.html

		- 用法2：对「对象的形状（Shape）」进行描述。

			- 属性名必须完全一致：
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

				- 注意：定义的变量比接口多或者少 都是不允许的

			- 可选属性：
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};

				- 注意：这时仍然不允许添加未定义的属性

			- 任意属性：
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

				- 注意：一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性：

					- interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
//报错  
//因为任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了

			- 只读属性：
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;//报错


				- 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

		- 写法：接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。

			- [C#]
public interface IServiceProvider
public interface IFormatable

- 数组

	- 定义方式

		- 「类型 + 方括号」表示法

			- let fibonacci: number[] = [1, 1, 2, 3, 5];

		- 数组泛型 Array Generic  （Array<elemType>）

			- let fibonacci: Array<number> = [1, 1, 2, 3, 5];

		- 用接口表示数组

			- interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

	- 常见用法

		- 使用any，来表示允许数组中出现任意类型

			- let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

		- 类数组（Array-like Object 不是数组类型）

			- function sum() {
    let args: number[] = arguments;
}
//报错
			- 常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
    let args: IArguments = arguments;
}

- 函数

	- 函数声明

		- function sum(x: number, y: number): number {
    return x + y;
}

			- 注意：注意，输入多余的（或者少于要求的）参数，是不被允许的

				- function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2, 3);

	- 函数表达式

		- let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

			- 注意：在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

	- 接口

		- interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

	- 可选参数

		- function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

			- 注意：可选参数必须写在必选参数后面

	- 参数默认值

		- TypeScript 会将添加了默认值的参数识别为可选参数
（此时，有默认值的参数就是可选的了，并且参数位置也不受「可选参数必须接在必需参数后面」的限制）

			- function buildName(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let cat = buildName(undefined, 'Cat');

	- 剩余参数

		- ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数

			- function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);

	- 重载

		- 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

			- function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

### 任意类型 Any

- 赋值

	- 在赋值过程中，可以被赋值为任意类型

- 属性和方法

	- 可访问Any上的任意属性和任何方法

- 未声明类型的变量

	- 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

		- let something;
等同于：let something:any;

### 联合类型 Union Types

- 定义：表示取值可以为多种类型中的一种

	- let myFavoriteNumber: string | number;

- 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法

	- function getLength(something: string | number): number {
    return something.toString();
 // return something.toString(); 报错
}

- 被赋值时：根据类型推论的规则推断出一个类型

	- let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

### 元组 Tuple

- 用法1：表示一个已知元素数量和类型的数组，各元素的类型不必相同

	-   let x: [string, number];
  x = ['hello', 10]; // OK

		- 注意：当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项。

- 用法2：当访问一个越界的元素，会使用联合类型替代

	- x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型

		- 注意：当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型

### 枚举 enum

- 用法：用于取值被限定在一定范围内的场景
- 类型

	- 常数项（普通枚举）

		- 声明

			- enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

				- 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

		- 手动赋值

			- enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

				- 未手动赋值的枚举项会接着上一个枚举项递增1

		- 手动赋值的枚举项不是数字

			- enum Days {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

		- 重复赋值

			- enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 3); // true
console.log(Days["Wed"] === 3); // true
console.log(Days[3] === "Sun"); // false
console.log(Days[3] === "Wed"); // true

				- 后赋值的会覆盖先赋值的

	- 计算所得项（普通枚举）

		- enum Color {Red, Green, Blue = "blue".length};
//"blue".length 就是一个计算所得项

			- 注意：如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错

	- 常数枚举

		- 使用：用 const enum 定义的枚举类型

			- const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];


		- 与普通枚举的区别：它会在编译阶段被删除，并且不能包含计算成员

			- 编译结果：
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];

	- 外部枚举

		- 使用：用 declare enum 定义的枚举类型

### 字符串字面量类型

- 用法：用来约束取值只能是某几个字符串中的一个

	- type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

### 类 Class

- 访问修饰符(限制 属性和方法的可访问性)

	- public

		- 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的

	- private

		- 修饰的属性或方法是私有的，不能在声明它的类的外部访问

	- protected

		- 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的

- 抽象类（abstract）

	- 特点

		- 抽象类是不允许被实例化的
		- 抽象类中的抽象方法必须被子类实现

	- demo

		- abstract class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
    public abstract sayHi();
}

class Cat extends Animal {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom');

- 类型定义

	- let a: Animal = new Animal('Jack');

## 运行时

### 类型推论

- 定义：如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
- 使用场景：

	- 已赋值

		- TypeScript 会在没有明确的指定类型的时候推测出一个类型

	- 未赋值

		- 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

### 类型断言（Type Assertion）

- 定义：用来手动指定一个值的类型
- 语法

	- <类型>值

		- function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

	- 值 as 类型

### 使用第三方库时

- 如：在 TypeScript 中，我们并不知道 $ 或 jQuery 是什么东西

	- 声明

		- declare var jQuery: (string) => any;

	- 引用声明

		- /// <reference path="./jQuery.d.ts" /> 三斜杠指令

jQuery('#foo');

### 内置对象

- 定义：根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。
- ECMAScript

	- Boolean
	- Error
	- Date
	- RegExp

- DOM和BOM

	- Document
	- HTMLElement
	- Event
	- NodeList 

### 类型别名

- 用法：用来给一个类型起个新名字。

	- type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

