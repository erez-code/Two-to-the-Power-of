var printButton = document.getElementById("buttonPrintNewRandomInt");
var displayResault = document.getElementById("displayResult1");
var scoreUpdate = document.getElementById("score");
var wrongAnswersUpdate = document.getElementById("wrong_answers");
var buttonCheckAnswer = document.getElementById("buttonCheckAnswer");
var answerPowerOf = document.getElementById("answerPowerOf");
var randomPowerOf;
var randomTwoPowerOf;
var triedToAnswerFlag = 0;
var scoreCount = 0;
var wrongAnswerCount = 0;
printNewRandomInt();

printButton.addEventListener("click", printNewRandomInt);

function printNewRandomInt() {
  var baseTwo = 2;
  randomPowerOf = getRndInteger(0, 10);

  randomTwoPowerOf = Math.pow(baseTwo, randomPowerOf);

  var displayPrintNewRandomInt = document.getElementById(
    "displayPrintNewRandomInt"
  );

  displayPrintNewRandomInt.innerHTML = Number(
    randomTwoPowerOf
  ).toLocaleString();
  displayResault.innerHTML = "";
  triedToAnswerFlag = 0;
  buttonCheckAnswer.disabled = false;

  answerPowerOf.value = "";
}

answerPowerOf.addEventListener("keyup", function() {
  if (event.keyCode === 13) {
    buttonCheckAnswer.click();
  }
});

document.body.addEventListener("keyup", function() {
  if (event.keyCode === 78) {
    printButton.click();
  }
});

buttonCheckAnswer.addEventListener("click", function() {
  var answerPowerOfValue = answerPowerOf.value;

  if (triedToAnswerFlag == 0) {
    if (answerPowerOfValue === "") {
      displayResault.innerHTML = "Not enough input.";
    } else if (answerPowerOfValue > 10 || answerPowerOfValue < 0) {
      displayResault.innerHTML = "Insert a number between 0 and 10.";
    } else {
      //CHECK ANSWER
      var bin = randomTwoPowerOf.toString(2);
      //var bin_length = bin.length;
      bin = bin.padStart(32, "0");

      displayResault.innerHTML =
        randomTwoPowerOf +
        " is 2 to the power of " +
        randomPowerOf +
        "<br />" +
        bin.substring(0, 8) +
        " " +
        bin.substring(8, 16) +
        " " +
        bin.substring(16, 24) +
        " " +
        bin.substring(24, 32);

      if (answerPowerOfValue == randomPowerOf) {
        ++scoreCount;
        scoreUpdate.innerHTML = scoreCount;
        displayResault.insertAdjacentHTML("afterbegin", "Correct! ");
      } else {
        ++wrongAnswerCount;
        wrongAnswersUpdate.innerHTML = wrongAnswerCount;
        displayResault.insertAdjacentHTML("afterbegin", "Wrong! ");
      }
      triedToAnswerFlag = 1;
      buttonCheckAnswer.disabled = true;
    }
  }
});

function randomInt() {
  return Math.floor(Math.random() * Math.pow(256, 4)) + 1;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
