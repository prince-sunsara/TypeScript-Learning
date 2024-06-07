//* INTERFACE
// Allows you to defines contract for an object's shape
// specifies properties and their types, an object must have to be considered of the perticular interface type
// used for type checking during development and do not genereted any JS code at runtime

// interface Greet {
//   name: string;
//   age: number;
// }

// const g: Greet = {
//   name: "Prince",
//   age: 23,
// };

//! calculate total price of product

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const p: Product = {
  name: "Santoor Shop",
  price: 25,
  quantity: 10,
};

const getTotalPrice = (p: Product): number => {
  const { price, quantity } = p;
  return price * quantity;
};

console.log(getTotalPrice(p));

// const totalPrice
