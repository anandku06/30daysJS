/* On the basis of the allocation of the datatypes in memory; there are two types of datatypes :
> Primitive : 7 types (String, Number, Boolean, null, undefined, symbol, BigInt) ; Call by Value method used

> Reference (Non-Primitive) : Array, Objects, Functions ; Call by Reference method ; datatype are function object or object function
*/


"use strict" // treat all JS code as newer version of JS

// alert("hello!!") // gives error in terminal; only accesible in browser's console

console.log(3 +
    3
); // not a syntax error but also not a good practise as well; decreases code readability

let name = "Anand" // it's a string datatype; enclosed in double quotes

let age = 98 // number datatype;  >= 2 raised to the power 53 
let interestRate = 9.8 // number datatype : float numbers also considered under Number

let isEligible = true // boolean datatype; true or false / 1 or 0

// bigInt datatype; used to handle big numbers larger than number datatype range

// null datatype and a standalone value; empty value or can't be fetched
// undefined : value not assigned yet
// symbol : defines uniqueness of a component(React ref)
// object

console.log(typeof "Lauyda"); // outputs string : tells the datatype of the given data

console.log(typeof null); // give object 
console.log(typeof undefined); // give undefined


const id = Symbol("123") // returns symbol
const anotherid = Symbol("123") // returns symbol
console.log(id === anotherid); // false


const heros = ["IronMan", "SuperMan", "Thor", "Chutiya"] // An array : collections of more than one data having different datatypes in a single variable ; elements can be accessed using Indexing(starts from 0 upto size - 1); denoted by square brackets; seperated by commas

const myObj = {
    name : "Anand",
    age : 19
} // An object : stores values as key : value pairs; enclosed in curly braces; also seperated by commas

// Function in JavaScript

function testing()
{
    console.log("Hello World!!");
}
// testing is the name of the function and this is the basic syntax of a function in JS
// also used as declaring a variable of this function

const myFunc = function(){
    console.log("Enjoying JavaScript");
}

testing(); // calling of the function : name of the function followed by a set of parenthesis

console.log(myFunc); // but using a variable for function then console logging it gives this [Function: myFunc] tells that it has a function which should be called traditionally using parenthesis

myFunc() // same traditional calling
