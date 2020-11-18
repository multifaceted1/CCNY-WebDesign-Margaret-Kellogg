/*
  Array Functions:
  - join
  - pop
  - push
  -length
  -indexOf

  String to array:
  - split
*/
var peopleArray = ["Jane", "Judy", "Joe", "Leroy"];
console.log(peopleArray);

//see how many items are in an array using length
console.log(peopleArray.length);

//find the index of an item in the array
console.log(peopleArray.indexOf("Judy"));
console.log(peopleArray.indexOf("Judy") > -1);
//if it is not there, it will return -1 like the string function
console.log(peopleArray.indexOf("Jared"));
console.log(peopleArray.indexOf("Jared") == -1);
//push() adds items to the array
peopleArray.push("Layla");
peopleArray.push("Bobby");
console.log(peopleArray);

//pop() gets the last value in the array and also removes the last value in the array when
//you attempt to use the array later on
console.log(peopleArray.pop());

//join() turns an array into a string, concatanating the values in the array with whatever
//is in between the parentheses, i.e. join(",") will join all of the values in the array with a comma
//and turn it into a string
var peopleArrayString = peopleArray.join(",");
console.log(peopleArrayString);

//to turn a string into an array, use split() with the same argument
console.log(peopleArrayString.split(","));
