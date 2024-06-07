//* STATIC PROPERTY & METHOD
// > It belongs to the class itself rather then instance
// > by making props, methods static, you can accept it without creating an instance of class
// > this's usefull for utility function, or property that don't relay on instance-specific data

class Maths {
  static PI: number = Math.PI;

  public static add(a: number, b: number): number {
    return a + b;
  }
}

const m = new Maths();
// console.log(m.PI); // not working this
console.log(Maths.PI); // this is how static can accept
console.log(Maths.add(10, 15));
