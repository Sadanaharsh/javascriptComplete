console.log(document); // If HTML form me print karwana hai then use log

console.dir(document); // If methods and properties chahiye then use dir.

// To do this kind of dynamic changes we use DOM only.
document.body.style.background = "green";

// Note -> ALways write the script tag after the HTML. If it is written before the HTML, then we can't access it.

// DOM Manipulation......
// Accessing the elements...

// Selecting with id
let paragraph = document.getElementById("para");
console.log(para);
console.dir(para);

// Selecting with class
let headings = document.getElementsByClassName("heading");
console.log(headings);   // I returns the HTML Collection which is very similar to an array.

document.getElementsByClassName("heading")[1].innerHTML = "My name is Harsh";

// Selecting with tag name.
let paraphs = document.getElementsByTagName("p");
console.log(paraphs);
console.dir(paraphs);

// Another method is the Query Selector....
// Query Selector ke andar hum apni id bhi pass kar sakta hain, class bhi pass kar sakte hain 
// aur tags bhi pass kar sakte hain and wo khud jaan lega ki hume kya chahiye.

// Suppose we need all the paragraphs...
let element = document.querySelector("p");  // For first element
console.log(element);

let allElements = document.querySelectorAll("p") // For all the elements.
console.log(allElements);

// So query Selector returns us the node list.

let headers = document.querySelectorAll(".heading");
console.log(headers);

// Note -> Inside the DOM tree there are three types of nodes which are -
// text nodes, comment nodes, elements nodes.

// Read about the first child, last child and the children in DOM Manipulation

// Mainly we work on the elements nodes.

// There are some properties also that we can use to access as well as update the values.

// tagName: returns tag for element nodes.
console.log(element.tagName);

// innerText: returns the text content of the element and all its children.
console.log(document.querySelector("div").innerText);
console.dir(document.querySelector("div").innerText);

// innerHTML: returns the plain text or HTML contents in the element.
console.log(document.querySelector("div").innerHTML);

// document.querySelector("div").innerText = "abcd";  From this div ke andar ka pura ka pura text change ho jayega.

// Similarly hum innerHTML ko bhi change kar sakte hain.
// document.querySelector("div").innerHTML = "<div>Harsh Sadana</div>";


// textContent: returns the textual content even for the hidden elements.
console.log(document.querySelector("#hidden_element").innerText);
console.log(document.querySelector("#hidden_element").textContent);

// Note -> Using the querySelectorAll we can access all the elements with the particular class name
// and then we can access each of the elements using the indexes.


// Continuing DOM Part-2

// Note -> id, src class are all attributes of the HTML elements.

// getAttribute(attr) It is used to get the attribute value.
// setAttribute(attr, value) To set the attribute value 

let div1 = document.querySelectorAll("div")[1];
console.log(div1);

let id = div1.getAttribute("id");
console.log(id);

// Suppose we need to change the name of the id.
// div1.setAttribute("id", "my_box_updated");

// There is a special attribute which is for style. node.style
let div3 = document.querySelector("#box");
console.log(div3.style);

div3.style.backgroundColor = "red";

// Now we will learn how to insert the elements...

// First we need to create th element and then insert it.

// Suppose we need to create the button.
let newBtn = document.createElement("button");
newBtn.innerText = "Click ME";

// Now to show this button on to the screen, We need to use the methods.

// node.append(el) adds at the end of node(inside)
let div4 = document.querySelector("#box");
div4.append(newBtn);

div4.prepend(newBtn);

// If we want to add outside of the element and before it then we can use before.
div4.before(newBtn);

// Similarly after
div4.after(newBtn);

// Suppose we want to delete a particular node.
newBtn.remove();

console.log(div4.firstElementChild);
console.log(div4.firstChild);

//classList is also the property , It gives us all the classes that the element is having.
// We can also add the class or remove the class


// Events In Javascript...

// The change in the state of an object is known as the event.
// For eg button ka click hona ek event hai and then after the click kya hoga usse hum event handle
// karna kahte hain.

// Mouse events(click, double click etc)
// Keyboard events(keypress, keyup, keydown)
// Form events(submit etc)
// Print event and many more

// Classes and Objects in Javascript -> 
// Prototypes in JS
// A javascript object is an entity having state and behaviour(properties and method).

// eg of Object -> 
const Student = {
    name: "Harsh Sadana",
    marks: 95,

    getMarks: function() {
        console.log("marks = " , this.marks);  // We access the variables inside the function using this keyword. It is same as student.marks
    } ,
}

// Har object ke andar by default ek property hoti hai that is prototype.
console.log(Student);

// JS objects have special property called prototype which is an object only.
// Prototype me kuch properties defined hoti hain and har object me wo by default defined rahti hain.

// let us make our own prototype.

const Employee = {

    calcTax() {
        console.log("tax rate is 10%");
    },

    calcTax2: function () {
        console.log("tax is 10%");
    },

    // Both are the correct ways to define the function inside object.
}

