// let a = prompt("Enter your name: ")
// let b = prompt("Enter your lover's name: ")
function loveCalc(){
    var loveScore = Math.floor(Math.random() *100);
    return loveScore;
}
var score = loveCalc(); 
console.log(score);

if(score > 70){
    console.log("Your love score is "+ score + "% you love each other like kanye love kanye.");

}
else
{
    console.log("Your love score is "+ score +"%.");
}