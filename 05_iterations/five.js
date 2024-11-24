/* forEach method : it's a method of Array object in JS ; makes
    iteration on arrays very much efficent and easier ; targets 
    each element in the array and calls the callback function on
    each element ; has the access of the values, indices and the
    whole array as well
    
    Syntax:
    
    myArray.forEach( callbackFunction ) // callbackFunction : can be anything, always an anonymous function
*/

const coding = ["js", "cpp", "python", "java", "ruby"]

coding.forEach(function (value) {
    console.log(value)
}) // prints each element

coding.forEach((item) => console.log(item)) // arrow functions can also be used here

function printMe(item){
    console.log(`Prints ${item}`)
}

coding.forEach(printMe) // external function can also be given here
// only reference of the function is given(not included parenthesis)

coding.forEach((item, index, arr) => 
    console.log(item, index, arr)
) // has the access of the whole array, indices and values

const myCoding = [
    {
        languageName : "JavaScript",
        extension : "js"
    },
    {
        languageName : "Java",
        extension : "java"
    },
    {
        languageName : "Python",
        extension : "py"
    },
    {
        languageName : "C++",
        extension : "cpp"
    }
] // if data is given in this format

myCoding.forEach((item) => {
    console.log(`Data are as follows : ${item.languageName} -> ${item.extension}`)
}) // item targets each element in the array i.e. objects and accessing values from the object usng dot notation