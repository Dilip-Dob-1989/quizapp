const quizQuestion = [
  {
    question: "Which is the capital of india ?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answerIndex: 0,
  },
  {
    question: "Which is the president of india ?",
    options: ["Modi", "Biaden", "Murmu", "Kovind"],
    answerIndex: 2,
  },
  {
    question: "Which is the voting age in india ?",
    options: [18, 19, 20, 21],
    answerIndex: 0,
  },
  {
    question: "Sun rises in ?",
    options: ["North", "South", "East", "West"],
    answerIndex: 2,
  },
  {
    question: "Mongo is ?",
    options: ["Country", "Cloud Provider", "City", "Database"],
    answerIndex: 3,
  },
];

const totalNumberOfQuestions = quizQuestion.length;
let score = 0;
let currentQuestionIndex = 0;

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionCountDiv = document.getElementById("question-count");
const scoreDiv = document.getElementById("score");
const contentDiv = document.getElementsByClassName("content-div")[0];

nextButton.style.visibility = "hidden";
questionCountDiv.style.visibility = "hidden";
scoreDiv.style.visibility = "hidden";

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextButtonHandler);

function nextButtonHandler() {
  const userAnswer = document.querySelectorAll("[name='ans']:checked");

  if (userAnswer.length === 0) {
    contentDiv.style.backgroundColor = "red";
    return;
  }
  contentDiv.style.backgroundColor = "#333";
  calculateScore(userAnswer);
  currentQuestionIndex++;

  if (currentQuestionIndex > totalNumberOfQuestions - 1) {
    contentDiv.innerHTML = `<div>Your Scored :${score} </div>`;
    nextButton.style.visibility = "hidden";
    return;
  }

  showQuestion();
  updateProgressBar();
}

function calculateScore(userAnswer) {
  quizQuestion[currentQuestionIndex].answerIndex;

  if (
    parseInt(userAnswer[0].value) ===
    quizQuestion[currentQuestionIndex].answerIndex
  ) {
    console.log("correct answer");
    score++;
  }

  console.log(userAnswer);
}

function startQuiz() {
  nextButton.style.visibility = "visible";
  questionCountDiv.style.visibility = "visible";
  scoreDiv.style.visibility = "visible";
  startButton.style.visibility = "hidden";

  updateProgressBar();
  showQuestion();

  let questionHTML = "<div>1)This is the 1st question ?</div>";

  for (
    let index = 0;
    index < quizQuestion[currentQuestionIndex].options.length;
    index++
  ) {
    const option = quizQuestion[currentQuestionIndex].options[index];

    questionHTML =
      questionHTML +
      `<div>
        <input type="radio" name="ans" id="r${index}" value="${index}">
        <label for="r${index}">${option}</label>
        </div>`;
  }

  contentDiv.innerHTML = questionHTML;
}

function showQuestion() {
  let questionHTML = `<div>${currentQuestionIndex + 1})${
    quizQuestion[currentQuestionIndex].question
  }</div>`;

  for (
    let index = 0;
    index < quizQuestion[currentQuestionIndex].options.length;
    index++
  ) {
    const option = quizQuestion[currentQuestionIndex].options[index];

    questionHTML =
      questionHTML +
      `<div>
        <input type="radio" name="ans" id="r${index}" value="0">
        <label for="r${index}">${option}100</label>
        </div>`;
  }

  contentDiv.innerHTML = questionHTML;
}

function updateProgressBar() {
  questionCountDiv.innerText = `Question ${
    currentQuestionIndex + 1
  }/${totalNumberOfQuestions}`;
  scoreDiv.innerText = `Score ${score}`;
}
