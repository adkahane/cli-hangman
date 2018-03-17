
# cli-hangman
A command line game of Hangman for your enjoyment

## How to install
Type `npm install` to install:
  * inquirer
  * chalk
  * clear

## Rules
1. The user will be shown an array of '_' characters, representing the letters of a mystery word.
2. The user will be asked to enter in a character.
    * The character must be a letter.
3. If the user's guess matches a letter in the mystery word, that/those letters will be revealed.
4. If the user's guess does not match any letters in the word, their guesses left decrease by 1.
5. Users get 10 guesses to uncover the mystery word and win the game!

![gif of hangman action](readmegif.png)