/* Strings in JS is denoted by single quotes ('') or double quotes("") ; anything enclosed between quotes is considered as strings; 
concatenation of strings also possible using '+' sign between two strings
*/

let fName = "Anand"
let lName = "Kumar"

console.log(fName + " " + lName); // concatenation of strings : outputs Anand Kumar

/* this method is outdated, now we use String Interpolation : use backticks and make placeholders to use variables in between strings */

console.log(`My name is ${fName} ${lName}.`); // string is written under the backticks and for variable, use placeholders '${variable}'
