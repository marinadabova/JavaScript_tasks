const myDate = new Date();
const year = myDate.getFullYear();

const negNum = -50;
const posNum = Math.abs(negNum);

//Math Library
// Math has some built-in "constants" you can use
Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045

// And some static methods
// Takes absolute value of number
Math.abs(-60); // 60

// Rounds up to nearest integer
Math.ceil(Math.PI); // 4

// Rounds down to the nearest integer
Math.floor(Math.PI); // 3

// Rounds to nearest integer
Math.round(Math.PI); // 3

// Returns smallest/largest number
Math.min(3, 4, 5, 6); // 3
Math.max(3, 4, 5, 6); // 6

// Returns a random number between 0 and 1
Math.random();

// Gives us a random number between 0 and 1
const randomNumber = Math.random();

// By multiplying by 100, we move the decimal over 2 spaces, and now, we have
// a number between 0 and 100 (but it is still a decimal)
const largerNumber = randomNumber * 100;

// By rounding down, we now have a random, whole number from 0-99
const wholeNumber = Math.floor(largerNumber);

// Now let's see how this can be useful
const arr = ["just", "an", "example", "array"];
const lengthOfArr = arr.length; // 4

// Let's combine everything together
// This gives us a random, whole number from 0 - 3, which is the same
// index values we need to access values of our array
const randomIndexForArray = Math.floor(Math.random() * lengthOfArr);

const randomArrValue = arr[randomIndexForArray];