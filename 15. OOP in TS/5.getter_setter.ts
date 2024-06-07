/*
     * GETTER & SETTER
        > getter nd setter methods is used to control the access and modification of class properties.
        > getter: retrieve the value of the properties
        > setter: set values of the properties with addition logic or validation.
*/

class Person {
  constructor(public name: string, private _age: number | undefined) {}

  introduce(): string {
    return `Hi, I'm ${this.name}, I'm ${this.age} years old.`;
  }

  public get getValue(): any {
    return this.introduce();
  }

  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("Age is not valid");
    }
    this._age = age;
  }

  public get age(): number {
    if (this._age === undefined) {
      throw new Error("Age is undefine");
    }
    return this._age;
  }
}

const p: Person = new Person("Prince", 512);
p.age = 15;

console.log(p.introduce());
