//------------------------------------------------------------------------Begin Variable Declaration

const choices = ['lapis','papyrus','scallpulus']
const results={
    win: 'You win',
    lose: 'You lose',
    tie: "It's a tie"
}
let resultsMsg=""

let computerChoice = choices[Math.floor(Math.random()*choices.length)]

let playerPoints=0
let computerPoints=0
let tiePoints=0
let round = 1

let buttonLapis = document.querySelector("#lapis")
let buttonPapyrus = document.querySelector("#papyrus")
let buttonScallpulus = document.querySelector("#scallpulus")
let buttonReset = document.querySelector("#reset")


let resultsObject = {
    lapis:{scallpulus:true, papyrus:false},
    scallpulus:{papyrus:true, lapis:false},
    papyrus:{lapis:true, scallpulus:false}
}
let playerWins = ''

//------------------------------------------------------------------------Begin Function Defining
// function - Logic for rock paper scissors
function compareChoices(){
    if (playerChoice===computerChoice){                                 // checks for tie
        resultsMsg = results.tie;                                       // assign tie string if round is a tie
        tiePoints++                                                     // increments counter for tied games
    }else{
        playerWins = resultsObject[playerChoice][computerChoice];       // set result to boolean value from messages object
        if (playerWins){                                                // if result = true (win)
            playerPoints++                                              // awards player a point
            resultsMsg = results.win                                    // assign victory string
        }else{                                                          // if result = false (loss)
            computerPoints++                                            // award computer a point
            resultsMsg = results.lose                                   // assign loss string
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

function resetGame(){
    playerPoints=0
    computerPoints=0
    tiePoints=0
    round = 1
    resultsMsg = ""
    outputToHTML()
}

//------------------------------------------------------------------------Begin User Interaction
// Event listeners - get user input from HTML buttons and trigger game logic
buttonLapis.addEventListener("click", ()=>{playerChoice=choices[0]; compareChoices()})      // inputs player choice as lapis, runs functions and returns HTML results
buttonPapyrus.addEventListener("click", ()=>{playerChoice=choices[1]; compareChoices()})    // inputs player choice as papyrus, runs functions and returns HTML results
buttonScallpulus.addEventListener("click", ()=>{playerChoice=choices[2]; compareChoices()}) // inputs player choice as scallpulus, runs functions and returns HTML results
buttonReset.addEventListener("click", ()=>{resetGame()})