/* Arrays : denoted by sqaure brackets; collection of different elements in a single variable; an object; resizable;
not associative arrays i.e. elements can't be accessed by using any arbitrary string but using non-negative integers called indexes; zero-indexed; array-copy operations create shallow copies */

// Shallow copies are the copies that share same reference point i.e. if any change is done in the copy of the array it'll affect the original array as well

// Deep Copies are the copies that doesn't share same reference point i.e. any change in the copy of the array does't affect the original array.

const myArr = [1, 0, 8, 5, 7] // declaring an array

const mrArr2 = new Array(1, 4, 5, 6, 7, 78) // declaring an array using Array class and new keyword

// Array methods

myArr.push(3) // used to push any specified element in the array
// pushes the element at the end of the array

myArr.pop() // Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myArr.unshift(8) // insert the element at the start of the array
myArr.shift() // Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArr);