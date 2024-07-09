
// What is async ?

// Async is the keyword used for creating the async functions.

// async function getData(){
//     return "Namaste"
// }

// This async function always returns us the promise.
// Either you return a promise from this function or if you return a string , integer or something, what this function will
// do, it will wrap that in a promise and then return it to you.

// If you are returning a promise from an async function then it won't wrap inside the function and return, it will directly return as it is.

// const dataPromise = getData();
// console.log(dataPromise);

// dataPromise.then((res) => console.log(res));


// Note -> async and await is used to handle the promises

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved value");
    }, 5000);
});

// await can only be used inside the async function.
// async function handlePromise() {

//     // Whenever you write the await keyword before the promise it will resolve the promise.
//     const val = await p; // JS Engine will wait over here until the promise is resolved. Until the promise is resolved it will not go to the next line.
//     console.log("Namaste Javascript");
//     // It will give us the response of the promise.
//     console.log(val);


//     const val2 = await p;
//     console.log("Namaste Javascript");
//     console.log(val2);

    
// // It won't take another 5 secs to print the reponse of the p2 promise. Because after 10 secs p2 is already resolved.
//     const val3 = await p2;
//     console.log("Namaste Javascript");
//     console.log(val3);

// }

// Older way of handling promises...

// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Namaste Javascript");

//     // In this case first Namaste Javascript will be printed and after that when the promise is resolved,
//     // the response will be printed.
// }

// getData();

// handlePromise();

// What is happening behind the scenes in handlePromise function

// In the call stack when the handle promise function arises, it executes the lines of handle function line by line.
// When it comes to line no. 40, until the promise is resolved , the handlePromise function gets terminated and again the callstack is empty and after the line 70 the code will get executed,
// but when the promise is resolved, the handle promise function continues from the same line where it left.
// Javascript is amazing, it does'nt let the call stack to be blocked.

// So by this way the asynchronous nature of the handlePromise function is followed, vaise to Javascript is synchronous single threaded language.

const API_URL = "https://api.github.com/users/akshaymarch7";

// await can only be used inside an async function.

async function handlePromise2(){

    const data = await fetch(API_URL);

    const jsonValue = await data.json();  // It also returns us the promise.

    console.log(jsonValue);
}

// Another method to write this is...

// fetch(API_URL).then((res) => res.json()).then((data) => console.log(data));

 handlePromise2();

 // The error handling is done using the try-catch block.

async function handlePromise3(){

    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }

    // If the api call is successfull, then the try block is executed and if 
    // unsuccessful then the catch block is executed.
}

// There is another way to handle the errors i.e the traditional way.

handlePromise3.catch((err) => console.log(err));

// Since async function always returns the promise.

// Note -> async-await is just the syntactical sugar to the promise chaining methods, behind the scenes both async-await and promise chaining are implemented same by the Javascript engine.
