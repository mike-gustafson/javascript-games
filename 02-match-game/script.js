const gameBoard = document.getElementById('match-game-board')
const gameSquare = document.querySelectorAll('game-board-square')
const gameSquareContains ='';
const gameBoardWidth = 840
const gameBoardCols = 8
const gameBoardRows = 8
const gameBoardTotalSquares = (gameBoardRows*gameBoardCols)
let firstSquare;
let secondSquare;

let tilesOrder = []
gameBoard.style.width = gameBoardWidth + 'px'


//-------------------------------------------------------Generic Functions
// Fisher-Yates (Knuth) Shuffle - O(n) time complexity
function genericArrayShuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

// Create and array of total number of game spaces
function genericCreateVariableArrayOfNumbers(newArray, maxItemNumber){
    for (i=0;i<maxItemNumber;i++) {
        newArray.push(i)
    }
}
//-------------------------------------------------------End Generic Functions

//-------------------------------------------------------Game Specific Functions
function squareClicked(space){
  if (firstSquare===null){firstSquare===space} 
  else {secondSquare===space}
  if (secondSquare!==null){
    if (firstSquare === secondSquare){console.log('They Match!!!')} 
    else {console.log('Try Again!')}
    firstSquare===null;
    secondSquare===null;
  }
}
//-------------------------------------------------------End Game Specific Functions

//-------------------------------------------------------Memory Game Specific Code
for (let i=0;i<gameBoardTotalSquares;i++){
    const gameBoardSquare = document.createElement('div')
    gameBoardSquare.classList.add('game-board-square');
    gameBoardSquare.idList
    gameBoard.appendChild(gameBoardSquare);
}

genericCreateVariableArrayOfNumbers(tilesOrder, gameBoardTotalSquares)
genericArrayShuffle(tilesOrder);
gameSquare.addEventListener("click", () => {squareClicked(gameSquareContains)});
console.log(tilesOrder)
