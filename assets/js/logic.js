
 





console.log(quizQuestions[1].options.length)

//display question
var textQuestion = document.getElementById("question-title")
textQuestion.textContent=quizQuestions.question;

// display options for each question
for(i=0;i<quizQuestions[1].options.length;i++){
var ul = document.getElementById("choices");
        var li = document.createElement("li");
        // generate a text for this li from a quizQuestions array
        li.appendChild(document.createTextNode(quizQuestions[1].options[i]));
        ul.appendChild(li);
        
}

console.log(window)