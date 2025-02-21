function Multiplier(multiplier) {
    
    function multiply(number) {
        const result = number * multiplier;
        console.log(result); 
    }

    return multiply; 
}

const A = Multiplier(2); 
const B = Multiplier(3); 
const C = Multiplier(5); 


A(4);   // Output: 8  (2 * 4)
A(10);  // Output: 20 (2 * 10)

B(4);   // Output: 12 (3 * 4)
B(10);  // Output: 30 (3 * 10)

C(4);   // Output: 20 (5 * 4)
C(10);  // Output: 50 (5 * 10)






const Multiplier1 = (multiplier) => (number) => {
    console.log(number * multiplier);
};


const D = Multiplier1(2);
const E = Multiplier1(3);
const F = Multiplier1(5);

D(4);   // Output: 8
D(10);  // Output: 20

E(4);   // Output: 12
E(10);  // Output: 30

F(4);   // Output: 20
F(10);  // Output: 50





