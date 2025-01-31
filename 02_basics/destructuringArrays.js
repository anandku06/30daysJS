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

// function returning arrays can also be destructured

function f(){
    return [1, 2]
}
[a, b] = f() // here the function 'f()' returned an array which is now destructured and the values are stored in 'a' and 'b' repectively

// if you want to ignore some values during destructuring
function f1(){
    return [1, 2, 3]
}

[a, , b] = f1() // here we don't need the value '2' so we just avoided by the empty space and now only values '1 and 3' got destructured

const [c, ...d] = ["one", "two", true, false, 12, 234] // here the first value is assigned to var c and the rest values are again converted to array and stored to d using rest operator
