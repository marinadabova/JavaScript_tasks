const now=new Date();
now; //now

now.toString();// Thu Jan 14 2021 10:53:26 GMT-0500 (Eastern Standard Time)
now.toISOString();// 2021-01-14T15:53:26.819Z
now.getDate(); // Returns 14 because I'm writing this on Jan 14, 2021
now.getMonth(); // Returns 0 because the month method is zero-indexed (i.e. Jan = 0, Feb = 1)
now.getFullYear(); // Returns 2021

// EXAMPLE #1
// Inputs as arguments
// Date(year, month, day, hour, minute, second, millisecond)
// Note: the month is 0-indexed
new Date(2020, 11, 2, 7, 10);
// EXAMPLE #2
// Inputs as various strings
new Date("Jan 20 2020");
new Date("January 20 2020");
new Date("Jan-20-2020");
new Date("Jan 20 2020 02:20:10");
// EXAMPLE #3
// Inputs as numbers (milliseconds)
new Date(102031203);
// EXAMPLE #4
// Inputs as ISO 8601 
new Date("2020-01-20T00:00Z");
// EXAMPLE #5
// Inputs with timezone specifications
new Date("Jan 20 2020 02:20:10 -10:00"); // SPECIAL CASE
new Date("Jan 20 2020 02:20:10 -1000"); // SPECIAL CASE
new Date("Jan 20 2020 02:20:10 (EDT)"); // SPECIAL CASE
// EXAMPLE #6
// The current moment, specified in the user's local timezone
new Date(Date.now()); // SPECIAL CASE