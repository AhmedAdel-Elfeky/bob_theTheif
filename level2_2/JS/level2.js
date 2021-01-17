const margLR = (73 / 1366) * 100;
const margTB = (45 / 604) * 100;
var backGroundImage = document.getElementsByClassName("back")[0];
backGroundImage.style.marginLeft = margLR + "vw";
backGroundImage.style.marginRight = margLR + "vw";
backGroundImage.style.marginTop = margTB + "vh";
backGroundImage.style.marginBottom = margTB + "vh";
backGroundImage.style.width = (100 - 2 * margLR) + "vw"
backGroundImage.style.height = (100 - 2 * margTB) + "vh"
/////////////////////////////////////////////////////////////
function resize(top,left,elementid){
  let positionLeft=(left/1366)*100;
  let positionTop=(top/604)*100;
  let element= document.getElementById(elementid);
  element.style.top=positionTop+"vh";
  element.style.left=positionLeft+"vw";
}
resize(62,950,"Level")
resize(60,140,"countDown")
resize(60,300,"coinCounterDiv")
resize(490,280,"coinDiv1")
resize(410,630,"coinDiv2")
resize(110,320,"coinDiv3")
resize(210,780,"coinDiv4")
resize(310,520,"coinDiv5")

/*********************************************************************************************/
// Class Name: Charcter
// Class Description: This Class contains Properties and Methos Of Game Charcter
// Methods : 
//            1- animate()
//            2- onWindowResize() 
/*********************************************************************************************/
class Character {

  constructor(x, y, z) {
    this.xposition = x
    this.yposition = y
    this.zposition = z
    this.loader = {}
    this.scene = {}
    this.obj = {}
    this.animate = this.animate.bind(this);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera)
  }


  onWindowResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

}

/************************************ Intialization OF The Game Charcter *************************************/

function init(charcterSize, src, sceneDiv, Gameobj) {
  Gameobj.container = document.querySelector("." + sceneDiv);
  Gameobj.scene = new THREE.Scene();
  let fov = charcterSize; // the distance between image and screen
  //const aspect = Gameobj.container.clientWidth / Gameobj.container.clientHeight;
  const aspect = 1366/607;
  const near = 0.1;
  const far = 100000;

  //Camera setup
  Gameobj.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  Gameobj.camera.position.set(Gameobj.xposition, Gameobj.yposition, Gameobj.zposition);

  const ambient = new THREE.AmbientLight(0x404040, 9); //5 for lightening
  Gameobj.scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(50, 50, 100);
  Gameobj.scene.add(light);

  //Renderer
  Gameobj.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  Gameobj.renderer.setSize(Gameobj.container.clientWidth, Gameobj.container.clientHeight);
  Gameobj.renderer.setPixelRatio(window.devicePixelRatio);
  Gameobj.container.appendChild(Gameobj.renderer.domElement);
  Gameobj.loader = new THREE.GLTFLoader();

  Gameobj.loader.load(src, function (gltf) {
    Gameobj.scene.add(gltf.scene);
    Gameobj.obj = gltf.scene.children[0]
  });

  window.addEventListener("resize", Gameobj.onWindowResize);
}

/******************************** Theif intialization *********************************************/
var theif_up_rotation = 3;
var theif_down_rotation = -13;
var theif_left_rotation = -1.5;
var theif_right_rotation = 1.5;

let theif = new Character(7, -11.1, 50)
init(50, "theif/scene.gltf", "scene", theif);

theif.animate();

/******************************** OFFICER1 intialization *******************************************/
var police_up_rotation = 4;
var police_down_rotation = 1;
var police_left_rotation = 5;
var police_right_rotation = 2;

let police1 = new Character(20, -125, 700)
init(95, "police/scene.gltf", "scene1", police1);

police1.animate();

/********************************** OFFICER2 Intialization *********************************************/

let police2 = new Character(15, 360, 700)
init(95, "police/scene.gltf", "scene2", police2)

police2.animate();

/******************************************************************************************************/

/*************************************** Control Movement Of Robber **************************************/

window.addEventListener('keydown', keySelection);

function keySelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
    case 32:
      spaceKeyPressed();
      break;
    case 82:
      replaceHtml("reload")
  }
};

