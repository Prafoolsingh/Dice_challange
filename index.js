var randomNo1=Math.floor(Math.random()*6) + 1;  //1-6

var randomDiceImg="dice" + randomNo1 +".png";   //dice1.png - dice6.png

var randomImageSource="images/"+randomDiceImg;   //images/dice1.png - images/dice6.png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);




var randomNo2=Math.floor(Math.random()*6) + 1;

var randomDiceImg="dice" + randomNo1 +".png";

var randomImageSource="images/" + randomDiceImg;

var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource);


// if player 1 wins or 2 wins

if (randomNo1 > randomNo2) {
    document.querySelector("#result").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNo2 > randomNo1) {
    document.querySelector("#result").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("#result").innerHTML = "Draw!";
  }
