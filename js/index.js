function getComputerChoice() {
    var choice = parseInt(Math.random() * 3);

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

    return playerSelection;

    if (playerSelection == computerSelection) {
        return "Tie! You both chose " + computerSelection;
    }
}