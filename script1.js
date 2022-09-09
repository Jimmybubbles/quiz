

// variables needed






//render questions to the question div box

function renderQuestions() {
    var questionsIndexLength = questions.length - 1;
    if (index <= questionsIndexLength) {
      document.getElementById("question").innerHTML = questions[index].title;
      }
    console.log(renderQuestions);
  }


