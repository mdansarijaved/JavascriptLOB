# JavascriptLOB
    "Everything in JavaScript
    happens inside an
    Execution Context"

    whenever we run a javaScript code and execution context is created. 

# Execution context :  
      It has two components variable environment(memory space) and Thread of execution(code space). 

# Variable enviroment
     A space in memory where all the variable and function are stored in key and value. 
     JavaScript is interpreted language. 
     "JavaScript is a synchronous smole-threaded language"


# Thread of execution
        It is a code space where all the code is executed line by line.

# Execution context creation
        1. Global execution context
        2. Function execution context
        3. Eval execution context

# Global execution context
        It is created when we run a javaScript code. 
        It is created in two phases
        1. Creation phase
        2. Execution phase

# Creation phase
        1. Global object
        2. this keyword
        3. Outer environment
        4. Hoisting

# Global object
        It is a window object in browser and global object in node.js
        It is a global object in which all the variable and function are stored in key and value.

# this keyword
        It is a keyword which is used to refer the current object.

# Outer environment
        It is a outer environment of the current execution context.

# Hoisting
        It is a process of moving all the variable and function declaration at the top of the execution context.

# Execution phase
        It is a phase where all the code is executed line by line.

# Function execution context
        It is created when we call a function.
        It is created in two phases
        1. Creation phase
        2. Execution phase

# Creation phase
        1. Arguments object
        2. Variable object
        3. this keyword
        4. Outer environment
        5. Hoisting 

# Arguments object
        It is a object which is created when we call a function.
        It is a object in which all the argument are stored in key and value.

# Variable object
        It is a space in memory where all the variable and function are stored in key and value.

# Execution phase
        It is a phase where all the code is executed line by line.



# Eval execution context
        It is created when we use eval function.
        It is created in two phases
        1. Creation phase
        2. Execution phase

# Creation phase
        1. Variable object
        2. this keyword
        3. Outer environment
        4. Hoisting

# Execution phase

        It is a phase where all the code is executed line by line.

# Scope chain
        It is a chain of variable environment in which all the variable and function are stored in key and value.

# Scope
        It is a space in which all the variable and function are stored in key and value.

# Lexical scope
        It is a scope which is created when we write a code.

# Dynamic scope
        It is a scope which is created when we run a code.



# Basics of js 
       #input 
            To take input form user use prompt function.
            Syntax: prompt("message");
            Example: prompt("Enter your name");
       #output
            To print output use console.log function.
            Syntax: console.log("message");
            Example: console.log("Hello world");

        # Variable
            Syntax: var variableName = value;
            It is a space in memory where we can store a value.
            Example: var name = "Rahul";
            Note: We can use var, let and const keyword to declare a variable.

        # Data types
            1. Primitive data types
            2. Non-primitive data types

        # Primitive data types
            1. Number
            2. String
            3. Boolean
            4. Undefined
            5. Null
            6. Symbol

        # Non-primitive data types
            1. Object

        # keywords
                1. var
                2. let
                3. const
               
        

# Arrays 
        It is a collection of data.
        Syntax: var arrayName = [value1, value2, value3];
        Example: var arr = [1, 2, 3, 4, 5];
        Note: We can use var, let and const keyword to declare a array.

# Objects
        It is a collection of key and value.
        Syntax: var objectName = {key1: value1, key2: value2, key3: value3};
        Example: var obj = {name: "Rahul", age:

# Functions
        It is a block of code which is used to perform a particular task.
        Syntax: function functionName() {
                    //code
                }
        Example: function add() {
                    var a = 10;
                    var b = 20;
                    var c = a + b;
                    console.log(c);
                }
        Note: We can use var, let and const keyword to declare a function.

# Conditional statements
        1. if
        2. if else
        3. else if
        4. switch

# if
        Syntax: if(condition) {
                    //code
                }
        Example: if(10 > 5) {
                    console.log("10 is greater than 5");
                }               
        Note: If condition is true then it will execute the code inside the if block.

# if else
        Syntax: if(condition) {
                    //code
                } else {
                    //code
                }
        Example: if(10 > 5) {
                    console.log("10 is greater than 5");
                } else {
                    console.log("10 is not greater than 5");
                }
        Note: If condition is true then it will execute the code inside the if block else it will execute the code inside the else block.

# else if
        Syntax: if(condition1) {
                    //code
                } else if(condition2) {
                    //code
                } else {
                    //code
                }
        Example: if(10 > 5) {
                    console.log("10 is greater than 5");
                } else if(10 < 5) {
                    console.log("10 is less than 5");
                } else {
                    console.log("10 is equal to 5");
                }
        Note: If condition1 is true then it will execute the code inside the if block else if condition2 is true then it will execute the code inside the else if block else it will execute the code inside the else block.

# switch
        Syntax: switch(expression) {
                    case value1:
                        //code
                        break;
                    case value2:
                        //code
                        break;
                    default:
                        //code
                }
        Example: switch(10) {
                    case 5:
                        console.log("5");
                        break;
                    case 10:
                        console.log("10");
                        break;
                    default:
                        console.log("default");
                }
        Note: If expression is equal to value1 then it will execute the code inside the case value1 block else if expression is equal to value2 then it will execute the code inside the case value2 block else it will execute the code inside the default block.

# Loops
        1. for
        2. while
        3. do while

# for
        Syntax: for(initialization; condition; increment/decrement) {
                    //code
                }
        Example: for(var i = 0; i < 5; i++) {
                    console.log(i);
                }
        Note: It will execute the code inside the for block 5 times.

# while
        Syntax: while(condition) {
                    //code
                }
        Example: var i = 0;
                while(i < 5) {
                    console.log(i);
                    i++;
                }
        Note: It will execute the code inside the while block 5 times.

# do while
        Syntax: do {
                    //code
                } while(condition);
        Example: var i = 0;
                do {
                    console.log(i);
                    i++;
                } while(i < 5);
        Note: It will execute the code inside the do while block 5 times.