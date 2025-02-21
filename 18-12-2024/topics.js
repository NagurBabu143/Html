console.log("variables......");


let age = 20;
const name2 = "Nagur";
console.log(`Name: ${name2}, Age: ${age}`);



console.log("Data types>>>>");

console.log("primitive");


const str = "Hello";
const num = 42;
const isTrue = true;
console.log(typeof str, typeof num, typeof isTrue);
console.log(str+num+isTrue);
console.log(str,num,isTrue);


console.log("Non-primitive:::::");

const person = { name: "Nagur", age: 150 };
const colors = ["red", "green", "blue"];
console.log(person, colors);


console.log("Type conversion>>>>>>");


const strNum = "123";
console.log(Number(strNum)); 
console.log(String(456)); 


console.log("Regular function::::::::");

function nagur() {
    console.log("nagur babu");
  }
nagur()
  

console.log("Arrow functions::::::::")

const add = (a,b) =>a+b;
console.log(add(2,3));



console.log("for loop.........")

for (let i=0;i<=5;i++){
    console.log(i);
}

const items = ["apple", "banana", "cherry"];
items.forEach((item) => console.log(item));



console.log("while loop>>>>")

let count=0;
while(count < 3){
    console.log(count);
    count++
}


let userName = "Nagur"; 
const userAge = 25; 
let isUserStudent = true; 
console.log("Name:", userName, "Age:", userAge, "Is Student:", isUserStudent);



let colorArray = ["Red", "Green", "Blue"];
console.log("Colors:", colorArray);



let carObject = { brand: "Toyota", model: "Camry", year: 2021 };
console.log("Car:", carObject); 



let num1 = 5, num2 = 3;
console.log("Sum:", num1 + num2); 
console.log("num1 > num2:", num1 > num2); 
console.log("Logical AND:", num1 === 5 && num2 === 3); 
console.log("Remainder:", num1 % num2); 



let Message = "Hello, " + userName + "!";
console.log(Message); 




if (userAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}



let weekDay = 3;
switch (weekDay) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}



let canVote = (userAge >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote); 



for (let i = 1; i <= 3; i++) {
    console.log(`Number: ${i}`);
}



let fruitArray = ["Apple", "Banana", "Cherry"];
fruitArray.forEach((fruit) => console.log("Fruit:", fruit));



let count1 = 1;
do {
    console.log(`Count: ${count1}`);
    count1++;
} while (count1 <= 3); 



function user(name) {
    return `Hello, ${name}!`;
}
console.log(user("Nagur")); 



const addNumbers = function(x, y) {
    return x + y;
};
console.log("Addition:", addNumbers(5, 3)); 



const multiplyNumbers = (x, y) => x * y;
console.log("Multiplication:", multiplyNumbers(4, 3)); 



let numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);
console.log("Numbers:", numberArray); 

let removedNumber = numberArray.pop();
console.log("Removed:", removedNumber); 
console.log("Numbers after pop:", numberArray); 

let doubledNumbers = numberArray.map(num => num * 2);
console.log("Doubled:", doubledNumbers); 



let personObject = {
    name: "Nagur",
    age: 30,
    per1() {
        console.log(`Hi, I am ${this.name}`);
    }
};
personObject.per1(); 



console.log("Name:", personObject.name); 
console.log("Age:", personObject.age); 

let studentObject = {
    name: "Bob",
    study() {
        console.log(`${this.name} is studying.`);
    }
};
studentObject.study(); 
