//variables
// timer
var timerDisplay = document.getElementById("time");
var timeLeft = 20;

//var displayNextQuestion = true;
//console.log(quizQuestions.length);

//display question
// add a loop through all questions
var textQuestion = document.getElementById("question-title")
//console.log(quizQuestions.length)



var numberQuestions = quizQuestions.length;
var currentQuestion = 0


// render a question and list of possible answers
function displayQiuzQuestions(id) {

        // display current question
        textQuestion.textContent = quizQuestions[id].question;
        // store correct answer for a current question
        var textAnswer = quizQuestions[id].answer
        
        // display pissible answers as a new list
        for (i = 0; i < quizQuestions[id].options.length; i++) {
                var ul = document.getElementById("choices");
                var li = document.createElement("li");

                // generate a text for this li from a quizQuestions array
                li.appendChild(document.createTextNode(quizQuestions[id].options[i]));
                ul.appendChild(li);
                // add a button for submitting a choice
                var buttonComplete = document.createElement("button");
                buttonComplete.textContent = "Select this answer"
                li.appendChild(buttonComplete)
          
                // adds event listener to a button
                buttonComplete.addEventListener("click", function () {
                        // check for correct answer
                        if (this.parentElement.textContent.startsWith(textAnswer)) {
                                displayNextQuestion(currentQuestion++);
                               
                        }




                        else {
                                // penalise player by substructing seconds from a rmaining time
                                timeLeft = timeLeft - 10;
                                displayNextQuestion(currentQuestion++);
                        }

                })
        }




        // console.log(numberQuestions)









}















// timer behaviour
function countdown() {

        var timeInterval = setInterval(function () {

                timeLeft--;
                // text visible on a screen
                timerDisplay.textContent = timeLeft + " seconds remaining";


                if (timeLeft <1) {
                        // Stops execution of action at set interval
                        clearInterval(timeInterval);
                        gameEnd();
                        timerDisplay.textContent ="Time Finished"

                }

                // timer step in milliseconds
        }, 1000);
}






// quiz starts on a button click
var buttonStartQuiz = document.getElementById("start");
buttonStartQuiz.addEventListener("click", function () {

        //  displayQiuzQuestions(currentQuestion)

        displayNextQuestion()




        countdown();
})


//displays new question
function displayNextQuestion() {
        // clear prevoius answers
        document.getElementById("choices").innerHTML = "";
        // check if any questions remains
        if (currentQuestion < numberQuestions) {

                displayQiuzQuestions(currentQuestion)
                console.log(currentQuestion)
        }
        else {
                gameEnd()
        }
}

// ends current game
function gameEnd() {
        console.log("End")
}