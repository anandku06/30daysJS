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