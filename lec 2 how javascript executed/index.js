// IMPORTANT THINGS TO KNOW FIRST
// Everything in javascript happens in the Execution Context.
// JavaScript is the synchronous single threaded language.

// let's see if we have this javascript code
let n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var s1 = square(n);
var s2 = square(4);

