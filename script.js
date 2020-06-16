const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const buttonGrid = document.getElementById('btn-grid');
const inputBox = document.getElementById('input');

let shuffledQuestions, index, next, correct;
const questionElement = document.getElementById('question');

startButton.addEventListener('click', startGame);

function startGame() {
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  index = 0;
  correct = 0;
  setNextQuestion();
}

function setNextQuestion() {
  event.preventDefault();
  if(index > 0) {
    next.classList.add('hide');
    buttonGrid.removeChild(next);
  }
  inputBox.value= "";
  showQuestion(shuffledQuestions[index]);
}

function showQuestion(question) {
  event.preventDefault();
  questionElement.innerText = question.question;
  next = document.createElement('button');
  next.innerText = 'Next';
  next.classList.add('btn');
  next.addEventListener('click', selectAnswer);
  buttonGrid.appendChild(next);
}

function selectAnswer() {
  event.preventDefault();
  const answer = document.querySelector('#input').value;
  console.log(answer);
  // check if correct
  if(questions[index].answers.includes(answer)) {
    correct++;
  }
  if(shuffledQuestions.length > index + 1) {
    index++;
    setNextQuestion();
  } else {
    alert("NUMBER CORRECT: " + correct);
    next.classList.add('hide');
    buttonGrid.removeChild(next);
    questionContainerElement.classList.add('hide');
    startButton.classList.remove('hide');
  }
}

const questions = [
  {
    question: 'WHAT IS THE NAME OF THE HORSE-LIKE ANIMAL WITH BLACK AND WHITE STRIPES?',
    answers: ['ZEBRA']
  },
  {
    question: 'WHAT IS THE NAME OF THE LONG SLEEP SOME ANIMALS GO THROUGH DURING THE ENTIRE WINTER?',
    answers: ['HIBERNATION']
  }
];
