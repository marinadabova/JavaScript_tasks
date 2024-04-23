// Basic function syntax
function myFunction(){
    console.log('Hello world');
}
typeof myFunction; //function

myFunction(); // calling a function


// Immediately invoked functions
// not used often

(function anotherFunc(){
    console.log('hello');
})(); 
// this function is declared and executed at the same time

//Parameters and arguments
function myParamFunc(param1, param2){
    console.log(param1);
    console.log(param2);
}
myParamFunc(20,'some string');

//Anonymous functions
//the function does not have a name
//the function is assigned to a variable and therefore given a name
const anotherFuncion=function(){
    console.log('another func');
}
typeof anotherFuncion; //function
anotherFuncion(); 

//Fat arrow functions

const arrowFunc = () => {
    console.log('I am arrow function');
}
arrowFunc();

/*basic syntax 
variable = (params) => {
 ..
}
it cannot work alone; 
it should be assigned to a variable
*/

//Return variables
const myFunction = ()=>{
    console.log('smth');
}
const result=myFunction();
result; //undefined because function does not return anything

const returnFunc = ()=>{
    const a=20;
    return 20;
}
const res=returnFunc();
res; //20

const returnFunc2 = ()=>{
    const a=20;
    return a<30;
}
const res2=2();
res2; //true


// global scopes and functions
const myNumber=20;
const func3 = () => {
    if(myNumber < 15){
        return 'returned the function early';
    }
    return 40;
}

//Objects methods
function funcTestObj(){
    return 20;
}
const aliasVar=funcTestObj;
aliasVar(); //20
const myObj={
    prop1: 50,
    prop2: funcTestObj
}
myObj.prop2(); //20


//JS built-in functions
//https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm
//replace()

const myStr='marins';
myStr.replace('s','a'); 
myStr //marina
//or
const newName=myStr.replace('s','a');
newName; // marina

let str='hello world';
const resultv=str.toUpperCase().split(" ");// this is array
resultv.indexOf("WORLD"); //1
