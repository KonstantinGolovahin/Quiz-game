//variables
// timer
var timerDisplay = document.getElementById("time");
var timeLeft = 20;

var toggleQuestionVisibility = document.getElementById("questions");
var togglegamefinished = false;
//console.log(quizQuestions.length);

//display question
// add a loop through all questions
var textQuestion = document.getElementById("question-title")
//console.log(quizQuestions.length)



var numberQuestions = quizQuestions.length;
//var currentQuestion = 0


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
                                // penalise player by substructing seconds from a remaining time
                                if(timeLeft>10) {
                                        timeLeft = timeLeft - 10;
                                }
                                else {
                                        timeLeft=0;   
                                }
                                
                                
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
                timerDisplay.textContent = avoidNegative(timeLeft) + " second(s) remaining";


                if (timeLeft <1 ||togglegamefinished==true) {
                        // Stops execution of action at set interval
                        clearInterval(timeInterval);
                        gameEnd();
                        timerDisplay.textContent ="Game Finished " + avoidNegative(timeLeft) + " second(s) remaining"

                }

                // timer step in milliseconds
        }, 1000);
}

// small QOL function to avoid negative timer values
function avoidNegative(num){
        if(num<0){
                num=0;
        }
        else{
                num;
        }
        return num;
}




// quiz starts on a button click
var buttonStartQuiz = document.getElementById("start");
buttonStartQuiz.addEventListener("click", function () {

       
        resetGame();

        displayNextQuestion();




        countdown();
})


//displays new question
function displayNextQuestion() {
        // clear prevoius answers
        document.getElementById("choices").innerHTML = "";
        // check if any questions remains
        if (currentQuestion < numberQuestions && togglegamefinished != true) {

                displayQiuzQuestions(currentQuestion)
               // console.log(currentQuestion)
        }
        else {
                
                gameEnd()
        }
}

// ends current game
function gameEnd() {
        //console.log("End")
        togglegamefinished=true;
        toggleQuestionVisibility.setAttribute("class","hide")

}

// rsset values before actual game start
function resetGame(){
        currentQuestion=0;
        togglegamefinished=false;
        timeLeft = 20;
        toggleQuestionVisibility.setAttribute("class","visible")
}