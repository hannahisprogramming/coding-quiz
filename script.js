//start timer after initial quiz form is submitted
// array of quiz questions
//iterate through array, counter++ after user hits "submit answer"
//event listener for submit click
//check if answer is correct
//add points if correct
//deduct time if wrong
//save score if high score in localStorage
var qCounter = 0;
var score = 0;
var numberCorrect = 0;
var submitAnswer = document.querySelector("#submitAn");
var quizQuestions = [
  {
    question: "Are you ready to start the quiz?",
    answer1: "no",
    answer2: "yes",
    correctAnswer: "yes"
  },
  {
    question: "What are the two scopes of variables in Javascript?",
    answerA: "Abroad and Local",
    answerB: "Global and Local",
    answerC: "Outer and Inner",
    answerD: "Outside and Inside",
    correctAnswer: "Global and Local"
  },
  {
    question: "How do we access a value stored in an object?",
    answerA: "Dot notation, Curl bracket notation",
    answerB: "Period notation, Square bracket notation",
    answerC: "Equal notation, Abstract notation",
    answerD: "Dot notation, Bracket notation",
    correctAnswer: "Dot notation, Bracket notation"
  },
  {
    question: "From the reason listed below which is NOT true about JavaScript?",
    answerA: "JavaScript increases interactivity of our websites.",
    answerB: "JavaScript lets provide the user immediate feedback upon an action.",
    answerC: "JavaScripts handles numbers better than most programming languages.",
    answerD: "Javascript allows developers to create richer interfaces for the users.",
    correctAnswer: "JavaScripts handles numbers better than most programming languages."
  },
  {
    question: "Inside the HTML document, where do you place your JavaScript code?",
    answerA: "In the <footer> element",
    answerB: "Inside the <link> element",
    answerC: "Inside the <head> element",
    answerD: "Inside the <script> element",
    correctAnswer: "Inside the <script> element"
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    answerA: "string, number, boolean, bigInt, symbol, undefined",
    answerB: "string, num, falsy, bigInt, symbol, undefined",
    answerC: "sentence, int, truthy, bigInt, symbol, undefined",
    answerD: "sentence, float, data, bigInt, symbol, undefined",
    correctAnswer: "string, number, boolean, bigInt, symbol, undefined"
  }
];

var startQuestion = function() {
  //set h2 element to start question
  var h2Label = document.querySelector('#questionH2');
  h2Label.textContent = (quizQuestions[qCounter].question);

  //set radio options for yes and no
  var label = document.querySelector('#labelA');
  label.textContent = (quizQuestions[qCounter].answer1);
  document.getElementById("answerA").value = (quizQuestions[qCounter].answer1);
  label = document.querySelector('#labelB');
  label.textContent = (quizQuestions[qCounter].answer2);
  document.getElementById("answerB").value = (quizQuestions[qCounter].answer2);

  //hide unused radio elements and labels
  document.getElementById("C").style.display = "none";
  document.getElementById("D").style.display = "none";
}

var quizQuestion = function() {
  //remove display:none from questions C & D
  document.getElementById("C").style.display = "flex";
  document.getElementById("D").style.display = "flex";

  //set h2 element here
  var h2Label = document.querySelector('#questionH2');
  h2Label.textContent = (quizQuestions[qCounter].question);

  //set radio button text here
  var label = document.querySelector('#labelA');
  label.textContent = (quizQuestions[qCounter].answerA);
  document.getElementById("answerA").value = (quizQuestions[qCounter].answerA);
  label = document.querySelector('#labelB');
  label.textContent = (quizQuestions[qCounter].answerB);
  document.getElementById("answerB").value = (quizQuestions[qCounter].answerB);
  label = document.querySelector('#labelC');
  label.textContent = (quizQuestions[qCounter].answerC);
  document.getElementById("answerC").value = (quizQuestions[qCounter].answerC);
  label = document.querySelector('#labelD');
  label.textContent = (quizQuestions[qCounter].answerD);
  document.getElementById("answerD").value = (quizQuestions[qCounter].answerD);
}

var displayQuestion = function () {
  console.log(qCounter);
  if (qCounter === 0){
    //set ready to start question
    startQuestion();
  } else {
    //set quiz question
    quizQuestion();
  }
};

//check if answer is correct
var checkAnswer = function (event) {
  event.preventDefault();
  if (qCounter < quizQuestions.length){
    if (document.querySelector('input[name="radioGroup"]:checked').value === quizQuestions[qCounter-1].correctAnswer){
      //add points to score
      score+=20;
      //increment numberCorrect
      numberCorrect++;
      console.log(score);
    } else {
      //if incorrect, deduct time from timer
      //alert - answer is incorrect, time left after deduction is:
      window.alert("Your answer is incorrect.");
    }
    answerQuestion();
  } else {
    if (document.querySelector('input[name="radioGroup"]:checked').value === quizQuestions[qCounter-1].correctAnswer){
      //add points to score
      score+=20;
      //increment numberCorrect
      numberCorrect++;
    } else {
      //if incorrect, deduct time from timer
      //alert - answer is incorrect, time left after deduction is:
      window.alert("Your answer is incorrect.");
    }
    endQuiz();
  }
  
}

var endQuiz = function () {
  //hide quiz question div
  document.getElementById("quizForm").style.display = "none";
  //display end screen with score
  var divEl = document.createElement("div");
  divEl.className = "endScreen";
  divEl.innerHTML =
  "<h2 class='endScreen'>You've finished the Quiz!</h2><br /><h3 class='endScreen'>You got " + (numberCorrect-1) + " out of 5 correct!</h3><br /><h3 class='endScreen'>Your score is " + (score-=20) + "!</h3>";
  document.getElementById("quizForm").after(divEl);

  // check localStorage for high score, if it's not there, use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }
  // if player has more money than the high score, player has new high score!
  if (score > highScore) {
    localStorage.setItem("highscore", score);
    localStorage.setItem("name", window.prompt("What's your name?"));

    alert(localStorage.getItem("name") + " now has the high score of " + highScore + "!");
  } 
  else {
    alert("You did not beat the high score of " + highScore + ". Maybe next time!");
  }
}

var answerQuestion = function () {
  if (qCounter === 0){
    //load question
    displayQuestion();
    //start timer
    //timer code HERE
    //increment question counter
    qCounter++;
    console.log(qCounter);
  } else {
    //if (qCounter > 0 && qCounter < quizQuestions.length)
    //load question
    displayQuestion();
    //increment question counter
    qCounter++;
    console.log(qCounter);
  }
  //event listener for submit answer button
  submitAnswer.addEventListener("click", checkAnswer);
};

answerQuestion();