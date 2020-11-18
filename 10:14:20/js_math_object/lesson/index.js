// Returning Minimum and Maximum number in a set of numbers
var minNum = Math.min(0, 150, 30, 20, -8, -200);
console.log(minNum);
var maxNum = Math.max(0, 150, 30, 20, -8, -200);
console.log(maxNum);

// Rounding numbers up and down
var roundedUp = Math.ceil(4.4);
console.log(roundedUp);
var roundedDown = Math.floor(4.7);
console.log(roundedDown);

// Rounding to nearest integer;
var rounding = Math.round(4.7);
console.log(rounding);

// Return a randon number
var randomNum = Math.random();
console.log(randomNum);

// Logic with Math
var randumNumberOutOfNine = Math.floor(Math.random() * 10);
console.log(randumNumberOutOfNine);

// Getting random index in an array
var lettersArray = ['a', 'b', 'c'];
var randomNumberBasedOnArrayLength = Math.floor(Math.random() * lettersArray.length);
console.log(randomNumberBasedOnArrayLength);
var randomIndexInArray = lettersArray[randomNumberBasedOnArrayLength];
console.log(randomIndexInArray);
