// 普通函数
function sum(x: number, y: number): number {
  return x + y;
}

// 函数表达式
let mySum: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

// 用接口定义函数形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
};
