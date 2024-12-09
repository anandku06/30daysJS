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

// sometimes error is occured, to handle that we call reject method and any error message can be passed to it
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false // true
        if(!error){
            resolve({userName : 'Anand', email : 'xyz@xyz.com'})
        }
        else{
            reject('Error occurred !!') // if error occured then reject method is executed
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.userName // .then() also returns value but, the returned value can only be accessed using .then() method chaining i.e. calling .then() method one after another...
    // the returned value is not accessible using variable
}).then((name) => {
    console.log(name)
}).catch((err) => {
    console.log(err)
}).finally(() => console.log("Finally executed fully")) // Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). Always executed

// can't access here throws error
// const value = promiseFour.then((user) => {
//     return user.userName
// })
// console.log(value); 

// Using Different approach to handle Promises
/* async... await : An async function declared using async keyword
    always returns a Promise.

    await is used to pause the execution of an async function until a Promise is resolved or rejected. Can only be used inside async function
*/

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({userName : 'JavaScript', password : '123'})
        }else{
            reject('Error: JS went wrong')
        }
    }, 1000)
})

// async function consumePromiseFive() {
//     const res = await promiseFive
//     console.log(res)
// }

// here the main problem is that async... await doesn't handle the errors correctly, here the scenario is that the Promise has to be resolved which sometimes not possible so using try-catch with async function

async function consumePromiseFive() {
    try {
        const res = await promiseFive
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()