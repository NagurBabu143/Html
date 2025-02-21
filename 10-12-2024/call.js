//Hoisting
var a;// Declaration
console.log(a); // Output: undefined
a = 10;
console.log(a); // Output: 10

var b;
console.log(b); // Output: undefined
b = "Hello!";
console.log(b); // Output: Hello!




var myVar;  
console.log(myVar); 
myVar = "Hoisting Example!"; 
console.log(myVar); 


console.log(myFunction()); // Output: "Function is hoisted!"

function myFunction() {
    return "Function is hoisted!";
}





//callback


function function1(callback) {
    console.log("Nagur!");
    callback(); 
}

function1(function() {
    console.log("Shaik!");
});


function morning(callback) {
    console.log("Good morning!");
    callback();
}

morning(function() {
    console.log("Good night!");
});




function haveFun(callback) {
    console.log("Let's have some fun!");
    callback();
}

haveFun(function() {
    console.log("Fun is over!");
});




function Name(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

Name("Nagur", function() {
    console.log("Nice to meet you!");
});




function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

add(5, 3, function(sum) {
    console.log("Sum is: " + sum);
});
