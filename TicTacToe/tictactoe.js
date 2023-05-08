//all of my assigned variables to use for a function based on html or starting spots.
const startButton = document.getElementById("startgame");
const newGameButton = document.getElementById("newgamebutton");
const dropDown = document.getElementById("selectvalue");
const cell = document.getElementsByClassName("cell");
const gameWinner = document.getElementById("gamewinner");
const player1Name = document.getElementById("player1name");
const player2Name = document.getElementById("player2name");
const addPoints1 = document.getElementById("player1winscount");
const addPoints2 = document.getElementById("player2winscount");
let playersChoice = "onePlayer";
let currentPlayerArray = ["X", "O"];
let currentPlayer = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

//only possible winning choices in tic-tac-toe based on spots/indexes
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Before starting the game, first steps to get the game prepped
const initialState = () => {
  newGameButton.addEventListener("click", (event) => {
    //new game starts with the startGame process again
    startGame();
  });

  //disables the new game button until game ends
  newGameButton.disabled = true;

  //creates listener for value in drop down menu and creates that to a variable playersChoice
  dropDown.addEventListener("change", (event) => {
    playersChoice = event.target.value;
  });

  // Event listener to start the game by first asking their names to input for their player.
  startButton.addEventListener("click", (event) => {
    let inputFor1 = prompt("What name shall we call you Player 1?");
    player1Name.innerText =
      inputFor1 === null || inputFor1 === "" ? "Player 1" : inputFor1; // first try at tenary boolean conditions for if this else this/ also shows null / "" in prompt

    if (playersChoice === "onePlayer") {
      //deciding between a computer or two players
      player2Name.innerText = "Computer";
    } else {
      let inputFor2 = prompt("What name shall we call you Player 2?");
      player2Name.innerText =
        inputFor2 === null || inputFor2 === "" ? "Player 2" : inputFor2;
    }
    startGame();
  });
};

// enable clickable cells for game beginning of call back function to specify event.target.
const clickCellWithTurn = (event) => {
  //variable to event.target
  const clickCell = event.target;
  const clickCellIndex = parseInt(clickCell.getAttribute("id")); //first time with parseInt to grab first integer after id = #
  winnerOrSwitchTurn(clickCellIndex);
};

const winnerOrSwitchTurn = (num) => {
  //number goes into function
  const clickCell = cell[num]; //cell array value = number

  if (!clickCell.innerText) {
    clickCell.innerText = currentPlayerArray[currentPlayer]; //setting inner text to currentPlayerArray x and o and currentplayer = 0 or 1 so it's choosing X or O
    gameBoard[num] = clickCell.innerText; //making the index value of cell into the spot of gameboard to align that div with gameboard value
    const winner = checkCurrentScore(); //variable to function to boolean to say if function is true come back to this.
    if (winner) {
      for (let i = 0; i < cell.length; i++) {
        //remove event listeners
        cell[i].removeEventListener("click", clickCellWithTurn);
      }
      if (currentPlayer === 0) {
        gameWinner.innerText = `${player1Name.innerText} has won the game!`;
        addPoints1.innerText++; //increase points by 1
      } else {
        gameWinner.innerText = `${player2Name.innerText} has won the game!`;
        addPoints2.innerText++; //increase points by 1
      }
    } else if (!gameBoard.includes("")) {
      for (let i = 0; i < cell.length; i++) {
        //remove event listeners
        cell[i].removeEventListener("click", clickCellWithTurn);
      }
      gameWinner.innerText = "It is a DRAW!!!";
    } else {
      //if no win/draw decide next players turn
      if (currentPlayer === 0) {
        currentPlayer = 1;
      } else {
        currentPlayer = 0;
      }
      setPlayerTurn(currentPlayer);
    }
  }
};

const setPlayerTurn = (currentPlayerIndex) => {
  //text for next players turn or point to computer function
  if (currentPlayerIndex === 0) {
    gameWinner.innerText = `${player1Name.innerText} it's your turn!`;
  } else {
    gameWinner.innerText = `${player2Name.innerText} it's your turn!`;
    if (playersChoice === "onePlayer") {
      computerPlayerFunc();
    }
  }
};

const startGame = () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  //enables the new game button
  newGameButton.disabled = false;

  //connect divs to clicking the cell when game starts.
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", clickCellWithTurn);
    cell[i].innerText = "";
  }
  let randomPlayer = Math.floor(Math.random() * 2);
  //reassigning currentPlayer to ranndom choice made from math.floor(math.random)
  currentPlayer = randomPlayer;
  setPlayerTurn(randomPlayer);
};

const computerPlayerFunc = () => {
  //choose a random spot between 0-8
  let computerRandomNumber = Math.floor(Math.random() * 9);
  if (cell[computerRandomNumber].innerText === "") {
    winnerOrSwitchTurn(computerRandomNumber);
  } else {
    computerPlayerFunc(); //keep coming back to the function until a spot === ""
  }
};

const checkCurrentScore = (boardArr) => {
  let roundWon = false;
  for (i = 0; i < winningCombinations.length; i++) {
    conditionToWin = winningCombinations[i]; //setting variable for array in winning.
    // let gameBoard = [x, x, o, o, x, o, o, x, x]; - example where x is winning at 1,4,7.
    // conditionToWin = [1, 4, 7] = Array
    // conditionToWin[0] = 1; = certain value within that array within winningCombinations
    // conditionToWin[1] = 4;
    // conditionToWin[2] = 7;
    // gameboard[conditionToWin[0]] = x;
    // gameboard[conditionToWin[1]] = x;
    // gameboard[conditionToWin[2]] = x;
    // below explains if that value is equal to a winning condition then it says it has won.
    if (
      gameBoard[conditionToWin[0]] !== "" &&
      gameBoard[conditionToWin[0]] === gameBoard[conditionToWin[1]] &&
      gameBoard[conditionToWin[1]] === gameBoard[conditionToWin[2]]
    ) {
      return true;
    }
  }
  return false;
};

initialState(); //start new initial state
//removed ticks because not snake to keep it going or counter based on time. Need to understand this better on future games.
