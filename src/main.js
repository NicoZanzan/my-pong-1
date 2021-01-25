

const court = new Court()
const ball = new Ball()
const paddle1 = new Paddle(true) // the isLeft returns true so it stays on the left 
const paddle2 = new Paddle(false) // this gives us a right paddle 

function preload() {
    
}

function setup() {
    
    const canvas = createCanvas(width, height)
    canvas.parent("canvas")
    
   
}

function draw() {
    court.draw()
}