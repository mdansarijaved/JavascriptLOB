var randomNumber1 = Math.floor( Math.random()*6) +1
var randomeImage = "images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src",randomeImage)
document.querySelector(".img2").setAttribute("src",randomeImage)
var randomNumber2 = Math.floor(Math.random()*6)+1; 
var randomeImage1 = "images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src",randomeImage1)
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent = "Player 1 wins"
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").textContent = "It's a draw"
}
else{
    document.querySelector("h1").textContent = "Player 2 wins"
}