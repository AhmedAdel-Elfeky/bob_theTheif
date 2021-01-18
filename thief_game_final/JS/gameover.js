
/**********************************************************************/
//
// window resizing
//
/**********************************************************************/

const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var gameOverImg = document.getElementsByClassName("gameOver")[0];


gameOverImg.style.marginLeft=margLR+"vw";
gameOverImg.style.marginRight=margLR+"vw";
gameOverImg.style.marginTop=margTB+"vh";
gameOverImg.style.marginBottom=margTB+"vh";
gameOverImg.style.width=(100-2*margLR) +"vw";
gameOverImg.style.height=(100-2*margTB) +"vh";

imageMapResize()


/**************************************************************/
// making sound
/**************************************************************/

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    }
    this.stop = function () {
      this.sound.pause();
    }
  }

var gameoverSound = new sound("/audio/boiling_sound.mp3");
gameoverSound.play();


