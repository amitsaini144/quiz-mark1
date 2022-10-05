var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name : ")
console.log("")
console.log("Welcome " + userName + "! to the Quiz\n")
console.log("---------------------------------------\n");

function check(question, answer) {
  userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer) {
    console.log("You are Right!");
    ++score;
  }
  else {
    console.log("You are Wrong!")
  }
  console.log("Score = " + score);
  console.log("Right Answer : " + answer)
  console.log("---------------------------------\n")
}

var questionOne = {
  question: "1. What is my full name ? ",
  answer: "AMIT SAINI"
}
var questionTwo = {
  question: "2. What is my age ? ",
  answer: "20"
}
var questionThree = {
  question: "3. what i am studing (course) ? ",
  answer: "CSE"
}
var questionFour = {
  question: "4. what is my height in feets ? ",
  answer: "5.6"
}
var qna = [questionOne, questionTwo, questionThree, questionFour];

for (var i = 0; i < qna.length; ++i) {
  check(qna[i].question, qna[i].answer);
}
console.log("Final score = " + score);
var highscore = 3;
if (score => highscore) {
  console.log("Excellent! you have a high score ")
}
else {
  console.log("try again for better score")
}
