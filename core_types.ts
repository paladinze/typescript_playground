// string
let myName: string = "Tom";

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// boolean type
let isDone: Boolean = true;

// void means no return value
function alertName(): void {
  alert("My name is Tom");
}

// any means any type is allowed (should be avoided, as this defeats the purpose of type check)
let myNumber: any = "seven";
myNumber = 7;

// any type 
let anyThing: any = "hello";
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
anyThing.setName("Jerry");
anyThing.setName("Jerry").sayHello();
anyThing.myName.setFirstName("Cat");

// type can be inferred if not specified
let myFavoriteNumber = "seven";

// equavalent to
// let myFavoriteNumber: string = "seven";

// array types
let me: string[] = ['hello', "there"];

// intersaction type
type Employee = {
  name: string;
}
type Admin = {
  name: string;
  privileges: string[];
}
type ElevatedEmployee = Employee & Admin;