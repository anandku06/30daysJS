// forEach method doesn't return any value

const coding = ["js", "cpp", "python", "java", "ruby"];

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});

console.log(values); // undefined

/* filter method : function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. Returns the elements of an array that meet the condition specified in a callback function. */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((nums) => nums > 4); // filters the elements that are less than 4 and returns the elements greater than 4

console.log(newNums);

// alternative without using filter method
const oldNums = [];

myNums.forEach((num) => {
  if (num > 4) oldNums.push(num);
});
console.log(oldNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History") 
userBooks = books.filter((book) => book.publish >= 2000)
userBooks = books.filter((book) => book.publish >= 1990 && book.genre === "History")

console.log(userBooks)