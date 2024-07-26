// all about this keyword
"use strict";

// this in global space

console.log(this);  // refere to global object - window, global

// this inside a function

function x() {
    var a = 10;
    const asa = 1;
    console.log(this)
}

// the value of this keyword depends on how the function is called
x();  // strict mode => undefined  | non-strict mode => window
window.x();  // strict mode or non-strict mode => window
this.x();  // trict mode or non-strict mode => window


// this inside a object's method
const obj = {
    val: 121,
    fnx: function () {    // here this function is called "METHOD"
        console.log(this);
    }
}

obj.fnx();  // referece to "obj" object

// wheneven we are using this keyword there is 3 function we should know
/*
    1. call
    2. apply
    3. bind

    -> if we want to call the method of "student" using "student2" then how it will works
*/

const student = {
    name: "jaymin",
    printName: function () {
        console.log(this.name)
    }
}

const student2 = {
    name: "deep",
}

student.printName();   // jaymin
student.printName.call(student2);  // deep


// this in arrow function
// depends on lexical order



const object = {
    a: 10,
    x: () => {
        console.log(this)
    }
}
object.x();


// this inside a nested arrow function 

const b = {
    a: 10,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y();
    }
}
b.x();

// this inside DOM
// reference to HTML element
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    console.log("button clicked")
    console.log(this)
})