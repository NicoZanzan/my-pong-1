class Ball {

    constructor() {
        this.x = width/2
        this.y = height/2
        this.vy = 0
        this.vx = 0
        this.score = 0
        this.cpuScore= 0
        
        this.resetBall()
        
    }


    setup() {
        noStroke()
        
    }

    draw() {
        fill(0,255,255)
        stroke(255,200,255)
        ellipse(this.x, this.y, r * 2, r * 2)
        this.x += this.vx
        this.y += this.vy

    }
    
    bounceOffWalls() {
        
        if (this.y < r || this.y > height - r) {
            this.vy *= - 1
            //console.log('HIT')
        } 

        //this.bounceOffPaddle()

        
    }

    bounceOffLeftPaddle(p) {
        if (this.x - r < p.x + paddleWidth/2  &&
            this.y -r*2 > p.y - paddleHeight/2 &&
            this.y - r < p.y + paddleHeight) {
               this.vx *= -1.1
               this.vy = Math.floor(random(-4, 4))
               this.score ++
               this.updateScore()
               //console.log(this.score)
               //console.log('PADDLE HIT')
           }
       }
   
       bounceOffRightPaddle(p) {
           if (this.x  > p.x - paddleWidth/2 &&
               this.y  < p.y + paddleHeight &&
               this.y - r*2 > p.y - paddleHeight/2) {
               
                   this.vx *= -1.1
                   this.vy = Math.floor(random(-4, 4))
                   this.score ++
                   this.updateScore()
               //console.log(this.score)
                   //console.log('PADDLE HIT')
               }
       }
    /*
    bounceOffLeftPaddle(p) {
        //console.log(p.y, p.x)
        if (this.y - this.r < p.y + paddleHeight/2 &&
           this.y + this.r > p.y - paddleHeight/2  &&
           this.x - this.r < p.x + paddleWidth/2) {
            console.log('PADDLE')
            this.vx *= -1
            this.vy *= -1
            console.log('HIT')
           }
       }
    
       bounceOffRightPaddle(p) {
           if (this.y - this.r < p.y + paddleHeight/2 &&
               this.y + this.r > p.y - paddleHeight/2 &&
               this.x + this.r > p.x - paddleWidth/2) {
                   this.vx *=-1
                   this.vy *= -1
                   console.log('HIT')
               }
       }
       */

    resetBall() { // i can customise the game here 
        if (this.x < - r || this.x > width + r*2) {
            this.x = width/2
            this.y = height/2
            this.vy = random(-3,3)
            this.vx = 2
            this.score = 0
            this.cpuScore++
            if (this.cpuScore === 3) {
                console.log("GAME OVER")
            }

        } 
        
    }
    updateScore() {
    
        let playerScore = document.querySelector('.player-score span')
        //console.log('update score: ', playerScore)
        playerScore.innerText = this.score
    }

    updateCPUScore() {
        let cpuScore = document.querySelector('.CPU-score span')
        cpuScore.innerText = this.cpuScore
    }

}

    
