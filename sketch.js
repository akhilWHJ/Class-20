var fixedRect, movingRect;
function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(200, 400, 100, 100);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 200, 50, 100);
  movingRect.shapeColor = "green";
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(movingRect.x - fixedRect.x < movingRect.width/2  + fixedRect.width/2 
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2

    && movingRect.y - fixedRect.y < movingRect.width/2  + fixedRect.width/2 
    && fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2
  
  )
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();


}
