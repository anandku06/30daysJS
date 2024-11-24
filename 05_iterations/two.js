/* While Loop : another type of loop used in JS ; checks a
    condition according to that program executes in a loop ;
    if true then loop continues else exits the loop ; but unlike
    for loop it doesn't have any initialisation and updation so 
    this to be given by the programmer.
    
Syntax:
while( condition ){ body }
*/

let index = 0
while(index <= 10){
    console.log(`Value of index is ${index}`)
    index += 2
} /* example of a basic while loop ; initialisation and updation 
    not done in the while loop like for loop */

let myArr = ['flash', 'spiderman', 'superman', 'ironman']

let i = 0
while (i < myArr.length) {
    console.log(`Super heros are: ${myArr[i]}`)
    i++
}

/* do..while loop : as the name suggest, first loop then check the
condition ; i.e. if the condition given is false then also the
loop will run for atleast one time */

let score = 1 // initialisation according to which the loop will run

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10); // loop will run for the first time then condition is checked