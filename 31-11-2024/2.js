// parseInt()
let numString1 = '123abc';
let parsedInt1 = parseInt(numString1, 10);
console.log(parsedInt1);  // Output: 123

let numString2 = '45.67xyz';
let parsedInt2 = parseInt(numString2, 10);
console.log(parsedInt2);  // Output: 45

let numString3 = '00123';
let parsedInt3 = parseInt(numString3, 10);
console.log(parsedInt3);  // Output: 123

// parseFloat()
let floatString1 = '123.45abc';
let parsedFloat1 = parseFloat(floatString1);
console.log(parsedFloat1);  // Output: 123.45

let floatString2 = '67.89xyz';
let parsedFloat2 = parseFloat(floatString2);
console.log(parsedFloat2);  // Output: 67.89

let floatString3 = '100.12345more';
let parsedFloat3 = parseFloat(floatString3);
console.log(parsedFloat3);  // Output: 100.12345

// Number()
let String1 = '123.45';
let number11 = Number(String1);
console.log(number11);  // Output: 123.45

let String2 = '0.99';
let number22 = Number(String2);
console.log(number22);  // Output: 0.99

let String3 = 'Infinity';
let number33 = Number(String3);
console.log(number33);  // Output: Infinity

// toString()
let num1 = 123;
let string1 = num1.toString();
console.log(string1);  // Output: '123'

let num2 = 456.789;
let string2 = num2.toString();
console.log(string2);  // Output: '456.789'

let num3 = 0;
let string3 = num3.toString();
console.log(string3);  // Output: '0'

// Boolean()
let truthy1 = 1;
let boolean1 = Boolean(truthy1);
console.log(boolean1);  // Output: true

let truthy2 = 'Hello';
let boolean2 = Boolean(truthy2);
console.log(boolean2);  // Output: true

let falsy1 = 0;
let boolean3 = Boolean(falsy1);
console.log(boolean3);  // Output: false

// String()
let number1 = 123;
let stringConversion1 = String(number1);
console.log(stringConversion1);  // Output: '123'

let number2 = 45.67;
let stringConversion2 = String(number2);
console.log(stringConversion2);  // Output: '45.67'

let number3 = NaN;
let stringConversion3 = String(number3);
console.log(stringConversion3);  // Output: 'NaN'

// isNaN()
let invalid1 = 'abc';
let isNotANumber1 = isNaN(invalid1);
console.log(isNotANumber1);  // Output: true

let invalid2 = '123abc';
let isNotANumber2 = isNaN(invalid2);
console.log(isNotANumber2);  // Output: true

let valid = 123;
let isNotANumber3 = isNaN(valid);
console.log(isNotANumber3);  // Output: false

// toFixed()
let decimal1 = 123.4569999;
let fixed1 = decimal1.toFixed(2);
console.log(fixed1);  // Output: '123.46'

let decimal2 = 0.123456;
let fixed2 = decimal2.toFixed(3);
console.log(fixed2);  // Output: '0.123'

let decimal3 = 987.654321;
let fixed3 = decimal3.toFixed(1);
console.log(fixed3);  // Output: '987.7'
