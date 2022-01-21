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

    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    document.querySelector('.number').textContent = secretNumber;
    
    console.log(secretNumber);  

// HANDLING CLICK EVENTS
document.querySelector('.check').addEventListener('click', function() {
    
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//    1. Assume no value was input into the field
    if (!guess) {
        document.querySelector('.message').textContent = "⛔ No Number!"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!"
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too High!"
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥Game Over!"
            document.querySelector('.score').textContent = 0;
        }
        
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too Low!"
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥Game Over!"
            document.querySelector('.score').textContent = 0;
        }
        
    }

})
// whenever we get something from the user interface e.g value of an input field, the data type is always a string. Hence the need to convert the 'guess' variable into a number

//console.log(secretNum);