const KaranArjun = {
     salary: 5000,
};

// Karan Arjun object ke andar hum Employee object ki methods and properties ko use karna chahate hain the we will make prototype.

// We can set prototype as  __proto__

KaranArjun.__proto__  = Employee;
// So we can say that prototype is the reference to the object.

console.log(KaranArjun);
console.log(KaranArjun.calcTax());

// Note -> If object and prototype has same method then object's prototype is used.


// There is another method of making the objects that is class.
// Class in javascript

// Class is a program-code template for creating the objects.

// Those objects will have some state(variables) & some behaviour (functions) inside it.

// class MyClass {

//     constructor()

//     method()
    
// }

// Example

class ToyotaCar {

    // Waise toh constructor automatically invoked hota, but we can also create our custom constructors.
    constructor(brand){
       console.log("creating new object"); 
       this.brand = brand;
    }
   
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(price) {
        this.price  = price;
    }
};

// Another way of making the object.
let fortuner = new ToyotaCar("Toyota");  // Constructor invoked automatically

let lexus = new ToyotaCar("Toyota");  // Constructor invoked automatically. Later on hum brand change bhi kar sakte hain but initialization par yeh hi rahega jo ki pass kiya hai.
// If hum argument pass nahi karte hain to bhi error nahi ayega.

fortuner.start();
fortuner.stop();

lexus.setBrand(100000000);
console.log(fortuner);
console.log(lexus);


// Now what is the constructor...
// -> Automatically invoked by new.
// -> Initializes object.


// Inheritance in Javascript...
 // Inheritance is passing down properties & methods from the parent class to the child class.

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent{
    helloFromChild(){
        console.log("Hello from child");
    }
}

let baby = new Child();
console.log(baby.hello());
console.log(baby.helloFromChild());

// Jab bhi parent aur child class me same function hota hai then child ka method call hota hai -> Method Overriding 

// Super Keyword in JS

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

// super(args) calls parent constructor.
// super.parentMethod(args)

class Person {

    constructor(){
        console.log("enter parent constructor");
        this.species = "homosapiens";
    }

    eat(){
        console.log("eat");
    }
}

class Engineer extends Person {

    constructor(branch){
        console.log("enter child constructor");
        // If super not written ther will be an error.
        super() // To invoke parent class constructor.

        // If the arguments are passed from the Engineer constructor and those arguments are of the person then pass those arguments 
        // in the super keyword also.

        this.branch = branch;
        console.log("exit child constructor");
    }

    canWork(){
        super.eat();
        this.eat();
        console.log("Engineer can do any kind of work");
    }
}

let harsh = new Engineer("Information Technology");
console.log(harsh);

harsh.canWork();


// Error Handling in JS

// We use try-catch block to handle the errors.
// If we handle the error the rest of the code will execute.


// try{

// }
// catch ( err ){  err is the error object.

// }

// Jis code ke andar error aa sakta hai hum usse try ke andar likhte hain.
// Catch is used to handle the error.

// Example -> 

let a = 10;
let b = 20;

console.log("a+b ", a+b);
console.log("a-b ", a-b);
console.log("a*b ", a*b);

try{
    console.log("a+c ", a+c);
}
catch(e){
    console.log(e);
}

// Code rukega nahi.

console.log("a/b ", a/b);
console.log("a+b ", a+b);

// Callbacks, Promises & Async-await

// async await >> promise chains >> callback hell
// best is async await.

// Sync in JS

// Synchronous -> It means the code runs in a paricular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous -> Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions,
// which causes delay in the UI. Asynchronous code execution allows to execute next instructions immediately and does'nt block the flow.

// Abhi tak jitna bhi humne kaam kiya hai JS me wo Synchronous Programming thi.

// Eg of Asynchronous.
// setTimeOut function -> Kisi bhi function ko execute karta hai, jis time pe hum krana chahate ho.

function hello(){
    console.log("hello");
}

// setTimeout(hello, 2000) // Time is given in miliseconds 2s = 2000ms.


// Another way 
// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// SetTimeOut is asynchronous. See example.

console.log("one");
console.log("two");

// setTimeout(() => {
//     console.log("Testing");
// }, 5000);

// These two won't wait for the setTimeOut.
console.log("three"); 
console.log("four");

// When we use Callback then real time me ek bahut badi problem arise kar sakti hai jisse hum callback hell bolte hain.

// Callback Hell -> Nested Callbacks stacked below one another forming a pyramid structure.
// (Pyramid of Doom)
// This style of programming becomes difficult to understand and manage.


// function getData(dataId) {

//     setTimeout(() => {
//         console.log(dataId, " data");
//     }, 2000);

// }

// getData(1);
// getData(2);
// getData(3);   In this the timer of all three id's will start at the same time and all the data will be printed simultaneously.

// function getData(dataId, getNextData){

//     setTimeout(() => {
//         console.log(dataId, "data");
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// getData(1, nextData(2)) This is not the right way to pass the function.

