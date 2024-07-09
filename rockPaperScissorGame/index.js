let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".messageContainer")
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

const computerChoice = () => {
    let arrChoices = ["rock", "paper", "scissors"];
    let arrIndex = Math.floor(Math.random()*3); // It will choose the random number from 0 to 2.

    return arrChoices[arrIndex];
}

const decidingFunc = (userWin, draw, userChoice, comp_choice) => {

    if(draw == true){
        console.log("The game is draw");
        console.log(userChoice, comp_choice);
        msg.innerHTML = "The game is draw";
        msg.style.backgroundColor = "#081b31";
        
    }

    else if(userWin == true){
        console.log("You won");
        console.log(userChoice, comp_choice);
        msg.innerHTML = "You won";
        msg.style.backgroundColor = "green";
        userScore ++;
        user.innerHTML = userScore;
    }

    else if(userWin == false){
        console.log("You loose");
        console.log(userChoice, comp_choice);
        msg.innerHTML = "You loose";
        msg.style.backgroundColor = "red";
        compScore ++;
        comp.innerHTML = compScore;
    }
}

const playGame = (userChoice) => {

    // Now we need to choose the computer choice.
    let comp_choice = computerChoice();
    // console.log(comp_choice);
    // Now we will decide that who will win.
    let userWin = true;
    let draw = false;
    if(userChoice == comp_choice) draw = true;
    else if(userChoice == "rock"){
        if(comp_choice == "paper") userWin = false;
    }
    else if(userChoice == "paper"){
        if(comp_choice == "rock") userWin = false;
    }

    else if(userChoice == "scissors"){
        if(comp_choice == "rock") userWin = false;
    }

    decidingFunc(userWin, draw, userChoice, comp_choice);
}

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log(choice);
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
});