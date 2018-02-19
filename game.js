
var Word = require("./word.js");
var wordArray = ["donatello","michaelangelo","leonardo","raphael","splinter","shredder","krang","Bebop", "Rocksteady", "Rahzar", "Tokka"];
// Constructor function for a new game. Contains all the different phases of the game
var game = function() {
  this.startGame = function() {
    this.gameWord = (wordArray[Math.floor(Math.random() * wordArray.length)]);
    this.newWord = new Word(this.gameWord);
  }
  this.wordProgress = function() {
    console.log(this.newWord.showWord());
  };
  this.checkGuess = function(guess) {
    this.newWord.check(guess);
  };
};

module.exports = game;