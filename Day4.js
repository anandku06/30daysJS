// Task 1 : Write a program that prints the numbers from 1 to 10 using a for loop.
let i;
for(i=1;i<=10;i++){
    console.log(i);
}

// Task 2 : Write a program to print the multiplication table of 5 using for loop.
let num = 5;
for(i=1;i<=10;i++){
    console.log(num + " x " + i + " = " + num*i);
}

// Task 3 : Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
i = 1;
while(i<=10){
    sum += i;
    i++;
}
console.log(sum);

// Task 4 : Write a program to print numbers from 10 to 1 using a while loop.
i = 10;
while(i>=1){
    console.log(i);
    i--;
}

// Task 5 : Write a program to print numbers from 1 to 5 using a do while loop.
i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);

// Task 6 : Write a program to calculate the factorial of a number using a do while loop.
let num1 = 5;
let fact = 1;
i = 1;
do{
    fact *= i;
    i++;
}while(i<=num1);
console.log(fact);

// Task 7 : Write a program to print a pattern using nested for loops.
let n = 5;
for(i=1;i<=n;i++){
    let str = "";
    for(let j=1;j<=i;j++){
        str += "*";
    }
    console.log(str);
}

