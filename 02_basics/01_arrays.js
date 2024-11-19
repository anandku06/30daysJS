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

console.log(myArr.includes(8)) // Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(myArr.indexOf(2)) // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string. default is comma seperator

console.log(newArr);
console.log(typeof(newArr));
console.log(myArr);

const my1 = myArr.slice(1, 3) // Returns a copy of a section of an array. For both start and end(exclusive), a negative index can be used to indicate an offset from the end of the array

console.log(my1);
console.log('A', myArr);

const my2 = myArr.splice(1, 3) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

console.log(my2);
console.log('B', myArr);

/* Main difference in slice and splice are -
In slice the end index is excluded and orginal array is not affected
But in splice, the end index is included and the range is also deleted from the original array */
