/* Everything in JavaScript is an object, its default behaviour is prototypal, performs prototypal inheritance 
*/

function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(3))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

/* The prototype property in JavaScript is a fundamental concept
    primarily associated with functions and objects.
    It is a mechanism that allows JavaScript objects to inherit properties and methods from one another.

    - Available on functions : every function has this property by default;
        This property is an object that can be used to define properties and methods that will be inherited by all instances created by the function when used as a constructor.
    - Instance Inheritance : Objects created using the 'new' keyword inherit properties and methods defined on the constructor function's prototype.
    - Prototype chaining : if a property or method is not found on an object, JavaScript check its prototype, and then its prototype's prototype, and so on until null
*/

function createUser(userName, score){
    // userName = userName // creates an ambiguity problem here
    this.userName = userName // using 'this' keyword to fixing the context of the userName variable
    this.score = score
}