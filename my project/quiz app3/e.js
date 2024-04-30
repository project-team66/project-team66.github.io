const questions = [
  {
    question:
      "Which method can be used to return a string in upper case letters?",
    answers: [
      { text: "toUpperCase()  ", correct: true },
      { text: "upperCase()", correct: false },
      { text: "touppercase() ", correct: false },
      { text: "tuc()", correct: false },
    ],
  },
  {
    question: "Which operator can be used to compare two values?",
    answers: [
      { text: "=", correct: false },
      { text: "><", correct: false },
      { text: " == ", correct: true },
      { text: " <> ", correct: false },
    ],
  },
  {
    question: "To declare an array in Java, define the variable type with",
    answers: [
      { text: "()", correct: false },
      { text: "[]", correct: true },
      { text: "{}", correct: false },
      { text: " = ", correct: false },
    ],
  },
  {
    question: "How do you create a method in Java? ",
    answers: [
      { text: "methodName()  ", correct: false },
      { text: "(methodName)", correct: false },
      { text: "methodName.", correct: true },
      { text: "methodName[]", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.textContent = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
    score++;
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  nextButton.textContent = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore(); // Corrected function name
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
