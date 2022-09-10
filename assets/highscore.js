//Final Score Appended page

var highScore = document.querySelector("#highscore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// clear score event listener 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

//Captures local storage
// get local storage
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createli = document.createElement("li");
        createli.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createli);
    }
}

//Travels to another HTML

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});
//Retrievs highscores