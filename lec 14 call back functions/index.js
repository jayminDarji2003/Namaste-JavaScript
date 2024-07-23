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




function countIncrement() {
    let count = 0;
    const button = document.getElementById("clickMe");
    button.addEventListener("click", function xyz(){
        console.log("button clicked", ++count);
    })
}

countIncrement();