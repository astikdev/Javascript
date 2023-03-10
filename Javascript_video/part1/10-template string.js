// template string 
let age = 27;
let firstName = "astik";
let Lastname = "Patel";

// "my name is harshit and my age is 22 "
// let aboutMe = "my name is " + firstName + " and my age is " + age; 

let aboutMe = `my name is ${firstName} and my age is ${age}`

console.log(aboutMe);

let about$All = `My name is ${firstName} ${Lastname} and my age is ${age}`;
console.log(about$All);

let all_about =`May Name Is` + firstName + Lastname + "and may age is" + age;
console.log(all_about);

let all_$about =`May Name Is` + " " + firstName + " " + Lastname + " " + "and my age        is __" + age;
console.log(all_$about);