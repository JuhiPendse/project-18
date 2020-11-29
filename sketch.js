
var monkey , monkey_running

var bananas ,bananaImage, obstacle, obstacleImage

var FoodGroup, obstacleGroup
 



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
    bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
  
  monkey = createSprite (80,320,20,20)
  monkey.addAnimation("moving" , monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)  
ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
  

  
     score = 0 
}

 

function draw() {
  
  background ('white')
  
  text("Survival Time :" + score, 200, 20)

  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  monkey.collide (ground)
  
    
      if(keyDown("space")&& monkey.y>= 161){
    monkey.velocityY = -12
    


  }
  
    score = score + Math.round(getFrameRate()/60);

 monkey.velocityY = monkey.velocityY +0.8
  
  drawSprites()

spawnbanana()
spawnobstacles()
  
}

function spawnbanana(){
  
  if(frameCount % 60 === 0){
    
    bananas = createSprite(600,215,1,1)
    bananas.y = Math.round(random(215,190))
    bananas.addImage (bananaImage)
    bananas.scale = 0.1
    bananas.velocityX = -3
    }
  
}

function spawnobstacles (){
  
    
  if(frameCount % 60 === 0){
    
    obstacle = createSprite(600,320,1,1)
    obstacle.addImage (obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -7
    }
  
}