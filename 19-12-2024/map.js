// Map: Transform each element in an array
// Map would transform each number and return a new array with the updated values:
const n = [1, 2, 3, 4];
const U = n.map(num => num + 10);
console.log(U);



const word = ["hello", "world"];
const uppercase = word.map(word => word.toUpperCase());
console.log(uppercase); 


const people = [{ name: "Alice" }, { name: "Bob" }];
const names = people.map(person => person.name);
console.log(names); 


// // Reduce: Accumulate array into a single value
// Reduce would combine them and return a single number:

// const result = array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);


// 0+1=1
// 1+2=3
// 3+3=6
// 6+4=10




// // // Filter: Filter array to subset based on condition
// // Filter would test a condition against each number and return only those meeting it:
// const newArray = array.filter(callback(element[, index[, array]])[, thisArg])


const numb = [1, 2, 3, 4, 5];
const evens = numb.filter(num => num % 2 === 0);
console.log("print even only:",evens); 






const arr = [1, 3, 5, 7, 9];


const result = arr
  .filter(num => num >= 5)    
  .map(num => num * 2)           
  .reduce((acc, num) => acc + num, 0); 
  

console.log(result); 




