

console.log("Variable::");



var name1 = "Shaik NagurBabu"; 
let age = 25;     
const num = 3.14; 

console.log("Var:",name1);
console.log("Age:",age);
console.log("Num:",num);



console.log("Data Types:::");

let Available = true;  
let message = "Hello";   
let count = 10;          
let person = { name: "Alice", age: 30 }; 
let items = [1, 2, 3];

console.log("String:",message)
console.log("boolean:",Available)
console.log("Number:",count)
console.log("Object:",person)
console.log("Array:",items)

console.log("Operators::")

let a = 10, b = 5;
console.log(a + b);   
console.log(a > b);   
console.log(a > b && b > 0); 

let result = a > b ? "A is greater" : "B is greater";
console.log(result); 


console.log("Functions:::")
const name="Shaik NagurBabu"
function Names(name) {
     console.log(name);
  }
Names(name)

const add = (a, b) => a + b;

console.log(add(5, 3));     


console.log("Conditional Statements::")


let age1 = 91;

if (age1 < 18) {
  console.log("Minor");
} else if (age1 === 18) {
  console.log("Just became an adult");
} else {
  console.log("Adult");
}


console.log("Loops::")

for (let i = 0; i < 3; i++) {
  console.log(i); 
}


let count1 = 0;
while (count1 < 3) {
  console.log(count1); 
  count1++;
}


console.log("Objects::")

let person1 = {
  name: "Shaik NagurBabu",
  age: 25,
  text: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person1.text());

console.log("Arrays::")

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); 
numbers.push(6);    
console.log(numbers);  


console.log("Switch::");

let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid color");
}


console.log("Classes:::");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  Data1() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const Change = new Person("Nagur Babu", 30);
Change.Data1(); 


// console.log("DOM:::::")
//  document.body.style.backgroundColor="red";
// let button = document.getElementById("btn");
// button.addEventListener("click", () => {
//   alert("Button clicked!");
// });


