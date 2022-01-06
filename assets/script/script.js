var questionDiv = document.querySelector("#question");


// Start the Quiz
function



var questions = [
  {
    prompt: "What is the color of the sky?",
    options: ["Red", "Blue", "Green", "Yellow"],
    answer: "Blue",
  },
  {
    prompt: "Which shape is round?",
    options: ["Square", "Triangle", "Trapezoid", "Circle"],
    answer: "Circle",
  },
];

var questionIdx = 0;

function handleOptionClick(event) {
  // IF user clicked an answer-btn
  if (event.target.matches(".answer-btn")) {
    alert(event.target.dataset.answer === "1");
    questionIdx += 1;
    showQuestion();
  }
}

function showQuestion() {
  questionDiv.innerHTML = "";

  if (questionIdx >= questions.length) {
    alert("No more questions");
    return;
  }

  var question = questions[questionIdx];

  // create h2
  var h2 = document.createElement("h2");
  // set h2 text to question prompt
  h2.textContent = question.prompt;
  // append h2 to questionDiv
  questionDiv.append(h2);

  // create answers div
  var answersDiv = document.createElement("div");

  // set class to "answers"
  answersDiv.classList.add("answers");
  // append answers div to questionDiv
  questionDiv.appendChild(answersDiv);

  // for each element of question options
  for (var i = 0; i < question.options.length; i++) {
    var optionText = question.options[i];
    var btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = optionText;

    // check if option is the answer
    if (optionText === question.answer) {
      btn.dataset.answer = 1;
    } else {
      btn.dataset.answers = 0;
    }

    answersDiv.appendChild(btn);
  }
}

// init page
questionDiv.addEventListener("click", handleOptionClick);
showQuestion();