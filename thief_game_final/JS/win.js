/**********************************************************************/
//
// window resizing
//
/**********************************************************************/

const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var winImg = document.getElementsByClassName("you_win")[0];

winImg.style.marginLeft=margLR+"vw";
winImg.style.marginRight=margLR+"vw";
winImg.style.marginTop=margTB+"vh";
winImg.style.marginBottom=margTB+"vh";
winImg.style.width=(100-2*margLR) +"vw";
winImg.style.height=(100-2*margTB) +"vh";

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

var winning_Sound = new sound("/audio/winning_sound.mp3");
winning_Sound.play();

imageMapResize();

