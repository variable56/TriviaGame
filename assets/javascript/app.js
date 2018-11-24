//Create a landing page that will show a styled button and background

//Create a question bank as an array of objects that have questions and answers along with correct answers

const questionBank = [
    { question: "Which famous pirate put hemp in his beard and lit it on fire as an intimidation tactic?", 
      option1: "black beard", 
      option2: "jack sparrow",
      option3: "Barbossa",
      option4: "Napoleon", 
      answer: "black beard"},
    { question: "What was the name of the skull and crossbones flag flown on pirate ships", 
      option1: "Jolly Rancher",
      option2: "Jolly Roger",
      option3: "Dirty Harry",
      option4: "Black Death", 
      answer: "Jolly Roger"},
    { question: "Not all pirates were guys, select the name of the famous female pirate",
      option1: "Anne Bonny",
      option2: "Grace McKinnon",
      option3: "Mary Green",
      option4: "Annie Ryan",
      answer: "Anne Bonny"}
];


//setup the game with variables correct, incorrect, missed

let correct = 0;
let incorrect = 0;
let missed = 0;
let timer = 11;
let currentQuestion = 0;
let totalQuestions = questionBank.length;
let Interval;



//Get the document ready for jQuery
$(document).ready(function() {

    
    $(".radioButton").hide();
    $("#nextButton").hide();
    
    //Click event that will trigger the 1st question selection and then start a timer.
    $("#startButton").on( "click", function() {
        
        $(".radioButton").show();
        $("#nextButton").show();
        $("#beginText").html("");
        $("#startButton").hide();
        timerCountdown();
        startingQuestion(currentQuestion);
});

//Function that will load the initial question
function startingQuestion(questionIndex) {
    let q = questionBank[questionIndex];
    $("#question").text((questionIndex + 1) + ". " + q.question);
    $("#opt1").text(" " + q.option1);
    $("#opt2").text(" " + q.option2);
    $("#opt3").text(" " + q.option3);
    $("#opt4").text(" " + q.option4);
    
}


//Load next question after an answer, or the timer runs out.



//Update countdown timer on screen that shows the player how much time they have to answer the question

function countdown() {
    timer--;
    $("#timer").html("<h3>Time Remaining: " + timer + "</h3>");
    if (timer === 0) {
        alert("Byargh, well shiver me timbers. Looks like ye ran outta time.");
        resetTimer();
    }    
}

//Sets the timer to countdown every second.
function timerCountdown() {
   Interval = setInterval(countdown, 1000);
}

//stops the prior countdown and resets the timer.
function resetTimer() {
    clearInterval(Interval);
    timer = 11;
}

}); 



