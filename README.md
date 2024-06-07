# TYPESCRIPT LEARNING
TypeScript is a programming language that is a superset of JavaScript, which means it has all the features of JavaScript and more. It adds static typing to the language, allowing developers to specify types for variables, function parameters, and return values. This can help catch errors early in the development process and provide better tooling support for large-scale applications. TypeScript code is transpiled into JavaScript, so it can run anywhere JavaScript does, like in browsers or on Node.js

## TYPES IN TYPESCRIPT

//* PRIMITIVES TYPES */

Boolean
  > let isEven: boolean = false;
Number: 1 2 3
BigInt: works for larger number then number type
Symbol
String

//* NOT PRIMITIVE TYPES */
Array: [1,2] collection of values of the same type
Tuple: Allows you to express an array with a fixed number of elements, each with a known type (which need not be the same):
Object Type : Represented through object types, especially when working with structured data
Enum: represents a set of named values, often used to define a collection of related constants.
Void:
  > Generally used on function return-types
Null
  > It is used when an object does not have any value
Undefined:
  > Denotes value given to uninitialized variable
Any:
  > If variable is declared with any data-type then any type of value can be assigned to that variable
  > most flexible type in ts
Unknonwn:
  > safer alternative to any b'coz it stil enforce type checking and safety
  > variable of type unknonwn can hold value of any type, but you must perform type checks or type assertions before using them in specific ways.
Never.

