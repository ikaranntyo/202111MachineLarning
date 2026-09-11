const categories = ["前置詞", "接続詞", "副詞"];

const questions = [
  { term: "after", answers: ["前置詞", "接続詞"] },
  { term: "before", answers: ["前置詞", "接続詞", "副詞"] },
  { term: "since", answers: ["前置詞", "接続詞", "副詞"] },
  { term: "while", answers: ["接続詞"] },
  { term: "during", answers: ["前置詞"] },
  { term: "because", answers: ["接続詞"] },
  { term: "because of", answers: ["前置詞"] },
  { term: "although", answers: ["接続詞"] },
  { term: "despite", answers: ["前置詞"] },
  { term: "in spite of", answers: ["前置詞"] },
  { term: "however", answers: ["副詞"] },
  { term: "therefore", answers: ["副詞"] },
  { term: "moreover", answers: ["副詞"] },
  { term: "otherwise", answers: ["副詞"] },
  { term: "consequently", answers: ["副詞"] },
  { term: "in addition to", answers: ["前置詞"] },
  { term: "according to", answers: ["前置詞"] },
  { term: "instead of", answers: ["前置詞"] },
  { term: "unless", answers: ["接続詞"] },
  { term: "once", answers: ["接続詞", "副詞"] },
  { term: "as", answers: ["前置詞", "接続詞", "副詞"] },
  { term: "until", answers: ["前置詞", "接続詞"] },
  { term: "by", answers: ["前置詞", "副詞"] },
  { term: "for", answers: ["前置詞", "接続詞"] },
  { term: "like", answers: ["前置詞", "接続詞"] },
  { term: "than", answers: ["前置詞", "接続詞"] },
  { term: "than before", answers: ["副詞"] },
  { term: "through", answers: ["前置詞", "副詞"] },
  { term: "around", answers: ["前置詞", "副詞"] },
  { term: "across", answers: ["前置詞", "副詞"] },
  { term: "along", answers: ["前置詞", "副詞"] },
  { term: "away", answers: ["副詞"] },
  { term: "ahead", answers: ["副詞"] },
  { term: "above", answers: ["前置詞", "副詞"] },
  { term: "below", answers: ["前置詞", "副詞"] },
  { term: "beyond", answers: ["前置詞", "副詞"] },
  { term: "within", answers: ["前置詞", "副詞"] },
  { term: "inside", answers: ["前置詞", "副詞"] },
  { term: "outside", answers: ["前置詞", "副詞"] },
  { term: "under", answers: ["前置詞", "副詞"] },
  { term: "over", answers: ["前置詞", "副詞"] },
  { term: "up", answers: ["前置詞", "副詞"] },
  { term: "down", answers: ["前置詞", "副詞"] },
  { term: "off", answers: ["前置詞", "副詞"] },
  { term: "out", answers: ["前置詞", "副詞"] },
  { term: "on", answers: ["前置詞", "副詞"] },
  { term: "near", answers: ["前置詞", "副詞"] },
  { term: "opposite", answers: ["前置詞", "副詞"] },
  { term: "past", answers: ["前置詞", "副詞"] },
  { term: "apart", answers: ["副詞"] },
  { term: "together", answers: ["副詞"] },
  { term: "rather", answers: ["副詞"] },
  { term: "almost", answers: ["副詞"] },
  { term: "already", answers: ["副詞"] },
  { term: "always", answers: ["副詞"] },
  { term: "especially", answers: ["副詞"] },
  { term: "even", answers: ["副詞"] },
  { term: "ever", answers: ["副詞"] },
  { term: "frequently", answers: ["副詞"] },
  { term: "generally", answers: ["副詞"] },
  { term: "hardly", answers: ["副詞"] },
  { term: "indeed", answers: ["副詞"] },
  { term: "later", answers: ["副詞"] },
  { term: "meanwhile", answers: ["副詞"] },
  { term: "nevertheless", answers: ["副詞"] },
  { term: "previously", answers: ["副詞"] },
  { term: "recently", answers: ["副詞"] },
  { term: "still", answers: ["副詞"] },
  { term: "then", answers: ["副詞"] },
  { term: "thus", answers: ["副詞"] },
  { term: "whereas", answers: ["接続詞"] },
  { term: "whether", answers: ["接続詞"] },
  { term: "wherever", answers: ["接続詞"] },
  { term: "provided that", answers: ["接続詞"] },
  { term: "so that", answers: ["接続詞"] },
  { term: "even though", answers: ["接続詞"] },
  { term: "as soon as", answers: ["接続詞"] },
  { term: "as long as", answers: ["接続詞"] },
  { term: "in order that", answers: ["接続詞"] },
  { term: "owing to", answers: ["前置詞"] },
  { term: "due to", answers: ["前置詞"] },
  { term: "prior to", answers: ["前置詞"] },
  { term: "regardless of", answers: ["前置詞"] },
  { term: "apart from", answers: ["前置詞"] },
  { term: "except for", answers: ["前置詞"] },
  { term: "with regard to", answers: ["前置詞"] },
  { term: "in accordance with", answers: ["前置詞"] },
  { term: "on behalf of", answers: ["前置詞"] },
  { term: "in response to", answers: ["前置詞"] },
  { term: "by means of", answers: ["前置詞"] },
  { term: "in case of", answers: ["前置詞"] },
  { term: "in case", answers: ["接続詞"] },
];

