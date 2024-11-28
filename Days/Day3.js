// Task 1 : Write a program to check if a number is positive, negative or zero, and log the result to the console.
let num = -57;
if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}

// Task 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 17;
if (age >= 18) {
  console.log("The person is eligible to vote");
} else {
  console.log("The person is not eligible to vote");
}

// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2) {
  if (num1 > num3) {
    console.log("The largest number is " + num1);
  } else {
    console.log("The largest number is " + num3);
  }
} else {
  if (num2 > num3) {
    console.log("The largest number is " + num2);
  } else {
    console.log("The largest number is " + num3);
  }
}

// Task 4 : Write a program that uses a switch case to determine the day of the week based on the number (1-7) and log the day name to the console.
let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

// Task 5 : Write a program that uses a switch case to assign a grade (A, B, C, D, E, F) based on a score and log the grade to the console.
let score = 85;

let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  case score >= 50:
    grade = "E";
    break;
  default:
    grade = "F";
}

console.log("The grade is " + grade);

// Task 6 : Write a program that uses the terneary operator to check if a number is even or odd and log the result to the console.
let number = 10;
let result = number % 2 === 0 ? "even" : "odd";
console.log("The number is " + result);

// Task 7 : Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not by 100 unless divisible by 400) and log the result to the console.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
