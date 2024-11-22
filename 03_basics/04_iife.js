/* Immediately Invoked Function Expressions (IIFE) ia a special 
type of function in JS used to invoke any function just after
it's declaration ; declared then execute
mainly used to avoid the function geeting polluted or can say to 
protect some functions from global and local scopes hoisting

s
Syntax : 
( function definition )()
*/

(function chai(){
    console.log("Chai bn gyi bro");
})(); // execution just after declaration ; named IIFE

(() => {
    console.log("DB CONNECTED");
})(); // arrow functipn is also allowed here

// here an error is encountered due to ASI in JS ; IIFE doen't know when to end the context on its own ; it's taking the both function together without seperation so error arises, just end it using semicolon

((name) => {
    console.log(`${name} WELCOME!!`);
})('Anand') // you can also give parameters and arguments like this