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
        id:1,
        quesiton : "What does JavaScript do?",
        choice :["Make the page look nice",
        "Make the page dynamic",
        "Add structure to the document"],
        answer : "Make the page dynamic",
    
    },
    
    {
        id:2,
        question: "How do you link a JAvaScript file?",
        choice: ["<script>", "<a href>","<link>"],
        answer : "<script>",
    
    },
    
    {
        id:3,
        question : "What keyword is the most used?",
        choice: ["let", "var", "const"],
        answer : "let",
    
    },
    
    {
        id:4,
        question : "Which statement is true?",
        choice: ["Methods and functions are the same",
        "Functions are created inside and are a part of an object",
        "Methods are the same as functions but are created inside (and a part of) an object"],
        answer : "Methods are the same as functions but are created inside (and a part of) an object",
    
    },
    
    {
        id:5,
        question : "In an object variables become known as properties?",
        choice: ["true","false"],
        answer : "false",
    
    },
    
    {
        id:6,
        question : "In an object funcitons become known as methods?",
        choice: ["true","false"],
        answer : "true",
    
    },

];

console.log(questions);
console.log(questions.answer);


