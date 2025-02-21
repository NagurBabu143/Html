// // Step 1: Create a constructor function
// function Car(brand, color) {
//     this.brand = brand;  // Each car will have its own brand
//     this.color = color;  // Each car will have its own color
// }

// // Step 2: Add a method to the Car prototype
// Car.prototype.start = function() {
//     console.log(this.brand + ' is starting.');
// };

// // Step 3: Create an instance of Car
// const myCar = new Car('Toyota', 'red');

// // Step 4: Call the start method
// myCar.start(); // Outputs: Toyota is starting.

// console.log(Object.getPrototypeOf(myCar) === Car.prototype); // true



// // Function constructor
// function Person(name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }

// // This will show Person's prototype property
// console.log(Person.prototype);





// // Function constructor
// function Person(name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }

// Person.prototype.calculateAge = function () {
//     console.log('The current age is: ' + (2019 - this.yearOfBirth));
// }

// console.log(Person.prototype);



function car(){
    console.log("car>>>>");
}
car.prototype.color ="red";

car.prototype.drive= function(){
    console.log(`painting ${this.color}`);

}

console.log(`car color ${car.prototype.color}`);

car.prototype.drive();
