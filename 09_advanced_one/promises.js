const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('promine consumed');
},1000)

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2 is complete');
        resolve()
    },1000)
}).then(function(){
    console.log('promine 2 consumed');
},1000)

const promise4Three = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username:"agoodname",email:"good@name.com"})
    },1000)
})
promise4Three.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"naya",password:"12"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log('promise is either solved or rejected');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"aagya",password:"1234"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
     try {
        const response = await promiseFive
        console.log(response);
     } catch (error) {
        console.log(error);
     }
 }
 consumePromiseFive()
 
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/vedanshipareek') // this will run first among all these code lines
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))