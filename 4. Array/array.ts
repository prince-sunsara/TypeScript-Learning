/*
 * Array:
    > data type in ts that can stores multiple values of different data types sequentially.
    > three ways to defines:
    1. using []
    2. using array constructor
    3. using Array.of method
    */

//    1. using []
const a: number[] = [1, 2, 3, 4];

//    2. using array constructor
const num: number[] = new Array(1, 2, 3);

//    3. using Array.of method
// const names: string[] = Array.of("Abhay", "Dipesh", "Mitesh");

// console.log(num[1]);

const s = "prince sunsara";
console.log(Array.isArray(s));

/*
 * LOOPS
 */
console.log("for loop");
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

console.log("for of loop");
for (let i of a) {
  console.log(i);
}

console.log("for in loop");
for (let i in a) {
  console.log(i);
}

console.log("for each loop");
a.forEach((i) => {
  console.log(i);
});
