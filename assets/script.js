//Questions and answers array
var quizQuestion = [
    {
        question: 'Who is the Single Season Homerun leader?', A: 'Sammy Sosa', B: 'Barry Bonds', C: 'Mark Mcquire', D: 'Ichiro',
        correctAnswer: 'b'
    },
    {
        question: 'Who won the 2022 World Series?', A: 'Seattle Mariners', B: 'New York Yankees', C: 'Los Angeles Dodgers', D: 'Houston Astros',
        correctAnswer: 'd'
    },
    {
        question: 'What does RBI stand for?', A: 'Runs batted in', B: 'Runners both in-play', C: 'Rare baseball information', D: 'None of the above',
        correctAnswer: 'a'
    },
    {
        question: 'Who is the 2022 AL MVP?', A: 'Julio Rodriguez', B: 'Juan Soto', C: 'Aaron Judge', D: 'Mike Trout',
        correctAnswer: 'c'
    }
];

//constants attached to elements
const test = document.getElementById('quiz');
const answerList = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
// answer options to store into location of html
const optionA = document.getElementById('a_answer');
const optionB = document.getElementById('b_answer');
const optionC = document.getElementById('c_answer');
const optionD = document.getElementById('d_answer');
const submitBtn = document.getElementById('submit');
const displayTime = document.getElementById("countdown");

// sets the starting question at 0 and the starting score at 0
let currentQuestion = 0
let score = 0

//start quiz with correct question and answers to appear
startQuiz()

function startQuiz() {
    uncheckedResponse();
    console.log(currentQuestion);
    const currentQuizQuestion = quizQuestion[currentQuestion];
    questionEl.innerText = currentQuizQuestion.question;
    // this allows for the text from each answer to appear on the quiz
    optionA.innerText = currentQuizQuestion.A;
    optionB.innerText = currentQuizQuestion.B;
    optionC.innerText = currentQuizQuestion.C;
    optionD.innerText = currentQuizQuestion.D;
}

// timer starts at 60 seconds
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

        // at the end of timer the game ends and provides a score

        clearInterval(timeInterval);
        test.innerHTML = `
        <h2>Your final score: ${score}/${quizQuestion.length}</h2>
        <a href="./finish.html" class="button">Leaderboard`

      }
    }, 1000);
  }

countdown();

//function allows for the answers to display
function uncheckedResponse() {
    answerList.forEach(function(answerList) {
    })
}    

//function allows for checked answers to supply a response
function checkedResponse() {
    answerList.forEach(function(answerList) {
        if(answerList.checked) {
            response = answerList.id;
        }
    });
    return response;
}

//finished quiz submit button function/ action
submitBtn.addEventListener('click', function() {
    const response = checkedResponse();
    console.log(response);
    if(response) {
       
        console.log(score);
        console.log(currentQuestion);
        console.log(quizQuestion.length);
        if(currentQuestion < quizQuestion.length) { 
            // if the answer is correct then the score increases and the next question appears
            if(response === quizQuestion[currentQuestion].correctAnswer) {
                console.log("inside correctanswerfunction");
                score++;
                currentQuestion++;
                verifyLoadQuestion();
            }
            else {
                // if the answer is incorrect the timer decreases and the next question appears
                console.log("insideelsestatement")
                timeLeft = timeLeft - 10;
                currentQuestion++;
                verifyLoadQuestion();
            }
            
        } else {
            // if the user finishes all questions the results are shown and leaderboard button is displayed
            test.innerHTML = `
            <h2>Your final score: ${score}/${quizQuestion.length}</h2>
            <a href="./finish.html" class="button">Leaderboard`
        }
    }
})


// function allows for quiz to know if should move to next question / start or if it should end quiz
function verifyLoadQuestion() {
    if(currentQuestion < quizQuestion.length){

        startQuiz()
    }else{
        test.innerHTML = `
        <h2>Your final score: ${score}/${quizQuestion.length}</h2>
        <a href="./finish.html" class="button">Leaderboard</a>`
    }
}