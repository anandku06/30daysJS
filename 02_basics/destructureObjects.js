// In destructuring of objects order doesn't matter but the name does

const student = {
    name : "Anand",
    position : "first",
    age : 20
}

const {name, position, age} = student // here by assigning the properties as the variables under curly braces and assigning to the object name, the object is destructured

// var name must be the object properties

const {fName} = student

console.log(fName) // bcz this var is not in the object so its undefined
console.log(age) // age is the property in the object so it has the value