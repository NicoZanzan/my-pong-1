class Court {

    
    setup() {
        
        background(0)
        stroke(0,255,255)
        smooth()
        frameRate(100)
        line(width/2, 0, width/2, height)
        circle(width/2, height/2, 50)
        
        
    }


    draw() {

        background(0)
        stroke(0,255,255)
        line(width/2, 0, width/2, height)
        circle(width/2, height/2, 60)
        paddle1.movePaddle()
        paddle2.movePaddle()
        ball.draw()
        ball.bounceOffLeftPaddle(paddle1)
        ball.bounceOffRightPaddle(paddle2)
        paddle1.draw()
        paddle2.draw()
        ball.bounceOffWalls()
        ball.resetBall()
        ball.updateScore()
        ball.updateCPUScore()
        this.checkGameOver()
        this.checkPlayerWin()
        

    }

    checkGameOver() {
        
        if (ball.cpuScore === 0) {
        let gameOverSign = document.getElementById("loseOnTop")
        gameOverSign.style.display = 'block'
        this.resetGame()
        
     }
    }

    checkPlayerWin() {
        if (ball.score === 10) {
         let winSign = document.getElementById("winOnTop")
         winSign.style.display = 'block'
         this.resetGame()
        }
    }

    resetGame() {

        ball.x = width/2
        ball.y = height/2
        ball.vy = 0
        ball.vx = 0
        ball.score = 0
        ball.cpuScore= 3
    
    }

}

