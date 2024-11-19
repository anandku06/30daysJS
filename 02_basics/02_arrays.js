const marvelHeros = ["Thor", "SpiderMan", "IronMan"]
const DCHeros = ["SuperMan", "Flash", "BatMan"]

// marvelHeros.push(DCHeros) // inserted DCHeros in marvelHeros
console.log(marvelHeros); // output is array into an array DCHeros in marvelHeros; arrays are not merged but got inserted

// console.log(marvelHeros[3][1]); // to access element which is in an array in another array we use this type of indexing

// const newHeros = marvelHeros.concat(DCHeros) // concatenates two arrays and returns a new array
// console.log(newHeros);

const newHeros = [...marvelHeros, ...DCHeros] // '...' is called spread operator; used to include elements of an array in a new array