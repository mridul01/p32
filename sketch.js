
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var bg;
var umbrella;
var drops =[];
var rand;
var maxDrops =100;
var thunder;
var thunderFrame = 0;

var sound;


function preload(){
    bg = loadImage("weather.jpg");

    thunderbolt1 = loadImage("1.png");
    thunderbolt2 = loadImage("2.png");
    thunderbolt3 = loadImage("3.png");
    thunderbolt4 = loadImage("4.png");

   
}

function setup(){
  engine = Engine.create();
  world = engine.world;
var canvas = createCanvas(1240,595);

umbrella = new Umbrella(620,400);

if(frameCount%150===0){

  for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,1240),random(0,1240)));
  }
}


}

function draw(){
  Engine.update(engine);
   background (bg);

  
 
   rand = Math.round(random(1,4));
   if(frameCount%100===0){
     thunderFrame=frameCount;
     thunder = createSprite(random(10,1200),random(10,30),10,10);
     switch(rand){
       case 1: thunder.addImage(thunderbolt1);
       break;
       case 2: thunder.addImage(thunderbolt2);
       break; 
       case 3: thunder.addImage(thunderbolt3);
       break;
       case 4: thunder.addImage(thunderbolt4);
       break;
       default: break;
     }
     thunder.scale = 0.5
   }

   if(thunderFrame+10===frameCount && thunder){
     thunder.destroy();
   }



umbrella.display();

for (var i=0; i<maxDrops; i++){
  drops[i].display();
  drops[i].updateY();
}

drawSprites();
}   


