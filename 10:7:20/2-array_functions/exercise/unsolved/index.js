/*

  //Alphabet String
  1. Turn the alphabet string into an array with each index being a letter of the alphabet (.i.e. ['a', 'b'','c'.....])
  2. Turn the alphabet array back into an alphabet string

  //Lyric String
  3. Turn the lyricString into an array, splitting it by the underscore
  4. Log all the words in the lyric string using a loop
  5. Log all the words in the lyric string with a Capital first letter
  6. Create a new sentence string with all Capital first letters using push and join

  //Tongue Twister
  7. Turn the string into the correct sentence by using a split and a join
*/

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var lyricString = "here_i_go_again_on_my_own";
var tongueTwister = "how much bird could a birdchuck chuck if a birdchuck could chuck bird"
var reunitedAlphabet =[]
var lyricArray = []
var otherSentenceString = "Going Down The Only Road I've Ever Known."
//1
var alphabetArray = alphabet.split("");
console.log(alphabetArray);

//2
reunitedAlphabet = alphabetArray.join(",");
console.log(reunitedAlphabet);

//3
lyricArray = lyricString.split("_");
console.log(lyricArray);

//4
for(i = 0; i < lyricArray.length; i++) {
  console.log(lyricArray[i]);
}

//5
for(i = 0; i < lyricArray.length; i++) {
  console.log(lyricArray[i][0].toUpperCase() + lyricArray[i].substring(1, lyricArray[i].length));
}

//6
lyricArray.push(otherSentenceString);
console.log(lyricArray[i]);
lyricArray.join(",");
console.log(lyricArray);

for(i = 0; i < lyricArray.length; i++) {
  console.log(lyricArray[i][0].toUpperCase() + lyricArray[i].substring(1, lyricArray[i].length));
}
