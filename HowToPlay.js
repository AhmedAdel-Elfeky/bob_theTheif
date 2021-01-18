Return=document.getElementById("return");
Return.addEventListener("click", returnFun);
function replaceHtml(url){
    var anchor = document.getElementById(url);
    var result = anchor.href;
    window.location= result;
}
function returnFun(){
    replaceHtml("Menu")
}

