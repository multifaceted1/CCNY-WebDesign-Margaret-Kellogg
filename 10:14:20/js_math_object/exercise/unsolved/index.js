/*

  Guess random numbers
  1. Using the JS Math Object, Create 4 variables that generate a random number out of 100
  2. Create a prompt to guess one of those four numbers
  3. If you guess one of the numbers correctly, alert that you won.
  4. If you dont guess any of the numbers correctly, do nothing.

  Guess random animal
  1. create an array with at least 5 animals
  2. Using the JS Math Object, generate a random index out of that array
  3. create a prompt to guess which animal gets selected randomly
  4. If you guess the random animal correctly, alert that you won.
  5. If you dont guess the random animal correctly, do nothing.


*/
//1 Guess Ramdom Numbers
var randomNumOne = Math.floor(Math.random() * 101);
var randomNumTwo = Math.floor(Math.random() * 101);
var randomNumThree = Math.floor(Math.random() * 101);
var randomNumFour = Math.floor(Math.random() * 101);

var numberGuess = prompt("Please enter a number from 1 to 100.")
var numberGuessToInteger = parseInt(numberGuess);


if(numberGuess == randomNumOne || numberGuess == randomNumTwo || numberGuess == randomNumThree || numberGuess == randomNumFour) {
  alert("You guessed the number correctly!")
}
console.log(randomNumOne + " " + randomNumTwo + " " + randomNumThree + " " + randomNumFour);

//Guess random animal
var animalArray = ['cow', 'horse', 'unicorn', 'penguin', 'tortise'];
//see random index in array.
var randomNumberBasedOnArrayLength = Math.floor(Math.random() * animalArray.length);
console.log(randomNumberBasedOnArrayLength);
var randomIndexInArray = animalArray[randomNumberBasedOnArrayLength];
console.log(randomIndexInArray);
var animalGuess = prompt("Guess an animal in the array.");
if(animalGuess == randomIndexInArray) {
  alert("Good guess! You picked the right animal!")
}
