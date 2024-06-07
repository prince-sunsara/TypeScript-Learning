/*
    * TUPLES IN TS
        > fixed numbers of element
*/

// type PersonInfo = [string, number, boolean];
type PersonInfo = readonly [string, number, boolean];

const showInfo = (person: PersonInfo) => {
  const [name, age, hasDriver] = person;
  console.log(
    `Name: ${name}\nAge: ${age}\nDriver: ${hasDriver} ? "Yes" : "No"`
  );
};

const p1: PersonInfo = ["prince", 23, false];
showInfo(p1);
