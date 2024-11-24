/* for..of loop : a special type of for loop used for array-type
    objects ; more efficient and readable ; avoid updation and
    condition like traditional for loop
    
    Syntax : 
    for (const iterator of object){
        body
    }
        > iterator is initialised using for traversal
        > object at which loop is to be done 
*/

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

/* Maps : type of object that holds key-value pairs and remember
    the original insertion order of the keys. Any value may be
    used as either a key or a value. no duplicacy allowed */

const map = new Map() // declared a map by using new keyword and Map object

map.set('IN', "India") // Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.
// takes two params : first is key, second is value
map.set('USA', "United States of America")
map.set('UK', "United Kingdom")

console.log(map) // logs the value in 'key => value' pairs with the count of the elements enclosed in braces

// use for of loop to iterate over this map
for (const [key, value] of map) { // if only want key or value or both use destructuring of array ([key] / [key,value])
    // console.log(key) // logs each key, value pair in a different array
    console.log(`Key and values are: ${key} -> ${value}`)
}

const myObj = {
    game1 : 'NFS',
    game2 : "Assasin's Creed"
}

// for (const [key, value] of myObj) {
//     console.log(key, value)
// } // for of can't be used to iterate over an object