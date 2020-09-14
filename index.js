//generate random number for dice 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1) ;
var randomImage1 = "dice" + randomNumber1 + ".png";
//source of images for dice 1
var randomImageSrc1 = "images/" + randomImage1;
//change the sourse of dice 1
document.querySelector(".img1").setAttribute("src", randomImageSrc1);

//generate random number for dice 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage2 = "dice" + randomNumber2 + ".png";
//source of images for dice 2
var randomImageSrc2 = "images/" + randomImage2;
//change the sourse of dice 2
document.querySelector(".img2").setAttribute("src", randomImageSrc2);


if(randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
} else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerText = "Draw!";
}
