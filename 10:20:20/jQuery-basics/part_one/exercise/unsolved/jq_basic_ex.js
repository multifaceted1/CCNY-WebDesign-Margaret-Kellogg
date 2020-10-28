/*

1. import jquery
2. make the image appear after you click the appropriate button
3. make the font color of the h2 tag to change to blue on click
4. When the approprite button is clicked, add onto the respective div with a p tag that has your name as text

*/
$('#button-pic').click(function(){
 $('#downloaded').css("display", "block");
});

$('h2').click(function(){
    $('h2').css("color", "blue");
});

var pTag = $("<p>");
pTag.text("Margaret S. Kellogg");

$('#button-text').click(function(){
    $('.your-name-p-tag').append(pTag);
});

var buttonChangeText = $("<button>");
buttonChangeText.text("Hover over!");
$('#hover-button').append(buttonChangeText);
$('#hover-button').hover(function(){
    $(buttonChangeText).text("I changed!");
});
