class Paddle {
    constructor(isLeft) {
        
        this.paddleWidth  = paddleWidth
        this.paddleHeight  =paddleHeight
        this.xPaddle = xPaddle
        this.yPaddle  =yPaddle
        this.phChange = 0

        if (isLeft) {
            this.xPaddle = xPaddle  
        } else {
            this.xPaddle = width - xPaddle -paddleWidth
        }

    }

    setup() {
        
    }

    draw() {
        fill(255,200,255)
        rect(this.xPaddle, this.yPaddle, this.paddleWidth, this.paddleHeight)
    }
}