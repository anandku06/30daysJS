/* Object.getOwnPropertyDescriptor() // Gets the own property descriptor of the specified object. 
// An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype. */

console.log(Math.PI)
// Math.PI = 5  // value of Math.PI can't be overwritten
// the writable property of PI is set to false that's why it can't be overwritten

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') // takes two parameters; one is the object and other is the property

console.log(descriptor);
// logs the whole description of the property