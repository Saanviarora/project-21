var bullet,wall;
var speed, weight;
var thickness;

function setup(){
    createCanvas(1600,400)
    wall= createSprite(1200,200,thickness,height/2)
    bullet = createSprite(50,200,50,5)
    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)
    bullet.velocityX=speed;
    bullet.shapeColor="olivedrab";
    wall.shapeColor=color(80,80,80);
}
function draw(){
  background(0)
  if(isCollided(bullet,wall)){
    bullet.velocityX=0;
    var D = 0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if(D>10)
{
  wall.shapeColor="red";
} 

if(D<10) {
  wall.shapeColor= "green";
}}
  drawSprites()
}
function isCollided(b,w){
  bulletRightEdge= b.x+b.width;
  wallLeftEdge= w.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}