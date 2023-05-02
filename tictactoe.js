//all of my assigned variables to use for a function
const cell = document.getElementsByClassName('cell');
const startButton = document.getElementById('startgame');
const resetButton = document.getElementById('resetgame');
const gameWinner = document.getElementById('gamewinner');
const player1Name = document.getElementById('player1name');
const player2Name = document.getElementById('player2name');
// const playerX = "X";
// const playerO = "O";

const gameBoard = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

const winCombination = [
[0 , 1 , 2],
[3 , 4 , 5],
[6 , 7 , 8],
[0 , 3 , 6],
[1 , 4 , 7],
[2 , 5 , 8],
[0 , 4 , 8],
[2 , 4 , 6]
]

const startGame = () => {
}


const resetGame = () => {

}

const checkCurrentScore = () => {

}



// add to above
function tick(gameBoard) {
// this is an incremental change that happens to the state every time you update...
}

//assigning playerchoice value to input based on drop down menu similar to Pixelate example to choose one or the other, but starting with first input.
let playersChoice = 'onePlayer'

// Grabbing tagname in html collection, turning it into an array and selecting the first index = 0 in the html that is select.
const select = document.getElementsByTagName('select')[0]; 

select.addEventListener('change', selectFunction)
    function selectFunction (event) {
        playersChoice = event.target.value
}

// Event listener to start the game by first asking their names to input for their player.
startButton.addEventListener('click', (event) => {
    if(playersChoice === 'onePlayer') {

      let inputFor1 = prompt('What name shall we call you Player 1?');
      player1Name.innerText = inputFor1;

      gameWinner.innerText = `${inputFor1}, your turn is first!`;

    } else {
      let inputFor1 = prompt('What name shall we call you Player 1?');
      player1Name.innerText = inputFor1;

      let inputFor2 = prompt('What name shall we call you Player 2?');
      player2Name.innerText = inputFor2;

      gameWinner.innerText = `${inputFor1}, your turn is first!`;
    }
});



const board = document.getElementById('board');
board.addEventListener('click', onBoardClick); // etc

setInterval(tick, 1000 / 30) // as close to 30 frames per second as possible