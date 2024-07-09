
// let, var & const keyword in javascript.



// var : Variable can be re-declared & updated. A global scope variable.
// var is not used nowadays.

// After ES6 let and const came

// let : Variable cannot be re-declared but can be updated. A block scope variable.

// const: Variable cannot be re-declared or updated. A block scope variable.
// Const declarations must be initialized.

// The problem of var is that it can be redeclared.

// Ther are 7 primitive data-typed defined in the javascript -> Number, String,
// Boolean, Undefined, Null, BigInt, Symbol

// WE can also know the type of data type ->
let a = 100.5;
console.log(typeof a);  // Number

// Ther are also non-primitive data types. Object is a type of non-primitive data type.
// In object there is a key:value pair.

const Student = {
    fullName: "Harsh",
    age:20,
    isPass: "Ya",
    gender: "male"
}

console.log(Student);
console.log(typeof Student);

// To access the partivular key of the object. Ther are two ways.
console.log(Student["age"]);
console.log(Student.age);

// Note -> const type ka object hota hai to then we can change the value of the particular key.


console.log("123" + 123);
console.log(123 + "123");

//Operators and Conditional Statements...
// Ternary Operator...

// condition ? statement1 : statement2
let age = 20;
let result = age >= 18 ? "CanVote" : "Can't Vote";
console.log(result);

// Loops in javascript.

// General Loops -> for, while and do-while loops.
// for-of loop -> It helps to apply the loop over strings and array.

// for(let val of strVal){ do some work }

let str = "Harsh";

for(let i of str){
    console.log("i " + i);
}

// for-in loop -> It is the type of loop used for the objects or the arrays.
// It returns the keys of the object.
// for(let key in objVar){ do some work }

for(let key in Student){
    console.log(key);
}

// We can also find out the value of the corresponding key.

let str1 = "Harsh";
console.log(str.length);


// Template Literals in javascript -> Template Literals me hum apni string ke
// saath variables ko bhi likh sakte hain.
let specialString = `This is a template literal`;

let obj = {
    item: "pen",
    cost: 10
}

console.log("The cost of " + obj.item + " is " + obj.cost);
// Using template literals...
console.log(`The cost of ${obj.item} is ${obj.cost}`);  // This phenomena is called as the string interpolation.
console.log(`The cost of ${obj.item} is ${1+2+3}`); // we can also add any expression

// Escape Characters
// To add a line break in the string.
let str2 = "Apna\nCollege";
console.log(str2.length); // Escape Character ki length always 1 count hoti hai.

// To add a tab space.
console.log("Apna\tCollege");

// String methods. These methods do not change the original string. It gives us the new value.
// Strings are immutable in javascript
//str.toUpperCase()
//str.toLowerCase()
//str.trim() It removes white spaces. But it only removes the starting and ending spaces.
//str.slice(start,end) It returns the part of the string. end non inclusive
//str1.concat(str2)
//str.replace(searchVal,newVal) Try to use the string method to replce

// Java aur Javascript dono me strings immutable hoti hain.
// Yeh saare above methods new string return karte hain.


// Arrays -> Try to make the array of the same data types but we can also
// add different data types in the array.
let marks = [97,45,78,90,98];
console.log(marks);
console.log(typeof marks)

// Array Methods...
// Push() : add to the end
// Pop() : delete from end and return
// toString() : converts an array to the string
// conacat : to join more than one arrays. It returns the new array.

// Functions in Javascript....

// Arrow Functions....
// Compact way of writing the function.
// const function_name = (param1, param2) -> {do some work}

let arrowSum = (a,b) => {
    console.log(a+b);
}

arrowSum(5,4);

const arrowMult = (a,b) => {
    return a*b;
}

console.log(arrowMult(5,4));

// Arrow function to count the vowels in the string.

const countVowel = (str) => {
    let count = 0;
    for(let char of str){
        if(char == 'a' || char == 'i' || char == 'e' || char == 'o' || char == 'u'){
            count ++;
        }
    }

    return count;
}

console.log(countVowel("abcda"));

// For-each loop in javascript....

// forEach is a method to create a loop.
// Functions in the javascript can be passed as the variables inside the function
// and they can also be returned from the function...

// A call-back is a function that is passed as an argument in the other function.
// arr.forEach( callback function ) Here callback function is a function to execute for each element in the array.

// Hum sirf definition pass karenge as a callback function, forEach will automatically 
// execute it for each element in the array.

let arr = [1,2,3,4,5];

arr.forEach(function temp(val){
    console.log(val);
});

// Generally callback is passed as an arrow function...

arr.forEach((val) => {
    console.log(val);
});

// In the forEach method, inside the callback function we can pass three arguments
// first one is the value of each array element.
// second one is the index and the third one is the array itself.

let arr2 = ["Pune", "Bangalore", "Indore"];

arr2.forEach((val,index,arr) => {
    console.log(val,index,arr);
});

// Note - for-each method can only be applied for the arrays not the strings.
// What are Higher Order Functions/Methods?
// These are the functions that take parameter as the other functions or return other functions. for eg -> forEach

// Some more Array Methods

// Map -> Similar to the forEach method. It creates a new array with the results of some operation. The value its
// callback returns are used to form the new array...

// It also takes the callback function as the input.

let nums = [2,3,4,5,6,7,8,9];

// We can also print the numbers using map.
nums.map((val) => {
    console.log(val*2);
});

let new_nums = nums.map((val) => {
    return val*2;  // What you will return will get stored in the new array.
});

console.log(new_nums);

// Filter Method -> Creates a new array of elements that give true for a condition
// or filter.

let even_nums = nums.filter((val) => {
    return val%2 == 0;
});
console.log(even_nums);

// Reduce method -> Performs some operation & reduces the array to a single value.
// It returns that single value. For eg to calculate sum or average.

const sum = nums.reduce((result, current) => {

    // Initiallly result is pointing to the first and the current is pointing to the second value in the array.
    // After performing calculation it will be stored in the result.
    return result + current;
});

console.log(sum);


// Suppose we need to find out the maximum...

const maxi = nums.reduce((prev, curr) => {
    if(prev >= curr){
        return prev;
    }
    else{
        return curr;
    }
});

console.log(maxi);

// Note -> alert aur prompt humare pure code ko block kar deta hai and jab tak wo pop up hatta nhi hai dusra code execute nahi hota hai.

// Window Object
// The Window object represents an open window in a browser. It is the browser's object (no javascript) and is automatically
// created by the browser.

// It is a global object with lots of properties and methods.
// Even console.log is the part of the window object.
// It is the global object . Alert Prompt all are part of this object.

console.log(window);

console.log("hello");
window.console.log("hello");


// What is the DOM ?
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

// WE can access all our HTML elements inside the javascript.
// Inside the javascript all our HTML elements gets converted in the object called as the document and this document is available in the window object. 

// console.dir(window.document)  isse hum properties and methods dekh sakte hain document object ki.

// DOM is the tree like dtucture. Refer Notes of Apna College.
// DOM me shuruwat hoti hai Window object ke saath and the document object and the HTML ke elements as nodes aate hain.




