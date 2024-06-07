/*
    generics is work on single type data types , what about multiple datatypes?
    here comes function overloading, lets go through example
*/

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
