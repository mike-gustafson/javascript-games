//------------------------------------------------------------------------Begin Variable Declaration
// variable - string
const choices = ['lapis','papyrus','scallpulus']
const resultsMsgWin='You win'
const resultsMsgLose='You lose'
const resultsMsgTie="It's a tie"
const resultsMsg=""
// variable - RNG
let computerChoice = choices[Math.floor(Math.random()*choices.length)]
// variable - Int
let playerPoints=0
let computerPoints=0
let tiePoints=0
let round = 1
// variable - DOM
let buttonLapis = document.querySelector("#lapis")
let buttonPapyrus = document.querySelector("#papyrus")
let buttonScallpulus = document.querySelector("#scallpulus")
// variable - object with nested objects containing boolean values
let resultsObject = {
    lapis:{scallpulus:true, papyrus:false},
    scallpulus:{papyrus:true, lapis:false},
    papyrus:{lapis:true, scallpulus:false}
}
let playerWins = ''
//------------------------------------------------------------------------End Variable Declaration

//------------------------------------------------------------------------Begin Function Defining
// function - Logic for rock paper scissors
function compareChoices(){
    if (playerChoice===computerChoice){                                 // checks for tie
        resultsMsg=resultsMsgTie;                                       // create tie string if round is a tie
        tiePoints++                                                     // increments counter for tied games
    }else{
        playerWins = resultsObject[playerChoice][computerChoice];       // set result to boolean value from messages object
        if (playerWins){                                                // if result = true (win)
            playerPoints++                                              // awards player a point
            resultsMsg = resultsMsgWin                                  // creates victory string
        }else{                                                          // if result = false (loss)
            computerPoints++                                            // award computer a point
            resultsMsg=resultsMsgLose                                   // creates loss string
        }
    }
    outputToHTML()                                                      // calls outputToHTML function
    round++                                                             // increments round number
    computerChoice = choices[Math.floor(Math.random()*choices.length)]  // sets new computer choice for next round
}

// function - output results to HTML document in the "results" div
function outputToHTML(){
    document.getElementById("results").innerHTML = `
    <h2>Round:${round}</h2>
    <span class="score">Player: ${playerPoints}</span><br>
    You chose ${playerChoice}<span class="tied-games">Tied games: ${tiePoints}</span><br>
    <span class="score">Computer: ${computerPoints}</span><span class="results-message">${resultsMsg}</span><br>
    Computer chose ${computerChoice}`
}
//------------------------------------------------------------------------End Function Defining

//------------------------------------------------------------------------Begin User Interaction
// Event listeners - get user input from HTML buttons and trigger game logic
buttonLapis.addEventListener("click", ()=>{playerChoice=choices[0]; compareChoices()})      // inputs player choice as lapis, runs functions and returns HTML results
buttonPapyrus.addEventListener("click", ()=>{playerChoice=choices[1]; compareChoices()})    // inputs player choice as papyrus, runs functions and returns HTML results
buttonScallpulus.addEventListener("click", ()=>{playerChoice=choices[2]; compareChoices()}) // inputs player choice as scallpulus, runs functions and returns HTML results
//------------------------------------------------------------------------End User Interaction