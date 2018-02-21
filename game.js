
var Word = require("./word.js");
var wordArray = ["donatello","michaelangelo","leonardo","raphael","splinter","april","foot","shredder","krang","bebop", "rocksteady", "rahzar", "tokka"];
var found;
// Constructor function for a new game. Contains all the different phases of the game
var game = function() {
  this.startGame = function() {
    this.gameWord = (wordArray[Math.floor(Math.random() * wordArray.length)]);
    this.newWord = new Word(this.gameWord);
  };
  this.wordProgress = function() {
    return this.newWord.showWord();
  };
  this.checkGuess = function(guess) {
    found = this.newWord.check(guess);
    if (found === false) {
      return false;
    }
  };
};

module.exports = game;