$("#first-animation-button").click(function(){
  $("#first-animation-div").animate({left: '250px', top: '250px', opacity: '0.5'});
});

$("#second-animation-button").click(function(){
  $("#second-animation-div").animate({
    left: '250px',
    height: '+=150px',
    width: '-=100px'
  });
})

$("#third-animation-button").click(function(){
  $("#third-animation-div").animate({
    height: 'toggle'
  });
});

$("#fourth-animation-button").click(function(){
  $("#fourth-animation-div").animate({height: '300px', opacity: '0.4'}, "slow");
  $("#fourth-animation-div").animate({width: '300px', opacity: '0.8'}, "slow");
  $("#fourth-animation-div").animate({height: '100px', opacity: '0.4'}, "slow");
  $("#fourth-animation-div").animate({width: '100px', opacity: '0.8'}, "slow");

  $("#fourth-animation-div").animate({left: '100px'}, "slow");
  $("#fourth-animation-div").animate({fontSize: '3em'}, "slow");
});
