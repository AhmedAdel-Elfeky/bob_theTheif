var count = 0

var photo = document.getElementById("photos");
var script = document.getElementById("script");
var script1 = document.getElementById("script1");
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

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//         currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }
setInterval(repeat, 2000);

















// setInterval(changeState,1000)
// function changeState(){
//     count++
//     var image1 = document.getElementsByTagName("img")[0] 
//     var image2 = document.getElementsByTagName("img")[1]
//     var image3 = document.getElementsByTagName("img")[2]
//     var paragraph = document.getElementsByClassName('message')[0]

//     if(count === 1){
//         image1.setAttribute('src','pp1.jpg')
//     }

//     if(count === 2){
//         image1.setAttribute('src','nihal1.jpg')
//     }

//    else if(count === 3){
//         image1.setAttribute('src','ehab1.jpg')

//     }

//     if(count === 4){
//         image1.setAttribute('src','elfeky1.jpg')
//         count=0
//     }

// }