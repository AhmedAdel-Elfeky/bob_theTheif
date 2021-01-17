
var scrn=document.querySelector(".scene1");

var margLR=(73/1366)*100;
var margTB=(45/604)*100;
var backGroundImage = document.getElementsByClassName("back")[0];
backGroundImage.style.marginLeft=margLR+"vw";
backGroundImage.style.marginRight=margLR+"vw";
backGroundImage.style.marginTop=margTB+"vh";
backGroundImage.style.marginBottom=margTB+"vh";
backGroundImage.style.width=(100-2*margLR) +"vw";
backGroundImage.style.height=(100-2*margTB) +"vh";

function BackGroundResize()
{
  margLR=((73/1366)*scrn.clientWidth);
  margTB=((45/1366)*scrn.clientHeight);
  backGroundImage.style.marginLeft=margLR;
  backGroundImage.style.marginRight=margLR;
  backGroundImage.style.marginTop=margTB;
  backGroundImage.style.marginBottom=margTB;
  backGroundImage.style.width=(scrn.clientWidth-2*margLR);
  backGroundImage.style.height=(scrn.clientHeight-2*margTB);
  console.log(container.clientWidth,container.clientHeight)
}

window.addEventListener("resize", BackGroundResize);

let container;
let camera;
let renderer;
let scene;
let thief;
let theif_x=7;
let theif_y=-11.1;

var thief_up_rotation=3;
var thief_down_rotation=-13;
var thief_left_rotation=-1.5;
var thief_right_rotation=1.5;

var thief_size = 50;


function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

 
var fov = thief_size; // the distance between image and screen
//const aspect = container.clientWidth/container.clientHeight;
const aspect=1366/607;
console.log(container.clientWidth,container.clientHeight);
const near = 0.1;
const far = 100000;


  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(theif_x, theif_y, thief_size);

  const ambient = new THREE.AmbientLight(0x404040, 9); //5 for lightening
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(50, 50, 100);
  scene.add(light);

  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("./thief/scene.gltf", function (gltf) {
    scene.add(gltf.scene);
    thief = gltf.scene.children[0];
    
    animate(); // to show the thief at the screen
  });
}

function animate() {
  requestAnimationFrame(animate);
  //thief.rotation.z = 1.5; // rotate the scene
  renderer.render(scene, camera);
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);





//////////////////////////////////////////////////////////////////////////////

var container1;
var camera1;
var renderer1;
var scene1;
let police_1;
var police_1_x=20;
var police_1_y=-125;
var police_1_size=700;
var police_up_rotation=4;
var police_down_rotation=1;
var police_left_rotation=5;
var police_right_rotation=2;

function init1() {
  container1 = document.querySelector(".scene1");

  //Create scene
  scene1 = new THREE.Scene();

  const fov1 = 95; // the distance between image and screen
  // const aspect1 = container1.clientWidth/container1.clientHeight;
  const aspect1=1366/607;
  console.log(container1.clientWidth,container1.clientHeight)
  const near1 = 0.1;
  const far1 = 100000;

  //Camera setup
  camera1 = new THREE.PerspectiveCamera(fov1, aspect1, near1, far1);
  camera1.position.set(police_1_x, police_1_y, police_1_size);

  const ambient1 = new THREE.AmbientLight(0x404040, 9); //5 for lightening
  scene1.add(ambient1);

  const light1 = new THREE.DirectionalLight(0xffffff, 5);
  light1.position.set(50, 50, 100);
  scene1.add(light1);

  //Renderer
  renderer1 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer1.setSize(container1.clientWidth, container1.clientHeight);
  renderer1.setPixelRatio(window.devicePixelRatio);

  container1.appendChild(renderer1.domElement);

  //Load Model
  let loader1 = new THREE.GLTFLoader();
  loader1.load("./police/scene.gltf", function (gltf) {
    scene1.add(gltf.scene);
    police_1 = gltf.scene.children[0];
    animate1(); // to show the terrorist at the screen
  });
}

function animate1() {
  requestAnimationFrame(animate1);
  // terrorist1.rotation.z += 0.01; // rotate the scene
  renderer1.render(scene1, camera1);

}

init1();

function onWindowResize1() {
  camera1.aspect = container1.clientWidth/container1.clientHeight;
  camera1.updateProjectionMatrix();
  renderer1.setSize(container1.clientWidth, container1.clientHeight);
}

window.addEventListener("resize", onWindowResize1);
window.addEventListener('keydown', moveSelection);
//var element = document.querySelector(".scene");

