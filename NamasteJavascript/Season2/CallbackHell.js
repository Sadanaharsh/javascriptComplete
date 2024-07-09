console.log("Namaste");

// Using call back we can use javascript asynchronously.
setTimeout(function (){
    console.log("Javascript");
}, 5000);

console.log("Season2");


// Now suppose we are making an Ecommerce website.
// We have the cart.

// Now we want to create our order and then proceed to payment, so here comes the callback in the picture.

api.createOrder();

api.proceedToPayment();

// We have the series of steps to be done one after the other, and there comes the problem of callback hell.
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function(){

    api.proceedToPayment(function () {

        api.showOrderSummary(function (){

            api.updateWallet()
        })
    })
})

//So here comes the problem of callback hell, this code is unreadable and not easy to understand.
// This structure is called as the pyramid of doom.

// The other problem with this is the inversion of control.
// The create order function is made somewher else and it is the responsibility of createOrder function to call the callback function given to it, but 
// somehow it does'nt call it or called it wrong or twice.