
// Promise.all

// It is used to handle multiple promises or multiple apis at the same time.

// Promise.all takes the array of promises or the APIs as the input.
// Suppose it takes three promises.
// Promise.all([p1, p2, p3]);

// So now all the promises or the APIs will be called simultaneously.
// Supppose the first promise took 3secs to resolve, the second took 2secs to resolve and the third took 1sec only.

// So now after 3 secs we will get the array of reponses. [val1,val2,val3].

// Note-> If any of the three promises will get rejected, suppose the third promise after 1 secs got rejected then it will give an error just after 1 secs,
// what will be the result of the other promises it does'nt matter, the promise.all will throw an error.

// Suppose If I want the results from the successful promises, I don't care for the rejected promises, then there is one more method which is Promise.allSettled.

// Now suppose after 1 secs p3 got rejected, but then also it will wait for the other promises to get settled.

// Promise.allSettled([p1,p2,p3]);

// No matter if any of them got rejected , but it will always give the result as an array. [val1,val2,err3]
// Promise.all and Promise.allSettled done.

// Third API -> Promise.race

// Basically what happens is whichever the promise is settled first (resolved or rejected) will be returned in the output, so we can say it as the race.
// We will get the result of first settled promise whatever it is reponse or error.


// Fourth API -> Promise.any
// Promise.any([p1,p2,p3]);

// Whenever the first promise will get resolved, it will straightforward return the value of that response.
// If any promise get rejected before, it will wait for the other promise to get success, i.e it will wait for the first promise to get success.

// If in case all the promises get failed then it will give an aggregate error, an array of all the three promises errors [err1, err2, err3]

// Code example of Promise.all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 Success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 Success"), 5000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 Failure"), 2000);
});

Promise.all([p1,p2,p3]).then((res) => {
    console.log(res);
}) // If we will not insert the catch function then we will get the uncaught error.
.catch((err) => {
    console.log(err);
})

Promise.allSettled([p1,p2,p3]).then((res) => {
    console.log(res);  // output will be the array of objects. Each of the objects will have the status an the value.
})

// It will give the first settled promise.
Promise.race([p1,p2,p3]).then((res) => {
    console.log(res);
}).catch((err) => {
    // console.log(err);
    console.error(err);
})


// Note -> When you say the promise is settled it means we got the result, the status can be success or the failure.

// Code Example of Promise.any

// We will get the value of the first promise to be success.

Promise.any([p1, p2,p3]).then((res) => {
    console.log(res);
})// If all get rejected we will get the aggregate error
.catch((err) => {
    console.log(err);  // It is the array of objects
    console.log(err.errors);  // It contains the array of error messages
})