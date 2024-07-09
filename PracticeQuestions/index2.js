// Question 1

let heading = document.querySelector("h2");

heading = heading.innerText + " from Apna College";

document.querySelector("h2").innerText = heading;

// Question 2

let divs = document.querySelectorAll(".myClass");

// Now we can treat divs as an array.
let index = 1;

for(let div of divs){
    div.innerText = `div No. ${index}`;
    index ++;
}

// This way we can also apply the for loops