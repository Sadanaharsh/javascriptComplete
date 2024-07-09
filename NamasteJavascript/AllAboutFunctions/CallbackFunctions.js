// What is a callback function in javascript?

// The function which is passed as an argument in the other function is known as the callback function.

// Note -> Javascript is a synchronous and single-threaded language.

// Callback functions allow us to use javascript asynchronously.

// We know that the setTimeOut function takes the callback function.
// It is called as the callback function because now the other function to which it is passed will decide when to call it.

setTimeout(function (){
    console.log("timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}

// y is the callback function x will decide when to call it.

x(function (){
    console.log("y");
})

// About Event Listeners...
function attachEventListeners(){
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
        console.log("button clicked", ++count);
    });  
}

attachEventListeners();