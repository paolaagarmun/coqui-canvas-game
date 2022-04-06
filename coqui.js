class Coqui extends Rectangle {
    constructor(x, y, width, height, fillColor = "") {
      super(x, y, width, height, fillColor);
      this.speedX = 0;
      this.speedY = 0;
      
    }
    move() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    gravity() {
        this.y +=3
    }
  }