function leftArrowPressed() {

  //first floor
  if (theif.xposition <= 32 && (theif.yposition == 18 || theif.yposition == 11 || theif.yposition == 3.5 || theif.yposition == -3.7 || theif.yposition == -11.1)) {
    theif.xposition++;
    theif.obj.rotation.z = theif_left_rotation;

    if ((theif.xposition == 10 || theif.xposition == 11) && (theif.yposition == 18 || theif.yposition == 11 || theif.yposition == -11.1)) {
      theif.xposition = 14;
    }
    else if ((theif.xposition == -14 || theif.xposition == -13) && (theif.yposition == 3.5 || theif.yposition == -11.1)) {
      theif.xposition = -10
    }
    else if ((theif.xposition == 18 || theif.xposition == 19) && (theif.yposition == 3.5 || theif.yposition == -3.7)) {
      theif.xposition = 22;
    }

    if (theif.xposition == 33) {
      theif.obj.rotation.z = theif_down_rotation;
    }
  }
  if ((theif.xposition >= 23 && theif.xposition <= 25) && (theif.yposition == 17 || theif.yposition == 10)
    || ((theif.xposition < -23 && theif.xposition >= -26) && (theif.yposition == 11 || theif.yposition == 10 || theif.yposition == 2.5))
    || ((theif.xposition >= 27 && theif.xposition < 30) && (theif.yposition == 2.5 || theif.yposition == -4.7))
    || ((theif.xposition >= -2 && theif.xposition < 1) && (theif.yposition == -12.1 || theif.yposition == -4.7))) {
    theif.xposition++;
    theif.obj.rotation.z = theif_left_rotation;

  }

  theif.camera.position.set(theif.xposition, theif.yposition, theif.zposition);
  console.log(theif.xposition, theif.yposition);

}

function rightArrowPressed() {

  //first floor
  if (theif.xposition >= -32 && (theif.yposition == 18 || theif.yposition == 11 || theif.yposition == 3.5 || (theif.yposition == -3.7 && theif.xposition > -10) || theif.yposition == -11.1)) {
    theif.xposition--;
    theif.obj.rotation.z = theif_right_rotation;
    if ((theif.xposition == 14 || theif.xposition == 13) && (theif.yposition == 18 || theif.yposition == 11 || theif.yposition == -11.1)) {
      theif.xposition = 10;
    }
    else if ((theif.xposition == -10 || theif.xposition == -11) && (theif.yposition == 3.5 || theif.yposition == -11.1)) {
      theif.xposition = -14
    }
    else if ((theif.xposition == 22 || theif.xposition == 21) && (theif.yposition == 3.5 || theif.yposition == -3.7)) {
      theif.xposition = 18
    }

    if (theif.xposition == -33) {
      theif.obj.rotation.z = theif_down_rotation;
    }
  }

  if (((theif.xposition >= 24 && theif.xposition <= 26) && (theif.yposition == 17 || theif.yposition == 10))
    || ((theif.xposition <= -23 && theif.xposition >= -25) && (theif.yposition == 11 || theif.yposition == 10 || theif.yposition == 2.5))
    || ((theif.xposition > 27 && theif.xposition <= 30) && (theif.yposition == 2.5 || theif.yposition == -4.7))
    || ((theif.xposition >= -1 && theif.xposition <= 1) && (theif.yposition == -12.1 || theif.yposition == -4.7))) {
    theif.xposition--;
    theif.obj.rotation.z = theif_right_rotation;
  }
  theif.camera.position.set(theif.xposition, theif.yposition, theif.zposition);
}

