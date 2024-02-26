// let myName = "bittu  "
// console.log(myName.length);
// console.log(myName.trueLength);

let myHero = ["gwen","wonderWomen"]
let heroPower = {
    gwen:"disappear",
    wonderWomen:"strong",
    getPower: function(){
        console.log(`the power is ${this.wonderWomen}`);
    }
}

Object.prototype.Ved = function(){
    console.log(`Ved is present in all object`);
}
Array.prototype.heyVed = function(){
    console.log(`HeyVed is present in all object`);
}
heroPower.Ved()
myHero.Ved()
//heroPower.heyVed()
myHero.heyVed()

//inheritence

const user = {
    name:"username",
    email:"your@email.com"
}

const Teacher = {
    makeVideo:true
}
const teachingSupport = {
    isAvailable:false
}
const Tsuppot = {
    makeAssignment:"javascript",
    fulltime:true,
    __proto__:teachingSupport
}

Teacher.__proto__=user

//moder syntax
Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUsername = "vedanshi pareek"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"tea  ".trueLength()
