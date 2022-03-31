const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 550;

let w = canvas.width;
let h = canvas.height

/// Reactangle class /////////////////

class Rectangle {
    constructor (x=0, y=0, width=0, height=0, fillColor='')
    {
        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
        this.fillColor = fillColor
    }

    get area() {
        return this.width * this.height
    }

    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }

    draw () {
        const {x,y,width,height,fillColor} = this
        ctx.save();
        ctx.fillStyle = fillColor

        ctx.beginPath();
        ctx.rect(x,y,width,height)
        ctx.fill();

        ctx.restore()
    }
}

// MALE COQUI /////////////////////////////////
//let coquiMacho = new Image()
const coquiMacho = new Rectangle(50,50,30,30,'brown')
coquiMacho.draw();
//FEMALE COQUI ///////////////////////////////
const coquiHembra = new Rectangle(w-100,h-100, 30, 30, 'green')
coquiHembra.draw();

//Platforms///////////////////////////////////
let platforms = [

    new Rectangle(w/4,h/4,150,15,'red'),
    new Rectangle(w/4+200,h/4+100,150,15,'red'),
    new Rectangle(w/4+400,h/4+200,150,15,'red'),
]
platforms.forEach(platform=>platform.draw())
