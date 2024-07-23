// What is call back function in javascript

/*
setTimeout(() => {
    console.log("timer called")
}, 5000);

function x(y) {
    console.log("x called")
    y();
}

x(function y() {  // here y function called call back function.
    console.log("y called")
});

*/



function countClick() {
    let count = 0;
    function increase() {
        count++;
        console.log(`count ${count}`)
    }
    return increase;
}


const button = document.getElementById("clickMe");
button.addEventListener("click", () => {
    console.log("button clicked");
})
countClick()();