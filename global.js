var score = 0;
var question1 = { question: "A dog says what?", goodAnswer: "bark", badAnswers: ["quack", "moo", "meow"]};
                  
function displayQuestion(question){
  var answers = randomize(question.badAnswers.concat(question.goodAnswer));
  var display = "Question: " + question.question + "\n" + "Answers:\n" + answers.join("\n");
 return display
 
}

function getAnswer(question){
  
  var answer = prompt(displayQuestion(question));
}

function randomize(array){
   return array.sort(function(a, b){
     return Math.random() - .5 ;
  } );
}