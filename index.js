const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 550;

let w = canvas.width;
let h = canvas.height;


const coquiMacho = new Coqui(50, 50, 30, 30, "brown");
const coquiHembra = new Coqui(w - 100, h - 100, 30, 30, "green");


document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      coquiHembra.speedX -= 10;
      coquiHembra.speedY -= 5;
      //console.log("moving left");
      break;
    case "ArrowRight":
      coquiHembra.speedX += 5;
      coquiHembra.speedY -= 5
      //console.log("moving left");
      break;
  }
});

document.addEventListener("keyup", (e) => {
    coquiHembra.speedX = 0;
    coquiHembra.speedY = 0;
  });


let platforms = [];
let int
const animate = () => {
  int = window.requestAnimationFrame(animate);
  ctx.clearRect(0, 0, w, h);

  
  coquiHembra.draw();
  coquiMacho.draw();
  coquiHembra.gravity();
 
  coquiHembra.move();
  
  
  platforms = [
    new Rectangle(w / 4 - 25, h / 4, 150, 15, "red"),
    new Rectangle(w / 4 + 200 - 25, h / 4 + 100, 150, 15, "red"),
    new Rectangle(w / 4 + 400 - 25, h / 4 + 200, 150, 15, "red"),
  ];
  platforms.forEach((platform) => {
    platform.draw();
    let didCollide = collisionDetection(coquiHembra, platform);
    if(didCollide) {
        // coquiHembra.x = platform.x
        coquiHembra.y = platform.y - coquiHembra.height
    }
  });
  let didCollideWithCoquiMacho = collisionDetection(coquiHembra,coquiMacho);
  if (didCollideWithCoquiMacho) {
      coquiHembra.x = coquiMacho.x + coquiMacho.width
      coquiHembra.y = coquiMacho.y
      window.cancelAnimationFrame(int)
  }



};
animate();

function collisionDetection(player, object) {
  if (
    player.x < object.x + object.width &&
    player.x + player.width > object.x &&
    player.y < object.y + object.height &&
    player.y + player.height > object.y
  ) {
    return true
  } else {
      return false
  }
}
