
var game = require("./game.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var log = console.log;
// Number of guesses left
var guessLeft = 10;
var playerGuess;
var playGame;

function hereWeGo() {
var newGame = new game();
newGame.startGame();
rounds();

// Game recursion loop
function rounds() {
  console.log("\nMystery Word:");
  console.log(newGame.wordProgress() + "\n");
  if (guessLeft > 0){
  inquirer.prompt([
    {
      type: "input",
      name: "guess",
      message: "What Letter will you choose?"
    }])
  .then(function(answers) {
    playerGuess = newGame.checkGuess(answers.guess);
    if (playerGuess === false) {
      guessLeft--;
      console.log(newGame.wordProgress());
      console.log("You have " + guessLeft + " guesses left.\n");
      rounds();
    }
    else {
      console.log("Good Guess!");
      console.log(newGame.wordProgress());
      rounds();
    }
  });
}
}
}
// After losing, ask the player if they want to play again
if (guessLeft === 0) {
  inquirer.prompt([
    {
      type: "confirm",
      name: "playAgain",
      message: "Would you like to play again?"
    }
  ]).
  then(function(answers) {
    playGame = answers.playAgain;
    if (playGame === true) {
      hereWeGo();
    }
    else {
      console.log("Goodbye");
    }
  });
}

hereWeGo();