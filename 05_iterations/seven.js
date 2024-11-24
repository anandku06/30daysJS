/* Map method : A function that accepts up to three arguments. 
    The map method calls the callbackfn function one time for each 
    element in the array.
    Calls a defined callback function on each element of an array, 
    and returns an array that contains the results. 
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNumbers.map((num) => num + 10) // maps the condition on each num in the array and returns the modifed element

/* Chaining of methods in JS : you can chain multiple methods on a
arrqy simultaneously ; the output of the method becomes the input of the after method, that's how it works */

newNums = myNumbers.map((num) => num * 10).map((num) => ++num).filter((num) => num > 50)
console.log(newNums)

// alternative method
myNumbers.forEach((num) => {
    console.log(num + 10)
})