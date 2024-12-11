/* Everything in JavaScript is an object, its default behaviour is prototypal, performs prototypal inheritance */

function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2

console.log(multiplyBy5(3))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)