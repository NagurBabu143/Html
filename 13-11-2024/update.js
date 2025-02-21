//Updategrade
function Calculate(Score){
    let grade = Score  >= 90 ? 'A':
                Score >= 80 ? 'B':
                Score >= 70 ? 'C':
                Score >=  60 ? 'D':
                Score >= 37 ? 'E':'F';
    console.log("Grade:",grade);
    return grade;
}

function updategrade(s){
    s.grade=Calculate(s.Score);
}

let s={name:"nagur",Score:55, grade:"A"}

//Before Update:

console.log("\nBefore Update:");
console.log(s.name,s.Score,s.grade);


updategrade(s);

//After Update:

console.log("\nAfter Update:")
console.log(s.name,s.Score,s.grade);





// //if:::::::::::::::::

// console.log("\n If:::::::::::");

// function Calculate(Score){
//     let grade = Score  >= 90 ? 'A':
//                 Score >= 80 ? 'B':
//                 Score >= 70 ? 'C':
//                 Score <=  60 ? 'D':
//                 Score >= 37 ? 'E':'F';
//     console.log("Grade:",grade);
//     return grade;
// }


// function updategrade(s) {
//     if (s.Score >= 0 && s.Score <= 100) {  
//         s.grade = Calculate(s.Score);
//     } else {
//         console.log("Invalid Score. Grade update failed.");
//     }
// }

// let s = { name: "nagur", Score: 55, grade: "A" };

// // Before Update:
// console.log("\nBefore Update:");
// console.log(s.name, s.Score, s.grade);

// updategrade(s);

// // After Update:
// console.log("\nAfter Update:");
// console.log(s.name, s.Score, s.grade);