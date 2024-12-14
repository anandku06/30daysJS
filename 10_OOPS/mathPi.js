/* Object.getOwnPropertyDescriptor() // Gets the own property descriptor of the specified object. 
// An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype. */

console.log(Math.PI)
// Math.PI = 5  // value of Math.PI can't be overwritten
// the writable property of PI is set to false that's why it can't be overwritten

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') // takes two parameters; one is the object and other is the property

console.log(descriptor);
// logs the whole description of the property

// const chai = Object.create() // creates a new object, using an existing object as the prototype of the newly created object

const chai = {
    name : 'gingerChai',
    price : 250,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

Object.defineProperty(chai, 'name', {
    writable : false, // now the name property of the object can't be overwritten
    enumerable : false // if false then you can't iterate through this property
}) // Adds a property to an object, or modifies attributes of an existing property.

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (const key in chai) {
    if (Object.prototype.hasOwnProperty.call(chai, key)) {
        const element = chai[key];
        console.log(element)
    }
}