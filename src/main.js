

const court = new Court()
const ball = new Ball()
const paddle1 = new Paddle(true) // the isLeft returns true so it stays on the left 
const paddle2 = new Paddle(false) // this gives us a right paddle 


function setup() {
    
    speech.start() 
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

//voice recognition
let speech = new p5.SpeechRec()
speech.onResult = showResult
speech.continuous = true
speech.interimResults = true

function showResult() {
    console.log(speech.resultString)

    if (speech.resultString.includes("in")) { // PING
        paddle1.y -= 100
        paddle2.y -= 100
    }
    if (speech.resultString.includes("on")) { //PONG
        paddle1.y += 100
        paddle2.y += 100
    }
    if (speech.resultString.includes("op")){ //STOP
        ball.x = width/2
        ball.y = height/2
        ball.vx = 0
        ball.vy = 0
    }
    if (speech.resultString.includes("tar")) { //START
        ball.vx = random(-2,2)
        ball.vy = 1
    }
}
    
