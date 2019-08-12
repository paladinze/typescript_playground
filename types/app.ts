let isDone: Boolean = true;

// 使用 number 定义数值类型
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// string
let myName: string = "Tom";
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数

function alertName(): void {
  alert("My name is Tom");
}

// 但如果是 any 类型，则允许被赋值为任意类型。
let myFavoriteNumber: any = "seven";
myFavoriteNumber = 7;

// 在任意值上访问任何属性都是允许的
let anyThing: any = "hello";
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName("Jerry");
anyThing.setName("Jerry").sayHello();
anyThing.myName.setFirstName("Cat");

// 类型推断：以下代码虽然没有指定类型，但是会在编译的时候报错：
let myFavoriteNumber = "seven";
myFavoriteNumber = 7;
// 它等价于
let myFavoriteNumber: string = "seven";
myFavoriteNumber = 7;
