/* Inheritance in JavaScript using classes allows one class to extend another enabling code reuse and hierarichal relationships between classes */


class User{
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`Username is ${this.userName}`)
    }
}

class Teacher extends User{

}