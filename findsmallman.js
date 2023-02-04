const allPerson = [
  { name: "sakib", age: 30 },
  { name: "samiul", age: 25 },
  { name: "sahid", age: 50 },
  { name: "samin", age: 40 },
  { name: "Arafat", age: 23 },
];
function findSmallMan(persons) {
  let smallMan = persons[0];
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age < smallMan.age) {
      smallMan = person;
    }
  }
  return smallMan.name;
}
const inputPersons = findSmallMan(allPerson);
console.log("The smallest man:", inputPersons);
