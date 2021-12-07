function play(playerSelection, computerSelection) {
        
    playerSelection = capitalize(playerSelection);
    computerSelection = capitalize(computerSelection);
    
    // Previously create outcome messages to be used further.
    let winMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
    let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;

    // Check if it is a draw. If not, checs who won. Return the result as string.
    if (playerSelection === computerSelection) {
        return (`Computer also chose ${playerSelection}. It's a draw!`);
    }
    else if (computerSelection === 'Scissors') {
        return (playerSelection === 'Paper') ? loseMessage : winMessage;
    }
    else if (computerSelection === 'Rock') {
        return (playerSelection === 'Scissors') ? loseMessage : winMessage;
    }
    else if (computerSelection === 'Paper') {
        return (playerSelection === 'Rock') ? loseMessage : winMessage;
    }
}

function capitalize(text) {
    // Capitalizes the choice from padronization and aesthetics.
    return text.slice(0,1).toUpperCase() + text.toLocaleLowerCase().slice(1)
}

function getComputerChoice() {
    // Make a random choice for the computer. Returns string with the choice

    // Get a random integer from 0 to 2
    const computerPick = parseInt(Math.random() * 3);
    
    // Atribute each number to rock, scissors or paper and return as string
    if (computerPick === 0) {
        return 'rock';
    }
    else if (computerPick === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function game() {
    // Play the game five times, displaying the result for each.
    for (let i = 0; i < 5; i++) { 
        //playerSelection = prompt('Rock, paper or scissor?').toLocaleLowerCase();
        const playerSelection = getPlayerInput();
        const computerChoice = getComputerChoice();
        const result = play(playerSelection, computerChoice);
        console.log(`Game ${i + 1}: ${result}`)
}

function getPlayerInput() {
    // Get player input and return it if it's valid. If it is not, ask again.

    let playerSelection;
    while (true) {
        playerSelection = prompt('Rock, paper or scissor?').toLowerCase();
        if (playerSelection !== 'rock' ^ playerSelection !== 'paper' ^ 
            playerSelection !== 'scissors') {
                alert(`"${playerSelection}" is not a valid option.`);
        }
        else {
            return playerSelection;
        }
        }
    }
}
