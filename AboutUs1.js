var photo = document.getElementById("photos");
var script = document.getElementById("script");
var script1 = document.getElementById("script1");
var Return = document.getElementById("return");
Return.addEventListener("click", returnFun)
const usersPhotos = ['aboutUs_img/pp1.jpg', 'aboutUs_img/ehab1.jpg', 'aboutUs_img/nihal.jpg', 'aboutUs_img/elfeky1.jpg'];
const usersNames = ["Mohamed Elieba", "Ahmed Ehab", "Nihal Magdy Ali","Ahmed Adel Elfeqy"];
var usersDescription =
    [
        "Graduated from : faculty of engineering Mounifia universty<br> Department : communication",
        "Graduated from : future high institute of engineering <br> Department : communication",
        "Graduated from : faculty of engineering Benha universty<br> Department : computer engineerning",
        "Graduated from : faculty of engineering Alexandria universty<br> Department : communication"
    ];

var Margins = [400, 600, 800];
var counter = 0;
var marginCounter=0;

repeat(); 

function repeat() {
   
    photo.setAttribute('src', usersPhotos[Math.floor(counter / 3)]);
    photo.style.marginLeft = Margins[marginCounter] + "px";
    if(marginCounter==1)
    {
        script.innerHTML = usersNames[Math.floor(counter / 3)];
        script1.innerHTML = usersDescription[Math.floor(counter / 3)];
    }
    else
    {
        script.innerHTML ="<br>";
        script1.innerHTML = "<br>";
    }
    counter++;
    marginCounter++;
    if (counter > 11) {
        counter = 0;
    }
    if(marginCounter>2)
    {
        marginCounter=0;
    }
   
}


setInterval(repeat, 2000);

function replaceHtml(link) {
    var anchor = document.getElementById(link);
    var result = anchor.href;
    window.location = (result);
}

function returnFun(){
    replaceHtml("return-menu")
}