/* When classes were not in use then we use functional method to use setter and getter methods in JS */


function User(email, password){
    this._password = password
    this._email = email

    Object.defineProperty(this, 'email', {
        set : function(value){
            this._email = value.toLowerCase()
        },
        get : function(){
            return `email is -> ${this._email}`
        }
    })

    Object.defineProperty(this, 'password', {
        get : function(){
            return `!?${this._password}abcdg`
        },
        set : function(value){
            this._password = value
        }
    })
}

const userOne = new User('ayyush08@github.com', 'august2908')

console.log(userOne.password)