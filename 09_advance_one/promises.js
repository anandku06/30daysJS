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
const promiseOne = new Promise((res, rej) => {
    // Do an async Task
    // DB calls, cryptography, network

    setTimeout(() => {
        console.log("Task Completed");
    }, 1000)
})

