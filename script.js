'use strict';

//DOM Methods and Properties are not the part of Javascript 
// To manipulate web pages and rendder in browser we use javascript
// DOM Methods and Properties are part of Web APIs
//Web APIs are the Librariesthat browser implement and can be access from Javascript code
//Web APIs are libraries written in JS and automatically available for us to use
//DOM Specification that browser implement which is the reason why DOM manipulation works same in all browser


//refactoring means to restructure the code without changing how it works


let secretNumber = Math.trunc(Math.random() * 20) +1;  //Math is an object of js which has various methods like random here

let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
//here check belong to class button check 
//addEventListener is a method with parameters
//.value is used to fetch the user input value 

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {
        //document.querySelector('.message').textContent = 'No Number ⛔!';
        displayMessage('No Number ⛔!');
    }

    //When Player wins
    
    else if(guess === secretNumber){
        //document.querySelector('.message').textContent = '🎉 Correct Number';
        displayMessage('🎉 Correct Number');

        document.querySelector('.number').textContent = secretNumber;  

        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }


    }

    //checking if secret number is less than guess number
 
    else if(guess !== secretNumber){
        if(score > 1){
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too High 📈' : 'Too Low 📉';
            displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
            
            score--;
        document.querySelector('.score').textContent = score;
        }
        else {
            //document.querySelector('.message').textContent = 'You Lost the Game 🔥';
            displayMessage('You Lost the Game 🔥');
            document.querySelector('.score').textContent = 0;
        }
    }
    
});

//RESET AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});



