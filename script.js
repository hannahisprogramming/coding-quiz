//start timer after initial quiz form is submitted
// array of quiz questions
//iterate through array, counter++ after user hits "submit answer"
//event listener for submit click
//check if answer is correct
//add points if correct
//deduct time if wrong
//save score if high score in localStorage
var qCounter = 0;
var submitAnwerr = document.querySelector("#save-task");
var quizQuestions = [
  {
    question: "Are you ready to start the quiz?",
    answer1: "no",
    answer2: "yes",
    correctAnswer: "yes"
  },
  {
    questionId: 1,
    question: "What are the two scopes of variables in Javascript?",
    answerA: "Abroad and Local",
    answerB: "Global and Local",
    answerC: "Outer and Inner",
    answerD: "Outside and Inside",
    correctAnswer: "answerB"
  },
  {
    questionId: 1,
    question: "How do we access a value stored in an object?",
    answerA: "Dot notation, Curl bracket notation",
    answerB: "Period notation, Square bracket notation",
    answerC: "Equal notation, Abstract notation",
    answerD: "Dot notation, Bracket notation",
    correctAnswer: "answerD"
  },
  {
    questionId: 2,
    question: "From the reason listed below which is NOT true about JavaScript?",
    answerA: "JavaScript increases interactivity of our websites.",
    answerB: "JavaScript lets provide the user immediate feedback upon an action.",
    answerC: "JavaScripts handles numbers better than most programming languages.",
    answerD: "Javascript allows developers to create richer interfaces for the users.",
    correctAnswer: "answerC"
  },
  {
    questionId: 3,
    question: "Inside the HTML document, where do you place your JavaScript code?",
    answerA: "In the <footer> element",
    answerB: "Inside the <link> element",
    answerC: "Inside the <head> element",
    answerD: "Inside the <script> element",
    correctAnswer: "answerD"
  },
  {
    questionId: 4,
    question: "What are the six primitive data types in JavaScript?",
    answerA: "string, number, boolean, bigInt, symbol, undefined",
    answerB: "string, num, falsy, bigInt, symbol, undefined",
    answerC: "sentence, int, truthy, bigInt, symbol, undefined",
    answerD: "sentence, float, data, bigInt, symbol, undefined",
    correctAnswer: "answerA"
  }
];

var startQuestion = function() {
  //set h2 eleemt to start question
  var h2Label = document.querySelector('#questionH2');
  h2Label.textContent = (quizQuestions[qCounter].question);

  //set radio options for yes and no
  var label = document.querySelector('#labelA');
  label.textContent = (quizQuestions[qCounter].answer1);
  label = document.querySelector('#labelB');
  label.textContent = (quizQuestions[qCounter].answer2);

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
  label = document.querySelector('#labelB');
  label.textContent = (quizQuestions[qCounter].answerB);
  label = document.querySelector('#labelC');
  label.textContent = (quizQuestions[qCounter].answerC);
  label = document.querySelector('#labelD');
  label.textContent = (quizQuestions[qCounter].answerD);
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

var answerQuestion = function () {
  //load question
  displayQuestion();
  if (qCounter === 0){
    //check if user is ready for the quiz
    if (document.getElementById('answerA').checked){
      window.alert("You are not ready, select 'yes' when ready!");
      return false;
    }
    //start timer
    //timer code HERE
    //increment question counter
    qCounter++;
  } else {
    //load question
    displayQuestion();
    //event listener for submit answer button
    submitAnwerr.addEventListener("submit", checkAnswer);
    //check if answer is correct
    var checkAnswer = function () {
      if (){
        
      }
    }
  }
};

answerQuestion();