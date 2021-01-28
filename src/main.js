

const court = new Court()
const ball = new Ball()
const paddle1 = new Paddle(true) // the isLeft returns true so it stays on the left 
const paddle2 = new Paddle(false) // this gives us a right paddle 


function setup() {
    
    speech.start() 
    const canvas = createCanvas(width, height)
    canvas.parent("canvas") 
    // ball.vx = 0
    // ball.vy = 0
    // ball.score = 0
    paddle1.vy = 0
    paddle2.vy = 0
    
}

function draw() {
    court.draw()
    //paddle1.y = paddle1.y + paddle1.vy
    //paddle2.y = paddle2.y + paddle2.vy
    court.checkGameOver()
    court.checkPlayerWin()
     
}

function refresh() {
    console.log("connected");
    window.location.reload()
}



function keyPressed() {
    if (keyCode === 83) {
        ball.vx = 3
        ball.vy = random(-1,1) 
    }
    if (keyCode === 38) {
        console.log('pressed')
        paddle1.vy -= 5
        paddle2.vy -= 5
    }
    if (keyCode === 40) {
        paddle1.vy += 5
        paddle2.vy += 5
    }

}

function keyReleased() {
    if (keyCode === 38) {
        paddle1.vy = 0
        paddle2.vy = 0
    }
    if (keyCode === 40) {
        paddle2.vy = 0
        paddle1.vy = 0
    }
}

function toggleInstructions() {
    inst = document.getElementById("section-inst");
    console.log('click')
    if (inst.style.display === "none") {
      inst.style.display = "flex"
        window.scroll(0,300)
    } else {
      inst.style.display = "none"
    }
  }





//voice recognition
let speech = new p5.SpeechRec()
speech.onResult = showResult
speech.continuous = true
speech.interimResults = true
//speech.Confidence = 0.01



function showResult() {
    console.log(speech.resultString)
        if (speech.resultString.includes("in")) { // PING // up 
            paddle1.vy -= 2
            paddle2.vy -= 2
        }
        if (speech.resultString.includes("on") ||
            speech.resultString.includes("un")) { //PONG // down
            paddle1.vy += 2
            paddle2.vy += 2
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
            ball.vx = 2
            ball.vy = random(-1,1)
        }
        
        let bshit = document.getElementById('cpu')
        bshit.innerText = speech.resultString
    
}


    
