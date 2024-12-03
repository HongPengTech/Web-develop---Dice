
var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;

function setImage(number, c){
    document.querySelector("." + c).setAttribute("src", "images/dice" + number + ".png");
}

setImage(randomNumber1,"img1");
setImage(randomNumber2,"img2");

if (randomNumber1===randomNumber2){
    document.querySelector('h1').innerHTML="Draw!";
}
else if (randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML="Player 1 Wins";
}
else if (randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML="Player 2 Wins";
}