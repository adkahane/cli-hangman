
var Letter = require("./Letters.js");
// Constructor function that takes in a word, turns all of it's letters into objects in an array and displays the word to the user
var Word = function(word) {
  // Array of letter objects
  this.letterArray = [];
  this.stringArray = [];
  for (var i = 0; i < word.length; i++) {
    var newLetter = new Letter(word[i]);
    this.letterArray.push(newLetter);
    this.stringArray.push(word[i]);
  }
  // Returns a string to game of letters or dashes, based on whether a letter has been guessed yet
  this.showWord = function() {
    return this.letterArray.join(' ');
  };

  this.check = function(char) {
    for (var i = 0; i < this.letterArray.length; i++) {
      this.letterArray[i].guess(char);
    }
    if (this.stringArray.indexOf(char) === -1) {
      return false;
    }
    else {
      return true;
    }
  };
};

module.exports = Word;