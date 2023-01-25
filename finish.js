var saveButton = document.getElementById("#saveButton");
var player = document.getElementById("#username");
var totalScore = document.getElementById("#score-total");

function saveLastScore(){   
    var quizScore = {
      player: player.value.trim(),
      totalScore: totalScore.value.trim(),
    };
    
    localStorage.setItem("quizScore", JSON.stringify(quizScore));
    renderMessage();
}   
function renderLastScore() {
  var lastScore = JSON.parse(localStorage.getItem("quizScore"));
  if (lastScore !== null) {
  document.getElementById("saved-name").innerHTML = lastScore.player;
  document.getElementById("saved-score").innerHTML = lastScore.totalScore;
  } else {
    return;
  }
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastScore();
});

function renderMessage() {
    var lastScore = JSON.parse(localStorage.getItem("playerScore"));
    if (lastScore !== null) {
      document.querySelector(".message").textContent = lastScore.player + 
      " scored " + lastGrade.grade
    }
  }
  