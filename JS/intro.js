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


imageMapResize();