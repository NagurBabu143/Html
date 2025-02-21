//Pass-by-Reference

console.log("\nPass-by-Reference ::::::::::");

function updatePerson(person) {
  person.name = "Alice";
  console.log("Inside function:", person);
}

let person = { name: "Bob", age: 25 };
updatePerson(person);
console.log("Outside function:", person);





function addElement(numbers) {
  numbers.push(4);
  console.log("Inside function:", numbers);
}

let numbers = [1, 2, 3];
addElement(numbers);
console.log("Outside function:", numbers);



function modifyArray(arr) {
    arr[0] = 99;
    arr[2] = 88;
    console.log("Inside function:", arr); 
  }
  
  let arr = [1, 2, 3];
  modifyArray(arr);
  console.log("Outside function:", arr); 

  


  function removeElement(arr1) {
    arr1.pop(); 
    console.log("Inside function:", arr1); 
  }
  
  let arr1 = [1, 2, 3];
  removeElement(arr1);
  console.log("Outside function:", arr1);
  



  function updateCar(car) {
    car.color = "blue";
    console.log("Inside function:", car); 
  }
  
  let myCar = { make: "Toyota", model: "Camry", color: "red" };
  updateCar(myCar);
  console.log("Outside function:", myCar); 
  
