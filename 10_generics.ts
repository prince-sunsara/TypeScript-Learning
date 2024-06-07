/*
    * GENERICS IN TS
        > It allows you to create reusable components or functions that can work with multiple data types
*/
// const userInput = (value: string | number): string | number => {
//   return typeof value === "number" ? value * 2 : value.toUpperCase();
// };
// console.log(userInput(10));
// console.log(userInput("Prince"));

// -> it doesn't have power to return for boolean type, even if we want this then we have to write  | boolean, each time writing like this is not good thing and time consuming

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
