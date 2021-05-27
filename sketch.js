const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground,ground2;
var slingshot;
var stoneObject;
var treeObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function preload()
{
getBackgroundImg();
}

function setup() 
{
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,30);
	mango8=new Mango(1140,150,30);
	mango9=new Mango(1100,230,30);
	mango10=new Mango(1200,200,30);
	mango11=new Mango(1120,50,30);
	mango12=new Mango(900,160,30); 
  ground = new Ground(600,height,1200,250);
  ground2 = new Ground(150,505,500,570);
  treeObject=new Tree(1050,580);
  stoneObject = new Stone(200,50,30);
  slingshot = new SlingShot(stoneObject.body,{x : 200, y : 50});
 
  
}

function draw() 
{
  if(backgroundImg) background(backgroundImg);
    Engine.update(engine);
  
    treeObject.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
    ground.display();
    ground2.display();
    slingshot.display();
    stoneObject.display();

  detectollision(stoneObject,mango1);
	detectollision(stoneObject,mango2);
	detectollision(stoneObject,mango3);
	detectollision(stoneObject,mango4);
	detectollision(stoneObject,mango5);
	detectollision(stoneObject,mango6);
	detectollision(stoneObject,mango7);
	detectollision(stoneObject,mango8);
	detectollision(stoneObject,mango9);
	detectollision(stoneObject,mango10);
	detectollision(stoneObject,mango11);
	detectollision(stoneObject,mango12);
	
   
}

function mouseDragged()
{
  Matter.Body.setPosition(stoneObject.body,{x : mouseX , y : mouseY});
}

function mouseReleased()
{
  slingshot.fly()
}
function keyPressed() 
{
  if(keyCode===32)
  {
   slingshot.attach(stoneObject.body);
  }
}

function detectollision(lstone,lmango)
{
	var mangoBodyPosition=lmango.body.position
	var stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		push()
		Matter.Body.setStatic(lmango.body,false);
		pop()
	}
}

async function getBackgroundImg()
{
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson=await response.json()
  var dt =responseJson.datetime;
  console.log(responseJson)
  var hour=dt.slice (11,13)
  if(hour>=06 && hour<=19)
  { bg = "bg.png"; 
} 
  else
{
     bg = "bg2.jpg"; }
     backgroundImg = loadImage(bg);
}
