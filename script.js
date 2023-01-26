//Questions array
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

//constants attached to elements
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const displayTime = document.getElementById("countdown");

let currentQuiz = 0
let score = 0

//start quiz
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
// timer function
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {

      if (timeLeft > 1) {

        displayTime.textContent = timeLeft + ' seconds remaining';

        timeLeft--;
      } else if (timeLeft === 1) {

        displayTime.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {

        displayTime.textContent = '';

        clearInterval(timeInterval);
        sendMessage();
      }
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = " ";
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
  
  }

countdown()

//deslecting answers to check for correctness
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEls.checked = false)
}

//function to check if answers are correct
function getSelected() {
    let answer
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}

//finished quiz submit button function/ action
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

