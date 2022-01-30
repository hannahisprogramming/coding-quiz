//start timer after initial quiz form is submitted
// array of quiz questions
//iterate through array, counter++ after user hits "submit answer"
//event listener for submit click
//check if answer is correct
//add points if correct
//deduct time if wrong
//save score if high score in localStorage
var qCounter = 1;
var quizQuestion = [
  [
    question = "Are you ready to start the quiz?",
    answer1 = "no",
    answer2 = "yes",
    correctAnswer = answer2
  ],
  [
    questionId = 1,
    question = "What are the two scopes of variables in Javascript?",
    answerA = "Abroad and Local",
    answerB = "Global and Local",
    answerC = "Outer and Inner",
    answerD = "Outside and Inside",
    correctAnswer = answerB
  ],
  [
    questionId = 1,
    question = "How do we access a value stored in an object?",
    answerA = "Dot notation, Curl bracket notation",
    answerB = "Period notation, Square bracket notation",
    answerC = "Equal notation, Abstract notation",
    answerD = "Dot notation, Bracket notation",
    correctAnswer = answerD
  ],
  [
    questionId = 2,
    question = "From the reason listed below which is NOT true about JavaScript?",
    answerA = "JavaScript increases interactivity of our websites.",
    answerB = "JavaScript lets provide the user immediate feedback upon an action.",
    answerC = "JavaScripts handles numbers better than most programming languages.",
    answerD = "Javascript allows developers to create richer interfaces for the users.",
    correctAnswer = answerC
  ],
  [
    questionId = 3,
    question = "Inside the HTML document, where do you place your JavaScript code?",
    answerA = "In the <footer> element",
    answerB = "Inside the <link> element",
    answerC = "Inside the <head> element",
    answerD = "Inside the <script> element",
    correctAnswer = answerD
  ],
  [
    questionId = 4,
    question = "What are the six primitive data types in JavaScript?",
    answerA = "string, number, boolean, bigInt, symbol, undefined",
    answerB = "string, num, falsy, bigInt, symbol, undefined",
    answerC = "sentence, int, truthy, bigInt, symbol, undefined",
    answerD = "sentence, float, data, bigInt, symbol, undefined",
    correctAnswer = answerA
  ]
];

var startQuestion = function() {
  //set h2 ele,emt to start question
  
  //set radio optiosn for yes and no

}

var quizQuestion = function() {
  //set h2 element here

  //for (var i = 2; i < quizQuestions[qCounter].length-1; i++) {
  for (var i = 2; i < 3; i++) {
    //set radio button text here
    var label = document.querySelector('#labelA');
    label.textContent = (quizQuestion[qCounter][i]);
  };
}

var displayQuestion = function () {
  if (qCounter === 0){
    //set ready to start question
    startQuestion();
  } else {
    //set quiz question
    quizQuestion();
  }
  qCounter++;
};

displayQuestion();