# Beginning of the Arcade with Psuedo Code

# Website Structure

- Games must work - A Game per Page
  - 4 games to approach in order:
    - Tic Tac Toe
    - Connect Four
    - Mancala
    - Snake (Different then the rest)
  - CSS styling per game for different colors
    - 1 page of CSS Styling
    - 1 page of JS information to load per HTML

# Tic Tac Toe - First requirement for project

# Beginning Steps

- We need a 3 x 3 Grid for the O's or X's
  - Total of 9 moves or until someone wins
  - Need either two people playing the game or 1 vs the computer
    - show computer name or both player names (input? through text box or alert box?)
    - Button / Choice to choose between Player 2 or Computer
    - Random Choice to who goes first should be X
- Need a way to players to be able to move - Clicking square
  - Click events (event listeners) and toggle them based on turn
    - Random choice of player or computer goes first - randomized? Take Turns?

# bonus section

- Set board size taller or shorter than 3x3 if player wants like 4x4 or 5x5?
  - Choice or button for more options than 3x3?

# To Win the Game

- computer has to figure out if the game is over. THis can happen if:
  - somebody has won (as a result of the last move)
  - all of the spaces on the board are full and no one has won
    - This needs to happen EVERY time someone makes a move!
    - Line to go through winning section OR alert to say Congrats - won
  - Start game over with press of button = Reset
    - Check spots for X's or O's and if it can be placed there
      - Loops to verify what's occurring in each spot to decide if someone won or lost
        - Best to have computer do certain spots better than usual
        - Great example similar = Sudoku / Coffee Clicker
  - Button or choice to reset everything
