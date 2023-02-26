// Class is a blue print of a object 

class Cumstomer {
    constructor(n,age){
        this.name = n; 
        this.age = age; 
    }
    beauty(){
        console.log(this.name,this.age)
    }

}


let customer1 = new Cumstomer("javed",18)
// console.log(customer1)
customer1.beauty(); 