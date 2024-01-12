var c = 300 //global scope
if(true){ //block scope
    let a =10
    const b =20
    var c =30
}

//console.log(a);
//console.log(b);
//console.log(c);
//a and b wont run because we are telling them to print outside there scope but c will get printed even after being declared outside which is not write

function one(){
    username:"Vedanshi"
    function two(){
        website:"Google"
        console.log(username)
    }
    //console.log(website); //will throw an error because child can access parent values but parent cannot access child values outside the scope
    two()
}
one()
