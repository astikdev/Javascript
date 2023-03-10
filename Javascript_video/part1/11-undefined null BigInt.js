// undefined 
// null
// BigInt




// undefined +++++++++++++++++++++++++++++++++++++
// let firstName;
// console.log(typeof firstName);
// console.log(firstName);
// firstName = "Harshit";
// console.log(typeof firstName, firstName);


// console.log("var related details");

// var lastName;
// console.log(typeof lastName);
// console.log(lastName);
// lastName = 22;
// console.log(typeof lastName, lastName);



// null  +++++++++++++++++++++++++++++++++++++
// The null value represents the intentional absence of any object value.



// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);

//very important
// console.log(typeof null);     // typepf null = object (this is bug/error of javascript.) 






// BigInt   ++++++++++++++++++++++++++++++++++++
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);   // ( 2^53 - 1 )   //BigInt is an inbuilt object in JavaScript that provides a way to represent whole numbers larger than 2^53-1 which is the largest number that can represent with the Number primitive.
console.log(myNumber+ sameMyNumber);+


console.log(1n + 2n); // 3


console.log(8n / 3n); // 3.5   // the division 5/2 returns the result rounded towards zero, without the decimal part. All operations on bigints return bigints.
console.log(8 / 3);


// // Error

console.log(1n + 2);  // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions




