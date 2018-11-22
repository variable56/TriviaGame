//Create a landing page that will show a styled button and background

//Create a question bank as an array of objects that have questions and answers along with correct answers

const questionBank = {
      question1: { question: "Which famous pirate put hemp in his beard and lit it on fire as an intimidation tactic?", options: ["black beard", "jack sparrow"], answer: "black beard" },
      question2: { question: "What was the name of the skull and crossbones flag flown on pirate ships", options: ["Jolly Rancher", "Jolly Roger", "Dirty Harry"], answer: "Jolly Roger"}
}


//setup the game with variables correct, incorrect, missed

let correct = 0;
let incorrect = 0;
let missed = 0;
let timer = 10;

//Get the document ready for jQuery
$(document).ready(function() {
    //Click event that will trigger the 1st question selection and then start a timer.
    $("#startButton").on( "click", function() {
        
        $("#beginText").html("");
        $("#startButton").hide();
        $("#question").html(questionBank.question1.question);
        
    
});
//Display a countdown timer on screen that shows the player how much time they have to answer the question

//when a question is answered a new question is displayed and the timer starts over.
}); 



