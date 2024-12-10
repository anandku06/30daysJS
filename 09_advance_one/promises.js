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

/* fetch() : returns a Promise; used to fetch any info from
    provided URL; creates a Priority Queue or MicroTask Queue
    a global method starts the process of fetching the resource from the network, returning a promise which is fulfilled once the response in available

    can also be used to send data as well; after URL put comma and you can send your optional data
*/ 
async function getAllUsers() {
    try {
        const res = await fetch('https://api.github.com/users/anandku06')
        const data = await res.json() // returns Promise, so use await
        // .json() method also returns a Promise; reads the request body and returns it as a Promise that resolves with the result of parsing the body text as JSON.
        console.log(data)
    } catch (error) {
        console.log(`E: ${error}`)
    }
}

// using fetch method directly as it returns a Promise so, trying the Promise method

fetch('https://api.github.com/users/anandku06').then((res) => {
    return res.json()
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

// execution of fetch() is taken as high priority by JS so it'll executed before any of the code

/* NOTE: A fetch() promise only rejects when a network error is encountered (which is usually when there's a permission issue or similar). A fetch() promise doesn't reject on HTTP errors(404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties. */