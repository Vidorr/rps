function getComputerChoice() {
    let choice = Math.random();
    if (choice < 1/3) {
        return "ROCK";
    }
    else if (choice < 2/3) {
        return "PAPER";
    }
    else return "SCISSORS"
}

function getHumanChoice() {
    let choice = prompt("Please make a RPS selection.");
    choice = choice.toUpperCase();
    if (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        choice = getHumanChoice();
    }
    return choice;
}

let computerScore = 0;
let humanScore = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    console.log("Computer chose: ", computerChoice);
    console.log("Human chose: ", humanChoice);
    if (computerChoice === humanChoice) {
        console.log("Draw! Try again")
        playRound();
    }
    else if (computerChoice === "ROCK"){
        if (humanChoice === "PAPER") {
            winRound(humanChoice,computerChoice);
        }
        else loseRound(humanChoice,computerChoice);
    }
    else if (computerChoice === "PAPER"){
        if (humanChoice === "SCISSORS") {
            winRound(humanChoice,computerChoice);
        }
        else loseRound(humanChoice,computerChoice);
    }
    else if (humanChoice === "ROCK") {
            winRound(humanChoice,computerChoice);
        }
        else loseRound(humanChoice,computerChoice);
    }

function playMatch(rounds) {
    for (let i = 0; i < rounds; i++) {
        playRound();
        console.log("Computer score: ", computerScore);
        console.log("Human score: ", humanScore);
    }
    console.log("Match over!");
    if (humanScore > computerScore) {
        console.log("You win the match! CONGRATULATIONS!");
    } 
    else  console.log("You have lost (or tied)! Better luck next time!");
    humanScore = 0;
    computerScore = 0;
}    

function winRound(humanChoice, computerChoice) {
    console.log("You win! ", humanChoice, " beats ", computerChoice, ".")
    humanScore += 1;
}

function loseRound(humanChoice, computerChoice) {
    console.log("You lose! ", computerChoice, " beats ", humanChoice, ".")
    computerScore += 1;
}