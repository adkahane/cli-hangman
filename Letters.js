// Constructor function that takes in a letter and constructs a letter object
var Letter = function(letter) {
  // The underlying letter of the object
  this.letter = letter;
  // Has this letter been guessed by the user?
  this.guessed = false;
  // if the letter has been guessed display the letter.  If not, display a "_"
  this.toString = function(guessed) {
    if (this.guessed === true) {
      return (this.letter);
    }
    else {
      return ("_");
    }
  };

  // Check to see if the letter has been guessed correctly
  this.check = function(char) {
    if (char.toLowerCase() === this.letter) {
      this.guessed = true;
    }
  };
};

module.exports = Letter;