![image](https://github.com/prince-sunsara/TypeScript-Learning/assets/108970023/bc813b7b-ba4e-4fdf-ae6c-43f0ac3077f4)

### TYPE ANOTATION
  > What is Type Annotation in TypeScript
  > TypeScript uses type annotations to explicitly specify types for identifiers such as variables, functions, objects, etc.
  > TypeScript uses the syntax : type after an identifier as the type annotation, which type can be any valid type.
  > Once an identifier is annotated with a type, it can be used as that type only. If the identifier is used as a different type, the TypeScript compiler will issue an error.

### TYPE INFERENCE :
    > ability of the ts compiler to automatically determine and 
      asign types to variables, expression, and function
      return values based on their usage and context in the code

### TYPE ANNOTATION
    > statically defines the type of the variable

## FUNCION IN TYPESCRIPT

### FUNCTION DECLARATION
    function myFunc(a: string, b: number) {
      return `hello ${a} your id is ${b}`;
    }

    const myFunc = (a: string, b: number) => {
      return `hello ${a} your id is ${b}`;
    };

### FUNCTION INVOCATION
    > to execute a function you simply invoke it by using it name and parameters
    > myFunc('prince', 1)

  
### OPTIONAL AND DEFAULT PARAMENTERS:
    > optional parameters defines with ? after parameter

    // default parameters
    function myFunc(name: string, id: number = 1) {
      return `Name: ${name} \nID: ${id}`;
    }

    // optional parameters
    function myFunc(name: string, id?: number) {}

## ARRAY IN TS
  Array:
    > data type in ts that can stores multiple values of different data types sequentially.
    > three ways to defines:
    1. using []
    2. using array constructor
    3. using Array.of method

### ARRAY METHODS

//* ARRAY MAP METHOD
  > it transform each element and return new array
    console.log(numbers.map((i: number) => i * 2));

//* ARRAY FILTER METHOD
  > it apply condition on given array and return new array
    console.log(numbers.filter((i: number) => i > 2));

//* ARRAY REDUCE METHOD
  > apply method to all elements in array, reduce them in single output and return output

## OBJECT
  > key: value, different types

// const person: {
//   name: string;
//   age: number;
//   address: { village: string; state: string };
// } = {
//   name: "prince",
//   age: 23,
//   address: {
//     village: "manund",
//     state: "Gujarat",
//   },
// };

### TYPE ALIAS
// way to give a name to a specific type or combination of types
// allow you to create custom name for a type, making it easier to reduce & refers to the same type in different parts of your code
// provide you better readablility, organization, and abstraction of complex types

type Person = {
  name: string;
  age: number;
  address: { village: string; state: string };
};

const person: Person = {
  name: "prince",
  age: 23,
  address: {
    village: "manund",
    state: "Gujarat",
  },
};

### FUNCTION/METHOD CALL SIGNATURE
    >   Declaration or Definition of a function, which includes the function name,return type, parameters
    >   Defines the structure and type information of a function without including the function's implementation or body
    ! Call signature are typically used inside object type notation to describe the shape of a function within object type
      
      type Student = {
        name: string;
        age: number;
        gender?: string;
        greet: (country: string) => string;
      };

## ENUMS TYPE
  > commonly used when you want to represent a set of related values and choose one value from multiple option
  > provide convenient way to define set of named value and associate them with specific meaning.
      
      enum Roles {
        admin = "admin",
        user = "user",
      }

## TUPLES IN TS
    > fixed numbers of element
    
    // type PersonInfo = [string, number, boolean];
    type PersonInfo = readonly [string, number, boolean];

## UNION: symbol in ts -> |
    > a = [1,2,3], b = [4,5,6]
    > a U b = [1,2,3,4,5,6]
    
    > allows you to specify that variable can hold value of multiple types
    
    //! Example :   UNION
    // const inputValue = (value: string | number | boolean) => {};
    
    // inputValue(55);
    // inputValue("Prince");
    // inputValue(true);
    
    // const userInput = (value: string | number): string | number => {
    //   return typeof value === "number" ? value * 2 : value.toUpperCase();
    // };

## INTERSECTION: symbol in ts -> &
    > a = [1,2,3], b = [2,3,4]
    > a ∩ b = [2,3]
    
    > allows you to combine multiple types into single type.

// Example: INTERSECTION
    
    type Person = {
      name: string;
      age: number;
    };
    
    type Employee = {
      emp_id: number;
      department: string;
    };

type EmployeeDetails = Person & Employee;

//* badhe badhu lkhvu pade * necessary chhe
   
    const emp: EmployeeDetails = {
      emp_id: 123,
      name: "prince",
      age: 23,
      department: "IT",
    };

## GENERICS IN TS
     > It allows you to create reusable components or functions that can work with multiple data types

    // const userInput = (value: string | number): string | number => {
    //   return typeof value === "number" ? value * 2 : value.toUpperCase();
    // };
    // console.log(userInput(10));
    // console.log(userInput("Prince"));

    > it doesn't have power to return for boolean type, even if we want this then we have to write  | boolean, each time writing like this is not good thing and time consuming

    //! SOLUTION: WITH GENERIC
    function userInput<T>(value: T): T {
      console.log(value);
      return value;
    }
    
    // const userInput = <T>(value: T): T => {
    //   console.log(value);
    //   return value;
    // };
    console.log(userInput(10));
    console.log(userInput<string>("Prince")); // for practice write type in <>
    console.log(userInput<boolean>(false));
    console.log(userInput(["prince", 7]));

## FUNCTION OVERLOADING
    > generics is work on single type data types , what about multiple datatypes?
    > here comes function overloading, lets go through example
    
    // function add<T>(a: T, b: T): void {
    //   console.log(a);
    //   console.log(b);
    // }
    
    // console.log(add<number>(3, 4));
    
    // what about add(3, "prince")
    // this is also one type of generic
    
    //* function overloading comes here to solve this
    
    function add<T, U>(a: T, b: U): void {
      console.log(a);
      console.log(b);
    }
    
    console.log(add<number, number>(3, 4));
    console.log(add<number, string>(3, "prince"));

## INTERFACE
    > Allows you to defines contract for an object's shape
    > specifies properties and their types, an object must have to be considered of the perticular interface type
    > used for type checking during development and do not genereted any JS code at runtime
    
    interface Greet {
      name: string;
      age: number;
    }
    
    const g: Greet = {
      name: "Prince",
      age: 23,
    };

## TS SET UP
    //* WATCH SINGLE FILE
      > tsc -w/-watch index.js --> automatic create js file and up-to-date with our code / one file
      
    //? WATCH ALL FILES
      > after tsc --init
      > tsc -w/-watch  --> automatic create all js files and up-to-date with our code
    
    //* ROOTDIR --> .JS & OUTDIR--> .JS
      > rootdir accept all the .ts file
      > outdir accept all the output files .js
      > in tsconfig file you have to mention perticular path for both
    
    //? EXTRA INCLUDE, EXCLUDE
      > in tsconfig file you can add/remove perticular folders with the use of include and exclude
      > e.g. "exclude": [node]

## OBJECT ORIENTED PROGRAMMING IN TYPESCRIPT

  ### CLASS : blueprint for creating objects
    > to name a class use PascalCase
    
    // class Person {
    //   name: string = "prince";
    //   age: number = 21;
    //   hobbies: string[] = ["reading", "writing"];
    // }
    // const p1: Person = new Person();
    // console.log(p1);

### INHERTITANCE
    > allos classes to reuse the functionality of another class withour rewriting it

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
    class Students extends Person {
      grade: number;
    
      constructor(name: string, age: number, hobbies: string[], grade: number) {
        super(name, age, hobbies);
        this.grade = grade;
      }
    }

### ACCESS MODIFIRE in OOP in TS 
    //*                 / Parent Class / Child Class / Outside Class
     >              --------------------------------------------------
    ?       publid     /     ✅       /    ✅       /    ✅ 
    ?       protected  /     ✅       /    ✅       /    ❌
    ?       private    /     ✅       /    ❌       /    ❌ 

    class Person {
      public name: string;
      protected age: number;
      private hobbies: string[];
    }

### NOW WITH SHORTHAND PROPERTY
    class Person {
      constructor(
        public name: string,
        public age: number,
        protected phone: number
      ) {}
    }

### GETTER & SETTER
        > getter nd setter methods is used to control the access and modification of class properties.
        > getter: retrieve the value of the properties
        > setter: set values of the properties with addition logic or validation.

    class Person {
      constructor(public name: string, private _age: number | undefined) {}
    
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

### STATIC PROPERTY & METHOD
    > It belongs to the class itself rather then instance
    > by making props, methods static, you can accept it without creating an instance of class
    > this's usefull for utility function, or property that don't relay on instance-specific data

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

### ABSTRACT CLASS In TS
    > provide a way to defines comman properties and methods that multiple derived class can shares
    > this promots code reuse and helps establish a common interface for realated class.
    > abstract class can not be instantiated

    > focus on class inheritance and sharing common functionality
    > where as the useContext use in react focus on managing global state and allowing component to consume that state

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

## INTERFACE VS TYPE
    1.
    > use custom type when you need unions, intersections, or types.
    > Use interface when defining object shapes or classes that adhere to a contract
    
    2. 
    > Custom types can use unions and intersections for more complex type compositions.
    > Interfaces can extend other interfaces to inherit their members

    ?> same interface name treated as one
        type Stud = {
            name:string;
            age: number;
        }
        type Addr = {
            city:string;
            pinCode: number;
        }

        const bioData: Stud & Addr = {
            name: "prince",
            age: 29,
            city: "Patan",
            PinCode : 384260
        }
        
    ?> For interface 
        interface Stud {
            name:string;
            age: number;
        }
        interface Addr {
            city:string;
            pinCode: number;
        }

        const Data extends Stud, Addr {}

        // const bioData:Data = {
        //     name: "prince",
        //     age: 29,
        //     city: "Patan",
        //     PinCode : 384260
        // }

        class BioData implements Data {
            -------- Code --------
        }

## TYPEOF GUARD
        > A typeof guard in TS lets you narrow down the type of a variable based on its runtime value.
    
    TYPE NARROWING IN TS
        > In Typescript, the narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances. 
        > This particularly useful with union types and generic types

      const favHobbies = (hobby: string | string[]): void[] | undefined => {
        if (typeof hobby === "object" && Array.isArray(hobby)) {
          /// typeof guard
          return hobby.map(() => {});
        } else {
          console.log(hobby);
        }
      };
