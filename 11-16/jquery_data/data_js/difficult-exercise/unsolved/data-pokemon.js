var pokemon = [{
	name: "squirtle",
	evolvesTo: "wartortle",
	evolvedFrom: null,
	img: "squirtle.png"
},{
	name: "bulbasaur",
	evolvesTo: "ivysaur",
	evolvedFrom: null,
	img: "bulbasaur.png"
},{
	name: "wartortle",
	evolvesTo: "blastoise",
	evolvedFrom: "squirtle",
	img: "wartortle.png"
},{
	name: "ivysaur",
	evolvesTo: "venusaur",
	evolvedFrom: "bulbasaur",
	img: "ivysaur.png"
},{
	name: "blastoise",
	evolvesTo: null,
	evolvedFrom: "wartortle",
	img: "blastoise.png"
},{
	name: "venusaur",
	evolvesTo: null,
	evolvedFrom: "bulbasaur",
	img: "venusaur.png"
}]

$(document).ready(function(){
	$("#append-to-me").append('<img id="squirtle"><img id="bulbasaur">')
	$("#squirtle").attr("src", "squirtle.png");
});

/*$("img").click(function(){
	for(var i = 0; i < pokemon.length; i++){
		if(pokemon.)
});

