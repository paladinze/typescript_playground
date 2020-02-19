// decorator factory

function Logger(tag: string) {
  return function(constructor: Function) {
    console.log('Loggin...');
    console.log(constructor);
  }
}

@Logger("Person Tag")
class Person {
  name = 'Ze';

  constructor() {
    console.log('creating object');
  }
}

const person = new Person();