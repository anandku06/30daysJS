/*
Objects : datatype in JS; uses key-value pairs for data storage;
can contain any datatype; core of JS


Singleton - a design pattern that ensures a class or an object has only one instance, and it provides a single point access to that instance.

Object.create // constructor method
*/

// Objecst Literals : initialising objects using literals like variables with curly braces

let jsUser = {} // empty object
let mySym = Symbol("JSkey");

jsUser = {
    name : "Anand",
    "fullName" : "Anand Kumar",
    // mySym : "JSKey1" // here it is considered as string not a symbol; to avoid this, use [] when declaring symbol in objects
    [mySym] : "JSkey1",
    age : 20,
    location : "Jalandhar",
    email : "abc@abc.com",
    isLoggedIn : true,
    lastLogged : ["Mon", "Sat", "Sun"]
}

// Accessing of elements in Objects
console.log(jsUser.email); // traditional dot notation

// console.log(jsUser[email]); // square braces can also be used; but here the keys are stored as strings, so if accessed as non-string then throws error 
console.log(jsUser["email"]); // sometimes keys are given as string and dot notation is not possible to access that key that's why we use sqaure braces here
console.log(jsUser["fullName"]);

/* to use symbol as key in a object, first declare it outside then use it in the object */
// console.log(typeof [mySym]); // here it is considered as array so output is object
// console.log(jsUser.mySym); // when symbol accessed using dot notation returns undefined bcz its not a property name but a variable
console.log(jsUser[mySym]); // its correct accessing of symbol key from an object




