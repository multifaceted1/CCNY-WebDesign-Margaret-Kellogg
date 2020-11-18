//Array is another datatype
//It is meant to be a set of similar objects
//This example will

//storing an array in a variable named basketballTeams, and filling the array with basketball teams
var basketballTeams = ["bulls", "hawks", "rockets", "knicks", "celtics", "warriors", "hornets", "cavs", "spurs", "heat"];
var basketballTeamsWithRs = [];

console.log(basketballTeams)
console.log(basketballTeams.length)
//access items in array
//starts with 0 index i.e. basketballTeams[0] === ?
//you can access items just like this below
console.log(basketballTeams[0]);
console.log(basketballTeams[3]);

//however, if you want to access all the items in the array and do checks, you loop
//start with for
//define var i, which starts at 0, meaning it is starting at the beginning of the array
//i < basketballTeams.length, meaning how long I want the loop to go before stopping
//i++, to keep incrementing i until it goes from 0 to basketballTeams.length
for(var i = 0; i < basketballTeams.length; i++){
	console.log(basketballTeams[i])
}

//this here is looping through the whole array object
//and then we are writing an if statement on every item in that array, checking to
//see that each item passes the conditional statement
for(var i = 0; i < basketballTeams.length; i++){
	if(basketballTeams[i].indexOf("rs") > -1){
		//you see that we instantiated this array above, its empty
		//"push" is function that is built on an array to add an item to the array
		//here, if the basketball team contains the string "rs", then add it to that array
		basketballTeamsWithRs.push(basketballTeams[i])
	}
}

//this is the array created of items that passed the conditional statement before
//we pushed any items that passed that conditional into that array
console.log(basketballTeamsWithRs);

//Here i am looping through the array and logging each string with the first character as toUpperCase
for(var i = 0; i < basketballTeams.length; i++){
	console.log(basketballTeams[i][0].toUpperCase() + basketballTeams[i].substring(1, basketballTeams[i].length))
}
