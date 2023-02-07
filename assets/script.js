//Questions array
var quizQuestion = [
    {
        question: 'Who is the Single Season Homerun leader?',
        a: 'Sammy Sosa',
        b: 'Barry Bonds',
        c: 'Mark Mcquire',
        d: 'Ichiro',
        correctAnswer: 'b'
    },
    {
        question: 'Who won the 2022 World Series?',
        a: 'Seattle Mariners',
        b: 'New York Yankees',
        c: 'Los Angeles Dodgers',
        d: 'Houston Astros',
        correctAnswer: 'd'
    },
    {
        question: 'What does RBI stand for?',
        a: 'Runs batted in',
        b: 'Runners both in-play',
        c: 'Rare baseball information',
        d: 'None of the above',
        correctAnswer: 'a'
    },
    {
        question: 'Who is the 2022 AL MVP?',
        a: 'Julio Rodriguez',
        b: 'Juan Soto',
        c: 'Aaron Judge',
        d: 'Mike Trout',
        correctAnswer: 'c'
    }
];

//constants attached to elements
const test = document.getElementById('quiz');
const answerList = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');
const submitBtn = document.getElementById('submit');
const displayTime = document.getElementById("countdown");

let currentQuestion = 0
let score = 0

//start quiz
startQuiz()

function startQuiz() {
    uncheckedResponse();
    console.log(currentQuestion);
    const currentQuizQuestion = quizQuestion[currentQuestion];
    questionEl.innerText = currentQuizQuestion.question;
    a_answer.innerText = currentQuizQuestion.a;
    b_answer.innerText = currentQuizQuestion.b;
    c_answer.innerText = currentQuizQuestion.c;
    d_answer.innerText = currentQuizQuestion.d;
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
        test.innerHTML = `
        <h2>Your final score: ${score}/${quizQuestion.length}</h2>
        <a href="./finish.html" class="button">Leaderboard`

      }
    }, 1000);
  }

countdown();

//deslecting answers to check for correctness
function uncheckedResponse() {
    answerList.forEach(function(answerList) {
        answerList.checked = false
    })
}    

//function to check if answers are correct
function checkedAnswer() {
    let response
    answerList.forEach(function(answerList) {
        if(answerList.checked) {
            response = answerList.id
        }
    })
    return response
}

//finished quiz submit button function/ action
submitBtn.addEventListener('click', function() {
    const response = checkedAnswer()
    console.log(response)
    if(response) {
       
        console.log(score)
        console.log(currentQuestion)
        console.log(quizQuestion.length)
        if(currentQuestion < quizQuestion.length) { 
            if(response === quizQuestion[currentQuestion].correctAnswer) {
                console.log("inside correctanswerfunction")
                score++;
                currentQuestion++;
                verifyLoadQuestion();
            }
            else {
                console.log("insideelsestatement")
                timeLeft = timeLeft - 10;
                currentQuestion++;
                verifyLoadQuestion();
            }
            
        } else {
            test.innerHTML = `
            <h2>Your final score: ${score}/${quizQuestion.length}</h2>
            <a href="./finish.html" class="button">Leaderboard`
        }
    }
})

function verifyLoadQuestion(){
    if(currentQuestion < quizQuestion.length){

        startQuiz()
    }else{
        test.innerHTML = `
        <h2>Your final score: ${score}/${quizQuestion.length}</h2>
        <a href="./finish.html" class="button">Leaderboard</a>`
    }
}