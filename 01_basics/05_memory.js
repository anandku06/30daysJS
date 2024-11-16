/* Two types of memory in JS
> Stack (Primitive)

> Heap (Non-Primitive)
*/ 

let myCasualName = "Rishav" // allocation is done in stack memory
let anotherName = myCasualName // gets a copy of myCasualName variable's value; so if anotherName var is reassigned with some another value, it just overrides the previous value with the new one
anotherName = "Keshav"

console.log(myCasualName);
console.log(anotherName);


let user1 = {
    email : "abc@abc.com",
    upiID : "user@ybl"
} // the variable user1 is made in the stack space bu the value of this variable is allocated in the heap space 
// so user1 var has the reference of that heap space for accessing it's value
// this implies that if any other variable is assigned to the user1, it gets the same heap space reference
// if the new variable change any value, then the original value is changed

let user2 = user1

user2.email = "rishav@google.com" // changing any value here is reflected to the orignal value as well

console.log(user1.email);
console.log(user2.email); // here email is changed permanently in both the instances
