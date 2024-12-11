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

createUser.prototype.increment = function(){
    this.score++;
    // score++; // throws an ambiguity error
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}
// can dynamically add methods to the prototype of a constructor function, and all existing instances of the constructor will have access to the new method

let chai = new createUser('chai', 290)
let tea = new createUser('tea', 29)

chai.printMe()

/* 
Here's what happens behind the scenes when thr new keyword is used :
- A new object is created: The 'new' keyword initiates the creation of a new JavaScript object.

- A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
    This means that it has access to properties and methods defined on the constructor's prototype.

- The constructor is called: The constructor function is called with the specified arguments and 'this' is bound to the newly created object.
    If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

- The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/