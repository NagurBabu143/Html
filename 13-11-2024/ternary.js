//ternary Operations

function Calculate(Score) {
    let grade = Score >= 90 ? 'A' :
                Score >= 80 ? 'B' :
                Score >= 70 ? 'C' :
                Score >= 60 ? 'D' :
                Score >= 37 ? 'E' : 'F';

    console.log("Grade:",grade);
    
}


Calculate(95);  
Calculate(82);
Calculate(71);
Calculate(65);
Calculate(50);
Calculate(30);
Calculate(0);


//if

console.log("\nIf:::::::::::::::")

function Calculate(Score) {
    let grade;
    
    if (Score >= 90) {
        grade = 'A';
    } else if (Score >= 80) {
        grade = 'B';
    } else if (Score >= 70) {
        grade = 'C';
    } else if (Score >= 60) {
        grade = 'D';
    } else if (Score >= 37) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    console.log("Grade:", grade);
    return grade;
}

Calculate(95);  
Calculate(82);
Calculate(71);
Calculate(65);
Calculate(50);
Calculate(30);
Calculate(0);

