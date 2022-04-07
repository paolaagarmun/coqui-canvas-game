class Coqui extends Rectangle {
    constructor(x, y, width, height, fillColor = "") {
      super(x, y, width, height, fillColor);
      this.speedX = 0;
      this.speedY = 0;
      
    }
    move() {
      this.x += this.speedX;
      this.y += this.speedY;

    // if (this.y + this.height > canvas.height) {
    //     this.y = canvas.height - this.height
    // }
      if (this.y + this.speedY > canvas.height ) {
        this.y = canvas.height - this.height;
        // this.speedX = 0;
        // this.speedY = 0;
      }
      if (this.y + this.speedY < 0) {
          this.y = 0
      }
      if (this.x + this.speedX > canvas.width) {
        this.x = w;
      }
      if (this.x + this.speedX < 0) {
          this.x = 0;
      }
    }
    gravity() {
        this.y +=3
    }
  }