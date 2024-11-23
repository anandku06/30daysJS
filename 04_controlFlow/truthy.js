/* Some values are assumed to be true to avoid further comparisons
and maintain the efficency of the code, also called truthy values */

const userEmail = "h@hitesh.ai" // true byu interpreter
// const userEmail = "" // false by interpreter

if(userEmail){
    console.log("Email Found")
}
else{
    console.log("Email not found")
}

/* In the context of variable userEmail, it has a value 
'h@hitesh.ai', which is automatically considered as true by the
JS interpreter as no comparisons are doen in the if statement 
but if the variable has an emoty string then it would be considered
false */

/* falsy values : false, 0(int), -0, BigInt 0n, "", null, undefined 
and NaN except these all are truthy values */

// truthy values : "0", "false", " "(space), [], {}, function(){}

// to check whether an object is empty or not
const myObj = {}

if(Object.keys(myObj).length === 0) 
    console.log("empty")
// Object.keys(myObj) returns an array and then using the length property and checking its vlaue to zero will check whether the object is empty or not