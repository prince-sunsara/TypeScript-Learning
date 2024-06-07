const numbers: number[] = [1, 2, 3, 4, 5];

//* ARRAY MAP METHOD
// it transform each element and return new array

// console.log(numbers.map((i: number) => i * 2));
// console.log(numbers);

// console.log(numbers.map((i: number) => i.toString()));

//* ARRAY FILTER METHOD
// it apply condition on given array and return new array

// console.log(numbers.filter((i: number) => i > 2));
// console.log(numbers);

//* ARRAY REDUCE METHOD
// apply method to all elements in array, reduce them in single output and return output

console.log(numbers.reduce((sum, index) => sum + index, 0));
