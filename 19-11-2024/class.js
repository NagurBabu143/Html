//Class
console.log("\n Class:::");

//A class is a blueprint for creating objects with shared properties and methods

//Syntax:

// class ClassName {
//     constructor() {
//       // Initialize properties
//     }
  
//     // Methods
//     methodName() {
//       // Method logic
//     }
//   }
  

//Constructor Method
//The constructor method is a special method inside the class used for initializing new objects
//Syntax:
// class ClassName {
//     constructor(parameter1, parameter2) {
//       this.property1 = parameter1;
//       this.property2 = parameter2;
//     }
//   }
  


class Car {
    constructor(make, model,type,year) {
      this.make = make;
      this.model = model;
      this.type=type;
      this.year=year;
    }
  
    displayInfo() {
      console.log(`Car make: ${this.make}, model: ${this.model},car type: ${this.type},year: ${this.year}`);
   
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla','i20','2024');
 
  myCar.displayInfo(); 
  






  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person('Nagur', 24);
  person1.introduce();  






  class FoodDelivery {
    constructor(customerName, mobile, restaurant, deliveryLocation) {
        this.customerName = customerName;
        this.mobile = mobile;
        this.restaurant = restaurant;
        this.deliveryLocation = deliveryLocation;
    }

    changeDeliveryDetails(newRestaurant, newDeliveryLocation) {
        this.restaurant = newRestaurant;
        this.deliveryLocation = newDeliveryLocation;
    }

    calculateDeliveryFee(km) {
        if (km > 0 && km <= 3) {
            return "₹20";
        } else if (km > 3 && km <= 6) {
            return "₹40";
        } else if (km > 6 && km <= 10) {
            return "₹60";
        } else if (km > 10 && km <= 15) {
            return "₹100";
        } else {
            return "Delivery not available for distances beyond 15 km.";
        }
    }

    orderSummary() {
        const distances = {
            "Restaurant A": 0,
            "Restaurant B": 5,
            "Restaurant C": 8,
            "Customer Home 1": 3,
            "Customer Home 2": 10,
            "Customer Home 3": 15,
        };

        const restaurantDistance = distances[this.restaurant];
        const deliveryDistance = distances[this.deliveryLocation];

        if (restaurantDistance !== undefined && deliveryDistance !== undefined) {
            const km = Math.abs(deliveryDistance - restaurantDistance);
            const fee = this.calculateDeliveryFee(km);
            console.log(
                `Hi ${this.customerName}, the delivery fee for your order from ${this.restaurant} to ${this.deliveryLocation} (${km} km) is: ${fee}`
            );
        } else {
            console.log(`One or both locations (${this.restaurant}, ${this.deliveryLocation}) are unavailable.`);
        }
    }
}


const foodOrder = new FoodDelivery("Shaik Nagurbabu", "9876543210", "Restaurant A", "Customer Home 1");
foodOrder.orderSummary();

foodOrder.changeDeliveryDetails("Restaurant B", "Customer Home 3");
foodOrder.orderSummary();

   




class CabBooking {
    constructor(customerName, mobile, pickupLocation, dropLocation) {
        this.customerName = customerName;
        this.mobile = mobile;
        this.pickupLocation = pickupLocation;
        this.dropLocation = dropLocation;
    }

    changeBookingDetails(newPickupLocation, newDropLocation) {
        this.pickupLocation = newPickupLocation;
        this.dropLocation = newDropLocation;
    }

    calculateFare(km) {
        if (km > 0 && km <= 5) {
            return "₹100";
        } else if (km > 5 && km <= 10) {
            return "₹200";
        } else if (km > 10 && km <= 20) {
            return "₹300";
        } else if (km > 20 && km <= 30) {
            return "₹500";
        } else {
            return "Booking not available for distances beyond 30 km.";
        }
    }

    bookingSummary() {
        const distances = {
            "Location A": 0,
            "Location B": 5,
            "Location C": 10,
            "Location D": 15,
            "Location E": 20,
            "Location F": 25,
            "Location G": 30,
        };

        const pickupDistance = distances[this.pickupLocation];
        const dropDistance = distances[this.dropLocation];

        if (pickupDistance !== undefined && dropDistance !== undefined) {
            const km = Math.abs(dropDistance - pickupDistance);
            const fare = this.calculateFare(km);
            console.log(
                `Hi ${this.customerName}, the fare for your ride from ${this.pickupLocation} to ${this.dropLocation} (${km} km) is: ${fare}`
            );
        } else {
            console.log(`One or both locations (${this.pickupLocation}, ${this.dropLocation}) are unavailable.`);
        }
    }
}


const cabBooking = new CabBooking("Shaik Nagurbabu", "9876543210", "Location A", "Location C");
cabBooking.bookingSummary();

cabBooking.changeBookingDetails("Location B", "Location F");
cabBooking.bookingSummary();




class HotelBooking {
    constructor(customerName, hotelName, nights) {
        this.customerName = customerName;
        this.hotelName = hotelName;
        this.nights = nights;
    }

    changeBooking(hotelName, nights) {
        this.hotelName = hotelName;
        this.nights = nights;
    }

    calculateCost() {
        const rates = {
            "Hotel A": 2000,
            "Hotel B": 3000,
            "Hotel C": 4000,
        };

        const rate = rates[this.hotelName];
        if (rate) {
            return `₹${rate * this.nights}`;
        } else {
            return "Hotel not available.";
        }
    }

    bookingSummary() {
        const cost = this.calculateCost();
        console.log(`Hi ${this.customerName}, your stay at ${this.hotelName} for ${this.nights} night(s) will cost ${cost}.`);
    }
}


const booking = new HotelBooking("Shaik Nagurbabu", "Hotel A", 2);
booking.bookingSummary();

booking.changeBooking("Hotel C", 3);
booking.bookingSummary();





class Emp{
    constructor(empname,empdoj,empid){
        this.empname=empname;
        this.empdoj=empdoj;
        this.empid=empid;
        
    }
    changeempid(newempid){
        this.empid=newempid;

    }
    empsummary(){
        console.log(`empname:${this.empname},empdoj:${this.empdoj},empid:${this.empid}`)
    }
}
const emp1=new Emp("shaik nagurbabu","08-02-2024","239ID");
emp1.empsummary();

emp1.changeempid("255NN");
emp1.empsummary();





 class atm{
    constructor(name,cardnumber,cardtype,accountbalance){
        this.name=name,
        this.cardnumber=cardnumber,
        this.cardtype=cardtype,
        this.accountbalance=accountbalance
    }
    changebalance(accountbalance){
        this.accountbalance=accountbalance

    }

    printdetails(){
        console.log(`name:${this.name},cardnumber:${this.cardnumber},cardtype:${this.cardtype},accountbalance${this.accountbalance}`);        
    }
 }
 const atm1 =new atm("nagur","12345678","visa","$10");
 atm1.printdetails()
atm1.changebalance("$2")
atm1.printdetails()



class bus{
    constructor(name,location,rate,droppoint,pickuppoint){
        this.name=name,
        this.location=location,
        this.rate=rate,
        this.droppoint=droppoint,
        this.pickuppoint=pickuppoint
    }
    changerate(rate){
        this.rate=rate
    }
    changelocation(droppoint,pickuppoint){
        this.droppoint=droppoint,
        this.pickuppoint=pickuppoint
    }
    printdetails1(){
        console.log(`name:${this.name},location:${this.location},rate:${this.rate},droppoint:${this.droppoint},pickuppoint${this.pickuppoint}`)
    }
}
const Bus=new bus("svr","india","$10","AP","TS");
Bus.printdetails1()
Bus.changelocation("TS","AP")
Bus.printdetails1()
Bus.changerate("$2")
Bus.printdetails1()





class Hotel{
    constructor(rooms,name,addres,number){
        this.rooms=rooms,
        this.name=name,
        this.addres=addres,
        this.number=number
    }
    changerooms(rooms){
        this.rooms=rooms
    }
    changeaddres(addres){
        this.addres=addres
    }
    printdetails2(){
        console.log(`rooms:${this.rooms},name:${this.name},addres:${this.addres},number:${this.number}`)
    }


}
const hotel1=new Hotel("1","Nagur","AP","4236372683");
hotel1.printdetails2()
hotel1.changerooms("8")
hotel1.printdetails2()
hotel1.changeaddres("TS")
hotel1.printdetails2()



class Animal{
    eat(){
        console.log("This animal is eating");
    }
}
class dog extends Animal{
    dark(){
        console.log("The dog is dark");
    }
}

const mydog =new dog();
mydog.eat();
mydog.dark();




//Encapsulation
//Bundling data (properties) and methods (functions) into a single unit (object or class).
//You can use private fields (using #) to restrict direct access to certain properties.
console.log("\n Encapsulation::");

class BankAccount {
    #balance;
  
    constructor(accountHolder, initialBalance) {
      this.accountHolder = accountHolder;
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      this.#balance += amount;
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new BankAccount("Nagur", 1000);
  account.deposit(500);
  console.log(account.getBalance()); // Output: 1500
  



  //Polymorphism:

//Syntax for Polymorphism in JavaScript
//Polymorphism typically involves:

//Base Class Method: A method defined in the parent class.
//Overriding in Subclass: The same method redefined in a subclass to provide specialized behavior.
//Dynamic Behavior: Calling the method on an object of the subclass invokes the overridden version.
  //A subclass can override a method from its parent class to provide specialized behavior.


  class Animal1 {
    sound() {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal1 {
    sound() {
      console.log("Woof Woof!");
    }
  }
  
  class Cat extends Animal1 {
    sound() {
      console.log("Meow Meow!");
    }
  }
  
 
  const dog1 = new Dog();
  const cat = new Cat();
  
  dog1.sound(); // Output: Woof Woof!
  cat.sound(); // Output: Meow Meow!
  




  class Shape {
    area() {
      console.log("No specific shape, area not defined.");
    }
  }
  
  class Circle extends Shape {
    area() {
      console.log("Circle area: π * r²");
    }
  }
  
  class Square extends Shape {
    area() {
      console.log("Square area: side * side");
    }
  }
  
  const circle1 = new Circle();
  const square = new Square();
  
  circle1.area(); // Output: Circle area: π × r²
  square.area(); // Output: Square area: side × side
  


  class Vehicle {
    move() {
      console.log("This vehicle moves.");
    }
  }
  
  class Car1 extends Vehicle {
    move() {
      console.log("The car drives.");
    }
  }
  
  class Bicycle extends Vehicle {
    move() {
      console.log("The bicycle is pedaled.");
    }
  }
  
  const car1 = new Car1();
  const bicycle = new Bicycle();
  
  car1.move(); // Output: The car drives.
  bicycle.move(); // Output: The bicycle is pedaled.
  







