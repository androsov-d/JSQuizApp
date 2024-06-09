const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const questions = [
  {
    question: "Do you live in Ukraine?",
    answers: [
      {
        value: "yes",
        offer: true,
      },
      {
        value: "no",
        offer: false,
      },
    ],
  },
  {
    question: "Are you a man or a woman?",
    answers: [
      {
        value: "Man",
        offer: true,
      },
      {
        value: "Woman",
        offer: false,
      },
    ],
  },
  {
    question: "Would you like to be a hero?",
    answers: [
      {
        value: "Of course!",
        offer: true,
      },
      {
        value: "No, thanks",
        offer: false,
      },
    ],
  },
];

let currentQuestionIndex = 0;
showQuestion(currentQuestionIndex);

function showQuestion(currentQuestionIndex) {
  clearAnswers();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  for (const answer of currentQuestion.answers) {
    const answerBtn = document.createElement("button");
    console.log(answer.value);
    answerBtn.innerText = answer.value;
    answerBtn.addEventListener("click", () => {
      if (answer.offer) {
        if (currentQuestionIndex === questions.length - 1) {
          window.location.href = "https://zsu.team/";
        } else {
          currentQuestionIndex++;
          showQuestion(currentQuestionIndex);
        }
      } else window.location.href = "https://www.google.com/";
    });

    answerBtn.classList.add("btn");
    answersElement.appendChild(answerBtn);
  }
}

function clearAnswers() {
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild);
  }
}
