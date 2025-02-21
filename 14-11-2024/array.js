//Array
console.log("\n ARRAY:::::::::")

//push()
console.log("\n PUSH:::::")

let arr = [1, 2, 3];
arr.push(4); 
console.log(" push num in to array:: ",arr)



let fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log("push fruits in to array::",fruits); 

//pop()
console.log("\n POP::::::::");

let arr1 = [1, 2, 3,4,5,6,7,8];
arr1.pop(); 
console.log(" pop num in to array:: ",arr1)



let colors = ["red", "green", "blue"];
let lastColor = colors.pop();
console.log(" Remove last color::",lastColor); 
console.log("final result::",colors); 


//shift()

console.log("\n shift::::::");


let arr2 = [1, 2, 3];
arr2.shift(); 
console.log("Removes the first element of an array::",arr2);




let names = ["Alice", "Bob", "Charlie"];
let firstName = names.shift();
console.log("Remove 1St name in Array::",firstName); 
console.log("Final Result::",names); 


//unshift()

console.log("\n unshift::::");

let A=[2,3,4,5]
A.unshift(11);
console.log("Adds elements to the beginning of an array::",A);



let B = ["Alice", "Bob", "Charlie"];
let D = B.unshift("nagur");
console.log("Adds elements to the beginning of an array::",B); 


//slice()

console.log("\n slice:::::::::");

let Z=[1,2,3,4,5,6];
let X=Z.slice(2,6);
console.log("before slice:",Z);
console.log("After slice::",X);


let BB = ["Alice", "Bob", "Charlie","nagur","babu"];
let DD = BB.slice(0,1);
console.log("before slice::",BB); 
console.log("After slice::",DD);

//splice()


console.log("\n splice:::");


let S = [1, 2, 3];
S.splice(1, 1, 4); 
console.log("Modifies the array :",S)


let languages = ["JavaScript", "Python", "C++"];
languages.splice(1, 1, "Java"); 
console.log("Replaces with::",languages); 

languages.splice(1, 0, "Ruby");
console.log("Adding without removing::",languages);