const width = 900 //width canvas
const height = 400  //height canvas

//ball
const r = 10 // radius ball


// paddle //
let paddleWidth = 10;
let paddleHeight = 150




//original bounceoffpaddle logic:
/*
bounceOffLeftPaddle(p) {
    if (this.y - this.r < p.y + p.paddleHeight/2 &&
       this.y + this.r > p.y - p.paddleHeight/2  &&
       this.x - this.r < p.x + p.paddleWidth/2 ) {
           this.vx *= -1
           this.vy *= -1
           console.log('HIT')
       }
   }

   bounceOffRightPaddle(p) {
       if (this.y - this.r < p.y +p.paddleHeight/2 &&
           this.y + this.r > p.y - p.paddleHeight/2 &&
           this.x + this.r > p.x - p.paddleWidth/2) {
               this.vx *=-1
               this.vy *= -1
               console.log('HIT')
           }
   }


   bounceOffLeftPaddle(p) {
     if (this.y < p.y &&
        this.y > p.y  &&
        this.x < p.x ) {
            this.vx *= -1
            this.vy *= -1
            console.log('PADDLE HIT')
        }
    }

    bounceOffRightPaddle(p) {
        if (this.y  < p.y  &&
            this.y  > p.y  &&
            this.x  > p.x ) {
                this.vx *=-1
                this.vy *= -1
                console.log('PADDLE HIT')
            }
    }
   */