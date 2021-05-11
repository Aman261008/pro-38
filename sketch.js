var snowImg,snow,snowImage;

function setup() {
  createCanvas(800,400);
  
}
function preload(){
snowImg=loadImage("snow3.jpg");
snowImage=loadImage("snow4.webp");
}
function draw() {
  background(snowImg);
  if(frameCount%10===0){
     snow=createSprite(random(0,800),10, 50, 50);
     snow.addImage(snowImage);
     snow.velocityY=2;
     snow.scale=0.1;
  }  
  drawSprites();
}