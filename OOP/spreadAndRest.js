// spread is used to copy one array to another array 

// Spread with array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1, 2, 3, 4]

// Spread with object
const person = {
    name: 'Max'
};  
const newPerson = {
    ...person,
    age: 28
};
console.log(newPerson); // {name: 'Max', age: 28}

let List = ["javed","dev","khan","aman"]
let List2 = [...List,"jaan"]
console.log(List2);




// Rest operator is used in a function arguement 
// in case we want to pass n number of argument we use rest operator 

let Hello = (...all) =>{
    console.log(all); 
}

Hello(1,2,3,4,4,5,5,6,6,8); 