var tom, tomImg, tomImg2,tomImg3;
var garden, gardenImg;
var jerry, jerryImg ,jerryImg2, jerryImg3, jerryImg4;


function preload() {
    tomImg = loadAnimation("images/cat1.png");
    tomWalk = loadAnimation("images/cat2.png","images/cat3.png" );
    tomStand = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    jerryImg = loadAnimation("images/mouse1.png");
    jerryMock = loadAnimation("images/mouse2.png", "images/mouse3.png")
    jerryImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    garden = createSprite(-100,100);
    garden.addImage(gardenImg);
    garden.scale = 1.9;
    
    tom = createSprite(750,550);
    tom.addAnimation("Tom sitting",tomImg);
    tom.scale = .1;

    jerry = createSprite(60,550);
    jerry.addAnimation("Jerry gift",jerryImg);
    jerry.scale = .1;

    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(jerry.x - tom.x < tom.width/2 + jerry.width/2){
        jerry.addAnimation("Tom&Jerry",jerryImg3);
        tom.addAnimation("Tom standing",tomStand)
    }



    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("Jerry mocking",jerryMock);
        tom.addAnimation("Tom sitting",tomWalk);
        tom.velocityX = - 2;
    }
}

