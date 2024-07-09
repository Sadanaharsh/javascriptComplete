// Map filter an reduce are the higher order functions in javascript.

const arr = [5,4,3,2,6];

const output = arr.filter((x) => x>4);

// If we want to get only the even values then,

const findEven = function (num){
    return num%2 == 0;
}

const evenArray = arr.filter(findEven);

console.log(evenArray);


// reduce

// If you want to find the sum of all numbers of the array, or find the maximum.

function findSum(arr) {
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
       sum += arr[i];
    }
    return sum;
}

// Alternate way -> Using reduce function

const output2 = arr.reduce(function (acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log(output2);

// Note-> initial value of the accumulator is passed as a second argument in the reduce function, and current points to the elements of the array.


// Suppose we want to find the maximum from the array.

const output3 = arr.reduce(function (max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);

// If you have an array and you want it to compute to the single value then iuse the reduce function.

// Suppose we have an array of objects as the users.

const users = [
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "Harsh", lastName: "Sadana", age: 22},
    {firstName: "Akshay", lastName: "Sadana", age: 12},
    {firstName: "Akshay", lastName: "Saini", age: 26}
];

// Now if we want to compute how many of the users are of the particular age.
// {26: 1, 22: 1, 12: 1}

const output4 = users.reduce((acc, curr) => {

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output);

// Find the first name of all the people whose age is less than 30.
const output5 = users.filter((x) => {
    return x.age < 30;
})

// But in this case the whole object will be returned, but we only want the first name, so we will be using the cahining of filter and map.

const output6 = users.filter((x) => x.age < 30).map((x) => x.firstName);


