//The For In Loop
/* (key in object) {
    // code block to be executed
}
*/
//ex
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

//------------------------------------------
//Array.forEach()
const numbers2 = [45, 4, 9, 16, 25];

let txt2 = "";
numbers2.forEach(myFunction);

function myFunction(value, index, array) {
  txt2 += value;
}
//------------------------------------------
//The For Of Loop
for (variable of iterable) {
    // code block to be executed
}
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}
//Looping over a String

let language = "JavaScript";

let text2 = "";
for (let x of language) {
text2 += x;
}

//The While Loop
while (condition) {
  // code block to be executed
}
//ex
while (i < 10) {
    text += "The number is " + i;
    i++;
}
//Do While

do {
  // code block to be executed
}
while (condition);

//ex
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);
  