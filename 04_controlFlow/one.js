/* If Statement : consists of a condition through which the flow of the program continues; type of control flow statement in JS

Syntax:

if(condition : should be true then execution is done)
{ body }


conditions can be anything like comparison between two entities using comparison operators : <, >, <=, >=, ==, !=, ===, !== 


'=' this is an assignment operator used to assign any value to the variable
*/

const temperature = 41;

if (temperature < 50) {
  console.log("less than 50");
} // checks the condtion which is true so executes the statement inside the if block

// console.log("temperature is greater than 50"); // it's also executed with the if block because it's in global scope
// but refering to the temperature it shouldn't be executed
// to ensure that use else block as well
else {
  console.log("temperature is greater than 50"); // it'll execute only if the condition in the if block is false
}
/* adding the else block with if ensures that either the condition is true or false */

console.log("aise hi");

const score = 200;

if (score > 100) {
  let power = "fly"; // has a local scope
  // var power = "fly" // this variable has a global scope now
  console.log(`User power: ${power}`);
}

// console.log(`User Power: ${power}`); // error bcz of the power variable that is accessed outside the if block
// if variable was initialised using var keyword then it would become a global variable

const balance = 1000;

if (balance > 500) console.log("Ameer"); // shorthand notation for if when only one statement is there to execute

if (balance > 500) console.log("Ameer"), console.log("Log"); // can execute multiple statements using comma to seperate

// if-else if ladder
if(balance < 500) console.log("gareeb");

else if(balance < 750) console.log("Not so gareeb");

else if(balance < 900) console.log("Now ameer");

else console.log("Gaand faad ameer");

// wanted to check multiple conditions, then use else-if statement acts as if but executed when earlier ifs are false