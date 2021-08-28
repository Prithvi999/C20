var bG, issImg;
var astronaut, bathImg, brushImg, drinkImg; 
var eatImg, gymImg,gym1Img, moveImg, sleepImg;
var d1,d2, d3, d4;



function preload(){
  issImg = loadImage("iss.png");
  bathImg= loadAnimation("bath1.png", "bath2.png")
  brushImg= loadImage("brush.png");
  drinkImg= loadAnimation("drink1.png", "drink2.png");
  eatImg= loadAnimation("eat1.png","eat2.png");
  gymImg= loadAnimation("gym1.png","gym2.png","gym11.png", "gym12.png")
  moveImg= loadImage("move.png", "move1.png");
  sleepImg= loadImage("sleep.png");
 
}



function setup() {
createCanvas(400, 310);
bG=createSprite(200, 150, 400, 400)
bG.addImage(issImg);
bG.scale=0.1;
 astronaut = createSprite(200, 150)
 astronaut.addImage(sleepImg);
 astronaut.scale=0.07;
 d1=createSprite(10, 155, 5, 400)
 d2=createSprite(390, 155, 5, 400)
 d3=createSprite(200, 10, 400, 5)
 d4=createSprite(200, 300, 400, 5)

}


function draw() {

background("lightgrey");

astronaut.bounceOff(d1);
astronaut.bounceOff(d2);
astronaut.bounceOff(d3);
astronaut.bounceOff(d4);

d1.visible=false;
d2.visible=false;
d3.visible=false;
d4.visible=false;

if(keyDown(UP_ARROW)){
  brush();
}

if(keyDown(DOWN_ARROW)){
  workout();
}
if(keyDown(LEFT_ARROW)){
  eat();
}
if(keyDown(RIGHT_ARROW)){
  drink();
}
if(keyDown("space")){
  move();
}
if(keyDown("enter")){
  sleep();
  
}

drawSprites();

fill("white");
text("Press Up Arrow To Brush", 20, 30)
text("Press Down Arrow To Workout", 20, 45)
text("Press Left Arrow To Eat", 20, 60)
text("Press Right Arrow To Drink", 20, 75)
text("Press Space Key To Move", 20, 90)
text("Press Enter To Sleep", 20, 105)

}

function brush(){
astronaut.addImage(brushImg);
astronaut.addImage("working", brushImg); 
astronaut.velocityX=0;
astronaut.velocityY=0;  
astronaut.x=200;
astronaut.y=150;
}
function workout(){
  astronaut.addAnimation("working", gymImg);
  astronaut.changeAnimation("working", gymImg); 
  astronaut.velocityX=0;
  astronaut.velocityY=0;  
  astronaut.x=200;
astronaut.y=150;
}
function eat(){

  astronaut.addAnimation("working", eatImg) 
  astronaut.changeAnimation("working", eatImg); 
  astronaut.velocityX=0;
  astronaut.velocityY=0; 
  astronaut.x=200;
astronaut.y=150;   
}
function drink(){
  astronaut.addAnimation("working", drinkImg)
  astronaut.changeAnimation("working", drinkImg);
  astronaut.velocityX=0;
  astronaut.velocityY=0;  
  astronaut.x=200;
astronaut.y=150;  
  }
  function move(){
    astronaut.addImage(moveImg); 
    astronaut.addImage("working", moveImg);
    astronaut.velocityX=3;
    astronaut.velocityY=3;   
  }
  function sleep(){
    astronaut.addImage(sleepImg); 
    astronaut.addImage("working", sleepImg);  
    astronaut.velocityX=0;
    astronaut.velocityY=0;  
    astronaut.x=200;
astronaut.y=150; 
  }

 