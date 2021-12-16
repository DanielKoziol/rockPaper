
function RandomNumber(){
    let randomN = Math.random();
    console.log(randomN);
    console.log(Math.floor(randomN * 3))
    return Math.floor(randomN * 3)
    };

let random =  RandomNumber();

const gameOptions = ["rock", "paper", "scissors"];

function computerSelection (){
    return gameOptions[random];
    }
console.log (`computer: ${computerSelection()}`);
const computerSelect = computerSelection();

const promptOption = prompt("rock paper scissors, man!", "rock");
const mySelect = promptOption.toLowerCase();
console.log(`player: ${mySelect}`);

function playRound (human, computer) {

    if (mySelect==="rock" && computerSelect==="rock") {
    result = "Draw";
}
    else if (mySelect==="rock" && computerSelect==="paper") {
    result = "Computer"; 
}
    else if (mySelect==="rock" && computerSelect==="scissors")
    result = "Player";

    else 
    result = "I know you're cheating!";

console.log(`${result} wins`);
return result;

}

playRound (mySelect, computerSelect);