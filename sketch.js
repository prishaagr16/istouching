var moving,fix;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50); 
  fix.shapeColor = "red";
  moving = createSprite(500,200,50,50);
  moving.shapeColor = "blue";
}

function draw() {
  background(10);  
  drawSprites();
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if(moving.x - fix.x <= moving.width/2 + fix.width/2
    && fix.x - moving.x <= moving.width/2 + fix.width/2
    && moving.y - fix.y <= moving.height/2 + fix.height/2
    && fix.y - moving.y <= moving.height/2 + fix.height/2 ){
  fix.shapeColor = "yellow";
  moving.shapeColor = "green";
  }
  else{
  fix.shapeColor = "red";
  moving.shapeColor = "blue";
  }
}