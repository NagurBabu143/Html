//// swap grades

function Calculate(Score) {
    let grade = Score >= 90 ? 'A' :
                Score >= 80 ? 'B' :
                Score >= 70 ? 'C' :
                Score >= 60 ? 'D' :
                Score >= 37 ? 'E' : 'F';

    console.log("Grade:",grade);
    
}



// swap grades

function swapgrades(s1,s2){
    let temp = s1.grade;
    s1.grade=s2.grade;
    s2.grade=temp;
}

let s1={name:"nagur",grade:"A"};
let s2={name:"babu",grade:"B"};


//Before Swapping
console.log("Before Swapping:");

console.log(s1.name,s1.grade);
console.log(s2.name,s2.grade);

swapgrades(s1,s2);

//After swapping
console.log("After swapping:");

console.log(s1.name,s1.grade);
console.log(s2.name,s2.grade);






// // Calculate grade based on score
// function calculateGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' :
//            score >= 37 ? 'E' : 'F';
// }

// // Swap grades
// function swapGrades(s1, s2) {
//     let temp = s1.grade;
//     s1.grade = s2.grade;
//     s2.grade = temp;
// }

// let s1 = { name: "nagur", Score: 80 };
// let s2 = { name: "babu", Score: 20 };


// s1.grade = calculateGrade(s1.Score);
// s2.grade = calculateGrade(s2.Score);

// // Before swapping
// console.log("Before Swapping:");
// console.log(s1.name, s1.Score, s1.grade);
// console.log(s2.name, s2.Score, s2.grade);


// swapGrades(s1, s2);

// // After swapping
// console.log("After Swapping:");
// console.log(s1.name, s1.Score, s1.grade);
// console.log(s2.name, s2.Score, s2.grade);




// console.log("\n IF::::::")

// // by using if

// function Calculate(Score) {
//     let grade;

//     if (Score >= 90) {
//         grade = 'A';
//     } else if (Score >= 80) {
//         grade = 'B';
//     } else if (Score >= 70) {
//         grade = 'C';
//     } else if (Score >= 60) {
//         grade = 'D';
//     } else if (Score >= 37) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     console.log("Grade:", grade);
//     return grade;
// }

// // swap grades


// function swapgrades(s1,s2){
//    if(s1.grade !== s2.grade){
//     let temp = s1.grade;
//     s1.grade=s2.grade;
//     s2.grade=temp;
//    }
// }

// let s1={name:"nagur",grade:"A"};
// let s2={name:"babu",grade:"B"};


// //Before Swapping
// console.log("Before Swapping:");

// console.log(s1.name,s1.grade);
// console.log(s2.name,s2.grade);

// swapgrades(s1,s2);

// //After swapping
// console.log("After swapping:");

// console.log(s1.name,s1.grade);
// console.log(s2.name,s2.grade);



