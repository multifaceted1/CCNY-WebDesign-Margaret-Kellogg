var num1 = 5;
var num2 = 10;
var num3 = 5;

// > means greater than
// < means less than
// >= means greater than or equal to
// <= means less than or equal to
var logicOne = (num1 < num2);
var logicTwo = (num1 > num2);
var logicThree = (num3 > num1);
var logicFour = (num3 >= num1);

console.log("logicOne: " + logicOne);
console.log("logicTwo: " + logicTwo);
console.log("logicThree: " + logicThree);
console.log("logicFour: " + logicFour);

var string1 = '5';

//== means it equals in value, not in datatype
var logicFive = (string1 == num1);

//=== means it equals in value and in datatype
var logicSix = (string1 === num1);

console.log("logicFive: " + logicFive);
console.log("logicSix: " + logicSix);
