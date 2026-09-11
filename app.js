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

const translations = {
  after: { 前置詞: "〜の後に", 接続詞: "〜した後で" },
  before: { 前置詞: "〜の前に", 接続詞: "〜する前に", 副詞: "以前に" },
  since: { 前置詞: "〜以来", 接続詞: "〜して以来", 副詞: "それ以来" },
  while: { 接続詞: "〜する間に" },
  during: { 前置詞: "〜の間に" },
  because: { 接続詞: "なぜなら〜だから" },
  "because of": { 前置詞: "〜のために" },
  although: { 接続詞: "〜だけれども" },
  despite: { 前置詞: "〜にもかかわらず" },
  "in spite of": { 前置詞: "〜にもかかわらず" },
  however: { 副詞: "しかしながら" },
  therefore: { 副詞: "したがって" },
  moreover: { 副詞: "さらに" },
  otherwise: { 副詞: "さもなければ" },
  consequently: { 副詞: "結果として" },
  "in addition to": { 前置詞: "〜に加えて" },
  "according to": { 前置詞: "〜によれば" },
  "instead of": { 前置詞: "〜の代わりに" },
  unless: { 接続詞: "〜しない限り" },
  once: { 接続詞: "いったん〜すると", 副詞: "かつて" },
  as: { 前置詞: "〜として", 接続詞: "〜なので", 副詞: "同じくらい" },
  until: { 前置詞: "〜まで", 接続詞: "〜するまで" },
  by: { 前置詞: "〜までに", 副詞: "そばに" },
  for: { 前置詞: "〜のために", 接続詞: "というのも〜だから" },
  like: { 前置詞: "〜のような", 接続詞: "〜するように" },
  than: { 前置詞: "〜よりも", 接続詞: "〜よりも" },
  "than before": { 副詞: "以前よりも" },
  through: { 前置詞: "〜を通して", 副詞: "通り抜けて" },
  around: { 前置詞: "〜の周りに", 副詞: "あちこちに" },
  across: { 前置詞: "〜を横切って", 副詞: "向こう側へ" },
  along: { 前置詞: "〜に沿って", 副詞: "前へ" },
  away: { 副詞: "離れて" },
  ahead: { 副詞: "前方に" },
  above: { 前置詞: "〜より上に", 副詞: "上に" },
  below: { 前置詞: "〜より下に", 副詞: "下に" },
  beyond: { 前置詞: "〜を越えて", 副詞: "その向こうに" },
  within: { 前置詞: "〜以内に", 副詞: "中に" },
  inside: { 前置詞: "〜の中に", 副詞: "中へ" },
  outside: { 前置詞: "〜の外に", 副詞: "外へ" },
  under: { 前置詞: "〜の下に", 副詞: "下に" },
  over: { 前置詞: "〜の上に", 副詞: "上に" },
  up: { 前置詞: "〜を上って", 副詞: "上へ" },
  down: { 前置詞: "〜を下って", 副詞: "下へ" },
  off: { 前置詞: "〜から離れて", 副詞: "離れて" },
  out: { 前置詞: "〜の外へ", 副詞: "外へ" },
  on: { 前置詞: "〜の上に", 副詞: "続いて" },
  near: { 前置詞: "〜の近くに", 副詞: "近くに" },
  opposite: { 前置詞: "〜の向かいに", 副詞: "向かいに" },
  past: { 前置詞: "〜を過ぎて", 副詞: "過ぎ去って" },
  apart: { 副詞: "離れて" },
  together: { 副詞: "一緒に" },
  rather: { 副詞: "むしろ" },
  almost: { 副詞: "ほとんど" },
  already: { 副詞: "すでに" },
  always: { 副詞: "いつも" },
  especially: { 副詞: "特に" },
  even: { 副詞: "〜でさえ" },
  ever: { 副詞: "これまでに" },
  frequently: { 副詞: "頻繁に" },
  generally: { 副詞: "一般的に" },
  hardly: { 副詞: "ほとんど〜ない" },
  indeed: { 副詞: "実に" },
  later: { 副詞: "後で" },
  meanwhile: { 副詞: "その間に" },
  nevertheless: { 副詞: "それにもかかわらず" },
  previously: { 副詞: "以前に" },
  recently: { 副詞: "最近" },
  still: { 副詞: "まだ" },
  then: { 副詞: "そのとき" },
  thus: { 副詞: "このように" },
  whereas: { 接続詞: "〜である一方で" },
  whether: { 接続詞: "〜かどうか" },
  wherever: { 接続詞: "どこで〜しても" },
  "provided that": { 接続詞: "〜という条件で" },
  "so that": { 接続詞: "〜するように" },
  "even though": { 接続詞: "〜にもかかわらず" },
  "as soon as": { 接続詞: "〜するとすぐに" },
  "as long as": { 接続詞: "〜する限り" },
  "in order that": { 接続詞: "〜するために" },
  "owing to": { 前置詞: "〜のために" },
  "due to": { 前置詞: "〜のために" },
  "prior to": { 前置詞: "〜の前に" },
  "regardless of": { 前置詞: "〜に関係なく" },
  "apart from": { 前置詞: "〜は別として" },
  "except for": { 前置詞: "〜を除いて" },
  "with regard to": { 前置詞: "〜に関して" },
  "in accordance with": { 前置詞: "〜に従って" },
  "on behalf of": { 前置詞: "〜を代表して" },
  "in response to": { 前置詞: "〜に応じて" },
  "by means of": { 前置詞: "〜によって" },
  "in case of": { 前置詞: "〜の場合に" },
  "in case": { 接続詞: "〜の場合に備えて" },
};

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

