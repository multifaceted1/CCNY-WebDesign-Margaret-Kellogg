/*
	- Create an object array out of some of your favorite tv shows, at least 3
		- Give the object showName, yearsRun, and premise properties and provide the values of those for each of the tv shows
	- Create buttons for each of the shows in the object array
		- Give each button a text of the tv show name
		- Give each button a data value of the tv show name, setting it with jquery data
		- Append all buttons to the dom
	- When any button is clicked on
		- It will clear out any previous html in the explanations-div
		- It will display which show was clicked on in the explanations-div
		- It will display the years that the show ran in the explanations-div
		- It will display the premise of the show in the explanations-div
*/
var button = '<button id="spaced">Spaced</button><button id="muppet">The Muppet Show</button><button id="simpsons">The Simpsons</button>'

	$("#append-to-me").append(button)
	var spaced = $("#spaced");
	var muppet = $("#muppet");
	var simpsons = $("#simpsons");
	
var favoriteTV = [
	{
		showName: "Spaced",
		showYears: "1999 and 2001",
		explainations: "Did you ever see Spaced?  Well check it out!  Its on Hulu! Simon Peg wrote and acted in this  with the incredibly talented, yet underappreciated Jessica Stevenson (AKA: Tallulah Jessica Elina Hynes).  Just a mountain of hilarity.  Seriously, check it out!  I won’t even tell you a little bit of the plot.  No spoilers!",
	},{
		showName: "The Muppet Show",
		showYears: "1976-1981",
		explainations: "My favorite childhood show in a world where T.V. seemed a little too normal.  Characters like Gonzo and the Swedish chef spoke to my wacky side.  I couldn't be bothered with most violent cartoons, but this was funny without anyone getting an anvil on the head.",
		
	},{
		showName: "The Simpsons",
		showYears: "1989-Present!",
		explainations: "The Simpsons has been on air since 1989! The world loves light satire that pokes fun at every aspect of life. That's why it's been so successful. The characters are not typical of family sitcoms, where everyone gets along perfectly, but instead are flawed yet loveable. It stays family friendly enough for everyone to watch together.  Sometimes the plot of The Simpsons matches up eerily with world events.  Perhaps the writers are up on the latest scientific discoveries, or maybe they have a time machine!",
		
	}
]
spaced.data("spacedName", favoriteTV[0].showName);
spaced.data("spacedYears", favoriteTV[0].showYears);
spaced.data("spaceExplaination", favoriteTV[0].explainations);
	
	console.log($(spaced).data("spacedName"));

spaced.click(function(){
	console.log("ok");
	$("#tvshow-h3").empty();
	$("#tvshow-h3").append("Spaced!");
	$("#explanations-div").empty();
	$("#explanations-div").text(favoriteTV[0].showName + ": " + favoriteTV[0].showYears + ". " + favoriteTV[0].explainations);
});

muppet.data("muppetName", favoriteTV[1].showName);
muppet.data("muppetYears", favoriteTV[1].showYears);
muppet.data("muppetExplaination", favoriteTV[1].explainations);

muppet.click(function(){
	console.log("ok muppet");
	$("#tvshow-h3").empty();
	$("#tvshow-h3").append("The Muppet Show!");
	$("#explanations-div").empty();
	$("#explanations-div").text(favoriteTV[1].showName + ": " + favoriteTV[1].showYears + ". " + favoriteTV[1].explainations);
});

simpsons.data("muppetName", favoriteTV[2].showName);
simpsons.data("muppetYears", favoriteTV[2].showYears);
simpsons.data("muppetExplaination", favoriteTV[2].explainations);

simpsons.click(function(){
	console.log("ok muppet");
	$("#tvshow-h3").empty();
	$("#tvshow-h3").append("The Simpsons!");
	$("#explanations-div").empty();
	$("#explanations-div").text(favoriteTV[2].showName + ": " + favoriteTV[2].showYears + " " + favoriteTV[2].explainations);
});