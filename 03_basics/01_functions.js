function myName(){
    console.log("h");
    console.log("i");
}
//myName //reference
//myName()

// function addTwonum(num1,num2){ //parameters
//     console.log(num1+num2);
// }
// addTwonum(3,4) //7 //arguments
// addTwonum(3,"a") //3a
// addTwonum(3,null) //3
// const result = addTwonum(3,4)
// console.log("result :",result) //undefined


function addTwonum(num1,num2){  
   return  num1 + num2
}
const result = addTwonum(3,4)
//console.log("result :",result) //7


function loginUser(username){
    if(!username){
        console.log("enter your username");
        return
    }
    return`${username} just logged in`
}
//console.log(loginUser("vedanshi"));
//console.log(loginUser());


function calculateCartPrice(...number1){ //rest operator
return number1
}
//console.log(calculateCartPrice(200,300,4000,500)); //[ 200, 300, 4000, 500 ]

function calculateCartPrice(val1,val2,...number1){ //rest operator
    return number1
    }
//console.log(calculateCartPrice(200,300,4000,500)); //[ 4000, 500 ] because val1=200 and val2=300 and rest other values got displayed


const user = {
    username:"vedo",
    ability:"manipulation"
}

function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and ability is ${anyObject.ability}`);
}
//handleObject(user)
handleObject({
    username:"pam",
    ability:"strength"
})

const myArr = [200,300,400]
function returnSecondValue(getArr){
return getArr[1]
}
console.log(returnSecondValue(myArr));