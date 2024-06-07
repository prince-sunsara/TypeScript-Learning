//? THIS IS NORMAL TO DEFINES THE CLASS
// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }

//? NOW WITH SHORTHAND PROPERTY
class Person {
  constructor(
    public name: string,
    public age: number,
    protected phone: number
  ) {}
}

class Students extends Person {
  constructor(name: string, age: number, phone: number, public grade: string) {
    super(name, age, phone);
  }
}

const s: Students = new Students("prince", 23, 747428, "D");
console.log(s);
