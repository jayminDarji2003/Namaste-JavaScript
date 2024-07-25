// Callback
// There is good part of callbacks
// There is bad part of callbacks
//        1. callback hel;
//        2. Inversion of control


// Let's take one example
/*
    About example :
        - Suppose we have added items to cart and then the process will be executed.
            1. create order
            2. proceed to payment
            3. show order summary

        - suppose we have two backedn APIs
            1. createOrder()
            2. proceedToPayment()
        
        createOrder :
            cart 
            callback()
                - 

*/

const cart = ["apple", "chocolate", "banana", "iphone"];

// function calling
// this types of calling function called callback hell ...
createOrder(cart, function payment() {

    proceedToPayment(id, function orderSummary() {

        orderSummary(function () {

            updateWallet();
        });
    });
})

