var c = 300 //global scope
if(true){ //block scope
    let a =10
    const b =20
    var c =30
}

//console.log(a);
//console.log(b);
console.log(c);
//a and b wont run because we are telling them to print outside there scope but c will get printed even after being declared outside which is not write