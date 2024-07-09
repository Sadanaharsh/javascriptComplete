
// The difference in function statement and function expression is hoisting...
a();  // a called
// b();  // I will give an error as b is undefined in the memory creation phase , then how it can be called.


// Function Statement or Function Declaration
function a(){
    console.log("a called");
}

a();

// Function Expression

// Here anonymous function is used
var b = function (){
    console.log("b called");
}

b();

// Anonymous Function -> The function without a name are called as the anonymous functions.

// Anonymous functions can only be used where the functions are used as the values ie function expression
// They can't be used as the function statement.

// Wrong statement
// function (){

// }

// Named function expression 
var c = function xyz(){
    console.log("c called");
}

c();  // c called
// xyz(); // It will give us an error as xyz will be used as the local variable.

// Difference between parameters and arguments.
// The values which are passed inside the functions are called as the arguments, and the labels which get those values are called as the parameters.

// First Class Functions
// We can pass a function as an argument inside the another function.

// In javascript the function has ability to pass another function or return the function from the function.

var d = function (param1){
    console.log(param1);
}

d(function (){

});

// A function can also return another function...

var e = function (param){
    return function (){

    }
}

console.log(e());


// Note -> Functions are the first class citizens, that means the functions are first class function in javascript.

// Arrow Functions