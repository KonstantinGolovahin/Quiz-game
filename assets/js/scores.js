
// idea from https://stackoverflow.com/questions/50975273/multiple-items-local-storage-javascript
// new array for values from a local storage
let highscoreValue = getHighscores(highscoreValue);

// retrieve values if any exists
function getHighscores(arr) {
    if (localStorage.getItem("userSave") === null) {
        arr = [];
        alert("empty array")
    } else {
        arr = JSON.parse(localStorage.getItem("userSave"));
        alert("full array " + arr)
        console.log(arr)
    }
    return arr;
}


// display highscores
function renderHighScores() {

    var ol = document.getElementById("highscores");
    ol.innerHTML = ""
     for (i = 0; i < highscoreValue.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(highscoreValue[i].name + "  " + highscoreValue[i].score));
        ol.appendChild(li);
    }
}

// clear local storage
var buttonClearHighScore = document.getElementById("clear");
buttonClearHighScore.addEventListener("click", function () {

    localStorage.clear();
})


// display highscores on load
renderHighScores();