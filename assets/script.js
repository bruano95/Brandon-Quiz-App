//Questions array
var quizQuestion = [
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

let currentQuestion = 0
let score = 0

//start quiz
startQuiz()

function startQuiz() {

    uncheckedResponse()
    console.log(currentQuestion) 
    const currentQuizQuestion = quizQuestion[currentQuestion]

    questionEl.innerText = currentQuizQuestion.question
    a_text.innerText = currentQuizQuestion.a
    b_text.innerText = currentQuizQuestion.b
    c_text.innerText = currentQuizQuestion.c
    d_text.innerText = currentQuizQuestion.d
}
var timeLeft = 60;
// timer function
function countdown() {
    

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
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizQuestion.length} questions correctly</h2>
        <a href="./finish.html" class="button">Leaderboard`

      }
    }, 1000);
  }

countdown();

//deslecting answers to check for correctness
function uncheckedResponse() {
    answerEls.forEach(answerEl => answerEls.checked = false)
}

//function to check if answers are correct
function checkedAnswer() {
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
    const answer = checkedAnswer()
    console.log(answer)
    if(answer) {
       
        console.log(score)
        console.log(currentQuestion)
        console.log(quizQuestion.length)
        if(currentQuestion < quizQuestion.length) { 
            if(answer === quizQuestion[currentQuestion].correct) {
                console.log("inside correctanswerfunction")
                score++
                currentQuestion++
                verifyLoadQuestion()
            }
            else {
                console.log("insideelsestatement")
                timeLeft = timeLeft - 10
                currentQuestion++
                verifyLoadQuestion()
            }
            
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizQuestion.length} questions correctly</h2>
            <a href="./finish.html" class="button">Leaderboard`
        }
    }
})

function verifyLoadQuestion(){
    if(currentQuestion < quizQuestion.length){

        startQuiz()
    }else{
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizQuestion.length} questions correctly</h2>
        <a href="./finish.html" class="button">Leaderboard</a>`
    }
}

// function initialsPage()