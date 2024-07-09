// API basically request response cycle par kaam krti hai.
// Application Programming Interface

// Hume request bhejni padti hai API ke endpoint ko and then fir hume response milta hai.

// Fetch API -> 

// The fetch API provides an interface for fetching (sending/recieving) resources.

// It uses Request and Response objects.

// The fetch() method is used to fetch a resource (data).

// fetch keyword is there in javascript.

// let promise = fetch(url, [options]);

// It returns a promise.
// URL is the endpoint of API.

const URL = "https://cat-fact.herokuapp.com/facts";

let promise = fetch(URL);
// console.log(promise);

// We will be using async await to fetch the results from the API.

// Jab bhi API call karte hain to runtime pe sab kuch execute hota hai, page reload nahi hota hai.

// const getCatFacts = async () => {

//     console.log("getting data");
//     let response = await fetch(URL);
//     console.log(response);

//     // response is the object , hum uska status bhi print karwa sakte hain.

//     console.log(response.status);
// }

// Jab bhi hum fetch me options nahi bhejte hain, to fetch ek special type ki rquest karta hai URL endpoint se i.e get request.

// By default max time we will use fetch for get request only.

// Now hum sahi response print karwana chahate hain jo ki API ke endpoint se aya ho.


// Understanding Terms
// Pehle data AJAX format me jaata tha and aata tha, but ab JSON me hota hai

// AJAX is Asynchronous JS and XML

// JSON is Javascript Object Notation, Also called as AJAJ

// json() method : Input is JSON, ouput is JS object.

// So JSON se hum actual usable data nikalte hain.

// const getCatFacts = async () => {

//     console.log("getting data");
//     let response = await fetch(URL);
//     console.log(response);  // JSON format

//     // response is the object , hum uska status bhi print karwa sakte hain.

//     console.log(response.status);

//     let data = await response.json();
//     console.log(data);
//     console.log(data[0]);
// }

// getCatFacts();



const factPara = document.querySelector("#fact");

const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);  // It will come in the JSON format.
    let data = await response.json();
    factPara.innerText = data[0].text;
    console.log(data[1].text);
};

btn.addEventListener("click", getFacts);

// getFacts function can also be made using promise chaining...

function getFacts1() {
    fetch(URL).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[1].text;
    });
};

// There are more topics to learn such as Request and Response
// Read About Request Methods.

// Get, Post, Put, Delete, Patch

// The major difference between the put and patch is that -> 
// Put is used to entirly change the resource. Put is indempotent.
// Patch is used to update the resource partially. Patch is not indempotent means sending the same patch
// request multiple times might have different effects, depending on the current state of resource and the changes being applied.


// Read About HTTP response status codes.

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed or not.
// Successful responses -> 200 - 299
// Client Error response -> 400 - 499
// Server Error responses -> 500 - 599

// HTTp response headers also contain details about the responses, such as content type, HTTP status code etc.






