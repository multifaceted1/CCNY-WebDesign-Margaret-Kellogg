/*

  Using the lyricString variable below and String Functions on that variable:
    1. Log the length of the string.
    2. Write an if else statement if the string value is greater than or equal to 50
    3. Find the first instance/index of a lowercase i
    4. Find the first instance of an uppercase I
    5. Log only the word top
    6. Log it all to uppercase
    7. Log it all to lowercase
    8. Get the value of the string at the 15th index
    9. Write an if else statement looking to see that the word "back" is contained in the string
    10. Write an if else statement looking to see that the word "back" is contained in the string

    Some Bonus:
    1. Log the word "slide" and change it to all toUpperCase
    2. Log the whole string with only the word "slide" all in uppercase
    3. Prompt a word and write an if else statement check if the word is in the string variable

*/

var lyricString = "When I get to the bottom I go back to the top of the slide";
/* 1 */
var lyricLength = lyricString.length;

console.log(lyricString.length);
/* 2 */
if(lyricLength >= 50){
    console.log("This lyric length is over 50 or equal to 50.")
}
/* 3 */
console.log(lyricString.indexOf("i"));

/* 4 */
console.log(lyricString.indexOf("I"));

/* 5 */
console.log(lyricString.lastIndexOf("top"));

console.log(lyricString.substring(42,45));

/* 6 */
console.log(lyricString.toUpperCase(0,58));

/* 7 */
console.log(lyricString.toLowerCase(0,58));

/* 8 */
console.log(lyricString.charAt(15));

/* 9 */
if(lyricString.indexOf("back") == -1 ) {
  console.log("'Back' is not in the lyrics.")
} else {console.log("'Back' is in the lyrics")};

/* 10 */
if(lyricString.indexOf("back") == -1 ) {
  console.log("'front' is not in the lyrics.")
} else {console.log("'front' is in the lyrics")};

var everythingBeforeSlide = lyricString.substring(0,(lyricString.indexOf("slide")))
console.log(everythingBeforeSlide);
console.log(lyricString.indexOf("slide"));