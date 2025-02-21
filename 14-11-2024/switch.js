//switch

console.log("\n switch:::::::::");

// switch (expression) {
//     case value1:
//         // Code to run if expression === value1
//         break;
//     case value2:
//         // Code to run if expression === value2
//         break;
//     // More cases as needed
//     default:
//         // Code to run if none of the cases match
// }

let day = 6;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}




let day1 = "";

switch (day1) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend");
        break;
    default:
        console.log("Invalid day");
}




let number = 10;

switch (true) {
    case (number < 10):
        console.log("The number is less than 10");
        break;
    case (number >= 10 && number <= 20):
        console.log("The number is between 10 and 20");
        break;
    case (number > 20):
        console.log("The number is greater than 20");
        break;
    default:
        console.log("Invalid number");
}



let color = "blue";

switch (color) {
    case "red":
    case "pink":
        console.log("This is a warm color.");
        break;
    case "blue":
    case "green":
        console.log("This is a cool color.");
        break;
    default:
        console.log("Color not recognized.");
}




let score = 80;

switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
    case score >= 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}




let operation = "add";
let num1 = 5;
let num2 = 3;

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

switch (operation) {
    case "add":
        console.log("Result:", add(num1, num2));
        break;
    case "multiply":
        console.log("Result:", multiply(num1, num2));
        break;
    default:
        console.log("Operation not supported");
}
