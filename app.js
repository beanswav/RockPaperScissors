//test changes to push via git

const a = "Rock".toLowerCase();
const b = "Paper".toLowerCase();
const c = "Scissors".toLowerCase();
const choices = [a, b, c];

function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return compChoice;
}

function playRound(computerPlay, playerSelection) {
    if (computerPlay === playerSelection) {
        return `A tie! Try again.`;
    } else if (
        (computerPlay === "rock" && playerSelection.toLowerCase() === "scissors") || 
        (computerPlay === "paper" && playerSelection.toLowerCase() === "rock") ||
        (computerPlay === "scissors" && playerSelection.toLowerCase() === "paper") 
        ) {   
        computerScore++;
        return `You lose, ${computerPlay} beats ${playerSelection}.`;
    } else if (
        (computerPlay === "rock" && playerSelection.toLowerCase() === "paper") ||
        (computerPlay === "paper" && playerSelection.toLowerCase() === "scissors") ||
        (computerPlay === "scissors" && playerSelection.toLowerCase() === "rock")
        ) {
        playerScore++;
        return `You win, ${playerSelection} beats ${computerPlay}. `;
    }
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

for (let i=0; i<=3; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay()
    console.log(playRound(computerSelection, playerSelection))
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);
}