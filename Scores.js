var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.getElementById("p1Display");
var p1Score = 0;


p1Button.addEventListener("click", function(){
    p1Score++;
    p1Display.textContent = p1Score;
    console.log(p1Score);
});
