const myPromise = new Promise((resolve, reject) => {
  const success = false; // Change this to false to see the rejected case
  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});





myPromise
  .then((result) => {
    console.log(result); // Runs if the promise is fulfilled
  })
  .catch((error) => {
    console.error(error); // Runs if the promise is rejected
  });

let myPromise1 = new Promise((resolve, reject) => {
  let success = true; // Simulate success or failure
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise1
  .then((result) => console.log(result)) // Success handler
  .catch((error) => console.log(error)); // Error handler




// fetch(url, options)
// .then(response => {
//     // Handle the response
// })
// .catch(error => {
//     // Handle errors
// });




// Making a GET request to a public API
fetch("https://dummyjson.com/c/da1e-5692-4b75-b818")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse JSON from response
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Fetch error:", error));







async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/c/da1e-5692-4b75-b818");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json(); // Wait for JSON parsing
    console.log(data); // Use the data
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();



// Promises
// Definition
// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

// Key Points
// States: Pending, Fulfilled, Rejected.
// Use .then() for results and .catch() for errors.
// Example
// javascript

// let promise = new Promise((resolve, reject) => {
//     let success = true;
//     success ? resolve('Operation Successful!') : reject('Operation Failed!');
// });

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// Fetch API
// Definition
// A built-in JavaScript API for making HTTP requests. Returns a Promise.

// Key Points
// Requires .then() or async/await to handle results.
// Must manually parse JSON using .json().
// Check response.ok for errors.
// Example
// javascript

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         if (!response.ok) throw new Error('HTTP Error ' + response.status);
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log('Error:', error));



// Async/Await
// Definition
// A syntactic sugar built on Promises to write asynchronous code more cleanly.

// Key Points
// Use async for functions and await for Promises.
// Use try/catch for error handling.
// Example
// javascript

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!response.ok) throw new Error('HTTP Error ' + response.status);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Error:', error);
//     }
// }
// fetchData();


// Axios
// Definition
// A third-party library for HTTP requests, built on Promises.

// Key Points
// Cleaner syntax than Fetch.
// Automatic JSON parsing.
// Built-in error handling.
// Features like interceptors and cancellation.
// Example: GET Request
// javascript

// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => console.log(response.data))
//     .catch(error => console.log('Error:', error.message));

// Example: POST Request
// javascript

// const newPost = { title: 'Axios Example', body: 'Learning Axios!', userId: 1 };
// axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
//     .then(response => console.log('Created:', response.data))
//     .catch(error => console.log('Error:', error.message));