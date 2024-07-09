
// Promises are used to write the asynchronous code in the javascript.

// const cart = ["shoes", "pants", "Kurta"];

// createOrder(cart, function (orderId){
//     proceedToPayment(orderId);
// });

// Now it is the responsibility of the createOder function to call the callback function which contains the proceedToPayment method, and 
// suppose it does'nt call it or call it wrong , so there is the problem.

// This method is far more better than our previous method.

// const promise = createOrder(cart);

// The create order will return a promise to us, it can return the promise may ve after sometime, after 5secs or 10secs.
// When only the promise is returned, then only the callback function inside the promise.then is called and it is called automatically.

// So using this method we have the control of our program, we are not giving the control to anyone else.

// Note -> promise is an object.

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });

// Note -> fetch also returns us the promise.

// Promise object contains many things, one is the promise state -> pending or fullfilled or rejected.
// This object also conatins the result of the promise, which is the data.

// Eg -> 

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);

console.log(user);  // Initially the promise is in the pending state but later on its state is fullfilled.

user.then((res) => {
    console.log(res);
})

//Note -> Promise objects is immutable, no one can change the promise object, but it can be filled with the data later on 

// Promise object is the placeholder which can be filled with the data later on.
// Promise is an object representing the eventual completion or failure of an asynchronous operation 

// Promise helps ut avoid the condition of callback hell using promise chaining.

// Promise chaining...

// createOrder(cart)
//     .then(function (orderId){
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo){
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function (paymentInfo){
//         return updateWalletBalance(paymentInfo);
//     });

// So promise chaining helps us to solve the problem of the callback hell.

// This is how you can make your own custom error...
const err = new Error("This is the error!");

console.log(err);

// How can we crete our own promise?

// const promise = createOrder(cart);  // We will get the orderId in response from the promise.


// What to do after the success part of the promise.
// promise.then(function(orderId){
//     console.log(orderId);
//     //proceedToPayment(orderId);
// })
// // What to do after the failure part of the promise.
// .catch(function(error){
//     console.log(error.message);
// })

// Another method of accepting the promise.

createOrder(cart)
    .then(function (orderId){
        console.log(orderId);
        return orderId;
    })
    // If we want to catch errors for the specific portion of the chain, we just want to catch errors for create Order and its .then function
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderId) {
        console.log("No matter what happens, I will definitely be called");
    })

// This catch will work for all the promise chains, if any of the above promise got rejected, then
// the catch code will be executed. 

// Producer (Creating a promise)

function createOrder(cart) {

    const pr = new Promise(function (resolve,reject){
        // createOrder
        //validateCart
        // orderId
        if(!validateCart(cart)){
            const err = new Error("Cart is not valid!");
            reject(err);
        }

        const orderId = "12345";
        if(orderId){
            resolve(orderId);
        }
    });

    return pr;
}

function validateCart(cart){
    // return true;
    return false;
}

