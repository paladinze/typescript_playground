interface person {
  fname: string;
  lname: string;
  age: number;
}

function createPerson(person: person) {
  return person.fname + " " + person.lname;
}

let ze = createPerson({ fname: "ze", lname: "cheng", age: 5 });
console.log(ze);
