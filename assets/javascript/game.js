//global variables
var wins = 0;
var loses = 0;
var guessesLeft = 10;
var guessedLetters = [];
var validGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var gameImage = document.createElement("img");
gameImage.src = "assets/images/beach.jpg";
gameImage.setAttribute("height", "auto");
gameImage.setAttribute("width", "250px");


//sets up variables to be printed using .innerHTML function
var winsText = document.getElementById("wins");
var losesText = document.getElementById("loses");
var currentWordText = document.getElementById("currentWord");
var remainingGuessesText = document.getElementById("remainingGuesses");
var guessedLettersText = document.getElementById("guessedLetters");
document.getElementById("image").appendChild(gameImage);

winsText.innerHTML = wins;
losesText.innerHTML = loses;
remainingGuessesText.innerHTML = guessesLeft;
guessedLettersText.innerHTML = guessedLetters;

//wordList for hangnam game
var wordList = [
    "shell",
    "sun",
    "waves",
    "sand",
    "boardwalk",
    "shore",
    "coast",
    "starfish",
    "sandbar",
    "driftwood",
    "dock",
    "sunglasses",
    "towel",
    "sandcastle",
    "sunbathing",
    "surfboard",
    "snorkle"
]

//Chooseing a random Word
var word = wordList[Math.floor(Math.random() * wordList.length)];

//Set up answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
currentWordText.innerHTML = answerArray.join(" ");

//create variable to keep track of letters taht remain to be guessed
var remainingLetters = word.length;

//The Game Loop!!
document.onkeydown = function (event) {
    var guess = event.key;
    if (validGuesses.indexOf(guess) === -1) {
        alert("This is not a letter, please choose a letter a-z");
    } else if (guessedLetters.indexOf(guess) != -1) {
        alert("Sorry you already guessed this letter! Pick a new one :)")
    } else {
        guessesLeft--;
        checkLetter();
        updateBoard();
    }

    //checks letter to see if its in word choosen
    function checkLetter() {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                currentWordText.innerHTML = answerArray
                remainingLetters--;
            }
        }
    }
    //updates board  & game
    function updateBoard() {
        remainingGuessesText.innerHTML = guessesLeft;
        guessedLetters.push(guess);
        guessedLettersText.innerHTML = guessedLetters;

        if (remainingLetters === 0) {
            setTimeout(function () { win(); }, 200);
        }

        if (guessesLeft === 0) {
            setTimeout(function () { lost(); }, 200);
        }
    }

    //checks if you won the game
    function win() {
        wins++;
        alert("you won!");
        loadImage();

    }
    //checks if you lost the game
    function lost() {
        loses++;
        alert("The word was " + word + " - you lose!");
        loadImage();

    }

    function loadImage() {
        if (word === "shell") {
            gameImage.src = "assets/images/shell.jpg";
        }
        if (word === "sun") {
            gameImage.src = "assets/images/sun.jpg";
        }
        if (word === "waves") {
            gameImage.src = "assets/images/waves.jpg";
        }
        if (word === "sand") {
            gameImage.src = "assets/images/sand.jpeg";
        }
        if (word === "boardwalk") {
            gameImage.src = "assets/images/boardwalk.jpg";
        }
        if (word === "shore") {
            gameImage.src = "assets/images/shore.jpg";
        }
        if (word === "coast") {
            gameImage.src = "assets/images/coast.jpg";
        }
        if (word === "starfish") {
            gameImage.src = "assets/images/starfish.jpg";
        }
        if (word === "sandbar") {
            gameImage.src = "assets/images/sandbar.jpg";
        }
        if (word === "driftwood") {
            gameImage.src = "assets/images/driftwood.jpg";
        }
        if (word === "dock") {
            gameImage.src = "assets/images/dock.jpg";
        }
        if (word === "sunglasses") {
            gameImage.src = "assets/images/sunglasses.jpg";
        }
        if (word === "towel") {
            gameImage.src = "assets/images/towel.jpg";
        }
        if (word === "sandcastle") {
            gameImage.src = "assets/images/sandcastle.jpg";
        }
        if (word === "sunbathing") {
            gameImage.src = "assets/images/sunbathing.jpg";
        }
        if (word === "surfboard") {
            gameImage.src = "assets/images/surfboard.jpg";
        }
        if (word === "snorkle") {
            gameImage.src = "assets/images/snorkle.jpg";
        }

        restartGame();
    }


    //restarts game
    function restartGame() {
        winsText.innerHTML = wins;
        losesText.innerHTML = loses;
        guessesLeft = 10;
        remainingGuessesText.innerHTML = guessesLeft;
        guessedLetters = [];
        guessedLettersText.innerHTML = guessedLetters;
        word = wordList[Math.floor(Math.random() * wordList.length)];
        answerArray = [];
        for (var i = 0; i < word.length; i++) {
            answerArray[i] = "_";
        }
        currentWordText.innerHTML = answerArray.join(" ");
        remainingLetters = word.length;
    }
}







