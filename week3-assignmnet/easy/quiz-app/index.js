let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = '';
    currentQuizData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => selectChoice(choice);
        choicesElement.appendChild(button);
    });
}

function selectChoice(choice) {
    const currentQuizData = quizData[currentQuestion];
    if (choice === currentQuizData.correct) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
}

function submitQuiz() {
    if (currentQuestion < quizData.length) {
        showResult();
    }
}

window.onload = loadQuestion;
