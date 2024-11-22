/* Scopes in JavaScript is denoted by curly braces ({}) ; not related to objects ; signifies a particular scope or place of execution for a statement 

Types of Scopes in JS : 
-> block scope : scope of a particular block like if-else, for, while, etc.
-> global scope : declared globally default behaviour

Browser's global scope is diffrent from the code editor's global scope-
*/

let a = 100
// const b = 20
var c = 300 
// these are in global scope i.e globally accessible

if(true){
    let a = 10;
    const b = 20
    var c = 30

    console.log("Inner: ", a); // here a's scope is different so it'll take the a initialised here with value 10
    
} // these variables are enclosed in the if scope

console.log(a); // outputs the a in global scope i.e. 100

// console.log(a); // shows error because a is defined in the block scope of if ; not accesible outside
// console.log(b); // shows error because b is defined in the block scope of if ; not accesible outside
// console.log(c); // if c is declared globally with different value then also it'll take the value that is initialised recently
// it takes the variable c because this variable declared using var keyword that violates the scope rules so avoid using it

function one(){  // made a function that has a variable
    const username = "hitesh"   // initialised a variable

    function two(){  // made another function 
        const website = "youtube"   // declared another variable

        console.log(username);   // logging the variable declared outside of this functional scope
    }

    // console.log(website);  // logging the variable declared in the two's function scope ; gives error as accessing the variable outside it's scope
    
    two() // calling the function
}

one()  // calling the function

/* logging the website variable gives the error because the scope of two's function is ended and accessing the variable in global scope (here one's functional scope) from the local scope (two's functional scope) is not allowed as after the scope termination the variable assigned in that scope is now unknown */ 

/* In case of nested function : Child function can access the variables of the Parent function but Parent function can't access the variable of child  */