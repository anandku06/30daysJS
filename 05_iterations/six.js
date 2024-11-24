// forEach method doesn't return any value

const coding = ["js", "cpp", "python", "java", "ruby"];

const values = coding.forEach((item) => {
  // console.log(item)
  return item;
});

console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
