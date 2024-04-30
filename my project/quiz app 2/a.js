const questions = [
  {
    question: "Which operator is used to add together two values?",
    answers: [
      { text: "The * sign", correct: false },
      { text: "The + sign", correct: true },
      { text: "The & sign", correct: false },
    ],
  },
  {
    question: "How do you insert COMMENTS in Java code?",
    answers: [
      { text: "# This is a comment", correct: false },
      { text: "/* This is a comment", correct: false },
      { text: "// This is a comment  ", correct: true },
    ],
  },
  {
    question:
      "Which data type is used to create a variable that should store text?",
    answers: [
      { text: "string", correct: false },
      { text: "Txt", correct: false },
      { text: "myString", correct: false },
      { text: "String  ", correct: true },
    ],
  },
  {
    question: "Which method can be used to find the length of a string? ",
    answers: [
      { text: "len()", correct: false },
      { text: "getSize()", correct: false },
      { text: "length()", correct: true },
      { text: "getLength()", correct: false },
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
