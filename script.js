// for that, we have created an array of objects, 
// in which each object has a question and corresponding options and 
// the information of the correct answer. 
// With this array of objects, we have the JSON format so it helps us to deal 
// with the API and to deal with the real data which is of JSON type most of the time.

// var for minutes


const questions [{
        
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
        {"string", isCorrect: false}, 
        {"true/false", isCorrect: true}, 
        {"error", isCorrect: false}
    ]
    
}

{   
    id:3,
    q: "Which of the following methods can be used to display data in some form using Javascript? ",
    a: [{ text: "document.getElementbyID", isCorrect:false }, 
        { text: "console.log", isCorrect:true },
        { text: "document.length": isCorrect:false},
        { text: ""}],
    answer: [0]
},

];

var start = true;

function iterate(id) {

    //getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // getting the question
    const question = document.getElementById("question");

    // setting the question text
    question.innerText = Questions[id].q;

    // getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    
    // providing the option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op2.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
    
    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "grey";
        op2.style.backgroundColor = "blue";
        op3.style.backgroundColor = "blue";
        op4.style.backgroundColor = "blue";
        selected = op1.value;
    })

        // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "grey";
        op2.style.backgroundColor = "blue";
        op3.style.backgroundColor = "blue";
        op4.style.backgroundColor = "blue";
        selected = op2.value;
    })

    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "grey";
        op2.style.backgroundColor = "blue";
        op3.style.backgroundColor = "blue";
        op4.style.backgroundColor = "blue";
        selected = op3.value;
    })

    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "grey";
        op2.style.backgroundColor = "blue";
        op3.style.backgroundColor = "blue";
        op4.style.backgroundColor = "blue";
        selected = op4.value;
    })

    // Grabbing the ecaluated button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
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
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
})







t = setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEL.innerHTML = `${minutes}:${seconds}`;

    time--;

    if(time === -1){
        clearInterval(t);
    }
    
}


