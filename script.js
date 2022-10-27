// Computer needs to generate either rock, paper, scissors. This will be done using the Math.random() method.
// user needs to enter either rock, paper, scissors. This can be achieved using the prompt() method.
// if user picks rock, will win against scissors, lose to paper, and draw to rock
// if user picks paper, will win against rock, lose to scissors and draw to paper
// if user picks scissors, will win against paper, lose to rock and draw to scissors
// A tally needs to be displayed and first to five wins the game. 

// Variables to track points tally 
let playerScore = 0;
let computerScore = 0;
let draw = 0;
const playerWin = 'You win this round'
const computerWin = 'The AI won this round'
const tieGame = ('It\'s a tie game!')
const errorMessage = 'Please enter a valid option'

// This function gives the computer its selection 
function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

// This function plays the game and outputs the results.
function playRound(playersSelection, computerSelection) {
    if (playersSelection === computerSelection) {
        draw++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return tieGame
    } else if (playersSelection === 'ROCK' && computerSelection === 'PAPER') {
        computerScore++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return computerWin
    } else if (playersSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        playerScore++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return playerWin
    } else if (playersSelection === 'PAPER' && computerSelection === 'ROCK') {
        playerScore++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return playerWin
    } else if (playersSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        computerScore++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return computerWin
    } else if (playersSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        computerScore++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return computerWin
    } else if (playersSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        playerScore++
        console.log(`You picked ${playersSelection}, the computer picked ${computerSelection}`)
        return playerWin
    } else {
        return errorMessage
    }
}

// This function loops the games and allows the game to be replayed until either the player or computer has five wins.
function game() {
    for (let i = 0; i <= 100; i++) {
        let playersSelection = prompt('Choose either rock, paper, or scissors').toUpperCase()
        let computerSelection = getComputerChoice()
        console.log(playRound(playersSelection, computerSelection))
        console.log(`Wins: ${playerScore}.`)
        console.log(`Draw: ${draw}.`)
        console.log(`Lost: ${computerScore}.`)
        if (playerScore === 5 || computerScore === 5) {
            break
        } 
    }
}

// This function prints out a message declaring the winner of the game.
function result(playerScore, computerScore) {
    if (playerScore === 5) {
        console.log('Congratulations, you beat the computer!')
    } else if (computerScore === 5) {
        console.log('You lost againts the computer. They\'re taking over!')
    }
}
    
// These functions are what displays the game
console.log(game())
console.log(result(playerScore, computerScore))
