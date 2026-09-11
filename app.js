const categories = ["前置詞", "接続詞", "副詞"];

// TOEIC Part 5で頻出の、名詞句か節かを見分けるための基本表現だけを収録しています。
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
];

const questionElement = document.querySelector("#question");
const progressElement = document.querySelector("#progress");
const choicesElement = document.querySelector("#choices");
const resultElement = document.querySelector("#result");
const submitButton = document.querySelector("#submit");

let currentQuestion;
let previousTerm;
let answered = false;
let questionNumber = 0;

function chooseQuestion() {
  const available = questions.filter((question) => question.term !== previousTerm);
  currentQuestion = available[Math.floor(Math.random() * available.length)];
  previousTerm = currentQuestion.term;
  questionNumber += 1;
  answered = false;
  questionElement.textContent = currentQuestion.term;
  progressElement.textContent = `${questionNumber} 問目`;
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
  submitButton.textContent = "次の問題";
}

submitButton.addEventListener("click", () => {
  if (answered) {
    chooseQuestion();
  } else {
    checkAnswer();
  }
});

chooseQuestion();
