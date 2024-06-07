/*
 * ACCESS MODIFIRE in OOP in TS
    > 
//*                 / Parent Class / Child Class / Outside Class
 >              --------------------------------------------------
?       publid     /     ✅       /    ✅       /    ✅ 
?       protected  /     ✅       /    ✅       /    ❌
?       private    /     ✅       /    ❌       /    ❌ 
//?
 */

class Person {
  public name: string;
  protected age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  private introduce(): string[] {
    return this.hobbies;
  }
}

class Students extends Person {
  grade: string;

  constructor(name: string, age: number, hobbies: string[], grade: string) {
    super(name, age, hobbies);
    this.grade = grade;
  }
}

// const s: Students = new Students("prince", 21, ["hello"], "D");
// console.log(s);

const s: Students = new Students("prince", 21, ["hello"], "D");

const p: Person = new Person("prince", 21, ["hello"]);
// console.log(p.introduce()); // never accept this, private is only accesible in class only
