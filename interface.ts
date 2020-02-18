// interface can describe the structure of an object
interface Person {
  fname: string;
  lname?: string; // ? means optional
  age: number;

  greet(msg: string): void;
}

let user1: Person;
user1 = {
  fname: 'ze',
  age: 14,
  greet(msg: string) {
    console.log(msg);
  }
};

// interface can describe the structure of a function
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
}

// interface can be used as a contract that class must implement (like abstract class)
interface Greetable {
  fname: string;
  greet(msg: string): void;
}

class Person implements Greetable {
  constructor(public fname: string) {}
  greet(msg: string) {
    console.log(msg);
  }
}
