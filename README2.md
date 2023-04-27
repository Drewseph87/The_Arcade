# Beginning of the Arcade

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





# Tic Tac Toe

# Beginning Steps

- We need a 3 x 3 Grid for the O's or X's
    - Total of 9 moves or until someone wins
    - Need either two people playing the game or 1 vs the computer
        - show computer name or both player names (input? through text box or alert box?)
        - Button / Choice to choose between Player 2 or Computer
        - Choice to choose X's or O's?
- Need a way to players to be able to move - Clicking square
    - Click events (event listeners) and toggle them based on turn
        - Random choice of player or computer goes first - randomized? Take Turns?
- Set board size taller or shorter than 3x3 if player wants like 4x4 or 5x5?
    - Choice or button for more options than 3x3?

# To Win the Game 

- computer has to figure out if the game is over. THis can happen if:
    - somebody has won (as a result of the last move)
    - all of the spaces on the board are full and no one has won
        - This needs to happen EVERY time someone makes a move!
        - Line to go through winning section and Alert to say Congrats!
    - Start game over with press of button = Reset
        - Check spots for X's or O's and if it can be placed there
            - Loops to verify what's occurring in each spot to decide if someone won or lost
                - Best to have computer do certain spots better than usual
                - Great example similar = Sudoku / Coffee Clicker
    - Button or choice to reset everything



# Connect Four

# Beginning Steps / Rules
- Similar structure to Tic Tac Toe except click on rows instead of a grid
    - Board with 7 x 6 total and total of 4 in a row to win
    - Computer and person takes turns, again choosing a spot for better chocie?
- 

- 