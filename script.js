var quizData = [
    {
        question: 'Who is the Single Season Homerun leader?',
        a: 'Sammy Sosa',
        b: 'Barry Bonds',
        c: 'Mark Mcquire',
        d: 'Ichiro',
        correct: 'b'
    },
    {
        question: 'Who won the 2022 World Series?',
        a: 'Seattle Mariners',
        b: 'New York Yankees',
        c: 'Los Angeles Dodgers',
        d: 'Houston Astros',
        correct: 'd'
    },
    {
        question: 'What does RBI stand for?',
        a: 'Runs batted in',
        b: 'Runners both in-play',
        c: 'Rare baseball information',
        d: 'None of the above',
        correct: 'a'
    },
    {
        question: 'Who is the 2022 AL MVP?',
        a: 'Julio Rodriguez',
        b: 'Juan Soto',
        c: 'Aaron Judge',
        d: 'Mike Trout',
        correct: 'c'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const displayTime = document.querySelector("countdown")

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
time = question.length * 4;
intervalIF = setInterval(countdown, 1000);

function countdown() {
    time--;
    displayTime();
    if (time < 1) {
      endQuiz();
    }
}



function deselectAnswers() {
    answerEls.forEach(answerEl => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <a href="/finish.html" class="button">Leaderboard`
        }
    }
})

