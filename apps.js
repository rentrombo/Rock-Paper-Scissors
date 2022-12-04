const computerchoice = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices,forEach(possibleChoice,addEventListener('click', (e) =>{
 userChoice = e.target.dispatchEvent
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1  // or use 3 since length is 3
    console.log(randomNumber)
}