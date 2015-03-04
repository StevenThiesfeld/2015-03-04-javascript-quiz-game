var score = 0;
var question1 = { question: "A dog says what?", goodAnswer: "bark", badAnswers: ["quack", "moo", "meow"]};
var question2 = { question: "Vermillion is what color?", goodAnswer: "red", badAnswers: ["blue","yellow","green"]};
var $questions = [question1,question2];
                  
function displayQuestion(question){
  var answers = randomize(question.badAnswers.concat(question.goodAnswer));
  var display = "Question: " + question.question + "\n" + "Answers:\n" + answers.join("\n");
 return display
 
}

function getAnswer(question){
  var answer = prompt(displayQuestion(question));
  checkAnswer(answer,question.goodAnswer);
}

function checkAnswer(answer,rightAnswer){
  if (answer === rightAnswer) {
    score++;
    alert("That answer is correct!");
  } else {
    alert("Sorry, That is incorrect.");
  }
}

function playGame(){
  var temp = randomize($questions)
  for (z = 0; z < $questions.length; z++){
    getAnswer(temp[z]);
  }
  return score;
}

function randomize(array){
   return array.sort(function(a, b){
     return Math.random() - .5 ;
  } );
}

playGame();
