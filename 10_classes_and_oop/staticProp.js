class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username:${this.username}`);
    }
    static createId(){
        return `123`
    }
}

class teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email

    }
}

// const iphone = new teacher("iphone","i@phone")
// iphone.logMe()
//console.log(iphone.createId());
user.createId