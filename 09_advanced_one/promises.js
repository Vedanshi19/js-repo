const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
    },1000)
})
promiseOne.then(function(){
    console.log('promine consumed');
},1000)