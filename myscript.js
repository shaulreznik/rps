/*
Rock beats scissors, scissors beat paper, and paper beats rock.
*/

let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {  
  button.addEventListener('click', () => {
    if (playerScore < 5 && computerScore < 5) {
        playRound(button.id);
    } else {
        if (playerScore == computerScore) {
            announceVictory (playerScore + ":" + computerScore + " Tie game.")
        } else if  (playerScore > computerScore) {
            announceVictory (playerScore + ":" + computerScore + " You won.")
        } else {
            announceVictory (playerScore + ":" + computerScore + " You lost.")
        }
    }
    
  });
});


function displayMessage(message) {
    const result = document.querySelector('#result');
    result.textContent = message;
}

function announceVictory(message) {
    const result = document.querySelector('#victory');
    result.textContent = message;
}
    
function getComputerChoice() {
    const choices = ["Rock", "Scissors", "Paper"];    
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection = getComputerChoice ()) {
    /* Convert rOCk etc. to Rock */    
    //playerSelection = playerSelection.toLowerCase();
    //playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    const winners = "RockScissors ScissorsPaper PaperRock";
    /* Tie game */
    if (playerSelection === computerSelection) {
        message = "Tie game.";
    } else if (winners.includes(playerSelection + computerSelection)) {
        /* The player won */
        playerScore++;
        message = "You won. " + playerSelection + " beats " + computerSelection;
    } else if (winners.includes(computerSelection + playerSelection)) {
        /* The computer won */
        computerScore++;
        message = "You lost. " + computerSelection + " beats " + playerSelection;
    }
    displayMessage(message);
}


