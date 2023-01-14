// idea from https://stackoverflow.com/questions/50975273/multiple-items-local-storage-javascript
// new array for values from a local storage
let highscoreValue;
// retrieve values if any exists
function getHighscores(){
        

        if(localStorage.getItem("userSave") === null) {
                highscoreValue= [];
        } else {
                highscoreValue= JSON.parse(localStorage.getItem("userSave"));
            
        }
        return highscoreValue;
        
}


function renderHighScores() {

        for(i=0;i<highscoreValue.length;i++)
        {
                var ol = document.getElementById("highscores");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(highscoreValue[i].name+ "  " + highscoreValue[i].score));
                ol.appendChild(li);
        
        }
}

// clear local storage
var buttonClearHighScore = document.getElementById("clear");
buttonClearHighScore.addEventListener("click", function () {

        localStorage.clear();
})

getHighscores();
//console.log(tasks[0].name)