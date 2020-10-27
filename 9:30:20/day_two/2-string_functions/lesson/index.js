var testString = "HelloHello";

// This will show the full length of the string
console.log(testString.length);

// This will show the position of a letter in the string.
// The index of every string starts at 0
// Here, the index of the first "H" would be 0 and the index of the 2nd "H" is 5
console.log(testString.indexOf("H"));
// if the letter is not in the string, it will return -1
console.log(testString.indexOf("a"));

//this will return the last time the argument shows up in that String
//the argument in this case being "Hello"
console.log(testString.lastIndexOf("Hello"));

//substring takes out a portion of a string from the index positions that you indicate
console.log(testString.substring(0,5))

//or slice can do from the referenced index until the end of the string
console.log(testString.slice(5))

//replace does what exactly what it says, replaces the string in the left with the string in the right
//using replace will replace only the first instance of that String
//using replaceAll will replace all instances of that String
console.log(testString.replace("Hello", "Goodbye"))
console.log(testString.replaceAll("Hello", "Goodbye"))

//To uppercase brings the whole string to uppercase
console.log(testString.toUpperCase());

//To lowercase brings the whole string to lowercase
console.log(testString.toLowerCase());

var anotherTestString = "GoodbyeGoodbye";

//Concat combines two strings together
console.log(testString.concat(anotherTestString));

//CharAt returns the character at a specific index
console.log(testString.charAt(0));
