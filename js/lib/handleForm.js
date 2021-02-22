let formInput = document.getElementById("form-input");
let submitBtn = document.getElementById("btn-submit");
let form = document.querySelector('.formular');
let gameInterface = document.querySelector(".game-body");
let gameHeader = document.querySelector(".game-header");
let startBtn = document.querySelector(".start-button");
let playerName = document.getElementById("js-player-name");
let playerScore = document.getElementById("js-player-score");
let cpuScore = document.getElementById("js-cpu-score");

submitBtn.addEventListener('click', function() {
  fade(form, startBtn);
  gameHeader.classList.add("fade-in");

  localStorage.setItem("playerName", formInput.value);
  localStorage.setItem("playerScore", 0);
  localStorage.setItem("cpuScore", 0);

  playerName.innerText = localStorage.getItem("playerName");
  playerScore.innerText = localStorage.getItem("playerScore");
  cpuScore.innerText = localStorage.getItem("cpuScore");

  formInput.value = "";
});

startBtn.addEventListener('click', function () {
  fade(startBtn);
  hiddenElement(form);
  hiddenElement(startBtn);
  showElement(gameInterface);
  gameInterface.classList.add("fade-in");
});

function fade(element, btn = null) {
  element.classList.add('fade-out');

  if (btn !== null) {
    let id = setTimeout(() => {
      btn.classList.add('fade-in-60');

      clearInterval(id);
    }, 500);
  }
}

function hiddenElement(element) {
  element.classList.remove('visible');
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
  element.classList.add('visible');
}