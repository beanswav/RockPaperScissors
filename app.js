const a = "Rock".toLowerCase();
const b = "Paper".toLowerCase();
const c = "Scissors".toLowerCase();
const choices = [a, b, c];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const selectionButtons = document.querySelectorAll('.player-options');

function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice);
    return compChoice;
}

selectionButtons.forEach(btn => btn.addEventListener('click', playRound));

let pScore = document.getElementById('playerScore');
let compScore = document.getElementById('compScore');
let result = document.getElementById('result');

let playerScore = 0;
let computerScore = 0;

function playRound(event) {
        let playerSelection = event.target.value;
        let computerSelection = computerPlay();

        if (computerSelection == playerSelection) {
            result.textContent = `A tie! Try again.`;
        } else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection== "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) { 
            playerWin();
        } else {
            compWin();
        }
    }

function endGame(winner) {
    result.textcontent = `${winner} wins the game!`;
}

function playerWin() {
    playerScore++;

    result.textContent = `Round win!`
    pScore.textContent = `Your score: ${playerScore}`;
        if (playerScore == 5) {
            endGame('Player');
        }
}

function compWin() {
    computerScore++;

    result.textContent = `Round loss.`
    compScore.textContent = `CPU score: ${computerScore}`;
    if (computerScore == 5) {
        endGame('Computer');
    }
}