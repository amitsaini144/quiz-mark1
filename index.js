var readlineSync = require('readline-sync');

var score = 0;

console.log("<---- Do You Know Me Quiz ---->", '\n')
console.log("<---- R.U.L.E.S ---->", '\n')
console.log("1) 1 score for every right answer")
console.log("2) Score greator than 3 will be considered as high score", '\n')

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
  question: "3. What i am studing (course) ? ",
  answer: "CSE"
}
var questionFour = {
  question: "4. What is my height in feets ? ",
  answer: "5.6"
}

var questionFive = {
  question: "5. Which is my favourite game in moblie ? ",
  answer: "BGMI"
}

var qna = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for (var i = 0; i < qna.length; ++i) {
  check(qna[i].question, qna[i].answer);
}
console.log("Final score = " + score);
var highscore = 3;
if (score > highscore) {
  console.log("Excellent! you have a high score ")
}
else {
  console.log("try again for better score")
}