// We can pass it through the callback function.

// This is called as the callback hell.
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// Promises is the solution to this callback hell.

// Promise is for "eventual" completion of task. It is an object in JS.

// let promise = new Promise((resolve, reject) => {...})

// It takes two handlers resolve and reject which have their actual meanings.

let promise = new Promise((resolve,reject) => {
    console.log("I am a promise");
})

console.log(promise);

// Promise has three states -> pending, fulfilled(resolve), reject

let anotherPromise = new Promise((resolve,reject) => {
    console.log("I am a promise");
    resolve("success");  // It takes the message, which is stored in the promise result

    // resolve is the function to fulfill the promise.
    // similarly reject is the function to reject the message.

    // reject("Some Error Occured");
});

function getData(dataId, getNextData){

    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            console.log(dataId, "data");
            resolve("Success");
            if(getNextData) {
                getNextData();
            }
        }, 5000);
    });
}

let otherPromise = getData(1);
console.log(otherPromise);


// Hume ab ek baar promise mil gaya toh usse use kaise kar sakte hain.

// If promise fulfill hone ke baad hume kuch kaam krana hota hai to hum promise.then((res) => {...}) ka use karte hain.
// res is the result jo ki resolve karte time par jo msg diya hai wo hota hai.

// If promise reject hone ke baad kuch kaam krana ho to hum promise.catch ka use karte hain, like this  promise.catch((err) => {...})
// and err is the error jo ki reject karte time jo msg diya hai wo hota hai.

// example ...

const getAnotherData = () => {

    return new Promise((resolve, reject) => {

        console.log("This is the promise");

        resolve("success");

        // reject("network error");

    });
}

let data = getAnotherData();

data.then((res) => {
    console.log("Promise fulfilled", res);
});

data.catch((err) => {
    console.log("Promise rejected", err);
})


// Promise Chaining....

const asyncFunction1 = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("This is the promise");
            resolve("Success");
        }, 6000);
    })
};

const asyncFunction2 = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("This is the promise");
            resolve("Success");
        }, 6000);
    })
};

// console.log("fetching data 1");
// let p1 = asyncFunction1();

// p1.then((res) => {
//     console.log("After the promise is executed 1.", res);
// });


// console.log("fetching data 2");
// let p2 = asyncFunction2();

// p2.then((res) => {
//     console.log("After the promise is executed 2.", res);
// })

// p1.then and p2.then both are executing at the same time, so we will use Promise Chaining.


// console.log("fetching data 1");
// let p1 = asyncFunction1();

// p1.then((res) => {
//     console.log("After the promise is executed 1.", res);

//     console.log("fetching data 2");
//     let p2 = asyncFunction2();

//     p2.then((res) => {
//         console.log("After the promise is executed 2.", res);
//     })

// });

// Alternative way of doing this...

// console.log("fetching data 1");
// asyncFunction1().then((res) => {

//     console.log("fetching data 2");
//     asyncFunction2().then((res) => {

//     });
// });

// So the solution of callback hell is the promise chaining...
// Now we will solve the same example of callback hell through promise chaining...

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 3000);
    });
}

// getData(1).then((res) => {
//     console.log(res);

//     getData2(2).then((res) => {
//         console.log(res);
//     });
// });


// This is only called as the promise chaining...
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// .then also returns us the promise.


// Now promise chaining se bhi ek better syntax hota hai, which is known as the async await.

// Async - Await

// async function always returns a promise.
// async keyword can be used with the function.

// async function myFunc() {...}

// await pauses the execution of its surrounding async function until the promise is settled.
// await keyword can only be used inside the async function.

// await jiss async function ke andar likha hai uske saare kaam rok dega jab tak wo await waala statment execute nahi ho jaata.

async function hello(){
    console.log("hello");
}

hello();

// Async function will always returns the promise whether the return keyword is written or not.

// For example

const getApi = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("Access the data");
            resolve("Success");
        }, 2000);
    });
}

async function getWeatherData() {

   await getApi(); // Jab tak yeh statement execute nahi ho jaata agle statement par nhi jayega.
   await getApi();
}

getWeatherData();

// Similarly we can use for getting the data.
async function getAllData() {

    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

getAllData();

// Async - Await is the simpler way of prgramming and using this we can write the code very easily.

// But Async Await me code ko unneccesary ek async function me daalna pada,
// so issse bachne ke liye we can use IIFE: Immediately invoked function expression.

// IIFE is a function that is called immediately as soon as it is defined.
// Inka koi naam nhi hota aur yeh one time hi use hote hain.


// (function () {
//     //
// })();

// Another Way..
// (() => {
//     //
// })();

// Another Way..

// (async () => {
//     //
// })();

// At the last paranthesis add kiye jaate hain, taaki usse wahi ke wahi execute kra diya jaye.

// iske kaafi sare usecases hain jaise async function likhne me , since async function ke andar hume await use karna padta hai.





