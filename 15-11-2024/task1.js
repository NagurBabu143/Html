let array = [1, 2, 3, 4, 5, 6];
let K = 2;  

let result = processArray(array, K);

function processArray(arr, K) {
    let filteredArr = []; // Initialize an empty array to store filtered numbers

    let hasEven = false;

    
    for (let i = 0; i < arr.length; i++) {// Check if the array contains any even number
        if (arr[i] % 2 === 0) {
            hasEven = true;
            break; // If there's at least one even number, stop checking
        }
    }//(2,4,6) next update the filteredArr = [2, 4, 6] like these

    
    if (hasEven) {
        for (let i = 0; i < arr.length; i++) {// If there are even numbers, keep only even numbers, else keep numbers greater than K
            if (arr[i] % 2 === 0) {
                filteredArr.push(arr[i]);
            }
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > K) {
                filteredArr.push(arr[i]);
            }
        }
    }

    
    let transformedArr = [];
    for (let i = 0; i < filteredArr.length; i++) {// Step 2: Transform the array by multiplying each element by its index
        transformedArr.push(filteredArr[i] * i);
    }//here the above updated array multiply with indexslike
    //2*0=0,4*1=4,6*2=12 now we get new arry [0,4,12]

   
    let sum = 0;
    for (let i = 0; i < transformedArr.length; i++) { // Step 3: Aggregate the array (sum of all elements)
        sum += transformedArr[i];
    }//here we sum the above updated array values [0,4,12]
    //0+4+12=16


    let reversedArr = [];
    for (let i = transformedArr.length - 1; i >= 0; i--) {// Step 4: Reverse the transformed array
        reversedArr.push(transformedArr[i]);
    }//here we reverse the updated arry like[12,4,0]

   
    return {
        transformedArray: reversedArr, // Return the reversed transformed array and the sum
        sum: sum
    };
}


console.log(result.transformedArray); 
console.log(result.sum); 
