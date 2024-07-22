// closure interview question

// example 1
/*
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var res = outest()("hello world");
res();
*/


// example 2
// closure used in data hiding
function counter() {
    var a = 0;
    function counterIncrement() {
        a++;
        console.log(a);
    }
    return counterIncrement;
}

let res = counter();
res();
res();

let res2 = counter();
res2();