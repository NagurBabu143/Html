//Maximum
console.log("\nmaximum::")

let arr = [1, 2, 34, 4, 5, 61, 72, 8, 9];

function Maximum() {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

console.log("Maximum number:", Maximum()); 


//Minimum

console.log("\nminimum::")

let array = [23,1,35,77,35,20,99];

function minimum() {
    let minNum =array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum =array[i];
        }
    }
    return minNum;
}

console.log("minimum number:", minimum());  



//count

console.log("\n count::::::")



let arr1 = [1, 2, 3, 4, 5, 6, 2, 2, 2, 2, 2, 2];
let num = 2;

function count() {
    let count = 0;  
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === num) { 
            count++;  
        }
    }
    console.log("Count of", num, ":", count);
}

count();



