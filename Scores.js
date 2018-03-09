// Selectors
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

// Counters
var p1Score = 0;
var p2Score = 0;
var winningScore = 7;

// Checks the state of the game
var gameOver = false;

// Makes the score go up when the button is pressed
p1Button.addEventListener("click", function(){
    // If game over is reached stop the increment. 
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
            console.log("Game Over!");
        }
        p1Display.textContent = p1Score;
        console.log(p1Score);
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
        console.log(p2Score);
    }if(p2Score === winningScore){
        p2Display.classList.add("winner");
        gameOver = true;
        console.log("Game Over!");
    }
});

reset.addEventListener("click", function(){
    p1Display.textContent = 0;
    p2Display.textContent = 0;
});