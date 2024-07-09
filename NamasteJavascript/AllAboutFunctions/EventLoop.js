
// Note -> We have the browser , and inside the browser we have many things, which include
// JS Engine, URL, Local Storage, UI, Timer and etc.

// Inside the JS Engine there is the call stack, which contains the Execution Context like the Global Execution Context and the Local Execution Context also.

// All the web APIs such as the setTimeout(), DOM APIs, fetch(), local Storage, console are all not the part of Javascript, they all are contained inside the browser.

// The browser gives access to this javascript engine to use all these super powers of the browser.
// But all these super powers  are inside the window object.

// Note -> Whatever comes inside the call stack it is quickly executed as soon as possible.
// So when the setTimeout function is called , the callback function is places somewhere else and when the timer ends the callback function is taken back to
// the call stack and the local execution context is created.

// Now in picture event loop and callback queue will come...

// Till the time the timer is running the callback function is stored inside the setTimeout tab in the web APIs.
// When the timer expires the callback function goes inside the call stack using the callback queue, first the callback function goes inside the callback queue,
// and then event loop then takes the function from the callback queue and then place in the call stack.

// the event loop acts as the gate keeper and put the callback function from the callback queue to the call stack.

// Similarly if in place of setTimeout there is an event listener attached to a particular button, till the time the event is triggered the callback function
//is placed somewhere else and as soon as the event is triggered the callback function is placed inside the callback queue, and the event loop continously monitors the 
// callback queue and call stack, when it sees that the call stack is empty and there is something in the callback queue, it places that in the callstack.

// Why do we need the callback queue?
// We need the callback queue as suppose the user hits the button 5 to 6 times , so the callback function will go inside the callback queue 5 to 6 times and then the event loop takes the callback functions
// to the call stack one by one.

// But in case of the fetch API the callback function executes very differently, it does'nt goes inside the callback queue.

// Taking the example...

// console.log("start");

// setTimeout(function cbT() {
//     console.log("CB setTimeout");
// }, 5000);

// fetch("").then(function cbF(){
//     console.log("API successfully executed");
// });

// console.log("end");

// After 5 secs the cbT function goes to the callback queue, but after the fetch is successfully resolved
// the cbF function goes into the microTask queue.

// It is same as callback queue, but it has the higher priority, whatever comes in the microtask queue is executed first.

// Now eventloop will continously monitor the call stack and when ot is empty ie console.log("end") is executed, the event loop will first take the callback function from
// micro task queue and then from the callback queue and places them in the call stack. 

// The callback function from Promises will go to the Microtask queue and from settimeout will go to the callback queue aka task queue.
// First all the callbacks of microtask will go to the call stack and then the chance is given to the calback queue.

// Callback queue, Microtask queue, Event Loop and then Call stack.

//....................................................................................
// JS Engine and Google V8 Architecture....

// To run the javascript program we need the Javascript Runtime Environment and the JS Engine is the heart of the Javascript Runtime Environment,
// Inside the Javascript Runtime Environment there is also the section of API, where all the APIs are there such as setTimeout, console etc.

// Node.js also has the Javascript Runtime Environment.

// Google Chrome has javascript engine which is known as V8, Node.js also uses this V8 engine,
// firefox has the javascript engine known as spider monkey and edge has Chakra.


// We can also create our own javascript engine.

// Javascript engine is not a machine, it is just a normal program written in low level languages, for eg V8 is written in CPP.


// Architecture of JS Engine....
// JS engine takes your javascript code, and three major steps are followed.
// Parsing -> Compilation -> Execution

// In the parsing step the code is broken down into tokens
// let a = 5; let is one token, a is another token.
// These tokens are also converted to Abstract Syntax Tree.


// Now the compilation phase
// Javascript has Just In Time compilation

// Javascript is the interpretted language or the compiled language.

// Diff betwwen interpreter and compiler?
// When using interpreter the code is run line by line and the code is directly interpretted.

// But when the compiler is used the code is first compiled and converted to optimized code and then executed.

// So javascript uses both interpreter as well as the compiler to execute the code, so the compiler is known as just in time compiler.

// In the compilation phase the AST goes to the interpreter which converts the high level code to the byte ocde and the complier also optimzes the code, then the byte code is given to the 
// execution phase.

// In the execution phase, the call stack memory heap and garbage collector all are in sync together,
// The Garbage collector tries to free up the memory space, when not use.

// Garbage collector uses mark and sweep algo to remove the unused memory.
// Read about the mark and sweep algo from gfg

// The fastest javascript engine is the google's V8 engine.

// Trust issues with javascript..............

// Note -> Javascript is single threaded synchronous language. 

// Let us take an example...

console.log("Start");

setTimeout(function cb(){
    console.log("callback");
}, 5000);

console.log("end");

// We are blocking our main thread, supoose thereare millions of lines of code written which takes 10 secs to execute.

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("while expires 10 secs over");

// So after 10 sec callback is executed, this happend because the call stack was not empty, and after 5 secs the callback goes to the callback queue and the 
// event loop was continously monitoring the call stack and callback queue and as soon as the call stack was empty the event loop places the callback function into the call stack.

// So if the main thread is blocked for sometime , the callback function of the setTimeout won't be executed.

// console.log("Start");

// setTimeout(function cb(){
//     console.log("callback");
// }, 0);

// console.log("end");

// Though the timer is zero, but then also the callback will go to callback queue and more steps.
//Start
//End
//callback