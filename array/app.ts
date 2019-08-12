let fibonacci: number[] = [1, 1, 2, 3, 5];
let list: any[] = ["Xcat Liu", 25, { website: "http://xcatliu.com" }];

// 常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
function sum() {
  let args: IArguments = arguments;
}
