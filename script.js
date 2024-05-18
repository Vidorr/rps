let computerScore = 0;
let humanScore = 0;
let choiceArray = ["Thingy", "Whatsit", "DooDad"]

/** @type {HTMLDivElement} */
const rpsBtnsDiv = document.querySelector("#rpsBtns");
choiceArray.forEach((text) => {createPlayerButton(text)})
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

function createPlayerButton(text) {
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', () => {playRound(text)})
    rpsBtnsDiv.appendChild(btn);
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let computerLoseChoice = (choiceArray[choiceArray.indexOf(humanChoice) - 1] || choiceArray[choiceArray.length - 1]);
    if (computerChoice === humanChoice) {
        drawRound(humanChoice)
    }
    else if (computerChoice == computerLoseChoice) {
            winRound(humanChoice,computerChoice);
        } else loseRound(humanChoice,computerChoice);
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
    return choiceArray[Math.floor(Math.random()*choiceArray.length)]
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