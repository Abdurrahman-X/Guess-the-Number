'use strict';

// The DOM is a complete structured representation of the HTML document. DOM methods and properties for manipulating the DOM are not part of JS, rather they are part of the WEB APIs

// Use the alt + down to move lines of code below another.

/*
document.querySelector('.message').textContent = 'Correct number!🎉';
document.querySelector('.number').textContent = 24;
document.querySelector('.score').innerHTML = 40;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


// GUESS THE NUMBER GAME 
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
   
    let highscore = 0;   

    const displayMessage = function (message) {
        document.querySelector('.message').textContent = message;
    }
    

// HANDLING CLICK EVENTS
document.querySelector('.check').addEventListener('click', function() {
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    
//    1. Assume no value was input into the field
    if (!guess) {
        // document.querySelector('.message').textContent = "⛔ No Number!"
        displayMessage("⛔ No Number!");

        // when player guesses correctly
    } else if (guess === secretNumber) {
       // document.querySelector('.message').textContent = "🎉 Correct Number!"
        displayMessage("🎉 Correct Number!")
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "25rem"; // this becomes an inline style. the CSS file isnt changed one bit.

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // when guess is incorrect
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = "💥Game Over!"
            displayMessage("💥Game Over!")
            document.querySelector('.score').textContent = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    // document.querySelector('.message').textContent = "Start guessing..." 
    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score;
    document.body.style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    document.querySelector(".guess").value = "";
})

// whenever we get something from the user interface e.g value of an input field, the data type is always a string. Hence the need to convert the 'guess' variable into a number

// console.log(secretNum);

