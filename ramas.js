class Ramas extends Rectangle{
    constructor()  {
        super();
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height
        this.width = Math.floor(Math.random()*(100-80+1)+80);
        this.height = 10
        this.fillColor = "red"
        
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