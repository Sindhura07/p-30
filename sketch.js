
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	


}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(0,700,3000,15);
  ground2=new Ground(540,550,320,15);
  ground3=new Ground(880,330,240,15);
//first level
  block=new Block(575,540,40,60);
  block2=new Block(555,540,40,60)
  block3=new Block(545,540,40,60);
  block4=new Block(535,540,40,60);
  block5=new Block(525,540,40,60);
  block6=new Block(515,540,40,60);
  block7=new Block(510,540,40,60);
//second level
block8=new Block(555,520,40,60);
block9=new Block(545,520,40,60);
block10=new Block(535,520,40,60);
block11=new Block(525,520,40,60);
block12=new Block(515,520,40,60);
//third level
block13=new Block(545,500,40,60);
block14=new Block(535,500,40,60);
block15=new Block(525,500,40,60);
//one
block16=new Block(535,480,40,60);
//2nd first
block17=new Block(860,300,40,60);
block18=new Block(840,300,40,60);
block19=new Block(920,300,40,60);
block20=new Block(880,300,40,60);
block21=new Block(900,300,40,60);
//2nd second
block22=new Block(880,280,40,60);
block23=new Block(860,280,40,60);
block24=new Block(900,280,40,60);
//3rd third
block25=new Block(880,260,40,60);

circle=new Circle(125,420,30);
sling=new Sling(circle.body,{x:125,y:420})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(31,12,26);
  textSize(40);
  stroke("black");
  strokeWeight(7);
  fill(168,233,202)
  text("Drag the polygon,to hit the blocks 🤘🏿",100 ,100);

//
  textSize(30);
  fill("white")
  text("Press space to get second chance 🤩 ",700 ,650);

  ground.display();
  ground2.display();
  ground3.display();
//
  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 //
 block13.display();
 block14.display();
 block15.display();
 //
 block16.display();
 //
 block17.display();
 //
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 //
 block23.display();
 block24.display();
 //
 block25.display();
 //
 circle.display();
 sling.display();
 
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(circle.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
    distance=int(dist(circle.x,circle.y,block.x,block.y));
}
function keyPressed(){
  
  if(keyCode === 32){
    sling.attach(circle.body);

}
}
