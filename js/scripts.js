// take user input
// put into array
// split into Words

// use charat to classifiy with if statement
// evaluate each words array values using charAt() will need to use a loop.
// and charAt() per words array index values; use a loop to:
// evaluate the char to not equal vowel

// at array idx loop, evaluate initial char at [0] against vowel array
// if true then concat("ay")

var wordsArray = [];


//======================== biz logic ===========================
var words = [];
// var vowels = ["a","A","e","E","i","I","o","O","u","U"];
var wordSplit = function(word) {
  words = word.split(" ");
  return words;
}

//
// var ifVowel = function(word) {
//   vowels.forEach(function(vowel) {
//     if (vowel === word.charAt(0)) {
//       console.log('yes');
//       return true;
//       break;
//     }
//     else {
//       console.log('no');
//       return false;
//     }
//   });
// };

//
//

var piggy = function(wordsArray) {
  for (var idx = 0; idx < wordsArray.length; idx++) {
    if (wordsArray[idx].charAt(0) === 'a'||wordsArray[idx].charAt(idx - idx) === "A"||wordsArray[idx].charAt(idx - idx) === "e"||wordsArray[idx].charAt(idx - idx) === "E"||wordsArray[idx].charAt(0) === "i"||wordsArray[idx].charAt(0) === "I"||wordsArray[idx].charAt(0) === "o"||wordsArray[idx].charAt(0) === "O"||wordsArray[idx].charAt(0) === "u"||wordsArray[idx].charAt(0) === "U") {
      wordsArray.splice(idx, 1, (wordsArray[idx] + 'ay'));
    }


    // for (var i = 0; i < wordsArray[idx].length; i++) {
    //
    //   console.log(words[idx].charAt(i));
    // };
  };
};






//======================== user interface logic ===========================
$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    event.preventDefault();
    var word = $("input#words").val();
    wordsArray = wordSplit(word);

    piggy(wordsArray);
    // console.log(words);
  });
});
