let score = 100
console.log(score); // JS implicitly defines this data as Number


let newScore = new Number(130) // Here we explicitly defined this as a Number datatype using 'new' keyword ; made an instance of Number class
console.log(newScore); // outputs it as a object [Number : 130]
// having some methods which can be seen in browser's console

console.log(newScore.toString()); // a method used to convert the number to string
console.log(typeof newScore.toString()); // outputs string bcz converts to string from number

console.log(newScore.toFixed(2)); // a method used to set the number of precision digits after decimal; here digits will be 2 after decimal

let othenNum = 1223.8966
console.log(othenNum.toPrecision(2)); // takes 3 digit to precise 
// Returns a string containing a number represented either in exponential(if specified digit is smaller than the total digit) or fixed-point notation with a specified number of digits.
// basically rounds off the number according to the given digit

let price = 10000000
console.log(price.toLocaleString());// default is Indian here ; 1,00,00,000
// a method used to convert the number to string but in local currency word i.e. in price

// max size of number can be seen using methods MAX_SAFE_INTEGER or MIN_SAFE_INTEGER

// ========================== MATHS =============================

/* Math is an object in JS which has many methods and functions defined to it */

console.log(Math.abs(5)); // returns the absolute value of the specified number i.e. converts negative number to positive

console.log(Math.round(8.1)); // The value to be rounded to the nearest integer. Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.ceil(8.3));
console.log(Math.floor(8.3));
// ceil rounds up with greater than the specified integer
// floor just does vice-versa

console.log(Math.min(6,7,89,43,56)); // returns the minimum element from the specified array 
console.log(Math.max(6,7,89,43,56)); // returns the maximum element from the specified array
