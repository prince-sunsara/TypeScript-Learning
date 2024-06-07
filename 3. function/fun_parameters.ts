/*
 * OPTIONAL AND DEFAULT PARAMENTERS:
    > optional parameters defines with ? after parameter
*/

// default parameters
// function myFunc(name: string, id: number = 1) {
//   return `Name: ${name} \nID: ${id}`;
// }

// optional parameters
function myFunc(name: string, id?: number) {
  if (id) {
    return `Name: ${name} \nID: ${id}`;
  } else {
    return `Name: ${name}`;
  }
}

console.log(myFunc("prince"));
console.log(myFunc("prince", 12));
