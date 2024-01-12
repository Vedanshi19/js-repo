//immediately invoke function expression
// function tea(){
//     console.log("DB connected");
// }
// tea()

//iife syntax -> ()() 
(function tea(){
    console.log("DB connected");
})();
//iife-> global scope causes pollution, so to remove global it we use iife, prevents naming collisions
(()=>{
    console.log(`DB two connected`)
})()