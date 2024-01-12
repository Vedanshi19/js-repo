const user = {
    username: "vedanshi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//this talks about current context
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); //{}
//global object in browser is window object



// function chai(){
//     let username = "ved"
//     console.log(this.username);
// }
//  chai() //undefined



// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai() //{}




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//basic arrow function
//const addTwo = (num1, num2) =>  num1 + num2 //implicit return
// const addTwo = (num1, num2) => ( num1 + num2 )
const addTwo = (num1, num2) => ({username: "mitesh"})
console.log(addTwo(3, 4))