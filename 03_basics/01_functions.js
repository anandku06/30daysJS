/* Functions : code that can be reused whenever needed to avoid repetitive coding and making the codebase more of a mess;
envelopes a set of code that can be used if needed without writing the whole logic 
*/

/* basic syntax of a function : 
function(keyword) functionName()
{
    // body
} 
    also called function definition
*/

function sayMyName() {
  console.log("Anand");
} // function definition

console.log(sayMyName); // reference of function ; logging it will return function object with the name of the function
sayMyName(); // function calling

function addTwoNums(num1, num2) {
  console.log(num1 + num2);
} // this has a flaw as it will take any type of value whether it is string, null or undefined which would create problems further
// function with parameters : if function requires some values we pass them as parameters in the parenthesis of the function

// addTwoNums() // outputs NaN as we haven't given any arguments in the parenthesis during calling
addTwoNums(3, 5);
/* When values passed in function calling then they are arguments and when values are passed during declaration of function then they are parameters */

function addition(num1, num2)
{
    // let result = num1 + num2
    // console.log("BUND"); // now executed as written before return
    return num1 + num2 // this can also be done to save some variable space
    // console.log("BUND"); // unreachable code i.e. not executed
}
/* function with parameter and return : here the result is returned after the operation ; return keyword signifies the end of the function, so after return if there is any code it won't be executed */

console.log(addition(23, 56));

function loginUserMessage(userName = "user") // default parameter to ensure if user didn't give any value then function doesn't return undefined
{
    if(!userName)
    {
        console.log("Please enter any value");
        return
    } // handled an edgecase that if userName is undefined(fales) then return directly with a error message
    return `${userName} just logged in`
}

// loginUserMessage("Anand") // doesn't print anything as the values are returned not logged
console.log(loginUserMessage()); // if value is not passed then returns undefined ; to avoid this handle this case using if statements or use default parameters
console.log(loginUserMessage("Anand"));

// when number of arguments are not known then use Rest Operator(...) to store multiple values in a single entity
function calculateCartPrices(...prices){
    return prices
}

console.log(calculateCartPrices(12,4,57,89)); // returns an array of the arguments

const user = {
    userName : "Anand",
    cost : 199
}

// passing object as a parameter in function
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.cost}`);
}

handleObject(user) // here problem is when the passed argument us not a object; to avoid this we pass whole object as argument
handleObject({
    userName : "hitesh",
    cost : 299
})

// passing arrays in function

const newArray = [1,2,3,4,54]

function returnSecondValue(array)
{
    return array[1]
}

console.log(returnSecondValue(newArray))

console.log(returnSecondValue([1,2,34,5]))