// // Callback Functions: A callback is a function passed as an argument to another function and is executed after the first function completes. This allows asynchronous tasks to execute in order.

// // Nested Execution: In Callback Hell, callbacks are nested inside each other to ensure tasks run sequentially.
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1 done");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2 done");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3 done");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All steps completed!");
//     });
//   });
// });

// // // Promises:

// // What is a Promise? A Promise is an object representing the eventual result (success or failure) of an asynchronous operation. It has:

// // resolve: Marks the Promise as completed successfully.
// // reject: Marks the Promise as failed.
// // Chaining Promises: Promises allow tasks to run sequentially by chaining .then() methods. Each .then() waits for the previous task to finish.
// three states:

// Pending
// Resolved
// Rejected
// // Represents a task that may complete (resolve) or fail (reject) in the future.
// // Chaining: Promises use .then() to handle the next task after the current one is complete, avoiding nesting.
// // Error Handling: Errors can be caught in one place with .catch().

// function task(step) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Task ${step} done`);
//       resolve(); // Tells the Promise that the task is complete
//     }, 1000);
//   });
// }

// // Chaining Execution
// task(1)
//   .then(() => task(2)) // Starts task 2 after task 1 is done
//   .then(() => task(3)) // Starts task 3 after task 2 is done
//   .then(() => task(4))
//   .then(() => task(5))
//   .then(() => task(6))
//   .then(() => task(7))
//   .then(() => {
//     console.log("All tasks done!");
//   });

function getData() {
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      const data = "Sample Data";
      reject(data);
    }, 1000);
  });
}
getData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });



// const add = (num1, num2) => new Promise((resolve) => resolve(num1 + num2))

// add(2, 4)
//   .then((result) => {
//     console.log(result) // result: 6
//     return result + 10
//   })
//   .then((result) => {
//     console.log(result) // result: 16
//     return result
//   })
//   .then((result) => {
//     console.log(result) // result: 16
//   })