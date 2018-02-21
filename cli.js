
var game = require("./game.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var clear = require("clear");

var log = console.log;
var playerGuess;
var playGame;
var guessArray = [];
// Get a new game going
function hereWeGo() {
  // Number of guesses left
  var guessLeft = 10;
  // New instance of game object
  var newGame = new game();
  newGame.startGame();
  
  rounds();

  // Start of a new round
  function rounds() {
    clear();
    log(chalk.white("\n----------------") + chalk.red.bold("\nCLI MYSTERY WORD\n") + chalk.white("----------------\n\nGuess this Word Dude!\n"));
    console.log("You have " + chalk.red.bold(guessLeft) + " guesses left!\n");
    console.log(newGame.wordProgress() + "\n");
    if (guessLeft > 0){
      inquirer.prompt([
        {
          type: "input",
          name: "guess",
          message: chalk.green("What Letter will you choose?"),
          validate: function(value) {
            if (isNaN(value) === false || value.length > 1 || guessArray.indexOf(value) === true) {
              return false;
            }
            return true;
          }
        }])
      .then(function(answers) {
        guessArray.push(answers.guess);
        playerGuess = newGame.checkGuess(answers.guess);
        if (playerGuess === false) {
          guessLeft--;
          // After losing, ask the player if they want to play again
          if (guessLeft === 0) {
            clear();
            log(chalk.bgRed.yellow.bold("\n           YOU LOSE           \n"));
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
                console.log(chalk.blue("\nGoodbye"));
                return 0;
              }
            });
          }
          else {
            rounds();
          }
        }
        else {
          if (newGame.wordProgress().replace(/\s+/g, '') === newGame.gameWord) {
            clear();
            log(chalk.bgRed.yellow.bold("\n           YOU WIN           \n"))
            console.log("The word was " + chalk.cyan.bold(newGame.wordProgress()) + " !\n");
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
                console.log(chalk.blue("\nGoodbye"));
                return 0;
              }
            });
          }
          else{
            rounds();
          }
        }
      });
    }
  }
}

hereWeGo();