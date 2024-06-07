/*
 ?   FUNCTION/METHOD CALL SIGNATURE
    >   Declaration or Definition of a function, which includes the function name,return type, parameters
    >   Defines the structure and type information of a function without including the function's implementation or body

    ! Call signature are typically used inside object type notation to describe the shape of a function within object type
*/

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
};

const s1: Student = {
  name: "prince",
  age: 21,
  greet: (country): string =>
    `My name is ${s1.name} and I'm ${s1.age}y old and I'm from ${country}`,
};

const s2: Student = {
  name: "Radhe",
  age: 22,
  greet: (country): string =>
    `My name is ${s2.name} and I'm ${s2.age}y old and I'm from ${country}`,
};

const intro = (s1: Student): string => {
  const { name, age } = s1;
  return `My name is ${name} and I'm ${age}y old.`;
};

console.log(intro(s1));
console.log(s2.greet("India"));
