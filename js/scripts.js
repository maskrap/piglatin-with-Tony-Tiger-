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

var ifVowel = function(word, i) {
  if (word.charAt(i) === 'a'||word.charAt(i) === "A"||word.charAt(i) === "e"||word.charAt(i) === "E"||word.charAt(i) === "i"||word.charAt(i) === "I"||word.charAt(i) === "o"||word.charAt(i) === "O"||word.charAt(i) === "u"||word.charAt(i) === "U") {
    // console.log('yes');
    return true;
  }
  else if ((word.charAt(i) + word.charAt(i + 1))==='qu'||(word.charAt(i) + word.charAt(i+1))==='Qu'|| (word.charAt(i) + word.charAt(i + 1))==='QU'||(word.charAt(i) + word.charAt(i + 1))==='qU') {
    return "Q";
  }
  else {
    // console.log('no');
    return false;
  }
};

//
//

var piggy = function(wordsArray) {
  for (var idx = 0; idx < wordsArray.length; idx++) {
    if (ifVowel(wordsArray[idx], 0)) {
      wordsArray.splice(idx, 1, (wordsArray[idx] + 'ay'));
    }

    else if (ifVowel(wordsArray[idx], 0) === "Q") {
      var cons = wordsArray[idx].slice(0, 2);
      var rest = wordsArray[idx].slice(1, (wordsArray[idx].length));
      wordsArray.splice(idx, 1, (rest + cons + 'ay'));
    }

    else if (!ifVowel(wordsArray[idx], 0)) {
      for (var i = 0; i < wordsArray[idx].length; i++) {

        if (!ifVowel(wordsArray[idx], i)) {
          consNum += 1;
          // console.log('consNum+1');
        }
        else if (ifVowel(wordsArray[idx], i)) {
          var cons = wordsArray[idx].slice(0, consNum);
          var rest = wordsArray[idx].slice(consNum, (wordsArray[idx].length));
          wordsArray.splice(idx, 1, (wordsArray[idx].replace(wordsArray[idx], (rest + cons + 'ay'))));
          consNum = 0;
          // console.log('change');
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
