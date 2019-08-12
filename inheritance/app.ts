class Shape3D extends Shape {
  volume: number;

  constructor(
    public name: string,
    width: number,
    height: number,
    length: number
  ) {
    super(name, width, height);
    this.volume = length * this.area;
  }

  shoutout() {
    return (
      "I'm " + this.name + " with a volume of " + this.volume + " cm cube."
    );
  }

  superShout() {
    return super.shoutout();
  }
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
