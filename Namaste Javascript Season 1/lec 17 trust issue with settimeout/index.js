console.log("Start");

setTimeout(() => {
    console.log("timeout");
}, 0);

console.log("End");

// suppose we have million of lines of code

let startDate = new Date().getTime();  // give current time in milliseconds
let endDate = startDate;
while (endDate < startDate + 10000) {   // wait for 10 seconds
    endDate = new Date().getTime();
}

console.log("while expires")