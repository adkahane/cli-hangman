
var game = require("./game.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var log = console.log;
// Number of guesses left
var guessLeft = 10;
var playerGuess;
var playGame;

// Game recursion loop
function hereWeGo() {
  var newGame = new game();
  newGame.startGame();
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
    console.log(answers.guess);
    playerGuess = newGame.checkGuess(answers.guess);
    if (playerGuess === false) {
      guessLeft--;
      newGame.wordProgress();
      console.log("You have " + guessLeft + " guesses left.\n");

    }
    else {
      console.log("Good Guess!");
      newGame.wordProgress();
    }
  });
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