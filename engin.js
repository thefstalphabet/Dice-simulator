// for dice one -------------------------
var randomNum1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNum1 + ".png";

var randomSrc1 = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSrc1);

// foe dice two -------------------------

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + randomNum2 + ".png";

var randomSrc2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSrc2);

// for head line ---------------------------------------

if (randomNum1>randomNum2){
    document.getElementById("heading2").innerHTML = "Player 1 is win"
}
else if (randomNum1<randomNum2){
    document.getElementById("heading2").innerHTML = "Player 2 is win"
}
else if (randomNum1==randomNum2){
    document.getElementById("heading2").innerHTML = "Draw"
}
