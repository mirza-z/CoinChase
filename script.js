var canvas = document.getElementById("myCanvas");
var bodovi = document.getElementById("bodovi");
var ctx = canvas.getContext("2d");
var score = 0;
let reqAnim;

canvas.width  = 400;
canvas.height = 800;

function animate(){
    reqAnim = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ploca.nacrtajPlocu();
    igrac.nacrtajIgraca();
    hrana.nacrtajHranu();
    if(score==20){
        window.cancelAnimationFrame(reqAnim);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);
}

function fullscreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

var ploca = new Ploca(5, 5);
var igrac = new Igrac(80, 275);
var hrana = new Hrana(80+55*getRandomInt(1, 5), 275+55*getRandomInt(1,5))
animate();

