//start timer after initial quiz form is submitted
// array of quiz questions
//iterate through array, counter++ after user hits "submit answer"
//event listener for submit click
//check if answer is correct
//add points if correct
//deduct time if wrong
//save score if high score in localStorage
var questionCounter = 0;

var startQuiz = [
  question = "Are you ready to start the quiz?",
  answer1 = "no",
  answer2 = "yes"
];
var quizQuestions = [
  {
    questionId = 1,
    question = "What are the two scopes of variables in Javascript?",
    answerA = "Abroad and Local",
    answerB = "Global and Local",
    answerC = "Outer and Inner",
    answerD = "Outside and Inside",
    correctAnswer = answerB
  },
  {
    questionId = 1,
    question = "How do we access a value stored in an object?",
    answerA = "Dot notation, Curl bracket notation",
    answerB = "Period notation, Square bracket notation",
    answerC = "Equal notation, Abstract notation",
    answerD = "Dot notation, Bracket notation",
    correctAnswer = answerD
  },
  {
    questionId = 2,
    question = "From the reason listed below which is NOT true about JavaScript?",
    answerA = "JavaScript increases interactivity of our websites.",
    answerB = "JavaScript lets provide the user immediate feedback upon an action.",
    answerC = "JavaScripts handles numbers better than most programming languages.",
    answerD = "Javascript allows developers to create richer interfaces for the users.",
    correctAnswer = answerC
  },
  {
    questionId = 3,
    question = "Inside the HTML document, where do you place your JavaScript code?",
    answerA = "In the <footer> element",
    answerB = "Inside the <link> element",
    answerC = "Inside the <head> element",
    answerD = "Inside the <script> element",
    correctAnswer = answerD
  },
  {
    questionId = 4,
    question = "What are the six primitive data types in JavaScript?",
    answerA = "string, number, boolean, bigInt, symbol, undefined",
    answerB = "string, num, falsy, bigInt, symbol, undefined",
    answerC = "sentence, int, truthy, bigInt, symbol, undefined",
    answerD = "sentence, float, data, bigInt, symbol, undefined",
    correctAnswer = answerA
  }
];

var startQuestion = function() {

}

var quizQuestion = function() {
  var questionH2El = document.createElement("h2");
  questionH2El.className = "quizForm";
  questionH2El.innerHTML = quizQuestion[questionCounter][1];

  for (var i = 2; i < quizQuestions[questionCounter].length-1; i++) {
    var questionRadioEl = document.createElement("input");
    questionRadioEl.setAttribute("type", "radio");
    questionRadioEl.value(quizQuestions[questionCounter][i]);
  };
}

var displayQuestion = function () {
  for (var i = 0; i < quizQuestions[i].length-1; i++) {
    if (quizQuestions[0]){
      //set ready to start question
      startQuestion();
    } else {
      //set quiz question
      quizQuestion();
    }
  }
  questionCounter++;
};

displayQuestion();