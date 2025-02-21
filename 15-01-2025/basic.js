

// 1. Variables
let name = "Nagur"; 
const age = 25;    
var city = "New York"; 
console.log(name, age, city);

// 2. Data Types
let stringType = "Hello"; 
let numberType = 42;      
let booleanType = true;  
let arrayType = [1, 2, 3]; 
let objectType = { key: "value" }; 
console.log(typeof stringType, typeof arrayType);

// 3. Operators
let x = 10, y = 5;

// Arithmetic
console.log(x + y, x - y, x * y, x / y);

// Comparison
console.log(x > y, x === 10, x !== 5);

// Logical
console.log(x > 5 && y < 10, x < 5 || y < 10, !(x > 5));




// 1. Function Declaration
function Data(name) {
  return `Hello, ${name}!`;
}
console.log(Data("Nagur"));

// 2. Arrow Functions
const add = (a, b) => a + b;
console.log(add(10, 15));

// Control Structures

// 1. If-Else
let ageCheck = 18;
if (ageCheck >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 2. Loops
for (let i = 1; i <= 5; i++) {
  console.log(`Number: ${i}`);
}
let num = 5;
while (num > 0) {
  console.log(num--);
}


// Objects

// 1. Object Creation and Access
let person = {
  name: "Nagur",
  age: 25,
  Data() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
console.log(person.name, person.age);
person.Data();

// 2. Object Destructuring
const { name: personName, age: personAge } = person;
console.log(personName, personAge);




// // DOM Manipulation

// document.getElementById("myDiv").innerText = "Updated text!";
// document.querySelector("#myButton").addEventListener("click", () => {
//   alert("Button clicked!");
// });

// // ES6 Features

// // 1. Template Literals
// const userName = "Nagur";
// console.log(`Hello, ${userName}!`);

// // 2. Spread and Rest Operators
// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5];
// console.log(newArr);
// const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
// console.log(sum(1, 2, 3, 4, 5));

// // Asynchronous JavaScript

// // 1. Promises
// const promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve("Promise resolved!");
//   else reject("Promise rejected!");
// });
// promise.then(console.log).catch(console.error);

// // 2. Async/Await
// const fetchData = async () => {
//   let data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let json = await data.json();
//   console.log(json);
// };
// fetchData();

// // Error Handling

// try {
//   let result = 10 / 0;
//   console.log(result);
// } catch (error) {
//   console.error("Error:", error.message);
// }

// // API Integration

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// // Event Handling

// document.querySelector("#myDiv").addEventListener("mouseover", () => {
//   console.log("Mouse is over the div!");
// });

// // OOP in JavaScript

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Data() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }
// let person1 = new Person("Nagur", 25);
// person1.Data();





// document.getElementById("storeButton").addEventListener("click", () => {
//     localStorage.setItem("name", "Nagur");
//     document.getElementById("localStorageOutput").innerText = "Data stored in Local Storage.";
//   });
//   document.getElementById("retrieveButton").addEventListener("click", () => {
//     const name = localStorage.getItem("name");
//     document.getElementById("localStorageOutput").innerText = name ? `Retrieved: ${name}` : "No data found.";
//   });



//   class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     data() {
//       return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
//     }
//   }
//   let person1 = new Person("Nagur", 25);
//   document.getElementById("oopOutput").innerText = person1.data();




//   document.getElementById("fetchDataButton").addEventListener("click", async () => {
//     const fetchData = async () => {
//       let response = await fetch("https://dummyjson.com/c/8a8d-22ee-4c67-b3df");
//       let data = await response.json();
//       return data;
//     };
//     const data = await fetchData();
//     document.getElementById("fetchOutput").innerText = JSON.stringify(data);
//   });



//   const userName = "Nagur";
//   document.getElementById("Output").innerText = `Hello, ${userName}!`;

 

//   document.getElementById("myDiv").innerText = "Updated text!";
//   document.querySelector("#myButton").addEventListener("click", () => {
//     alert("Button clicked!");
//   });


