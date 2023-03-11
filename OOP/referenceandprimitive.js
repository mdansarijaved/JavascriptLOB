// Reference (Array , object) and Primitive type(string and number)


//primitive type 
let a = 10 ; 
let b = a; 
b = 9; 
console.log(a,b); 


// reference type 

let person = {
    myname : "Javed"
}

let person1 = person ; 

person1.myname = "aman"

console.log(person); 
console.log(person1); 
