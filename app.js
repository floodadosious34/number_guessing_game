//Get Random Number 1-100
let randomNumber = Math.floor(Math.random() * 100 + 1)

//retrieve elements for game input
const winner = document.getElementById('winner-block')
const mainBlock = document.querySelector('#main-content')
let numberGuess = document.querySelector('#numberInput')

//Log how many tries it takes.
let guessTries = 1

// Function to take random number and user number and look for a match.
function checkNumber() {
    let number = parseInt(numberGuess.value)
    console.log(randomNumber)
    console.log(number)
    if (number === randomNumber) {
        alert(`${number} is right. It took you ${guessTries} tries. You win!`)
        winner.style.display = 'block'
        mainBlock.style.display = 'none'

    }    
    else if (number > randomNumber) {
        alert(`${number} is too high!`)
        guessTries++
    }
    else if (number < randomNumber) {
        alert(`${number} is too low`)
        guessTries++
    }
       
}   

// Function to reset input and start game over
function startGame() {
    winner.style.display = 'none'
    mainBlock.style.display = 'block'
    numberGuess.value = null

}


    