//////////////////////////////////////////////////////////////
var container2;
var camera2;
var renderer2;
var scene2;
let police_2;
var police_2_x=15;
var police_2_y=360;
var police_2_size=700;


function init2() {
  container2 = document.querySelector(".scene2");

  //Create scene
  scene2 = new THREE.Scene();

  const fov2 = 95; // the distance between image and screen
  // const aspect2 = container2.clientWidth/container2.clientHeight;
  const aspect2=1366/607;
  console.log(container2.clientWidth,container2.clientHeight)
  const near2 = 0.1;
  const far2 = 100000;

  //Camera setup
  camera2 = new THREE.PerspectiveCamera(fov2, aspect2, near2, far2);
  camera2.position.set(police_2_x, police_2_y, police_2_size);

  const ambient2 = new THREE.AmbientLight(0x404040, 9); //5 for lightening
  scene2.add(ambient2);

  const light2 = new THREE.DirectionalLight(0xffffff, 5);
  light2.position.set(50, 50, 100);
  scene2.add(light2);

  //Renderer
  renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer2.setSize(container2.clientWidth, container2.clientHeight);
  renderer2.setPixelRatio(window.devicePixelRatio);

  container2.appendChild(renderer2.domElement);

  //Load Model
  let loader2 = new THREE.GLTFLoader();
  loader2.load("./police/scene.gltf", function (gltf) {
    scene2.add(gltf.scene);
    police_2 = gltf.scene.children[0];
    animate2(); // to show the terrorist at the screen
  });
}

function animate2() {
  requestAnimationFrame(animate2);
  // terrorist1.rotation.z += 0.01; // rotate the scene
  renderer2.render(scene2, camera2);

}

init2();

function onWindowResize2() {
  camera2.aspect = container2.clientWidth/container2.clientHeight;
  camera2.updateProjectionMatrix();
  renderer2.setSize(container2.clientWidth, container2.clientHeight);
}

window.addEventListener("resize", onWindowResize2)





//////////////////////////////////////////////////////////////////////
function leftArrowPressed() {
  
  //first floor
  if(theif_x <= 32 && (theif_y == 18 || theif_y==11  ||  theif_y==3.5 || theif_y == -3.7 || theif_y==-11.1))
  {
    theif_x++;
    thief.rotation.z = thief_left_rotation;
    
    if( (theif_x==10 || theif_x==11) && (theif_y == 18 || theif_y==11 || theif_y==-11.1) )
    {
      theif_x=14;
    }
    else  if( (theif_x == -14 || theif_x==-13) && (theif_y==3.5 || theif_y==-11.1) )
    {
      theif_x=-10
    } 
    else  if( (theif_x == 18 || theif_x== 19) && (theif_y==3.5 || theif_y==-3.7) )
    {
      theif_x=22;
    } 
    
    if(theif_x== 33)
    {
      thief.rotation.z = thief_down_rotation;
    }
  }
  if((theif_x>=23 && theif_x<=25) && (theif_y ==17 || theif_y==10) 
  || ((theif_x<-23 && theif_x>=-26) && (theif_y ==11 || theif_y==10 || theif_y==2.5))
  || ((theif_x >=27 && theif_x < 30) && (theif_y==2.5|| theif_y==-4.7))   
  || ((theif_x >=-2 && theif_x < 1) && (theif_y==-12.1|| theif_y==-4.7))      )
  {
    theif_x++;
    thief.rotation.z = thief_left_rotation;
    
  }

  camera.position.set(theif_x, theif_y, thief_size);
  console.log(theif_x,theif_y);
  
}

function rightArrowPressed() {
  
  //first floor
  if(theif_x >= -32 && (theif_y == 18 || theif_y==11 || theif_y==3.5 || (theif_y == -3.7 && theif_x>-10 )|| theif_y==-11.1 ))
  {
    theif_x--;
    thief.rotation.z = thief_right_rotation;
    if( (theif_x==14 || theif_x==13) && (theif_y == 18 || theif_y==11 || theif_y==-11.1))
    {
      theif_x=10;
    }
    else if( (theif_x == -10 || theif_x==-11) && (theif_y==3.5 || theif_y==-11.1) )
    {
      theif_x=-14
    } 
    else if( (theif_x == 22 || theif_x==21) && (theif_y==3.5 || theif_y==-3.7 ) )
    {
      theif_x=18
    } 
    
    if(theif_x== -33)
    {
      thief.rotation.z = thief_down_rotation;
    }
  }
  if( ((theif_x>=24 && theif_x<=26) && (theif_y ==17 || theif_y==10)) 
   || ((theif_x<=-23 && theif_x>=-25) && (theif_y ==11 || theif_y==10 || theif_y==2.5 ))
   || ((theif_x >27 && theif_x <= 30) && (theif_y==2.5 || theif_y ==-4.7))
   || ((theif_x >=-1 && theif_x <= 1) && (theif_y==-12.1 || theif_y ==-4.7)) )
  {
    theif_x--;
    thief.rotation.z = thief_right_rotation;
  }
  
  //police_1.rotation.z = police_right_rotation;
  // element.style.left = parseInt(element.style.left) + 5 + 'px';
  camera.position.set(theif_x, theif_y, thief_size);
  //camera1.position.set(office_x, office_y,900);
  console.log(theif_x,theif_y);
  //console.log(theif_x,police_1_x/6.6);
  
}

