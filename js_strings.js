//replaceAll() , toUpperCase(), substring(), trim(),  match()

//replaceAll() 
//when you want to replace multiple occurrences of a value in a string.

const myString= 'My Dog jumed on the bed. My dog is a bad Dog';
const newString=myString.replaceAll('Dog','Cat');
console.log(newString); // My Cat jumped on the bed.  My dog is a bad Cat.

/* We only replaced the uppercase version of Dog! This is where regular expressions come in handy.
 The replaceAll() method accepts either a string OR a regular expression for its first argument.*/

const correctString = myString.replaceAll(/[Dd]{1}og/g, "cat");
console.log(correctString); // My cat jumped on the bed.  My cat is a bad cat.

//----------------------------------------

//toUpperCase()
//capitalizes every letter in a given string.

const myString1 = "some string";
console.log(myString1.toUpperCase()); // SOME STRING

//----------------------------------------
//substring()
//substr() <-Deprecated ; do not use
// This method is great when you need to isolate a section of a string.

const myString2 = "some string";
//const substr = myString2.substring(5);
const substr = myString2.substring(5,7);
console.log(substr); // string

// Capitalize the first letter of the sentence
const result=myString2[0].toUpperCase()+myString2.substring(1,myString2.length); //Some string
//----------------------------------------

//trim()
//This method will "trim" the whitespace off the ends of a string.

const externalData = [
  {
    title: "How to code      ",
    author: " Zach",
  },
  {
    title: " What is Vim?",
    author: " Zach",
  },
  {
    title: "  How do loops work in JavaScript?    ",
    author: " Zach",
  },
];

for (let i = 0; i < externalData.length; i++) {
    const currentTitle = externalData[i].title;
    const currentAuthor = externalData[i].author;
  
    externalData[i].title = currentTitle.trim();
    externalData[i].author = currentAuthor.trim();
  }
  
  console.log(externalData);

//----------------------------------------

//match()
//The match() method is very similar to the exec() method we talked about with regular expressions
const regex = /[A-Za-z ]+[0-9]+/;

const str = "my favorite food is steak 239042038124";

// Using the exec() method
const result1 = regex.exec(str);

// Using the match() method
const result2 = str.match(regex);

/*
  Both result1 and result2 equal: 

  ["my favorite food is steak 239042038124", index: 0, input: "my favorite food is steak 239042038124", groups: undefined]
*/