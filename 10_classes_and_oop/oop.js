//object literal
const user = {
    username:"ved",
    signedIn:true,
    getUserDetails: function(){
        console.log(`the username is : ${this.username}`); //this means current context
       // console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails); // dont just give reference
console.log(user.getUserDetails()); // do this instead

//constructor function
function User(username,isLoggedIn){
    /*our variable */ this.username = username /*value*/
    this.isLoggedIn = isLoggedIn

    return this
}
// const Userone = User("ved",true)
// const Usertwo = User("dev",true) //it will overright the values.
//that is why we use the new keyword which is a constructor function that gives you a new copy
const Userone = new User("ved",true)
const Usertwo = new User("dev",true)
console.log(Userone);

//when we use the new keyword 1. An empty object know as instance is created.
//2. Constructor function is called beacuse of this.
//3. All the arguments we wrote gets injected in it.
//4. we get them in a function 