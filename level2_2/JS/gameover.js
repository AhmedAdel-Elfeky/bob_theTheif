const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var gameOverImg = document.getElementsByClassName("gameOver")[0];
//var intro_map = document.getElementById("introMapId");

gameOverImg.style.marginLeft=margLR+"vw";
gameOverImg.style.marginRight=margLR+"vw";
gameOverImg.style.marginTop=margTB+"vh";
gameOverImg.style.marginBottom=margTB+"vh";
gameOverImg.style.width=(100-2*margLR) +"vw";
gameOverImg.style.height=(100-2*margTB) +"vh";


// var mouse_monitor = function(e) {
//     var x = e.pageX-73;
//     var y = e.pageY-45;
//   //  console.log(x, y);
//   }
  
//   window.onload = function() {
//     this.addEventListener('mousemove', mouse_monitor);
//   }

  imageMapResize()

