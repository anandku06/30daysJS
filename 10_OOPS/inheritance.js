/* Inheritance in JavaScript using classes allows one class to extend another enabling code reuse and hierarichal relationships between classes */


class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username is ${this.userName}`)
    }
}

// here extend keyword is used to take the properties of parent class(User) and give it to the child class (Teacher)
class Teacher extends User{
    constructor(userName, email, subject){
        super(userName) // super keyword is used to refer the parent class constructor
        // in the constructor, it calls the constructor of the parent class
        // in other methods, it calls the methods of the parent class
        this.email = email
        this.subject = subject
    }

    addCourse(){
        console.log(`${this.userName} teaches ${this.subject}`)
    }
}

const teacher1 = new Teacher('Hitesh', 'hitesh@gmail.com', 'JavaScript')

teacher1.addCourse()