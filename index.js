const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 550;

let w = canvas.width;
let h = canvas.height

/// Reactangle class /////////////////

class Rectangle {
    constructor (x, y, width, height, fillColor='')
    {
        this.x = Number(x);
        this.y = Number(y);
        this.width = Number(width);
        this.height = Number(height);
        this.fillColor = fillColor
    }

    area() {
        return this.width * this.height
    }

    left() {
        return this.x
    }
    right() {
        return this.x + this.width
    }
    top() {
        return this.y
    }
    bottom() {
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

class Coqui extends Rectangle {
    constructor(x, y, width, height, fillColor=''){
        super(x,y,width,height,fillColor)
    }
    moveUp() {
        this.y -= 100
    }
    //TODO NEED GRAVITY ///////////////////////////////
    // moveDown() {
    //     this.y += 50
    // }
    //TODO: Make this a random number????
    moveLeft() {
        this.x -= 30
    }

}

// MALE COQUI /////////////////////////////////
//let coquiMacho = new Image()
const coquiMacho = new Coqui(50,50,30,30,'brown')
coquiMacho.draw();
//FEMALE COQUI ///////////////////////////////
const coquiHembra = new Coqui(w-100,h-100, 30, 30, 'green')
coquiHembra.draw();

//Platforms///////////////////////////////////
let platforms = [

    new Rectangle(w/4-25,h/4,150,15,'red'),
    new Rectangle(w/4+200-25,h/4+100,150,15,'red'),
    new Rectangle(w/4+400-25,h/4+200,150,15,'red'),
]
platforms.forEach(platform=>platform.draw())

//try event listener to make female coqui jump
document.addEventListener('keydown', e => {
    switch (e.code) {
        case "Space": 
            coquiHembra.moveUp();
            console.log("jump!")
            break;
        case 'ArrowLeft':
            coquiHembra.moveLeft();
            console.log("moving left")
            break; 
    }
})

const animate = () => {
    ctx.clearRect(0,0, w, h)
    
    coquiHembra.draw()
    coquiMacho.draw();
    let platforms = [

        new Rectangle(w/4-25,h/4,150,15,'red'),
        new Rectangle(w/4+200-25,h/4+100,150,15,'red'),
        new Rectangle(w/4+400-25,h/4+200,150,15,'red'),
    ]
    platforms.forEach(platform=> {
        platform.draw()
        collisionDetection(coquiHembra, platform);
    })
 
    
    window.requestAnimationFrame(animate)
  }
animate();


function collisionDetection(coqui, platform) {
    if (
        coqui.x < platform.x + platform.width &&
        coqui.x + coqui.width > platform.x &&
        coqui.y < platform.y + platform.height &&
        coqui.y + coqui.height > platform.y
    ) {
        console.log("COLLISION DETECTED")
    }
}