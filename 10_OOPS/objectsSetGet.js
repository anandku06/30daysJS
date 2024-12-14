// Using object for getters and setters

const User = {
    _email : 'h@hdfc.com',
    _password : '123sred',
    
    get email(){
        return `email is -> ${this._email}`
    },

    set email(value){
        this._email = value.toLowerCase()
    }
}


const userOne = Object.create(User) // using the factory function Object.create()
// takes the reference of the existing object to make a new object

userOne.email = '1408Keshu@github.COM'
console.log(userOne.email);