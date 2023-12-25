//  Primitive -> they are call by value that is copy is provided
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// stack memory used
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false,that means symbol is used for unique values

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// Array, Objects, Functions
//heap memory used
const heros = ["shaktiman", "naagraj", "doga"]; //array

let myObj = {
    name: "hitesh",
    age: 22,
} //object

const myFunction = function(){
    console.log("Hello world");
} //function

console.log(typeof anotherId); //symbol
//typeof null is object


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3