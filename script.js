
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

let playerResult = 0;
let computerResult = 0;
    
function playRound (e) {
    if (computerResult > 4 || playerResult > 4) {
        return alert("we have a winner!"); // po zwyciezcy nie da sie grac dalej
    }
    let mySelect= this.getAttribute("dvalue"); // this albo event.target // 
    // console.log("thisTextcont:" + this.textContent); 
    console.log(this);
    console.log(e);
       // console.log("atrybuty:" + this.getAttribute("dvalue") + e.target.getAttribute("dvalue"));
        
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

if (result == "Computer") {
    computerResult++;
    console.log("compResult:" + computerResult);
}

else if (result == "Player") {
    playerResult++;
    console.log("playerResult:" + playerResult);
}


console.log("player:" + playerResult + "computer:" + computerResult);

document.querySelector("#playerResult").textContent = `${playerResult}`; // 
document.querySelector("#computerResult").textContent = `${computerResult}`;


}



/* 
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
*/

console.log("finalCompResult:" + computerResult);
console.log("finalPlayerResult:" + playerResult);


const btns = document.querySelectorAll("button");

btns.forEach(btn => btn.addEventListener("click", playRound));




/* document.body.addEventListener("click", event => {
    if (event.target.nodeName == "BUTTON") {
      console.log("Clicked", event.target.textContent */