function upArrowPressed() {
  // element.style.top = parseInt(element.style.top) - 5 + 'px';
  
  //first floor
  if( (theif_x>=23 && theif_x<=26) 
    && (theif_y==18 || theif_y==17 || (theif_y<=11 && theif_y>=9 ) ) )
  {
    theif_y--;
    thief.rotation.z = thief_up_rotation;
    if(theif_y==16)
    {
      theif_y=11;
      thief.rotation.z = thief_down_rotation;
    }
    else if(theif_y==9)
    {
      theif_y=18; // first floor
      thief.rotation.z = thief_down_rotation;
    }
  }
  else if(theif_x>=27 && theif_x<=30)
  {
    if( theif_y == 3.5 || theif_y == 2.5) 
    {
      thief.rotation.z = thief_up_rotation
      if(theif_y==2.5)
      {
        theif_y=-2.7;
        thief.rotation.z = thief_down_rotation;
      }
      else if (theif_y==-4.7 )
      {
        theif_y=3.5; 
        thief.rotation.z = thief_down_rotation;
      }
      theif_y--;
    } 
    else if( theif_y == -3.7)
    {
      theif_y--;
      thief.rotation.z = thief_up_rotation;
    }
    else if (theif_y == -4.7)
    {
      theif_y=3.5;
      thief.rotation.z = thief_down_rotation;
    }
  }
  else if(theif_x>=-2 && theif_x<=1)
  {
    if( theif_y == -3.7 || theif_y == -4.7) 
    {
      thief.rotation.z = thief_up_rotation
      if(theif_y==-4.7)
      {
        theif_y=-10.1;
        thief.rotation.z = thief_down_rotation;
      }
      else if (theif_y==-12.1 )
      {
        theif_y=-3.7; 
        thief.rotation.z = thief_down_rotation;
      }
      theif_y--;
    } 
    else if( theif_y == -11.1)
    {
      theif_y--;
      thief.rotation.z = thief_up_rotation;
    }
    else if (theif_y == -12.1)
    {
      theif_y=-3.7;
      thief.rotation.z = thief_down_rotation;
    }
  }
  

  if(theif_y==9 && (theif_x>=24 && theif_x<=26))
  {
    theif_y=18;
    thief.rotation.z = thief_down_rotation;
  }
  else if( (theif_x<=-23 && theif_x>=-26) && ( theif_y>=1 && theif_y <=11))
  {
    theif_y--;
    thief.rotation.z = thief_up_rotation;
    if(theif_y==9)
    {
      thief.rotation.z = thief_down_rotation;
      theif_y=3.5; // third floor
    }
    if(theif_y==1.5)
    {
      theif_y=11;
      thief.rotation.z = thief_down_rotation;
    }
    
  }


  //police.rotation.z = police_up_rotation;
  camera.position.set(theif_x, theif_y, thief_size);
  //camera1.position.set(office_x, office_y,900);
  console.log(theif_x,theif_y)
  
}

function downArrowPressed() {
  //first floor
  if( ((theif_x>=23 && theif_x<=26) && ( theif_y == 16 || theif_y == 17 || theif_y == 10 ))
      || ( (theif_x<=-23 && theif_x>=-26) && (theif_y ==10 || theif_y ==9 || theif_y ==2.5))
      || ( (theif_x>=27 && theif_x<=30) && (theif_y==-4.7 || theif_y==2.5 ))
      || ( (theif_x>=-2 && theif_x<=1) && (theif_y==-4.7 || theif_y==-12.1 )) 
  )
  {
    theif_y++; 
  }  


  thief.rotation.z = thief_down_rotation;
  //police.rotation.z = police_down_rotation;
  // element.style.top = parseInt(element.style.top) + 5 + 'px';
  camera.position.set(theif_x, theif_y, thief_size);
  //camera1.position.set(office_x, office_y,900);
  console.log(theif_x,theif_y)
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
};

