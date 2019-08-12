var isDone = true;
// 使用 number 定义数值类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
// string
var myName = "Tom";
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// 在 TypeScript 中，可以用 void 表示没有任何返回值的函数
function alertName() {
    alert("My name is Tom");
}
// 但如果是 any 类型，则允许被赋值为任意类型。
var myFavoriteNumber = "seven";
myFavoriteNumber = 7;
// 在任意值上访问任何属性都是允许的
var anyThing = "hello";
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName("Jerry");
anyThing.setName("Jerry").sayHello();
anyThing.myName.setFirstName("Cat");
// 类型推断：以下代码虽然没有指定类型，但是会在编译的时候报错：
var myFavoriteNumber = "seven";
myFavoriteNumber = 7;
// 它等价于
var myFavoriteNumber = "seven";
myFavoriteNumber = 7;
