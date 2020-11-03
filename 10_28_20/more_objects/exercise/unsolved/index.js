/*
  Setup an object for you with name, guess, winningPercentage & win properties
*/
var player = {
  name:"Margaret",
  guess:undefined,
  winningPercentage: undefined,
  winProperties:"Pick a letter! If the letter you selected is in the random word, you win!"
};
/*
  Setup a game object with randomWord, roundWinner, rounds array, and a roundNumber
*/
var displayResults = {
  randomWord: undefined,
  roundWinner: undefined,
  roundsArray: [],
  roundNumber: 0,
};
/*
  Create a random words array with at least 10 random words
*/
var randomArray = [
  "joy", "silliness", "cow", "open", "big", "opportunity", "chaos", "cake", "milk", "shoe", "chair", "jump", "penny", "hope", "car", "box", "rabbit", "cloud", "dollar", "read", "television", "roof", "wonderful"
];

/*
  when the 'guess-text' button is clicked:*/

  
  
 
 
$("#guess-text-button").click(function(){
  //make a function to work with the input
 // - set your guess input value to lowercase
  //- make sure the length of the input is 1, if not alert the user to only input 1 letter
  //- set your guess text on the ui
  player.guess = $("#guess-text-input").val();

 
  if(player.guess.length == 1 && isNaN(player.guess)){
    player.guess = player.guess.toLowerCase();
    $("#your-guess").text(player.guess);
    /*- set the game's random word to a random word from your word array
  - set the random word text on the ui
  - increment the round number*/
    displayResults.randomWord = randomArray[Math.floor(Math.random() * randomArray.length)];
    $("#random-word").text(displayResults.randomWord);
    displayResults.roundNumber = displayResults.roundNumber + 1;
    /*- if the letter that you guessed is in the random word
    - set yourself as the round winner
    - increment your wins by 1
    - set a message that you won and append it to hte ui
     - if the letter that you guessed is not in the random word
    - set the round winner as the Computer
    - set a message that you lost and append it to the ui
  - calculate your winning percentage and append it to the ui
    */
    var wins = 0;
    var computerWins = 0;
    var winnerMessage = " You won round " + displayResults.roundNumber + "!";
    var loserMessage = " You lost round " + displayResults.roundNumber + "!";
   // console.log(peopleArray.indexOf("Judy") > -1);
      if(displayResults.randomWord.indexOf(player.guess) > -1) {
        wins++;
        $("#message-text").empty();
        $("#message-text").append(winnerMessage);
        $("#winning-percentage").empty();
        winningPercentage = (wins / displayResults.roundNumber) * 100;
        $("#winning-percentage").append(winningPercentage);
        /* - For each round, push the stats of the round to the game rounds array.
    Have it be html text that you push to the rounds array, where you bolden:
    - your guess
    - the computer's random word
    - your winning percentage. Bonus: make this text have a glow effect
    Display the information for all of the rounds on the html
  - clear the value in the input
*/

        $("#guess-text-input").empty();
        $(".listItem").empty();

        displayResults.roundsArray.push(
          "<li class='glow'> Player Guess: <strong>" + player.guess + "</strong>" +
          ", Random Word: <strong>" + displayResults.randomWord + "</strong>" +
          ", Percentage of wins: <strong>" + winningPercentage + "</strong>" +
         " <strong>" + winnerMessage + "</strong></li>"
          );
          
        $("#guess-text-input").empty();
        var htmlString = ""
        for(var i = 0; i < displayResults.roundsArray.length; i++){
         htmlString += displayResults.roundsArray[i];
         }
        $(".rounds-list").html(htmlString);

      } else{
        computerWins++;
        $("#message-text").empty();
        $("#message-text").append(loserMessage);
        $("#winning-percentage").empty();
        winningPercentage = (wins / displayResults.roundNumber) * 100;
        $("#winning-percentage").append(winningPercentage);

        displayResults.roundsArray.push(
          "<li class='glow'> Player Guess: <strong>" + player.guess + "</strong>" +
          ", Random Word: <strong>" + displayResults.randomWord + "</strong>" +
          ", Percentage of wins: <strong>" + winningPercentage + "</strong>" +
         " <strong>" + loserMessage + "</strong></li>"
          );
        
        var htmlString = ""
        for(var i = 0; i < displayResults.roundsArray.length; i++){
        //i did have the other way that, but you can customize more with an html string
         htmlString += displayResults.roundsArray[i];
         }
        $(".rounds-list").html(htmlString);
      }
  
  } else {
    alert("Guess must be a single letter.");
  }

});

