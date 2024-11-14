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

