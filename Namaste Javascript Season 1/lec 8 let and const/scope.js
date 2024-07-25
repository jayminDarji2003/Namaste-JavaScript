// let and const

// Q1. Are let and const declaration hoisted?
//* ans -> yes, let and const declaration hoisted but different than var declaration

//console.log(b); // undefined
//console.log(a); // error : can't access before initialization 
// console.log(c); // error : can't access before initialization

let a = 10;
var b = 100;
const c = 1000;
console.log("hello world");
console.log(this.a)