var back=document.images[0];
var pnum=1;
window.setInterval(f,350);
function f()
{
  if(pnum==1)
  {
    pnum=0;
    back.src="img/backG1.jpg"
  }
  else
  {
    back.src="img/backG2.jpg"
    pnum=1;
  }
}

//var police_1_x= 80
//var police_2_x = 40
var bool = 0
var bool1 = 0
var start = 0

function auto() {
  //console.log("i=" + i);
  //console.log(k);
    //console.log(police_1_x);
  //console.log(police.rotation.z)
   //console.log(police1.rotation.z)
   //console.log(police_2_x);
  /*up officer 10:-4
  down officer 6:-18*/
  if (!start) {
    police_1.rotation.z = police_left_rotation;
    police_2.rotation.z = police_left_rotation;
    camera1.position.set(police_1_x*4, police_1_y, police_1_size);
    camera2.position.set(police_2_x*4, police_2_y, police_2_size);
    start = 1
  }
  if (police_1_x== 120) {
    bool = 1
    //police_1.rotation.z = 1.5;
    // console.log(police.rotation.z);
    police_1.rotation.z = police_right_rotation;
  }
  else if (police_1_x== -70) {

    //police_1.rotation.z = -0.5;
    police_1.rotation.z = police_left_rotation;
    //console.log(police.rotation.z);
    bool = 0
  }
  if (police_2_x == 73) {

    bool1 = 1
    police_2.rotation.z = police_right_rotation;
  }
  else if (police_2_x == -260) {
    police_2.rotation.z = police_left_rotation;
    bool1 = 0
  }
  if (!bool)
    police_1_x++;
  else
    police_1_x--;
  if (!bool1)
    police_2_x++;
  else
    police_2_x--;
  camera1.position.set(police_1_x*4, police_1_y, police_1_size);
  camera2.position.set(police_2_x*4, police_2_y, police_2_size);
  //theif_x=police_1_x/8;
  //console.log(theif_x,police_1_x/7);
  //camera.position.set(theif_x, theif_y, thief_size);
  //console.log(theif_x,police_1_x/8);
  
}
window.setInterval(auto, 100)


// function checkdeath() {

//   if ((!(theif_x >= 0 && police_1_x >= 10 && police_1.rotation.z == -0.5)) 
    
//     && ((theif_x >= 0 && theif_x <= 10 && police_1.rotation.z == -0.5 && theif_y == -3) 
//     || (theif_y == -3 && theif_x >= -4 && theif_x < 1 && police_1.rotation.z == 1.5) 
//     || (theif_y== -3 && police_1.rotation.z == 1.5 && theif_x>0 &&theif_x<=9) )) 
//   {
    
//     alert("You lose")
//   }
//   if  (( !(theif_x >= -15 && police_2_x >= -130 && police_2.rotation.z == -0.5)) 

//       && ((theif_x >= -15 && theif_x <= 6    && police_2.rotation.z == -0.5 && theif_y == 9) 
//       || (theif_y  == 9   && theif_x >= -20  && theif_x < -14 && police_2.rotation.z == 1.25) 
//       || (theif_y  == 9   && theif_x >= -130 && police_2.rotation.z == 1.25 && theif_x <=5))) 
//   {
  
//     alert("You lose")
//   }

//   /*if ((i > 0 && i < 10 && police1.rotation.z == -0.5 && j == -3) || (j == -3 && i >= -4 && i < 1 && police1.rotation.z == 1.5))
//     alert("You lose")*/
  
// }

var loseTimer;
function checkdeath() {

  if(theif_y==-3.7 ) /* police_1 floor*/
  {
    if(police_1.rotation.z==police_left_rotation && (theif_x<=17 && theif_x>=(police_1_x/8))) /* 17-door_x)*/
    {
      alert("You lose");
      clearInterval(loseTimer);
    }
  
    else if(police_1.rotation.z==police_right_rotation && (theif_x>=-10 && theif_x<=(police_1_x/8))) /* -10 wall)*/
    {
      alert("You lose");
      clearInterval(loseTimer);
    }
  }
  else if(theif_y == 11)
  {
    if(police_2.rotation.z==police_left_rotation && (theif_x<=10 && theif_x>=(police_2_x/8)))
    {
      alert("You lose");
      clearInterval(loseTimer);
    }
  
    else if(police_2.rotation.z==police_right_rotation && (theif_x>=-33 && theif_x<=(police_2_x/8)))
    {
      alert("You lose");
      clearInterval(loseTimer);
    }
  }
}
loseTimer = setInterval(checkdeath, 700);