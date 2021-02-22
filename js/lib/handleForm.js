let formInput = document.getElementById("form-input");
let submitBtn = document.getElementById("btn-submit");
let form = document.querySelector('.formular');
let gameInterface = document.querySelector(".game-body");
let gameHeader = document.querySelector(".game-header");
let startBtn = document.querySelector(".start-button");
let playerName = document.getElementById("js-player-name");
let playerScore = document.getElementById("js-player-score");
let cpuScore = document.getElementById("js-cpu-score");
let error = document.getElementById("error");
let closeErrorAlert = document.querySelector(".close-alert");

submitBtn.addEventListener('click', function() {
  let name = formInput.value;

  if (name.length !== 0) {
    if (name.length > 13) {
      name = name.substr(0, 10) + "...";
    }

    fade(form, startBtn);
    gameHeader.classList.add("fade-in");
    console.log(gameHeader);

    localStorage.setItem("playerName", name);
    localStorage.setItem("playerScore", 0);
    localStorage.setItem("cpuScore", 0);

    playerName.innerText = localStorage.getItem("playerName");
    playerScore.innerText = localStorage.getItem("playerScore");
    cpuScore.innerText = localStorage.getItem("cpuScore");

    formInput.value = "";
  } else {
    error.classList.remove('d-none');
    error.classList.add('visible');
    error.style.opacity = 1;
    
  }
});

closeErrorAlert.addEventListener('click', function() {
  fade(error);

  let id = setTimeout(() => {
    error.classList.add("d-none");
    error.classList.remove("visible");

    clearInterval(id);
  }, 200);
});

startBtn.addEventListener('click', function () {
  console.log(startBtn.classList.contains("hidden"));
  if (!startBtn.classList.contains("hidden")) {
    fade(startBtn);
    hiddenElement(form);
    hiddenElement(startBtn);
    showElement(gameInterface);
    gameInterface.classList.add("fade-in");
  }
});

function fade(element, btn = null) {
  element.classList.add('fade-out');
  element.classList.add('d-none');

  if (btn !== null) {
    btn.classList.remove("hidden");
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