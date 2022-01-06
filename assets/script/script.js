var questionDiv = document.querySelector("#question");
var startButtonEl = document.querySelector("#start")
var timerEl = document.querySelector("#timer")

function countdown() {
  var timeLeft = 5;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}


// Variable for questions. Prompts the question, then you choose from an arrow of answers to see if it"s right
var questions = [
  {
    prompt: "How do we attach the Javascript file to HTML?",
    options: ["Link it like a stylesheet.", "Add a <script></script> tag with the link to the Javascript at the bottom of the body in HTML.", "You copy the Javascript directly into HTML.", "You use the browser to do it."],
    answer: "Add a <script></script> tag with the link to the Javascript at the bottom of the body in HTML.",
  },
  {
    prompt: "Where is the correct place to insert the Javascript in HTML?",
    options: ["Head", "Header", "Body", "All Three are correct"],
    answer: "Body"
  },
  {
    prompt: "External Javascript file must contain a script tag",
    options: ["True", "False"],
    answer: "False",
  },
  {
    prompt: "How do you add comments in Javascript?",
    options: ["/*comment*/", "/ comment /", "<!--comment-->>", "// comment"],
    answer: "// comment",
  },
  {
    prompt: "Javascript is the same as Java.",
    options: ["True", "False"],
    answer: "False",
  },
  {
    prompt: "Javascript is the same as JQuery.",
    options: ["False", "True"],
    answer: "False",
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
    alert("Quiz is done");
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