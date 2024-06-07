/*
    * TYPEOF GUARD
        > A typeof guard in TS lets you narrow down the type of a variable based on its runtime value.
    
    * TYPE NARROWING IN TS
        > In Typescript, the narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances. 
        > This particularly useful with union types and generic types
 */

const favHobbies = (hobby: string | string[]): void[] | undefined => {
  if (typeof hobby === "object" && Array.isArray(hobby)) {
    /// typeof guard
    return hobby.map(() => {});
  } else {
    console.log(hobby);
  }
};
