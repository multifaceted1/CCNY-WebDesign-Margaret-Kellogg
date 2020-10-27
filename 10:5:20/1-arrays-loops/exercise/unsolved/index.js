/*

  Using the farmAnimals array
    1. Log all of the strings in the array using a loop
    2. Log the last item in the array without looping
    3. Log only the animals that begin with the letter "C"
    4. Log only the animals that do not have an "e" in the string
    5. Log all of the string to uppercase using a loop
    6. Log all of the animals that end in the letter "n"
*/

var farmAnimals = ["Cow", "Sheep", "Chicken", "Rooster", "Horse", "Hen"];

for(var i = 0; i < farmAnimals.length; i++){
  console.log(farmAnimals[i])
};

console.log(farmAnimals[5]);

var AnimalsWithC = []
var AnimalsWithoutE = []
var UpperCaseAnimals = []
var EndingInN = []


for(var i = 0; i < farmAnimals.length; i++) {
  if(farmAnimals[i].charAt(0).indexOf("C") > -1) {
    AnimalsWithC.push(farmAnimals[i])
  }
}
console.log(AnimalsWithC);

for(var i = 0; i < farmAnimals.length; i++) {
  if(farmAnimals[i].indexOf("e") == -1){
    AnimalsWithoutE.push(farmAnimals[i])
  }
}
console.log(AnimalsWithoutE); 

for(var i = 0; i < farmAnimals.length; i++) {
  UpperCaseAnimals.push(farmAnimals[i].toUpperCase(0,5))
};
console.log(UpperCaseAnimals)

for(var i = 0; i < farmAnimals.length; i++) {
  if(farmAnimals[i].charAt(farmAnimals[i].length - 1) === ("n")) {
    EndingInN.push(farmAnimals[i])
  }
}
console.log(EndingInN)