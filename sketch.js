var bullet,bulletImage,wall,wallImage;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200, 10, 50);
  
  wall=createSprite(1500,200,60,height/2);
 
  
  bullet.velocityX = speed;

 

}

function draw() {
  background(255,255,255);
 
  

  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.*weight*speed*speed/(thickness*thickness*thickness);
  }
  if(damage>10){
    wall.shapeColor="red"
  }
  if(damage<10){
    wall.shapeColor="green"
  }
  
  drawSprites();
}

function collided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}