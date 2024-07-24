// In javascript we have Array.prototype

// map function ex
let arr = [1, 2, 3, 4, 5];

function square(x) {  // taking value
    return x * x;
}

const res = arr.map(square)
console.log(res);


// if we want to make a function same as map function which iterate on array.
// we will use Array.prototype
// this squareCalculate will apply to every array in out code.
Array.prototype.squareCalculate = function (square) {
    let output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(square(this[i]));
    }
    return output;
}

const result = arr.squareCalculate(square);
console.log(result)
