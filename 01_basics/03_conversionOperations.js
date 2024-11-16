let score = 33

console.log(typeof(score)); // outputs number

score = "33"
console.log(typeof(score)); // outputs here is string

let newValue = Number(score); // type conversion : explicit conversion as done by the user using Number class so capitalise
console.log(typeof(newValue)); // outputs here is number


score = "33asdf"
let newValue1 = Number(score); // type conversion : explicit conversion as done by the user using Number class so capitalise
console.log(typeof(newValue1)); // outputs here is number
// but score has mix of number and string 
console.log(newValue1); // outputs NaN : Not_a_Number a special type which occurs usually when non-numeric data converts to number examples can be undefined as well

score = null;

console.log(typeof (Number(score)))
console.log((Number(score))) // outputs 0 after converted to number

// pure strings can't be converted to numbers

let isLoggedIn = 1

let boolIsLoggedIn = Boolean(isLoggedIn)

console.log(boolIsLoggedIn); // outputs true : converted to bool datatype
// 1 => true ; 0 => false ; "" => false ; "asfa" => true

let someNumber = 786
let stringNumber = String(someNumber)
console.log(typeof(stringNumber)); // outputs string : converts number to string


//  ================== Operations ============================

let value = 3
let negValue = -value
console.log(negValue); // console logs the negative of the value

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 2); // exponential operator (here 2 raised to the power 2)
console.log(2 / 2);
console.log(2 % 2); // floor division : returns the remainder of the division

let str1 = "Hitesh"
let str2 = " Coder"
let str3 = str1 + str2
console.log(str3); // logs the additon of two string ; also called concatenation of strings

str3 = "1" + 2
console.log(str3); // logs 12 : here 2 is changed to string and concatenation also happens
console.log(typeof str3); // outputs string : as the conversion is started from left to right so if string is encountered so after it all the things are converted to string

str3 = 1 + 2 + "3"
console.log(str3); // outputs 33 : number are added as usual but then string is encountered so concatenation occurs and final type is of string
console.log(typeof str3); // string

console.log(+true); // 1 : boolean conversion
// console.log(true+); // not allowed throws error

console.log(+"") // 0 

/* Post Increment / Decrement : increase or decrease after usage
   Pre Increment / Decrement : increase or decrease before usage
*/ 