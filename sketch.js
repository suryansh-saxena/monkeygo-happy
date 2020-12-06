
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,food,rock
var score
var ground 
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)

  monkey = createSprite(80,315)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(300,350,1500,10)
  ground.velocityX = -4
  ground.x = ground.width /2;
  console.log(ground.x)
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
background(180);
  
  survivalTime=Math.ceil(frameCount/frameRate())
  if(ground.x<0){
     ground.x = ground.width/2
     }
  console.log(monkey.y)
   if(keyDown("space")&& monkey.y >= 314.3) {
        monkey.velocityY = -15;
        
    }
  
  
  
 
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  spawnFood();
  spawnObstacles();
 drawSprites(); 
  // stroke("black");
  textSize(20);
  fill("black");
  
  text("survival Time "+ survivalTime,100,50)
}
function spawnFood(){
  if (frameCount % 80 === 0) {
    var food = createSprite(600,240,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -4;
    
     //assign lifetime to the variable
    food.lifetime = 400;
    
    //adjust the depth
    food.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
  FoodGroup.add(food)
}
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,310,40,10);
   obstacle.velocityX = -4
   obstacle.addImage(obstacleImage)
   
    //generate random obstacles
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}



