console.log("\nSecondLargestAndSmallest::");

let array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];

function SecondLargestAndSmallest(arr) {
    
    let Arr = [...new Set(arr)].sort((a, b) => a - b);// Remove duplicates and sort the array in ascending order

    //[1,2,3,4,5,6,9]
   

    let secondSmallest = Arr[1];  // The second smallest number
    let secondLargest = Arr[Arr.length - 2];  // The second largest number

    console.log("Second Smallest:", secondSmallest);
    console.log("Second Largest:", secondLargest);
}

// Call the function
SecondLargestAndSmallest(array1);
