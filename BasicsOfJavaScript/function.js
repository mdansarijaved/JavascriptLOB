// function getMilk(bucks){
//     console.log("you owe me "+bucks+" bucks.")
// }
// var bucks = 45; 
// getMilk(bucks);


// buy some milk for me 

function buyMilk(money){
    // bottles = money/1.5;
    // console.log("Get me "+ Math.floor(bottles)+" of milk.")
    return money % 1.5;
}

buyMilk(10)