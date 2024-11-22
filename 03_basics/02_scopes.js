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

