class Paddle {
    constructor(isLeft) {
        
        this.paddleWidth  = paddleWidth
        this.paddleHeight  = paddleHeight
        this.x 
        this.y = height/2 - paddleHeight/2
        this.vy = 10
        
        //create the right Paddle
        if (isLeft) {
            this.x = paddleWidth  
        } else {
            this.x = width - paddleWidth*2
        }

    }

    setup() {
        
        
    }

    movePaddle() {
        
        this.y = constrain(this.y, 0, height - this.paddleHeight)
    }

    draw() {
        fill('deeppink')
        stroke(0,255,255)
        rect(this.x, this.y, this.paddleWidth, this.paddleHeight)
        paddle1.y = paddle1.y + paddle1.vy
        paddle2.y = paddle2.y + paddle2.vy
    }
    

}