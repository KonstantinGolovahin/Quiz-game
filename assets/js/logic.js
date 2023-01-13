//variables
var timerDisplay = document.getElementById("time");


console.log(quizQuestions[1].options.length);

//display question
// add a loop through all questions
var textQuestion = document.getElementById("question-title")
textQuestion.textContent=quizQuestions[1].question;

// display options for each question
for(i=0;i<quizQuestions[1].options.length;i++){
var ul = document.getElementById("choices");
        var li = document.createElement("li");
        // generate a text for this li from a quizQuestions array
        li.appendChild(document.createTextNode(quizQuestions[1].options[i]));
        ul.appendChild(li);
        var buttonComplete = document.createElement("button"); 
        buttonComplete.textContent = "Select this answer"
        li.appendChild(buttonComplete)



// adds eventlistener to a button
buttonComplete.addEventListener ("click", function() {
           // check for correct answer
          if(this.parentElement.textContent.startsWith(quizQuestions[1].answer))
          // save updated array
          console.log(quizQuestions[1].answer) // for debug
          })



}




// timer behaviour
function countdown() {
        var timeLeft = 5;
      
      
        var timeInterval = setInterval(function () {
        
      timeLeft--;
      // text visible on a screen
      timerDisplay.textContent=timeLeft+" seconds remaining";
      
      
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        // display message after timer = 0 seconds
       // displayMessage();
       alert("Time Finished")
        
      }
      
          // timer step in milliseconds
        },1000);
      }
//countdown();