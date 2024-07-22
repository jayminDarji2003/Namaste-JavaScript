// Closure : closure means that a function that binds together with its lexical environment.

// basic closure example
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// example 2 
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }

//var z = x();  // z has x's return value, and return value is function
//console.log(z) // here we are just printing z value
//z();  // we already know that z now becomes a function becase x return a function value. now we execute a z function.



// interview question
// what will be the output : 7 or 100
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x();
// z(); 



// one more
function x() {
    var a = 9008;
    function y() {
        var b = 7;
        function z() {
            console.log(a);
            console.log(b);
        }
        // z();
        return z;
    }
    // y();
    return y;
}
// x();

var res = x();
res();
console.log(res)