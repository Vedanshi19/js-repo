// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date()

// We can use various methods to convert this date into more readable value.
console.log(myDate);
console.log(myDate.getMonth()+1);
console.log(myDate.getDay());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //important for interview

let myCreatedDate = new Date(2023,0,23) //months start from 0 in js
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //milisecond
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)) //important -> coverting it in seconds 