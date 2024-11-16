/* Strings in JS is denoted by single quotes ('') or double quotes("") ; anything enclosed between quotes is considered as strings; 
concatenation of strings also possible using '+' sign between two strings
*/

let fName = "Anand";
let lName = "Kumar";

console.log(fName + " " + lName); // concatenation of strings : outputs Anand Kumar

/* this method is outdated, now we use String Interpolation : use backticks and make placeholders to use variables in between strings */

console.log(`My name is ${fName} ${lName}.`); // string is written under the backticks and for variable, use placeholders '${variable}'

const gameName = new String("Call of Duty"); // another way of declaring string using objects; use of new keyword and dynamically allocating the string using String class

console.log(gameName); // returns an string object([String: 'Call of Duty'])
// This object has all the information and methods that can be applied on this string

/* String are stored in key : value pairs, here in the string 'Call of Duty', each letter of this string is stored as key and value pairs. So to access any letter use same indexing just like array */
console.log(gameName[0]); // Outputs the first letter

/* Methods for the string can be accessed or used using dot notation(.) after the variable name followed by the nethod name */
console.log(gameName.length); // returns the length of the string
console.log(gameName.toUpperCase()); // returns the string in uppercase
console.log(gameName.charAt(5)); // returns the character in the string at the specified index position

console.log(gameName.indexOf("t")); // returns the index of the specified character in the string

let newStr = gameName.substring(0, 4); // divides the string according to the specified index (i.e. 0 start index and 4 end index which is excluded)
console.log(newStr); // returns the string starting from 0th index to 3rd index (4th excluded)

newStr = gameName.slice(-8, 4); //  same as substring but difference is you can specify negative index as well

// here negative index means that starting will be from back of the string

let nowStr = "      hdoabg            ";
console.log(nowStr);
console.log(nowStr.trim()); // another method in string ; used to remove any trailing white spaces in the string from back or front

const url = "https://anand.com/anand%20kumar";
console.log(url);

console.log(url.replace("%20", "-")); // another method in string; replace : replaces any specified string or character in the string with the new string

console.log(url.includes("and")); // method in string used to check whether the specified string is present in the string or not

console.log(url.split("/")); // method in string used to seperate the whole string on the basis of any seperator given here '/' given
// returns array of the seperated strings
