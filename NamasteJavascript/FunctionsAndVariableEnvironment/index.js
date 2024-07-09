
// How javascript handles the scenario of the same variable name in different functions.

var x = 1;
a();
b();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// In the first phase memory is allocated to the variables and methods.
// x : undefined
// a: {}
// b: {}

// Now when the code execution phase occurs

// assigning value to variables...
// x = 1;
// Now a function is invoked
// a execution context is created...
// This will also goes through two phases..
// It will also go through 2 phases.
// First phase.. (Memory Creation)
// x: undefined
// Second Phase.. (Code)
// x = 10
// Now the control comes to console statement, it will look into local execution context that is in the local memory.

// Now the local execution context will get deleted.
// And the control comes back to the Global Execution context.

// Similarly at line 6 function b invoked , so its execution context will be created.

// And at line 7 the control goes back to Global Execution Context and it will look for x in the Global Execution Context only.


// Shortest Javascript Program......

// The shortest javascript program is the empty file, the global execution context will then also be made.

// Javascipt Engine also create a global object called window and it is in the global space.
// As well the this is also created and it points to the window object.

// Where the javascript code is running, it is the duty of that to create the window object.
// For eg Chrome browser has v8 engine to run the javascript code .

// All the variables and methods which are not made inside any function are made in the global space.
// These all are attached to the window object.

var a = 10;
function c(){
    var x = 9;
}

console.log(a);  //10
console.log(window.a);  //10
console.log(this.a); //10
console.log(x); // Error


// Undefined vs Not Defined in javascript...

// Undefined means that the memory is assigned, it is same as the placeholder

console.log(y); // Memory is allocated to y.

var y = 10;

console.log(z);  // Not defined , even the memory is not allocated.

var d;
console.log(d);
// if any variable is defined but not initialized, then it is undefined for the whole program.


// Note -> Never ever declare any variable undefined.
var a = undefined; // Bad Practice