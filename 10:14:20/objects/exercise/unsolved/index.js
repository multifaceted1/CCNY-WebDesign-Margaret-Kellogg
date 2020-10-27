/*
  Looping through the animals array below

  1. log all to the console
  2. log only the fish
  3. log all of the animals names to lowercase
  4. create arrays for each of the different classes of animals, and push the appropriate animals to that array
  5. log only the animals that end in "e"
  6. log only the animals that contain an "o"
*/


  var whale = {
    name: "Whale",
    class: "mammal"
  };

  var bear = {
    name: "Bear",
    class: "mammal"
  };

  var shark = {
    name: "Shark",
    class: "fish"
  };

  var goldfish = {
    name: "Goldfish",
    class: "fish"
  };

  var eagle = {
    name: "Eagle",
    class: "bird"
  };

  var robin = {
    name: "Robin",
    class: "bird"
  };

  var animalArray = [];
  var fishArray = [];
  var lowercaseAnimalArray = [];

  animalArray.push(whale, bear, shark, goldfish, eagle, robin);

  for(var i = 0; i < animalArray.length; i++){
    if(animalArray[i].class == "fish"){
      fishArray.push(animalArray[i])
    }
  };
//I had a lot of problems with this one below.

  for(var i = 0; i < animalArray.length; i++){
    if(animalArray[i] >= -1) {
      lowercaseAnimalArray.push(animalArray[i].toLowerCase)
    }
  };

  console.log(animalArray[i].name.toLowerCase());

  console.log(animalArray);
  console.log(fishArray);
  console.log(lowercaseAnimalArray);
 


