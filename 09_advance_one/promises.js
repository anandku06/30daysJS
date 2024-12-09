/* Promises in JavaScript -> an object represents the eventual
    completion (or failure) of an asynchronous operation and its resulting value.

    Having three states:
    - pending -> initial state, neither fulfilled nor rejected
    - fulfilled -> meaning that the operation was completed 
        successfully
    - rejected -> meaning that the operation failed


    * Before Promise() came into existence, there were libraries
        such that BlueBird and Q to achieve the Asynchronous JS
        functionality
*/

// to make a promise, we make a instance of the Promise Object using new keyword
// takes two params : resolve and reject - the made Promise is resolved or rejected
// the params works as signals for completion or rejection of the promise, so they are called as function in the definition of the promise
const promiseOne = new Promise((res, rej) => {
    // Do an async Task
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log("Task Completed");
        res() // here it is called that signifies the Promise is resolved 
    }, 1000)
})

// res() definition
promiseOne.then(() => {
    console.log("Promise resolved");
}) // Attaches callbacks for the resolution and/or rejection of the Promise

// without making a variable
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("again Task Completed");
        resolve()
    }, 1000)
}).then(() => {
    console.log("again Promise resolved")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userName : 'Anand', email : 'abc@abc.com'}) // we can pass data that can be used when Promise is resolved
    },1000)
})

// if in the Promise definition, any params is given in the resolve() calling then it's always passed here in then(), use any var to access that data
promiseThree.then((user) => {
    console.log(user)
})