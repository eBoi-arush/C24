//SETTING UP PHYSICS ENGINE

//modules
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
var engine;
var world;

//CODE

//variables
var ground1;
var paper1;

var bin1;
var bin2;
var bin3;

//SETUP
function setup(){
  createCanvas(800,300);

  //physics engine
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground1 = new Block(width/2,height,width,5);

  paper1 = new Paper(100,150,15);

  bin1 = new Block(500, 295, 5, 100);
  bin2 = new Block(550, 295, 100, 5);
  bin3 = new Block(600, 295, 5, 100);
}

//DRAW
function draw(){
  background(100);

  ground1.show();
  paper1.show();

  bin1.show();
  bin2.show();
  bin3.show();

  keyPressed();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Body.applyForce(paper1.body, paper1.body.position, {x:85, y:-85});
  }
} 