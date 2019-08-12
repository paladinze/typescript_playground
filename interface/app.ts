// 定义的变量和接口必须完全一致(除可选类型)
interface Person1 {
  name: string;
  age: number;
  alias?: string; // <= 可选属性
}

let tom: Person1 = {
  name: "Tom",
  age: 25
};

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
