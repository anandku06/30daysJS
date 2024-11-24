// forEach method doesn't return any value

const coding = ["js", "cpp", "python", "java", "ruby"];

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});

console.log(values); // undefined

/* filter method : function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. Returns the elements of an array that meet the condition specified in a callback function. */


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (nums) => nums > 4) // filters the elements that are less than 4 and returns the elements greater than 4

console.log(newNums)

// alternative without using filter method
const oldNums = []

myNums.forEach((num) => {
    if(num > 4)
        oldNums.push(num);
})
console.log(oldNums)