var score = 0;
var question1 = { question: "A dog says what?", goodAnswer: "bark", badAnswers: ["quack", "moo", "meow"]};
var question2 = { question: "Vermillion is what color?", goodAnswer: "red", badAnswers: ["blue","yellow","green"]};
var question3 = {question: "Who hasn't Batman fought?", goodAnswer: "Rocket Raccoon", badAnswers: ["Predator","Capt America","Judge Dredd"]};
var question4 = {question: "Who Directed 'Jaws'?", goodAnswer: "Steven Spielberg", badAnswers: ["David Fincher","James Cameron","Chris Columbus"]};
var question5 = {question: "What is 11 squared?", goodAnswer: "121", badAnswers: ["2","126","92"]};
var question6 = {question: "Which artist was an impressionist?", goodAnswer: "Monet", badAnswers: ["DaVinci","Klimpt","Warhol"]};
var question7 = {question: "Where does it hurt?", goodAnswer: "Everywhere", badAnswers: ["David Fincher","My foot","I don't know."]};
var question8 = {question: "Which book is not by J.R.R. Tolkien?", goodAnswer: "The Wheel of Time", badAnswers: ["The Simarillion","Farmer Giles of Ham","The Two Towers"]};
var question9 = {question: "In Javascript: (56 / (3 - 3))", goodAnswer: "Infinity", badAnswers: ["Nil","0.0000400501","NaN"]};
var question0 = {question: "GWUH?", goodAnswer: "wat", badAnswers: ["BLUH","HEYO","FLURB"]};
var $questions = [question1,question2,question3,question4,question5,question6,question7,question8,question9,question0];

                  
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
    alert("That answer is correct!\n" + "Your Score is "+score);
  } else {
    alert("Sorry, That is incorrect.\n"+"Your Score is "+score);
  }
}

function playGame(){
  var temp = randomize($questions);
  for (z = 0; z < $questions.length; z++){
    getAnswer(temp[z]);
  }
  showScore();
}

function showScore(){
  alert("Game Over, you answered " + score + " out of " + $questions.length+"\n"
  + "Your score is " + (score / $questions.length * 100)+ "%");
}

function randomize(array){
   return array.sort(function(a, b){
     return Math.random() - .5 ;
  } );
}

playGame();
