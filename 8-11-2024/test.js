//if...else
console.log("\n If ...... else::");
let age = 16;

if (age >= 16) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

let isMember = false;

if (isMember) {
  console.log("You are eligible for a discount!");
} else {
  console.log("You are not eligible for a discount.");
}

let num = 10;

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//for Loop

// for (initialization; condition; increment) {

// }

console.log("\n For......loop::");

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}


let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}



console.log("Sum:", sum);

for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}


//for..of
const array = [10, 20, 30, 40, 50];

for (const value of array) {
  console.log("Value:", value);
}



//for..in

const person = { name: "Alice", age: 30, city: "New York" };

for (const key in person) {
  console.log(key + ":", person[key]);
}

//while Loop

// while (condition) {

// }

console.log("\n while.....loop::");

let i = 1;

while (i <= 5) {
  console.log("Count:", i);
  i++;
}


let countdown = 5;

while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

//do...while

console.log("\n Do....while::");

// do {
//     // Code to execute
// } while (condition);

let a = 1;

do {
  console.log("Count:", a);
  a++;
} while (a <= 5);


let x = 10;

do {
  console.log(
    "This will print at least once, even though x is greater than 5."
  );
  x++;
} while (x < 5);

//break
console.log("\n break::");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Loop is breaking at:", i);
    break;
  }
  console.log("Number:", i);
}



//continue
console.log("\n continue::");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping:", i);
    continue;
  }
  console.log("Number:", i);
}


for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log("Even number:", i);
}



//Breaking and Continuing Loops

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }

  console.log("Iteration break:", i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }

  console.log("Odd number continue:", i);
}

//Function

// function functionName(parameters) {
//
//     return value;
// }

console.log("\n function..........::");

function sayHello() {
  console.log("Hello, world!");
}

sayHello();

function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(3, 5);
console.log("Sum:", result);



function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet("Alice");
greet();


function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(5, 10);
console.log("Area:", area);

//Breaking and Continuing Loops

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }

  console.log("Iteration:", i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }

  console.log("Odd number:", i);
}

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

function multiply(x, y) {
  return x * y;
}

console.log(multiply(4, 5));




for(let i=0;i<5;i++){
    console.log(i)
}

