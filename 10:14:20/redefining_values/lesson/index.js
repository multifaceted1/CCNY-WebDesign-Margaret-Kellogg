//re-defining variable values, array values, and object values

/*
  re-defining variable values;
*/
var num1 = 10;
var num2 = 20;
var num3 = null;

console.log(num1);
console.log(num3);

if(num1 < num2){
  //assigning a new value to the variables num1 & num3
  num1 = 25;
  num3 = 10;
}

//variable values after value is reassigned
console.log(num1);
console.log(num3);


/*
  re-defining array values;
*/
var names = ["jared", "john", "joe", "jim"];

//names array before assigning new values to indexes
console.log(names);

for(var i = 0; i < names.length; i++){
  names[i] = names[i] + "'s";
}

//if you know the index of the item in the array that needs a value change, you can do this
//re-assigning the value of the first item in the names array
names[0] = "jackie"
console.log(names);

//re-assigning the value of the fourth item in the names array
names[3] = "jill"
console.log(names);

//names array after assigning new values to indexes
console.log(names);

for(var i = 0; i < names.length; i++){
  if(names[i] == "joe's"){
    names[i] = "joseph's"
  }
}

//names array after re-assigning only certain values
console.log(names);


var anotherNum = 10;
var stringOne = "Jar";
var stringTwo = "ed";
/*
  += is for both integers and strings
*/
console.log(anotherNum += 10);
//same as: var num = anotherNum = 10;

stringOne += stringTwo;
console.log(stringOne);
//same as: var myName = stringOne + stringTwo;

/*
  ++ is only for integers
*/
anotherNum++;
console.log(anotherNum);
//same as: var num = anotherNum + 1;

/*
  -- is only for integers
*/
anotherNum--;
console.log(anotherNum);
//same as: var num = anotherNum - 1;

/*
  re-defining object values;
*/
var jumpingSpider = {
  name: "Jumping Spider",
  class: "mammal"
};
//initial value of object
console.log(jumpingSpider);

//object values after class type changed
jumpingSpider.class = "arachnid";
console.log(jumpingSpider);

//object values after adding a key/property
jumpingSpider.family = "Salticidae";
console.log(jumpingSpider);
