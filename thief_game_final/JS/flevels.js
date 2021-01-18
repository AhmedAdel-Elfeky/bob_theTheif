/**********************************************************************/
//
// window resizing
//
/**********************************************************************/

const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var introImg = document.getElementsByClassName("levels")[0];

introImg.style.marginLeft=margLR+"vw";
introImg.style.marginRight=margLR+"vw";
introImg.style.marginTop=margTB+"vh";
introImg.style.marginBottom=margTB+"vh";
introImg.style.width=(100-2*margLR) +"vw";
introImg.style.height=(100-2*margTB) +"vh";



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

var audioButton= document.getElementById("levelSel_audio");
var level_S_Sound = new sound("/audio/level_selection_sound.mp3");
level_S_Sound.play();;

var soundFlag =0;
function audioControl()
{
  if(soundFlag==0)
  {
    level_S_Sound.play();;
    soundFlag=1;
  }
  else
  {
    level_S_Sound.stop();;
    soundFlag=0; 
  }
}
audioButton.addEventListener("click",audioControl);
imageMapResize();
