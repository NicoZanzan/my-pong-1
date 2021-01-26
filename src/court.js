class Court {

    constructor() {
        // score 
        Ball.vx = 0
        Ball.vy = 0
    }
    
    setup() {
        
        background(0)
        stroke(0,255,255)
        smooth()
        frameRate(40)
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
        
        paddle1.yPaddle = mouseY; // Y is controlled by the mouse // before text recognition
        //To lock both paddles 
        paddle2.yPaddle = mouseY
        ball.draw()
        ball.bounceOffLeftPaddle(paddle1)
        ball.bounceOffRightPaddle(paddle2)
        paddle1.draw()
        paddle2.draw()
        ball.bounceOffWalls()
        ball.resetBall()
        //ball.bounceOffPaddle(paddle2.x)
        

    }

    
    
}