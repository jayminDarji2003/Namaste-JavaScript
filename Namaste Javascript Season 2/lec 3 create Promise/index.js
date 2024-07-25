// CREATE PROMISE
/*
    In below example
        createOrder() // orderId
        proceedToPayment() // payment info
        showOrderSummary() 
        updateWalletBalance()

*/


const cart = ["apple", "banana", "orange", "watermelon"];

// createOrder promise
const createOrder = (cart) => {
    // create promise
    const promise = new Promise((resolve, reject) => { // here (resolve,reject) both are functions which is provided by javascript
        if (cart.length === 0) {
            // reject promise
            const error = new Error("cart is empty");
            reject(error);
        }

        const orderId = "12343";
        if (cart.length > 0) {
            // resolve promise
            // setTimeout(() => {
            // }, 5000);
            resolve(orderId);
        }
    })

    return promise;   // return promise
}

// proceed to payment promise
const proceedToPayment = (orderId) => {
    const promise = new Promise((resolve, reject) => {
        // reject promise
        if (!orderId) {
            const error = new Error("order is not found");
            reject(error);
        }

        // resolve promise
        if (orderId) {
            const payment = {
                "name": "user",
                "payment_method": "online",
                "currency": "INR",
                "amount": "12000"
            }
            resolve(payment)
        }
    })

    return promise; // return promise
}

// order summary promise
const showOrderSummary = (paymentDetails) => {
    const promise = new Promise((resolve, reject) => {
        // reject promise
        if (!paymentDetails) {
            const error = new Error("Payment details not found");
            reject(error);
        }

        // resolve promise
        resolve(paymentDetails);
    })

    return promise; // return promise
}

// update wallet
const updateWalletBalance = () => {
    return new Promise((resolve, reject) => {
        // resolve
        resolve("wallet balance updated!!")
    })
}


// consuming the promise
// way 1 : promise chaining
createOrder(cart)
    .then(function (orderId) {
        console.log("Order id : ", orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentDetails) {
        console.log("Payment successful");
        return paymentDetails;
    })
    .then(function (paymentDetails) {
        return showOrderSummary(paymentDetails);
    })
    .then(function (summary) {
        console.log(summary);
    })
    .then(function () {
        return updateWalletBalance();
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error.message)
    })
    .finally(function () {
        console.log("Thank you for your order!!!")
    })



// way 2
/*
const response = createOrder(cart);

response
    .then(function (orderId) {
        console.log(orderId);
    })
    .catch((error) => console.log(error.message));
*/

