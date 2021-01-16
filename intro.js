const margLR=(73/1366)*100;
const margTB=(45/604)*100;
var introImg = document.getElementsByClassName("start")[0];
var intro_map = document.getElementById("introMapId");

introImg.style.marginLeft=margLR+"vw";
introImg.style.marginRight=margLR+"vw";
introImg.style.marginTop=margTB+"vh";
introImg.style.marginBottom=margTB+"vh";
introImg.style.width=(100-2*margLR) +"vw";
introImg.style.height=(100-2*margTB) +"vh";
// console.log(introImg.style.width);
// var x_center=(((100-2*margLR)/100)*screen.width)*.498;
// console.log(x_center);
// var y_center=(((100-2*margTB)/100)*screen.height)*.57;
// console.log(y_center);
// var distance=(70/1280)*(screen.width);
// console.log(distance);
// var r_center=distance;
// console.log(r_center);
// intro_map.coords='"'+x_center+','+y_center+','+r_center+'"';


// var mouse_monitor = function(e) {
//     var x = e.pageX;
//     var y = e.pageY;
//     console.log(x, y);
//   }
  
//   window.onload = function() {
//     this.addEventListener('mousemove', mouse_monitor);
//   }