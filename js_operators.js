//arithmetic operators
//+ - * / 
//% ++ -- **
//8**2 =64

//assigment operators
// = += -= *= /=

//comparrison operators
//== ===

const result = 20>18; //true
const result2 = 20 === 20; // true
// a === b ->  are a and b the same
const numberValue=20;
const stringValue="20";
typeof numberValue //number
typeof stringValue //string

stringValue == numberValue; // true -> they are not the same data type but the same value
Number(stringValue); // 20
stringValue == numberValue; //true 

stringValue ===numberValue; //false -> the values are the same but the data types not
Number(stringValue)===numberValue; // true

// == -> does not care about the data types, only if the values are the same
// == -> does care about the data types

//!= !==
//> < >= <=

//comparison of arrays and objects

const myArray=[1,2,3,4,5];
const anotherArray=[1,2,3,4,5];
myArray===anotherArray; //false 
myArray==anotherArray; //false 

const myObj={
    property1: 'some value',
    property2: 20
};
const anotherObj={
    property1: 'some value',
    property2: 20
};
myObj===anotherObj; // false
myObj==anotherObj; // false


//ternary operator
const result3 = 20 === 20 ? 'values match' : 'values do not match';


//logical operators
//&&
20 === 20 && 10 === 10 // true
20 === 20 && 10 === 12 // false

// ||
20 === 20 || 10 === 12 // true
20 === 18 || 10 === 12 // false

// !
!(20 === 20) // false

//
const resultf = (() => {
    return 20;
})(); //immediately invoked function
//resultf is equal to wathever the function return
//resultf =20