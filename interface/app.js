function createPerson(person) {
    return person.fname + " " + person.lname;
}
var ze = createPerson({ fname: "ze", lname: "cheng", age: 5 });
console.log(ze);
