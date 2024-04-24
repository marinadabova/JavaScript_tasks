//ReferenceError
const myVariable = 20;
console.log(anotherVariable); // ReferenceError
//JavaScript tries to find a "reference" to anotherVariable in memory, but since we never declared it, it simply doesn't exist!

//SyntaxError
const myObj = {
    prop1: 'some value';
    prop2: 'another value';
  };
//If you try to run this code, you're going to get a SyntaxError that says Unexpected token ';'. That is because instead of ;, you need , in your objects. Here is the correct way:
const myObj = {
    prop1: "some value",
    prop2: "another value",
  };

//TypeError
const myNumber = 50;
const myObject = {
  prop1: "some value",
};

myNumber.toUpperCase(); // TypeError: num.toUpperCase is not a function
myObject.prop1(); // TypeError: myObject.prop1 is not a function

//NaN, null, undefined in JavaScript
//NaN - "Not a Number"
const myString = "some string";
// 1. Trying to coerce a string to a number
Number(myString); // NaN
// 2. Performing an impossible math operation
Math.sqrt(-1); // NaN
// 3. Operand of an argument is NaN
Number(myString) + 20;
// 4. Trying to use an arithmetic operator (other than + ) on a string
myString * 2;

//null
let myVariable2 = null;

if (myVariable2) {
    console.log("this line will not print");
} else {
    console.log("this line will print");
}
//undefined
//represents the absence of a value.
let myString2;
const myObj2 = {};

console.log(myString2); // undefined
console.log(myObj2.someFunction); // undefined

myObj2.someFunction(); // TypeError

// try/catch block for error handling
/* 
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
*/
try{
    const num=20;
    num.toUpperCase();
}catch(err){
    console.log(err instanceof TypeError); // true
    console.log(err.message); // num.toUpperCase is not a function
}