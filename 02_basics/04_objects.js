//const tinderUser = new Object() //singleton
const tinderUser = {}
tinderUser.id = "123"
tinderUser.name = "Sandy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)
// console.log(Object.keys(tinderUser)); //responce in array format
// console.log(Object.values(tinderUser)); //responce in array format
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const regularUser = {
    email:"samyy@google.com",
    fullname:{
        userfullname:{
            firstname:"Sandy",
            lastname:"aiyyar"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const object1 ={1:"a",2:"b"}
const object2 ={3:"a",4:"b"}
//const object3 = {object1,object2} //problem -> object inside object
//const object3 = Object.assign(/*target*/{},/*source*/object1,object2)
const object3 = {...object1,...object2} //spread operator
//console.log(object3);


const users = [
    {
        id:1,
        email:"12345"
    },
    {
        id:1,
        email:"12345"
    },
    {
        id:1,
        email:"12345"
    }
]
users[1].email

//************************************ de-structure and JSON API intro ****************************************** 
const course = {
    courseName:"Javascript",
    price:999
}
// const {courseName} = course
// console.log(courseName); //Javascript
const {courseName:cn} = course //destructuring
console.log(cn); //Javascript

// JSON format -> inside curly bracets everything written in strings or in array form
// {
//     "courseName":"Javascript",
//    " price":999
// }

