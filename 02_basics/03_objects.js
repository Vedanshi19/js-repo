//singleton //Oject.create

//object literals
const mySymb = Symbol("key1")

const JSuser ={
    name:"vedanshi",
    "full-name":"vedanshi pareek",
    [mySymb]:"mykey1", //imp to declare it in square brackets because it is a symbol
    age:21,
    location:"banglore",
    isLoggedIn:false,
    lastLoggedIn:["saturday","sunday"]
}
console.log(JSuser.name) //method 1
console.log(JSuser["full-name"]) //method 2
//method 2 is used when key is given in string format so use square notation method to acces it
console.log(JSuser[mySymb]) //mykey1

// Object.freeze(JSuser) // will freeze the values
// JSuser.location = "udaipur"
// console.log(JSuser)

JSuser.greetings = function(){
    console.log("Hello js user")
}
JSuser.greetings2 = function(){
    console.log(`Hello js user, ${this.name}`) //refrensing the same object
}
console.log(JSuser.greetings())
console.log(JSuser.greetings2())