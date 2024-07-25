// first
// this is a simple code, and we can assume the output also
// output :
// namaste javascript
// 10
/*
var x = 10
function getName() {
    console.log("namaste javascript");
}
getName();
console.log(x);
*/


// second
// in this program you are accessing the function and variable before initialization.
/*  output:
            namaste javascript
            undefined
*/
// in second result we are getting undefined because the variable is created using "var".
/*
getName();
console.log(x);
var x = 10
function getName() {
    console.log("namaste javascript");
}
*/


// third
// in this program we change the variable "var" to "const".
/*  output:
            namaste javascript
            Cannot access 'x' before initialization
*/
// In the second result we are getting error that we are trying to access the variable that is not been initialized.
// the above error comes out because we are using "const" or "let".
// getName();
// console.log(x);
// const x = 10
// function getName() {
//     console.log("namaste javascript");
// }


// fourth
// in below code we remove the variable creation.
/*  output:
            namaste javascript
            ReferenceError: x is not defined
*/
/*
getName();
console.log(x);
function getName() {
    console.log("namaste javascript");
}
*/




// fifth
const x = 10
function getName() {
    console.log("namaste javascript");
}
getName();
console.log(x);
console.log(getName)