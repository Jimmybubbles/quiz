var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
// Declared variables
var score = 0;
var questionIndex = 0;

// start quiz variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var wrapper = document.querySelector("#wrapper");
var question = document.querySelector("#question");

//seconds left
var secondsLeft = 75;
//time interval
var holdInterval = 0;
//holds penelty time
var penalty = 10;
// new ul element to create lists
var list = document.createElement("ul");
// onclick timer button, shows user a screen display
timer.addEventListener("click", function() {
// checking hold intervel
  if(holdInterval === 0) {
    holdInterval = setInterval(function (){
        secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
            alldone();
            currentTime.textContent = "Time's up!";
        }
    }, 1000);
  }
  render(question);

})

// render questions to choice div
function render(questionIndex) {
    // Clears existing data 
    // question.innerHTML = "";
    // list.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        question.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        question.appendChild(list);
        list.appendChild(listItem);
        listItem.addEventListener("click", );
    })
}
