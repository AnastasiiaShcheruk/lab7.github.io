const heading = document.createElement('h1');
heading.textContent = 'Магічна куля';
document.body.appendChild(heading);

const questionInput = document.createElement('input');
questionInput.type = 'text';
questionInput.placeholder = 'введіть своє питання...';
document.body.appendChild(questionInput);

const magicBall = document.createElement('div');
magicBall.id = 'magicBall';
document.body.appendChild(magicBall);

const ballText = document.createElement('div');
magicBall.appendChild(ballText);

const askButton = document.createElement('button');
askButton.textContent = 'задати питання';
document.body.appendChild(askButton);

const answers = [
  'так',
  'ні',
  'можливо',
  'не в цей раз',
  'навряд чи',
  'сто відсотків',
  'як повезе',
  'звісно'
];

function getRandomAnswer() {
  const randomIndex = Math.floor(Math.random() * answers.length);
  return answers[randomIndex];
}

askButton.addEventListener('click', () => {
  const question = questionInput.value.trim();

  if (!question) {
    alert('будь ласка, введіть своє питання');
    return;
  }

  if (!question.includes('?')) {
    alert('ваш запит має закінчуватись знаком питання "?"');
    return;
  }

  ballText.textContent = getRandomAnswer();

  magicBall.style.animationPlayState = 'running';

  setTimeout(() => {
    magicBall.style.animationPlayState = 'paused';
  }, 500);
});
