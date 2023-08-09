function getComputerChoice() {
    let choice = parseInt(Math.random() * 3);

    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    if (playerSelection == computerSelection) {
        return "Tie! You both chose " + computerSelection + "!";

    } else if ((playerSelection == "Rock" && 
                computerSelection == "Scissors") ||
                (playerSelection == "Scissors" &&
                computerSelection == "Paper") ||
                (playerSelection == "Paper" &&
                computerSelection == "Rock")) {
                    return "You win! " + playerSelection + " beats " + computerSelection + "!";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
}
         
function displayWinLoseText(playerPoints, computerPoints) {
    if (playerPoints == computerPoints) {
        return ("It's a tie! " + 
                playerPoints + " to " + 
                computerPoints);

    } else if (playerPoints > computerPoints) {
        return ("The player wins! " + 
                playerPoints + " to " +
                computerPoints);

    } else {
        return ("The player loses! " + 
                playerPoints + " to " + 
                computerPoints);

    }
}

function game() {
    const amountOfRounds = 5

    let playerPoints = 0;
    let computerPoints = 0;

    const moveBtns = document.querySelectorAll('button');

    let outcome;

    let count = 1;

    function playRounds(e) {
        if (count <= amountOfRounds) {
            outcome = playRound(e.target.classList.value, getComputerChoice());

            
            if (outcome.includes("win")) {
                ++playerPoints;
            } else if (outcome.includes("lose")) {
                ++computerPoints;
            }

            //displays the outcome of each round
            roundOutcome.innerText = outcome;

            if (count >= amountOfRounds) {

                //displays the winning/losing text
                gameOutcome.innerText = displayWinLoseText(playerPoints, computerPoints);
            }

            ++count;
        }
    }

    moveBtns.forEach((button) => {
        button.addEventListener('click', playRounds);
    });
}

const playPen = document.querySelector('.playPen');
const gameOutcome = document.querySelector('.gameBoard > .scoreOutcome');
const roundOutcome = document.querySelector('.gameBoard > .roundOutcome');

const rockBtn = document.createElement('button');
rockBtn.classList.add('rock');
rockBtn.innerText = "ROCK";

const paperBtn = document.createElement('button');
paperBtn.classList.add('paper');
paperBtn.innerText = "PAPER";

const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissors');
scissorsBtn.innerText = "SCISSORS";

playPen.appendChild(rockBtn);
playPen.appendChild(paperBtn);
playPen.appendChild(scissorsBtn);

game(); //starts the game