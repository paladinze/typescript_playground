interface Bird {
  type: 'bird';
  flySpeed: number;
}

interface Lion {
  type: 'Lion',
  runSpeed: number;
}

type Animal = Bird | Lion;

function MoveAnimal(animal: Animal) {
  let speed: number;
  switch(animal.type) {
    case 'bird':
      speed = animal.flySpeed;
      break;
    case 'Lion':
      speed = animal.runSpeed;
  }
  console.log("Animal moves at speed: " + speed);
}