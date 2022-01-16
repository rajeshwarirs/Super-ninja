var bg;
var ground;
var ninja,ninjaImage;
var count=1;
var tower;
var buildingsGroup;

function preload(){
  bg= loadImage("images/bg.png");
  ninjaImage=loadAnimation("images/ninja.png","images/ninja1.png","images/ninja2.png");
  tower=loadImage("images/building.png");
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);

  ground=createSprite(displayWidth/2-10,displayHeight/2-15,10,10);
  ground.addImage("ground",bg);
  ground.scale=5;
  ground.y=ground.height/8;

  console.log(ground.y);
  console.log(displayHeight);
  ninja=createSprite(displayWidth/2,displayHeight/1.5);
  ninja.addAnimation("ninja",ninjaImage);

  buildingsGroup=new Group();
 
}

function draw() {
  background("blue");

  ground.velocityY=2;

  if(ground.y>(displayHeight)){
    ground.y=ground.height/8;
  }

  if(keyDown("UP_ARROW")){
    ninja.velocityY=-3;
  }
  ninja.velocityY=ninja.velocityY+1;

  if(keyDown("RIGHT_ARROW")){
    ninja.x=ninja.x+3;
  }

  if(keyDown("LEFT_ARROW")){
    ninja.x=ninja.x-3;
  }

    if(buildingsGroup.isTouching(ninja)){
      ninja.velocityY=0;
    }
  
  
spawnBuildings();

  drawSprites();


}
function spawnBuildings(){
  if(frameCount%150===0){

    if(count===1){
    var building = createSprite(displayWidth/2-300,20,30,30);
    building.velocityY=2;
    building.addImage("building",tower);
    count=2;
    }
    else{
      var building = createSprite(displayWidth/2+300,20,30,30);
    building.velocityY=2;
    building.addImage("building",tower);
    count=1;
    }

    

    //building.debug=true;
    building.lifetime=displayHeight;
    buildingsGroup.add(building);

  }
}