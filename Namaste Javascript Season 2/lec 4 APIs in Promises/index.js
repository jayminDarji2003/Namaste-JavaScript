// APIs Promise
/*
    1. Promise.all()
    2. Promise.allSettled()
    3. Promise.race()
    4. Promise.any()
*/

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success")
    }, 3000);

    // setTimeout(() => {
    //     reject("p1 failed")
    // }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p2 success")
    }, 1000);

    // setTimeout(() => {
    //     reject("p2 failed")
    // }, 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("p3 success")
    // }, 2000);

    setTimeout(() => {
        reject("p3 failed")
    }, 2000);
})


// Promise.all()
// NOTES : ALL PROMISES MUST BE RESOLVED
Promise.all([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))


// Promise.allSettled()
// safest option in promise
// NOTES : If any of the promise get rejected, we still get the data of other promises
Promise.allSettled([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))



// Promise.race()
// return the first setted promise,
Promise.race([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))


// Promise.any()
// wait for first promise to resolve even if the first reject.
Promise.any([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
