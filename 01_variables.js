/*
let and const keywords are used to declare variables in Javascript
Prefer not to use var keyword for variable making bcz of the issue in the functional scope amd block scope
 */


const accountId = 874692385 // const keyword used mainly when value of the variable must not be changed

let accountEmail = "abc@abc.com" // let keyword mainly used for common variables ; can be changed and scope-limited

let accountName = "Anand"

accountCity = "Jaipur" // This is alos allowed in JS without using let and const keyword we can assign variables but it's a bad practise

let accountState;

console.log(accountState); // undefined as not assigned any value yet; unassigned variables values are undefined

console.table([accountEmail, accountId, accountName]);// displays multiple datas in a tabualr form; takes data as an array
