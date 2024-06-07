/*
 *  INHERTITANCE
    > allos classes to reuse the functionality of another class withour rewriting it
 */

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  // method
  introduce(): string {
    return `Hey, ${this.name} is here.❤️`;
  }
}

const p1: Person = new Person("prince", 21, ["radhe", "krishna"]);
console.log(p1.introduce());

class Students extends Person {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }
}

// const s: Students = new Students("Nastik", 21, ["Ram", "Ravan"], 12);
// console.log(s, s.introduce());
