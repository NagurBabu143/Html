// Pass-by-Value....

console.log("\n Pass-by-Value::::::")


function updateValue(x) {
    x = 100;
    console.log("Inside function:", x); 
  }
  
  let number = 50;
  updateValue(number);
  console.log("Outside function:", number); 
  





  function updateString(str) {
    str = "Hello, World!";
    console.log("Inside function:", str); 
  }
  
  let greeting = "Hi there!";
  updateString(greeting);
  console.log("Outside function:", greeting); 
  