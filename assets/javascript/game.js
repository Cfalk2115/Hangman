
 // Arrays for Hangman Game
 
 var words = ["beautiful", "persnickety", "discombulated", "quagmire", "awkward", "numbskull", "rhythmic", "zealous"];
 var wins = 0;
 var loss = 0;
 var wrongLetterGuess = [];
 var guessesLeft = 10;
 var underScores = [];
 var userGuesses = [];
 var randomWord;

 // How my Hangman Game will function
 function startGame(){
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);

    for (var i = 0; i < randomWord.length; i++) {
        underScores.push('_');
     }
     console.log(underScores);
     
     // join underscores
    document.getElementByClassName("underscores").textContent = underScores.join(" ");
    document.getElementByClassName("guessesLeft").textContent = guessesLeft;

    wrongLetterGuess = [];
    guesseLeft = 10;

     // guesses left counter
    document.getElementByClassName('guessesLeft').textContent = guessesLeft;

}

// register key press
document.onkeyup = function(event) {
    userGuesses = event.key;
    console.log(userGuesses);
}

//check right letters
//log wrong letters
//log wins
//log losses

startGame();

