class Igrac{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.koordinataX = 1;
        this.koordinataY = 1;
    }

    hodaj(a,b,c,d){
        this.x += a;
        this.y += b;
        this.koordinataX += c;
        this.koordinataY += d;
        if(igrac.koordinataX==hrana.koordinataX && igrac.koordinataY==hrana.koordinataY){
            score++;
            bodovi.innerHTML = "Score: "+score;
            hrana.pomjeri();
        }
    }

    nacrtajIgraca(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = "#aaaaaa";
        ctx.fill();
        ctx.stroke();
    }
}

class Ploca{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    nacrtajPlocu(){
        for(let i=0; i<this.x; i++){
            for(let j=0; j<this.y; j++){
                ctx.beginPath();
                ctx.rect(j*55+55, i*55+250, 50, 50);
                ctx.fillStyle = "#000000";
                ctx.fill();
                ctx.stroke();
            }
        }
    }
}

class Hrana{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.koordinataX = (x-80)/55+1;
        this.koordinataY = (y-275)/55+1;
    }

    pomjeri(){
        do{
            this.x = 80+55*getRandomInt(1, 5);
        this.y = 275+55*getRandomInt(1, 5);
        this.koordinataX = (this.x-80)/55+1;
        this.koordinataY = (this.y-275)/55+1;
        }while(igrac.koordinataX==hrana.koordinataX && igrac.koordinataY==hrana.koordinataY);
    }

    nacrtajHranu(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#FFFF00";
        ctx.fill();
        ctx.stroke();
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            if(igrac.x>80)
           igrac.hodaj(-55, 0, -1, 0);
        } else {
            if(igrac.x<80+(ploca.x-1)*55)
            igrac.hodaj(55, 0, 1, 0);
        }                       
    } else {
        if ( yDiff > 0 ) {
            if(igrac.y>275)
            igrac.hodaj(0, -55, 0, -1);
        } else { 
            if(igrac.y<275+(ploca.y-1)*55)
            igrac.hodaj(0, 55, 0 , 1);
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};