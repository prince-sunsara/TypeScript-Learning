//* TYPES IN TYPESCRIPT ///

//* PRIMITIVES TYPES */

//* Boolean:
// let isEven: boolean = false;
// const oddEven = (a: number) => {
//   if (a % 2 == 0) {
//     return !isEven;
//   } else {
//     return isEven;
//   }
// };
// console.log(" 5 is even : ", oddEven(5));
// console.log(" 6 is even : ", oddEven(6));

//* Number: 1 2 3
// console.log(Number.MAX_SAFE_INTEGER);

//* BigInt: works for larger number then number type
// let bigNumber: bigint = 9007199254740991n;
// console.log(bigNumber);

//* Symbol

//* STRING //
// let fname = "Prince";
// let lname = "Sunsara";
// console.log(fname + " " + lname);
// console.log(fname.length);
// console.log(fname.toUpperCase());
// console.log(lname.toLowerCase());
// console.log(lname.substring(3).toUpperCase());
// console.log(`My name is ${fname} ${lname}`);

//* NOT PRIMITIVE TYPES *//

//* Array: [1,2] collection of values of the same type

//* Tuple: Allows you to express an array with a fixed number of elements, each with a known type (which need not be the same):
// let x: [string, number];
// x = ["hello", 10];

//* Object Type : Represented through object types, especially when working with structured data

//* Enum: represents a set of named values, often used to define a collection of related constants.
// let Gender = {
//   Male: 0,
//   Female: 1,
//   Transgender: 2,
// };

//* Void:
// Generally used on function return-types

//* Null:
// It is used when an object does not have any value

//* Undefined:
// Denotes value given to uninitialized variable

//* Any:
// If variable is declared with any data-type then any type of value can be assigned to that variable
// most flexible type in ts

//* Unknonwn:
// safer alternative to any b'coz it stil enforce type checking and safety
// variable of type unknonwn can hold value of any type, but you must perform type checks or type assertions before using them in specific ways.

//* Never.
