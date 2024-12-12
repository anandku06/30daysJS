/* 
'this' keyword represents the context in which a function is executed
    its value depends on how the function is called, not where it's defined

'call' method allows you to explicitly define the value of this when calling a function
    Syntax : functionName.call(thisArg, arg1, arg2, ...)
        thisArg -> the value you want 'this' to have inside the function
        arg1, arg2, ... -> args passed to the function
*/

function setUser(userName){
    // complex DB calls
    this.userName = userName
}

function createUser(userName, email, password){
    setUser.call(this, userName) // to set the userName we use call() method, and gave the this context and the userName as args
    // setUser(userName) // the function is called but the username is not set because here, the 'this' keyword gets the global context which is null
    this.email = email
    this.password = password
}

const keshav = new createUser('keshav', 'keshu1408@gmail.com', 'ghee')

console.log(keshav)

/*
 Without call(), the value of 'this' depends on how the function is called
 
 You can control the value of 'this' regardless of how or where the function is called
*/