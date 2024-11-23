/* Switch-case statement : checks the value and according to that
value the program is executed ; takes integer and characters as 
values that are checked for execution

syntax:
switch(key){ //key is the variable from which values to be checked
    case value: // contains the possible values for the key and according to which conditon to be executed
        body
        break; // essential to avoid break-through condition
    default: // this executes if none of the above case is passed
        body
        break;
}

*/

const month = 3

switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("Feb")
        break;
    case 3:
        console.log("Mar")
        break;
    case 4:
        console.log("Apr")
        break;

    default:
        console.log("out of range")
        break;
}
/* Defautl behaviour in switch-case is that whenever a case is
matched then after that every other case is executed without
checking, to avoid this use break at the end of each case; 
this condition is also known as fall-through condition */