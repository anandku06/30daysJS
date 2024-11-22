/*
this keyword in JS is used to refer the current scope context in which it is used in ; especially in classes to refer the variables or methods of it's own class, this is used 
 */

const user = {
    username : "Hitesh",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website!!`) // here also this refers to the user's object reference
        console.log(this); // logs the object it signifies to
    }
}

user.welcomeMessage()
user.username = "Sam" // changed the value of username in the user object
user.welcomeMessage() // welcome mssg also changed bcz this signifies the values in the current scope it is being used so if the username is changed it'll take the updated value rather than the old value
console.log(this); // logs an empty object bcz here this refers to the reference of the current scope and here not any scope is defined in node environment
// but this changes in browser's environment : this refers to the window object in browser's environment

