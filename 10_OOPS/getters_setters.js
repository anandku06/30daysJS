class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
}

const userOne = new User('anand@chatgpt.com', 1234)
console.log(userOne.password)