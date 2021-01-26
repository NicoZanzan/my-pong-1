

const court = new Court()
const ball = new Ball()
const paddle1 = new Paddle(true) // the isLeft returns true so it stays on the left 
const paddle2 = new Paddle(false) // this gives us a right paddle 

function preload() {
    
}

function setup() {
    
    const canvas = createCanvas(width, height)
    canvas.parent("canvas")
    ball.vx = 0
    ball.vy = 0
   
}

function draw() {
    court.draw()
    
    
}

function mousePressed() {
    ball.vx = 2
    ball.vy = random( -5,5)
}

// If Paddle2 goes vs Paddle 1
function keyReleased() {
    paddle2.movePaddle()
}


function keyPressed() {
    if (keyCode === 38) {
        paddle2.y -= 20
    }
    if (keyCode === 40) {
        paddle2.y += 20
    }
    

}