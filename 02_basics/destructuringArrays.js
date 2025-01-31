// Destructuring allows us to 'unpack' values from the data-structures (Arrays, objects) into seperate distinct variables

// const num = ["one", "two", "three", "four", "five"]
const num = ["one", "two", "three"]

// const [one, two, three, four, five] = num // here you destructured the array into seperate variables and now the variables can be used instead of indexing ; variable can be anything but the number of vars specified must match with the length of the array

const [one, two, three, four, five] = num // may possible that the values in the array are less than the specified variables for destructuring

console.log(five) // if accessed the extra vars then it is undefined

// default values for destructuring

let a, b

[a = 5, b = 8] = [] // now if the array is empty then the a and b has thier default values
// if given any value then, the vars just be overwritten