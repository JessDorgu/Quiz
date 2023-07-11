// code for the timer to display and run
var timerEl = document.getElementById("countdown");
var startEl = document.getElementById("start-quiz");


startEl.addEventListener('click',
function countdown() {
    var timeLeft = 90;
    var timeInterval = setInterval(function(){
        if(timeLeft>1){
            timerEl.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        }else {
            timerEl.textContent='';
            clearInterval(timeInterval);
        }   
    }, 1000);
});

// unsure if this function is needed
// countdown();

var questions = [ 

    {
        question : "What does JavaScript do?",
        choice :[{text:"Make the page look nice", correct:false},{text:
        "Make the page dynamic", correct:true},{text:
        "Add structure to the document",correct:false},{text:"All of the above", correct:false}],
    
    },
    
    {

        question: "How do you link a JAvaScript file?",
        choice: [{text:"<script>", correct:true},{text: "<a href>", correct:false},{text:"<link>", correct:false},{text:"<img>", correct:false}],
    
    },
    
    {
        question : "What keyword is the most used?",
        choice: [{text:"let", correct:true},{text: "var", correct:false},{text: "const", correct:false}, {text:"new", correct:false}],
    
    },
    
    {
        question : "Which statement is true?",
        choice: [{text:"Methods and functions are the same", correct:false},
        {text:"Functions are created inside and are a part of an object",correct:false},
        {text:"Methods are the same as functions but are created inside (and a part of) an object",correct:true}, {text:"None of the above", correct:false}],
    
    },
    
    // {
    //     id:5,
    //     question : "In an object variables become known as properties?",
    //     choice: ["true","false"],
    //     answer : "false",
    
    // },
    
    // {
    //     id:6,
    //     question : "In an object funcitons become known as methods?",
    //     choice: ["true","false"],
    //     answer : "true",
    
    // },

];


var questionEl = document.getElementById("question");
var choiceEl = document.getElementById("choice-buttons");

var currentQuestionIndex=0;
var score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuesiton();
}

function showQuesiton(){
    var currentQuestion =questions[currentQuestionIndex];
    var questionNo = currentQuestionIndex+1;
    questionEl.innerHTML= questionNo + "." + currentQuestion.question;
currentQuestion.choice.forEach(choice =>{
    var button= document.createElement("button");
    button.innerHTML = choice.text;
    button.classList.add("btn");
    choiceEl.appendChild(button);
});

}

startQuiz();
