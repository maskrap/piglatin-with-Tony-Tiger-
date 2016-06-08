// take user input
// put into array
// split into Words

// use charat to classifiy with if statement
// evaluate each words array values using charAt() will need to use a loop.
// and charAt() per words array index values; use a loop to:
// evaluate the char to not equal vowel


//======================== biz logic ===========================
var words = [];
var wordSplit = function(word) {
  words = word.split(" ");
  return words;
}

var piggy = function(wordsArray) {
  for (var idx = 0; idx < wordsArray.length; idx++) {
    for (var i = 0; i < wordsArray[idx].length; i++) {
      console.log(words[idx].charAt(i));
    };
  };
};






//======================== user interface logic ===========================
$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var word = $("input#words").val();
    var wordsArray = wordSplit(word);

    piggy(wordsArray);
    console.log(words);


  });
});
