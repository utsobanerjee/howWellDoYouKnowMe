var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+userName+" to HOW WELL DO YOU KNOW UTSO");
var highScores = {
  name:"Utso",
  
}

var questions = [{
  question:"Where do I live? ",
  answer:"In your heart"
},{
  question:"What is my age? ",
  answer:"23"
},{
  question:"In which course I did my graudation with? ",
  answer:"Btech CSE"
},{
  question:"What is my favourite food? ",
  answer:"Eggs"
},{
  question:"Who are my two closest friends? ",
  answer:"Rahul and Aichhick"
}]

for(var i=0;i<questions.length;i++)
  {
    var userAnswer = readlineSync.question(questions[i].question);
    if(userAnswer.toUpperCase()===questions[i].answer.toUpperCase())
    {
      console.log("You are right!");
      score++;
      }
    else{
      console.log("You are wrong :(");
      console.log("The correct answer is "+questions[i].answer);
      }
    console.log("Your current score is "+score);
    console.log("_____________");
  }
console.log("Congratulatuons game is over , your score is "+score);