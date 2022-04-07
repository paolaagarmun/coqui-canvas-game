document.getElementById("start-button").onclick = () => {
  startGame();
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 550;

let w = canvas.width;
let h = canvas.height;
let gameOn = false;

const coquiMacho = new Coqui(50, 50, 30, 30, "brown");
const coquiHembra = new Coqui(w - 100, h - 100, 30, 30, "green");

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      coquiHembra.speedX -= 5;
      coquiHembra.speedY -= 5;
      break;
    case "ArrowRight":
      coquiHembra.speedX += 5;
      coquiHembra.speedY -= 5;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  coquiHembra.speedX = 0;
  coquiHembra.speedY = 0;
});

let ramaId = 0;
let platforms = [];
function createPlatforms() {
  platforms.push(new Ramas(ramaId));
  ramaId++;
}

const startGame = () => {
  if (!gameOn) {
    gameOn = true;
    setInterval(createPlatforms, 800);
    animate();
  }
};

let int;
const gameOver = () => {
  window.cancelAnimationFrame(int);
  ctx.clearRect(0, 0, w, h);
  gameOn = false;
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

const animate = () => {
  int = window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, w, h);

  coquiHembra.draw();
  coquiMacho.draw();
  coquiHembra.gravity();

  coquiHembra.move();

  platforms.forEach((platform) => {
    platform.draw();
    let didCollide = collisionDetection(coquiHembra, platform);
    if (didCollide) {
      coquiHembra.y = platform.y - coquiHembra.height;

    }
  });
  let didCollideWithCoquiMacho = collisionDetection(coquiHembra, coquiMacho);
  if (didCollideWithCoquiMacho) {
    coquiHembra.x = coquiMacho.x + coquiMacho.width;
    coquiHembra.y = coquiMacho.y;
    gameOver();
  }
};

function collisionDetection(player, object) {
  if (
    player.x < object.x + object.width &&
    player.x + player.width > object.x &&
    player.y < object.y + object.height &&
    player.y + player.height > object.y
  ) {
    return true;
  } else {
    return false;
  }
}
