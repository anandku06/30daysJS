/* For Loop : used to execute some program a certain number of 
times ; used to perform repetitive tasks in the code ; 

Syntax:
for(initialisation; condition; updation){
    body
}

> initialisation : tracks the number of times the program will 
    execute, starts from 0 upto n(excluded) => specified in condition
> condition : after reaching a certain condition, loop stops
> updation : updates the value of initialised variable to track 
    the number of iterations done and remaining
*/

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
}
/* here 'i' is initialised to track the iterations ; 
'i < 10' condition is to be checked after every iteration
to ensure the iteration is executed for a specified number
of time;
'i++' after each iteration i is increased by one to signify
the completion of each iteration */

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the beast number");
    }
    console.log(element)
}

// Nested Loops

for (let i = 0; i < 5; i++) {
    console.log(`Outer Loop ${i}`)
    for(let j = 0; j < 5; j++){
        console.log(`Outer Loop ${i} and Inner Loop ${j}`)
    }
}
/* flow of program is like for first value of i = 0, the inner loop will
    run for about 0 to 5 times(j = 0 - 4), and as the increment of
    i is done inner loop is executed 5 times each */

// tables from 1 to 10

for(let i = 1; i <= 10; i++){
    console.log(`Outer loop ${i}`)
    for(let j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

let myArr = ['f', 'g', 'b', 'i']
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
} /* here in condition not used '=' sign as the indexing in arrays 
    are 0-based so last element always be at [size - 1]th index */

/* break and continue */

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        break;
    } // when index equals to 5 then logs the mssg given and break the loop
    console.log(`Value of i is ${index}`)
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5")
        continue;
    } // when index equals to 5 then logs the mssg given and skip that particular iteration and continues the loop
    console.log(`Value of i is ${index}`)
}