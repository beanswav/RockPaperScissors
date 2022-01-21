//test changes to push via git

const a = "Rock".toLowerCase();
const b = "Paper".toLowerCase();
const c = "Scissors".toLowerCase();
const choices = [a, b, c];

// The mistake I was making here was not assigning separate
// querySelectors for rock, paper, and scissors but instead tried to
// have some sort of global selector by using querySelectorAll
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Assigning an anonymous variable for the 'results' of the player's
// choice and the computer's choice to be passed into the playRound
// function
let playerSelection;
let computerSelection;

// Simple randomizer for the computer's choice, I did well here,
// essentially made it myself
function computerPlay() {
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoice);
    return compChoice;
}

// This is where I just could not figure out the syntax. Obviously, I 
// knew that I had to have an EventListener and that the event would be
// a 'click' but the function portion of the EventListener was over
// my head. As seen below: the function we need off of a click was 
// playRound() with the arguments playerSelection and computerSelection
// passed through it.
buttons.addEventListener('click', function() {playRound(playerSelection, 
    computerSelection);});

// The next three event listeners were also logic I was not able to think
// of. Again, my mistake was thinking I needed to have a single EventListener
// for all three player selections. Instead what we see here are three separate
// EventListener's all assigning themselves to variable playerSelection
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playerSelection);
})

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log(playerSelection);
})

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection);
})

let playerScore = parseInt(0);
let computerScore = parseInt(0);

// Function was easy enough, we were able to form this logic in the previous
// exercise. The only thing we were missing was having the variable 
// computerSelection be assigned to the computerPlay() function we have
// already made above.
function playRound() {

    computerSelection = computerPlay();
    let resultpara = document.querySelector('#result');
    let pScore = document.querySelector('#playerScore');
    let cScore = document.querySelector('#compScore');

    if (computerSelection === playerSelection) {
        resultpara.textContent = `A tie! Try again.`;
    } else if (playerScore == 5) {
        resultpara.textContent = `You win ${playerScore} - ${computerScore}.`
        pScore.textContent = `Your score: 5`;
    } else if (computerScore == 5) {
        resultpara.textContent = `You lose ${computerScore} - ${playerScore}.`
        cScore.textContent = `CPU score: 5`;
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") || 
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper") 
        ) {   
        resultpara.textContent = `You lose, ${computerSelection} beats ${playerSelection}.`;
        cScore.textContent = `CPU score: ${computerScore++}`;
    } else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock")
        ) {
        pScore.textContent = `Your score: ${playerScore++}`;
        resultpara.textContent = `You win, ${playerSelection} beats ${computerSelection}. `; 2
    } 
}