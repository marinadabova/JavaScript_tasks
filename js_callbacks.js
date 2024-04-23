//JavaScript Callbacks
/* 
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished*/

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

  /* In the example above, myDisplayer is a called a callback function.
It is passed to myCalculator() as an argument.
Note
When you pass a function as an argument, remember not to use parenthesis.
Right: myCalculator(5, 5, myDisplayer);
Wrong: myCalculator(5, 5, myDisplayer());
*/


// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.getElementById("demo").innerHTML = posNumbers;

// Keep only positive numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}

/* In the example above, (x) => x >= 0 is a callback function.
It is passed to removeNeg() as an argument.*/

//why we need them
//reusability
//asynchronous functions

//JavaScript Array map()
//array.map(function(currentValue, index, arr), thisValue)

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;          //650,440,120,40
} 
/* map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.*/