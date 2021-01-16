const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var introImg = document.getElementsByClassName("levels")[0];
//var intro_map = document.getElementById("introMapId");

introImg.style.marginLeft=margLR+"vw";
introImg.style.marginRight=margLR+"vw";
introImg.style.marginTop=margTB+"vh";
introImg.style.marginBottom=margTB+"vh";
introImg.style.width=(100-2*margLR) +"vw";
introImg.style.height=(100-2*margTB) +"vh";


var mouse_monitor = function(e) {
    var x = e.pageX-73;
    var y = e.pageY-45;
    console.log(x, y);
  }
  
  window.onload = function() {
    this.addEventListener('mousemove', mouse_monitor);
  }