$(document).ready(function(){

	var num = 100;
	var interval;

	// append number to appropriate p tag
	$("#number").append(num);

	//when start is clicked, decrease number each second

	$("#start-button").click(function(){
		if
		
		interval = setInterval(function(){
			$("#number").empty();
			num--
			$("#number").append(num);
			interval;
		}, 1000);
	})
	//remember to use interval variable across both on click functions

	$("#pause-button").click(function(){
		$("#number").clearInterval(interval);
	})

	//when pause button is clicked, pause the time

	//when stop button is clicked, reset the timer back 100
});