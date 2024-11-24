/* Reduce method : A function that accepts up to four arguments. 
    The reduce method calls the callbackfn function one time for 
    each element in the array. 
    Calls the specified callback function for all the elements in 
    an array. The return value of the callback function is the 
    accumulated result, and is provided as an argument in the 
    next call to the callback function. 
*/

const myNums = [1, 2, 3];

let numbers = myNums.reduce((acc, currVal) => {
  console.log(`accumulator: ${acc} and Current value: ${currVal}`);
  return acc + currVal;
}, 0); // second arg is the initial value for acc variable; returned value of the method is then updated to the acc var after each iteration

console.log(numbers);

const shopCart = [
  {
    itemName: "js course",
    price: 5999,
  },
  {
    itemName: "py course",
    price: 4999,
  },
  {
    itemName: "java course",
    price: 6999,
  },
];

let totalPrice = shopCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);
