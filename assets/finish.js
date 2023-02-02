var nameInput = document.querySelector("#name");
var scoreInput = document.querySelector("#scored");
var saveButton = document.querySelector("#saveButton");
var msgDiv = document.querySelector("#msg");
var userNameSpan = document.querySelector("#saved-name");
var userScoreSpan = document.querySelector("#saved-score");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var name = localStorage.getItem("#name");
  var score = localStorage.getItem("#scored");

  if (!name || !score) {
    return;
  }

  userNameSpan.textContent = name;
  userScoreSpan.textContent = score;
}

saveButton.addEventListener("click", function(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var score = document.querySelector("#scored").value;

  if (name === "") {
    displayMessage("error", "Initials cannot be blank");
  } else if (score === "") {
    displayMessage("error", "Score cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("#name", name);
    localStorage.setItem("#scored", score);
    renderLastRegistered();
  }
});
