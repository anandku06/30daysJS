/* Comparison Operators : < , > , <= , >= , == , !=
 returns true or false 
 try to compare two same datatypes for expected results */
console.log(2 > 1); // true
console.log(2 < 1); // true
console.log(2 >= 1); // true
console.log(2 >= 1); // true
console.log(2 == 1); // true
console.log(2 != 1); // true

console.log("2" > 1); // converts string "2" to number and then compared so here logs true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true : problem occurs due to tupe conversion
/* The reason is that an equality check == and comparisons > < >= <= work differently
Comparisons converts null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false */

// === : strict check not only check the comparisons but also the datatype as well

console.log(2 === 1); // false
console.log("1" === 1); // false : not the same datatype

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false : problem occurs due to type conversion
