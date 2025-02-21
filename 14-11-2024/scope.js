//Global Scope

console.log("\n Global Scope:::");



let global = "global variable";

function Global() {
    console.log("inside global:",global); 
}

Global(); 
console.log("outside global:",global); 


//count 

let count = 0; 

function Count() {
    count += 1; 
    console.log("Inside :", count); 
}

Count(); 
console.log("Outside :", count); 


//local scope

let local = "global Value";

function Alocal() {
    let local = "Local Value"; 
    console.log("inside local::",local); 
}

Alocal();
console.log("outside global::",local); 





function local1() {
    let message = "Nagur!";  
    console.log("local message:::",message);    
}

local1();
//console.log(message);      




function outer() {
    let outer = "I'm outside!";

    function inner() {
        let inner = "I'm inside!";  
        console.log("Outer function::",outer);          
        console.log("Inner function::",inner);          
    }

    inner();
    console.log("Inner function::",inner);              
}

outer();


//Block Scope


console.log("\n Block Scope::::::::::");


if (true) {
    let message = " inside the if block!";
    console.log("\n In side if block ::",message);  
}
let message="nagur";
console.log("Out side if block ::",message); 



let count1 = 0;
while (count1 < 3) {
    let B = "count1 is: " + count1;
    console.log("inside while loop block scope::",B);  
    count1++;
}


if (true) {
    var A = "babu";
    console.log("inside block scope::",A); 
}

console.log("outside block scope::",A);  

