/*
 * ABSTRACT CLASS In TS
    > provide a way to defines comman properties and methods that multiple derived class can shares
    > this promots code reuse and helps establish a common interface for realated class.
    > abstract class can not be instantiated

    > focus on class inheritance and sharing common functionality
    > where as the useContext use in react focus on managing global state and allowing component to consume that state
 */

// abstract class Animal {
//   abstract sound(): void; // abstract method
//   eat(): void {
//     // concrete method
//     console.log("Eating...");
//   }
// }

// class Dog extends Animal {
//   sound(): void {
//     console.log("Woof!");
//   }
// }

// class Cat extends Animal {
//   sound(): void {
//     console.log("Meow!");
//   }
// }

// const dog = new Dog();
// dog.sound(); // Output: Woof!
// dog.eat(); // Output: Eating...

// const cat = new Cat();
// cat.sound(); // Output: Meow!
// cat.eat(); // Output: Eating...

abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): void;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(color: string, protected radius: number) {
    super(color);
  }

  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea = (): void => {
    console.log(`Radius = ${this.radius}\nColor: ${this.color}`);
  };
}

const c = new Circle("red", 5);
console.log(c.calculateArea());
c.displayArea();
