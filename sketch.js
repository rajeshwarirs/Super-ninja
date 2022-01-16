var bg;
var ground;
var ninja,ninjaImage,ninjaImage2;
var count=1;
var tower;
var buildingsGroup, invisibleGroup, gemsGroup;
var gem1, gem2, gem3,gem4;

function preload(){
  bg= loadImage("images/bg.png");

  ninjaImage=loadAnimation("images/ninja.png","images/ninja2.png","images/ninja3.png");
  ninjaImage2=loadAnimation("images/flippedNinja.png","images/flippedNinja2.png","images/flippedNinja3.png");

  tower=loadImage("images/building.png");

  gem1=loadImage("images/gemR.png");
  gem2=loadImage("images/gemB.png");
  gem3=loadImage("images/gemG.png");
  gem4=loadImage("images/gemY.png");
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
  invisibleGroup= new Group();
  gemsGroup= new Group();
 
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

    if(invisibleGroup.isTouching(ninja)&&count===2){
      ninja.velocityY=0;
      ninja.addAnimation("flippedNinja",ninjaImage2);

    }
    if(invisibleGroup.isTouching(ninja)&&count===1){
      ninja.velocityY=0;
      ninja.addAnimation("flippedNinja",ninjaImage);
    }

    if(gemsGroup.isTouching(ninja)){
      gemsGroup.destroyEach();
    }
  
  
spawnBuildings();
spawnGems();

  drawSprites();


}
function spawnBuildings(){
  if(frameCount%150===0){

    if(count===1){
    var building = createSprite(displayWidth/2-300,20,30,30);
    building.velocityY=2;
    building.addImage("building",tower);

    var invisibleTop = createSprite(displayWidth/2-325,-120,80,80);
    invisibleTop.velocityY=2;
    invisibleTop.visible=false;

    count=2;
    }
    else{
      var building = createSprite(displayWidth/2+300,20,30,30);
    building.velocityY=2;
    building.addImage("building",tower);

    var invisibleTop = createSprite(displayWidth/2+275,-120,80,80);
    invisibleTop.velocityY=2;
    invisibleTop.visible=false;
    
    count=1;
    }

  

    building.depth = ninja.depth;
    ninja.depth = ninja.depth + 1;

    //building.debug=true;
    //invisibleTop.debug=true;

    building.lifetime=displayHeight;
    buildingsGroup.add(building);
    
    invisibleGroup.add(invisibleTop)

  }
}

  function spawnGems(){
    if(frameCount%150===0){
      if(count===1){
        var gem=createSprite(displayWidth/2+275,-120,80,80);
        gem.velocityY=2;

        var rand = Math.round(random(1,4));
        switch(rand){
          case 1:gem.addImage("red",gem1);
          break;

          case 2:gem.addImage("blue",gem2);
          break;

          case 3:gem.addImage("green",gem3);
          break;

          case 4:gem.addImage("yellow",gem4);
          break;

            default:break;

        }
      }
      else{
        var gem=createSprite(displayWidth/2-325,-120,80,80);
        gem.velocityY=2;

        var rand = Math.round(random(1,4));
        switch(rand){
          case 1:gem.addImage("red",gem1);
          break;

          case 2:gem.addImage("blue",gem2);
          break;

          case 3:gem.addImage("green",gem3);
          break;

          case 4:gem.addImage("yellow",gem4);
          break;

            default:break;
        }
      }
      gem.scale=0.75;

      gemsGroup.add(gem);
    }
  
}