function upArrowPressed() {
  //first floor
  if ((theif.xposition >= 23 && theif.xposition <= 26)
    && (theif.yposition == 18 || theif.yposition == 17 || (theif.yposition <= 11 && theif.yposition >= 9))) {
    theif.yposition--;
    theif.obj.rotation.z = theif_up_rotation;
    if (theif.yposition == 16) {
      theif.yposition = 11;
      theif.obj.rotation.z = theif_down_rotation;
    }
    else if (theif.yposition == 9) {
      theif.yposition = 18; // first floor
      theif.obj.rotation.z = theif_down_rotation;
    }
  }
  else if (theif.xposition >= 27 && theif.xposition <= 30) {
    if (theif.yposition == 3.5 || theif.yposition == 2.5) {
      theif.obj.rotation.z = theif_up_rotation
      if (theif.yposition == 2.5) {
        theif.yposition = -2.7;
        theif.obj.rotation.z = theif_down_rotation;
      }
      else if (theif.yposition == -4.7) {
        theif.yposition = 3.5;
        theif.obj.rotation.z = theif_down_rotation;
      }
      theif.yposition--;
    }
    else if (theif.yposition == -3.7) {
      theif.yposition--;
      theif.obj.rotation.z = theif_up_rotation;
    }
    else if (theif.yposition == -4.7) {
      theif.yposition = 3.5;
      theif.obj.rotation.z = theif_down_rotation;
    }
  }
  else if (theif.xposition >= -2 && theif.xposition <= 1) {
    if (theif.yposition == -3.7 || theif.yposition == -4.7) {
      theif.obj.rotation.z = theif_up_rotation
      if (theif.yposition == -4.7) {
        theif.yposition = -10.1;
        theif.obj.rotation.z = theif_down_rotation;
      }
      else if (theif.yposition == -12.1) {
        theif.yposition = -3.7;
        theif.obj.rotation.z = theif_down_rotation;
      }
      theif.yposition--;
    }
    else if (theif.yposition == -11.1) {
      theif.yposition--;
      theif.obj.rotation.z = theif_up_rotation;
    }
    else if (theif.yposition == -12.1) {
      theif.yposition = -3.7;
      theif.obj.rotation.z = theif_down_rotation;
    }
  }


  if (theif.yposition == 9 && (theif.xposition >= 24 && theif.xposition <= 26)) {
    theif.yposition = 18;
    theif.obj.rotation.z = theif_down_rotation;
  }
  else if ((theif.xposition <= -23 && theif.xposition >= -26) && (theif.yposition >= 1 && theif.yposition <= 11)) {
    theif.yposition--;
    theif.obj.rotation.z = theif_up_rotation;
    if (theif.yposition == 9) {
      theif.obj.rotation.z = theif_down_rotation;
      theif.yposition = 3.5; // third floor
    }
    if (theif.yposition == 1.5) {
      theif.yposition = 11;
      theif.obj.rotation.z = theif_down_rotation;
    }

  }
  theif.camera.position.set(theif.xposition, theif.yposition, theif.zposition);
}

function downArrowPressed() {
  //first floor
  if (((theif.xposition >= 23 && theif.xposition <= 26) && (theif.yposition == 16 || theif.yposition == 17 || theif.yposition == 10))
    || ((theif.xposition <= -23 && theif.xposition >= -26) && (theif.yposition == 10 || theif.yposition == 9 || theif.yposition == 2.5))
    || ((theif.xposition >= 27 && theif.xposition <= 30) && (theif.yposition == -4.7 || theif.yposition == 2.5))
    || ((theif.xposition >= -2 && theif.xposition <= 1) && (theif.yposition == -4.7 || theif.yposition == -12.1))
  ) {
    theif.yposition++;
  }
  theif.obj.rotation.z = theif_down_rotation;
  theif.camera.position.set(theif.xposition, theif.yposition, theif.zposition);
}

/*************************************************************************************************************/

var back = document.images[0];
var pnum = 1;
window.setInterval(f, 350);

function f() {
  if (pnum == 1) {
    pnum = 0;
    back.src = "imgs/backG1.jpg"
  }
  else {
    back.src = "imgs/backG2.jpg"
    pnum = 1;
  }
}

/******************************* Cotrol The Movement Of Police Offiecer *************************************/

window.setInterval(autoMove, 50)

var bool = 0
var bool1 = 0
var start = 0


function autoMove() {

  if (!start) {
    police1.obj.rotation.z = police_left_rotation;
    police2.obj.rotation.z = police_left_rotation;
    police1.camera.position.set(police1.xposition * 4, police1.yposition, police1.zposition);
    police2.camera.position.set(police2.xposition * 4, police2.yposition, police2.zposition);
    start = 1
  }

  if (police1.xposition == 120) {
    bool = 1
    police1.obj.rotation.z = police_right_rotation;
  }

  else if (police1.xposition == -70) {
    police1.obj.rotation.z = police_left_rotation;
    bool = 0
  }

  if (police2.xposition == 73) {
    bool1 = 1
    police2.obj.rotation.z = police_right_rotation;
  }

  else if (police2.xposition == -260) {
    police2.obj.rotation.z = police_left_rotation;
    bool1 = 0
  }

  if (!bool)
    police1.xposition++;

  else
    police1.xposition--;

  if (!bool1)
    police2.xposition++;

  else
    police2.xposition--;
  police1.camera.position.set(police1.xposition * 4, police1.yposition, police1.zposition);
  police2.camera.position.set(police2.xposition * 4, police2.yposition, police2.zposition);
}

