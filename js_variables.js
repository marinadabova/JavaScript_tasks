const var1 = 10;
let var2 = 10;
var var3 = 10;


//const vs let vs var
/*

var - old version; not used anymore because it can be redeclared
const - constant variable; when we do not want it to change
let - when we want to reasigned variable
*/
let counter=0;
counter++; //1

const counter2=0;
counter2++; // error

typeof variable1; // show the type of variable
const num1='10'; // typeof -> string
const num2=20; // typeof -> number
num1 + num2; //concatenation -> "1020"
Number(num1)+num2; //-> 30

//string data type
const stringValue='hello world';
const anotherStringValue="hello world";
/*working the same way 
 ' ' -> better?
*/

//number data type
const numberValue=20;
const numberValue2=20.000; // not 20,000

//boolean data type
const booleanValue=false;

//array data type
const firstArray=[10,20,30,40];
const secondArray=[10, 'a string', {prop: 'slkdfsl'}, [1,2]];

console.log(firstArray[0]); //10
console.log(secondArray[3][0]); //1

//object data type
const objectVariable = { prop1: 20, prop2: 50}; //Object{ prop1: 20, prop2: 50}
                        //key: value
objectVariable[0]; //error
//but
objectVariable['prop1']; //20
//another way
objectVariable.prop1; //20

//nested objects
const nesetedObject={
    layer1:{
        layer2:{
            layer3:{
                targetValue: 20
            }
        }
    }
}
nesetedObject.layer1.layer2.layer3.targetValue; //20

//functions

const functionContainerVariable = function(){
    return 20;
}
functionContainerVariable(); // 20