const text = document.querySelector('.text')
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const playerScoreboard = document.querySelector('#ply-scr')
const computerScoreboard = document.querySelector('#comp-scr')
const playerContainer = document.querySelector('.ply')
const playerTitle = document.querySelector('.ply-title')
const computerContainer = document.querySelector('.comp')
const computerTitle = document.querySelector('.comp-title')

// If player picks rock, console will choose at random rock, paper or scissors.
// If player wins, player score will increase by 1, and vice versa for the computer
// The score will continue until either the player or ai reaches five. 
// After the winner hits five, game is over and message appears declaring who won

let playerScore = 0;
let computerScore = 0;
let playerChoice = '';
let computerChoice = '';
let computerChoices = ['rock', 'paper', 'scissors'] 

rock.addEventListener('click', rockChoice)
paper.addEventListener('click', paperChoice)
scissors.addEventListener('click', scissorsChoice)


function rockChoice() {
    computerChoiceNow()
    playerChoice = 'rock'
    if (computerChoice === 'rock') {
        text.textContent = `You both picked ${playerChoice}. It's a tie game`
    } else if (computerChoice === 'paper') {
        text.textContent = `You picked ${playerChoice}. The ai picked ${computerChoice}. The computer wins!`
        computerScore++;
        console.log(computerScore)
    } else {
        text.textContent = `You picked ${playerChoice}. The ai picked ${computerChoice}. You win!`
        playerScore++;
    }
    playerScoreboard.textContent = playerScore
    computerScoreboard.textContent = computerScore
    endGame()
}

function paperChoice() {
    computerChoiceNow()
    playerChoice = 'paper'
    if (computerChoice === 'paper') {
        text.textContent = `You both picked ${playerChoice}. It's a tie game`
    } else if (computerChoice === 'scissors') {
        text.textContent = `You picked ${playerChoice}. The ai picked ${computerChoice}. The computer wins!`
        computerScore++;
        console.log(computerScore)
    } else {
        text.textContent = `You picked ${playerChoice}. The ai picked ${computerChoice}. You win!`
        playerScore++;
    }
    playerScoreboard.textContent = playerScore
    computerScoreboard.textContent = computerScore
    endGame()
}

function scissorsChoice() {
    computerChoiceNow()
    playerChoice = 'scissors'
    if (computerChoice === 'scissors') {
        text.textContent = `You both picked ${playerChoice}. It's a tie game`
    } else if (computerChoice === 'rock') {
        text.textContent = `You picked ${playerChoice}. The ai picked ${computerChoice}. The computer wins!`
        computerScore++;
        console.log(computerScore)
    } else {
        text.textContent = `You picked ${playerChoice}. The ai picked ${computerChoice}. You win!`
        playerScore++;
    }
    playerScoreboard.textContent = playerScore
    computerScoreboard.textContent = computerScore
    endGame()
}


function computerChoiceNow() {
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]  
}

function endGame() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            text.textContent = 'Game over!'
            playerContainer.classList.add('winner')
            playerTitle.textContent = 'Congratulations, you beat the computer!'
            playerScoreboard.remove()
        } else {
            text.textContent = 'Game over!'
            computerContainer.classList.add('winner')
            computerTitle.textContent = 'Unlcuky. The computer has won!'
            computerScoreboard.remove()
        }
    }
}