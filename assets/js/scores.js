// new array for values from a local storage
let highscoreValue = [];
 highscoreValue = getHighscores(highscoreValue);

 // retrieve values if any exists
 // idea from https://stackoverflow.com/questions/50975273/multiple-items-local-storage-javascript
function getHighscores(arr) {
    if (localStorage.getItem("userSave") === null) {
        arr = [];
        
    } else {
        arr = JSON.parse(localStorage.getItem("userSave"));
        
    }
    return arr;
}

// display highscores if there are any
function renderHighScores(arr) {
        
    var ol = document.getElementById("highscores");
    if (arr.length>0){
        ol.innerHTML = "";
        for (i = 0; i < arr.length; i++) {
           var li = document.createElement("li");
           li.appendChild(document.createTextNode(arr[i].name + "  " + arr[i].score));
           ol.appendChild(li);
       }

    }
    else {
        ol.innerHTML = ""
        var li = document.createElement("li");
           li.appendChild(document.createTextNode("No highscores saved yet"));
           ol.appendChild(li);
    }
    
}

// clear local storage
var buttonClearHighScore = document.getElementById("clear");
buttonClearHighScore.addEventListener("click", function () {

    localStorage.clear();
    renderHighScores(highscoreValue);
    alert("All records cleared");
})


// display highscores on load
renderHighScores(highscoreValue);