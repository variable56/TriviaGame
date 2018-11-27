//Create a landing page that will show a styled button and background

//Create a question bank as an array of objects that have questions and answers along with correct answers

const questionBank = [
    { question: "Which famous pirate put hemp in his beard and lit it on fire as an intimidation tactic?", 
      option1: "black beard", 
      option2: "jack sparrow",
      option3: "Barbossa",
      option4: "Napoleon", 
      answer: 1,
      answerText: "black beard"},
    { question: "What was the name of the skull and crossbones flag flown on pirate ships", 
      option1: "Jolly Rancher",
      option2: "Jolly Roger",
      option3: "Dirty Harry",
      option4: "Black Death", 
      answer: 2,
      answerText: "Jolly Roger"},
    { question: "Not all pirates were guys, select the name of the famous female pirate",
      option1: "Anne Bonny",
      option2: "Grace McKinnon",
      option3: "Mary Green",
      option4: "Annie Ryan",
      answer: 1,
      answerText: "Anne Bonny"},
      { question: "Which of the following were alternatives to spelling the word Pirate?",
      option1: "Pyrate",
      option2: "Pirrot",
      option3: "Pyrat",
      option4: "All of the above",
      answer: 4,
      answerText: "All of the above"},
      { question: "When was the earliest documented record of piracy?",
      option1: "1300\'s",
      option2: "14th Century BC",
      option3: "1492",
      option4: "1700\'s",
      answer: 2,
      answerText: "14th Century BC"},
      { question: "Which historical figure was kidnapped by pirates?",
      option1: "Cleopatra",
      option2: "Julius Ceasar",
      option3: "Genghis Khan",
      option4: "George Washington",
      answer: 2,
      answerText: "Julius Ceasar"},
      { question: "What is the name of the legendary pirate utopia supposedly in Madagascar?",
      option1: "Tortuga",
      option2: "Jamestown",
      option3: "Gibraltor",
      option4: "Libertalia",
      answer: 4,
      answerText: "Libertalia"},
      { question: "What was the name of Blackbeards Ship?",
      option1: "The Black Pearl",
      option2: "Interceptor",
      option3: "Queen Anne\'s Revenge",
      option4: "Wabash Cannonball",
      answer: 3,
      answerText: "Queen Anne\'s Revenge"},
      { question: "Where was Blackbeards ship discovered in 1996?",
      option1: "Lake Michigan",
      option2: "Gulf of Mexico",
      option3: "North Carolina",
      option4: "Spanish Coast",
      answer: 3,
      answerText: "North Carolina"},
      { question: "What is the name of the drink of choice for Pirates?",
      option1: "Grog",
      option2: "Crown Royal",
      option3: "Rum",
      option4: "Diet Coke",
      answer: 1,
      answerText: "Grog"},
    {  question: "End of Quiz!"}
      
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
    $("#result").hide();
    
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

//Click event for answering a question, resolving correct or incorrect responses

$("#nextButton").on("click", function() {

    let selectedAnswer = $("input[name=answer]:checked").val();
        if (!selectedAnswer) {
            alert("Please select YARRR answer!");
            return;
        }
    
    if (questionBank[currentQuestion].answer == selectedAnswer) {
        correct++;
        $("#correct").html("Correct: " + correct);
        alert(questionBank[currentQuestion].answerText + " is correct!");
    }

    else {
        incorrect++;
        $("#incorrect").html("Incorrect: " + incorrect);
        alert("The correct answer is: " + questionBank[currentQuestion].answerText + ". Better luck next time.")
    }

    

    currentQuestion++;
    resetTimer();
    loadNext(currentQuestion);
})

//Load next question after an answer, or the timer runs out.

function loadNext(questionIndex) {
    timerCountdown();
    q = questionBank[questionIndex];
    $("#question").text((questionIndex + 1) + ". " + q.question);
    $("#opt1").text(" " + q.option1);
    $("#opt2").text(" " + q.option2);
    $("#opt3").text(" " + q.option3);
    $("#opt4").text(" " + q.option4);

    if (currentQuestion == 10) {
        $("#questionContainer").hide();
        $("#timer").hide();
        resetTimer();
        $("#finalScore").html("Quiz complete! You scored " + correct + " out of " + (totalQuestions -1));
        $("#result").show();
        return;
    }
}

//Update countdown timer on screen that shows the player how much time they have to answer the question

function countdown() {
    timer--;
    $("#timer").html("<h3>Time Remaining: " + timer + "</h3>");
    if (timer === 0) {
        //If they run out of time an alert will display and they will add 1 to the missed variable
        resetTimer();
        alert("Byargh, well shiver me timbers. Looks like ye ran outta time. The correct response was " + questionBank[currentQuestion].answerText + ".");
        missed++;
        $("#missed").text("Missed: " + missed);
        currentQuestion++;
        loadNext(currentQuestion);
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


//CODE PROBLEMS
//getting radio buttons to clear after each question
//getting game to stop timer after answering all questions
//Trigger end of game and display results when all questions have been answered or missed
