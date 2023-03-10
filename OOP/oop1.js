class Customer  {

    // to create a property of variable in class we use constructor 

    constructor(n){
        this.name = n; 
    }
    age = 19; 

    // to create a method
    buy(){
        console.log(this.name); 
    }
}


// to inherit a class we use extends keyword

class Guestcustomer extends Customer{

    // constructor(b){
    //     this.age = b; 
    // }

    buy = ()=>  {
        console.log("hello world.")
    }
}


let customer1 = new Guestcustomer("javed"); 
let customer2 = new Customer("Dev"); 


console.log(customer1)
customer1.buy(); 
console.log(customer2)
customer2.buy()