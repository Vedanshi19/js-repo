const name = "vedanshi"
const repoCount = 5
// console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //using backtics

const gameName = new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //it didnot change the original string
console.log(gameName.charAt(2)); //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4) //start and end number(last value dont get included) //cannot give negative values in substring
console.log(newString); //hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   vedanshi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-')); //seperator