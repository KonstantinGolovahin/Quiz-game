///////////////////////////// global variables///////////////////////
// timer
var timerDisplay = document.getElementById("time");
var timeLeft;

// check if game is finished
var togglegamefinished = false;
// overall amount of questions to display
var numberQuestions = quizQuestions.length;

// User final score value
var userFinalScore;

// data storage array
var storedData = [];

// toggle visibility for current game div
var toggleQuestionVisibility = document.getElementById("questions");

// toggle visibility for game results entering div
var toggleScoreVisibility = document.getElementById("end-screen");

// define quiz question display place
var textQuestion = document.getElementById("question-title")

// define quiz answer correctness display place
var textIsCorrect = document.getElementById("validate-answer")

// User final score displayed
var userFinalScoreDisplay = document.getElementById("final-score");

//User Initials displayed
var userInitials = document.querySelector("#initials");

/////////////////////////////functions///////////////////////

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
                                textIsCorrect.textContent = "Previous answer correct";
                                displayNextQuestion(currentQuestion++);
                        }
                        else {
                                textIsCorrect.textContent = "Previous answer wrong";

                                // penalise player by substructing seconds from a remaining time
                                if (timeLeft > 10) {
                                        timeLeft = timeLeft - 10;
                                }
                                else {
                                        timeLeft = 0;
                                }
                                // display next question
                                displayNextQuestion(currentQuestion++);
                        }

                })
        }

}



// timer behaviour
function countdown() {

        var timeInterval = setInterval(function () {

                timeLeft--;
                // text visible on a screen
                timerDisplay.textContent = avoidNegative(timeLeft) + " second(s) remaining";

                if (timeLeft < 1 || togglegamefinished == true) {
                        // Stops execution of action at set interval
                        clearInterval(timeInterval);
                        gameEnd();
                        timerDisplay.textContent = "Game Finished " + avoidNegative(timeLeft) + " second(s) remaining"
                }

                // timer step in milliseconds
        }, 1000);
}

// small QOL function to avoid negative timer values
function avoidNegative(num) {
        if (num < 0) {
                num = 0;
        }
        else {
                num;
        }
        return num;
}

//displays new question
function displayNextQuestion() {
        // clear prevoius answers
        document.getElementById("choices").innerHTML = "";
        // check if any questions remains
        if (currentQuestion < numberQuestions && togglegamefinished != true) {

                displayQiuzQuestions(currentQuestion)
        }
        else {

                gameEnd()
        }
}

// ends current game
function gameEnd() {
        togglegamefinished = true;
        toggleQuestionVisibility.setAttribute("class", "hide")
        toggleScoreVisibility.setAttribute("class", "visible")
        userFinalScoreDisplay.innerHTML = avoidNegative(timeLeft);
        userFinalScore = avoidNegative(timeLeft);

}

// reset values before actual game start
function resetGame() {
        currentQuestion = 0;
        togglegamefinished = false;
        timeLeft = 60;
        textIsCorrect.textContent = "";
        toggleQuestionVisibility.setAttribute("class", "visible")
        userInitials.value = "";
        userFinalScore = 0;

}

// add user score to a local storage. First required to read from storage to avoid existing data replacement storage after page reload
function addToLocalStorage(savedData) {

        // attempt to read from local storage
        storedData = getHighscores(storedData);
        // update existing save with a new record
        storedData.push(savedData);
        // write updated save to local storage
        localStorage.setItem("userSave", JSON.stringify(storedData));
}

// read user saves from local storage to an array
function getHighscores(arr) {
        if (localStorage.getItem("userSave") === null) {
                arr = [];

        } else {
                arr = JSON.parse(localStorage.getItem("userSave"));

        }
        return arr;

}
////////////////////// buttons///////////////////////

// quiz starts on a button click
var buttonStartQuiz = document.getElementById("start");
buttonStartQuiz.addEventListener("click", function () {


        resetGame();
        displayNextQuestion();
        countdown();
})

// save user results ot a local storage
var buttonSubmitResults = document.getElementById("submit");
buttonSubmitResults.addEventListener("click", function () {

        // avoid fully empty input
        if (userInitials.value === "") {
                userInitials.value = "Anonymous"
        }
        // hide this section
        if (toggleScoreVisibility.className === "visible") {
                toggleScoreVisibility.setAttribute("class", "hide")
        }


        // user data object 
        let userSave = {
                name: userInitials.value,
                score: userFinalScore,

        }
        // save data to local storage
        addToLocalStorage(userSave)
})
