// async await
// To understand better watch video : https://www.youtube.com/watch?v=6nv3qy3oNkc&list=PLlasXeu85E9eWOpw9jxHOQyGMRiBZ60aX&index=6

// async : async is a keyword used to create async function
// async function always returns a Promise

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1 resolved successfully");
    }, 5000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 2 resolved successfully");
    }, 10000);
})

// handle promise using async-await
// note : function execution is suspended
async function getDataAsync() {
    console.log("starting async-await")
    const data = await p1;
    console.log("first result = ", data);

    const d = await p2;
    console.log("second result = ", d);
}

getDataAsync()

setTimeout(() => {
    console.log("first settimeout resolved : 2 sec")
}, 2000);

setTimeout(() => {
    console.log("first settimeout resolved : 2 sec")
}, 7000);

