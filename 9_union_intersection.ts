/*
 * UNION: symbol in ts -> |
    > a = [1,2,3], b = [4,5,6]
    > a U b = [1,2,3,4,5,6]
    
    > allows you to specify that variable can hold value of multiple types
 */

//! Example :   UNION
// const inputValue = (value: string | number | boolean) => {};

// inputValue(55);
// inputValue("Prince");
// inputValue(true);

// const userInput = (value: string | number): string | number => {
//   return typeof value === "number" ? value * 2 : value.toUpperCase();
// };

// console.log(userInput(10));
// console.log(userInput("Prince"));

/*
 * INTERSECTION: symbol in ts -> &
    > a = [1,2,3], b = [2,3,4]
    > a ∩ b = [2,3]
    
    > allows you to combine multiple types into single type.
 */

//! Example: INTERSECTION

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
