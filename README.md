# Number Guessing Game

This is a simple number guessing game implemented in JavaScript. The game generates a random number between 1 and 20, and the player needs to guess the correct number.

## How to Play

1. The game starts with a randomly generated number between 1 and 20.

2. Enter your guess in the input field provided.

3. Click the **Check** button to check if your guess is correct.

   - If your guess matches the random number, you win! The message will display "Very Good", and the background color will change to green. Your score will be updated, and if it beats the previous high score, it will be displayed.

   - If your guess is incorrect, the message will display "Loose the game". Your score will be reduced by 1. Keep guessing until you find the correct number.

4. To play again, click the **Play Again** button. The game will generate a new random number, reset the score to 10, and clear the input field. The background color and message will also reset.

## Code Overview

The game is implemented using JavaScript and HTML. The JavaScript code handles user input, validation, checking the guess against the random number, and updating the UI.

The main elements of the JavaScript code include:

- `randnumber`: A random number between 1 and 20 generated at the start of the game.

- `check`: Event listener for the "Check" button click. It compares the guess with the random number, updates the UI accordingly, and checks for a new high score.

- `again`: Event listener for the "Play Again" button click. It resets the game by generating a new random number, resetting the score, and clearing the input field.

Feel free to explore and modify the code to enhance the game or add new features.

---

Have fun playing the number guessing game and challenge yourself to beat your high score!
