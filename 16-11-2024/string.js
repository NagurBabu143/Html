// charAt(index)
console.log("\ncharAt:::::");

let charStr1 = "Hello";
console.log(charStr1.charAt(0)); // 'H'
console.log(charStr1.charAt(4)); // 'o'
console.log(charStr1.charAt(10)); // '' (empty string)
let charStr2 = "JavaScript";
console.log(charStr2.charAt(5)); // 'S'
let charStr3 = "";
console.log(charStr3.charAt(0)); // '' (empty string)




// concat(str1, str2, ...)
console.log("\n concat::::::::");


let concatStr1 = "Hello";
console.log(concatStr1.concat(" ", "World!")); // 'Hello World!'
let concatStr2 = "Good";
console.log(concatStr2.concat(" Morning")); // 'Good Morning'
let concatStr3 = "foo";
console.log(concatStr3.concat("bar", "baz")); // 'foobarbaz'
let concatStr4 = "Concat";
console.log(concatStr4.concat(" with ", "method")); // 'Concat with method'
let concatStr5 = "";
console.log(concatStr5.concat("Just", "Testing")); // 'JustTesting'



// includes(substring, start)
console.log("\nincludes:::");

let includeStr1 = "JavaScript";
console.log(includeStr1.includes("Script")); // true
let includeStr2 = "TypeScript";
console.log(includeStr2.includes("Java")); // false
let includeStr3 = "Hello World";
console.log(includeStr3.includes("o", 5)); // true
let includeStr4 = "abc";
console.log(includeStr4.includes("d")); // false
let includeStr5 = "testing123";
console.log(includeStr5.includes("123")); // true




// indexOf(substring, start)

console.log("\nindexOf:::");


let indexStr1 = "banana";
console.log(indexStr1.indexOf("a")); // 1
console.log(indexStr1.indexOf("na")); // 2

let indexStr2 = "apple pie";
console.log(indexStr2.indexOf("pie")); // 6
let indexStr3 = "multiple words";
console.log(indexStr3.indexOf("words")); // 9






// lastIndexOf(substring, start)

console.log("\nlastIndexOf::::");


let lastIndexStr1 = "banana";
console.log(lastIndexStr1.lastIndexOf("a")); // 5
console.log(lastIndexStr1.lastIndexOf("na")); // 4

let lastIndexStr2 = "apple pie";
console.log(lastIndexStr2.lastIndexOf("p")); // 2
let lastIndexStr3 = "mississippi";
console.log(lastIndexStr3.lastIndexOf("s")); // 6






// repeat(count)
console.log("\nrepeat::");


let repeatStr1 = "abc";
console.log(repeatStr1.repeat(3)); // 'abcabcabc'
let repeatStr2 = "ha";
console.log(repeatStr2.repeat(5)); // 'hahahahaha'
let repeatStr3 = "*";
console.log(repeatStr3.repeat(10)); // '**********'
let repeatStr4 = "-";
console.log(repeatStr4.repeat(0)); // '' (empty string)
let repeatStr5 = "repeat";
console.log(repeatStr5.repeat(2)); // 'repeatrepeat'





// replace(searchValue, newValue)

console.log("\nreplace:::");


let replaceStr1 = "hello world";
console.log(replaceStr1.replace("world", "there")); // 'hello there'
let replaceStr2 = "javascript";
console.log(replaceStr2.replace("java", "type")); // 'typescript'
let replaceStr3 = "aaaa";
console.log(replaceStr3.replace("a", "b")); // 'baaa'
let replaceStr4 = "mississippi";
console.log(replaceStr4.replace("iss", "oss")); // 'mossissippi'
let replaceStr5 = "good morning";
console.log(replaceStr5.replace("morning", "night")); // 'good night'




// replaceAll(searchValue, newValue)

console.log("\nreplaceAll:::");


let replaceAllStr1 = "aabbcc";
console.log(replaceAllStr1.replaceAll("b", "x")); // 'aaxxcc'
let replaceAllStr2 = "111222";
console.log(replaceAllStr2.replaceAll("1", "3")); // '333222'
let replaceAllStr3 = "apple apple apple";
console.log(replaceAllStr3.replaceAll("apple", "orange")); // 'orange orange orange'
let replaceAllStr4 = "hello hello";
console.log(replaceAllStr4.replaceAll("hello", "hi")); // 'hi hi'
let replaceAllStr5 = "repeat repeat repeat";
console.log(replaceAllStr5.replaceAll("repeat", "done")); // 'done done done'







// split(separator, limit)

console.log("\nsplit::");


let splitStr1 = "a,b,c";
console.log(splitStr1.split(",")); // ['a', 'b', 'c']
let splitStr2 = "hello world";
console.log(splitStr2.split(" ")); // ['hello', 'world']
let splitStr3 = "apple";
console.log(splitStr3.split("")); // ['a', 'p', 'p', 'l', 'e']
let splitStr4 = "one:two:three";
console.log(splitStr4.split(":", 2)); // ['one', 'two']
let splitStr5 = "no separator";
console.log(splitStr5.split()); // ['no separator']




// toLowerCase()
console.log("\ntoLowerCase::::");
let lowerStr1 = "ABC";
console.log(lowerStr1.toLowerCase()); // 'abc'
let lowerStr2 = "HeLLo";
console.log(lowerStr2.toLowerCase()); // 'hello'
let lowerStr3 = "123";
console.log(lowerStr3.toLowerCase()); // '123'
let lowerStr4 = "MixedCASE";
console.log(lowerStr4.toLowerCase()); // 'mixedcase'
let lowerStr5 = "LOWER already";
console.log(lowerStr5.toLowerCase()); // 'lower already'




// toUpperCase()

console.log("\ntoUpperCase::::");
let upperStr1 = "abc";
console.log(upperStr1.toUpperCase()); // 'ABC'
let upperStr2 = "hello";
console.log(upperStr2.toUpperCase()); // 'HELLO'
let upperStr3 = "123";
console.log(upperStr3.toUpperCase()); // '123'
let upperStr4 = "mixedCASE";
console.log(upperStr4.toUpperCase()); // 'MIXEDCASE'
let upperStr5 = "uppercase already";
console.log(upperStr5.toUpperCase()); // 'UPPERCASE ALREADY'


// valueOf()
console.log("\nvalueOf:::");


let valueStr1 = new String("hello");
console.log(valueStr1.valueOf()); // 'hello'
let valueStr2 = new String("JavaScript");
console.log(valueStr2.valueOf()); // 'JavaScript'
let valueStr3 = new String("");
console.log(valueStr3.valueOf()); // ''
let valueStr4 = new String("Test");
console.log(valueStr4.valueOf()); // 'Test'
let valueStr5 = new String("123");
console.log(valueStr5.valueOf()); // '123'





// toString()
console.log("\ntoString:::");

let toStringNum = 123;
console.log(toStringNum.toString()); // '123'
let toStringBool = true;
console.log(toStringBool.toString()); // 'true'
let toStringArr = [1, 2, 3];
console.log(toStringArr.toString()); // '1,2,3'
let toStringObj = { key: "value" };
console.log(toStringObj.toString()); // '[object Object]'


//

console.log("\nreverse:::");

let text = "rugan";  
let reversed = text.split('').reverse().join('');  

console.log(reversed);  // Output: "nagur"


let text1 = "hsif";  
let reversed1 = "";  

for (let i = text1.length - 1; i >= 0; i--) {  
    reversed1 += text1[i]; 
}

console.log(reversed1);  // Output: "fish"


let text2 = "dog";  //
let reversed2 = text2[2] + text2[1] + text2[0];  

console.log(reversed2);  // Output: "god"
