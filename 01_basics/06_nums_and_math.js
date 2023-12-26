/*const score = 100
console.log(score)

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 23.3456
console.log(otherNum.toPrecision(2)) //23 i.e round off
console.log(otherNum.toPrecision(4)) //first 4 digits

const hundereds = 1000000
console.log(hundereds.toLocaleString())*/

//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math) //it is itself an object with various functions
// console.log(Math.abs(-4)) //to make the values positive
// console.log(Math.round(4.7)) //5
// console.log(Math.ceil(4.2)) //5
// console.log(Math.floor(4.7)) //4
// console.log(Math.min(4,3,7,2)) //2

console.log(Math.random()) //between 0-1
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min)
