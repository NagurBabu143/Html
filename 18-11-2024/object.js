//this
console.log("\n This::::");

let person = {
  name: "Shaik",
  age: 21
};

console.log(person.name); 
console.log(person["age"]); 



console.log("\n restaurant::")
let restaurant1 = {
  restaurantname: "biryani",
  restaurantnumber: "875645775",
  fooditem: {
    item: "veg",
    item1: "non-veg",
    bill: "150"
  },
  printfooditem: function() {
    console.log(`item: ${this.fooditem.item}, item1: ${this.fooditem.item1}, bill: ${this.fooditem.bill}`);
  }
};


console.log("all::",restaurant1);
restaurant1.printfooditem();





function Person5(name, age) {
    this.name = name;
    this.age = age;
  }
  
  
  let person1 = new Person5("Nagur", 25);
  console.log(person1.name); 
  console.log(person1.age); 
  



  


  let user = {
    name: "Nagur",
    age:20,
    greet: function () {
      console.log("Hello " , this.name,"your age", this.age );
    }
  };
  
  user.greet(); 
  



  
let person5 = {
    name: "nagur",
    age: 25,
  };
  
  person5.city = "New York";
  
  person5.country = "India";

  console.log(person5); 
  



  
function Person6(name, age) {
    this.name = name;
    this.age = age;
  }
  
  
  let Shaik = new Person6("Shaik", 25);
  let babu = new Person6("babu", 30);
  
  console.log(Shaik); 
  console.log(babu); 




  let car = {
    brand: "Toyota",
    model: "Corolla",
    getDetails: function () {
      return `${this.brand} ${this.model}`;
    },
  };
  
  console.log(car.getDetails());
  


  let person7 = {
    name: "Nagur",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  };
  
  person7.greet(); 





  let student = {
    name: "babu",
    rollNumber: "20231001",
    age: 20,
    address: {
        street: "12th Avenue",
        city: "Hyderabad",
        printAddress: function () {
            console.log(`${this.street}, ${this.city}`);
        }
    },
    printStudentDetails: function () {
        console.log(`${this.name}, ${this.rollNumber}`);
    }
};

student.address.printAddress();
student.printStudentDetails();




  let emp = {
    empName: "sam",
    empId: "123456",
    empAge: "22",
    adress: {
        streetno: "street no1",
        City: "Nellore",
        printAdress: function () {
            console.log(`${this.streetno}, ${this.City}`);
        }
    }
}

emp.adress.printAdress();



let library = {
  name: "City Library",
  location: "Downtown",
  book: {
      title: "JavaScript Essentials",
      author: "Jane Smith",
      details: function () {
          console.log(`${this.title} by ${this.author}`);
      }
  },
  printLibraryInfo: function () {
      console.log(`Library: ${this.name}, Location: ${this.location}`);
  }
};

library.book.details();
library.printLibraryInfo();



function Employee(name, id, age) {
  this.name = name;
  this.id = id;
  this.age = age;
  this.printDetails = function () {
      console.log(`Name: ${this.name}, ID: ${this.id}, Age: ${this.age}`);
  };
}

let emp1 = new Employee("Alice", "E101", 25);
let emp2 = new Employee("Bob", "E102", 30);
let emp3  = new Employee("nagur","E103",56);

emp1.printDetails();
emp2.printDetails();
emp3.printDetails();






