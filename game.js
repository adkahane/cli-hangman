
var Word = require("./word.js");

var wordArray = ["donatello","michaelangelo","leonardo","raphael","splinter","shredder","krang","Bebop", "Rocksteady", "Rahzar", "Tokka"];

var game = function() {
  this.gameWord = (wordArray[Math.floor(Math.random() * wordArray.length)]);
  this.newWord = new Word(this.gameWord);
  console.log(gameWord);
};

var stuff = new Word("chicken");
var test = stuff.showWord();
console.log(test);