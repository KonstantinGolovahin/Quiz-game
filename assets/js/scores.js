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
    // sort highscores desc (idea from https://www.scaler.com/topics/javascript-sort-an-array-of-objects/)
    let sortedArr = arr.sort((p1, p2) => (p1.score < p2.score) ? 1 : (p1.score > p2.score) ? -1 : 0);

    var ol = document.getElementById("highscores");
    if (sortedArr.length>0){
        ol.innerHTML = "";
        for (i = 0; i < sortedArr.length; i++) {
           var li = document.createElement("li");
           li.appendChild(document.createTextNode(sortedArr[i].name + "  " + sortedArr[i].score));
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
    window.location.reload();
    alert("All records cleared");
   
})


// display highscores on load
renderHighScores(highscoreValue);