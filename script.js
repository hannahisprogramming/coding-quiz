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
var submitAnswer = document.querySelector("#save-task");
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
    correctAnswer: "answerB"
  },
  {
    question: "How do we access a value stored in an object?",
    answerA: "Dot notation, Curl bracket notation",
    answerB: "Period notation, Square bracket notation",
    answerC: "Equal notation, Abstract notation",
    answerD: "Dot notation, Bracket notation",
    correctAnswer: "answerD"
  },
  {
    question: "From the reason listed below which is NOT true about JavaScript?",
    answerA: "JavaScript increases interactivity of our websites.",
    answerB: "JavaScript lets provide the user immediate feedback upon an action.",
    answerC: "JavaScripts handles numbers better than most programming languages.",
    answerD: "Javascript allows developers to create richer interfaces for the users.",
    correctAnswer: "answerC"
  },
  {
    question: "Inside the HTML document, where do you place your JavaScript code?",
    answerA: "In the <footer> element",
    answerB: "Inside the <link> element",
    answerC: "Inside the <head> element",
    answerD: "Inside the <script> element",
    correctAnswer: "answerD"
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    answerA: "string, number, boolean, bigInt, symbol, undefined",
    answerB: "string, num, falsy, bigInt, symbol, undefined",
    answerC: "sentence, int, truthy, bigInt, symbol, undefined",
    answerD: "sentence, float, data, bigInt, symbol, undefined",
    correctAnswer: "answerA"
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
  if (qCounter === 0){
    //set ready to start question
    startQuestion();
  } else {
    //set quiz question
    quizQuestion();
  }
};

//check if answer is correct
var checkAnswer = function () {
  if (document.querySelector('input[name="radioGroup"]:checked').value === quizQuestions[qCounter].correctAnswer){
    //add points to score
    score+=20;
    console.log(score);
  } //else {
    //if incorrect, deduct time from timer
  //}
}

var endQuiz = function () {
  //hide quiz question div
  document.getElementById("quizForm").style.display = "none";
  //display end screen with score
  var divEl = document.createElement("div");
  divEl.className = "endScreen";
  divEl.innerHTML =
  "<h2 class='endScreen'>You've finished the Quiz!</h2><br /><h3 class='endScreen'>Your score is " + score + "!</h3>";
}

var answerQuestion = function () {
  //load question
  displayQuestion();
  if (qCounter === 0){
    //check if user is ready for the quiz
    if (document.getElementById("answerA").checked){
      window.alert("You are not ready, select 'yes' when ready!");
      return false;
    }
    //start timer
    //timer code HERE
    //increment question counter
    qCounter++;
    console.log(qCounter);
  } else if (qCounter > 0 && qCounter < quizQuestions.length) {
    //load question
    displayQuestion();
    //event listener for submit answer button
    submitAnswer.addEventListener("submit", checkAnswer);
    //increment question counter
    if (qCounter < quizQuestions.length-1) {
      qCounter++;
      console.log(qCounter);
    }
  } else {
    qCounter = 0;
    endQuiz();
  }
  //event listener for submit answer button
  submitAnswer.addEventListener("click", checkAnswer, answerQuestion);
};

answerQuestion();