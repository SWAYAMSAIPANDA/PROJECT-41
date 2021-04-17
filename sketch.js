var boy,boyImage
var thunder,thunderImage

function preload(){
    boyImage = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png");
    thunderImage = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
}

function setup(){
   createCanvas(400,800);
   boy = createSprite(200,600);
   boy.addAnimation("boy",boyImage);
   thunder = createSprite(20,30);
   thunder.addAnimation("thunder",thunderImage); 
}

function draw(){
   background(0);
   drawSprites();
}   

