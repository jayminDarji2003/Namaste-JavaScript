// Deep dive into : map, filter and reduce functions
// map, filter and reduce are higher order functions
// Higher order functions are functions that take one or more functions as arguments, or return a function as their result.
// Read docs : https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/#:~:text=A%20higher%20order%20function%20is%20a%20function%20that%20takes%20one,functions%20like%20map%20and%20reduce.


// [].map()
// map function is used to transfomation an array and return new array as result. we can perform double, triple, etc...

const arr = [5, 1, 3, 7, 6];

function double(x) {
    return x * 2;
}

function binary(x) {
    return x.toString(2);
}

const output1 = arr.map(double);
console.log(output1)
const output2 = arr.map(binary);
console.log(output2)

const output3 = arr.map((x) => x * 3);
console.log(output3)

// complex example
const data = [
    { firstName: "jhon", lastName: "doe", age: 10 },
    { firstName: "jay", lastName: "darji", age: 15 },
    { firstName: "deep", lastName: "patel", age: 19 },
    { firstName: "bhargav", lastName: "parmar", age: 20 },
    { firstName: "harshal", lastName: "nasit", age: 10 },
]

// task : find full name : ["jay darji", "deep patel", ...]
const result = data.map((x) => x.firstName + " " + x.lastName)
console.log(result)

// here we are using => reduce()
// task : calculate age : { 10:2, 15:1 }
const output = data.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age]
        console.log("present = ", acc[curr.age]);
    } else {
        acc[curr.age] = 1;
        console.log(acc[curr.age]);
    }

    return acc;
}, {})
console.log("output => ", output)

// here we are using => filter()
// task : find name whose age is > 15 : ["deep","bhargev" ]
// function chaining
const res = data.filter((x) => x.age > 15).map((x) => x.firstName)
console.log("output new => ", res)

const myResult = data.reduce((acc, curr) => {
    if (curr.age > 15) {
        acc.push(curr.firstName)
    }
    return acc;
}, [])

console.log("myResult => ", myResult)

// [].filter()
// filter function is used to filter an array and return new array as result.

const a = [4, 5, 6, 7, 8, 9];

const o1 = a.filter((x) => x % 2 !== 0)  // filter out odd values from "a" array.
console.log(o1)

const o2 = a.filter((x) => x % 2 === 0);  // even numbers
console.log(o2)

const o3 = a.filter((x) => x > 3);  // greater than 3
console.log(o3)


// [].reduce()
// Reduce function is used when we have whole array and come up a single value.
// reduce function returns only a single value
// reduce takes two parameters: 
/*
    reduce(call back function, initial value)

    callback function : also take two parameters 
        1. accumulator
        2. current

    [].reduce(fuction back(acc,curr){}, initial_value)

    see example below!!
*/

const array = [5, 1, 3, 4, 2];

// normal way to calculate sum of array
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(getSum(array));


// const r = array.reduce((n1, n2) => n1 + n2);

const r = array.reduce((sum, curr) => {
    console.log(sum, curr, sum + curr);
    return sum + curr;
}, 100)   // here 100 is initial value of sum
console.log(r)