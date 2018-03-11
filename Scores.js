// Selectors
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var end = document.getElementById("end");
var end2 = document.getElementById("end2");

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
            // The winner class is supposed to change the text green of whoever wins.
            p1Display.classList.add("winner");
            p1Display.removeAttribute("id");
            p1.classList.add("p1");
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
    }
    if(p2Score === winningScore){
        p2Display.classList.add("winner");
        p2Display.removeAttribute("id");
        p2.classList.add("p2");
        gameOver = true;
        console.log("Game Over!");
    }
});

end.addEventListener("click", function(){
    end2.textContent = end;
});

reset.addEventListener("click", function(){
    // Resets the score back to 0.
    p1Score = 0;
    p1Display.classList.remove("winner");
    p1Display.textContent = 0;
    p1Display.id = "p1Display";
    p1.id = "p1";
    p2Score = 0;
    p2Display.classList.remove("winner");
    p2Display.id = "p2Display";
    p2Display.textContent = 0;
    gameOver = false;
});