/*************************************************************************************************************/

var loseTimer;
function checkdeath() {
  if (theif.yposition == -3.7) /* police1 floor*/ {
    if (police1.obj.rotation.z == police_left_rotation && (theif.xposition <= 17 && theif.xposition >= (police1.xposition / 8))) /* 17-door_x)*/ {
      replaceHtml("gameover")
      clearInterval(loseTimer);
    }

    else if (police1.obj.rotation.z == police_right_rotation && (theif.xposition >= -10 && theif.xposition <= (police1.xposition / 8))) /* -10 wall)*/ {
      replaceHtml("gameover")
      clearInterval(loseTimer);
    }
  }
  else if (theif.yposition == 11) {
    if (police2.obj.rotation.z == police_left_rotation && (theif.xposition <= 10 && theif.xposition >= (police2.xposition / 8))) {
      replaceHtml("gameover")
      clearInterval(loseTimer);
    }

    else if (police2.obj.rotation.z == police_right_rotation && (theif.xposition >= -33 && theif.xposition <= (police2.xposition / 8))) {
      replaceHtml("gameover")
      clearInterval(loseTimer);
    }
  }
}

loseTimer = setInterval(checkdeath, 400);

/***********************************   Coin And Timer *******************************************************/

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

var CoinDiv = document.getElementsByClassName("coinDiv")
  var CoinCounterDiv = document.getElementById("coinCounterDiv")
var coin = 0;
let mySound = new sound("/audio/coin.wav");
let BG_music = new sound("/audio/Robbery_Bob_Soundtracks.mp3");

function spaceKeyPressed() {
  if (coin != 5) {
    //First Floor

    if (theif.xposition == 32 && theif.yposition == 18) {
      coin++;
      CoinDiv[0].style.display = "inline"
      mySound.play();
    }

    // second floor
    else if (theif.xposition == 4 && theif.yposition == 11) {
      CoinDiv[1].style.display = "inline"
      coin++;
      mySound.play();
    }

    //Third Floor
    else if (theif.xposition == 11 && theif.yposition == 3.5) {
      CoinDiv[4].style.display = "inline"
      coin++;
      mySound.play();
    }
    //Fourth Floor
    else if (theif.xposition == -8 && theif.yposition == -3.7) {
      coin++;
      CoinDiv[3].style.display = "inline"
      mySound.play();
    }


    else if (theif.xposition == 28 && theif.yposition == -11.1) {
      coin++;
      CoinDiv[2].style.display = "inline"
      mySound.play();
    }


  }
}


function coinCounter() {
  CoinCounterDiv.innerHTML = coin + "/" + "5"
  // CoinDiv[0].style.display = "none"
  // CoinDiv[1].style.display = "none"
  // CoinDiv[2].style.display = "none"
  // CoinDiv[3].style.display = "none"
  // CoinDiv[4].style.display = "none"
}

// Count Down Timer 

var second = 120; //Number of seconds
var counterDiv = document.getElementById("countDown")

function secondPass() {

  var minutes = Math.floor(second / 60);
  var remindSecond = second % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (remindSecond < 10) {
    remindSecond = "0" + remindSecond;
  }
  counterDiv.innerHTML = minutes + ":" + remindSecond;
  if (second > 0) {
    second = second - 1;
  }
  else {
    replaceHtml("gameover")
  }

}

let Count = setInterval(function () {
  secondPass();
  coinCounter();
  BG_music.play();
}, 1000);


function replaceHtml(link) {
  var anchor = document.getElementById(link);
  var result = anchor.href;
  location.replace(result);
}


setInterval(youWin,10);
function youWin(){
  if(coin===5 && theif.xposition===-22 && theif.yposition ===-11.1)
  {
    replaceHtml("win")
  }
}