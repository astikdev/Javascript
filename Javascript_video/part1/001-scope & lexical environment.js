

document.write("hello world");



var abc=7;

function getName() {
    console.log("Namste JS!");
}

let x;

getName();
console.log(getName);
console.log(x);

var y;
console.log(y);





// // // // javascript lexical environment 


function a()
{
   console.log('hello Arti!'); 
}



let firstName= "Astik";
let lastName = "Patel";

function myApp() {

    if(true){
        // console.log("hello World!")
        {
            // let firstName= "Astik";
            // console.log(firstName);
        }
        function mul (num1,num2) {
            console.log (num1**num2, "ASD" , lastName) // javascript lexical environment 
        }
        console.log(firstName);
        mul(4,2)
    }

    a();    // javascript lexical environment
    mul(6,3);   // javascript lexical environment
}

myApp()
