console.log(Math.PI); //3.141592653589793
Math.PI = 5 //this cant be over written
console.log(Math.PI); //3.141592653589793


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);
/*{
    value: 3.141592653589793,
    writable: false, this means it can not be written
    enumerable: false,
    configurable: false
  }
*/

const tea = {
  name:"masala tea",
  price:230,
  isAvailable:true,
  OrderTea : function(){
    console.log("no tea today");
  }
}
//console.log(Object.getOwnPropertyDescriptor(tea)); //give error beacuse its an object , specify property
console.log(Object.getOwnPropertyDescriptor(tea,"name"));  

// Object.defineProperty(tea, 'name' , {
//     writable:false
// })
// console.log(Object.getOwnPropertyDescriptor(tea,"name"));

for (const [key,value] of Object.entries(tea)) {
    if (typeof value !== 'function') {
        console.log(`${key}  ${value}`);
    }  
}