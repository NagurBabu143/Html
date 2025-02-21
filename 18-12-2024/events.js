
// // console.log("Events>>>>>>>>>");

// // const b=document.querySelector("button")
// // b.addEventListener("click", () => {
// //     console.log("Button clicked!");
// //   });
  

// //   const c=document.getElementById("clickbutton")
// //   c.addEventListener("click",function(){
// //     alert("button clicked!!!!!!!")
// //   })



// //   const input = document.querySelector("input");
// //   input.addEventListener("input", (e) => {
// //     console.log(e.target.value);
// //   });


// //   const div = document.querySelector("div")
// //   div.addEventListener("mouseover", () => {
// //     console.log("Mouse is over the div!");
// //   });



// // const p=  document.querySelector("p");
// // p.textContent = "hi hello nagur!";


// // const div1 = document.createElement("div");
// // div1.textContent = "new div";
// // document.body.appendChild(div1);


  
// // const header = document.querySelector("h1");
// // header.style.color = "blue";
// // header.style.fontSize = "2rem";



// fetch("https://dummyjson.com/c/da1e-5692-4b75-b818")
//   .then((response) => response.json())
//   .then((data) => console.log(data));



//   fetch("https://dummyjson.com/c/da1e-5692-4b75-b818")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => console.log("Fetched data:", data))
//   .catch((error) => console.error("Error occurred:", error));




  const promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success){
         resolve("Shaik Nagur");
        }else{ 
            reject("babu");
        }
  });
  
  promise
  .then(function(result){
    console.log(result)
  })
  .catch(function(error){
    console.error(error)
});
  




console.log("Loading...");
setTimeout(() => {
  console.log("Data loaded!");
}, 3000);





setTimeout(() => {
    console.log("after 2sec it will display!");
  }, 2000);
  



  const name1 = (name) => {
    console.log(`Hello, ${name}!`);
  };
  
  setTimeout(name1, 3000, "Nagur"); 
  



  const timeoutId = setTimeout(() => {
    console.log("not run!");
  }, 5000);
  
  clearTimeout(timeoutId); 
  



  let counter = 0;
  const intervalId = setInterval(() => {
    counter++;
    console.log(`Count: ${counter}`);
    if (counter === 5) {
      clearInterval(intervalId); 
      console.log("Interval cleared!");
    }
  }, 1000);
  




let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise resolved successfully!"), 2000);
});
myPromise.then(data => console.log(data)); 




let failingPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise rejected!"), 2000);
});
failingPromise
  .then(data => console.log(data))
  .catch(error => console.error(error)); 




let promise1 = Promise.resolve("Promise 1 resolved");
let promise2 = Promise.resolve("Promise 2 resolved");
Promise.all([promise1, promise2])
  .then(values => console.log("All promises resolved:", values));



async function fetchData() {
  let data = await new Promise(resolve => setTimeout(() => resolve("Data Loaded!"), 2000));
  console.log(data); 
}
fetchData();





async function fetchWithError() {
  try {
      let data = await new Promise((resolve, reject) => setTimeout(() => reject("Error loading data!"), 2000));
      console.log(data);
  } catch (error) {
      console.error(error); 
  }
}
fetchWithError();




async function multipleAwaits() {
  let firstResponse = await new Promise(resolve => setTimeout(() => resolve("First!"), 1000));
  let secondResponse = await new Promise(resolve => setTimeout(() => resolve("Second!"), 1000));
  console.log(firstResponse, secondResponse); 
}
multipleAwaits();




fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error("Error:", error));




fetch("https://jsonplaceholder.typicode.com/todos/invalid-url")
  .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => console.log("Fetched Data:", data))
  .catch(error => console.error("Error:", error)); 




async function fetchAsync() {
  try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      let data = await response.json();
      console.log("Fetched Data:", data);
  } catch (error) {
      console.error("Error:", error);
  }
}
fetchAsync();




const animalArray = ["Cat", "Dog", "Elephant", "Lion", "Tiger"];
let animalIndex = 0;
function printAnimals() {
  if (animalIndex < animalArray.length) {
      console.log(animalArray[animalIndex]);
      animalIndex++;
      setTimeout(printAnimals, 2000);
  } else {
      console.log("All animals printed!");
  }
}
printAnimals();



setTimeout(() => {
  console.log("This message is delayed by 3 seconds!");
}, 3000); 




function delayed(name) {
  setTimeout(() => {
      console.log(`Hello, ${name}!`);
  }, 2000);
}
delayed("babu"); 




let counter1 = 0;
let intervalId1 = setInterval(() => {
  counter1++;
  console.log(`Interval count: ${counter}`);
  if (counter === 5) {
      clearInterval(intervalId1);
      console.log("Interval cleared.");
  }
}, 1000);



let elapsedSeconds = 0;
let clockInterval = setInterval(() => {
  elapsedSeconds++;
  console.log(`Elapsed seconds: ${elapsedSeconds}`);
  if (elapsedSeconds === 10) {
      clearInterval(clockInterval);
      console.log("Clock stopped after 10 seconds.");
  }
}, 1000);




function logRepeatingMessage() {
  console.log("This message repeats every 2 seconds.");
}
let messageInterval = setInterval(logRepeatingMessage, 2000);



const moreFruits = ["Apple", "Banana", "Cherry", "Mango"];
for (let i = 0; i < moreFruits.length; i++) {
  setTimeout(() => {
      console.log(moreFruits[i]);
  }, i * 2000); 
}



const numberArray = [1, 2, 3];
const letterArray = ["A", "B", "C"];
for (let i = 0; i < numberArray.length; i++) {
  for (let j = 0; j < letterArray.length; j++) {
      setTimeout(() => {
          console.log(`Number: ${numberArray[i]}, Letter: ${letterArray[j]}`);
      }, (i + j) * 1000); 
  }
}

//const numberArray1 = [1, 2, 3];
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
}, i * 1000); 

}



// const messageArray = ["First message", "Second message", "Third message"];
// for (let i = 0; i < messageArray.length; i++) {
//   setTimeout(() => {
//       console.log(messageArray[i]);
//   }, i * 1000); 
// }




// let errorPronePromise = new Promise((resolve, reject) => {
//   setTimeout(() => reject("An error occurred!"), 1000);
// });
// errorPronePromise
//   .then(data => console.log(data))
//   .catch(error => console.error("Handled Error:", error)); 



// let promiseChain = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("First resolved!"), 1000);
// });
// promiseChain
//   .then(data => {
//       console.log(data);
//       return new Promise((resolve, reject) => setTimeout(() => reject("Second error!"), 1000));
//   })
//   .catch(error => console.error("Error in chain:", error)); 




// let finallyPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Resolved with finally!"), 1000);
// });
// finallyPromise
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
//   .finally(() => console.log("Promise completed."));