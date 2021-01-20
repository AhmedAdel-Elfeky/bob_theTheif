all = document.getElementsByClassName("all")[0];
text = document.getElementsByClassName("text");
divs = document.getElementsByTagName("div");
all.addEventListener("mouseover", mouseOver);
left = document.getElementsByClassName("left")[0];
center = document.getElementsByClassName("center")[0];
right = document.getElementsByClassName("right")[0];
center.addEventListener("mouseover", mouseOverBlocks);
// center.addEventListener("mouseout", mouseOut);
right.addEventListener("mouseover", mouseOverBlocks);
left.addEventListener("mouseover", mouseOverBlocks);
center.addEventListener("click", onclickCenter);
left.addEventListener("click", onclickLeft);
right.addEventListener("click", onclickRight);
// right.addEventListener("onclick", onclickRight);
// left.addEventListener("onclick", onclickLeft);
explainer = document.getElementsByClassName("explainer")[0];
function mouseOver() {
    left.style.transitionDelay = "0s";
    right.style.transitionDelay = "0s";
    center.style.transitionDelay = "0s";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
    all.style.perspective = "1000px";
    all.style.transition = "all 1.3s ease-in";
    all.style.transform = "perspective(10000px)";
    all.style.transform = "rotateX(0deg)";
    for (let texts = 0; texts < 2; texts++)
        text[texts].style.opacity = "1";
        explainer.style.opacity = "0";
}
function mouseOverBlocks() {
    center.style.boxShadow = "0 0 30px 10px rgba(193, 100, 255, 0.4)";
    center.style.backgroundColor = "rgba(193, 100, 255, 0.2)";
    left.style.boxShadow = "0 0 30px 10px rgba(193, 100, 255, 0.4)";
    left.style.backgroundColor = "rgba(193, 100, 255, 0.2)";
    right.style.boxShadow = "0 0 30px 10px rgba(193, 100, 255, 0.4)";
    right.style.backgroundColor = "rgba(193, 100, 255, 0.2)";
}
function replaceHtml(link) {
    var anchor = document.getElementById(link);
    var result = anchor.href;
    window.location = (result);
}
// function mouseOut(){
//     left.style.transform = "translateX(30px) translateZ(25px) rotateY(5deg)";
//     console.log("here");
// }
function onclickCenter() {
    replaceHtml("play");
}
function onclickLeft(){
    replaceHtml("Aboutus");
}
function onclickRight(){
    replaceHtml("how");
}



