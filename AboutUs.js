
var k = 0
var interval_id
photo = document.getElementById("photos")
script = document.getElementById("script")
script1 = document.getElementById("script1")
function repeat(k) {
    var i = 400;
    photo.style.marginLeft = "400px";
    script.innerHTML = "<br><br><br><br>";
    script1.innerHTML = "<br><br><br><br><br>";
    photo.style.visibility = 'hidden';
    function slide() {
        photo.style.marginLeft = i + "px";
        console.log(photo.style.marginLeft)
        if (i == 571) {
            if (k == 0) {
                photo.style.background = "url('pp1.jpg')"
                script.innerHTML = "Mohamed Elieba";
                script1.innerHTML = "Graduated from : faculty of engineering Mounifia universty<br> Department : communication";
            }
            else if (k == 1) {
                photo.style.background = "url('ehab1.jpg')"
                script.innerHTML = "Ahmed Ehab";
                script1.innerHTML = "Graduated from : future high institute of engineering <br> Department : communication";
            }
            else if (k == 2) {
                photo.style.background = "url('elfeky1.jpg')"
                script.innerHTML = "Ahmed Adel Elfeqy";
                script1.innerHTML = "Graduated from : faculty of engineering Alexandria universty<br> Department : communication";
            }
            else {
                photo.style.background = "url('nihal1.jpg')"
                script.innerHTML = "Nihal Magdy Ali";
                script1.innerHTML = "Graduated from : faculty of engineering Benha universty<br> Department : computer engineerning";
            }
            script.style.display = "inline-block";
            script1.style.display = "inline-block";
        }

        if (photo.style.marginLeft == "801px") {
            x = setTimeout(hide, 1000);
            clearTimeout(x)
        }
        if (i <= 571)
            clearInterval(interval1)
        else
            clearInterval(interval2)
        /* for (var j = 1; j < interval_id; j++)
             window.clearInterval(j);*/
    }
    while (i <= 570) {
        photo.style.visibility = 'visible'
        interval1 = setInterval(slide, 1000)
        i++;
    }

    setTimeout(second, 3500);
    function second() {
        while (i <= 800) {
            i++;
            script.innerHTML = "<br><br><br><br>";
            script1.innerHTML = "<br><br><br><br><br>";
            photo.style.visibility = 'visible'
            interval2 = setInterval(slide, 9000)
        }
    }
    function hide() {
        photo.style.visibility = 'hidden'
    }

}
function switchPhotos() {
    //setTimeout(1000)
    repeat(k);
    k++;
    if (k == 4)
        k = 0;
}

setInterval(switchPhotos, 1000);

//setInterval(repeat, 5000);
