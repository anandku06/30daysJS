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

