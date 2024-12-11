let myName = 'Anand          '

console.log(myName.length)
// console.log(myName.trueLength) // aim is to make a function for every string to ensure the true length of it without considering any whitespaces

let myHeros = ['thor', 'spiderman']

let myPowers = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.trueLength = function(){
    return this.trim().length
} // rather than giving the property to the string, gave it to the highest hierarchy i.e. Object; now this property is applied to all the Objects

// String.prototype.trueLength = function(){
//     return this.trim().length
// } // this can also be done here but it'll give this property to the String only, here the prototypical inheritance travels from Object to String, not String to Object

console.log(myName.trueLength())