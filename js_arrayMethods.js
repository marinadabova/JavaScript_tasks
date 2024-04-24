/* push() / pop() / shift() / unshift()
slice()
splice()
findIndex() / indexOf()
map()
forEach()
includes()
filter()
reduce()*/

//push, pop, shift, unshift
const arr = [1, 2, 3];

// Add element to end of array
arr.push(4); // New array: [1, 2, 3, 4]

// Add element to beginning of array
arr.unshift(0); // New array: [0, 1, 2, 3, 4];

// Remove last element of array
arr.pop(); // New array: [0, 1, 2, 3]

// Remove first element of array
arr.shift(); // New array: [1, 2, 3]


//slice()
//The arr.slice() method comes in handy when you need to make a copy of an array.
const myArr = ["hello", "my", "summer", "child", "Hello"];

const fullCopy = myArr.slice(); // ["hello", "my", "summer", "child", "Hello"];

const partialCopy = myArr.slice(0, 1); // ["hello", "my"];


//splice()
//If you want to add an element somewhere other than the beginning
// Index                       0  1  2    3     4  5
const somethingDoesntBelong = [1, 2, 3, "oops", 5, 6];

// Start at index 3, delete 1 item, and replace with the number 4
somethingDoesntBelong.splice(3, 1, 4);

console.log(somethingDoesntBelong); // [1, 2, 3, 4, 5, 6]


//findIndex / indexOf
/*the findIndex method accepts a callback function as an argument
 and will find the first element in an array that matches the conditions set in your callback function.

The indexOf method simply searches for the first occurrence of a value in an array 
and is a much simpler method to use. */

const arr2 = ["red", "blue", "green"];

const blueIndex = arr2.indexOf("blue"); // 1
const purpleIndex = arr2.indexOf("purple"); // -1

const moreComplexArr = [
    {
      firstName: "Bob",
      lastName: "Smith",
    },
    {
      firstName: "Alice",
      lastName: "Smith",
    },
    {
      firstName: "Jon",
      lastName: "Smith",
    },
    {
      firstName: "Jon",
      lastName: "Doe",
    },
  ];
  const valueToFind = {
    firstName: "Jon",
    lastName: "Doe",
  };
  
  // DOESNT WORK!!! Returns -1
  const resultIndex = moreComplexArr.indexOf(valueToFind);
//------------------------------------------------------------
  const incorrectIndex = moreComplexArr.indexOf({
    firstName: "Jon",
    lastName: "Doe",
  });
  
  // THIS DOES WORK
  const correctIndex = moreComplexArr.findIndex((arrItem) => {
    return arrItem.lastName === "Doe";
  });
  
  console.log(incorrectIndex); // -1
  console.log(correctIndex); // 3

//map
const blogPostsFromDatabase = [
    {
      title: "How to use the map() function",
      category: "uncategorized",
    },
    {
      title: "What is JavaScript?",
      category: "uncategorized",
    },
    {
      title: "Why are you crazy enough to learn to code?",
      category: "uncategorized",
    },
  ];
blogPostsFromDatabase.map(arrItem => {
    arrItem.category= 'Web Development';
    return arrItem;
});    /* Here is our resultingArray

            [
            {
                title: 'How to use the map() function',
                category: 'Web Development'
            },
            {
                title: 'What is JavaScript?',
                category: 'Web Development'
            },
            {
                title: 'Why are you crazy enough to learn to code?',
                category: 'Web Development'
            },
            ];
*/

//forEach
const arr3 = [1, 2, 3];
let sum = 0;
function myCallbackFunc(arrItem, indexOfItem) {
  sum = sum + arrItem;
}
arr3.forEach(myCallbackFunc);

console.log(sum); // 6

//includes
/*const myColors = ["blue", "red", "purple", "orange", "green"];

let orangeExists = false;

myColors.forEach((color) => {
  if (color === "orange") {
    orangeExists = true;
  }
});*/

console.log(orangeExists); // true
const myColors = ["blue", "red", "purple", "orange", "green"];
let orangeExists = myColors.includes("orange");
console.log(orangeExists); // true

/*
const myColors = ["blue", "red", "purple", "orange", "green"];
let orangeExists = myColors.indexOf("orange") !== -1;
console.log(orangeExists); // true 
*/


//filter
const allOrders = [
    {
      productName: "Tea pot",
      isDigital: false,
      isCancelled: false,
      isOpen: false,
    },
    {
      productName: "Blue Gildan Mens Hoodie",
      isDigital: false,
      isCancelled: true,
      isOpen: false,
    },
    {
      productName: "Code Complete Kindle Book",
      isDigital: true,
      isCancelled: true,
      isOpen: false,
    },
    {
      productName: "Atomic Habits Kindle Book",
      isDigital: true,
      isCancelled: false,
      isOpen: false,
    },
  ];
  const digitalOrders = allOrders.filter((orderItem) => {
    return orderItem.isDigital;
  });
  
  const digitalCancelledOrders = allOrders.filter((orderItem) => {
    return orderItem.isDigital && orderItem.isCancelled;
  });
  
  const physicalOrders = allOrders.filter((orderItem) => {
    return !orderItem.isDigital;
  });

//reduce
const arr4 = [10, 20, 30, 25, 14];
function reducerCallback(sum, currArrItem, currArrIndex) {
  return (sum += currArrItem);
}
// 0 represents the "initial value"
const result = arr4.reduce(reducerCallback, 0);
console.log(result); // 99


//Lodash library