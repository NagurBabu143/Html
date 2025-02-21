const questions = document.querySelectorAll('.question');
const nextBtn = document.getElementById('next');
const retryBtn = document.getElementById('retry');
const resultDiv = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion.querySelector('input[type="radio"]:checked');
  if (!selectedOption) {
    alert('Please select an answer!');
    return;
  }

  const correctAnswer = currentQuestion.dataset.answer;
  if (selectedOption.value === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
});

retryBtn.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  resultDiv.style.display = 'none';
  retryBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
  showQuestion(currentQuestionIndex);
});

function showResult() {
  resultDiv.style.display = 'block';
  retryBtn.style.display = 'inline-block';
  nextBtn.style.display = 'none';
  resultDiv.textContent = `Your score: ${score} / ${questions.length}`;
}


showQuestion(currentQuestionIndex);
