//RegExp -object used for matching text with a pattern

const emailValidatorRegex= new RegExp('^.+@.+\..+$');
const userInput='invalidemail@g';
const isValid=emailValidatorRegex.test(userInput);

/* 
Using regular expressions in JavaScript
Regular expressions are used with the RegExp methods test() and exec() and with the String methods match(), matchAll(), replace(), replaceAll(), search(), and split().
*/


   /*   Method	Description
exec()	Executes a search for a match in a string. It returns an array of information or null on a mismatch.
test()	Tests for a match in a string. It returns true or false.
match()	Returns an array containing all of the matches, including capturing groups, or null if no match is found.
matchAll()	Returns an iterator containing all of the matches, including capturing groups.
search()	Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
replace()	Executes a search for a match in a string, and replaces the matched substring with a replacement substring.
replaceAll()	Executes a search for all matches in a string, and replaces the matched substrings with a replacement substring.
split()	Uses a regular expression or a fixed string to break a string into an array of substrings. */


/*When you want to know whether a pattern is found in a string, 
use the test() or search() methods; for more information 
(but slower execution) use the exec() or match() methods.
 If you use exec() or match() and if the match succeeds, 
 these methods return an array and update properties of 
 the associated regular expression object and also of
  the predefined regular expression object, RegExp.
   If the match fails, the exec() method returns null 
   (which coerces to false). */

const regex = new RegExp("g");

const string1 = "my favorite food is steak";
const string2 = "my favorite thing to do is code";

console.log(regex.test(string1)); // false
console.log(regex.test(string2)); // true
/[a-z]/.test(string1);

/*Another way to write a regular expression
So far, we have written them like this:
*/
const regex2 = new RegExp("[A-Za-z ]+[0-9]+");
//You can also write them like this:

const regex3 = /[A-Za-z ]+[0-9]+/;


/*[A-Z] - Match all uppercase letters
[a-z] - Match all lowercase letters
[0-9] - Match all numbers
[A-Za-z0-9] - Match all letters and numbers
. - Match any character (wildcard)
\d - Match all numbers (another way to write [0-9])
\s - Match any white space character
\w - Match all letters and numbers (another way to write [A-Za-z0-9])
^ - Indicates the start of a line
$ - Indicates the end of a line
(dog|cat) - Matches "dog" OR "cat" */


/*Quantifiers
Here are the quantifiers.

* - Matches 0 or more of the preceding character
+ - Matches 1 or more of the preceding character
? - Matches 0 or 1 of the preceding character
{1} - Matches exactly 1 of the preceding character
{1,} - Matches 1 or more of the preceding character (identical to +)
{2,6} - Matches between 2 and 6 of the preceding character */