var a = 10;
function getName() {
    console.log("jay darji");
    let name = "piyush"
}

// to access global variables and functions there are three ways
// way 1
console.log(a)
getName();

// way 2
console.log(window.a)
window.getName();

// way 3
console.log(this.a)
this.getName();