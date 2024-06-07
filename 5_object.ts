//? OBJECT

// key: value, different types

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

//* TYPE ALIAS
//  way to give a name to a specific type or combination of types
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
