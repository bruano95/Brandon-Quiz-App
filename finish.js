var saveButton = document.querySelector("saveButton");
var playerInput = document.querySelector("username");
var scoreInput = document.querySelector("score-total");
var msgDiv = document.querySelector("msg");
var userUsernameSpan = document.querySelector("saved-name");
var userScoreSpan = document.querySelector("saved-score");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var username = localStorage.getItem("username");
  var score = localStorage.getItem("score");

  if (!username || !score) {
    return;
  }

  userUsernameSpan.textContent = username;
  userScoreSpan.textContent = score;
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var username = document.querySelector("#name").value;
  var score = document.querySelector("#scored").value;

  if (username === "") {
    displayMessage("error", "Name cannot be blank");
  } else if (score === "") {
    displayMessage("error", "Score cannot be blank");
  } else {
    displayMessage("success", "Submitted successfully");

    localStorage.setItem("name", score);
    localStorage.setItem("score", score);
    renderLastRegistered();
  }
});
