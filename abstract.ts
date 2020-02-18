abstract class Human {
  constructor(private fname: string) {

  }

  abstract sayName(this: Human): void;
}

class Manny extends Human {
  constructor(fname: string) {
    super(fname);
  }
  sayName() {
    console.log('say something');
  }
}