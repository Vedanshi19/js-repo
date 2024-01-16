//for loops
//for off
const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
}


//maps -> object that hold key value pairs , no duplicate value

const map = new Map()
map.set('IN','INDIA')
map.set('IN','INDIA')
map.set('FR','FRANCE')
//console.log(map);

for (const [key,value] of map) {
   // console.log(key,value);
}

//objects
const myObject={
  'game1':'coc',
   'game2':'sk'
}
// for (const [key,value] of myObject) {
//    // console.log(key,value); //error,object not iterable
// }

//for in loop
for (const key in myObject) {
   // console.log(key);
}

const programming = ["js","java","c++"]
for (const key in programming) {
     //console.log(key);
     //console.log(programming[key]);
}

//forin in map
for (const key in map) {
    // console.log(key);
} //no output because map is not iterable


//for each loop
const coding = ["js","java","c++"]
// coding.forEach( function (item) {
//     console.log(item);
// }) 
//or
// coding.forEach((item)=>{
//     console.log(item);
// })

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr);
})

const myCoading =[
    {
        lang:"java",
        filename:"mar java"
    },
    {
        lang:"python",
        filename:"mar java"
    },
    {
        lang:"c++",
        filename:"mar java"
    },
]
myCoading.forEach((item)=>{
    console.log(item.lang);
})