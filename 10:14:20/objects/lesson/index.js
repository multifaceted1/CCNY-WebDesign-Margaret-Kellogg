//an object is another datatype

//creating a variable and giving the variable an object value
//name and age are keys, and "Jared" and 33 are values for those keys
var objectOne = {
  name: "Jared",
  age: 33
};

console.log(objectOne);
console.log(objectOne.name);
console.log(objectOne.age);

var objectTwo = {
  name: "Bob",
  age: 32
};

console.log(objectTwo);
console.log(objectTwo.name);
console.log(objectTwo.age);

//adding the objects to an array using push. They are like items, so they belong in the same array
var peopleArray = [];
peopleArray.push(objectOne);
peopleArray.push(objectTwo);
console.log(peopleArray);

//looping through the array of objects and logging the object to the console
for(var i = 0; i < peopleArray.length; i++){
  console.log(peopleArray[i]);
}

var peopleWhoAre33AndAbove = [];
//looping through the people array and writing a conditional to check to see who is 33
//then adding that person object to the peopleWhoAre33AndAbove array
for(var i = 0; i < peopleArray.length; i++){
  if(peopleArray[i].age >= 33){
    peopleWhoAre33AndAbove.push(peopleArray[i])
  }
}

console.log(peopleWhoAre33AndAbove);
