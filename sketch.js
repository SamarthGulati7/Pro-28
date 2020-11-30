
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var engine,world;
var ground1;
var boy;
var stone1;
var tree1;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
  world = engine.world;

  ground1= new Ground(600,690,1200,20);
  stone1= new Stone(50,650);
  launcher1= new Launcher(stone1.body,{x:120,y:535});
  tree1= new Tree(900,400);
  mango1 = new Mango(800,200,50);
  mango2 = new Mango(950,200,50);
  mango3 = new Mango(750,350,50);
  mango4 = new Mango(850,350,50);
  mango5 = new Mango(1000,350,50);
}


function draw() {
  Engine.update(engine);	
  background("lightgrey");

  imageMode(CENTER);
  image(boy,150,610,100,300);

  ground1.display();
  stone1.display();
  launcher1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  
}

function mouseDragged(){

  Matter.Body.setPosition(stone1.body,{x: mouseX,y: mouseY});
  
  }
  
  function mouseReleased(){
  
  launcher1.fly();  
  
  }
  
  function keyPressed(){
  
  if(keyCode===32){
  
  launcher1.attach(stone1.body);
  
  }
  }

  function detectCollision(Mango,Stone){

  mangoBodyPosition= Mango.body.position;
  stoneBodyPosition= Stone.body.position; 
  
  var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=Mango.r+Stone.r){
  
  Matter.Body.setStatic(Mango.body,false);
  
  }
  }

