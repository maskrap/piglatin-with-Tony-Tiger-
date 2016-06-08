// business logic

// play with input
var pigLatin = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};


// check for bad input
var cleanInput = function(input) {
  if (isNaN(input)) {
    return true;
  } else {
    return false;
  };
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = pigLatin(year);
    var input = cleanInput(year);

    $(".year").text(year);

    if (!input) {
      $("#result").show();
    }
    else {
      alert("This is not a number");
    }

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }


  });
});
