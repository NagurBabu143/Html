// let a=[1,2,3,4,5,6,7,8];
// let b=a[1];
// let c=a[a.length-2];
// console.log("\n print ALL:",a);
// console.log("min:",b);
// console.log("max:",c);





// const array = [2,34,56,1,3,77,99,24];
// let A = array[0];
// let B = array[array.length];
 
// for (let i = 1; i < array.length; i++) {
//     if (array[i] > A) {
       
//         B=A;
//         A = array[i];
//     }
// }
 

// console.log("Max second value:",B);
 
// let min1 = array[0];
// let min2 = array[array.length];
 
 
// for (let i = 1; i < array.length; i++) {
//     if (array[i] < min1) {
       
//         min2=min1;
//         min1 = array[i];
//     }
// }
 

// console.log("min second value:",min2);

// // let arr = [1,2,3,4,5,6,7,8,9];
// // let B=arr[1];
// // let C=arr[arr.length-2];
// // function Maximum() {
// //     let maxNum = arr[0];
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] > maxNum) {
// //             maxNum = arr[i];
          
// //         }
       
// //     }
// //     return maxNum;
  
// // }

// // console.log("Maximum number:", Maximum()); 
// // console.log("second large:",C);

let array = [1, 4, 7, 2, 9, 3, 10, 22, 4, 5, 4, 11, 22];

function smallandlarge(arr) {
    
    let A = [...new Set(arr)];
    console.log("set:", A);

    
    A = A.sort((a, b) => a - b);
    console.log("sort:", A);

    
    let small1 = A[1];
    let large1 = A[A.length - 2];

    console.log("small:", small1);
    console.log("large:", large1);
}

smallandlarge(array);



// console.log("\nSecondLargestAndSmallest::");

// let array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// function smallandlarge(arr) {
   
//     let A = [...new Set(arr)];
//     console.log("Set Array:", A);

    
//     A.sort((a, b) => a - b);
//     console.log("Sorted Array:", A);

    
//     let secondSmallest = A[1];  
//     let secondLargest = A[A.length - 2];  

//     console.log("Second Smallest:", secondSmallest);
//     console.log("Second Largest:", secondLargest);
// }

// // Call the function
// smallandlarge(array1);
