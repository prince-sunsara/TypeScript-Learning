//* WATCH SINGLE FILE
// > tsc -w/-watch index.js --> automatic create js file and up-to-date with our code / one file
// console.log("prince sunsara");
// console.log("Thank you for learning");

//? WATCH ALL FILES
// > after tsc --init
// > tsc -w/-watch  --> automatic create all js files and up-to-date with our code

//* ROOTDIR --> .JS & OUTDIR--> .JS
// > rootdir accept all the .ts file
// > outdir accept all the output files .js
// > in tsconfig file you have to mention perticular path for both

//? EXTRA INCLUDE, EXCLUDE
// > in tsconfig file you can add/remove perticular folders with the use of include and exclude
// > e.g. "exclude": [node]
