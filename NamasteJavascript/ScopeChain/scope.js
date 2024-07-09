// Scope means where you can access specific variable or function in a code.

// function a(){
//     console.log(b);  //10 We can access varaiables outside of the function.
// }

// var b = 10;
// a();

// function a(){
//     c();
//     function c(){
//         console.log(b);  // 10
//     }
// }

// var b = 10;
// a();

// function a(){
//     var b = 10;
//     c();
//     function c(){
//         console.log(b);  // 10
//     }
// }

// a();
// console.log(b);  // Not defined (Error)

// ..........................................................................................

// Scope is directly related to the Lexical Environment...

// Lexical Environment is created when the Execution Context is created.
// Lexical Environment is the local memory along with the lexical environment of the parent.

// Now when Execution Context of c is created Lexical Environment of c is also created which has the local memory and it points to the lexical environment of a.
// So c has access to the lexical environment of a as c is lexically inside the a function.

// Lexical Environment has the local memeory and it also points to the lexical environment of the parent.

// Lexical environment of global execution context points to the null.

// So when console.log(b) inside c function, it first searches in the local memory, and then refers to the lexical environment of its parent function and so on.

// So in short Lexical Environment is the local memory and the reference to the lexical environment of the parent.
// So this lexical environment referring to another lexical environment and so on, it is only known as scope chaining.

// Lexical Environment has its own local memory and it also points to the lexical environment of the parent function.

// let & const in Javascript....

// let and const declarartions are hoisted, but they are hoisted very differently from the var declarations.
// We can say that they are in the temporal dead zone.

// console.log(a); //  (error) -> cannot access a without initialization. Reference error as a is in the temporal dead zone.
// console.log(b); // undefined

// let a = 10;
// var b = 20;

// Hoisting of b is done.
// Hoisting of a is also done, but a is not stored in the global space, the memory is allocated to it somewhere else. They are stored in the different memory space.

// Temporal Dead zone is the time since when the let variable is hoisted till the time when it is initialized...
// So whwnevr you try to access the variable inside he temporal dead zone it gives you an error.
// Anything before line no. 61 will be the temporal dead zone for a.

// Note -> We know that b is attached to the window object but this is not the case with a. There is another reserved space for a (let and const).
// We also cannot do the redeclaration of a, It will give us the syntax error.

// let a = 20;  Syntax error

// Talking about const.

// It is important to initialize the const where it is declared.
// Otherwise it will give us the error.

// const c; Synntax error
// c = 4;

// const c = 1000;
// c = 10000;   Now it will give us the type error.

// Type error means , it is trying to say that const can't be reinitialized later on.

// ALways try prefer to use const > let > var.

// To avoid the temporal dead zone put all your inintialization on the top of the javascript program.

// Block Scope and Shodowing in javascript.

// We put some statements to the block that we want to use as the single statement.
// Note -> if expects us the single statement, if we want to write the multiple statements we group in the block and can write it.
// if(true){
//     var d = 10;
//     console.log(a);
// }

// if(true) console.log("Hello");

// Now what is the block scope.
// All the variables and functions that we can access inside the block 
// Note let and const are block scoped as they are stored in the local space, but var declarations are stored in the 
// global space.
// {
//     var e = 10;
//     let f = 20;
//     const g = 30;
//     console.log(e); //10
//     console.log(f); //20
//     console.log(g); //30
// }

// console.log(e);   //10
// console.log(f);   //error
// console.log(g);   //error

// Shadowing in javascript....

// var e = 100;
// let f = 200;
// const g = 300;
// {
//     var e = 10;
//     let f = 20;
//     const g = 30;
//     console.log(e); //10
//     console.log(f); //20 This f has the block scope.
//     console.log(g); //30

//     // e, f and g are shodowed here.
// }

// console.log(e); //10  


// console.log(f); // 200  this f has the global scope.

// console.log(g);  // 300

// These things alos works same in the function scope.

// Illegal shadowing

// let z = 20;
// var y = 30;
// {
//     // var z = 200;  // error Illegal shdowing
//     let z = 200;  // correct
//     let y = 300; // correct
// }

// Note block scpoe and function scope are different, if anything which is var inside the function we can't access it outside of the function
// Arrow functions and the normal functions have the same scope


// Closures in Javascript.

// A closure is a function that bind together with its lexical environment.

// A closure is a function that binds together with its lexical environment.
// function x() {
//     var a = 7;
//     function y(){
//         console.log(a);
//     }

//     // function y has access to its parent function variables, this is only called as the closures.

//     y();
// }

// x();

// function x(){

//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }

// var z = x(); // Not only the function , the whole closure is returned.
// console.log(z); // whole function will be printed

// z();  // 7
// Functions are so beautiful in javascript as when they are returned from another function, they still maintain their lexical scope.
// They remember where they were actually exists.

// A function with its lexical scope bundled together is called as the closure.

// function x(){

//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }

// var z = x(); // Not only the function , the whole closure is returned.
// console.log(z);

// z(); // 100  A function along with reference to those variables is returned.

// function z(){
//     var b = 900;
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a,b); // y also forms a closure with the variables a and b.
//         }
//         y();
//     }
//     x();
// }

// z();

// Closures + SetTimeout

// function x(){

//     let i = 1;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log("Namaste Javascript");
// }

// x();

// setTimeout behaves like a closure, it stores the related variables to the function and the complete function somewhere else and when
// the timer gets expired, the function is executed. 

// function x(){

//     for(var i = 1; i<=5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
        
//     }

//     console.log("Namaste Javascript");
    
// }

// x();  // Namaste Javascript
      // 6
      // 6
      // 6
      // 6
      // 6

// setTimeout acts as the closure, each time it refers to the same i.

// If hum i ko var ki jagah let kar denge, then the problem will be solved since let is block scoped, each time the new let is created.

// function x(){

//     for(let i = 1; i<=5; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, i*1000);
        
//     }

//     console.log("Namaste Javascript");
    
// }

// x(); // Namaste Javascript
// 1
// 2
// 3
// 4
// 5

// One more solution

function x(){

    for(let i = 1; i<=5; i++){

        function close(){
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }

        close(i);
       
    }
    console.log("Namaste Javascript");

}

x();