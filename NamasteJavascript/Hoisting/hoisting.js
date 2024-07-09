

// getName(); // Namaste Javascript will be printed...
// console.log(x); // undefined, but if x is not declared later also it will give us an error that x is not defined.

// This is called as hoisting in javascript, we can access variables and methods even if they are declared afterwards.

// console.log(getName); // whole function will be printed.

var x = 7;

function getName() {
    console.log("Namaste Javascript");
}

// const getName = () => {
//     console.log("Namste Javascript");
// }

// const getName = () => {
//     console.log("Namaste Javascript")
// }

// In the above both cases getName is the variable.

 // console.log(getName);     // whole function will be printed.
 // console.log(getName());  // undefined

getName();
console.log(x);
console.log(getName); // Whole function will be printed.

// The actual working that what exactly is happening...

// since we know in the memory creation step , the variables are declared undefined and the function is copied to the function name, so the function gets
// executed when it is called before declaring and the variable value is undefined , when it is accessed before declaring.

// And if x is not defined later also it will throw an error, as no memory is reserved for x.

// Note -> if getName is made as an arrow function then it work as an variable not the function, so if it is accessed before declaring it will also be undefined.

