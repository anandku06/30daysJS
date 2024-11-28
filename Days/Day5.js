// Task 1 : Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEvenOrOdd(2); 

// Task 2 : Write a function to calculate the square of a number and return the result.

function square(num) {
    return num * num;
}

console.log(square(3));

// Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console.

function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(maxOfTwoNumbers(3, 5));

// Task 4 : Write a function expression to concatenate two strings and return the result.

function concatenateStrings(str1, str2) {
    return str1 + str2;
}

console.log(concatenateStrings("Hello", "World"));

// Task 5 : Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 5));

// Task 6 : Write an arrow function to check if a string contains a specific character and return a boolean.

const checkCharacter = (str, char) => str.includes(char);

console.log(checkCharacter("Hello", "e"));

// Task 7 : Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(num1, num2 = 1) {
    return num1 * num2;
}

console.log(product(3, 5));

// Task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greet(name, age = 18) {
    return ("Hello " + name + ", you are " + age + " years old.");
}

console.log(greet("John", 25));

// Task 9 : Write a higher-order function that takes a function and a number , and calls the function that many times.

function repeat(func, num) {
    for (let i = 0; i < num; i++) {
        func();
    }
}

function greet() {
    console.log("Hello");
}

repeat(greet, 5);

// Task 10 : Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

function square(num) {
    return num * num;
}

function double(num) {
    return num * 2;
}

console.log(applyFunctions(square, double, 3));