const coursePanel = document.querySelector("#course-panel");
const quizPanel = document.querySelector("#quiz-panel");
const answerPanel = document.querySelector("#answer-panel");
const summaryPanel = document.querySelector("#summary-panel");
const questionElement = document.querySelector("#question");
const progressElement = document.querySelector("#progress");
const choicesElement = document.querySelector("#choices");
const resultElement = document.querySelector("#result");
const submitButton = document.querySelector("#submit");
const accuracyElement = document.querySelector("#accuracy");
const missedQuestionsElement = document.querySelector("#missed-questions");
const restartButton = document.querySelector("#restart");

let currentQuestion;
let answered = false;
let questionNumber = 0;
let sessionQuestions = [];
let missedQuestions = [];
let correctAnswers = 0;

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

function startCourse(size) {
  const courseSize = size === "all" ? questions.length : Number(size);
  sessionQuestions = shuffle(questions).slice(0, courseSize);
  missedQuestions = [];
  correctAnswers = 0;
  questionNumber = 0;
  coursePanel.hidden = true;
  summaryPanel.hidden = true;
  quizPanel.hidden = false;
  answerPanel.hidden = false;
  chooseQuestion();
}

function chooseQuestion() {
  currentQuestion = sessionQuestions[questionNumber];
  answered = false;
  questionElement.textContent = currentQuestion.term;
  progressElement.textContent = `${questionNumber + 1} / ${sessionQuestions.length} 問`;
  resultElement.textContent = "";
  resultElement.className = "result";
  submitButton.textContent = "解答する";
  submitButton.disabled = false;
  renderChoices();
}

function renderChoices() {
  choicesElement.replaceChildren(
    ...categories.map((category) => {
      const choice = document.createElement("button");
      choice.type = "button";
      choice.className = "choice";
      choice.textContent = category;
      choice.setAttribute("aria-pressed", "false");
      choice.addEventListener("click", () => {
        if (!answered) {
          choice.setAttribute(
            "aria-pressed",
            String(choice.getAttribute("aria-pressed") !== "true"),
          );
        }
      });
      return choice;
    }),
  );
}

function selectedAnswers() {
  return [...choicesElement.querySelectorAll('[aria-pressed="true"]')].map(
    (choice) => choice.textContent,
  );
}

function checkAnswer() {
  const selected = selectedAnswers();

  if (!selected.length) {
    resultElement.textContent = "用法を1つ以上選択してください。";
    resultElement.className = "result incorrect";
    return;
  }

  const correct =
    selected.length === currentQuestion.answers.length &&
    selected.every((answer) => currentQuestion.answers.includes(answer));

  answered = true;
  for (const choice of choicesElement.children) {
    choice.disabled = true;
  }

  resultElement.textContent = correct
    ? "正解！"
    : `正解：${currentQuestion.answers.join("・")}`;
  resultElement.className = `result ${correct ? "correct" : "incorrect"}`;
  if (correct) {
    correctAnswers += 1;
  } else {
    missedQuestions.push(currentQuestion);
  }
  submitButton.textContent =
    questionNumber === sessionQuestions.length - 1 ? "結果を見る" : "次の問題";
}

function showSummary() {
  quizPanel.hidden = true;
  answerPanel.hidden = true;
  summaryPanel.hidden = false;
  const accuracy = Math.round((correctAnswers / sessionQuestions.length) * 100);
  accuracyElement.textContent = `正答率：${accuracy}%（${correctAnswers} / ${sessionQuestions.length}問）`;

  missedQuestionsElement.replaceChildren();
  const title = document.createElement("h2");
  title.textContent = missedQuestions.length ? "間違った問題" : "全問正解です！";
  missedQuestionsElement.append(title);
  if (missedQuestions.length) {
    const list = document.createElement("ul");
    for (const question of missedQuestions) {
      const item = document.createElement("li");
      item.textContent = `${question.term}：${question.answers.join("・")}`;
      list.append(item);
    }
    missedQuestionsElement.append(list);
  }
}

submitButton.addEventListener("click", () => {
  if (answered) {
    if (questionNumber === sessionQuestions.length - 1) {
      showSummary();
    } else {
      questionNumber += 1;
      chooseQuestion();
    }
  } else {
    checkAnswer();
  }
});

document.querySelectorAll("[data-course-size]").forEach((button) => {
  button.addEventListener("click", () => startCourse(button.dataset.courseSize));
});

restartButton.addEventListener("click", () => {
  summaryPanel.hidden = true;
  coursePanel.hidden = false;
});
