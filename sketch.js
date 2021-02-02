var fixedRect, movingRect;
  
var ob1, ob2, ob3, ob4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = 'green';
  movingRect = createSprite(600, 200, 80, 50);
  movingRect.shapeColor = 'green';

  ob1 = createSprite(100,100, 50,50);
  ob2 = createSprite(200,100,50,50);
  ob3 = createSprite(500,50,50,50);
  ob4 = createSprite(500,350,50,50);
 
 
  ob1.shapeColor = "purple";
  ob2.shapeColor = "purple";
  ob3.shapeColor = "purple";
  ob4.shapeColor = "purple";

  ob3.velocityY = 5;
  ob4.velocityY = -5;


}

function draw() {
  background(0); 

  bounceOff(ob3,ob4);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(Audi(movingRect, ob1)){
   movingRect.shapeColor = "blue";
   ob1.shapeColor = "blue";
   //fixedRect.visible = false;
  }
  else
  {
    movingRect.shapeColor = "red";
    ob1.shapeColor = "red";
    //fixedRect.visible = true;
  }  
  
  drawSprites();
}
