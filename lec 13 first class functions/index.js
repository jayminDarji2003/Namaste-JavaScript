//  a(); // we can access this function
//  b(); // b is not a function


// Function Statements
// Function Declaration
function a() {
    console.log("a called")
}

// Function expression
// -> when we assign a function to a variable
var b = function () {
    console.log("b called")
}

// Anonymous function
// A function without a name its called anonymous function.
// annonymous function doesn't have its own identity, we need to assign anonymous function to a variable.
// function (){

// }

// Named function expression
// when we give name to anonymous function in function expression its called named function expression
var c = function xyz() {
    console.log("c called")
}
c()
// xyz() // give error


// Diffrence between Parameters and Arguments
function sum(a, b) {  // here a,b are parameters
    return a + b;
}

sum(10, 20);   // 10 and 20 are arguments

// First class functions || First Class Citizens
// The ability of function to do like : 
/*
    -> send function as argument
    -> return function as function
    -> treated function as normal value.
*/

// Arrow functions
const arrow = () => {
    console.log("arrow called")
}