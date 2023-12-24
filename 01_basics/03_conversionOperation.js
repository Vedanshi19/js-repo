// let score = true

// console.log(typeof score)
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber) //special type 

// /* "33" => 33
//    "33abc" => NaN
//    true=> 1 , false =>0
//    */

// let isLoggedIn = 1
// let boolIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolIsLoggedIn)


// //"" => false
// //"ved" => true

let str1 = "helo "
let str2 = "ji"
let str3 = str1+str2
console.log(str3)
console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
// Expected output: "a:4, b:4"


//******************************************Comparision********************************* */
console.log(null>0) //false
console.log(null ==0) //false
console.log(null>=0) //true
/*the reason is equality check(== )and comparision(>=) works differently.
Comparision convert null to no treating it as 0 */

console.log(undefined>0) //false
console.log(undefined ==0) //false
console.log(undefined>=0) //false

// === strict checks values as well as datatypes
console.log("2" == 2);
console.log("2" === 2);