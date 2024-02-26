function setUsername(username){
    this.username = username
}
function createUser(username,email,password){
    setUsername.call(this ,username) //call passes our current execution context to someone else. this is used to tell the function to use this instead of its own
    this.email = email,
    this.password = password
}
const one = new createUser("one","one@one.com",111)
console.log(one);