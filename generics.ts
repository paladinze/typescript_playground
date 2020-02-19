// get additional type info for more complex function or class
const names: Array<string> = [];
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  data.toFixed(1);
})

// custom generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const objA = {name: 'hello'};
const objB = {age: 1};
// const objB = 3; should fail after adding extends above
const mergedObj = merge(objA, objB);
console.log(mergedObj.age);

// custom generics 2
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let desc = 'got no value';
  if (element.length >= 1) {
    desc = `${element.length}`;
  }
  return [element, desc];
}
console.log(countAndDescribe([1]))

// generic class
class DataStorage<T> {
  private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }
}
const numberStore = new DataStorage<number>();
numberStore.addItem(123);