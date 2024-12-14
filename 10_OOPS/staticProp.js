/* static keyword in JavaScript: used to define properties or methods that belong to a class itself, rather than to the instances of the class. 
    Static methods and properties are shared across all instances of the class and are called on the class directly, not on individual objects
*/

class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username: ${this.userName}`)
    }

    static createID(){
        return '123'
    }
}

const user1 = new User('Rand')
// console.log(user1.createID()) // trying access to static method then it throws an error

class Teacher extends User {
    constructor(userName,email){
        super(userName)
        this.email = email
    }
}

const iPhone = new Teacher('iphone', 'i@phone.com')
iPhone.logMe()

// console.log(iPhone.createID()) // also throws an error this implies that static methods can't be accessed by the child class as well