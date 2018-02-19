
var game = require("./game.js");
var inquirer = require("inquirer");
const chalk = require("chalk");
const log = console.log;
// Number of wrong guesses
var wrong = 0;

// while (wrong < 10) {
  var newGame = new game();
  newGame.startGame();
  newGame.wordProgress();
  newGame.checkGuess("o");
  newGame.wordProgress();
// }