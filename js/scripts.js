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

var consNum = 0;

// debugger;
var ifVowel = function(word, i) {
//===========debugging===================
// if (word.charAt(i) === 'a' || word.charAt(i) === "A" || word.charAt(i) === "e" || word.charAt(i) === "E" || word.charAt(i) === "i" || word.charAt(i) === "I" || word.charAt(i) === "o" || word.charAt(i) === "O" || word.charAt(i) === "u" || word.charAt(i) === "U") {
//   console.log('yes');
//   return true;
// }
//
// else if (word.charAt(i) === 'u'|| word.charAt(i) === 'U') {
//   return "U";
//   console.log('q');
// }
//===========end debugging=============

  if (word.charAt(i) === 'u'|| word.charAt(i) === 'U') {
    console.log('q');
    return "U";
  }

  else if (word.charAt(i) === 'a' || word.charAt(i) === "A" || word.charAt(i) === "e" || word.charAt(i) === "E" || word.charAt(i) === "i" || word.charAt(i) === "I" || word.charAt(i) === "o" || word.charAt(i) === "O" || word.charAt(i) === "u" || word.charAt(i) === "U") {
    console.log('yes');
    return true;
  }

  else {
    // console.log('no');
    return false;
  }
};

//
//
var checkq;
var piggy = function(wordsArray) {
  for (var idx = 0; idx < wordsArray.length; idx++) {
    if (ifVowel(wordsArray[idx], 0)) {
      wordsArray.splice(idx, 1, (wordsArray[idx] + 'ay'));
    }

    else if (!ifVowel(wordsArray[idx], 0)) {
      for (var i = 0; i < wordsArray[idx].length; i++) {

        if (consNum === (wordsArray[idx].length - 1)) {
          var cons1 = wordsArray[idx].slice(0, consNum);
          var rest1 = wordsArray[idx].slice(consNum, ((wordsArray[idx].length) - 1));
          wordsArray.splice(idx, 1, (rest1 + cons1 + 'ay'));
          consNum = 0;
          console.log('change');
        }
        else if ((ifVowel(wordsArray[idx], i) === "U" && wordsArray[idx].charAt(i - 1) === "q") || (ifVowel(wordsArray[idx], i) === "U" && wordsArray[idx].charAt(i - 1) === "Q")) {
          checkq = 'q';
              var cons3 = wordsArray[idx].slice(0, (consNum + 1));
              var rest3 = wordsArray[idx].slice((consNum + 1), (wordsArray[idx].length));
              wordsArray.splice(idx, 1, (rest3 + cons3 + 'ay'));
              consNum = 0;
              break;
        }
        else if (!ifVowel(wordsArray[idx], i)) {
          consNum += 1;
          console.log('consNum+1');
        }

        else if (ifVowel(wordsArray[idx], i)) {
          var cons2 = wordsArray[idx].slice(0, consNum);
          var rest2 = wordsArray[idx].slice(consNum, (wordsArray[idx].length));
          wordsArray.splice(idx, 1, (rest2 + cons2 + 'ay'));
          consNum = 0;
          console.log('vowel');
          break;
        }

        // console.log(words[idx].charAt(i));
      };
    }
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

    var resultout = wordsArray.join(' ');
    $('#results').text(resultout);
    $('#result').show();
  });
});
