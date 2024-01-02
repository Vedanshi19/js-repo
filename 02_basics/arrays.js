const myArr = [0,1,2,3,4,5]
//or
const myArr2 = new Array(2,3,4,5)
//js arrays are resizable, contains mix of diff datatypes, creates shallow copies(same reference point)

// myArr.push(6)
// myArr2.pop()
// console.log(myArr)
// console.log(myArr2)

// myArr.unshift(4) //inserts at start
// console.log(myArr)
// myArr2.shift()
// console.log(myArr2)

// console.log(myArr2.includes(9))
// console.log(myArr2.indexOf(9))

// const newArr = myArr.join() //it binds and converts the type of array to strings
// console.log(myArr)
// console.log(newArr)

//slice,splice
console.log("A",myArr)
const s1=myArr.slice(1,3)
console.log(s1)
console.log("B",myArr)

const s2=myArr.splice(1,3) // the selected portion gets removed from array
console.log(s1)
console.log("C",myArr)

