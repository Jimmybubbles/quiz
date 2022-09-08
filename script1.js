var sec = 3;
var time = setInterval(quizTimer, 1000);

function quizTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    
    if (sec === 0){
        clearInterval(time);
        alert("time limit up! :(");
    }
    sec--;
}

// when time limit is up return to the home page


//----------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------//

// Questions will be asked
const Questions = [{
    id: 0,
    q: "What operator returns the remainder left over when one operand is divided by a second operand.",
    a: [{ text: "+=", isCorrect:false}, 
        { text: "&", isCorrect:false},
        { text: "%", isCorrect:true},
        { text: "#", isCorrect:false}
    ]

},

{
    id: 1,
    q: "What does .length do in JavaScript?",
    a: [{ text: "returns length of time", isCorrect:false}, 
        { text: "returns length of string", isCorrect:true}, 
        { text: "returns length of flexbox", isCorrect:false},
        { text: "returns length of css", isCorrect:false}
    ]

},

{
    id: 2,
    q: "what does a boolean return?",
    a: [{ text: "number", isCorrect:false}, 
        { text: "string", isCorrect: false}, 
        { text: "true/false", isCorrect: true}, 
        { text: "error", isCorrect: false}
    ]

},

{   
    id:3,
    q: "Which of the following methods can be used to display data in some form using Javascript? ",
    a: [{ text: "document.getElementbyID", isCorrect:false }, 
        { text: "console.log", isCorrect:true },
        { text: "document.length", isCorrect:false},
        { text: "document.void", isCorrect:false}],

},

]

//----------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------//


// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    selected = op1.value;
    })

// Show selection for op2
op2.addEventListener("click", () => {
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        //prints the true/false
        result[0].innerHTML = "Correct answer  ";
        result[0].style.color = "green";
    } else {
        // WHEN I answer a question incorrectly
        //THEN time is subtracted from the clock
        document.getElementById('timer')
        sec -= 5
        if (sec == 0){
            location.reload();
        }
        result[0].innerHTML = "Incorrect answer";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 4) {
    id++;
    iterate(id);
    console.log(id);
}

})



