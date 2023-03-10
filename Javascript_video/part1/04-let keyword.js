// let keyword 
// declare variable with let keyword 

let firstName = "harshit1";
console.log(firstName);

firstName = "Mohit";
console.log(firstName);

// "only remove commet on below line"

// let firstName = "harshit";
// ERROR
// Uncaught SyntaxError: Identifier 'firstName' has already been declared (at 04-let keyword.js:9:5)



let yourNameIS;
console.log(yourNameIs);
// ERROR
// Uncaught ReferenceError: yourNameIs is not defined at 04-let keyword.js:19:13

var yourName;
console.log(yourName);

// block scope vs funtion scope (covered later in this video)