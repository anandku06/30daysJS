// Object Literal

const user = {
    userName : 'Hitesh',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function (){
        console.log("Got user details from database")
        console.log(`Username ${this.userName} is registered`) // give the context of userName element using this keyword; this ensures the context or scope of the execution
    }
}

console.log(user.userName)
console.log(this) // in node environment, this keyword refers to a empty object as there isn't a thing to refer globally
// but in browser's console, this keyword returns a window object
user.getUserDetails()

// Constructor function
/* new keyword is a constructor function here, used to create multiple instances of a class/object */
const promiseOne = new Promise()
const date = new Date()

function User(userName, isLoggedIn, loginCount){
    // userName = userName // this creates a ambiguity problem
    this.userName = userName // 'this' keyword solves the problem by setting the context of the variable 'userName'
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this // returns the current context of the object
}