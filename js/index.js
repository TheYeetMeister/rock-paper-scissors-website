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

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    let outcome = playRound(prompt(), getComputerChoice());

    if (outcome.includes("win")) {
        ++playerPoints;
    } else if (outcome.includes("lose")) {
        ++computerPoints;
    }

    console.log(outcome);

    if (playerPoints == computerPoints) {
        console.log("It's a tie! " + playerPoints + " to " + computerPoints);
    } else if (playerPoints > computerPoints) {
        console.log("The player wins! " + playerPoints + " to " + computerPoints);
    } else {
        console.log("The player loses! " + playerPoints + " to " + computerPoints);
    }
}

const playPen = document.querySelector('.playPen');

const rockBtn = document.createElement('button');
rockBtn.classList.add('rockBtn');

const paperBtn = document.createElement('button');
paperBtn.classList.add('paperBtn');

const scissorsBtn = document.createElement('button');
scissorsBtn.classList.add('scissorsBtn');

playPen.appendChild(rockBtn);
playPen.appendChild(paperBtn);
playPen.appendChild(scissorsBtn);