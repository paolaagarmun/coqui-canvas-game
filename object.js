class Rectangle {
    constructor(x, y, width, height, fillColor = "") {
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
      this.fillColor = fillColor;
    }
  
    area() {
      return this.width * this.height;
    }
  
    left() {
      return this.x;
    }
    right() {
      return this.x + this.width;
    }
    top() {
      return this.y;
    }
    bottom() {
      return this.y + this.height;
    }
  
    draw() {
      const { x, y, width, height, fillColor } = this;
      ctx.save();
      ctx.fillStyle = fillColor;
  
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.fill();
  
      ctx.restore();
    }
  }