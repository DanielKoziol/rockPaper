
function RandomNumber(){
    let randomN = Math.random();
    console.log("randomN" + randomN);
    console.log(Math.floor(randomN * 3))
    return Math.floor(randomN * 3)
    };


const gameOptions = ["rock", "paper", "scissors"];

function computerSelection (){
    return gameOptions[RandomNumber()];
    }

    
function playRound () {

    let promptOption = prompt("rock paper scissors, man!", "rock");
    let mySelect = promptOption.toLowerCase();
    let computerSelect = computerSelection();
    console.log("computer:" + computerSelect);

    if (mySelect==="rock" && computerSelect==="rock") {
    result = "Draw";
}
    else if (mySelect==="rock" && computerSelect==="paper") {
    result = "Computer"; 
}
    else if (mySelect==="rock" && computerSelect==="scissors") {
    result = "Player";
    }
    else if (mySelect==="paper" && computerSelect==="paper") {
        result = "Draw"; 
    }
    else if (mySelect==="paper" && computerSelect==="scissors") {
        result = "Computer"; 
    }
    else if (mySelect==="paper" && computerSelect==="rock") {
        result = "Player";
        }    
    else if (mySelect==="scissors" && computerSelect==="scissors") {
        result = "Draw"; 
    }
    else if (mySelect==="scissors" && computerSelect==="rock") {
        result = "Computer"; 
    }
    else if (mySelect==="scissors" && computerSelect==="paper") {
        result = "Player";
        }    

    else 
    result = "I know you're cheating!";

console.log(`${result} wins`);
return result;
}

let playerResult = 0;
let computerResult = 0;

function game () {
for (let index = 0; index < 6; index++) {
    let roundResult = playRound ();   
    if (roundResult == "Player") {
        playerResult++;
        console.log("playerResult:" + playerResult);
    }
    else if (roundResult == "Computer") {
        computerResult++;
        console.log("compResult:" + computerResult);
    }
    else if (roundResult == "Draw") {
        continue;
    }

}
};

game ();

console.log("finalCompResult:" + computerResult);
console.log("finalPlayerResult:" + playerResult);