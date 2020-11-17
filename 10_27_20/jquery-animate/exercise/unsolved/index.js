$("#hit-me").click(function(){
    $("#animation-div").animate({left: '900px'}, "slow");
    $("#animation-div").animate({top: '400px'}, "slow");
  });
  $("#hit-me").click(function(){
    $("#animation-div").delay(250).animate({left: '-0px'}, "slow");
    $("#animation-div").delay(250).animate({top: '50px'}, "slow");
  });
  $("#hit-me").click(function(){
    $("#animation-div").delay(500).animate({height: "175px", width: "175px"}, "slow");
    $("#animation-div").delay(500).animate({height: "100px", width: "100px"}, "slow");
  });
$("#animation-div-two").mouseover(function(){
    $("p").delay(20).animate({fontSize: "30px"}, "slow");
});