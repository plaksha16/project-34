
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var helicopter,helicopterImg
var ground,backgroundImg
 var poor ,poorImg
 var poor2,poor2Img
var food
var packet=[]
var pack


function preload(){
helicopterImg=loadImage('helicopter.png')
  backgroundImg=loadImage('bg3.jpg')
  poorImg=loadImage('poor1.png')
  poor2Img=loadImage('poor2.png')
}


function setup() {
  createCanvas(1200,600);
 angleMode(DEGREES)
  angle=15


  engine = Engine.create();
  world = engine.world;
  
 
  helicopter=new Helicopter(600,100,170,180,angle)




  ground = Bodies.rectangle( 1200,600);
  World.add(world, ground);

  poor = Bodies.rectangle( 600,400,300,50 ,{isStatic:true});
  World.add(world, poor);

  poor2 = Bodies.rectangle(200,400,200,150,{isStatic:true});
  World.add(world, poor2);
 
  
}


function draw() 
{
  background(51);
  image(backgroundImg, 0, 0, width, height);
   
 
  Engine.update(engine)

  image(poorImg,poor.position.x,poor.position.y,300,150);


  image(poor2Img,poor2.position.x,poor2.position.y,200,150);

  helicopter.display()
 



}
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var pack = new Pack(200,200);
    packet.trajectory = [];
   
    //pack.push(packet);
  }
}

function showpacket(packet, index) {
  if (packet) {
    pack.display();
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    pack[packet.length-1].shoot();
  }
}
