const marvelHeros = ["Thor", "SpiderMan", "IronMan"]
const DCHeros = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(DCHeros) // inserted DCHeros in marvelHeros
// console.log(marvelHeros); // output is array into an array DCHeros in marvelHeros; arrays are not merged but got inserted

// console.log(marvelHeros[3][1]); // to access element which is in an array in another array we use this type of indexing

// const newHeros = marvelHeros.concat(DCHeros) // concatenates two arrays and returns a new array
// console.log(newHeros);

const newHeros = [...marvelHeros, ...DCHeros] // '...' is called spread operator; used to include elements of an array in a new array
// console.log(newHeros);

const anotherArray = [1, 2, 3,[4, 5, 6], 7,[6, 7,[4, 5]]]
const anoArray = anotherArray.flat(Infinity) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. Infinity value specifies the depth on its own. 
console.log(anoArray); // Basically the method removed the nested array elements in the array and combined them as a single entity

console.log(Array.isArray("Anand")); // returns true if the specified data is an array else false

console.log(Array.from("Anand")); // Creates an array from an iterable object. If conversion cant't done then returns empty array ([])

console.log(Array.from({name: "Anand"})); 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Returns a new array from a set of elements.