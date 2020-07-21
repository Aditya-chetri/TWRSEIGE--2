const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1400,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(700, 580, 1400, 30);
  stand1 = new Stand(1090,400,500,20);
  
 
  
  block1 = new Block(1000,365,30,40);
  block2 = new Block(1030,365,30,40);
  block3 = new Block(1060,365,30,40);
  block4 = new Block(1090,365,30,40);
  block5 = new Block(1120,365,30,40);
  block6 = new Block(1150,365,30,40);
  block7 = new Block(1180,365,30,40);
  
  block8 = new Block(1030,325,30,40);
  block9 = new Block(1060,325,30,40);
  block10 = new Block(1090,325,30,40);
  block11 = new Block(1120,325,30,40);
  block12 = new Block(1150,325,30,40);
  
  block13 = new Block(1060,295,30,40);
  block14 = new Block(1090,295,30,40);
  block15 = new Block(1120,295,30,40);
  
  block16 = new Block(1090,265,30,40);

  
  
  polygon = Bodies.circle(380,400,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:400,y:400});

}
function draw() {
  background(56,44,44); 
  ground.display();
  stand1.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
      Matter.Body.setPosition(this.polygon,{x:380,y:400});
      
  }
}