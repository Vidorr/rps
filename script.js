let computerScore = 0;
let humanScore = 0;

const btnRock = document.createElement('button');
btnRock.textContent = "ROCK";
const btnPaper = document.createElement('button');
btnPaper.textContent = "PAPER";
const btnScissors = document.createElement('button');
btnScissors.textContent = "SCISSORS";
let choiceBtns = [btnRock, btnPaper, btnScissors];
choiceBtns.forEach((btn) => btn.addEventListener('click', () => {playRound(btn.textContent)}))

/** @type {HTMLDivElement} */
const rpsBtnsDiv = document.querySelector("#rpsBtns");
rpsBtnsDiv.append(btnRock,btnPaper,btnScissors);
rpsBtnsDiv.style.visibility = "hidden";

/** @type {HTMLInputElement} */
const rangeRoundCount = document.querySelector('input[type="range"]');
const btnNewMatch = document.createElement('button');
btnNewMatch.textContent = "New Match";
btnNewMatch.addEventListener('click', () => {playMatch(rangeRoundCount.value)});
/** @type {HTMLDivElement} */
const matchControlsDiv = document.querySelector("#matchControls");
matchControlsDiv.appendChild(btnNewMatch);

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    console.log("Computer chose: ", computerChoice);
    console.log("Human chose: ", humanChoice);
    if (computerChoice === humanChoice) {
        console.log("Draw! Try again")
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
    humanScore = 0;
    computerScore = 0;
    rpsBtnsDiv.style.visibility = "visible";
    matchControlsDiv.style.visibility = "hidden";
    while (false) {}
    console.log("Match over!");
    if (humanScore > computerScore) {
        console.log("You win the match! CONGRATULATIONS!");
    } 
    else  console.log("You have lost! Better luck next time!");
}    

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

function winRound(humanChoice, computerChoice) {
    console.log("You win! ", humanChoice, " beats ", computerChoice, ".")
    humanScore += 1;
}

function loseRound(humanChoice, computerChoice) {
    console.log("You lose! ", computerChoice, " beats ", humanChoice, ".")
    computerScore += 1;
}