let game_body = document.getElementById("game-body");

if (window.innerWidth > 500) {
  game_body.style.height = `${window.innerHeight - 130}px`;
} else {
  game_body.style.height = `${window.innerHeight - 80}px`;
}

// ecoute un evenement sur le redimensionnement de la page
window.onresize = function() {
  if (window.innerWidth > 500) {
    game_body.style.height = `${window.innerHeight - 130}px`;
  } else {
    game_body.style.height = `${window.innerHeight - 80}px`;
  }
}