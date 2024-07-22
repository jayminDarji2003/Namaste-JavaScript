// closure interview question

// basic
// here we need to note that javascript is wait for none.
// let's understand how setTimeout works, we all know that whatever seconds we passed to it and when it expires the inner function will execute.
// so the settimeout function somewhere store and count the number of seconds and after that it will push to call stack.
// function x() {
//     let i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
//     console.log("namaste javascript")
// }
// x();


// interview question
// we want to print number from 1 to 5 like after 1 second print 1 , after 2 second print 2, after 3 second print 3 ...
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }

    console.log("namaste javascript")
}
x();