function usageTranslations(question) {
  return question.answers.map((answer) => ({
    category: answer,
    translation: translations[question.term][answer],
  }));
}

function usageExample(term, category, translation) {
  if (term === "after" && category === "前置詞") {
    return {
      beforeTerm: "We went home ",
      afterTerm: " the meeting.",
      translation: "私たちは会議の後、帰宅しました。",
    };
  }

  if (term === "after" && category === "接続詞") {
    return {
      beforeTerm: "She called me ",
      afterTerm: " she arrived.",
      translation: "彼女は到着した後、私に電話しました。",
    };
  }

  return {
    beforeTerm: "This is an example using ",
    afterTerm: ".",
    translation: `これは「${term}」を${category}として使い、「${translation}」という意味を表す例です。`,
  };
}

function createUsageCard(term, usage, showExample) {
  const card = document.createElement("section");
  card.className = "usage-card";

  const heading = document.createElement("h3");
  heading.textContent = `${usage.category}：${usage.translation}`;
  card.append(heading);
  if (showExample) {
    const example = usageExample(term, usage.category, usage.translation);
    const sentence = document.createElement("p");
    sentence.className = "example-sentence";
    sentence.append(example.beforeTerm, document.createElement("strong"), example.afterTerm);
    sentence.querySelector("strong").textContent = term;
    const japaneseTranslation = document.createElement("p");
    japaneseTranslation.className = "japanese-translation";
    japaneseTranslation.textContent = example.translation;
    card.append(sentence, japaneseTranslation);
  }
  return card;
}

function renderUsageDetails(container, question, showExample = false) {
  container.append(
    ...usageTranslations(question).map((usage) =>
      createUsageCard(question.term, usage, showExample),
    ),
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

  resultElement.replaceChildren();
  const message = document.createElement("p");
  message.className = "result-message";
  message.textContent = correct ? "正解！" : "正解：";
  resultElement.append(message);
  renderUsageDetails(resultElement, currentQuestion);
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
  title.textContent = missedQuestions.length ? "結果一覧" : "全問正解です！";
  missedQuestionsElement.append(title);
  for (const question of sessionQuestions) {
    const details = document.createElement("section");
    details.className = "question-details";
    const term = document.createElement("h3");
    term.textContent = question.term;
    details.append(term);
    renderUsageDetails(details, question, true);
    missedQuestionsElement.append(details);
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
