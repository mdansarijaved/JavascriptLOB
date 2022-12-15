let n = 3; 
// let keyword is used to define a variable 
// Variables defined with let cannot be Redeclared.
// 
// Variables defined with let must be Declared before use.
// 
// Variables defined with let have Block Scope.
function Square (num){
    let ans = num * num; 
    return ans; 
}

let squre2 = Square(n); 
let square3 = Square(4); 

console.log(square3 +" "+ squre2); 