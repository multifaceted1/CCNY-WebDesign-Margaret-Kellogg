var num1 = 5;
var num2 = 10;

if(num1 < num2){
	var promptThis = prompt("why is 5 less than 10");
  console.log(promptThis);
} else {
	console.log("i think 5 is greater than 10")
}

if(num1 <= 4){
	console.log("5 is less than or equal to 4? huh?")
} else {
	console.log("yes, of course its false")
}

if(num1 > num2) {
  console.log("You'll never see this because 5 is not greater than 10");
} else if(num1 === num1) {
  console.log("Yes, 5 really is equal to 5, so this will show up in the console")
} else {
  console.log("We won't get here because our else if evaluates to true");
}
