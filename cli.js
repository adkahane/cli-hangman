
var game = require("./game.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var log = console.log;
// Number of guesses left
var guessLeft = 10;
var playerGuess;
var playGame = true;

while (playGame === true) {
  var newGame = new game();
  newGame.startGame();
  while (guessLeft > 0) {
    chalk.blue(newGame.wordProgress());
    inquirer.prompt([
      {
        type: "input",
        name: "char",
        message: "What Letter will you choose?"
      }
    ]).
    then(function(answers) {
      log(chalk.red(answers.char));
      playerGuess = newGame.checkGuess(answers.char);
      if (playerGuess === false) {
        guessLeft--;
      }
      else {
        log.blue("Good Guess!");
      }
    });
    // newGame.wordProgress();
    log.yellow("You have " + guessLeft + "guesses left.\n");

  }

  inquirer.prompt([
    {
      type: "confirm",
      name: "playAgain",
      message: log(chalk.blue("Would you like to play again?"))
    }
  ]).
  then(function(answers) {
    playGame = answers.playAgain;
  });
 }