/* For...in loop : a special type of for loop used to iterate over 
    objects in JS 
    
    Syntax : 
    for (const key in object){ // iterator here targets all the keys in the object
        body
    }
*/

const myObj = {
    js : "JavaScript",
    cpp : "C++",
    rb : "Ruby",
    swift : "by Apple"
}

for (const key in myObj) {
    console.log(`Languages are ${key} -> ${myObj[key]}`)
} // to access the object's value, use key as index of the object like array indices

const myArr = ['js', 'rb', 'python', 'java', 'cpp']

for (const key in myArr) {
    console.log(key) // outputs the indices
    console.log(myArr[key]) // to access values : use it as accessing elements from an array
} // in case of arrays : keys are the indices and values are the values on that indices

// Maps are not iterable through for...in loop ; doesn't throw error but also doesn't give any output as well