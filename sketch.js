var monkey, ground, bananaGroup, obsacleGroup, survivalTime;
var monkeyImage, bananaImage, groundImage, stoneImage;

function preload() {
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  groundImage = loadImage("jungle.jpg");

  stoneImage = loadImage("stone.png");

  bananaImage = loadImage("banana.png");
}

function setup() {
  createCanvas(400, 400);

  ground = createSprite(400, 350, 800, 10);
  ground.velocityX = -4;
  ground.addImage("grass", groundImage);
  ground.scale = 2.3;

  monkey = createSprite(100, 300, 20, 50);
  monkey.addAnimation("monkey", monkeyImage);
  monkey.scale = 0.1;

  bananaGroup = new Group();
  obstacleGroup = createGroup();
  
  invisibleGround=createSprite(200,380,400,30);

  survivalTime = 0;

  stroke = ("black");
  textSize(20);
}

function draw() {
  background(255);

  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  monkey.collide(invisibleGround);

  if (keyDown("space")) {
    monkey.velocityY = -12;
  }

  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8;

  food();
  obstacles();

  drawSprites()
  text("Survival Time: " + survivalTime, 100, 50);
}

function food() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400, 120, 20, 20);
    banana.addImage("Banana", bananaImage);
    banana.scale = 0.05;

    banana.y = random(120, 200);

    banana.velocityX = -7;
    banana.setLifetime = 100;

    bananaGroup.add(banana);
  }
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 75, 20, 20);
    obstacle.addImage("Stone", stoneImage);
    obstacle.scale = 0.1;

    obstacle.y = random(120, 200);

    obstacle.velocityX = -7;
    obstacle.setLifetime = 50;

    obstacleGroup.add(obstacle);
  }
}