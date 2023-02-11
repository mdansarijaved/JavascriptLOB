function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    return bmi; 
}
var kaka =Math.floor(bmiCalculator(89,5.6));
if(kaka >24.9){
    console.log("Your BMI is "+kaka+",so you are overweight.")
}
else if(kaka<24.9 && kaka>18.5){
    console.log("Your BMI is "+kaka+",so you have a normal weight.")
}
else{
    console.log("Your BMI is "+kaka+", so you are underweight.")
    
}