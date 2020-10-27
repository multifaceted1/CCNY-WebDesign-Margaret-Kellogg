var num1 = 10;
var num2 = 20;
var num3 = 10;

var string1 = "20";

// and condition

if(num1 < num2 && num2 > num1){
  console.log("then the and condition equates to true");
} else {
  console.log("then the and condition equates to false");
}

if(num1 > num2 && num1 == num3){
  console.log("then the and condition equates to true");
} else {
  console.log("then the and condition equates to false");
}

// or condition

if(num1 < num2 || num2 < num1){
  console.log("then the or statement equates to true");
} else {
  console.log("then the or statement equates to false");
}

if(num1 == num2 || num1 > num2){
  console.log("then the or statement equates to true");
} else {
  console.log("then the or statement equates to false");
}

// not condition

if(num1 != num2){
  console.log("then the not condition equates to true")
} else {
  console.log("then the not condition equates to false")
}

if(num1 != num3){
  console.log("then the not condition equates to true")
} else {
  console.log("then the not condition equates to false")
}

if(num2 !== string1){
  console.log("then the not condition equates to true")
} else {
  console.log("then the not condition equates to false")
}
