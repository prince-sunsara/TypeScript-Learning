/*
 * CLASS : blueprint for creating objects
    > to name a class use PascalCase
 */

// class Person {
//   name: string = "prince";
//   age: number = 21;
//   hobbies: string[] = ["reading", "writing"];
// }
// const p1: Person = new Person();
// console.log(p1);

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const p1: Person = new Person("prince", 21, ["radhe", "krishna"]);
const p2: Person = new Person("Nastik", 21, ["Ram", "Ravan"]);
console.log(p1);
console.log(p2);
