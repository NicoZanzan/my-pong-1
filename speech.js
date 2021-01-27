// voice recognition code 
/*
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
    ball.score = 0
    paddle1.vy = 0
    paddle2.vy = 0
    
}

function draw() {
    court.draw()
    paddle1.y = paddle1.y + paddle1.vy
    paddle2.y = paddle2.y + paddle2.vy
    
}


//voice recognition
let speech = new p5.SpeechRec()
speech.onResult = showResult
speech.continuous = true
speech.interimResults = true



function showResult() {
    console.log(speech.resultString)
        if (speech.resultString.includes("in")) { // PING
            paddle1.vy -= 1
            paddle2.vy -= 1
        }
        if (speech.resultString.includes("on")||
            (speech.resultString.includes("un")) { //PONG
            paddle1.vy += 1
            paddle2.vy += 1
        }
        if (speech.resultString.includes("clear")){ //STOP
            ball.x = width/2
            ball.y = height/2
            paddle1.vy = 0
            paddle2.vy = 0
            paddle1.y = height/2 - paddleHeight/2
            paddle2.y = height/2 - paddleHeight/2
            ball.vx = 0
            ball.vy = 0
        }
        if (speech.resultString.includes("tar")) { //START
            ball.vx = 1
            ball.vy = 1
        }
    
}
    
*/