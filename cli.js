var inquirer = require("inquirer");
var fs = require("fs");
var gameWord = "";

randomWord();
// inquirer.prompt()

// Returns a random word from the wordbank.txt file.
function randomWord() {
  fs.readFile("./wordBank.txt", "utf8", function(err, data) {
    wordArr = data.split(",");
    gameWord = (wordArr[Math.floor(Math.random() * wordArr.length)]);
  });
  console.log(gameWord);

}