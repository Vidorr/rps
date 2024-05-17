let computerScore = 0;
let humanScore = 0;

/** @type {HTMLDivElement} */
const rpsBtnsDiv = document.querySelector("#rpsBtns");
    const btnRock = document.createElement('button');
    btnRock.textContent = "ROCK";
    const btnPaper = document.createElement('button');
    btnPaper.textContent = "PAPER";
    const btnScissors = document.createElement('button');
    btnScissors.textContent = "SCISSORS";
    let choiceBtns = [btnRock, btnPaper, btnScissors];
    choiceBtns.forEach((btn) => btn.addEventListener('click', () => {playRound(btn.textContent)}))
rpsBtnsDiv.append(btnRock,btnPaper,btnScissors);
rpsBtnsDiv.style.visibility = "hidden";

/** @type {HTMLDivElement} */
const matchControlsDiv = document.querySelector("#matchControls");
    /** @type {HTMLInputElement} */
    const rangeRoundCount = document.querySelector('input[type="range"]');
    const btnNewMatch = document.createElement('button');
    btnNewMatch.textContent = "New Match";
    btnNewMatch.addEventListener('click', startMatch);
matchControlsDiv.appendChild(btnNewMatch);

/** @type {HTMLDivElement} */
const scoreDiv = document.querySelector("#scores");
/** @type {HTMLHeadingElement} */
const roundResultH3 = document.querySelector("#roundResult");
/** @type {HTMLHeadingElement} */
const matchResultH1 = document.querySelector("#matchResult");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        drawRound(humanChoice)
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
    printScores();
    if (computerScore == (+rangeRoundCount.value+1)/2 || humanScore == (+rangeRoundCount.value+1)/2) {
        endMatch();
    }
}

function startMatch() {
    humanScore = 0;
    computerScore = 0;
    toggleBtnVisibility();
    printScores()
    roundResultH3.textContent = "";
    matchResultH1.textContent = "";
}

function endMatch() {
    toggleBtnVisibility();
    let matchResultText = "Match over! ";
    if (humanScore > computerScore) {
        matchResultText += "You win! CONGRATULATIONS!";
    } 
    else  matchResultText += "You lose! Better luck next time!";
    matchResultH1.textContent = matchResultText;
}

function toggleBtnVisibility() {
    if (rpsBtnsDiv.style.visibility == "visible") {
        rpsBtnsDiv.style.visibility = "hidden";
        matchControlsDiv.style.visibility = "visible";
    } else {
        rpsBtnsDiv.style.visibility = "visible";
        matchControlsDiv.style.visibility = "hidden";
    }    
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
    roundResultH3.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    humanScore += 1;
}

function loseRound(humanChoice, computerChoice) {
    roundResultH3.textContent = "You lose! " + computerChoice + " beats " + humanChoice + ".";
    computerScore += 1;
}

function drawRound(choice) {
    roundResultH3.textContent = "Draw! Both players chose " + choice + ". Try again!";
}

function printScores() {
    scoreDiv.textContent = "Human score: " + humanScore + " Computer score: " + computerScore;
}