"use strict"
// booleans & comparison operator 

// booleans 
// true, false 

let num1 = 7;
let num2 = "7";

console.log(num1<num2);

// == vs === 
console.log(num1 == num2, 'num1 and num2 only value check');
console.log(num1 === num2, 'num1 and num2 1. data type check <br> then 2. value check');

// != vs !==
console.log('!= & !== cmparision')
console.log(num1 != num2, 'only value check');
console.log(num1 !== num2, 'first data type check then value check');



// booleans 
// true, false 

function boolExample(flag){
    if(flag){
        console.log('inside if ::: "True"');
    }else{
        console.log('inside elase ::: "False"');
    }    
}


let all$x = true;
let all$y = false;

boolExample(all$x);
//output: Hello world

boolExample(all$y);
//output: Hey there!



// // // String concatenation with binary +

// let $ = "my" + "string";
// console.log($);

// let $1 = "my" + ' ' + "string";
// console.log($1);

// let $2 = "my" + " " + "string";
// console.log($2);

// let $3 = "my " + "string";
// console.log($3);

// let $4 = "my" + " string";
// console.log($4);


// !!!!! most important
console.log(2 + 2 + '1'); // "41" and not "221"  
// // // Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
console.log('1' + 2 + 2);  // "122" and not "14"
// // // Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

console.log(1 + "2");
console.log("1" + 2);


// // // The binary + is the only operator that supports strings in such a way.
// // // Other arithmetic operators work only with numbers and always convert their operands to numbers. 



console.log("6" - 3);  // ans 3 is three
console.log(typeof ("6" - 3));  // ans 3 is three
console.log("6" / "3");  // ans 3 is three
console.log(typeof ("6" / "3"));  // ans 3 is three



// // // Numeric conversion, unary + :: https://javascript.info/operators#numeric-conversion-unary

// // No effect on numbers
let x = "1";
console.log(typeof x);
x = +x;                     // converted into number
console.log( x );           // 1
console.log(typeof x);     


let y = -2;
console.log(y)
console.log( +y );          // -2
y = +y;
console.log( y );           // -2 

// // Converts non-numbers
console.log( +true );       // 1
console.log( +"" );         // 0
console.log( '""' + " " + "Empty string" );         

console.log( +false );      // 0
console.log( false );      

console.log( +null );       // 0
console.log( null );       

console.log( +undefined );  // 0
console.log( undefined );  

console.log( +NaN );        // 0 
console.log(typeof +"NaN" );         



let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log( apples + oranges ); // 23
console.log( +apples + +oranges ); // 5

// the longer variant
console.log( Number(apples) + Number(oranges) ); // 5