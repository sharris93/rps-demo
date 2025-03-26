// ? Pseduocode / User Stories

// * As a user, when I load the page I want it to be clear what I'm playing and how to play it

// * I should be able to select either rock paper or scissors, and this should be really clear
// A button will be provided for each option
// Text will be displayed below, as well as an emoji representation of the choice
//    - Target Button choices
//    - Define Function named playerChoice, executed on click of a button
//    - Add a click event to each choice button


// * Once I have selected an option, a computer choice should be generated
// This computer choice will be generated at the same time as my player choice
// To generate the computer choice, we will add all possible choices to an array
// We will then use Math.random() to generate a random index between 0 and 2
// This index will be used to find the computer choice from the choices array

// * Once both choices have been made, a result should be determined, and it should be displayed to me really clearly on the screen
// Once both choices generated, compare the 2 choices to find the result
// Display this result to the user
// Display a button to allow the user to play again


// * Once I've seen the result, I want to be able to play the game again by clicking "play again" - this should allow me to choose another option of rock paper scissors. Again, this should be clear how to do it.
// Display text that says "Pick an option"
// Remove any highlighting from the chosen option button
// Remove the results screen that displays choices and results


//  ? Stretch goals

// * At the point of determination, we should also see a tally of wins/draws/losses clearly displayed on the screen with the last result updated

// * I want to see an animation of the rock paper scissors game after I have chosen my option

// * I want to be able to clear the scores, and start from scratch







// ! Elements
const choiceButtons = document.querySelectorAll('.choice')
const chooseTextEl = document.querySelector('#choose')
const resultScreen = document.querySelector('#results')
const playAgainBtn = document.querySelector('#play-again-button')
const resultTextEl = document.querySelector('#result-text')
const playerChoiceEl = document.querySelector('#player-choice')
const computerChoiceEl = document.querySelector('#computer-choice')


// ! Executions
function playerChoice(){
  // 1. Determine which choice was clicked
  // 2. Display the player choice to the user
  // 3. Call the function that generates a random computer choice
  
}

function generateComputerChoice(){
  // To generate the computer choice, we will add all possible choices to an array
  // We will then use Math.random() to generate a random index between 0 and 2
  // This index will be used to find the computer choice from the choices array
  // Once computer choice is generated, display the choice clearly to the user
}

function determineResult(){
  // Use the computerChoice and the playerChoice to determine a result

  // if player and computer choices match, its a draw

  // if player chooses rock and computer chooses scissors, player wins
  // if player chooses paper and computer chooses rock, player wins
  // if player chooses scissors and computer chooses paper, player wins

  // else computer wins


  // Display that result
}

function resetGame(){
  // On click of play again, display "choose", hide results
}

// ! Events
// Add a click event to each choice button
// Add a click event to the play again button