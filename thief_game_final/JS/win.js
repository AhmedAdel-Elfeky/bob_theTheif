const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var winImg = document.getElementsByClassName("you_win")[0];

winImg.style.marginLeft=margLR+"vw";
winImg.style.marginRight=margLR+"vw";
winImg.style.marginTop=margTB+"vh";
winImg.style.marginBottom=margTB+"vh";
winImg.style.width=(100-2*margLR) +"vw";
winImg.style.height=(100-2*margTB) +"vh";

var mouse_monitor = function(e) {
    var x = e.pageX-73;
    var y = e.pageY-45;
    console.log(x, y);
  }
  
  window.onload = function() {
    this.addEventListener('mousemove', mouse_monitor);
  }
  imageMapResize();