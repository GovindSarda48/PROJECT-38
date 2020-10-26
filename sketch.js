/*var FixedRect,MovingRect;

function setup() {
  createCanvas(800,400);
  MovingRect=createSprite(400, 200, 80, 50);
  MovingRect.shapeColor="green";
  FixedRect=createSprite(600,200,30,80);
  FixedRect.shapeColor="green";

}

function draw() {
  background(255,255,255);

  MovingRect.y=mouseY;
  MovingRect.x=mouseX;
  
  if(MovingRect.x-FixedRect.x<MovingRect.width/2+FixedRect.width/2 &&FixedRect.x-MovingRect.x<MovingRect.width/2+FixedRect.width/2 &&MovingRect.y-FixedRect.y<MovingRect.height/2+FixedRect.height/2&&FixedRect.y-MovingRect.y<MovingRect.height/2+FixedRect.height/2){
    MovingRect.shapeColor="red";
    FixedRect.shapeColor="red";

  }



  else{
    MovingRect.shapeColor="green";
    FixedRect.shapeColor="green";
  }


  drawSprites();
}*/

/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var elephant,lion,ground;

var backgroundIMG;

var gameState = 0;
var PLAY =1;
var END = 2;
var START = 0;

var elephantHealth = 100;
var lionHealth = 100;


var lionSAavail = 1;
var elephantSAavail = 1;

var k;
function preload(){
backgroundIMG = loadImage("jungle.jpg");

thunderIMG  = loadImage("thunder.jpg");
}

function setup(){

  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

gameState = START;
 k =0;

  ground = new Ground(300,590,600,20);
lion = new Lion(150,490,200,200);
elephant = new Elephant(450,490,200,200);

//thunder = new Thunder(250,300,120,500);

}

function draw(){
  if(gameState===PLAY){
    background(255);
    Engine.update(engine);
   
    ground.display();
    elephant.display();
    lion.display();
    
    /*if(gameState===PLAY){
      thunder = new Thunder(250,300,120,500);
    for(var i = 0; i<=1000;i++){
      
        k++;
        console.log(k);

        if(k<=8000){
          thunder.display();
        }
    
        if(k>8000){
          thunder = null;
        
        }
       
      }
      
    }

    if(isTouching(lion,elephant)){
    lionHealth = lionHealth - 10;
    }
    

    
    fill("red");
     strokeWeight(2);
     stroke("red");
     textSize(20);
    text("HEALTH :" + lionHealth,25,100);
    text("HEALTH :" + elephantHealth,450,100);

    //text("SPECIAL ABILITY :" + lionSAavail,25,150);
    text("SPECIAL ABILITY :" + elephantSAavail,400,150);
  }
 

  if(gameState === START){
    background(0);
     fill("red");
     strokeWeight(2);
     stroke("red");
     textSize(15);
     text("THERE IS A DISPUTE BETWEEN A LION AND AN ELEPHANT..",50,100);
     text("HELP THE ELEPHANT WIN THE FIGHT, HOPE YOU CAN DO IT! ",50,150);
     text("USE RIGHT AND LEFT ARROW KEYS TO CONTROL THE ELEPHANT! ",50,200);
     text("ALSO , THERE IS A SPECIAL ABILITY YOU CAN USE BY CLICKING ON 'G' ",50,250);
     text("BEST OF LUCK !",50,300);
     fill(random(0,255),random(0,255),random(0,255));
     noStroke();
     textSize(20);
     text("PRESS SPACE TO START",150,500);

    
  }
}

function keyPressed(){

  if(gameState ===PLAY){
  if(keyCode === RIGHT_ARROW){
    elephant.right();
  }

  if(keyCode === LEFT_ARROW){
    elephant.left();
  }

  /*if(keyCode === LEFT_ARROW && isTouching(elephant.body,lion.body)){
    lionHealth = lionHealth-10;
    elephant.left();
  }


  if(keyCode === 65){
    lion.left();
  }

  if(keyCode === 68){
    lion.right();
  }

}

if(gameState === START && keyCode === 32){
  gameState = PLAY;
}


}

function isTouching(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2 &&obj2.x-obj1.x<obj1.width/2+obj2.width/2 
    &&obj1.y-obj2.y<obj1.height/2+obj2.height/2
    &&obj2.y-obj1.y<obj1.height/2+obj2.height/2){
    return true;

  }



  else{
    return false;
  }

}*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var building = [];
var gameState = "serve";
var chance = 2;

function preload(){
  //block_img = loadImage()
  hmm = loadImage("ik.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  var canvas = createCanvas(600,600);

  ninja1 = new Ninja(100,200,70,200);

  ground1 = new Ground(300,590,6400,20);
  
  building1= new Building(100,500,120,200);
  building2= new Building(350,400,120,400);
  building3= new Building(600,350,120,500);
  building4= new Building(850,425,120,350);
  building5= new Building(1100,375,120,450);
  building6= new Building(1350,450,120,300);

  flag1 = new Flag(1700,550,100,100);
  start = new Building(0,300,20,600);
  Engine.run(engine);
}

function draw(){
  background(0);

  Engine.update(engine);
  if(gameState==="serve"){
    background(0);
  textSize(20);
  fill(255, 0, 0);

 
  text("PRESS  'S'  TO START ",300,300);
  }

  

  if(gameState==="play"){
  ninja1.display();
  ninja1.key();


 
    

 if(ninja1.body.position.x>130 && ninja1.body.position.x<1360){
  if( ninja1.body.position.y>520){
    chance--;
   
      Matter.Body.setPosition(ninja1.body,{x:110,y:200})

  }
}



if(chance===0){
  gameState= "endA";
}


if(ninja1.body.position.x>1800){
  gameState = "endB";
}  
textSize(20);
fill(0,0,255);
text("CHANCES AVAILABLE: " + chance,camera.position.x,50);
 

  
  camera.position.x =  ninja1.body.position.x;
   building1.display();
   building2.display();
   building3.display();
   building4.display();
   building5.display();
   building6.display();
   ground1.display();
   //start.display();
   flag1.display();
   /*if(ninja1.body.position.y<15){
     Matter.Body.setPosition(ninja1.body,{x:ninja1.body.position.x,y:525})
   }*/

  }

  if(gameState === "endA"){
    background(0);
    textSize(20);
    stroke("blue");
    text("BETTER LUCK NEXT TIME",100,200);
  }

  if(gameState === "endB"){
   background(hmm);
    /*textSize(20);
    stroke("blue");*/
    //text("BETTER LUCK NEXT TIME",100,200);
  }



  
}

function keyPressed(){
  if(gameState==="play"){
  if(keyCode === RIGHT_ARROW){

    ninja1.body.position.x+=10;
  }

  if(keyCode === UP_ARROW){

    ninja1.body.position.y-=10;
  }

  if(keyCode === DOWN_ARROW){

    ninja1.body.position.y+=10;
  }

  if(keyCode === LEFT_ARROW){

    ninja1.body.position.x-=10;
  }
}

if(gameState === "serve" && keyCode === 83){
gameState = "play";

}
}



































































