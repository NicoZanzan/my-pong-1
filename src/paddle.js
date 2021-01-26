class Paddle {
    constructor(isLeft) {
        
        this.paddleWidth  = paddleWidth
        this.paddleHeight  = paddleHeight
        this.x 
        this.y = height/2 - paddleHeight/2
        this.vy = 0
        

        if (isLeft) {
            this.x = paddleWidth  
        } else {
            this.x = width - paddleWidth*2
        }

    }

    setup() {
        
        
    }

    movePaddle() {
        
        //this.y = mouseY // change to paddle1 to only control one 
        this.y = constrain(this.y, 0, height - this.paddleHeight)
    }

    draw() {
        fill(255,200,255)
        stroke(0,255,255)
        rect(this.x, this.y, this.paddleWidth, this.paddleHeight)
    }
    

}