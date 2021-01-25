class Ball {

    constructor() {
        this.x = width/2
        this.y = height/2
        this.vy = 10
        this.vx = 10
        
        this.resetBall()
        
    }


    setup() {
        noStroke()
        
    }

    draw() {
        fill(255,255,255)
        ellipse(this.x, this.y, r * 2, r * 2)
        this.x += this.vx
        this.y += this.vy

    }
    
    bounceBall() {
        
        if (this.y < r || this.y > height - r) {
            this.vy *= - 1
        } 

        this.bounceOffPaddle()

        
    }
    bounceOffPaddle() {
        if ((this.x > xPaddle  && this.x < xPaddle + paddleWidth + r)) {
            this.vy *= -1
            this.vx *= -1
        }
        if (this.x < this.x > width - paddleWidth ) {
            this.vy *= -1
            this.vx *= -1
        }
    }

    resetBall() { // i can customise the game here 
        if (this.x < - r || this.x > width + r*2) {
            this.x = width/2
            this.y = height/2
            this.vy = 0//random(-4, 4)
            this.vx = -3//random(-4, 4)

        }
        
    }

    
}