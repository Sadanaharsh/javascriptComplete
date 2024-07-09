

// How JAvascript Works ?

// Everything in javascript happens inside an execution context.

// We can assume execution context to be a big box where the whole javascript code is executed.

// Execution Context has 2 components in it -> 

// The first component is the memory component also known as variable environment
// All the variables and functions are stored in the key value pair such as a:10 , fn: {}

// The second component of this execution context is the Code Component. ALso known as thread of execution
// This is the place where the code is executed one line at a time.


// Note -> Javascript is synchronous single threaded language that means Javascript can execute single command at a time that
// too in the specific order.


// How a Javascript code is executed?

// Suppose for eg there is a javascript code and we want to execute it.

var n = 2;
function square (num) {
    var ans = num*num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

// First of all the execution context is created and the execution context is created in 2 steps.

// First step is the memory creation.
// Memory 
// n: undefined
// square: {} (complete function will get copied to here)
// square2: undefined
// square4: undefined

// Now second step is the code execution phase.
// It executes the code line by line.
// Firstly line 26 is executed, in memory space now the value of n is 2.
// line 27 to 30 is nothing to do.
// at line 32 a function is invoked, so now a brand new execution context is created.
// Now it also has 2 componenets Memory and Code.
// Now here also 2 phases will occur
// Memory
// num : undefined
// ans : undefined
// Code Execution Step
// assign value to num that is 2.
// assign value to ans that is after calculating which is 4.
// Now when the return keyword comes , it gives the whole control back to the main execution context.
// square2 is assigned value 4.
// Now to execution context of that function will be deleted.
// Similarly line 33 will also get executed.

// Once the whole program is finished, the whole global execution context will also get deleted.

// So it can be very complex to execute the javascript code, as a function can also be invoked inside the another function, and
// execution context inside the execution context will be made, and it can go much deeper level.

// To handle the execution contexts creation , deletion and control javascript makes the call stack.
// Always at the bottom of the call stack we have Global Execution Context.

// And whenever the new function is invoked or execution context is created, now this EC is put inside the stack and when its work
// is complete it is popped out of the stack and control goes back to global execution context.

// Call Stack has many names such that Execution Call 
// Stack, Program Stack, Control stack, Runtime Stack, Machine stack