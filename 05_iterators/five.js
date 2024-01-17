//map
const myNums = [1,2,3,4,5]
//const newNums = myNums.map((num)=>num+10)
//console.log(newNums);

//chaining
const newNums = myNums
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>11)
//console.log(newNums);

//reduce
// const myTotal = myNums.reduce(function(acc,curVal){
//     console.log(`acc:${acc} and curVal:${curVal}`);
//     return acc  + curVal
// },3)
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart = [
    {
        cousre:JSON,
        price:990
    },
    {
        cousre:JSON,
        price:999
    },
    {
        cousre:JSON,
        price:99
    },
]
const priceToPay = shoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(priceToPay);