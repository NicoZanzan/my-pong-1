class Court {

    constructor() {
        // score 
    }
    
    setup() {
        
        background(0)
        stroke(0,255,255)
        line(width/2, 0, width/2, height)
    
    }

    draw() {

        background(0)
        stroke(0,255,255)
        line(width/2, 0, width/2, height)
        ball.draw()
        ball.bounceBall()
        ball.resetBall()
        paddle1.draw()
        paddle2.draw()
        

    }

    // function keyPressed() {

    // }
    
}