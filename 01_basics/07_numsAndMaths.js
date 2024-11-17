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