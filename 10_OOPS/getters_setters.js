/* getter and setter in JS: methods that allow you to control the access to an object's properties.
    They provide a way to encapsulate the logic for reading and writing property values, often adding validation, computation or other logic.
    define getters and setters using the 'get' and 'set' keywords

    getter and setter should be defined together, if defined only one then throws an error
*/

class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}_abcsdf12`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

// use '_propertyName' for the underlying value of a property when using getters and setters
// if not then a error is thrown i.e. Maximum callStack exceeded
const userOne = new User('anand@chatgpt.com', 'agstdf')
userOne.password = 'asdgauydgyuad'
console.log(userOne.password)