/* After ES6 version of JavaScript, we got classes in JS ;
    Classes are the way to create objects and manage object-oriented programming(OOP).

    Syntax:
    class className {
        // constructor method for initialising properties
        constructor(property1, property2){ 
            this.property1 = property1;
            this.property2 = property2;
        }
    }
*/

class User {
    constructor(userName, email, password){ // whenever the instance of this object is made then the constructor is called
        this.userName = userName
        this.email = email
        this.password = password
    }

    // here when defining the methods, we don't use the function keyword, only the method name with parenthesis and curly braces
    encryptPassword(){
        return `abcd${this.password}abc`
    }
}

const chai = new User('chai', 'chai@gmail.com', 'chai123')

console.log(chai.encryptPassword())