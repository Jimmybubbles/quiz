var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        choices: ["Position", "Window", "Standard", "Location"],
        answer: "Window"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "Which of the following can be used to call a JavaScript Code Snippet?",
        choices: ["Function/Method", "Preprocessor", "Triggering Event", "RMI"],
        answer: "Function/Method"
    },
    {
        title: "Which of the following scoping type does JavaScript use?",
        choices: ["illogical", "Segmental", "Lexical", "Literal"],
        answer: "Lexical"
    },

];
// Declared variables
var score = 0;
var questionIndex = 0;

// start quiz variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var wrapper = document.querySelector("#wrapper");
var questionsDiv = document.querySelector("#question");

//seconds left
var secondsLeft = 75;
//time interval
var holdInterval = 0;
//holds penelty time
var penalty = 10;
// new ul element to create lists
var list = document.createElement("ul");
// onclick timer button, shows user a screen display
timer.addEventListener("click", function () {
    // checking hold intervel
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                alldone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);

})

// render questions to choice div
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    list.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(list);
        list.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// event function to compare choice with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -10 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }

    // Question Index determines number question user is on
    questionIndex++;


    if (questionIndex >= questions.length) {
        //all done will append the highscore page
        alldone();
        createDiv.textContent = "End of quiz!" + "your " + score + "/" + questions.length + "correct";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}

//-----------------------------------------------------------------//


function alldone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    //heading
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    //pragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // calculates time remaining and replaces it with score
    if(secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is " + timeRemaining;

        questionsDiv.appendChild(createP2);

    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLable");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // input

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // event listener

    createSubmit.addEventListener("click", function() {
        var initials = createInput.value;

        if (initials === null){

            console.log("No Value entered");
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScore");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("highscore.html");
        }
    });

}
