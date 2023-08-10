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

    function playRounds(e) {
        if (playerPoints < 5 && computerPoints < 5) {
            let outcome = playRound(e.target.classList.value, getComputerChoice());

            
            if (outcome.includes("win")) {
                ++playerPoints;
            } else if (outcome.includes("lose")) {
                ++computerPoints;
            }

            //displays the outcome of each round
            roundOutcome.innerText += outcome + '\n';

            if (playerPoints >= 5 || computerPoints >= 5) {

                //displays the winning/losing text
                gameOutcome.innerText = displayWinLoseText(playerPoints, computerPoints);
            }
        }
    }

    moveBtns.forEach((button) => {
        button.addEventListener('click', playRounds);
    });
}

const playPen = document.querySelector('.playPen');
const gameOutcome = document.querySelector('.gameBoard > .gameOutcome');
const roundOutcome = document.querySelector('.gameBoard > .roundOutcome');
const gameBoard = document.querySelector('.gameBoard');

gameBoard.style.display = "flex";
gameBoard.style.flexDirection = "column";
gameBoard.style.alignItems = "center";
gameBoard.style.justifyContent = "center";

roundOutcome.style.paddingBottom = "20px";
roundOutcome.style.display = "flex";
roundOutcome.style.textAlign = "center";

playPen.style.display = "flex";
playPen.style.gap = "33px";

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