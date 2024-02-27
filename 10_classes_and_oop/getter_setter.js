class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        //return this._email //we never do return in setters
        this._email = value
    }

    get password(){
        return `${this._password}anshi`
    }
    
    set password(value){
        this._password = value 
    }
}
const ved = new user("v@vi","rtf")
console.log(ved.password);
console.log(ved.email);