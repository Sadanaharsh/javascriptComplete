
// node.event = () { handle here }

let btn1 = document.querySelector("#my-button");
console.log(btn1);

btn1.onclick = () => {
    console.log("I was clicked");
};

// If humne inline event ko handle kiya hai and javascript code me bhi handle kiya hai
// the javascript code walle ko priority milegi.

let div1 = document.querySelectorAll("div")[1];

div1.onmouseover = () => {
    console.log("Inside the second box");
}

// When ek se jyaada event handler use karenge ek hi element pe then last waala event hi execute hoga.
// So we need to use Event handler

// Event Object
// It is a special object that has details about the event.
// It has details that wo kis type ka event hai, uska target element kya hai and other background info.

// All event handlers have the access to the Event Object's properties and methods.

// It is passed as an argument in the event handler function.
let div2 = document.querySelectorAll("div")[2];

div2.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
}

// Event Listeners...
// node.addEventListener( event, callback)  the callback function is the event handler.

// node.removeEventListener( event, callback)

// Note : the callback reference should be same to remove.

let btn2 = document.querySelector("#btn1");

console.log(btn2);

// Here the event is used without on

btn2.addEventListener("click", () => {
    console.log("This button was clicked!");
});

// Note: The addEventListener() method can have multiple event handlers applied to the same element.
// It does'nt overwrite other event handlers.
// Read the difference between addEventListener and onClick from GFG.

btn2.addEventListener("click", (e) => {
    console.log("This button was clicked twice");
    console.log(e.type);
    console.log(e.target);
});


// We can also remove event listener...
// Note the callback reference should be the same to remove.

// Wrong way
btn2.removeEventListener("click", (e) => {
    console.log("This button was clicked twice");
    console.log(e.type);
    console.log(r.target);
});

let handler3 = (e) => {
    console.log("I was clicked using handler 3");
    console.log(e.target);
    console.log(e.type);
}

btn2.addEventListener("click", handler3);
btn2.removeEventListener("click", handler3);

// To create a toggle button that changes the screen to dark mode when clicked and light mode
// when clicked again.
let modebtn = document.querySelector("#toggle");
let currMode = "light";

modebtn.addEventListener("click", (e) => {
    // console.log("You are trying to change mode");
    if(currMode == "light"){
        document.querySelector("body").style.backgroundColor = "black";
        // We can do the same thing using setAttribute also.
        currMode = "dark";
    }
    else{
        document.querySelector("body").style.backgroundColor = "white";
        currMode = "light";
    }
});

