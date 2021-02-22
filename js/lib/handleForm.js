let formInput = document.getElementById("form-input");
let submitBtn = document.getElementById("btn-submit");
let form = document.querySelector('.formular');
let gameInterface = document.querySelector(".game-body");
let startBtn = document.querySelector(".start-button");

submitBtn.addEventListener('click', function() {
  fade(form, startBtn);
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