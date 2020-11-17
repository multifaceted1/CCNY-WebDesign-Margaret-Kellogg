$(document)
    $(".one").delay(1000).fadeIn();
    $(".two").delay(10000).fadeIn();
    $(".three").delay(20000).fadeIn();
    $(".one").delay(10000).fadeOut();
    $(".two").delay(20000).fadeOut();
    $(".three").delay(30000).fadeOut();
    alert("ok");

